/*
 * @Date: 2020-06-15 15:41:00
 * @LastEditors: 曾令宇
 * @LastEditTime: 2020-06-17 23:41:26
 * @FilePath: \element-dynamic-form-item\packages\dynamic-form-item\index.js
 */
import DynamicFormItem from './src'

DynamicFormItem.install = function (Vue) {
    Vue.component(DynamicFormItem.name, DynamicFormItem);
}

export default DynamicFormItem;