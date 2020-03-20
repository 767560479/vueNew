<!--  -->
<template>
  <div>
    <ul class="list">
      <li v-for="item in list" :key="item.id">
        <router-link :to="'/content/' + item.aid">{{item.title}}</router-link>
        <el-divider></el-divider>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      list: []
    };
  },
  //生命周期 - 创建完成（访问当前this实例）
  created() {},
  //生命周期 - 挂载完成（访问DOM元素）
  methods: {
    // 获取新闻
    requestData() {
      // jsonp请求的话  后台api接口要支持jsonp
      const api =
        "http://www.phonegap100.com/appapi.php?a=getPortalList&catid=20&page=1";
      this.$http.jsonp(api).then(
        response => {
          this.list = response.body.result;
        },
        err => {
          console.log(err);
        }
      );
    }
  },
  mounted() {
    this.requestData();
  }
};
</script>
<style lang="scss" scoped>
/* @import url(); 引入css类 */
.list {
  li {
    height: 3.4rem;

    line-height: 3.4rem;

    border-bottom: 1px solid #eee;

    font-size: 1.6rem;

    a {
      color: #666;
    }
  }
}
</style>