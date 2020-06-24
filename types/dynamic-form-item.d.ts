/*
 * @Date: 2020-06-17 23:43:20
 * @LastEditors: 曾令宇
 * @LastEditTime: 2020-06-24 14:35:51
 * @FilePath: \element-ui-expansions\types\dynamic-form-item.d.ts
 */
import { ElementUIComponent } from 'element-ui/types/component';

export type FormItemType = "number" | "string" | "textarea" | "date" | "boolean" | "select";

export interface OptionProp {
    value: string;
    label: string;
    disabled: string;
}
export declare class ElDynamicFormItem extends ElementUIComponent {
    value: number | string | Date | boolean;
    size: string;
    label: string;
    labelWidth: string;
    type: FormItemType;
    rows: number;
    readonly: boolean;
    options: object[];
    optionProp: OptionProp;
    clearable: boolean;
    onFileChange: (file: File, fileList: FileList) => void;
    input: (value: number | string | Date | boolean) => void;
}