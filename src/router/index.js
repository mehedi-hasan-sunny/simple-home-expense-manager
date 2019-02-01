import Vue from 'vue'
import Router from 'vue-router'
import DashBoard from '../views/Dashboard'
import MonthlyExpense from '../views/MonthlyExpense'
import DailyExpense from '../views/DailyExpense'
import AddorEditMonthlyExpense from '../views/AddorEditMonthlyExpense'
import tab from '../components/tab'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Dashboard',
      component: DashBoard
    },
    {
      path: '/MonthlyExpense',
      name: 'Monthly Expense',
      component: MonthlyExpense
    },
    {
      path: '/AddorEditMonthlyExpense',
      name: 'Add Monthly Expense',
      component: AddorEditMonthlyExpense
    },
    {
      path: '/tab',
      name: 'Tab',
      component: tab
    },
    {
      path: '/DailyExpense',
      name: 'Daily Expense',
      component: DailyExpense
    }
  ]
})
