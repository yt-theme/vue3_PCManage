<template>
  <div class="home_content">
    <Homeheader class="home_header"></Homeheader>
    <div class="home_main">
      <Homesidebar class="home_sidebar"></Homesidebar>
      <Homecontent class="home_content"></Homecontent>
    </div>
  </div>
</template>

<script>
import Homeheader from './header/Header'
import Homesidebar from './sidebar/Sidebar'
import Homecontent from './content/Content'
export default {
  components: {
    Homeheader,
    Homesidebar,
    Homecontent
  },
  name: 'Home',
}
</script>

<style scoped>
.home_content {
  background-color: #64759b;
  /* background-color: #515a6e; */
}
.home_header {
  width: 100vw;
  height: 40px;
}
.home_main {
  display: flex;
  width: 100vw;
  height: calc(100vh - 40px);
}
.home_sidebar {
  width: 140px;
  height: 100%;
  overflow: auto;
}
.home_content {
  width: calc(100vw - 140px);
  height: 100%;
}
</style>
