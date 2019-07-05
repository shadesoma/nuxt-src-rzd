<template>
  <div class="loginByCode">
    <div class="column center">
      <h1 class="titleLogin">
        Вход для участников
      </h1>
      <div class="field fieldSingleLine">
        <p class="control">
          <label>
            <input v-model="userCode" class="input inputSingleLine" type="text" placeholder="Код Участника">
          </label>
        </p>
      </div>
      <nuxt-link class="button btn btn-grey" to="/eventsList">
        Войти
      </nuxt-link>
      <nuxt-link class="button btn is-danger is-inverted is-outlined lol" to="/login">
        Вход в личный кабинет
      </nuxt-link>
    </div>
  </div>
</template>

<script>
export default {
  name: 'loginByCode',
  data () {
    return {
      userCode: ''
    }
  }
}
</script>

<style scoped>
@import "../assets/css/field-and-input-single-line.css";

.center {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
}
/*Исправить кастыль*/
.lol {
  margin: 0;
}

</style>
