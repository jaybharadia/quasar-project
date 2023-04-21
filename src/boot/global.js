import { boot } from 'quasar/wrappers';

import PrimaryButton from 'src/components/buttons/Primary.vue';
import IndexButton from 'src/components/buttons/Index.vue';

export default boot(({ app }) => {
  app.component('PrimaryButton', PrimaryButton);
  app.component('BiButton', IndexButton);
});
