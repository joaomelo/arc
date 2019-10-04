import { p } from '@/components/helpers/props.js';
import ItemCard from '@/components/item/item-card.vue';
import ItemCardDetail from '@/components/item/item-card-detail.vue';

export default {
  components: {
    ItemCard,
    ItemCardDetail
  },
  props: {
    item: p(Object)
  }
};
