<template>
  <div class="loginByCode">
    <div class="container">
      <section class="hero">
        <div class="hero-body">
          <div class="container">
            <div class="columns is-centered">
              <div class="column is-9">
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
                  <a class="loginButton button is-fullwidth">Войти</a>
                  <nuxt-link class="linkButton button is-fullwidth is-danger is-inverted is-outlined" to="/loginByCode">
                    <span class="is-size-6">
                      Вход для участников мероприятия
                    </span>
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
    border-radius: 5px 5px 0 0;
  }

  .bottomField {
    border-radius: 0 0 5px 5px;
  }

  .topInput {
    border-radius: 5px 5px 0 0;
  }

  .bottomInput {
    border-radius: 0 0 5px 5px;
  }

  .loginButton {
    box-shadow: inset 0 1px 0 0 #ffffff;
    filter: progid:DXImageTransform.Microsoft.gradient(startColorstr='#ededed', endColorstr='#dfdfdf', GradientType=0);
    background: #ededed linear-gradient(to bottom, #ededed 5%, #dfdfdf 100%);
    border-radius: 6px;
    color: #ED2400;
    font-size: 15px;
    text-decoration: none;
    margin-bottom: 20px;
  }

  .loginButton:hover {
    filter: progid:DXImageTransform.Microsoft.gradient(startColorstr='#dfdfdf', endColorstr='#ededed', GradientType=0);
    background: #dfdfdf linear-gradient(to bottom, #dfdfdf 5%, #ededed 100%);
  }

  .linkButton {
    font-size: 1rem;
  }
</style>
