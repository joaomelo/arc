import { startLoading, stopLoading } from '@/core/load';
import { bindDocs } from '../services';

function bindCommon (config, adapter, mutation) {
  const bindCallback = docs => {
    startLoading(config.collection);
    const items = docs.map(doc => adapter(doc));
    mutation(items);
    stopLoading(config.collection);
  };

  bindDocs(config, bindCallback);
};

export { bindCommon };
