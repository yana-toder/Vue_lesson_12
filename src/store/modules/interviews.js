export default {
  namespaced: true,
  state: {
    daysOfWeek: [
      {id: 1, day: 'Monday'},
      {id: 2, day: 'Tuesday'},
      {id: 3, day: 'Wednesday'},
      {id: 4, day: 'Thursday'},
      {id: 5, day: 'Friday'},
      {id: 6, day: 'Saturday'},
      {id: 7, day: 'Sunday'},
    ],
    appointedInterviewsList: [
      //{
      //  id: 1,
      //  employeeId: 1,
      //  applicantId: 11,
      //  positionId: 1,
      //  dayId: 1,
      //},
    ],
  },
  getters: {
    appointedInterviewsList: (state) => state.appointedInterviewsList,
    daysOfWeek: (state) => state.daysOfWeek,
    getDayById: (state) => (dayId) =>
      state.daysOfWeek.find((day) => day.id == dayId),

    //список кандидатів відносно вибраного інтевр'юера
    filterApplicantsList:
      (state, getters, rootState, rootGetters) => (employeeId) => {
        const employee = rootGetters['employees/getEmployeeById'](employeeId)
        const positionId = employee ? employee.positionId : null
        console.log(positionId)
        return rootGetters['applicants/getApplicantsByPosition'](positionId)
      },
    //список призначень
    filledAppointedInterviewsList: (state, getters, rootState, rootGetters) =>
      state.appointedInterviewsList.map((appointed) => ({
        id: appointed.id,
        employee: rootGetters['employees/getEmployeeById'](appointed.employeeId)
          .name,
        applicant: rootGetters['applicants/getApplicantById'](
          appointed.applicantId
        ).name,
        //  position: rootGetters['positions/getPositionById'](appointed.positionId)
        //    .title,
        day: getters.getDayById(appointed.dayId).day,
      })),
  },
  mutations: {
    deleteAppointed(state, id) {
      state.appointedInterviewsList = state.appointedInterviewsList.filter(
        (appointed) => appointed.id !== id
      )
    },
    addAppointed(state, interview) {
      state.appointedInterviewsList.push(interview)
    },
  },
  actions: {
    deleteAppointed({commit}, id) {
      commit('deleteAppointed', id)
    },
    addAppointed({commit}, interview) {
      commit('addAppointed', {
        id: new Date().getTime(),
        ...interview,
      })
    },
  },
  modules: {},
}
