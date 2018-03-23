<template>
    <div class="tags-container">
        <!-- breadcrumb按钮和面包屑 -->
        <div class="tags-breadcrumb">
            <i class="icon-navicon tag-collapse" :class="[{ 'tag-collapse_right': isCollapse }]" @click="showCollapse"></i>
            <!-- <Breadcrumb class="tags-breadcrumb-list"></Breadcrumb> -->
        </div>
    </div>
</template>
<script>
import {mapState, mapGetters} from 'vuex'
export default {
    name: "tags",
    computed: {
        ...mapGetters(["isCollapse"])
    },
    methods: {
        showCollapse() {
            this.$store.commit('SET_COLLAPSE')
        }
    }
}
</script>
