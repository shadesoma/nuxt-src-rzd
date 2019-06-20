<template>
  <div class="eventsList">
    <div class="container">
      <div class="columns is-centered">
        <div class="column is-12">
          <div class="level is-mobile">
            <div class="level-left">
              <!--  non  -->
            </div>
            <div class="level-right">
              <p class="has-text-white">
                Здравствуйте, {{user}}!
              </p>
              <span class="icon is-medium fa-lg has-text-white">
                  <i class="far  fa-user-circle"></i>
                </span>
            </div>
          </div>
          <h1 class="title is-6 has-text-centered has-text-white">
            Региональная оперативная комиссия
          </h1>
          <p class="is-size-7 has-text-white has-text-weight-bold">Дата: {{date}}</p>
          <div class="level is-mobile">
            <div class="level-left">
              <p class="is-size-7 has-text-white has-text-weight-bold">Время: {{time}}-{{time}}</p>
            </div>
            <div class="level-right">
              <p class="is-size-7 has-text-white has-text-weight-bold">Мероприятие началось</p>
            </div>
          </div>
          <div class="columns is-centered is-marginless eventList">
            <ul class="events " style="width: 295px;">
              <li
                v-for="event in events"
                :key="event.id"
                class="column event "
                style="border: 5px solid lightgrey; border-radius: 5px; background-color: white; margin-bottom: 10px">
                <h1 class="title is-size-7">{{event.eventName}}</h1>
                <div class="level is-mobile">
                  <div class="level-left">
                    <div>
                      <p class="is-size-7">Голосование:</p>
                      <p class="is-size-7">Продолжительность:</p>
                      <p class="is-size-7">Кол-во вопросов:</p>
                    </div>
                  </div>
                  <div class="level-item">
                    <div>
                      <div style="display: flex; align-items: center; height: 18px; width: 18px;">
                        <div class=""
                             style="height: 12px; width: 12px; background-color: #20c412; border-radius: 50%"></div>
                      </div>
                      <p class="is-size-7">{{event.timer}}</p>
                      <p class="is-size-7">{{2}}</p>
                    </div>
                  </div>
                  <div class="level-right">
                    <div>
                      <p class="is-size-7" style="height: 54px">{{event.status}}</p>
                    </div>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'eventsList',
    data () {
      return {
        user: 'Иван Иванович',
        id: 0,
        date: '',
        time: '',
        events: [{
          id: 1,
          eventName: '««Эффуктивные меры по продвижению вагонопотока»»',
          timer: 10 + ' мин',
          status: 'началось'
        },
          {
            id: 2,
            eventName: '««Эффуктивные меры по продвижению вагонопотока»»',
            timer: 10 + ' мин',
            status: 'началось'
          },
          {
            id: 3,
            eventName: '««Эффуктивные меры по продвижению вагонопотока»»',
            timer: 10 + ' мин',
            status: 'началось'
          },
          {
            id: 4,
            eventName: '««Эффуктивные меры по продвижению вагонопотока»»',
            timer: 10 + ' мин',
            status: 'началось'
          },
          {
            id: 1,
            eventName: '««Эффуктивные меры по продвижению вагонопотока»»',
            timer: 10 + ' мин',
            status: 'началось'
          },
          {
            id: 2,
            eventName: '««Эффуктивные меры по продвижению вагонопотока»»',
            timer: 10 + ' мин',
            status: 'началось'
          },
          {
            id: 3,
            eventName: '««Эффуктивные меры по продвижению вагонопотока»»',
            timer: 10 + ' мин',
            status: 'началось'
          },
          {
            id: 4,
            eventName: '««Эффуктивные меры по продвижению вагонопотока»»',
            timer: 10 + ' мин',
            status: 'началось'
          },
        ]
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
    }
  }
</script>

<style scoped>
</style>
