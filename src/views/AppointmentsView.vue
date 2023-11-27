<template>
  <div class="select-appointed">
    <div class="select-appointed__item">
      Працівник
      <select v-model="interview.employeeId">
        <option
          v-for="employee in employeesList"
          :key="employee.id"
          :value="employee.id"
        >
          {{ employee.name }}
        </option>
      </select>
    </div>
    <div class="select-appointed__item">
      Кандидат
      <select v-model="interview.applicantId">
        <option
          v-for="applicant in filterApplicantsList(interview.employeeId)"
          :key="applicant.id"
          :value="applicant.id"
        >
          {{ applicant.name }}
        </option>
      </select>
    </div>
    <div class="select-appointed__item">
      День
      <select v-model="interview.dayId">
        <option v-for="day in daysOfWeek" :key="day.id" :value="day.id">
          {{ day.day }}
        </option>
      </select>
    </div>
    <button @click="onAdd">Додати</button>
  </div>
  <div class="container">
    <div
      v-for="appointed in filledAppointedInterviewsList"
      :key="appointed.id"
      class="container__items"
    >
      <div class="container__item">
        {{ appointed.employee }}
      </div>
      <div class="container__item">
        {{ appointed.applicant }}
      </div>
      <div class="container__item">{{ appointed.day }}</div>

      <button @click="deleteAppointed(appointed.id)">Видалити</button>
    </div>
  </div>
</template>

<script>
import {mapGetters, mapActions} from 'vuex'

export default {
  name: 'AppointmentsView',

  data() {
    return {
      interview: {},
    }
  },

  computed: {
    ...mapGetters('employees', ['employeesList']),
    ...mapGetters('interviews', [
      'daysOfWeek',
      'filledAppointedInterviewsList',
      'filterApplicantsList',
    ]),
  },

  created() {
    this.fetchApplicants()
    this.fetchEmployees()
  },
  methods: {
    ...mapActions('applicants', ['fetchApplicants']),
    ...mapActions('employees', ['fetchEmployees']),
    ...mapActions('interviews', ['deleteAppointed', 'addAppointed']),
    onAdd() {
      this.addAppointed(this.interview)
      this.interview = {}
    },
  },
}
</script>

<style lang="scss" scoped>
.select-appointed {
  display: flex;
  margin-bottom: 30px;
  gap: 20px;
  // .select-appointed__item
  &__item {
  }
}
.container {
  // .container__items
  &__items {
    display: flex;
    gap: 80px;
  }
  // .container__item
  &__item {
  }
}
</style>
