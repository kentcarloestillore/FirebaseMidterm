<script setup>
import { onMounted, ref, computed } from 'vue'
import db from '../firebase/config.js'
import { collection, query, onSnapshot,  where} from 'firebase/firestore'

const totalIncome = ref()
const totalExpense = ref()

const getIncome = async () => {
  onSnapshot(query(collection(db, 'expenses'), where('type', '==', 'income')), data => {
    let tempTotal = 0;
    data.forEach((doc) => {
      const expense = {
        id: doc.id,
        data: doc.data()
      };
      tempTotal += parseFloat(expense.data.amount);
    });
    totalIncome.value = tempTotal.toFixed(2);
  });
};

const getExpense = async () => {
  onSnapshot(query(collection(db, 'expenses'), where('type','==','expense')), data => {
    let tempTotal = 0;
    data.forEach((doc) => {
      const expense = {
        id: doc.id,
        data: doc.data()
      };
      tempTotal += parseFloat(expense.data.amount);
    });
    totalExpense.value = tempTotal.toFixed(2); 
  });
};

const balance = computed(() => {
  return totalIncome.value - totalExpense.value;
});

onMounted(()=>{
  getExpense()
  getIncome()
})

</script>

<template>
    <div class="adjust justify-center items-center h-full bg-blue-300 shadow-lg rounded-lg p-2 ml-[50vh] w-[40vh]">
        <h1 class="title text-4xl font-bold text-center pb-5">Summary</h1>
        <ul class="flex flex-col gap-5">
            <li>
                <h1 class="text-start text-2xl pr-4 italic">Income: ₱<span class="underline text-2xl pr-4 font-bold">{{ totalIncome }}</span></h1>
            </li>
            <li>
                <h1 class="text-start text-2xl pr-4 italic">Expense: ₱<span class="underline text-2xl pr-4 font-bold">{{ totalExpense }}</span></h1>
            </li>
            <li><h1 class="text-start text-2xl pr-4 italic">Balance: ₱<span class="underline text-2xl pr-4 font-bold">{{ balance }}</span></h1></li>
        </ul>
    </div>
</template>