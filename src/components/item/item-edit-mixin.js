import { p } from '@/components/helpers/props.js';
import ItemEdit from '@/components/item/item-edit.vue';
import TextControl from '@/components/base/text-control.vue';

export default {
  components: {
    ItemEdit,
    TextControl
  },
  props: {
    itemId: p(String)
  }
};
