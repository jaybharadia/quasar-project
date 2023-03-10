<template>
  <HydrateLoader
    v-if="isHydrating"
    class="window-height flex column flex-center"
  />
  <q-intersection transition="slide-left" v-else>
    <q-layout view="hHh lpR fFf">
      <q-header elevated class="bg-primary text-white">
        <q-toolbar>
          <q-btn dense flat round icon="menu" @click="toggleLeftDrawer" />

          <q-toolbar-title>
            <q-avatar>
              <img src="favicon.ico" />
            </q-avatar>
            {{ $options.project.name }}
          </q-toolbar-title>

          <!-- <q-btn dense flat round icon="menu" @click="toggleRightDrawer" /> -->
          <q-space></q-space>
          <q-tabs align="left">
            <q-route-tab to="/home" label="Home" />
            <q-route-tab to="/projects" label="Projects" />
            <q-route-tab to="/orders" label="Orders" />
            <q-route-tab to="/invoices" label="Invoices" />
          </q-tabs>

          <q-space></q-space>
          <q-btn flat round dense icon="local_shipping" class="q-ml-sm-lg" />
          <q-btn flat round dense icon="contact_phone" class="q-ml-sm-lg" />
          <q-btn flat round dense icon="account_circle" class="q-ml-sm-lg" />
          <q-btn flat round dense icon="logout" class="q-ml-sm-lg" />
        </q-toolbar>

        <div id="sub-header"></div>
      </q-header>

      <LeftDrawer
        :isOpen="leftDrawerOpen"
        :width="layoutStore.leftDrawerWidth"
      />

      <q-drawer v-model="rightDrawerOpen" side="right" elevated>
        <!-- drawer content -->
      </q-drawer>

      <q-page-container>
        <router-view />
      </q-page-container>

      <template v-if="layoutStore.showFooter">
        <q-footer
          elevated
          class="bg-grey-8 text-white"
          :model-value="layoutStore.showFooter"
        >
          <component :is="layoutStore.componentName"></component>
        </q-footer>
      </template>
    </q-layout>
  </q-intersection>
</template>

<script>
import { useLayoutStore } from 'src/stores/layout-store';
import KycAlert from 'src/components/footer/KycAlert.vue';
import LeftDrawer from 'src/components/layout/LeftDrawer.vue';
import { project } from '../../package.json';
import { useHydrate } from 'src/composables/useHydrate';
import HydrateLoader from 'src/components/loader/Hydrate.vue';
export default {
  project,
  setup() {
    const layoutStore = useLayoutStore();

    const { hydrate } = useHydrate();

    const { loading: isHydrating, onResult, afterHydrate } = hydrate();

    onResult((res) => {
      afterHydrate(res);
    });

    return {
      layoutStore,
      isHydrating
    };
  },
  components: {
    KycAlert,
    LeftDrawer,
    HydrateLoader
  },
  data() {
    return {
      leftDrawerOpen: false,
      rightDrawerOpen: false,
      logoHeight: '150px',
      showFooter: false
    };
  },
  methods: {
    toggleLeftDrawer() {
      this.leftDrawerOpen = !this.leftDrawerOpen;
    },
    toggleRightDrawer() {
      this.rightDrawerOpen = !this.rightDrawerOpen;
    }
  }
};
</script>
