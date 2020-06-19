<template>
  <div class="main-container">
    <div class="list-wrapper">
      <List>
        <Card />
      </List>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import Card from "@/components/Card.vue";
import List from "@/components/List/List";
import { getRecords } from "../utils/fetch-utils";

export default {
  name: "Home",
  components: {
    List,
    Card
  }
};

console.log(getRecords());
</script>

<style lang="scss">
  .main-container {
    display: flex;
    flex-grow: 1;
    background-color: #f3f5f7;
  }
  .list-wrapper {
    max-width: 1200px;
  }
</style>
