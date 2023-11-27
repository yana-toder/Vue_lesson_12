import {createStore} from 'vuex'
import employees from './modules/employees'
import applicants from './modules/applicants'
import interviews from './modules/interviews'
import positions from './modules/positions'

export default createStore({
  namespaced: true,
  state: {},
  getters: {},
  mutations: {},
  actions: {},
  modules: {
    employees,
    applicants,
    interviews,
    positions,
  },
})

//const day
