import { createRouter, createWebHistory } from 'vue-router'
import ExpenseTracker from '../views/ExpenseTracker.vue'
import IncomeTracker from '../views/IncomeTracker.vue'
import Summary from '../views/Summary.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'expense',
      component: ExpenseTracker
    },
    {
      path: '/income',
      name: 'income',
      component: IncomeTracker
    },
    {
      path: '/summary',
      name: 'summary',
      component: Summary
    },
  ]
})

export default router
