import { boot } from 'quasar/wrappers';

import PrimaryButton from 'src/components/buttons/Primary.vue';
export default boot(({ app }) => {
  app.component('PrimaryButton', PrimaryButton);
});
