<!--
 * @Date: 2020-06-17 22:02:38
 * @LastEditors: 曾令宇
 * @LastEditTime: 2020-06-22 17:28:54
 * @FilePath: \element-ui-expansions\example\components\HelloWorld.vue
--> 

<template>
  <div class="hello">
    <el-form :model="form" label-width="auto" class="form">
      <el-dynamic-form-item label="name" type="string" v-model="form.name" />
      <el-dynamic-form-item label="date" type="date" v-model="form.date" />
      <el-dynamic-form-item label="age" type="int" v-model="form.age" />
      <el-dynamic-form-item label="photo" type="file" />
      <el-dynamic-form-item
        label="option"
        type="option"
        :options="options"
        :option-prop="optionProp"
        v-model="form.optionValue"
      >
        <template v-slot:option-list>
          <el-option v-for="(option,index) in options" :key="index" :value="option.id" :label="option.name">option {{option.id}}</el-option>
        </template>
      </el-dynamic-form-item>
      <el-dynamic-form-item label="postscript" type="textarea" v-model="form.postscript" />
    </el-form>
  </div>
</template>

<script>
import DynamicFormItem from "../../packages/dynamic-form-item/";
import Vue from "vue";
import { Form } from "element-ui";

Vue.use(Form);
Vue.use(DynamicFormItem);
export default {
  name: "HelloWorld",
  props: {
    msg: String
  },
  data: () => {
    return {
      form: {
        name: "aaa",
        date: new Date(),
        age: 10,
        postscript: ""
      },
      options: [
        {
          id: "01",
          name: "first",
          isActive: true
        }
      ],
      optionProp: {
        value: "id",
        label: "name"
      }
    };
  },methods:{
    getOptions:function(options){
      console.log(options);
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
.hello {
  width: calc(100% - 40%);
  margin-top: 100px;
  padding: 0 20%;
  display: flex;
  justify-content: center;
  .form {
    width: 100%;
  }
}
</style>
