<template>
  <div class="flex flex-col">
    <div class="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
      <div class="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
        <div
          class="shadow overflow-hidden border-b border-gray-200 dark:border-gray-600 sm:rounded-lg h-96 overflow-y-scroll"
        >
          <table class="w-full">
            <thead>
              <tr>
                <th
                  scope="col"
                  class="sticky bg-gray-200 dark:bg-gray-600 top-0 px-6 py-3 text-left text-xs font-medium text-gray-800 dark:text-gray-300 uppercase tracking-wider"
                  v-for="header in headers"
                  :key="header.key"
                >
                  {{ header.title }}
                </th>
              </tr>
            </thead>
            <tbody class="divide-y divide-gray-200 dark:divide-gray-600">
              <tr v-for="(item, index) in data" :key="index">
                <td
                  class="px-6 py-4 whitespace-nowrap text-sm"
                  v-for="(th, i) in headers"
                  :key="i"
                  :class="th.class"
                >
                  <slot :name="th.key" :item="item">
                    {{ item[th.key] }}
                  </slot>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    headers: { type: Array, required: true },
    data: { type: Array, required: true },
  },
};
</script>
