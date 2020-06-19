<template>
  <div class="idea-card">
    <h1 class="idea-card__header">Название идеи</h1>
    <div class="idea-card__description">
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laborum, totam?
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci commodi
      est harum, hic impedit laborum molestias officiis quo repellat tenetur?
    </div>
    <div class="idea-card__actions">
      <a-button
        class="idea-card__action"
        type="primary"
        icon="heart"
        size="large"
        shape="circle"
      />
      <a-button
        class="idea-card__action"
        type="primary"
        icon="star"
        size="large"
        shape="circle"
      />
      <a-button
        class="idea-card__action"
        type="danger"
        icon="close"
        size="large"
        shape="circle"
      />
    </div>
  </div>
</template>

<script>
// import Button from "./Button";

export default {
  name: "IdeaCard"
  // components: { Button }
};
</script>

<style lang="scss">
.idea-card {
  display: flex;
  flex-flow: column nowrap;
  align-items: center;
  border-radius: 4px;
  /*box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);*/
  transition: 0.3s;
  padding: 4px 16px;
  min-width: 200px;
  background-color: white;
}

.idea-card__actions {
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-around;
  margin: 16px 0;

  .idea-card__action {
    margin-right: 16px;
  }
}
</style>
