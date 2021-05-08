<template>
  <div class="relative">
    <img
      class="table-cell align-bottom"
      :src="'https://i.postimg.cc/' + image"
      :alt="title"
    />
    <span v-if="title" class="align-top text-center">{{ title }}</span>
  </div>
</template>

<script>
export default {
  name: "Picture",
  props: {
    title: { type: String, default: "" },
    image: { type: String, required: true },
  },
};
</script>
