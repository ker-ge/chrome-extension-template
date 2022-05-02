<template>
  <div class="site_search">
    <div class="search_list">
      <div class="search_group">
        <span>{{ groupName }}<i class="mi-chevron-right"></i></span>
        <ul class="search_group__list search_group__list--visible">
          <li
            v-for="(item, index) in groupData"
            :key="index"
            @click="handleGroup(item)"
          >
            {{ item.group }}
          </li>
        </ul>
      </div>

      <ul class="website_list">
        <li
          v-for="(item, index) in groupList"
          :key="index"
          :style="{ color: item.color }"
          :class="index == activity ? 'website_list__item--isActivity' : ''"
          @click="handleWebsite(item, index)"
        >
          {{ item.name }}
        </li>
      </ul>
    </div>

    <form
      class="search_form"
      :action="website.url"
      :target="pageNew ? '_blank' : '_self'"
      @submit.prevent="handleSubmit"
      ref="site_search_from"
    >
      <input
        id="search_form__input"
        class="search_form__input"
        type="text"
        :name="website.keyword"
        v-model="content"
        :placeholder="website.description"
        autocomplete="off"
      />
      <button class="search_form__button" type="submit">
        <svg
          style="vertical-align: middle"
          font-size="18px"
          font-weight="400"
          viewBox="0 0 24 24"
          height="24"
          width="24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            xmlns="http://www.w3.org/2000/svg"
            d="M10 4C6.68629 4 4 6.68629 4 10C4 13.3137 6.68629 16 10 16C13.3137 16 16 13.3137 16 10C16 6.68629 13.3137 4 10 4ZM2 10C2 5.58172 5.58172 2 10 2C14.4183 2 18 5.58172 18 10C18 11.8487 17.3729 13.551 16.3199 14.9056L21.7071 20.2929C22.0976 20.6834 22.0976 21.3166 21.7071 21.7071C21.3166 22.0976 20.6834 22.0976 20.2929 21.7071L14.9056 16.3199C13.551 17.3729 11.8487 18 10 18C5.58172 18 2 14.4183 2 10Z"
            fill="#FFF"
          ></path>
        </svg>
      </button>
    </form>
  </div>
</template>

<script>
const groupData = [
  {
    group: "常用",
    list: [
      {
        name: "百度",
        color: "#2100E0",
        url: "https://www.baidu.com/s",
        keyword: "wd",
        description: "百度一下",
      },
      {
        name: "必应",
        color: "#E35452",
        url: "https://cn.bing.com/search",
        keyword: "q",
        description: "必应搜索",
      },
      {
        name: "Google",
        color: "#F54231",
        url: "http://www.google.com.hk/search",
        keyword: "q",
        description: "Google searcb",
      },
    ],
  },
  {
    group: "社区",
    list: [
      {
        name: "掘金",
        color: "#2100E0",
        url: "https://juejin.cn/search",
        keyword: "query",
        description: "探索掘金稀土",
      },
      {
        name: "CSDN",
        color: "#E35452",
        url: "https://so.csdn.net/so/search",
        keyword: "q",
        description: "CSDN搜索",
      },
      {
        name: "Github",
        color: "#F54231",
        url: "https://github.com/search",
        keyword: "q",
        description: "Github search",
      },
      {
        name: "Gitee",
        color: "#bd081c",
        url: "https://search.gitee.com/",
        keyword: "q",
        description: "Gitee search",
      },
    ],
  },
];
export default {
  name: "site-search",
  props: {
    groupData: {
      type: Array,
      default: function () {
        return groupData;
      },
    },
    autoSubmit: {
      type: Boolean,
      default: true,
    },
    pageNew: {
      type: Boolean,
      default: true,
    },
  },
  data() {
    return {
      groupList: this.groupData[0].list,
      groupName: this.groupData[0].group,
      website: this.groupData[0].list[0],
      activity: 0,
      content: "",
    };
  },
  mounted() {
    // 定位光标在输入框里面
    var oInput = document.getElementById('search_form__input');
    oInput.focus();
  },
  methods: {
    handleSubmit() {
      this.website.content = this.content;
      this.$emit("submitEvent", this.website);
      if (this.autoSubmit) {
        this.$refs.site_search_from.submit();
      } else {
        return false;
      }
    },
    handleGroup(item) {
      this.groupList = item.list;
      this.groupName = item.group;
    },
    handleWebsite(item, index) {
      this.activity = index;
      this.website = item;
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.site_search * {
  margin: 0;
  padding: 0;
  -webkit-box-sizing: border-box;
  -moz-box-sizing: border-box;
  box-sizing: border-box;
}
.site_search {
  max-width: 600px;
}
.search_list {
  text-align: left;
  padding: 5px 5px 5px 5px;
}
.search_list .search_group {
  display: inline-block;
  position: relative;
  z-index: 999;
}
.search_list .search_group span {
  display: block;
  font-size: 16px;
  line-height: 32px;
  color: #aabfb9;
  text-align: center;
  cursor: pointer;
}
.search_list .search_group__list {
  display: block;
  position: absolute;
  top: 31px;
  padding: 12px 0;
  width: 75px;
  background: #fff;
  border-radius: 4px;
  box-shadow: 0 5px 11px rgba(0, 0, 0, 0.16);
  list-style: none;
}
.search_list .search_group__list--visible {
  display: none;
}
.search_list .search_group:hover .search_group__list--visible {
  display: block;
}
.search_list .search_group__list:before {
  position: absolute;
  top: -16px;
  left: 10px;
  content: " ";
  display: block;
  width: 0;
  height: 0;
  border: 10px solid transparent;
  border-bottom-color: white;
}
.search_list .search_group__list li {
  display: block;
  font-size: 16px;
  line-height: 32px;
  color: #aabfb9;
  text-align: center;
  cursor: pointer;
}
.search_list .search_group__list li:hover {
  color: #5b6662;
}
.website_list {
  list-style: none;
  display: inline-block;
  overflow: hidden;
  vertical-align: middle;
  margin-left: 8px;
}
.website_list li {
  float: left;
  padding: 0 11px;
  font-size: 13px;
  line-height: 31px;
  border-radius: 3px 3px 0 0;
  cursor: pointer;
}
.website_list .website_list__item--isActivity {
  background-color: #fff;
}
.search_form {
  position: relative;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  color: #518193;
  font-size: 15px;
}
.search_form__input {
  padding: 12px;
  width: 100%;
  height: 52px;
  line-height: 52px;
  font-size: 16px;
  border: 0;
  border-radius: 4px;
  outline: none;
}
.search_form__button {
  position: absolute;
  top: 0;
  right: 0;
  background: #008b5f;
  border: 0;
  width: 52px;
  height: 52px;
  line-height: 52px;
  border-radius: 0 4px 4px 0;
  font-weight: 400;
  color: #fff;
}
.search_form__button:hover {
  background: #1ca479;
  cursor: pointer;
}
</style>