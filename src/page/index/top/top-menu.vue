<template>
    <div class="pull-auto top-menu">
        <el-menu :default-active="activeIndex" mode="horizontal">
            <template v-for="item in items">
                <el-menu-item :index="item.parentId+''" @click.native="openMenu(item)">{{item.label}}</el-menu-item>
            </template>
        </el-menu>
    </div>
</template>
<script>
export default {
    name: 'top-menu',
    data() {
        return {
            activeIndex: "0",
            items: [
                {
                    label: "首页",
                    href: "/wel/index",
                    parentId: 0
                },
                {
                    label: "设置",
                    parentId: 1
                }
            ]
        }
    },
    methods: {
        openMenu(item) {

        }
    }
}
</script>
<style scoped="scoped" lang="scss">
.top-menu {
    padding: 0 50px;
    margin-top: -4px;
    box-sizing: border-box;
}
</style>