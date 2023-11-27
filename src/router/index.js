import {createRouter, createWebHashHistory} from 'vue-router'
import HomeView from '../views/HomeView.vue'
import EmployeesView from '@/views/EmployeesView.vue'
import ApplicantsView from '@/views/ApplicantsView.vue'
import AppointmentsView from '@/views/AppointmentsView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView,
  },
  {
    path: '/employees',
    name: 'employees',
    component: EmployeesView,
  },
  {
    path: '/applicants',
    name: 'applicants',
    component: ApplicantsView,
  },
  {
    path: '/appointments',
    name: 'appointments',
    component: AppointmentsView,
  },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes,
})

export default router
