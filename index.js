let data = [
    { id: 1, name: '小米', price: '2999' },
    { id: 2, name: 'oppo', price: '3999' },
    { id: 3, name: '华为', price: '4999' },
    { id: 4, name: 'vivo', price: '2399' }
]
//将数组内容渲染进表格中
function updata(arr) {
    let tbody = document.querySelector('tbody')
    //清空tr
    tbody.innerHTML = ''
    arr.forEach(function (value) {
        // 创建tr标签
        let tr = document.createElement('tr')
        tr.className = 'tr'
        tr.innerHTML = `<td>${value.id}</td><td>${value.name}</td><td>${value.price}</td>`
        tbody.appendChild(tr)
    });
}

// 品牌查询
function namequery() {
    let str = document.getElementById('inputn').value
    if (typeof str == 'string') {
        let paiarr = numquery()
        let zarr = []
        
        paiarr.forEach(function (value) {
            if (str == value.name) {
                zarr.push(value)
            }
        })
        updata(zarr)
    }
    else console.log('不存在' + str)
}

// 价格查询
function numquery() {
    let arr = [document.getElementById('input0').value, document.getElementById('input1').value]
    if (typeof arr == 'object') {
        
        //存放当前页面的tr
        let jiaarr = data.filter(function (value) {
            return value.price >= arr[0] && value.price <= arr[1]
        })
        updata(jiaarr)
        return jiaarr
    } else console.log('输入必须是数字区间')
}

function on() {
    document.getElementById('jiaquery').onclick = numquery
    document.getElementById('paiquery').onclick = namequery
}
on()
updata(data);
