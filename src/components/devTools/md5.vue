<template>
  <n-card title="MD5">
    <n-space vertical>
      <n-input
        v-model:value="beforeValue"
        type="textarea"
        placeholder="输入要MD5加密的值"
      />

      <n-space>
        <n-switch @update:value="handleChange" :round="false" size="large">
          <template #checked>大写</template>
          <template #unchecked>小写</template>
        </n-switch>
        <n-select v-model:value="optionsValue" :options="optionsArr" />
        <n-button type="success" @click="handleClick">md5加密</n-button>
      </n-space>

      <n-input
        v-model:value="afterValue"
        type="textarea"
        placeholder="这里是结果输出"
        readonly
      />
    </n-space>
  </n-card>
</template>

<script>
import { defineComponent, ref } from "vue";
import cipher from "@/utils/cipher.js";

export default defineComponent({
  setup() {
    return {
      beforeValue: ref(null),
      afterValue: ref(null),
      toCaseValue: "L", // L是小写、U是大写
      optionsValue: ref(32),
      optionsArr: [
        {
          label: 32,
          value: 32,
        },
        {
          label: 24,
          value: 24,
        },
        {
          label: 16,
          value: 16,
        },
        {
          label: 8,
          value: 8,
        },
      ],
    };
  },
  mounted() {},
  methods: {
    // 更换大小写转换
    handleChange(value) {
      if (value) this.toCaseValue = "U";
      else this.toCaseValue = "L";
    },
    // 点击MD5加密
    handleClick() {
      if (!this.beforeValue) return alert("请输入要加密的值");
      this.afterValue = cipher.md5(
        this.beforeValue,
        this.toCaseValue,
        this.optionsValue
      );
      if (!this.afterValue) return alert('md5加密失败');
      navigator.clipboard.writeText(this.afterValue) // 复制到剪切板
    },
  },
});
</script>

<style scoped>
.n-select{
  width: 80px;
}
</style>