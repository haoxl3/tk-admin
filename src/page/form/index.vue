<template>
    <div class="form-container pull-chheight">
        <tk-form :formOption="formOption" :formSubmitText="formSubmitText" @handleSubmit="handleSubmit"></tk-form>
        <el-button @click.native="formate" style="margin: 8px 0">格式化</el-button>
        <el-input type="textarea" :autosize="{minRows: 2, maxRows: 15}" placeholder="请输入内容" v-model="formJson"></el-input>
    </div>
</template>
<script>
import tkForm from "@/components/form/";
import formOption from "@/const/formOption";
export default {
    name: "tkform",
    data() {
        return {
            formJson: "",
            formOption: formOption,
            formSubmitText: "确定",
            form: {}
        }
    },
    created() {
        this.formJson = JSON.stringify(formOption, null, 2)
    },
    methods: {
        formate() {
            let p = new Promise((resolve, reject) => {
                resolve(JSON.parse(this.formJson));
            })
            p.then(data => {
                this.formOption = data
                this.formJson = JSON.stringify(data, null, 2)
                this.$message({
                    message: '数据加载成功',
                    type: 'success'
                })
            }).catch(err => {
                this.$message({
                    center: true,
                    dangerouslyUseHTMLString: true,
                    message: `JSON格式错误<br \>\n${err}`,
                    type: 'error'
                })
            })
        },
        handleSubmit(form) {
            if(form) {
                this.form = form 
                this.$message({
                    message: form,
                    type: 'success'
                })
            }
        }
    },
    components: {
        tkForm
    }
}
</script>
<style lang="scss" scoped>
.form-container {
  padding: 8px 10px;
}
</style>
