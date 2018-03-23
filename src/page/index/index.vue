<template>
    <div class="pull-height animated" :class="{'zoomOutUp': isLock}">
        <top></top>
        <div class="index">
            <sidebar class="left pull-chheight"></sidebar>
            <div class="right">
                <tags ref="nav" class="nav"></tags>
                <router-view class="main"></router-view>
            </div>
        </div>
    </div>
</template>
<script>
import top from "./top/"
import sidebar from "./sidebar/"
import tags from "./tags"
export default {
    name: "index",
    components: {
        top,
        tags,
        sidebar
    },
    data() {
        return {
            isLock: false 
        }
    }
}
</script>
<style lang="scss" scoped>
.index {
  display: flex;
  height: calc(100% - 60px);
  padding: 0 0 20px 0;
  position: relative;
  min-height: 100%;
  background: #fff;
  overflow: hidden;
  .left:not(.el-menu--collapse) {
    width: 200px;
    overflow-y: auto;
  }
  .right {
    padding-top: 90px;
    position: relative;
    flex: 1;
    box-sizing: border-box;
  }
  .main {
    overflow-y: scroll;
  }
  .nav {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    z-index: 999;
  }
}
</style>
