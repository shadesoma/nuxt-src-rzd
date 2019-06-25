<template>
  <div class="eventsList">
    <div class="container">
      <div class="columns is-centered is-marginless">
        <div class="column is-12">
          <div class="level is-mobile" style="margin-bottom: 5px">
            <div class="level-left">
              <!--  non  -->
            </div>
            <div class="level-right">
              <p class="has-text-white">
                Здравствуйте,
              </p>
              &nbsp;
              <p class="has-text-white">
                <a @click="showExitMenu" class="has-text-white">
                {{user}}!
                </a>
              </p>
                <span class="icon is-medium fa-lg has-text-white">
                  <a @click="showExitMenu"><img :src="userIcon" style="height: 24px; width: 24px" alt="user"></a>
                </span>
            </div>
          </div>
          <div style="margin-bottom: 10px">
            <div v-if="eventSelected">
              <h1 class="title is-6 has-text-white" style="margin-bottom: 5px">
                Региональная оперативная комиссия
              </h1>
              <p class="is-size-7-mobile has-text-white has-text-weight-bold">Дата: {{date}}</p>
              <div class="level is-mobile">
                <div class="level-left">
                  <p class="is-size-7-mobile has-text-white has-text-weight-bold">Время: {{time}}-{{time}}</p>
                </div>
                <div class="level-right">
                  <p class="is-size-7-mobile has-text-white has-text-weight-bold">Мероприятие началось</p>
                </div>
              </div>
            </div>
            <div class="title" v-else>
              <h1 class="title is-6 has-text-white">
                Список мероприятий
              </h1>
            </div>
          </div>
          <!-- event component -->
          <events/>
          <!-- modal component -->
          <modalMenuExit
            v-if="exitMenuModalVisible"
            @close="closeExitMenu"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  const userIcon = require('../static/icons/Silhouette.png')

  import Events from '../components/events'
  import ModalMenuExit from './modalMenuExit'

  export default {
    name: 'eventsList',
    components: {
      ModalMenuExit,
      Events
    },
    data () {
      return {
        user: 'Иван Иванович',
        id: 0,
        date: '',
        time: '',
        eventSelected: false,
        exitMenuModalVisible: false,
        userIcon: userIcon
      }
    },
    mounted () {
      let date = new Date()
      let eventDate = {
        day: 'numeric',
        month: 'numeric',
        year: 'numeric'
      }
      let eventTime = {
        hour: 'numeric',
        minute: 'numeric'
      }
      this.date = date.toLocaleString('ru', eventDate)
      this.time = date.toLocaleString('ru', eventTime)
    },
    methods: {
      showExitMenu () {
        this.exitMenuModalVisible = true
      },

      closeExitMenu () {
        this.exitMenuModalVisible = false
      },
    },
  }
</script>

<style scoped>
</style>
