<template>
  <div class="profile">
    <a-layout>
      <a-layout-sider width="200" style="background: #fff">
        <a-menu
          mode="inline"
          :default-selected-keys="currentTab"
          :default-open-keys="['sub1']"
          :style="{ height: '100%', borderRight: 0 }"
        >
          <a-sub-menu key="sub1">
            <span slot="title"><a-icon type="fire" />Список твоих идей</span>
            <a-menu-item key="1" @click="handleNavClick">
              В разработке
            </a-menu-item>
            <a-menu-item key="2" @click="handleNavClick">
              Архив
            </a-menu-item>
          </a-sub-menu>
          <a-sub-menu key="sub3">
            <span slot="title"><a-icon type="star" />Избранное</span>
            <a-menu-item key="3" @click="handleNavClick">
              Идеи
            </a-menu-item>
            <a-menu-item key="4" @click="handleNavClick">
              Авторы
            </a-menu-item>
          </a-sub-menu>
          <a-sub-menu key="sub2">
            <span slot="title"><a-icon type="setting" />Настройки</span>
            <a-menu-item key="5" @click="handleNavClick">
              Интересы
            </a-menu-item>
            <a-menu-item key="6" @click="handleNavClick">
              Личные данные
            </a-menu-item>
          </a-sub-menu>
        </a-menu>
      </a-layout-sider>
      <a-layout style="padding: 0 24px 24px">
        <a-layout-content :style="{ background: '#fff', padding: '24px', minHeight: '280px', margin: '16px 0' }">
          <span v-if="progressIdeas.length === 0">Пока что у вас нет идей! Давайте создадим первую!</span>
          <div v-if="currentTab[0] === '1' && openedCard === ''">
            <ProfileCard
              v-for="idea in progressIdeas"
              :key="idea.id"
              :record="idea"
              @cardOpened="openCard"
            />
          </div>
          <div v-if="currentTab[0] === '2' && openedCard === ''">
            <ProfileCard
              v-for="idea in archIdeas"
              :key="idea.id"
              :record="idea"
              @cardOpened="openCard"
            />
          </div>
          <div v-if="openedCard">
            <ProfileIdea :ideaRecord="openedCard" @cardClosed="closeCard" />
          </div>
        </a-layout-content>
      </a-layout>
    </a-layout>
  </div>
</template>
<script>
import ProfileIdea from "@/components/ProfileComponents/ProfileIdea";
import ProfileCard from "@/components/ProfileComponents/ProfileCard";

export default {
  name: "Profile",
  components: {
    ProfileIdea,
    ProfileCard
  },
  data() {
    return {
      currentTab: ["1"],
      progressIdeas: [],
      openedCard: "",
      archIdeas: []
    };
  },
  mounted() {
    this.$store.dispatch("updateProgressIdes");
    this.progressIdeas = this.$store.getters.getProgressIdes;
  },
  methods: {
    openCard(idea) {
      // console.log(idea);
      this.openedCard = idea;
    },
    closeCard() {
      this.openedCard = "";
    },
    handleNavClick(e) {
      this.currentTab.pop();
      this.currentTab.push(e.key);
      this.openedCard = "";
      if (e.key === "2" && !this.archIdeas.length) {
        this.$store.dispatch("updateArchiveIdeas");
        this.archIdeas = this.$store.getters.getArchiveIdeas;
      }
    }
  }
};
</script>
<style lang="scss"></style>
