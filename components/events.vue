<template>
  <div class="events">
    <div class="">
      <ul class="events">
        <li
          v-for="event in events"
          :key="event.id"
          class="column is-12 event"
          style="border: 5px solid lightgrey; border-radius: 5px; background-color: white; margin-bottom: 10px;">
          <h1 class="is-size-7-mobile" style="margin-bottom: 10px">{{event.eventName}}</h1>
          <div class="level is-mobile">
            <div class="column level-left is-paddingless">
              <div>
                <p class="is-size-7-mobile">Голосование:</p>
                <p class="is-size-7-mobile">Продолжительность:</p>
                <p class="is-size-7-mobile">Кол-во вопросов:</p>
              </div>
            </div>
            <div class="level-item is-paddingless is-narrow-mobile">
              <div>
                <div style="display: flex; align-items: center; height: 18px; width: 18px;">
                  <div :class="{ 'eventStatusStarted': event.eventStatus ===  'START',
                'eventStatusNotStart':event.eventStatus === 'NOT_START',
                'eventStatusEnded': event.eventStatus === 'END'}"
                       style="height: 12px; width: 12px; border-radius: 50%"></div>
                </div>
                <p class="is-size-7-mobile">{{event.timer}}</p>
                <p class="is-size-7-mobile">{{2}}</p>
              </div>
            </div>
            <div class="column level-right is-paddingless">
              <div>
                <p class="is-size-7-mobile" style="">{{event.status}}</p>
                <!-- ugly crutch-->
                <p class="has-text-white is-size-7-mobile">Кастыль</p>
                <p class="has-text-white is-size-7-mobile">Кастыль</p>
              </div>
            </div>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'events',
    data () {
      return {
        events: [
          {
            id: 1,
            eventStatus: 'START',
            eventName: '««Эффективные меры по продвижению вагонопотока»»',
            timer: 10 + ' мин',
            status: 'началось'
          },
          {
            id: 2,
            eventStatus: 'START',
            eventName: '««Эффективные меры по продвижению вагонопотока»»',
            timer: 10 + ' мин',
            status: 'началось'
          },
          {
            id: 3,
            eventStatus: 'END',
            eventName: '««Эффективные меры по продвижению вагонопотока»»',
            timer: 10 + ' мин',
            status: 'началось'
          },
          {
            id: 4,
            eventStatus: 'NOT_START',
            eventName: '««Эффективные меры по продвижению вагонопотока»»',
            timer: 10 + ' мин',
            status: 'началось'
          },
          {
            id: 5,
            eventStatus: 'NOT_START',
            eventName: '««Эффективные меры по продвижению вагонопотока»»',
            timer: 10 + ' мин',
            status: 'началось'
          },
          {
            id: 6,
            eventStatus: 'NOT_START',
            eventName: '««Эффективные меры по продвижению вагонопотока»»',
            timer: 10 + ' мин',
            status: 'началось'
          },
          {
            id: 7,
            eventStatus: 'START',
            eventName: '««Эффективные меры по продвижению вагонопотока»»',
            timer: 10 + ' мин',
            status: 'началось'
          },
          {
            id: 8,
            eventStatus: 'END',
            eventName: '««Эффективные меры по продвижению вагонопотока»»',
            timer: 10 + ' мин',
            status: 'началось'
          },
        ]
      }
    },
    mounted () {
      this.events.sort(function (a, b) {
        return a.eventStatus > b.eventStatus ? -1 : 1
      })
    },
  }
</script>

<style scoped>
  .events {
    display: block;

  }

  .eventStatusStarted {
    background-color: #20c412;
  }

  .eventStatusNotStart {
    background-color: #e8e31b;
  }

  .eventStatusEnded {
    background-color: #f40500;
  }
</style>
