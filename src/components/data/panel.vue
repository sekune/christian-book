<template>
  <div>
    <!-- Backdrop -->
    <!-- backdrop -->
    <div
      class="fixed inset-0 bg-black bg-opacity-50 transition-opacity"
      aria-hidden="true"
      @click="$emit('close')"
    ></div>

    <!-- Panel -->
    <section
      tabindex="-1"
      class="left-0 fixed inset-y-0 z-20 w-full max-w-xs dark:text-white bg-white dark:bg-gray-700 shadow-xl sm:max-w-md focus:outline-none"
    >
      <div
        class="right-0 absolute p-2 transform translate-x-full cursor-pointer text-white"
      >
        <Icon name="x" @click="$emit('close')" />
      </div>
      <!-- Panel content -->
      <div class="flex flex-col h-screen">
        <!-- Panel header -->
        <slot name="header">
          <div class="text-center px-4 py-4 border-b dark:border-gray-800">
            <h2 class="text-xl font-medium">{{ title }}</h2>
          </div>
        </slot>
        <!-- Content -->
        <div class="flex-1 p-4 overflow-y-auto">
          <slot name="content">
            <!-- <div class="space-y-1">
              <h6 class="text-lg">Mode</h6>
              <div class="flex items-center space-x-8">
                <div><Button text="Light" icon="sun" /></div>

                <div><Button text="Dark" icon="moon" /></div>
              </div>
            </div>

            <div class="space-y-1">
              <h6 class="text-lg">Colors</h6>
              <div><Button text="red" icon="sun" /></div>
            </div> -->
          </slot>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import Icon from '@/components/common/icon';
export default {
  props: {
    title: { type: String, required: true },
    left: {},
    right: {},
  },
  components: { Icon },
};
</script>
