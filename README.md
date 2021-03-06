# Components

This lib a set of components design for the app from **InsameeApp**.

## Tech Stack

**Client:** Nuxtjs, Nuxt/Components, TailwindCSS, Storybook

## Installation

This project uses `pnpm`.

```bash
    # install dependencies
    pnpm

    # develop components
    pnpm storybook

    # build storybook website
    pnpm build

    # lint files
    pnpm lint
```

This project is designed to be used in Nuxtjs project using Nuxt/Components and TailwindCSS. In fact, it uses the _library authors_ feature from Nuxt/Components.

To setup in a project, add the package to the build modules in your `nuxt.config.js`:

```js
export default {
  buildModules: ['@insamee-app/components/nuxt'],
}
```

Then, you have to tell to TailwindCSS to purge these components in your `tailwind.config.js`:

```js
purge: {
    content: ['node_modules/@insamee-app/components/src/components/**'],
}
```

add plugin for `VScrollLock` in `plugins/vue-scroll-lock.js` :

```js
import Vue from 'vue'
import VScrollLock from 'v-scroll-lock'

Vue.use(VScrollLock)
```

add plugin for `Vuelidate` in `plugins/vuelidate.js` :

```js
import Vue from 'vue'
import Vuelidate from 'vuelidate'

Vue.use(Vuelidate)
```

and in `nuxt.config.js` :

```js
export default {
  plugins: ['~/plugins/vue-scroll-lock.js', '~/plugins/vuelidate.js'],
}
```

and add a minimal setup for colors:

```js
colors: {
    'transparent': 'transparent',
    'primary': {
      base: '#0073E6',
      dark: '#0049B3',
      light: '#63A1FF',
    },
    'secondary': {
      base: '#4FBE8E',
      dark: '#088D60',
      light: '#83F1BE',
    },
    'grey': {
      base: '#839199',
      dark: '#142130',
      light: '#DCDEE4',
    },
    'grey-secondary': {
      base: '#889490',
      dark: '#182C25',
      light: '#DEE2E1',
    },
    'white': {
        base: '#FCFDFD',
        dark: '#F7F7F7',
    },
    'black': '#000517',
    'negative': '#F33C3C',
    'positive': '#63ED92',
  },
  extend: {
    animation: {
      'bounce-slow': 'bounce 2s ease-in-out infinite',
    },
},
```

You will have an access to `@linusborg/vue-simple-portal` and `focus-trap-vue` in your components.

## FAQ

You can use the **discussions** tab to ask for help or to suggest an idea.

## Authors

- [@barbapapazes](https://www.github.com/barbapapazes)
