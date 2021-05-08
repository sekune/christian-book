# Data table

### Props

| Нэр    	    | Төрөл    	| Шаардалгатай эсэх 	| Тогтмол 	| Тайлбар 	                |
|-------------|---------	|-------------------	|---------	|---------------------------|
| headers     | array   	| ✔️                  |         	| table - ийн header хэсэг  |
| data        | array   	| ✔️                  |         	| table - ийн data          |
| pagination  | boolean  	|                     | true     	| table - ийн хуудаслалт    |


### Import

```javascript
import DataTable from "@/components/data/datatable";
```


### Usage

```html
<DataTable :headers="headers" :data="data" :pagination="true" />
```

### Example 

```html
<template>
  <div class="space-x-2">
    <DataTable :headers="headers" :data="data" :pagination="true" />
  </div>
</template>

<script>
import DataTable from "@/components/data/datatable";
export default {
  components: {
    DataTable,
  },
  created() {
    for (let i = 0; i < 41; i++) {
      const element = {
        name: `Bob${i}`,
        department: `Optimization${i}`,
        role: `Admin${i}`,
        email: `Bob${i}@example.com`,
      };
      this.data.push(element);
    }
  },
  data() {
    return {
      headers: [
        { key: "name", title: "Нэр", class: [] },
        { key: "email", title: "Имэйл", class: [] },
        { key: "department", title: "Хэлтэс", class: [] },
        { key: "role", title: "Хэрэглэгчийн эрх", class: [] },
        {
          key: "action",
          title: "",
          class: ["text-right", "font-medium"],
        },
      ],
      data: [],
    };
  },
};
</script>
```