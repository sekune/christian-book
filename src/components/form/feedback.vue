<template>
  <div class="h-5" :class="[`text-${type}-500`]">
    {{ text ? text : "" }}
  </div>
</template>

<script>
export default {
  props: {
    text: { type: String, default: "" },
    type: { type: String, default: "red" },
  },
};
</script>
