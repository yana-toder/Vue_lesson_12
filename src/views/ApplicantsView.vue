<template>
  <div class="container-applicant">
    <div class="container-applicant__titles">
      <div class="container-applicant__name">Працівник</div>
      <div class="container-applicant__position">Посада</div>
    </div>
    <div class="container-applicant__items">
      <div
        v-for="applicant in filledApplicantsList"
        :key="applicant.id"
        class="container-applicant__item"
      >
        <div class="container-applicant__label">{{ applicant.name }}</div>
        <div class="container-applicant__label">{{ applicant.position }}</div>
      </div>
    </div>
  </div>
</template>

<script>
import {mapGetters, mapActions} from 'vuex'

export default {
  name: 'ApplicantsView',

  computed: {
    ...mapGetters('applicants', ['filledApplicantsList']),
  },

  created() {
    this.fetchApplicants()
  },
  methods: {
    ...mapActions('applicants', ['fetchApplicants']),
  },
}
</script>

<style lang="scss" scoped>
.container-applicant {
  display: flex;
  flex-direction: column;
  gap: 20px;
  max-width: 600px;
  // .container-applicant__titles
  &__titles {
    display: flex;
    justify-content: space-between;
    font-size: 24px;
    font-weight: bold;
  }
  // .container-applicant__name
  &__name {
    flex-basis: 50%;
  }
  // .container-applicant__position
  &__position {
    flex-basis: 50%;
  }
  // .container-applicant__items
  &__items {
    display: flex;
    flex-direction: column;
    gap: 15px;
  }
  // .container-applicant__item
  &__item {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    column-gap: 10px;
    border-bottom: 1px solid gray;
  }
  // .container-applicant__label
  &__label {
    display: flex;
    flex-basis: 50%;
  }
}
</style>
