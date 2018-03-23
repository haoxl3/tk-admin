<template>
    <el-menu unique-opened  class="el-menu-vertical-demo" background-color="#495060" text-color="#c9cbd0" active-text-color="#fff" :collapse="isCollapse">
        <!-- :default-active="tag.value" -->
        <sidebar-item :menu="menu" :show="!isCollapse"></sidebar-item>
    </el-menu>
</template>
<script>
import MENU from "@/mock/menu";
import { mapGetters } from "vuex";
import SidebarItem from "./sidebarItem";
export default {
    name: 'index',
    created() {
        this.$store.dispatch("GetMenu").then(data => {})
    },
    computed: mapGetters(["menu","isCollapse"]),
    components: {
        SidebarItem
    }
}
</script>