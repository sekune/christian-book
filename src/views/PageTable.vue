<template>
  <div class="space-y-2">
    <h1>Data Table</h1>

    <div class="flex space-x-2">
      <button
        @click="
          show('success');
          anime = !anime;
        "
        class="focus:outline-none px-4 py-1 bg-blue-400 rounded-md text-white"
      >
        success
      </button>

      <button
        @click="show('info')"
        class="focus:outline-none px-4 py-1 bg-blue-400 rounded-md text-white"
      >
        info
      </button>
      <button
        @click="show('warning')"
        class="focus:outline-none px-4 py-1 bg-blue-400 rounded-md text-white"
      >
        warning
      </button>
      <button
        @click="show('error')"
        class="focus:outline-none px-4 py-1 bg-blue-400 rounded-md text-white"
      >
        error
      </button>
    </div>
    <DataTable :headers="headers" :data="data" :pagination="true" />
  </div>
</template>

<script>
import DataTable from "@/components/data/datatable";

export default {
  components: {
    DataTable,
  },
  data() {
    return {
      headers: [
        { key: "name", title: "Нэр", class: [] },
        { key: "email", title: "Имэйл", class: [] },
        { key: "department", title: "Хэлтэс", class: [] },
        { key: "role", title: "Хэрэглэгчийн эрх", class: [] },
        {
          key: "action",
          title: "",
          class: ["text-right", "font-medium"],
        },
      ],
      data: [],
    };
  },
  created() {
    for (let i = 0; i < 201; i++) {
      const element = {
        name: `Bob${i}`,
        department: `Optimization${i}`,
        role: `Admin${i}`,
        email: `Bob${i}@example.com`,
      };
      this.data.push(element);
    }
  },
  methods: {
    show(type) {
      this.$root.notice(
        "Амжилттай1",
        "Таны мэдээлэл амжилттай бүртгэггдлээ.",
        type
      );
    },
  },
};
</script>
