<template>
<div class="fundDetails">
    <div class="title">
        <div class="left">
            <el-button type="text">出资</el-button>
            <el-button type="text">退出</el-button>
        </div>
        <div class="right">
            <el-button type="text">添加</el-button>
        </div>
    </div>
    <el-table :data="investorData" border style="width: 100%;">
        <el-table-column label="协议名称" prop="name">
        </el-table-column>
        <el-table-column label="基金名称" prop="investorTypeId">
        </el-table-column>
        <el-table-column label="认缴金额（元）" prop="InvestmentManager">
        </el-table-column>
        <el-table-column label="出资占比（%）" prop="amount">
        </el-table-column>
        <el-table-column label="实缴金额（元）" prop="InvestmentManager">
        </el-table-column>
        <el-table-column label="出资日期" prop="amount">
        </el-table-column>
        <el-table-column label="操作">
            <template scope="scope">
              <el-button size="small"
                      @click="handleEdit(scope.$index, scope.row)">
                      签约
              </el-button>
              <el-button size="small" type="danger"
                      @click="handleDelete(scope.$index, scope.row)">
                      删除
              </el-button>
            </template>
        </el-table-column>
    </el-table>
</div>
</template>

<script type="text/ecmascript-6">
export default {
    data() {
        return {
            detailsData: [{
                protocolName: 'xxxxx',
                fundName: '深度并购基金',
                amount: '100,000',
                ratio: '5%',
                actual: 565.56,
                date: '2016-09-08'
            }, {
                protocolName: 'xxx',
                fundName: '深度并购基金',
                amount: '100,000',
                ratio: '5.6%',
                actual: 565.56,
                date: '2016-09-08'
            }],
            formLabelWidth: '120px',
            addDetailed: false,
            Detailed: {

            },
            options: [{
                value: '名称a',
                label: '名称a'
            }, {
                value: '名称b',
                label: '名称b'
            }]
        }
    },
    methods: {
        getSummaries(param) {
            console.log(param)
        },
        showDetailed() {
            this.addDetailed = true
        },
        Detailed: {}
    }
}
</script>

<style lang="less" scoped>
.fundDetails {
    width: 100%;
    height: 100%;
    .title {
        display: flex;
        .left,
        .right {
            flex:1;
            height: 42px;
            line-height: 42px;
        }
        .left{
            text-align: left;
            margin-left: 24px;
        }
        .right {
            text-align: right;
            margin-right: 24px;
        }
    }
}
</style>
