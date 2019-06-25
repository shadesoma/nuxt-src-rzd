<template>
  <div class="UserLogin">
    <div class="container">
      <section class="hero">
        <div class="hero-body">
          <div class="container">
            <div class="columns is-centered">
              <div class="column is-12">
                <h1 class="title is-4 has-text-centered has-text-white">
                  Вход в личный кабинет
                </h1>
                <div class="fieldset">
                  <div class="field topField">
                    <p class="control">
                      <label>
                        <input v-model="login" class="input topInput is-large" type="text" placeholder="Логин">
                      </label>
                    </p>
                  </div>
                  <div class="field bottomField">
                    <p class="control">
                      <label>
                        <input v-model="password" class="input bottomInput is-large" type="password" placeholder="Пароль">
                      </label>
                    </p>
                  </div>
                </div>
                <div class="buttons are-large">
                  <a class="loginButton button is-fullwidth">
                    <span class="is-size-6">
                      Войти
                    </span>
                  </a>
                  <nuxt-link class="linkButton button is-paddingless is-fullwidth is-danger is-inverted is-outlined" to="/loginByCode">
                    <p class="is-size-6">
                      Вход для участников мероприятия
                    </p>
                  </nuxt-link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
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
  .field {
    border: 1px solid #c8c8c8;
    margin: 0;
  }

  .fieldset {
    margin-bottom: 20px;
  }

  .topField{
    border-radius: 7px 7px 0 0;
  }

  .bottomField {
    border-radius: 0 0 7px 7px;
  }

  .topInput {
    border-radius: 5px 5px 0 0;
  }

  .bottomInput {
    border-radius: 0 0 5px 5px;
  }

  .loginButton {
    background: linear-gradient(to bottom, rgba(255,255,255,1) 0%, rgba(145,145,145,1) 100%);
    color: #ed2400;
    margin-bottom: 20px;
  }

  .loginButton:hover {
    background: linear-gradient(to bottom, rgba(145,145,145,1) 0%, rgba(255,255,255,1) 100%);
  }

  .linkButton {
  }
</style>
