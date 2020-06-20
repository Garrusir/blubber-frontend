<template>
  <div class="comment">
    <div class="comment__user">
      <a-icon type="user" />
    </div>
    <div class="comment__content">
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi aut dolorem earum eius excepturi hic odio quia quo
      recusandae suscipit.
    </div>
  </div>
</template>

<script>
export default {
  name: "Comment",
  props: {
    comment: {
      type: Object,
      default: () => {}
    }
  },
  computed: {
    host() {
      return this.$store.getters.getHost;
    }
  },
  methods: {
    sendComment() {}
  },
  data: () => {
    return {
      message: ""
    };
  }
};
</script>

<style>
.comment {
  display: flex;
  flex-font: row nowrap;
}

.idea-info__image {
  display: flex;
  justify-content: center;
  margin-bottom: 24px;
}
</style>
