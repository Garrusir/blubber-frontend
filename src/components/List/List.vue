<template>
    <div class="cards-wrapper">
      <slot></slot>
    </div>
</template>

<script>
    export default {
        name: "List"
    }
</script>

<style scoped>
  .cards-wrapper {
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    margin: 16px;
  }
</style>