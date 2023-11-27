import {positions} from '@/store/data/data'

export default {
  namespaced: true,
  state: {
    positionsList: [
      {id: 1, title: 'Програміст'},
      {id: 2, title: 'Аналітик даних'},
      {id: 3, title: 'Дизайнер UI/UX'},
      {id: 4, title: 'Менеджер продукту'},
      {id: 5, title: 'Тестувальник'},
    ],
  },
  getters: {
    positionsList: (state) => state.positionsList,
    getPositionById: (state) => (positionId) =>
      state.positionsList.find((position) => position.id == positionId),
  },
  mutations: {
    setPositionsList(state, data) {
      state.positionsList = data
    },
  },
  actions: {
    fetchPositionsList({commit}) {
      commit('setPositionsList', positions)
    },
  },
  modules: {},
}
