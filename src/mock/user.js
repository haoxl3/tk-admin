import Mock from 'mockjs'
let List = []
for (let i = 0; i < 5; i++) {
    List.push(Mock.mock({
        id: '@increment',
        name: Mock.mock('@cname'),
        username: Mock.mock('@last'),
        'type|0-1': 0,
        'sex|0-1': 0,
        grade: [0, 1],
        address: Mock.mock('@cparagraph(1, 3)'),
        check: [1, 3, 4]
    }))
}
export const tableData = {
    total: 11,
    pageSize: 10,
    tableData: List
};