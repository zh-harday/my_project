<template>
    <section>
        <!-- 这是项目信息统计表 -->
        <div>
            <el-row class="customerMang">
                <el-col :span="6">
                    <div class="grid-content bg-purple-dark">
                        <el-input placeholder="" icon="search" v-model="input2" :on-icon-click="handleIconClick">
                        </el-input>
                    </div>
                </el-col>
                <el-col :span="10">
                    <div class="grid-content bg-purple-dark"></div>
                </el-col>
                <el-col :span="8" class="searchIpt">
                    <div class="grid-content bg-purple-dark">
                        <a href="/static/source/投行接口文档1.7.xlsx" download="出资统计表.xls">
                            <el-button class="searchIpt" type="primary">
                                导出统计表
                            </el-button>
                        </a>
                    </div>
                </el-col>
            </el-row>
            <el-table :data="projectInforTabData" border style="width: 100%">
                <el-table-column fixed="left" prop="projectName" label="项目名称" width="150" align="center">
                </el-table-column>
                <el-table-column prop="projectType" label="项目类型" width="150" align="center">
                </el-table-column>
                <el-table-column prop="Industry" label="所属行业" width="150" align="center">
                </el-table-column>
                <el-table-column prop="projectLeader" label="项目负责人" width="150" align="center">
                </el-table-column>
                <el-table-column prop="investmentTime" label="投资时间" width="300" align="center">
                </el-table-column>
                <el-table-column prop="investmentAmount" label="投资金额" width="150" align="center">
                </el-table-column>
                <el-table-column prop="lastValuation" label="最新估值" width="150" align="center">
                </el-table-column>
                <el-table-column prop="lastFloating" label="最新浮盈" width="150" align="center">
                </el-table-column>
                <el-table-column prop="exitProceeds" label="退出收益" width="150" align="center">
                </el-table-column>
                <el-table-column prop="contributionTheme" label="出资主体" width="150" align="center">
                </el-table-column>
                <el-table-column prop="shareholdingRatio" fixed="right" label="股权占比" width="150" align="center">
                </el-table-column>
            </el-table>
            <el-row class="articlesNumber">
                <el-col :span="24">
                    <div class="grid-content bg-purple-dark">
                        显示
                        <span> {{from}} </span>到
                        <span> {{to}} </span>条, 共
                        <span> {{altogether}} </span>条记录, 每页显示
                        <span> {{every}} </span>条
                    </div>
                </el-col>
            </el-row>
        </div>
    </section>
</template>

<script>
export default {
    created() {
        // this.$http.post('api/url', {

        // })
        //     .then(res => {

        //     })
        //     .catch(error => {

        //     });
        if (this.projectInforTabData.length == '0') {
            this.from = '0';
            this.to = '0';
            this.altogether = '0';
        } else if (this.projectInforTabData.length > '0') {
            this.from = 1;
            this.to = this.projectInforTabData.length;
            this.altogether = this.projectInforTabData.length;
        }
        // console.log(this.projectInforTabData.length);
    },
    methods: {
        handleClick() {
            console.log(1);
        }
    },

    data() {
        return {
            from: 0,
            to: 0,
            altogether: 0,
            every: 10,
            projectInforTabData: [
                {
                    projectName: '2016-05-03',
                    projectType: '王小虎',
                    Industry: '上海',
                    projectLeader: '普陀区',
                    investmentTime: '上海市普陀区金沙江路 1518 弄',
                    lastValuation: 200333,
                    lastFloating: 200333,
                    exitProceeds: 200333,
                    contributionTheme: 200333,
                    shareholdingRatio: 200333,
                }
            ]
        }
    }
}
</script>

<style lang="less" scoped>
section {
    >div {
        background: #ffffff;
        padding: 24px;
        overflow: hidden;
        .customerMang {
            margin-bottom: 10px;
        }
        .searchIpt_left {
            float: left;
        }
        .searchIpt {
            float: right;
        }
        .articlesNumber {
            margin-top: 20px;
            font-size: 10px;
        }
    }
}
</style>
