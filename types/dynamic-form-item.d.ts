/*
 * @Date: 2020-06-17 23:43:20
 * @LastEditors: 曾令宇
 * @LastEditTime: 2020-06-23 15:06:54
 * @FilePath: \element-ui-expansions\types\dynamic-form-item.d.ts
 */
import { ElementUIComponent } from 'element-ui/types/component';

export type FormItemType = "number" | "string" | "textarea" | "date" | "boolean";

export interface OptionProp {
    value: string;
    label: string;
    disabled: string;
}
export declare class ElDynamicFormItem extends ElementUIComponent {
    name: string;
    label: string;
    labelWidth: string;
    value: FormItemType;
    type: string;
    rows: number;
    readonly: boolean;
    options: object[];
    optionProp: OptionProp;
    onFileChange: (file: File, fileList: FileList) => void;
    input: (value: number | string | Date | boolean) => void;
}