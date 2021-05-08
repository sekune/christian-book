# Tree

### Props

| Нэр    	    | Төрөл    	| Шаардалгатай эсэх 	| Тогтмол 	| Тайлбар 	                    |
|-------------  |---------	|-------------------	|---------	|---------------------------    |
| item          | Object   	| ✔️                    |         	| Энэхүү модонд байх бүх утгууд |

### Emits

| Нэр    	    | Тайлбар 	                |
|-------------  |---------------------------|
| selected      | Сонгож авсан утга         |



### Import

```javascript
import Tree from "@/components/data/tree";
```


### Usage

```html
<Tree :item="org" @selected="selected" />
```

### Example 

```html
<template>
  <div class="space-y-1">
    <Tree :item="org" @selected="selected" />
  </div>
</template>

<script>
import Tree from "@/components/data/tree";
export default {
  components: { Tree },
  data() {
    return {
      org: {
        name: "test",
        subs: [
          {
            name: "test1",
            subs: [{ name: "test1.1" }, { name: "test1.2" }],
          },
          { name: "test2" },
          {
            name: "test3",
            subs: [{ name: "test3.1" }, { name: "test3.2" }],
          },
        ],
      },
    };
  },
  methods: {
    selected(item) {
      console.log(item);
    },
  },
};
</script>
```