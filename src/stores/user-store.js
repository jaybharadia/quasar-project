import { defineStore } from 'pinia';

export const useUserStore = defineStore('user', {
  state: () => {
    return {
      user: {}
    };
  },
  getters: {
  },
  actions: {
    setUser(user) {
      this.user = user;
    }
  }
});
