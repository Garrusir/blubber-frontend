<template>
  <div class="main-container">
    <div class="add-idea-form">
      <div class="add-idea-form__item">
        <a-input placeholder="Название" />
      </div>

      <div class="add-idea-form__item">
        <a-textarea placeholder="Описание идеи" :auto-size="{ minRows: 3, maxRows: 5 }" />
      </div>

      <div class="add-idea-form__item">
        <a-select default-value="Выберите отдел" style="width: 100%" @change="handleChange">
          <a-select-option v-for="department in departmentList" :key="department.id" :value="department.id">
            {{ department.name }}
          </a-select-option>
        </a-select>
      </div>

      <div class="add-idea-form__item">
        <a-button style="width: 100%" type="primary"> Создать идею </a-button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "AddIdea",
  computed: {
    departmentList() {
      return [
        {
          name: "Отдел 1",
          id: 1
        },
        {
          name: "Отдел 2",
          id: 2
        },
        {
          name: "Отдел 3",
          id: 3
        },
        {
          name: "Отдел 4",
          id: 4
        },
        {
          name: "Отдел 5",
          id: 5
        },
        {
          name: "Отдел 6",
          id: 6
        },
        {
          name: "Отдел 7",
          id: 7
        }
      ];
    }
  },
  methods: {
    handleChange(value) {
      console.log(value);
    }
  },
  data() {
    return {};
  }
};
</script>

<style lang="scss">
.main-container {
  display: flex;
  flex-flow: column nowrap;
  flex-grow: 1;
  background-color: #f3f5f7;
  align-items: center;
}
.add-idea-form {
  max-width: 580px;
  min-width: 300px;
  display: flex;
  flex-flow: column nowrap;
  flex-grow: 1;
  margin-top: 32px;
}

.add-idea-form__item {
  margin-bottom: 16px;
}
</style>
