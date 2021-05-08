<template>
  <div>
    <HeaderButton @click="showPanel">
      <Icon name="category" />
    </HeaderButton>
    <Panel v-if="show" @close="show = false" title="Байгууллага">
      <template #content>
        <div v-for="org in organizations" :key="org.id">
          <Tree
            :item="org"
            sub="sub_organizations"
            @select="select($event)"
            id="id"
            :selected="selected"
          />
        </div>
      </template>
    </Panel>
  </div>
</template>
<script>
import Panel from "@/components/data/panel";
import Icon from "@/components/common/icon";
import HeaderButton from "./headerButton";
import Tree from "@/components/data/tree";
import { mapGetters } from "vuex";
export default {
  components: { Icon, Panel, HeaderButton, Tree },
  data() {
    return {
      show: false,
      selected: "",
    };
  },
  computed: { ...mapGetters(["organizations"]) },
  methods: {
    scrollMove() {
      const el = document.getElementById(this.selected);
      if (el)
        el.scrollIntoView({
          block: "center",
          inline: "center",
        });
    },
    showPanel() {
      this.show = true;
      setTimeout(() => {
        this.scrollMove();
      });
    },
    select(org) {
      this.selected = org.id;
      this.show = false;
    },
  },
};
</script>