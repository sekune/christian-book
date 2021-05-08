<template>
  <form class="text-left">
    <template v-for="(control, i) in form.controls" :key="i">
      <component
        :is="control.component"
        :control="control"
        @changed="changed(control, $event)"
      ></component>
    </template>
  </form>
</template>

<script>
import Input from "@/components/form/input";
import Select from "@/components/form/select";
import Check from "@/components/form/check";
import Option from "@/components/form/option";
import Textarea from "@/components/form/textarea";

export default {
  name: "Form",
  components: { Input, Select, Check, Option, Textarea },
  props: {
    form: { type: Object, required: true },
  },
  methods: {
    changed(control, value) {
      control.value = value;
      control.validate();
    },
  },
};
</script>
