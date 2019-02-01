<template>
  <div>
    <div style="margin-bottom: 35px;">
      <div class="input-field">
        <input id="title" type="text" v-model="monthlyExpense.title">
        <label for="title">Title</label>
      </div>
      <div class="input-field">
        <input id="bill" type="text" v-model="monthlyExpense.bill">
        <label for="bill">Bill</label>
      </div>
      <div class="switch" padding>
        <label style="font-size: 1rem">
          <span class="red-text text-accent-3">Due</span>
          <input type="checkbox" v-model="monthlyExpense.status">
          <span class="lever"></span>
          <span class="indigo-text text-accent-2">Paid</span>
        </label>
      </div>
    </div>

    <ion-fab-button @click="saveMonthlyExpenseData()" class="todo-fab">
      <ion-icon name="checkmark"></ion-icon>
    </ion-fab-button>
  </div>
</template>

<script>
  import Storage from '../services/storage';

  const storage = new Storage();
  export default {
    name: "AddorEditMonthlyExpense",
    data() {
      return {
        monthlyExpense: {
          title: null,
          bill: null,
          status: false,
        }
      }
    },
    mounted() {
      M.AutoInit();
      M.updateTextFields();
    },
    methods: {
      saveToStorage(data){
        storage.set('subreddit', JSON.stringify(data)).then((value)=>{
          let modal = M.Modal.getInstance(document.querySelector('#modal1'));
          modal.close();
          this.$emit('update:posts', JSON.parse(value))
        });
      },
      saveMonthlyExpenseData() {
        let previousData = [];
        storage.get('subreddit').then((value) => {
          console.log(value,'hi');
          if (value != null) {
            let data = JSON.parse(value);
            if (data.length > 0) {
              previousData = data;
            } else {
              previousData.push(data);
            }
          }
          previousData.push(this.monthlyExpense)
          this.saveToStorage(previousData);
        });

      },
      updateTitleProperty(value) {
        this.monthlyExpense[value] = this.$refs[value].value


        console.log(value, this.$refs[value].value)
        console.log(this.$name)
      },
    }
  }
</script>

<style scoped>

</style>
