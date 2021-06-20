# Components

This lib a set of components design for the app from **insamee**.

## Tech Stack

**Client:** Nuxtjs, Nuxt/Components, TailwindCSS, Storybook

## Installation

This project uses `yarn`.

```bash
    # install dependencies
    yarn

    # develop components
    yarn storybook

    # build storybook website
    yarn build

    # lint files
    yarn lint
```

This project is designed to be used in Nuxtjs project using Nuxt/Components and TailwindCSS. In fact, it uses the _library authors_ feature from Nuxt/Components.

To setup in a project, add the package to the build modules in your `nuxt.config.js`:

```js
export default {
  buildModules: ['@nuxt/components', 'insamee-components/nuxt'],
}
```

Then, you have to tell to TailwindCSS to purge these components in your `tailwind.config.js`:

```js
purge: {
    content: ['node_modules/insamee-components/src/components/**'],
}
```

and add a minimal setup for colors:

```js
colors: {
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
    'white': '#FCFDFD',
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

## FAQ

You can use the **discussions** tab to ask for help or to suggest an idea.

## Authors

- [@barbapapazes](https://www.github.com/barbapapazes)
