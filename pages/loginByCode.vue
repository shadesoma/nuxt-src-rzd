<template>
  <div class="loginByCode">
    <div class="container">
      <section class="hero">
        <div class="hero-body">
          <div class="container">
            <div class="columns is-centered">
              <div class="column is-12">
                <h1 class="title is-4 has-text-centered has-text-white">
                  Вход для участников
                </h1>
                <div class="field">
                  <p class="control">
                    <label>
                      <input v-model="userCode" class="input is-large" type="text" placeholder="Код Участника">
                    </label>
                  </p>
                </div>
                <div class="buttons are-large">
                  <nuxt-link class="loginButton button is-fullwidth" to="/eventsList">Войти
                  </nuxt-link>
                  <nuxt-link class="linkButton button is-fullwidth is-danger is-inverted is-outlined" to="/login">
                    <span class="is-size-6">
                      Вход в личный кабинет
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
    name: 'loginByCode',
    data () {
      return {
        userCode: ''
      }
    }
  }
</script>

<style scoped>

  .field {
    border: 1px solid #c8c8c8;
    margin-bottom: 20px;
    border-radius: 5px;
  }

  .loginButton {
    box-shadow: inset 0 1px 0 0 #ffffff;
    filter: progid:DXImageTransform.Microsoft.gradient(startColorstr='#ededed', endColorstr='#dfdfdf', GradientType=0);
    background: #ededed linear-gradient(to bottom, #ededed 5%, #dfdfdf 100%);
    border-radius: 6px;
    color: #ed2400;
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
