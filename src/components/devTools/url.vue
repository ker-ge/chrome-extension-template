<template>
  <n-card title="URL">
    <n-space vertical>
      <n-input
        v-model:value="beforeValue"
        type="textarea"
        placeholder="输入要编码/解码的URL"
      />

      <n-space>
        <n-select v-model:value="optionsValue" :options="optionsArr" />
        <n-button type="success" @click="handleClick">转换</n-button>
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

export default defineComponent({
  setup() {
    return {
      beforeValue: ref(null),
      afterValue: ref(null),
      optionsValue: ref("encodeURIComponent"),
      optionsArr: [
        {
          label: "encodeURIComponent",
          value: "encodeURIComponent",
        },
        {
          label: "decodeURIComponent",
          value: "decodeURIComponent",
        },
        {
          label: "encodeURI",
          value: "encodeURI",
        },
        {
          label: "decodeURI",
          value: "decodeURI",
        },
        {
          label: "escape",
          value: "escape",
        },
        {
          label: "unescape",
          value: "unescape",
        },
      ],
    };
  },
  mounted() {},
  methods: {
    // 点击转换
    handleClick() {
      if (!this.beforeValue) return alert("请输入要转换的URL");
      switch (this.optionsValue) {
        case "encodeURIComponent":
          this.afterValue = encodeURIComponent(this.beforeValue);
          break;
        case "decodeURIComponent":
          this.afterValue = decodeURIComponent(this.beforeValue);
          break;
        case "encodeURI":
          this.afterValue = encodeURI(this.beforeValue);
          break;
        case "decodeURI":
          this.afterValue = decodeURI(this.beforeValue);
          break;
        case "escape":
          this.afterValue = escape(this.beforeValue);
          break;
        case "unescape":
          this.afterValue = unescape(this.beforeValue);
          break;
      }
      if (!this.afterValue) return alert("转换失败");
      navigator.clipboard.writeText(this.afterValue); // 复制到剪切板
    },
  },
});
</script>

<style scoped>
.n-select{
  width: 200px;
}
</style>