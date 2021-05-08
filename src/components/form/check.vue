<template>
  <div>
    <Label :for="control.label">{{ control.label }}</Label>
    <div>
      <div
        class="inline-flex items-center"
        v-for="(op, i) in control.options"
        :key="i + op[label]"
      >
        <div class="flex items-center h-5">
          <input
            :id="'check' + i + op[label]"
            :name="control.label"
            type="checkbox"
            @input="addEvent(i, op)"
            class="focus:ring-blue-500 h-4 w-4 text-blue-600 rounded dark:bg-form-control-dark"
            :class="
              control.errors
                ? 'border-red-500 focus:border-red-500'
                : 'border-gray-300 dark:border-gray-500'
            "
          />
        </div>

        <label :for="'check' + i + op[label]" class="ml-1 mr-3">
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
      checked: [],
      label: "_name",
    };
  },
  methods: {
    addEvent(id, op) {
      const found = this.checked.find((c) => c._id == id);
      if (!found) {
        this.checked.push({ ...op, _id: id });
      } else {
        this.checked.splice(this.checked.indexOf(found), 1);
      }
      this.$emit("changed", this.checked);
    },
  },
};
</script>
