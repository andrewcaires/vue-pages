import Vue, { ComponentOptions, VueConstructor } from 'vue';
import { RouteConfig, RouteMeta } from 'vue-router';

import VueLayout from './VueLayout.vue';

export interface VuePagesOptions {
  pages?: VuePagesConstructor;
  layouts?: VuePagesConstructor;
  notfound?: VueConstructor;
}

export type VuePagesConstructor = { [key: string]: VueConstructor }

let installed = false;

export class VuePages {

  private options: VuePagesOptions;

  constructor(options: VuePagesOptions = {}) {

    this.options = options;
  }

  pages(): Array<RouteConfig> {

    const routes: Array<RouteConfig> = [];

    if (this.options.pages) {

      Object.entries(this.options.pages).forEach(([key, value]) => {

        routes.push(this.route(key, value));
      });

      if (this.options.notfound) {

        const component = this.route('', this.options.notfound);

        routes.push({ path: '*', redirect: component.path });
      }
    }

    return routes;
  }

  layouts(): VuePagesConstructor {

    return this.options.layouts || {};
  }

  private parse(component: VueConstructor): ComponentOptions<Vue> {

    return (component as any).options as ComponentOptions<Vue>;
  }

  private route(name: string, component: VueConstructor): RouteConfig {

    const options = this.parse(component);

    name = options.name || name;

    const meta = options.meta || {};
    const path = meta.path || '/' + name;

    return { name, component, meta, path };
  }

  static install(vue: any, options: VuePagesOptions = {}): void {

    if (installed) { return; } else { installed = true; }

    const plugin = new VuePages(options);

    Vue.$pages = plugin.pages();
    Vue.prototype.$pages = Vue.$pages;

    Vue.$layouts = plugin.layouts();
    Vue.prototype.$layouts = Vue.$layouts;

    Vue.component('VueLayout', VueLayout);
  }
}

declare module 'vue/types/vue' {
  interface Vue {
    $pages: Array<RouteConfig>;
    $layouts: VuePagesConstructor;
  }
  interface VueConstructor {
    $pages: Array<RouteConfig>;
    $layouts: VuePagesConstructor;
  }
}

declare module 'vue/types/options' {
  interface ComponentOptions<V> {
    meta?: RouteMeta;
  }
}

export { VueLayout };

export default VuePages;
