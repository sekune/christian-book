<template>
  <header class="h-12 dark:bg-gray-800 border-b-2 dark:border-gray-900">
    <div class="flex h-full items-center justify-between">
      <!-- Navbar right -->
      <div class="relative flex items-center space-x-3 pr-2">
        <Nav />
      </div>
      <div class="relative flex items-center space-x-3 pr-2">
        <div class="flex items-center space-x-3 md:flex text-gray-600">
          <HeaderButton @click="toggleDarkMode">
            <Icon :name="darkMode ? 'moon' : 'sun'" />
          </HeaderButton>
        </div>

        <HeaderButton
          class="bg-blue-500 text-gray-200 hover:bg-blue-500 hover:text-gray-200"
        >
          <span class="tracking-wider font-medium uppercase">
            <Dropdown type="right" class="mt-1">
              <template #button>
                <div
                  class="tracking-wider font-medium uppercase flex justify-self-center pb-1"
                >
                  <span v-if="$store.state.auth.user != null">
                    {{ $store.state.auth.user.name.substring(0, 1) }}
                  </span>
                  <Icon v-else name="profile" />
                </div>
              </template>
              <template #dropdown>
                <div
                  v-if="$store.state.auth.token"
                  class="py-2 px-4 text-gray-600"
                  role="none"
                  @click="logout"
                >
                  Гарах
                </div>
                <div
                  v-else
                  class="py-2 px-4 text-gray-600"
                  role="none"
                  @click="$router.push('/login')"
                >
                  Нэвтрэх
                </div>
              </template>
            </Dropdown>
          </span>
        </HeaderButton>
      </div>
    </div>
  </header>
</template>

<script>
import Icon from "@/components/common/icon";
import HeaderButton from "./headerButton";
import Dropdown from "@/components/common/dropdown";
import Nav from "./nav";
import { mapMutations, mapGetters } from "vuex";
export default {
  name: "Header",
  components: {
    Icon,
    HeaderButton,
    Dropdown,
    Nav,
  },
  computed: { ...mapGetters(["darkMode"]) },
  methods: {
    ...mapMutations(["toggleDarkMode", "logout"]),
  },
};
</script>
