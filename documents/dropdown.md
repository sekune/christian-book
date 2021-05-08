# Dropdown

### Props

| Нэр    	| Төрөл    	| Шаардалгатай эсэх 	| Тогтмол 	| Тайлбар    	                                                    |
|---------	|---------	|--------------------	|---------- |-------------------------------------------------------------------|
| type    	| string  	|                       | right     | right эсвэл left гэсэн утга авна.                                 |
| text   	| string  	|          	            | Option    | button slot - оо зааж өгөөгүй бол defualt button - ы text.       	|

### Slots


| Нэр    	| Тайлбар                                                                                               | 
|---------	|---------------------------------------------------------------------------------------------------    |
| button   	| Шууд дэлгэцэнд харагдах, cursor очингуут dropdown дэлгэгдэх товчлуур. Товчлуурын хэсгийг энд бичнэ.	|  
| dropdown 	| Button дээр cursor очих үед дэлгэгдэх хэсгийг энд бичнэ.	                                            |

### Import

```javascript
import Button from "@/components/common/dropdown";
```

### Usage

```html
<Dropdown type="left">
    <template #button>
    <button class="rounded border">Default</button>
    </template>
    <template #dropdown>
    <div class="py-1 px-4" role="none">Мэдэгдэл байхгүй</div>
    </template>
</Dropdown>
```

### Example 

```html
<template>
  <div class="mt-10 sm:mt-0">
    <Dropdown type="left">
      <template #button>
        <button class="rounded border">Default</button>
      </template>
      <template #dropdown>
        <div class="py-1 px-4" role="none">Мэдэгдэл байхгүй</div>
      </template>
    </Dropdown>
  </div>
</template>

<script>
import Dropdown from "@/components/common/dropdown";
export default {
  components: { Dropdown },
};
</script>

```