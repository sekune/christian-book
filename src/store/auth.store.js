// import CryptoJS from 'crypto-js';
import storage from '@/helpers/storage.helper';
import router from '@/router/';

export default {
  state: () => ({
    user: null,
    token: null,
  }),
  mutations: {
    setUser(state, user) {
      if (user) {
        state.user = user.user;
        state.token = user.token;
        storage.set('user', user);
      }
    },
    logout(state) {
      state.user = null;
      state.token = null;
      storage.clear();
      router.push('/');
    },
  },
  /* actions: {
    login(user) {
      const payload = user;
      payload.password = CryptoJS.MD5(user.password).toString();
      return this.$api('/users/login', payload);
    },
  }, */
};
