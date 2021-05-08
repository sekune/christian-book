# Alert

### Props

| Нэр    	| Төрөл    	| Шаардалгатай эсэх 	| Тогтмол 	| Тайлбар    	        |
|---------	|---------	|--------------------	|---------- |-----------------------|
| text   	| string  	|✔️                     |           | Alert - ны text      	|

### Emits

| Нэр    	| Тайлбар    	                |
|---------	|---------------------------|
| close   	| Alert - ыг байхгүй болгох |

### Import

```javascript
import Alert from "@/components/feedback/alert";
```

### Usage

```html
<Alert :text="alertText" @close="alertShow = false" />
```

### Example 

```html
<template>
  <div class="w-64">
    <Alert v-if="alertShow" :text="alertText" @close="alertShow = false" />
  </div>
</template>

<script>
import Alert from "@/components/feedback/alert";
export default {
  components: { Alert },
  data() {
    return {
      alertShow: true,
      alertText: "Alert",
    };
  },
};
</script>
```