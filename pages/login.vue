<template>
  <div class="UserLogin">
    <div class="column center is-paddingless">
      <h1 class="titleLogin">
        Вход в личный кабинет
      </h1>
      <div class="fieldset">
        <div class="field topField">
          <p class="control">
            <label>
              <input v-model="login" class="input topInput" type="text" placeholder="Логин">
            </label>
          </p>
        </div>
        <div class="field bottomField">
          <p class="control">
            <label>
              <input v-model="password" class="input bottomInput" type="password" placeholder="Пароль">
            </label>
          </p>
        </div>
      </div>
      <a class="button btn btn-grey">
        Войти
      </a>
      <nuxt-link class="button btn is-danger is-inverted is-outlined"
                 to="/loginByCode">
        Вход для участников мероприятия
      </nuxt-link>
    </div>
  </div>
</template>

<script>
export default {
  name: 'login',
  data () {
    return {
      login: '',
      password: ''
    }
  },
}
</script>

<style scoped>
@import "../assets/css/field-and-input-double-line.css";

.center {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
}
</style>
