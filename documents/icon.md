# Icon

Шаардлагатай **icon**-оо [boxicons.com](https://boxicons.com/)-оос **svg**-ээр авч `@/helpers/iconHelper.js` дотор нэмнэ.

### Props

| name    	| type    	| required 	| default 	| description 	|
|---------	|---------	|----------	|---------	|-------------	|
| name    	| string  	| ✔️         |         	 | name        	 |

### Import

```javascript
import Icon from "@/components/common/icon";
```

### Usage

```html
<Icon name="chevronRight" />
```

### Example 

```html
<template>
  <div class="space-y-4">
    <Icon name="chevronRight" />
  </div>
</template>

<script>
import Icon from "@/components/common/icon";
export default {
  components: { Icon }
};
</script>
```
