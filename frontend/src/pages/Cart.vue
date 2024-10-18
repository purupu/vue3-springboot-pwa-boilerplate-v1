<script setup>
import axios from "axios";
import { reactive } from "vue";
import lib from "@/scripts/lib";

const state = reactive({ items: [] });

const remove = (itemId) => {
  axios.delete(`/api/cart/items/${itemId}`).then((data) => {
    console.log(data);
    alert('삭제되었습니다.');
    load();
  });
};

const load = () => {
  axios.get("/api/cart/items").then(({ data }) => {
    state.items = data;
  });
};

/*const order = () => {
  // 주문하기 로직을 여기에 추가합니다.
  alert('주문이 완료되었습니다.');
};*/

load();
</script>

<template>
  <div class="cart">
    <div class="container">
      <ul>
        <li v-for="(i, idx) in state.items" :key="idx">
          <img :src="i.imgPath" />
          <span class="name">{{ i.name }}</span>
          <span class="price">{{ lib.getNumberFormatted(i.price - i.price * i.discountPer / 100) }}원</span>
          <i class="fa fa-trash" @click="remove(i.id)"></i>
        </li>
      </ul>
      <router-link to="/order" class="btn btn-primary order-button">주문하기</router-link>
    </div>
  </div>
</template>

<style scoped>
.cart ul {
  list-style: none;
  margin: 0;
  padding: 0;
}

.cart li {
  border: 1px solid #ccc;
  margin-top: 25px;
  margin-bottom: 25px;
}

.cart ul li img {
  width: 150px;
  height: 150px;
}

.cart ul li .name {
  margin-left: 25px;
}

.cart ul li .price {
  margin-left: 25px;
}

.cart ul li i {
  float: right;
  font-size: 20px;
  margin-top: 60px;
  margin-right: 50px;
}

.order-button {
  display: block;
  margin: 20px auto;
  padding: 10px 20px;
  font-size: 18px;
  width: 200px;
}
</style>