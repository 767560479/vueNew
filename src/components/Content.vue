<!--  -->
<template>
  <div id="content">
    <h2>{{list.title}}</h2>
    <div v-html="list.content"></div>
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
  mounted() {
    // console.log(this.$route.params);  /*获取动态路由传值*/

    var aid = this.$route.params.aid;

    //调用请求数据的方法

    this.requestData(aid);
  },
  methods: {
    requestData(aid) {
      //get请求如果跨域的话 后台php java 里面要允许跨域请求

      var api =
        "http://www.phonegap100.com/appapi.php?a=getPortalArticle&aid=" + aid;

      this.$http.get(api).then(
        response => {
          console.log(response);

          this.list = response.body.result[0];
        },
        err => {
          console.log(err);
        }
      );
    }
  }
};
</script>
<style scoped lang="scss">
/* @import url(); 引入css类 */
#content {
  padding: 1rem;

  line-height: 2;

  img {
    max-width: 100%;
  }
}
</style>