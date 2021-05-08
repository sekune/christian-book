<template>
  <div class="w-full">
    <div class="w-full">
      <Input placeholder="Хайх..." icon="search" />
    </div>
    <div class="flex flex-wrap p-10 w-full">
      <div v-for="book in bookList" :key="book.id" class="w-1/6 m-4 space-y-4">
        <div class="h-72 table-cell align-bottom relative">
          <img class="w-full" :src="'https://i.postimg.cc/' + book.photo" />
        </div>
        <label class="w-full text-center mt-2">{{ book.name }}</label>
      </div>
    </div>
  </div>
</template>

<script>
import api from "@/helpers/api.helper";
import Input from "@/components/common/input";

export default {
  components: { Input },
  data() {
    return {
      bookList: [],
    };
  },
  created() {
    this.loadData();
  },
  methods: {
    loadData() {
      api.get("/books?limit=52").then((res) => {
        if (res.success === true) {
          this.bookList = res.data;
          console.log(this.bookList);
        }
      });
    },
  },
};
</script>
