import Vue from 'vue';
import { isProduction } from '@/shared/meta';

export function initUi ({ el, root, globals }) {
  // don't warn about dev version in development mode.
  Vue.config.productionTip = isProduction();

  const app = new Vue({
    ...globals,
    render: h => h(root)
  });

  app.$mount(el);
}
