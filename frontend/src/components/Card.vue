<script setup>
import {defineProps} from 'vue'
import lib from "@/scripts/lib"
import axios from "axios";

defineProps({item: Object})
const addToCart = (itemId) => {
  axios.post(`/api/cart/items/${itemId}`).then(() => {
    console.log('success');
  })
};


</script>

<template>
  <div class="col">
    <div class="card shadow-sm">

      <span class="img" :style="{backgroundImage: `url(${item.imgPath}`}"/>
      <div class="card-body">
        <p class="card-text">{{ item.name }} &nbsp;
          <span class="discount badge bg-danger">{{ item.discountPer }}%</span>
        </p>

        <div class="d-flex justify-content-between align-items-center">
          <button @click="addToCart(item.id)" class="btn btn-primary"><i class="fa fa-shopping-cart"
                                                                         aria-hidden="true"></i></button>
          <small class="price text-muted">{{ lib.getNumberFormatted(item.price) }}원</small>
          <small class="real text-danger">{{ item.price * item.discountPer / 100 }}원</small>
        </div>
      </div>
    </div>
  </div>
</template>


<style scoped>
.card .img {
  display: inline-block;
  width: 100%;
  height: 250px;
  background-size: cover;
  background-position: center;
}

.card .card-body .price {
  text-decoration: line-through;
}
</style>