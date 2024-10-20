<script setup>

import {reactive} from "vue";
import axios from "axios";
import {useStore} from "@/scripts/store";
import router from "@/scripts/router";

const state = reactive({form: {email: "", password: ""}, isRemember: false});

if (localStorage.getItem("isRemember") === "true") {
  state.isRemember = true;
  state.form.email = localStorage.getItem("email");
}

const submit = () => {
  axios.post("/api/account/login", state.form).then((res) => {
    const store = useStore();
    store.account.id = res.data;
    if (state.isRemember) {
      localStorage.setItem("isRemember", "true");
      localStorage.setItem("email", state.form.email);
    } else {
      localStorage.setItem("isRemember", "false");
      localStorage.removeItem("email");
    }
    router.push({path: "/"});
  }).catch(() => {
    window.alert("ID/PW를 확인해주세요.");
  })
};

</script>

<template>

  <div class="form-signin w-100 m-auto">
    <form>
      <h1 class="h3 mb-3 fw-normal">Please sign in</h1>

      <div class="form-floating">
        <input type="email" class="form-control" id="floatingInput" placeholder="name@example.com"
               v-model="state.form.email">
        <label for="floatingInput">Email address</label>
      </div>
      <div class="form-floating">
        <input type="password" class="form-control" id="floatingPassword" placeholder="Password"
               v-model="state.form.password">
        <label for="floatingPassword">Password</label>
      </div>

      <div class="form-check text-start my-3">
        <input class="form-check-input" type="checkbox" value="remember-me" id="isRemember" v-model="state.isRemember">
        <label class="form-check-label" for="flexCheckDefault">
          Remember me
        </label>
      </div>
      <button @click="submit()" class="btn btn-primary w-100 py-2" type="submit">Sign in</button>
      <p class="mt-5 mb-3 text-body-secondary">&copy; 2017–2024</p>
    </form>
  </div>
</template>

<style scoped>
html,
body {
  height: 100%;
}

.form-signin {
  max-width: 330px;
  padding: 1rem;
}

.form-signin .form-floating:focus-within {
  z-index: 2;
}

.form-signin input[type="email"] {
  margin-bottom: -1px;
  border-bottom-right-radius: 0;
  border-bottom-left-radius: 0;
}

.form-signin input[type="password"] {
  margin-bottom: 10px;
  border-top-left-radius: 0;
  border-top-right-radius: 0;
}
</style>