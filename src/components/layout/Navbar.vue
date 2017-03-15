<template lang="html">
  <el-menu theme="dark" :default-active="activeIndex" class="el-menu-demo" mode="horizontal">
    <el-menu-item index="1">决指导</el-menu-item>
    <el-menu-item index="3"><a href="https://www.ele.me" target="_blank">订单管理</a></el-menu-item>
  </el-menu>
</template>

<script>
export default {
  data() {
    return {
      activeIndex: '1'
    };
  },
  methods: {

  }
}
</script>

<style lang="css">
</style>
