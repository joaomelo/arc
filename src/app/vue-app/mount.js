import { createApp } from 'vue';

export function mountVue (config) {
  const { element, root } = config;

  const app = createApp(root);
  app.mount(element);
}
