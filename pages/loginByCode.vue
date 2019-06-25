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
                  <nuxt-link class="loginButton button is-fullwidth" to="/eventsList">
                    <span class="is-size-6">
                      Войти
                    </span>
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
    background: linear-gradient(to bottom, rgba(255,255,255,1) 0%, rgba(145,145,145,1) 100%);
    color: #ed2400;
    margin-bottom: 20px;
  }

  .loginButton:hover {
    background: linear-gradient(to bottom, rgba(145,145,145,1) 0%, rgba(255,255,255,1) 100%);
  }

  .linkButton {
    font-size: 1rem;
  }
</style>
