<template>
  <div class="h_tabs">
    <n-card>
      <n-tabs type="line" animated>
        <n-tab-pane name="开发工具箱" tab="开发工具箱">
          <fMenu :menuOptions="devToolsData" defaultKey="md5" />
        </n-tab-pane>
        <n-tab-pane name="查询工具" tab="查询工具">
          <fMenu :menuOptions="queryTools" />
        </n-tab-pane>
      </n-tabs>
    </n-card>
  </div>
</template>

<script>
import { h } from "vue";
import { NIcon } from "naive-ui";
import { Accessibility as AccessIcon } from "@vicons/ionicons5";
import devTools from "./devTools/indedx.vue";
import fMenu from "./fMenu.vue";

function renderIcon(icon) {
  return () => h(NIcon, null, { default: () => h(icon) });
}

export default {
  name: "h-tabs",
  setup() {
    return {
      // 开发工具箱
      devToolsData: [
        {
          label: "md5",
          key: "md5",
          icon: renderIcon(AccessIcon),
        },
        {
          label: "base64",
          key: "base64",
          icon: renderIcon(AccessIcon),
        },
        {
          label: "url",
          key: "url",
          icon: renderIcon(AccessIcon),
        },
      ],
      // 查询工具箱
      queryTools: [],
    };
  },
  // 注册组件
  components: {
    devTools,
    fMenu,
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.h_tabs {
  max-height: 60%;
}
.n-card {
  margin-top: 10px;
  border-radius: 10px;
}
</style>