import service from 'common/js/fetch'
export function getManagementType() {
    const data = {
        "dicParent": "300"
    }
    return service({
        url: '/dictionaryController/select2Menu',
        method: 'post',
        data
    })
}
// ��ȡ�ҵĻ����б�
export function getMyFund() {
    const data = {
        createUserId: "300",
        merchantId: ''
    }
    return service({
        url: '/fund/selectMineAllFundList',
        method: 'post',
        data
    })
}

export function addFund() {
    const data = {}
    return service({
        url: '/fund/addFundInfo',
        method: 'post',
        data
    })
}
// ��֯����
export function OrganizationType() {
    const data = {
        dicParent: "302"
    }
    return service({
        url: '/dictionaryController/select2Menu',
        method: 'post',
        data
    })
}
// ����Ͷ��
export function FundInvestment() {
    const data = {
        dicParent: "304"
    }
    return service({
        url: '/dictionaryController/select2Menu',
        method: 'post',
        data
    })
}
// ����˾
export function managementCompany() {
    const data = {
        dicParent: "307"
    }
    return service({
        url: '/dictionaryController/select2Menu',
        method: 'post',
        data
    })
}
