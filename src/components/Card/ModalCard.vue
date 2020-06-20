<template>
  <a-modal v-if="idea" @cancel="$emit('cancel')" :title="idea.name" :visible="visible" :footer="null">
    <div class="idea-info">
      <div v-if="idea.images">
        <img :src="idea.images" :alt="idea.name" />
      </div>

      <div class="idea-info__description">
        {{ idea.description }}
      </div>

      <div class="idea-info__status">
        {{ message }}
      </div>

      <div class="idea-info__participants">
        {{ message }}
      </div>
    </div>

    <div class="idea-comments">
      <h2>Комментарии</h2>

      <div class="idea-comments__form">
        <a-form @submit="this.sendComment">
          <a-form-item>
            <a-textarea
              placeholder="Что вы об этом думаете?"
              :auto-size="{ minRows: 3, maxRows: 5 }"
              v-model="message"
            />
          </a-form-item>

          <a-form-item>
            <a-button htmlType="submit" style="width: 100%" type="primary"> Отправить </a-button>
          </a-form-item>
        </a-form>
      </div>
    </div>
  </a-modal>
</template>

<script>
export default {
  name: "ModalCard",
  props: {
    idea: {
      type: Object,
      default: () => {}
    },
    visible: {
      type: Boolean,
      default: false
    }
  },
  methods: {
    handleCancel() {
      console.log("close modal");
    },
    sendComment() {}
  },
  data: () => {
    return {
      message: ""
    };
  }
};
</script>

<style scoped>
.modal-wrapper {
  position: absolute;
  width: 100%;
  height: 100%;
  z-index: 3;
  background-color: rgba(0, 0, 0, 0.25);
}
.hidden {
  display: none;
}
</style>
