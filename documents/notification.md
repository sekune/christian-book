# Notification

### Types

| Нэр    	  | Тайлбар    	              |
|-----------|---------------------------|
| success   | Амжилттай                 |
| info    	| Мэдээлэл                  |
| warning   | Анхааруулга               |
| error   	| Алдаа                     |


### Usage

```javascript
this.$root.notice(
    "Амжилттай",
    "Таны мэдээлэл амжилттай бүртгэгдлээ. ",
    type
    );
```

### Example 

```html
<template>
  <div class="space-x-2">
    <button
      @click="show('success')"
      class="focus:outline-none px-4 py-1 bg-blue-400 rounded-md text-white"
    >
      success
    </button>

    <button
      @click="show('info')"
      class="focus:outline-none px-4 py-1 bg-blue-400 rounded-md text-white"
    >
      info
    </button>
    <button
      @click="show('warning')"
      class="focus:outline-none px-4 py-1 bg-blue-400 rounded-md text-white"
    >
      warning
    </button>
    <button
      @click="show('error')"
      class="focus:outline-none px-4 py-1 bg-blue-400 rounded-md text-white"
    >
      error
    </button>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  methods: {
    show(type) {
      this.$root.notice(
        "Амжилттай",
        "Таны мэдээлэл амжилттай бүртгэгдлээ.",
        type
      );
    },
  },
};
</script>

```