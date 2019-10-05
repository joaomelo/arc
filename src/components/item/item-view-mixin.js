import { p } from '@/components/helpers/props.js';
import ItemView from '@/components/item/Item-view.vue';
import ItemViewDetail from '@/components/item/Item-view-detail.vue';

export default {
  components: {
    ItemView,
    ItemViewDetail
  },
  props: {
    item: p(Object)
  }
};
