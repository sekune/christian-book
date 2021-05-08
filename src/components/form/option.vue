<template>
  <div>
    <Label>{{ control.label }}</Label>
    <div>
      <div
        class="inline-flex items-center"
        v-for="(op, i) in control.options"
        :key="i + op[label]"
      >
        <input
          :id="'option' + i + op[label]"
          :name="control.label"
          type="radio"
          @input="addEvent(op)"
          class="focus:ring-blue-500 h-4 w-4 text-blue-600 dark:bg-form-control-dark"
          :class="
            control.errors
              ? 'border-red-500 focus:border-red-500'
              : 'border-gray-300 dark:border-gray-500'
          "
        />
        <label :for="'option' + i + op[label]" class="ml-1 mr-3">
          {{ op[label] }}
        </label>
      </div>
    </div>
    <Feedback :text="control.errors ? control.errors[0] : null" />
  </div>
</template>

<script>
import Label from "./label";
import Feedback from "./feedback";

export default {
  name: "Option",
  props: {
    control: { required: true },
  },
  components: { Label, Feedback },
  data() {
    return {
      label: "_name",
    };
  },
  methods: {
    addEvent(selected) {
      this.$emit("changed", selected);
    },
  },
};
</script>
