import {applicants} from '@/store/data/data'

export default {
  namespaced: true,
  state: {
    applicantsList: [],
  },
  getters: {
    applicantsList: (state) => state.applicantsList,
    getApplicantById: (state) => (applicantId) =>
      state.applicantsList.find((applicant) => applicant.id == applicantId),
    getApplicantsByPosition: (state) => (positionId) =>
      state.applicantsList.filter(
        (applicant) => applicant.positionId == positionId
      ),
    filledApplicantsList: (state, getters, rootState, rootGetters) =>
      state.applicantsList.map((applicant) => ({
        id: applicant.id,
        name: applicant.name,
        position: rootGetters['positions/getPositionById'](applicant.positionId)
          .title,
      })),
  },
  mutations: {
    setApplicantsList(state, data) {
      state.applicantsList = data
    },
  },
  actions: {
    fetchApplicants({commit}) {
      commit('setApplicantsList', applicants)
    },
  },
  modules: {},
}
