<template>
  <PageItems
    :title="$tc('arcs.arc', 2)"
    :items="arcs.items"
    @add="add"
  >
    <template v-slot:renderItem="{ item }">
      <CardArc
        class="mt-2"
        :item="item"
      />
    </template>
  </PageItems>
</template>

<script>
import { PageItems } from '@/modules/items';
import { arcs } from '../domain';
import CardArc from './card-arc';

export default {
  name: 'PageArcs',
  components: { PageItems, CardArc },
  data () {
    return {
      CardArc,
      arcs
    };
  },
  methods: {
    add () {
      this.$router.push({ name: 'arc-add' });
    }
  }
};
</script>
