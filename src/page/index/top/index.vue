<template>
    <div class="header">
        <div class="header-button is-left">
            <top-logo></top-logo>
        </div>
        <h1 class="header-title">
            <topMenu></topMenu>
        </h1>
        <div class="header-button is-right">
            <!-- <el-tooltip class="item" effect="dark" content="锁屏" placement="bottom">
                <span class="header-item">
                    <top-lock></top-lock>
                </span>
            </el-tooltip> -->
            <el-tooltip class="item" effect="dark" :content="isFullScren?'退出全屏':'全屏'" placement="bottom">
                <span class="header-item">
                    <i :class="isFullScren?'icon-tuichuquanping':'icon-quanping'" @click="handleScreen"></i>
                </span>
            </el-tooltip>
            <el-dropdown>
                <span class="el-dropdown-link">
                    登录的用户名<!-- {{userInfo.username}} -->
                    <i class="el-icon-arrow-down el-icon--right"></i>
                </span>
                <el-dropdown-menu slot="dropdown">
                    <el-dropdown-item>
                        <router-link to="/">首页</router-link>
                    </el-dropdown-item>
                    <el-dropdown-item>
                        <a href="https://gitee.com/smallweigit/avue" target="_blank">码云地址</a>
                    </el-dropdown-item>
                    <el-dropdown-item>
                        <a href="https://github.com/nmxiaowei/avue" target="_blank">github</a>
                    </el-dropdown-item>
                    <el-dropdown-item @click.native="logout" divided>退出系统</el-dropdown-item>
                </el-dropdown-menu>
            </el-dropdown>
            <el-tooltip class="item" effect="dark" content="用户头像" placement="bottom">
                <img class="header-userImg" src="https://gitee.com/uploads/61/632261_smallweigit.jpg">
            </el-tooltip>
        </div>
    </div>
</template>
<script>
import { mapState, mapGetters } from "vuex"
import { fullscreenToggel } from "@/util/util"
import topLogo from './top-logo'
import topMenu from "./top-menu"
export default {
    components: {
        topLogo,
        topMenu
    },
    name: 'top',
    computed: {
        ...mapGetters(["isFullScren"])
    },
    methods: {
        handleScreen() {
            this.$store.commit('SET_FULLSCREN')
            fullscreenToggel()
        },
        logout() {
            
        }
    }
}
</script>

