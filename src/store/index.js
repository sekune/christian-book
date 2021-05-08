import { createStore } from 'vuex';
import auth from './auth.store';
import common from './common.store';
import apiPlugin from '@/plugins/api.plugin';

export default createStore({
  plugins: [apiPlugin],
  state: {},
  getters: {},
  mutations: {},
  actions: {},
  modules: {
    auth,
    common,
  },
});
