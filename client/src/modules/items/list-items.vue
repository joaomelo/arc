<template>
  <div>
    <div v-if="items.length > 0">
      <component
        :is="view"
        v-for="item in items"
        :key="item.id"
        :item="item"
        class="mt-2"
      />
    </div>
    <p v-else>
      {{ $t("items.no-items-found") }}
    </p>
  </div>
</template>

<script>
export default {
  name: 'ListItems',
  props: {
    items: {
      type: Array,
      required: true
    },
    view: {
      type: Object,
      required: true
    }
  }
};
</script>
