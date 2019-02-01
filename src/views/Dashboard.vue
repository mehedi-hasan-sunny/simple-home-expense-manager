<template>
  <ion-page>
    <ion-card class="card-rounded m-2" v-for="chart in charts" :key="chart.component">
      <ion-card-content class="p-1">
        <Component :is="chart.component" :data="chart.data"></Component>
      </ion-card-content>
    </ion-card>
  </ion-page>
</template>

<script>
  export default {
    name: "Dashboard",
    data(){
      return{
        charts:[
          {
            component:'LineChart',
            data : {
              labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
              datasets: [
                {
                  label: 'Line Chart',
                  backgroundColor: '#A56AF8',
                  data: [40, 20, 12, 39, 10, 40, 39, 80, 40, 20, 12, 11]
                }
              ]
            },
          },
          {
            component:'BarChart',
            data : {
              labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
              datasets: [
                {
                  label: 'Bar Chart',
                  backgroundColor: '#8281F8',
                  data: [40, 20, 12, 39, 10, 40, 39, 80, 40, 20, 12, 11]
                }
              ]
            },
          },

        ],
      }
    }
  }
</script>

<style scoped>


  .p-1 {
    padding: 5px;
  }
  .m-2{
    margin: 20px;
  }
</style>
