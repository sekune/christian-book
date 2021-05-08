# Pagination

### Props

| Нэр    	    | Төрөл    	| Шаардалгатай эсэх 	| Тогтмол 	| Тайлбар 	                |
|-------------  |---------	|-------------------	|---------	|---------------------------|
| totalRow      | Number   	| ✔️                    |         	| Нийт мөр                  |
| currentPage   | Number   	| ✔️                    |         	| Одоо байгаа хуудас        |
| pageSize      | Number  	| ✔️                    |        	| Бүх хуудсын тоо           |

### Emits

| Нэр    	    | Тайлбар 	                |
|-------------  |---------------------------|
| change        | Хуудас өөрчлөх функц      |



### Import

```javascript
import Pagination from "@/components/data/pagination";
```


### Usage

```html
<Pagination
    v-if="pagination"
    :totalRow="totalRow"
    :currentPage="pageNo"
    :pageSize="pageSize"
    @change="pageChanged($event)"
/>
```

### Example 

```html
<template>
  <div class="space-x-2">
    <Pagination
      v-if="pagination"
      :totalRow="totalRow"
      :currentPage="pageNo"
      :pageSize="pageSize"
      @change="pageChanged($event)"
    />
  </div>
</template>

<script>
import Pagination from "@/components/data/pagination";
export default {
  components: { Pagination },
  data() {
    return {
      pagination: true,
      pageSize: 20,
      pageNo: 1,
      totalRow: 100,
    };
  },
  methods: {
    pageChanged(page) {
      this.pageNo = page;
    },
  },
};
</script>
```