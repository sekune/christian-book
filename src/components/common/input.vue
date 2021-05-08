<template>
  <div
    class="w-full inline-flex justify-between items-center border-gray-800 border border-solid shadow-sm rounded-md text-base sm:w-auto sm:text-sm focus:outline-none focus:ring-2 focus:ring-offset-2"
  >
    <div v-if="icon" class="border-r px-2 py-2 border-gray-800">
      <Icon :name="icon" />
    </div>
    <input
      type="text"
      class="border-0 rounded-md focus:outline-none"
      :placeholder="placeholder"
    />
  </div>
</template>

<script>
import Icon from "@/components/common/icon";

export default {
  name: "Input",
  components: { Icon },
  props: {
    color: { type: String, default: "white" },
    placeholder: { type: String, required: true },
    icon: { type: String, default: "" },
  },
};
</script>
