<template>
  <div class="container-fluid h-100">
    <div class="row h-100">
      <div class="col h-100">
        <slot />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'BaseLayout'
};
</script>
