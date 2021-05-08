import storage from '@/helpers/storage.helper'

const customMixin = {
  created() {
    this.$store.commit('setUser', storage.get('user'));

    if (storage.get('theme') === 'dark') {
      this.$store.commit('toggleDarkMode');
    }
  },
  methods: {
    notice(title, text, type = 'info') {
      this.$store.commit('notice', { title, text, type });
    },
  },
};

export default customMixin;
