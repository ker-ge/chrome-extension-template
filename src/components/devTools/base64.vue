<template>
  <n-card title="Base64">
    <n-space vertical>
      <n-input
        v-model:value="beforeValue"
        type="textarea"
        placeholder="输入要base64加密/解密的值"
      />

      <n-space>
        <n-button type="success" @click="handleBase64E">base64加密</n-button>
        <n-button type="success" @click="handleBase64D">base64解密</n-button>
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
    };
  },
  mounted() {},
  methods: {
    // 点击base64加密
    handleBase64E() {
      if (!this.beforeValue) return alert("请输入要base64加密的值");
      this.afterValue = cipher.base64(this.beforeValue, "E");
      if (!this.afterValue) alert('base64加密失败');
      navigator.clipboard.writeText(this.afterValue) // 复制到剪切板
    },
    // 点击base64解密
    handleBase64D() {
      if (!this.beforeValue) return alert("请输入要base64解密的值");
      console.log(this.beforeValue);
      this.afterValue = cipher.base64(this.beforeValue, "D");
      if (!this.afterValue) alert('base64解密失败');
      navigator.clipboard.writeText(this.afterValue) // 复制到剪切板
    },
  },
});
</script>