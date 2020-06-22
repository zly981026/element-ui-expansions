/*
 * @Date: 2020-06-18 00:02:25
 * @LastEditors: 曾令宇
 * @LastEditTime: 2020-06-22 15:42:52
 * @FilePath: \element-ui-expansions\types\element-ui-expansions.d.ts
 */
import { ElDynamicFormItem } from './dynamic-form-item'
import Vue from 'vue'

export function install(vue: typeof Vue, options: any): void
export class DynamicFormItem extends ElDynamicFormItem { }