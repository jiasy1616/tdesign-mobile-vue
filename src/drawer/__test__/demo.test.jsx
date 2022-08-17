/**
 * 该文件为由脚本 `npm run test:demo` 自动生成，如需修改，执行脚本命令即可。请勿手写直接修改，否则会被覆盖
 */

import { mount } from '@vue/test-utils';
import baseVue from '@/drawer/demos/base.vue';
import iconVue from '@/drawer/demos/icon.vue';
import mobileVue from '@/drawer/demos/mobile.vue';

const mapper = {
  baseVue,
  iconVue,
  mobileVue,
};

describe('Drawer', () => {
  Object.keys(mapper).forEach((demoName) => {
    it(`Drawer ${demoName} demo works fine`, () => {
      const wrapper = mount(mapper[demoName]);
      expect(wrapper.element).toMatchSnapshot();
    });
  });
});
