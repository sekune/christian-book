<template>
  <div>
    <Label :for="control.label">{{ control.label }}</Label>
    <textarea
      :id="control.label"
      :name="control.label"
      :placeholder="control.placeholder"
      @input="addEvent"
      rows="3"
      class="shadow-sm w-full border-gray-300 rounded dark:border-gray-600 dark:bg-form-control-dark"
    />
    <Feedback />
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
