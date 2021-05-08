# Panel

### Props

| Нэр    	    | Төрөл    	| Шаардалгатай эсэх 	| Тогтмол 	| Тайлбар 	         |
|-------------  |---------	|-------------------	|---------	|--------------------|
| title         | String   	| ✔️                    |         	| Panel - ийн гарчиг |

### Emits

| Нэр    	    | Тайлбар 	                |
|-------------  |---------------------------|
| close         | Panel хаах товчлуур       |

### Slots

| Нэр    	    | Тайлбар 	                        | 
|-------------  |-----------------------------------|
| header        | Header хэсгийг энд бичнэ.         | 
| content       | Panel доторх агуулгыг энд бичнэ.  |




### Import

```javascript
import Panel from "@/components/data/panel";
```


### Usage

```html
<Panel title="Тохиргоо" v-if="showPanel" @close="showPanel = false">
    <template #content>
    <div>haha</div>
    </template>
</Panel>
```

### Example 

```html
<template>
  <div class="space-y-2">
    <Button
      icon="exit"
      text="Button"
      color="warning"
      @click="showPanel = true"
    />
    <Panel title="Тохиргоо" v-if="showPanel" @close="showPanel = false">
      <template #content>
        <div>haha</div>
      </template>
    </Panel>
  </div>
</template>

<script>
import Panel from "@/components/data/panel";
import Button from "@/components/common/button";

export default {
  components: {
    Panel,
    Button,
  },
  data() {
    return {
      showPanel: false,
    };
  },
};
</script>
```