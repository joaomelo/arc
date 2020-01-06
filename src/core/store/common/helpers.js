import { startLoadTask, stopLoadTask } from '@/core/load';
import { bindDocs } from '../services';

function bindCommon (config, adapter, mutation) {
  const bindCallback = docs => {
    startLoadTask(config.collection);
    const items = docs.map(doc => adapter(doc));
    mutation(items);
    stopLoadTask(config.collection);
  };

  bindDocs(config, bindCallback);
};

export { bindCommon };
