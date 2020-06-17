/*
 * @Date: 2020-06-18 00:08:22
 * @LastEditors: 曾令宇
 * @LastEditTime: 2020-06-18 02:39:36
 * @FilePath: \element-ui-expansions\packages\index.js
 */ 

import DynamicFormItem from "./dynamic-form-item/index"

const components = [DynamicFormItem];

// eslint-disable-next-line no-unused-vars
const install = function (Vue, options) {
    components.forEach(component => {
        Vue.component(component.name, component)
    })
}

/* istanbul ignore if */
if (typeof window !== 'undefined' && window.Vue) {
    install(window.Vue);
}
export default {
    install,
    DynamicFormItem
}