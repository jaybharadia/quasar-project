import { defineStore } from 'pinia';

export const useLayoutStore = defineStore('layout', {
  state: () => {
    return {
      showFooter: false,
      componentName: null,
      leftDrawerWidth: 200
    };
  },
  getters: {
    isFooterShown: (state) => state.showFooter
  },
  actions: {
    showFooterBar (componentName = null) {
      this.componentName = componentName;
      this.showFooter = true;
    },
    hideFooterBar () {
      this.showFooter = false;
      this.componentName = null;
    }

  }
});
