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
    primary: {
        dark: '#7B0000',
        base: '#B20000',
        light: '#EC492C',
    },
    grey: {
        dark: '#6E5353',
        base: '#B59B9B',
        light: '#EBE0E0',
    },
    white: '#FCFCFC',
    black: '#221B1B',
},
```

## FAQ

You can use the **discussions** tab to ask for help or to suggest an idea.

## Authors

- [@barbapapazes](https://www.github.com/barbapapazes)
