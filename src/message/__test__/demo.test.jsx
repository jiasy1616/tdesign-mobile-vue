/**
 * 该文件为由脚本 `npm run test:demo` 自动生成，如需修改，执行脚本命令即可。请勿手写直接修改，否则会被覆盖
 */

import { mount } from '@vue/test-utils';
import baseVue from '@/message/demos/base.vue';
import closeAllVue from '@/message/demos/closeAll.vue';
import mobileVue from '@/message/demos/mobile.vue';
import themeVue from '@/message/demos/theme.vue';

const mapper = {
  baseVue,
  closeAllVue,
  mobileVue,
  themeVue,
};

describe('Message', () => {
  Object.keys(mapper).forEach((demoName) => {
    it(`Message ${demoName} demo works fine`, () => {
      const wrapper = mount(mapper[demoName]);
      expect(wrapper.element).toMatchSnapshot();
    });
  });
});
