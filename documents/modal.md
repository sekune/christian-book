# Modal

### Props

| Нэр    	    | Төрөл    	| Шаардалгатай эсэх 	| Тогтмол 	| Тайлбар 	         |
|-------------  |---------	|-------------------	|---------	|--------------------|
| title         | String   	| ✔️                    |         	| Modal - ийн гарчиг |

### Emits

| Нэр    	    | Тайлбар 	                            |
|-------------  |---------------------------------------|
| ok            | Modal - ийн зөвшөөрж буй товчлуур     |
| close         | Modal - ийн хаах товчлуур             |

### Slots

| Нэр    	    | Тайлбар 	                              | 
|-------------  |-----------------------------------------|
| content       | Modal - ийн доторх агуулгыг энд бичнэ.  |
| footer        | Modal - ийн footer хэсгийг энд бичнэ.   | 




### Import

```javascript
import Modal from "@/components/feedback/modal";
```


### Usage

```html
<Modal
    title="Ажилтаны мэдээлэл бүртгэх"
    v-if="showModal"
    @close="showModal = false"
    @ok="showModal = false"
>
    <template #content> <div>test</div></template>
</Modal>
```

### Example 

```html
<template>
  <div class="space-y-2">
    <Button
      icon="plus"
      text="modal"
      color="primary"
      @click="showModal = true"
    />
    <Modal
      title="Ажилтаны мэдээлэл бүртгэх"
      v-if="showModal"
      @close="showModal = false"
      @ok="showModal = false"
    >
      <template #content> <div>test</div></template>
      <template #footer>
        <div class="sm:space-x-3 space-y-2 sm:space-y-0">
          <Button text="Хаах" @click="showModal = false" />
          <Button text="Хадгалах" color="info" @click="showModal = false" />
        </div>
      </template>
    </Modal>
  </div>
</template>

<script>
import Modal from "@/components/feedback/modal";
import Button from "@/components/common/button";

export default {
  components: {
    Modal,
    Button,
  },
  data() {
    return {
      showModal: false,
    };
  },
};
</script>
```