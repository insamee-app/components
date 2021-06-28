export const clickOutside = {
  bind(elem, binding) {
    // Used to prevent clickOutsideHandle to fire if mousedown started on element
    let startedSource = false

    elem.clickStarted = (e) => {
      if (elem.contains(e.target)) {
        startedSource = true
      }
    }

    elem.clickOutsideHandler = (e) => {
      if (!elem.contains(e.target) && binding.value && !startedSource) {
        binding.value(e)
      }
      startedSource = false
    }

    document.addEventListener('mousedown', elem.clickStarted)
    document.addEventListener('mouseup', elem.clickOutsideHandler)
  },
  unbind(elem) {
    document.removeEventListener('mouseup', elem.clickOutsideHandler)
    document.removeEventListener('mousedown', elem.clickOutsideHandler)
  },
}
