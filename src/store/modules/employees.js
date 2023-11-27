import {employees} from '@/store/data/data'

export default {
  namespaced: true,
  state: {
    employeesList: [],
  },
  getters: {
    employeesList: (state) => state.employeesList,
    getEmployeeById: (state) => (employeeId) =>
      state.employeesList.find((employee) => employee.id == employeeId),
    filledListOfEmployees: (state, getters, rootState, rootGetters) =>
      state.employeesList.map((employee) => ({
        id: employee.id,
        name: employee.name,
        position: rootGetters['positions/getPositionById'](employee.positionId)
          .title,
      })),
  },
  mutations: {
    setEmployeesList(state, data) {
      state.employeesList = data
    },
  },
  actions: {
    fetchEmployees({commit}) {
      commit('setEmployeesList', employees)
    },
  },
  modules: {},
}
