<template>
  <div class="card mt-3">
    <div class="card-body">
      <slot />
      <a
        href="#"
        class="btn btn-primary"
      >edit</a>
      <a
        href="#"
        class="btn btn-secondary"
      >delete</a>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ItemCard'
};
</script>
