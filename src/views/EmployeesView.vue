<template>
  <div class="container-employees">
    <div class="container-employees__titles">
      <div class="container-employees__name">Працівник</div>
      <div class="container-employees__position">Посада</div>
    </div>
    <div class="container-employees__items">
      <div
        v-for="employee in filledListOfEmployees"
        :key="employee.id"
        class="container-employees__item"
      >
        <div class="container-employees__label">{{ employee.name }}</div>
        <div class="container-employees__label">{{ employee.position }}</div>
      </div>
    </div>
  </div>
</template>

<script>
import {mapGetters, mapActions} from 'vuex'

export default {
  name: 'EmployeesView',

  computed: {
    ...mapGetters('employees', ['filledListOfEmployees']),
  },

  created() {
    this.fetchEmployees()
  },
  methods: {
    ...mapActions('employees', ['fetchEmployees']),
  },
}
</script>

<style lang="scss" scoped>
.container-employees {
  display: flex;
  flex-direction: column;
  gap: 20px;
  max-width: 600px;
  // .container-employees__titles
  &__titles {
    display: flex;
    justify-content: space-between;
    font-size: 24px;
    font-weight: bold;
  }
  // .container-employees__name
  &__name {
    flex-basis: 50%;
  }
  // .container-employees__position
  &__position {
    flex-basis: 50%;
  }
  // .container-employees__items
  &__items {
    display: flex;
    flex-direction: column;
    gap: 15px;
  }
  // .container-employees__item
  &__item {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    column-gap: 10px;
    border-bottom: 1px solid gray;
  }
  // .container-employees__label
  &__label {
    display: flex;
    flex-basis: 50%;
  }
}
</style>
