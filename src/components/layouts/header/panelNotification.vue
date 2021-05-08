<template>
  <div>
    <HeaderButton>
      <Pulse />
      <Icon name="bell" />
    </HeaderButton>
    <Panel v-if="show" />
  </div>
</template>
<script>
import Panel from "@/components/data/panel";
import Icon from "@/components/common/icon";
import Pulse from "@/components/common/pulse";
import HeaderButton from "./headerButton";
export default {
  components: { Icon, Panel, Pulse, HeaderButton },
  data() {
    return {
      show: false,
    };
  },
};
</script>