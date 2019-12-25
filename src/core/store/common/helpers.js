import { startLoad, stopLoad } from '@/load';
import { bindDocs } from '@/services';

function bindCommon (config, adapter, mutation) {
  const bindCallback = docs => {
    startLoad(config.collection);
    const items = docs.map(doc => adapter(doc));
    mutation(items);
    stopLoad(config.collection);
  };

  bindDocs(config, bindCallback);
};

export { bindCommon };
