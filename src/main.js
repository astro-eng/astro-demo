import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import './index.css';

import Heading1 from '@/components/Heading1.vue';
import Heading2 from '@/components/Heading2.vue';
import Heading3 from '@/components/Heading3.vue';
import Heading4 from '@/components/Heading4.vue';
import Heading5 from '@/components/Heading5.vue';
import Button from '@/components/Button.vue';
import ButtonPrimary from '@/components/ButtonPrimary.vue';

const app = createApp(App);

app.use(router);

app
  .component('Heading1', Heading1)
  .component('Heading2', Heading2)
  .component('Heading3', Heading3)
  .component('Heading4', Heading4)
  .component('Heading5', Heading5)
  .component('ButtonPrimary', ButtonPrimary)
  .component('Button', Button);

app.mount('#app');
