<template>
  <div class="idea-card__cardBody">
    <div class="idea-card">
      <div class="idea-card__headerBlock">
        <h1 class="idea-card__header">Название идеи</h1>
      </div>
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
    <div class="idea_card__stats">
      <a-tooltip placement="bottomLeft">
        <template slot="title">
          <span>Успейте оставить свое мнение!</span>
        </template>
        <a-progress class="daysLeft" type="circle" :percent="75" :format="percent => `${percent} Days`" />
      </a-tooltip>
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
.idea-card__cardBody {
  display: flex;
}

.idea_card__stats {
  display: flex;
  flex-grow: 1;
  align-items: center;
  background-color: #E6EAF0;
}

.idea-card {
  display: flex;
  flex-grow: 3;
  flex-flow: column nowrap;
  align-items: center;
  border-radius: 4px;
  /*box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);*/
  transition: 0.3s;
  padding: 4px 16px;
  min-width: 200px;
  background-color: white;
}

.idea-card__headerBlock {
  position: relative;
  width: 100%;
}

.daysLeft {
  padding: 10px;
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
