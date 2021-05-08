<template>
  <section class="flex flex-col md:flex-row h-screen items-center">
    <div
      class="bg-blue-500 hidden lg:block w-full md:w-1/2 xl:w-2/3 h-screen"
    ></div>

    <div
      class="bg-white w-full md:max-w-md lg:max-w-full md:mx-0 md:w-1/2 xl:w-1/3 h-screen px-6 lg:px-16 xl:px-12 flex items-center justify-center"
    >
      <div class="w-full h-100">
        <h1 class="text-xl md:text-2xl font-bold leading-tight mt-12">
          Чуулган: Христ итгэлийн цахим сан
        </h1>

        <form class="mt-6" action="#" method="POST" @submit.prevent="userLogin">
          <div>
            <label class="block text-gray-700">Нэвтрэх нэр</label>
            <input
              type="text"
              name="email"
              v-model="user.email"
              placeholder=""
              class="w-full px-4 py-3 rounded-lg bg-gray-200 mt-2 border focus:border-blue-500 focus:bg-white focus:outline-none"
              autofocus
            />
          </div>

          <div class="mt-4">
            <label class="block text-gray-700">Нүүц үг</label>
            <input
              type="password"
              name="password"
              v-model="user.password"
              placeholder=""
              class="w-full px-4 py-3 rounded-lg bg-gray-200 mt-2 border focus:border-blue-500 focus:bg-white focus:outline-none"
            />
          </div>
          <Button type="submit" text="Нэвтрэх" color="info" class="mt-8" />
          <Alert
            class="mt-6"
            v-if="alertShow"
            :text="alertText"
            @close="alertShow = false"
          />
        </form>
      </div>
    </div>
  </section>
</template>

<script>
import Alert from "@/components/feedback/alert";
import Button from "@/components/common/button";
import { mapMutations, mapActions } from "vuex";
import api from "@/helpers/api.helper";

export default {
  name: "Login",
  components: { Alert, Button },
  data() {
    return {
      user: {
        email: "",
        password: "",
      },
      loading: false,
      alertShow: false,
      alertText: "Нэвтрэх нэр, нууц үгээ оруулна уу!",
    };
  },
  methods: {
    ...mapMutations(["setUser"]),
    ...mapActions(["login"]),
    async userLogin() {
      this.loading = true;
      if (!this.user.email || !this.user.password) {
        this.alertShow = true;
        this.alertText = "Нэвтрэх нэр, нууц үгээ оруулна уу!";
        this.loading = false;
        return;
      }
      const res = await api.post("/users/login", this.user);
      console.log("login:", res);
      if (res) {
        this.user.password = "";
        this.loading = false;
        if (res.success === true) {
          this.setUser(res);
          this.$router.push("/");
        } else {
          this.alertShow = true;
          this.alertText = res.message;
        }
      } else {
        this.user.password = "";
        this.loading = false;
        this.alertShow = true;
        this.alertText = "Интернэт холболтоо шалгана уу!";
      }
    },
  },
};
</script>
