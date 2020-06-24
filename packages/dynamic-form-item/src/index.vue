<!--
 * @Date: 2020-06-17 23:17:52
 * @LastEditors: 曾令宇
 * @LastEditTime: 2020-06-23 15:06:32
 * @FilePath: \element-ui-expansions\packages\dynamic-form-item\src\index.vue
--> 

<template>
  <el-form-item :label="label" :label-width="labelWidth" class="el-dynamic-form-item">
    <el-input
      v-if="type === 'int'"
      type="number"
      size="small"
      :value="value"
      @input="input"
      :readonly="readonly"
    />
    <el-input
      v-else-if="type === 'string'"
      type="text"
      size="small"
      :value="value"
      @input="input"
      :readonly="readonly"
    />
    <el-input
      v-else-if="type === 'textarea'"
      type="textarea"
      :rows="rows"
      size="small"
      :value="value"
      @input="input"
      :readonly="readonly"
    />
    <el-date-picker
      class="date-picker"
      v-else-if="type === 'date'"
      size="small"
      type="date"
      :value="value"
      @input="input"
      :readonly="readonly"
    />
    <div v-else-if="type === 'file'" class="file-upload">
      <el-upload
        :on-change="onFileChange"
        :show-file-list="false"
        class="upload-btn"
        :auto-upload="false"
        action
        :multiple="false"
      >
        <el-button slot="trigger" size="small" type="primary" :disabled="readonly">upload</el-button>
      </el-upload>
      <p class="file-name">{{getFileName}}</p>
    </div>
    <el-select
      class="option"
      @input="input"
      :value="value"
      v-else-if="type === 'option'"
      size="small"
      :disabled="readonly"
    >
      <slot name="option-list">
        <el-option
          v-for="(option,index) in options"
          :key="index"
          :label="option[optionProp.value]||option.label"
          :value="option[optionProp.value]||option.value"
          :disabled="optionProp.disabled||false"
        />
      </slot>
    </el-select>
  </el-form-item>
</template>
<script>
import {
  Button,
  Input,
  Upload,
  FormItem,
  DatePicker,
  Select,
  Option
} from "element-ui";
import Vue from "vue";
Vue.use(Button);
Vue.use(Input);
Vue.use(Upload);
Vue.use(FormItem);
Vue.use(DatePicker);
Vue.use(Select);
Vue.use(Option);
export default {
  name: "ElDynamicFormItem",
  props: {
    name: {
      type: String,
      required: false
    },
    label: {
      type: String,
      required: false
    },
    labelWidth: {
      type: String,
      required: false
    },
    value: {
      required: false
    },
    type: {
      type: String,
      required: false
    },
    rows: {
      type: Number,
      default: 6,
      required: false
    },
    options: {
      type: Array,
      required: false
    },

    readonly: {
      type: Boolean,
      required: false,
      default: false
    },
    optionProp: {
      type: Object,
      required: false,
      default: () => {
        return {
          value: "value",
          label: "label",
          disabled: false
        };
      }
    }
  },
  model: {
    prop: "value",
    event: "input"
  },
  data: () => {
    return {
      fileValue: {}
    };
  },
  methods: {
    onFileChange: function(file, fileList) {
      console.log(file);
      console.log(this);
      this.fileValue = file;
      this.$emit("on-file-change", this.name ?? "", file, fileList);
    },
    input: function(val) {
      this.$emit("input", val);
    }
  },
  computed: {
    getFileName: vm => {
      return vm.fileValue?.name ?? "";
    }
  }
};
</script>
<style lang="less" scoped>
.el-dynamic-form-item {
  .file-upload {
    display: flex;
    align-items: center;
    .file-name {
      display: inline-block;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
      margin: 0 5px;
    }
  }
  .date-picker {
    width: 100% !important;
  }
  .option {
    width: 100% !important;
  }
}
</style>