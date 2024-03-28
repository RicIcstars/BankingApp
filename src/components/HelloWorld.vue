<script setup>
  defineProps({
    msg: {
      type: String,
      required: true
    }
  })

  import { ref } from 'vue';

  // const deposit = () => {
  //     const amount = parseFloat(prompt('Enter deposit amount:'));
  //     document.getElementById("deposit").innerHTML="deposit";

  const account = ref(
    {balance:0,
    accountNumber: '1234567'},
    
  );

  const accountHolder = ref(
    {name: 'Tron'}
  );
  function deposit(amount) {
    account.value.balance += amount;
  }
  function withdraw(amount) {
    account.value.balance -= amount;
  }
  function transfer(amount) {
    account.value.balance -= amount;
  }


</script>

<template>
  <div class="greetings">
    <h1 class="green">{{ msg }}</h1>
    
  </div>

  <main>
    <TheWelcome />
  </main>

  {{ accountHolder.name }}
  <br><br>
  
  Account Number: {{ account.accountNumber }}
  <br>

  ${{ account.balance }}
  <br>
  <button @click="deposit(50)">Deposit</button>
  <button @click="withdraw(50)">Withdraw</button>
  <br><br>
  <button @click="transfer(50)">Transfer</button>

  


</template>


<style scoped>
h1 {
  font-weight: 500;
  font-size: 2.6rem;
  position: relative;
  top: -10px;
}

h3 {
  font-size: 1.2rem;
}

.greetings h1,
.greetings h3 {
  text-align: center;
}

@media (min-width: 1024px) {
  .greetings h1,
  .greetings h3 {
    text-align: left;
  }
}
</style>
