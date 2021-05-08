<template>
  <div class="w-6"><span v-html="icon(name)"></span></div>
</template>

<script>
import iconHelper from '@/helpers/icon.helper';
export default {
  name: 'Icon',
  props: {
    name: {
      type: String,
      required: true,
    },
  },
  methods: {
    icon: iconHelper,
  },
};
</script>
