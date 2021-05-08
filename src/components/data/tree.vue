<template>
  <div class="w-full">
    <div
      class="flex items-center rounded cursor-pointer hover:bg-gray-200 dark:hover:bg-gray-600 h-8"
      :class="{
        'bg-blue-300 hover:bg-blue-200 dark:bg-blue-500 dark:hover:bg-blue-400':
          item[id] == selected,
      }"
      :id="item[id]"
    >
      <Icon
        v-if="hasChild"
        :name="isOpen ? 'chevronDown' : 'chevronRight'"
        @click="isOpen = !isOpen"
      />
      <div v-else class="w-6"></div>

      <div
        class="flex items-center w-full h-full"
        @click="$emit('select', item)"
      >
        {{ item[label] }}
      </div>
    </div>
    <div class="pl-6" v-if="isOpen">
      <Tree
        v-for="(child, i) in item[sub]"
        :key="i"
        :item="child"
        :sub="sub"
        :id="id"
        :selected="selected"
        @select="$emit('select', $event)"
      />
    </div>
  </div>
</template>

<script>
import Icon from "@/components/common/icon";

export default {
  name: "Tree",
  props: {
    item: { type: Object, required: true },
    sub: { type: String, required: true },
    label: { type: String, default: "name" },
    id: { required: true },
    selected: { required: true },
  },
  components: { Icon },
  data() {
    return {
      isOpen: true,
    };
  },
  computed: {
    hasChild() {
      return this.item[this.sub] && this.item[this.sub].length > 0;
    },
  },
};
</script>
