import storage from '@/helpers/storage.helper'

export default {
  state: () => ({
    isOpenSidebar: true,
    darkMode: false,
    notifications: [],
    loading: false,
    menu: [
      {
        path: '/about',
        name: 'Бидний тухай',
        icon: 'home',
      },
      {
        path: '/home',
        name: 'Номууд',
        icon: 'book',
      },
      {
        path: '/best',
        name: 'Онцлох ном',
        icon: 'bookBest',
      },
    ],
  }),
  getters: {
    menu(state) {
      return state.menu
    },
    loading(state) {
      return state.loading
    },
    darkMode(state) {
      return state.darkMode
    },
    isOpenSidebar(state) {
      return state.isOpenSidebar
    },
    notifications(state) {
      return state.notifications
    },
    hasNotice(state) {
      return state.notifications.length > 0;
    }
  },
  mutations: {
    toggleDarkMode(state) {
      state.darkMode = !state.darkMode;
      if (state.darkMode) {
        storage.set('theme', 'dark');
      } else {
        storage.set('theme', 'light');
      }
    },
    toggleSidebar(state) {
      state.isOpenSidebar = !state.isOpenSidebar;
    },
    notice(state, { title, text, type }) {
      state.notifications.push({
        title,
        text,
        type,
        id: state.notifications.length + 1,
      });
      setTimeout(() => {
        state.notifications.shift();
      }, 4000);
    },
    hideNotice(state, id) {
      state.notifications = state.notifications.filter((n) => n.id != id);
    },
  },
  actions: {},
};
