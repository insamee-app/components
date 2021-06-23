import { join } from 'path'

export default function () {
  const { nuxt } = this

  // Make sure components is enabled
  if (!nuxt.options.components) {
    throw new Error(
      'please set `components: true` inside `nuxt.config` and ensure using `nuxt >= 2.13.0`'
    )
  }

  this.nuxt.hook('components:dirs', (dirs) => {
    const dirsNames = ['/atoms/icons', '/atoms', '/molecules', '/organisms', '/templates']
    dirsNames.forEach((dir) => {
      dirs.push({
        path: join(__dirname, '../src/components' + dir),
        prefix: 'insamee',
      })
    })
  })
}
