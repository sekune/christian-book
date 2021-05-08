# Button

### Props

| name    	| type    	| required 	| default 	| description 	  |
|---------	|---------	|----------	|---------	|-------------	  |
| text    	| string  	| ✔️        |         	| text        	  |
| color   	| string  	|          	| white    	| color       	  |
| loading 	| boolean 	|          	| false    	| loading         |
| icon     	| String   	|          	|         	| button-ы icon  	|

### Import

```javascript
import Button from "@/components/common/button";
```

### Usage

```html
<Button icon="x" text="Button" color="warning" @click="submit" />
```

### Example 

```html
<template>
  <div class="space-y-1">
    <Button icon="x" text="Button" color="warning" @click="submit" />
  </div>
</template>

<script>
import Button from "@/components/common/button";
export default {
  components: { Button },
  methods: {
    submit() {
      console.log("GG");
    },
  },
};
</script>
```