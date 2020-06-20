<template>
  <a-button class="btn" :type="interest.isChosen ? 'primary' : 'dashed'" @click="$emit('changeInterestState', interest)">
    {{ interest.title }}
  </a-button>
</template>
<script>
export default {
  name: "Interest",
  props: {
    interest: Object
  }
};
</script>
<style>
.btn {
  margin-bottom: 10px;
}
</style>
