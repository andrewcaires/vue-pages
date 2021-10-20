[![npm](https://img.shields.io/npm/v/@andrewcaires/vue-pages?color=blue&logo=npm)](https://www.npmjs.com/package/@andrewcaires/vue-pages)
[![downloads](https://img.shields.io/npm/dt/@andrewcaires/vue-pages?color=blue)](https://www.npmjs.com/package/@andrewcaires/vue-pages)
[![size](https://img.shields.io/github/repo-size/andrewcaires/vue-pages?color=blue)](https://github.com/andrewcaires/vue-pages)
[![language](https://img.shields.io/github/languages/top/andrewcaires/vue-pages?color=blue)](https://github.com/andrewcaires/vue-pages)
[![commit](https://img.shields.io/github/last-commit/andrewcaires/vue-pages?color=blue&logo=github)](https://github.com/andrewcaires/vue-pages)
[![license](https://img.shields.io/github/license/andrewcaires/vue-pages?color=blue)](https://github.com/andrewcaires/vue-pages/blob/main/LICENSE)

# vue-pages

VueJS plugin for creating pages with dynamic layouts

## Installation

`npm i @andrewcaires/vue-pages`

## Usage

```js
import VuePages, { VuePagesOptions } from '@andrewcaires/vue-pages';
import Vue from 'vue';
import VueRouter from 'vue-router';

import Home from './pages/Home.vue';
import About from './pages/About.vue';

import DefaultLayouts from './layouts/DefaultLayouts.vue';

Vue.use(VueRouter);

Vue.use<VuePagesOptions>(VuePages, {
  pages: {
    Home,
    About,
  },
  layouts: {
    DefaultLayouts,
    index: DefaultLayouts,
  },
  notfound: Home,
});

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: Vue.$pages,
});
```

### Links

*  [Docs](https://github.com/andrewcaires/vue-pages#readme)
*  [GitHub](https://github.com/andrewcaires/vue-pages)
*  [npm](https://www.npmjs.com/package/@andrewcaires/vue-pages)

## License

*  [MIT](https://github.com/andrewcaires/vue-pages/blob/main/LICENSE)
