/*
 * @Date: 2020-06-17 23:43:20
 * @LastEditors: 曾令宇
 * @LastEditTime: 2020-06-18 01:12:43
 * @FilePath: \element-ui-expansions\types\dynamic-form-item.d.ts
 */
import { ElementUIComponent } from 'element-ui/types/component';

export type FormItemType = "number" | "string" | "textarea" | "date" | "boolean";

export declare class ElDynamicFormItem extends ElementUIComponent {
    name: string;
    label: string;
    labelWidth: string;
    value: FormItemType;
    type: string;
    rows: number;
    onFileChange: (file: File, fileList: FileList) => void;
    input: (value: number | string | Date | boolean) => void;
}