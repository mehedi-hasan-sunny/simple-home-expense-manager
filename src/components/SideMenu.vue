<template>
  <ion-menu side="start" class="side-menu">
    <ion-content padding>
      <ion-list >
        <ion-menu-toggle :key="link.title" v-for="link in links" @click="gotoLink(link.route)">
          <ion-item>
            <ion-icon :name="link.icon" class="pr-3"></ion-icon>
            <ion-label >{{link.title}}</ion-label>
          </ion-item>
        </ion-menu-toggle>
      </ion-list>
    </ion-content>
  </ion-menu>

</template>

<script>
  export default {
    name: "SideMenu",
    data() {
      return {
        links: [
          {icon: 'tv', title: 'Dashboard', route: '/'},
          {icon: 'calendar', title: 'Monthly Expense', route: '/MonthlyExpense'},
          {icon: 'input', title: 'Inputs', route: '/AddorEditMonthlyExpense'},
          {icon: 'layers', title: 'Templates', route: '/templates'},
        ]
      }
    },
    methods:{
      gotoLink(link) {
        this.$router.push({path: link})
      }
    }
  }
</script>

<style lang="scss">
  .side-menu{
    ion-content {
      --ion-background-color: #7e57ff;
    }
    ion-item{
      --padding-left: 0;
      ion-label , ion-icon{
        color: #fff;
      }
    }
  }
  .pr-3{
    padding-right: 15px;
  }
</style>
