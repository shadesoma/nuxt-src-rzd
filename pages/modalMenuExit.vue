<template>
  <div class="modalMenuExit">
    <div class="modal is-active">
      <div class="modal-background">
        <div class="modalMenu columns is-centered is-marginless">
          <div class="modalContent column is-7 has-background-white">
            <div class="buttons are-large is-marginless">
              <a class="topButton button has-text-white is-fullwidth is-marginless">
                Это не мой профиль
              </a>
              <nuxt-link to="/loginByCode" class="bottomButton button has-text-white is-fullwidth is-marginless">
                Выход
              </nuxt-link>
            </div>
          </div>
        </div>
      </div>
      <button @click="close" class="modal-close is-large" aria-label="close"></button>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'modalMenuExit',
    methods: {
      close () {
        this.$emit('close')
      }
    }
  }
</script>

<style scoped>
  .modalMenu {
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
  }

  .modalContent {
    border-radius: 5px;
  }

  .topButton {
    background: rgba(237, 0, 0, 1);
    background: linear-gradient(to bottom, rgba(237, 0, 0, 1) 0%, rgba(237, 0, 0, 1) 57%, rgba(151, 0, 0, 1) 100%);
    border: 0;
    border-radius: 7px 7px 0 0;
  }

  .bottomButton {
    background: rgba(237, 0, 0, 1);
    background: linear-gradient(to bottom, rgba(237, 0, 0, 1) 0%, rgba(237, 0, 0, 1) 57%, rgba(151, 0, 0, 1) 100%);
    border: 0;
    border-radius: 0 0 7px 7px;
  }
</style>
