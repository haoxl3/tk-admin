<template>
  <div class="table-container pull-chheight">
    <div class="table-header">
      <el-button type="primary" @click="handleAdd" size="small">新 增</el-button>
      <el-button type="success" @click="handleExport" size="small">导出excel</el-button>
      <el-button @click="toggleSelection([tableData[1]])" size="small">切换第二选中状态</el-button>
      <el-button @click="toggleSelection()" size="small">取消选择</el-button>
    </div>
    <Crud :tableOption="tableOption" :tableData="tableData" :tableLoading="tableLoading" :before-open="boxhandleOpen" :before-close="boxhandleClose" :page="page" ref="crud" width="290" @handleSave="handleSave" @handleUpdate="handleUpdate" @handleDel="handleDel" @handleCurrentChange="handleCurrentChange" @handleSelectionChange="handleSelectionChange" :menu="true">
      <template slot-scope="scope" slot="username">
        <el-tag>{{scope.row.username}}</el-tag>
      </template>
      <slot name="username"></slot>
      <!-- <template slot-scope="scope" slot="menu">
        <el-button icon="el-icon-check" size="small" @click="handleGrade(scope.row,scope.$index)">权限</el-button>
      </template> -->
    </Crud>
    <el-button @click.native="formate" style="margin: 8px 0">格式化</el-button>
    <el-input type="textarea" :autosize="{ minRows: 2, maxRows: 15}" placeholder="请输入内容" v-model="formJson">
    </el-input>
    <!-- <el-dialog title="菜单" :visible.sync="grade.box" width="40%">
      <el-tree :data="menuAll" :default-checked-keys="grade.check" :default-expanded-keys="grade.check" show-checkbox node-key="id">
      </el-tree>
      <span slot="footer" class="dialog-footer">
        <el-button type="primary" @click="handleGradeUpdate">更新</el-button>
      </span>
    </el-dialog> -->
  </div>
</template>
<script>
import Crud from "@/components/crud/";
import tableOption from "@/const/tableOption";
export default {
    name: 'mytable',
    data() {
        return {
            tableOption: tableOption, //表格设置属性
            tableData: [], //表格的数据
            tablePage: 1,
            tableLoading: false,
            tabelObj: {},
            formJson: "",
            page: {
                total: 0, //总页数
                currentPage: 1, //当前页数
                pageSize: 10 //每页显示多少条
            },
            grade: {
                box: false,
                check: []
            }
        }
    },
    created() {
        this.formJson = JSON.stringify(tableOption, null, 2);
        this.handleList();
    },
    methods: {
        //调用crud的handleadd方法即可
        handleAdd() {
            this.$refs.crud.handleAdd();
        },
        handleExport() {

        },
        toggleSelection() {

        },
        boxhandleOpen(show) {
            this.$message({
                showClose: true,
                message: "表单打开前处理事件",
                type: "success"
            });
            console.log('****show*****')
            console.log(show)
            show();
        },
        boxhandleClose() {

        },
        handleSave() {

        },
        handleUpdate() {

        },
        handleDel() {

        },
        handleCurrentChange() {

        },
        handleSelectionChange() {

        },
        formate() {

        },
        /**
        * @title 获取数据
        * @detail 赋值为tableData表格即可
        *
        **/
        handleList() {
            this.tableLoading = true;
            this.$store.dispatch("GetTableData", { page: `${this.tablePage}` }).then(data => {
                setTimeout(() => {
                    this.tableData = data.tableData;
                    this.page = {
                        total: data.total,
                        pageSize: data.pageSize
                    };
                    this.tableLoading = false;
                }, 1000);
            });
        },
    },
    components: {
        Crud
    }
}
</script>
<style lang="scss" scoped>
.table-container {
  padding: 8px 10px;
}
.table-header {
  margin-bottom: 10px;
  & > .el-button {
    padding: 12px 25px;
  }
}
</style>
