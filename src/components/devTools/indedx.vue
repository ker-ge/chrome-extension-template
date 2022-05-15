<template>
  <n-space vertical>
    <n-layout has-sider>
      <n-layout-sider
        bordered
        collapse-mode="width"
        :collapsed-width="64"
        :width="240"
        :collapsed="collapsed"
        show-trigger
        @collapse="collapsed = true"
        @expand="collapsed = false"
      >
        <n-menu
          v-model:value="activeKey"
          :collapsed="collapsed"
          :collapsed-width="64"
          :collapsed-icon-size="22"
          :options="menuOptions"
        />
      </n-layout-sider>
      <n-layout>
        <div v-show="activeKey == 'md5'"><dtMd5 /></div>
        <div v-show="activeKey == 'base64'"><dtBase64 /></div>
        <div v-show="activeKey == 'url'"><dtUrl /></div>
      </n-layout>
    </n-layout>
  </n-space>
</template>

<script>
import { defineComponent, ref } from "vue";
import dtMd5 from "./md5.vue";
import dtBase64 from "./base64.vue";
import dtUrl from "./url.vue";

export default defineComponent({
  props: {
    menuOptions: {
      type: Array,
      required: true
    },
    defaultKey: {
      type: String,
      default: '',
    },
  },
  setup() {
    return {
      activeKey: ref(null),
      collapsed: ref(true),
    };
  },
  mounted() {
    this.activeKey = this.defaultKey;
  },
  // 注册组件
  components: {
    dtMd5,
    dtBase64,
    dtUrl,
  },
});
</script>