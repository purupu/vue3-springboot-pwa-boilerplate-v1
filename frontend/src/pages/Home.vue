<script setup>
import axios from "axios";
import {reactive} from "vue";
import Card from "@/components/Card.vue";
import {useStore} from "@/scripts/store";

const state = reactive({
  items: []
})
const store = useStore();
console.log(store.account);

axios.get("/api/items").then((res) => {
  console.log(res)
  state.items = res.data
});


</script>

<template>
  <div>

    <div class="album py-5 bg-body-tertiary">
      <div class="container">

        <div class="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
          <div v-for="(item, idx) in state.items" :key="idx">
            <Card :item="item"></Card>

          </div>
        </div>
      </div>
    </div>
  </div>

</template>

<style scoped>

</style>