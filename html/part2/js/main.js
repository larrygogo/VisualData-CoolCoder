let map = new BMap.Map("container")
let centerPoint = new BMap.Point(103.975, 30.5694)
let zoom = 17
map.centerAndZoom(centerPoint, zoom);

// 下面为本节代码

/**
 * 公共方法 为dom添加点击事件
 */
function addClickEventListener(domId, fn) {
    document.getElementById(domId).addEventListener('click', fn)
}

// 开启拖动
addClickEventListener('enableDragging', function() {
    map.enableDragging()
    alert('已开启拖动')
})

// 禁止拖动
addClickEventListener('disableDragging', function() {
    map.disableDragging()
    alert('已禁止拖动')
})

// 放大
addClickEventListener('zoomIn', function() {
    map.zoomIn()
})

// 缩小
addClickEventListener('zoomOut', function() {
    map.zoomOut()
})

// 返回地图当前缩放级别
addClickEventListener('getZoom', function() {
    let zoom = map.getZoom()
    alert(`当前缩放级别为: ${zoom}`)
})


// 初始化
addClickEventListener('reset', function() {
    map.reset()
    setTimeout(() => {
        alert('初始化地图')
    }, 200)
})