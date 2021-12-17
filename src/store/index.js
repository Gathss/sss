import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    openPageCount: 0,
    openFirstPageCount: 0,
    loginSysCount: 0,
    sysInfo: [
      { id: 'sys001', title: 'openMessage', infoData: 'KKKKKKKKKKKKKK', order: 1, disState: true },
      { id: 'sys002', title: 'userMessage', infoData: 'PPPPPPPPPPPPP', order: 2, disState: true },
      { id: 'sys003', title: 'closeMessage', infoData: 'GOOD BYE', order: 3, disState: false }
    ]
  },
  getters: {
    openOtherPageCount: (state) => {
      return state.openPageCount - state.openFirstPageCount
    },

    getSysinfoToIndex: (state) => (index) => {
      if (index <= state.sysInfo.length) {
        return state.sysInfo.slice(index - 1, index)[0]
      } else {
        return 'ERROR 索引超出数组长度'
      }
    }
  },
  mutations: {
    gotoPage (state) {
      state.openPageCount++
    },
    gotoFirstPage (state) {
      state.openPageCount++
      state.openFirstPageCount++
    },
    sysInfoPush (state, infoItem) {
      state.sysInfo.push(infoItem)
    },
    sysInfoPop (state) {
      state.sysInfo.pop()
    },
    sysInfoUnShift (state) {
      state.sysInfo.unshift()
    },
    addState (state, item) {
      state.obj = { ...state.obj, [item[0]]: item[1] }
    }
  },
  actions: {
    gotoPage (context) {
      context.commit('gotoPage')
    },
    gotoFirstPage (context) {
      context.commit('gotoFirstPage')
    },
    sysInfoPush (context, infoItem) {
      context.commit('sysInfoPush', infoItem)
    },
    sysInfoPop (context) {
      context.commit('sysInfoPop')
    },
    sysInfoUnShift (context) {
      context.commit('sysInfoUnShift')
    },
    addState (context, item) {
      context.commit('sysInfoUnShift', item[0], item[1])
    }
  },
  modules: {
  }
})
