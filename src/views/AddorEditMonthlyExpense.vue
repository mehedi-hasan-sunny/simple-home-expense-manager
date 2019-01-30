<template>
 <div>
   <ion-item>
     <ion-label>Title</ion-label>
     <ion-input :value="monthlyExpense.title" @input="updateTitleProperty('title')" placeholder="Todo Name" ref="title"></ion-input>
   </ion-item>
   <ion-item>
     <ion-input :value="monthlyExpense.bill" @input="updateTitleProperty('bill')" placeholder="Todo Name" ref="bill"></ion-input>
   </ion-item>

   <div class="input-field">
     <input id="first_name" type="text" v-model="monthlyExpense.title">
     <label for="first_name">Title</label>
   </div>
   <div class="switch" padding>
     <label>
       Unpaid
       <input type="checkbox" v-model="monthlyExpense.status"  @change="toggle">
       <span class="lever"></span>
       Paid
     </label>
   </div>



   <!--<ion-item>-->
   <!--<ion-label >Paid</ion-label>-->
   <!--<ion-toggle slot="end" :value="monthlyExpense.status" @click.prevent="toggle()" @change="toggle" name="status"></ion-toggle>-->
   <!--</ion-item>-->



   <ion-item>
     {{monthlyExpense.title}} <br>
     {{monthlyExpense.bill}} <br>
     {{monthlyExpense.status}}

   </ion-item>
   <ion-fab-button class="todo-fab">
     <ion-icon name="checkmark"></ion-icon>
   </ion-fab-button>
 </div>
</template>

<script>
  import Storage from '../services/storage';
  const storage = new Storage();
  export default {
    name: "AddorEditMonthlyExpense",
    data(){
      return{
        monthlyExpense: {
          title: 'dasdasd',
          bill: null,
          status: false,
        }
      }
    },
    mounted(){
      M.AutoInit();
      M.updateTextFields();
      // document.addEventListener('DOMContentLoaded', function() {
      //   var elems = document.querySelectorAll('#modal');
      //   console.log(elems)
      //   var instances = M.Modal.init(elems, options);
      // });
      // $(document).ready(function(){
      //   $('.modal').modal();
      // });

    },
    methods:{
      clik(){
        //var elems = document.querySelectorAll('.modal');
        //M.Modal.init('#modal1', null)
        //console.log(elems,'hi')
        // document.addEventListener('DOMContentLoaded', function() {
        //   var elems = document.querySelectorAll('#modal');
        //   console.log(elems)
        //   var instances = M.Modal.init(elems, options);
        // });
        // $
      },

      toggle(){
        //this.monthlyExpense.status = !this.monthlyExpense.status;
        console.log('clicked',this.monthlyExpense.status)

      },
      updateTitleProperty(value) {
        this.monthlyExpense[value] = this.$refs[value].value


        console.log(value,this.$refs[value].value)
        console.log(this.$name)
      },
      // updateTitleProperty() {
      //   this.monthlyExpense.title = this.$refs.title.value
      // },
      addMonthlyExpense(value){
        storage.set('monthlyExpense', JSON.stringify(this.posts));
      },
    }
  }
</script>

<style scoped>

</style>
