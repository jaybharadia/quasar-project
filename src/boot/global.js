import { boot } from 'quasar/wrappers'

import PasswordToggleInput from 'src/components/form/inputs/PasswordToggleInput.vue'
import PrimaryButton from 'src/components/buttons/Primary.vue'
export default boot(({ app }) => {
  app.component('PasswordToggleInput', PasswordToggleInput)
  app.component('PrimaryButton', PrimaryButton)
})
