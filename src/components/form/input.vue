<template>
  <div>
    <Label :for="control.label"> {{ control.label }}</Label>
    <input
      :id="control.label"
      :name="control.label"
      :placeholder="control.placeholder"
      autocomplete="off"
      @input="addEvent"
      type="text"
      class="w-full sm:text-sm shadow-sm rounded py-1 px-3 dark:bg-form-control-dark focus:outline-none focus:ring-0"
      :class="
        control.errors
          ? 'border-red-500 focus:border-red-500'
          : 'border-gray-300 dark:border-gray-500'
      "
    />
    <Feedback :text="control.errors ? control.errors[0] : null" />
  </div>
</template>
<script>
import Label from "./label";
import Feedback from "./feedback";
export default {
  props: {
    control: { required: true },
  },
  components: { Label, Feedback },
  methods: {
    addEvent({ target }) {
      this.$emit("changed", target.value);
    },
  },
};
</script>
