<template>
  <div class="idea-card__cardBody">
    <div class="idea-card">
      <div class="idea-card__description">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laborum, totam?
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci commodi
        est harum, hic impedit laborum molestias officiis quo repellat tenetur?
      </div>
      <div class="idea-card__actions">
        <a-button
          class="idea-card__action"
          type="primary"
          icon="like"
          size="large"
          shape="circle"
        />
        <a-button
          class="idea-card__action"
          type="primary"
          icon="dislike"
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
          type="primary"
          icon="message"
          size="large"
          shape="circle"
        />
        <a-button
          class="idea-card__action"
          type="primary"
          size="large"
          shape="circle">
          ...
        </a-button>
      </div>
    </div>
    <div class="idea-card__name-wrapper">
      <span class="idea-card__name">Название идеи</span>
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
  flex-direction: column;
  align-items: flex-start;
  padding: 10px;
  border-radius: 10px;
  transition: background-color 0.125s ease-out;
}
.idea-card__cardBody:hover {
  background-color: #e1e3e8;
}
.idea-card__name-wrapper {
  padding: 5px 10px;
}
.idea-card__name {
  color: #434343;
  font-size: 16px;
  font-weight: bold;
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
  border-radius: 8px;
  transition: 0.3s;
  padding: 15px 20px;
  background-color: #ffffff;
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
    font-weight: bold;
  }
}
</style>
