import Vue from 'vue';
import vueComponents from './components/vueComponents'

const version = '1.0.0';
const install = function (Vue, config = {}) {
    if (install.installed) return;
    Vue.component(vueComponents.name, vueComponents);
};

// auto install
if (typeof window !== 'undefined' && window.Vue) {
    install(window.Vue);
};

export default {
    install,
    version,
    vueComponents
};
