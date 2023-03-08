import { boot } from 'quasar/wrappers';
import messages from 'src/data/messages/index';
export default boot(({ app }) => {
  app.config.globalProperties.$messages = messages;
});
