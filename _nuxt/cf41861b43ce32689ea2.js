(window.webpackJsonp=window.webpackJsonp||[]).push([[2,6],{149:function(t,e,n){var content=n(153);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(18).default)("576e16cf",content,!0,{sourceMap:!1})},151:function(t,e,n){var content=n(161);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(18).default)("8a5da34c",content,!0,{sourceMap:!1})},152:function(t,e,n){"use strict";var l=n(149);n.n(l).a},153:function(t,e,n){(t.exports=n(17)(!1)).push([t.i,".modalMenu[data-v-6fa9def4]{position:absolute;bottom:0;left:0;right:0}.modalContent[data-v-6fa9def4]{border-radius:5px}.topButton[data-v-6fa9def4]{border:0;border-radius:7px 7px 0 0}.bottomButton[data-v-6fa9def4],.topButton[data-v-6fa9def4]{background:#ed0000;background:linear-gradient(180deg,#ed0000 0,#ed0000 57%,#970000)}.bottomButton[data-v-6fa9def4]{border:0;border-radius:0 0 7px 7px}",""])},158:function(t,e,n){"use strict";n.r(e);var l={name:"modalMenuExit",methods:{close:function(){this.$emit("close")}}},o=(n(152),n(19)),component=Object(o.a)(l,function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"modalMenuExit"},[e("div",{staticClass:"modal is-active"},[e("div",{staticClass:"modal-background"},[e("div",{staticClass:"modalMenu columns is-centered is-marginless"},[e("div",{staticClass:"modalContent column is-7 has-background-white"},[e("div",{staticClass:"buttons are-large is-marginless"},[e("a",{staticClass:"topButton button has-text-white is-fullwidth is-marginless"},[this._v("\n              Это не мой профиль\n            ")]),this._v(" "),e("nuxt-link",{staticClass:"bottomButton button has-text-white is-fullwidth is-marginless",attrs:{to:"/loginByCode"}},[this._v("\n              Выход\n            ")])],1)])])]),this._v(" "),e("button",{staticClass:"modal-close is-large",attrs:{"aria-label":"close"},on:{click:this.close}})])])},[],!1,null,"6fa9def4",null);e.default=component.exports},159:function(t,e,n){t.exports=n.p+"img/43a6f9e.png"},160:function(t,e,n){"use strict";var l=n(151);n.n(l).a},161:function(t,e,n){(t.exports=n(17)(!1)).push([t.i,".events[data-v-d69f6030]{display:block}.eventStatusStarted[data-v-d69f6030]{background-color:#20c412}.eventStatusNotStart[data-v-d69f6030]{background-color:#e8e31b}.eventStatusEnded[data-v-d69f6030]{background-color:#f40500}",""])},164:function(t,e,n){"use strict";n.r(e);var l={name:"events",data:function(){return{events:[{id:1,eventStatus:"START",eventName:"««Эффективные меры по продвижению вагонопотока»»",timer:"10 мин",status:"началось"},{id:2,eventStatus:"START",eventName:"««Эффективные меры по продвижению вагонопотока»»",timer:"10 мин",status:"началось"},{id:3,eventStatus:"END",eventName:"««Эффективные меры по продвижению вагонопотока»»",timer:"10 мин",status:"началось"},{id:4,eventStatus:"NOT_START",eventName:"««Эффективные меры по продвижению вагонопотока»»",timer:"10 мин",status:"началось"},{id:5,eventStatus:"NOT_START",eventName:"««Эффективные меры по продвижению вагонопотока»»",timer:"10 мин",status:"началось"},{id:6,eventStatus:"NOT_START",eventName:"««Эффективные меры по продвижению вагонопотока»»",timer:"10 мин",status:"началось"},{id:7,eventStatus:"START",eventName:"««Эффективные меры по продвижению вагонопотока»»",timer:"10 мин",status:"началось"},{id:8,eventStatus:"END",eventName:"««Эффективные меры по продвижению вагонопотока»»",timer:"10 мин",status:"началось"}]}},mounted:function(){this.events.sort(function(a,b){return a.eventStatus>b.eventStatus?-1:1})}},o=(n(160),n(19)),c=Object(o.a)(l,function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"events"},[n("div",{},[n("ul",{staticClass:"events"},t._l(t.events,function(e){return n("li",{key:e.id,staticClass:"column is-12 event",staticStyle:{border:"5px solid lightgrey","border-radius":"5px","background-color":"white","margin-bottom":"10px"}},[n("h1",{staticClass:"is-size-7-mobile",staticStyle:{"margin-bottom":"10px"}},[t._v(t._s(e.eventName))]),t._v(" "),n("div",{staticClass:"level is-mobile"},[t._m(0,!0),t._v(" "),n("div",{staticClass:"level-item is-paddingless is-narrow-mobile"},[n("div",[n("div",{staticStyle:{display:"flex","align-items":"center",height:"18px",width:"18px"}},[n("div",{class:{eventStatusStarted:"START"===e.eventStatus,eventStatusNotStart:"NOT_START"===e.eventStatus,eventStatusEnded:"END"===e.eventStatus},staticStyle:{height:"12px",width:"12px","border-radius":"50%"}})]),t._v(" "),n("p",{staticClass:"is-size-7-mobile"},[t._v(t._s(e.timer))]),t._v(" "),n("p",{staticClass:"is-size-7-mobile"},[t._v(t._s(2))])])]),t._v(" "),n("div",{staticClass:"column level-right is-paddingless"},[n("div",[n("p",{staticClass:"is-size-7-mobile"},[t._v(t._s(e.status))]),t._v(" "),n("p",{staticClass:"has-text-white is-size-7-mobile"},[t._v("Кастыль")]),t._v(" "),n("p",{staticClass:"has-text-white is-size-7-mobile"},[t._v("Кастыль")])])])])])}),0)])])},[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"column level-left is-paddingless"},[e("div",[e("p",{staticClass:"is-size-7-mobile"},[this._v("Голосование:")]),this._v(" "),e("p",{staticClass:"is-size-7-mobile"},[this._v("Продолжительность:")]),this._v(" "),e("p",{staticClass:"is-size-7-mobile"},[this._v("Кол-во вопросов:")])])])}],!1,null,"d69f6030",null).exports,d=n(158),r=n(159),v={name:"eventsList",components:{ModalMenuExit:d.default,Events:c},data:function(){return{user:"Иван Иванович",id:0,date:"",time:"",eventSelected:!1,exitMenuModalVisible:!1,userIcon:r}},mounted:function(){var t=new Date;this.date=t.toLocaleString("ru",{day:"numeric",month:"numeric",year:"numeric"}),this.time=t.toLocaleString("ru",{hour:"numeric",minute:"numeric"})},methods:{showExitMenu:function(){this.exitMenuModalVisible=!0},closeExitMenu:function(){this.exitMenuModalVisible=!1}}},m=Object(o.a)(v,function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"eventsList"},[n("div",{staticClass:"container"},[n("div",{staticClass:"columns is-centered is-marginless"},[n("div",{staticClass:"column is-12"},[n("div",{staticClass:"level is-mobile",staticStyle:{"margin-bottom":"5px"}},[n("div",{staticClass:"level-left"}),t._v(" "),n("div",{staticClass:"level-right"},[n("p",{staticClass:"has-text-white"},[t._v("\n              Здравствуйте,\n            ")]),t._v("\n             \n            "),n("p",{staticClass:"has-text-white"},[n("a",{staticClass:"has-text-white",on:{click:t.showExitMenu}},[t._v("\n              "+t._s(t.user)+"!\n              ")])]),t._v(" "),n("span",{staticClass:"icon is-medium fa-lg has-text-white"},[n("a",{on:{click:t.showExitMenu}},[n("img",{staticStyle:{height:"24px",width:"24px"},attrs:{src:t.userIcon,alt:"user"}})])])])]),t._v(" "),n("div",{staticStyle:{"margin-bottom":"10px"}},[t.eventSelected?n("div",[n("h1",{staticClass:"title is-6 has-text-white",staticStyle:{"margin-bottom":"5px"}},[t._v("\n              Региональная оперативная комиссия\n            ")]),t._v(" "),n("p",{staticClass:"is-size-7-mobile has-text-white has-text-weight-bold"},[t._v("Дата: "+t._s(t.date))]),t._v(" "),n("div",{staticClass:"level is-mobile"},[n("div",{staticClass:"level-left"},[n("p",{staticClass:"is-size-7-mobile has-text-white has-text-weight-bold"},[t._v("Время: "+t._s(t.time)+"-"+t._s(t.time))])]),t._v(" "),t._m(0)])]):n("div",{staticClass:"title"},[n("h1",{staticClass:"title is-6 has-text-white"},[t._v("\n              Список мероприятий\n            ")])])]),t._v(" "),n("events"),t._v(" "),t.exitMenuModalVisible?n("modalMenuExit",{on:{close:t.closeExitMenu}}):t._e()],1)])])])},[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"level-right"},[e("p",{staticClass:"is-size-7-mobile has-text-white has-text-weight-bold"},[this._v("Мероприятие началось")])])}],!1,null,"2a541de5",null);e.default=m.exports}}]);