<script>
  import { Bar } from 'vue-chartjs'

  export default {
    extends: Bar,
    props: ['data'],
    mounted () {
      this.renderChart(this.data, {responsive: true, maintainAspectRatio: false})
    }
  }
</script>

<style scoped>

</style>
