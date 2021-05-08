<template>
  <div>
    <Table :headers="headers" :data="listOfData" />
    <Pagination
      v-if="pagination"
      :totalRow="totalRow"
      :currentPage="pageNo"
      :pageSize="pageSize"
      @change="pageChanged($event)"
    />
  </div>
</template>

<script>
import Table from "@/components/data/table";
import Pagination from "@/components/data/pagination";

export default {
  props: {
    headers: { type: Array, required: true },
    data: { type: Array, required: true },
    pagination: { type: Boolean, default: true },
  },
  components: { Table, Pagination },
  data() {
    return {
      pageSize: 20,
      pageNo: 1,
    };
  },
  computed: {
    listOfData() {
      if (this.pagination) {
        return this.data.slice(
          (this.pageNo - 1) * this.pageSize,
          this.pageNo * this.pageSize
        );
      } else {
        return this.data;
      }
    },
    totalRow() {
      return this.data.length;
    },
  },
  methods: {
    pageChanged(page) {
      this.pageNo = page;
    },
  },
};
</script>