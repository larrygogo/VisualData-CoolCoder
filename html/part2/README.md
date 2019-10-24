## 创建地图

上一节带大家完成了课程开始前的准备，并实现了一个最基本的DEMO，相信大家对地图已经有了一些初步的了解。这一节，我将为大家详细的解释上一节中的一些知识，认识BMap中的基本类。

### Map类 - 详解

上一节说到，创建一个地图，我们必须使用Bmap中的Map类来创建

```javascript
// container 为地图需要挂载的Dom节点的Id
let map = new BMap.Map("container")
```
那么创建出来的map对象能干什么呢？
根据，上一节我们知道，它有一个`centerAndZoom()`的方法可以设置地图的中心位置和缩放等级。那么它还有其他的哪些功能呢？

#### 常用方法列表
方法                         |  返回值    |  描述  
-|-|-
enableDragging()            |   none    |   启用地图拖拽，默认启用 
disableDragging             |   none    |   禁用地图拖拽
enableScrollWheelZoom()     |   none    |   启用滚轮放大缩小，默认禁用
disableScrollWheelZoom()    |   none    |   禁用滚轮放大缩小
enableDoubleClickZoom()     |   none    |   启用双击放大，默认启用
disableDoubleClickZoom()    |   none    |   禁用双击放大
enableKeyboard()            |   none    |   启用键盘操作，默认禁用。键盘的上、下、左、右键可连续移动地图。同时按下其中两个键可使地图进行对角移动。PgUp、PgDn、Home和End键会使地图平移其1/2的大小。+、-键会使地图放大或缩小一级
disableKeyboard()           |   none    |   禁用键盘操作
enableInertialDragging()	|   none	|   启用地图惯性拖拽，默认禁用
disableInertialDragging()	|   none	|   禁用地图惯性拖拽
enableContinuousZoom()	    |   none	|   启用连续缩放效果，默认禁用
disableContinuousZoom()	    |   none	|   禁用连续缩放效果
enablePinchToZoom()	        |   none	|   启用双指操作缩放，默认启用
disablePinchToZoom()	    |   none	|   禁用双指操作缩放
enableAutoResize()	        |   none	|   启用自动适应容器尺寸变化，默认启用
disableAutoResize()	none	禁用自动适应容器尺寸变化
setMinZoom(zoom: Number)	|   none	|   设置地图允许的最小级别。取值不得小于地图类型所允许的最小级别
setMaxZoom(zoom: Number)	|   none	|   设置地图允许的最大级别。取值不得大于地图类型所允许的最大级别
setMapStyle()	            |   none	|   设置地图样式，样式包括地图底图颜色和地图要素是否展示两部分
setMapStyleV2(style: MapStyleV2)	|   none	|   设置地图个性化样式V2版本，仅支持现代浏览器（支持Canvas）
getBounds()	                |   Bounds	|   返回地图可视区域，以地理坐标表示
getCenter()	                Point	返回地图当前中心点
getDistance(start: Point, end: Point)	Number	返回两点之间的距离，单位是米
getMapType()	MapType	返回地图类型
getSize()	Size	返回地图视图的大小，以像素表示
getViewport(view: Array<Point>, viewportOptions: ViewportOptions)	Viewport	根据提供的地理区域或坐标获得最佳的地图视野，返回的对象中包含center和zoom属性，分别表示地图的中心点和级别。此方法仅返回视野信息，不会将新的中心点和级别做用到当前地图上
getZoom()	Number	返回地图当前缩放级别
centerAndZoom(center: Point, zoom: Number)	none	设初始化地图。 如果center类型为Point时，zoom必须赋值，范围3-19级，若调用高清底图（针对移动端开发）时，zoom可赋值范围为3-18级。如果center类型为字符串时，比如“北京”，zoom可以忽略，地图将自动根据center适配最佳zoom级别
panTo(center: Point, opts: PanOptions)	none	将地图的中心点更改为给定的点。如果该点在当前的地图视图中已经可见，则会以平滑动画的方式移动到中心点位置。可以通过配置强制移动过程不使用动画效果
panBy(x: Number, y: Number, opts: PanOptions)	none	将地图在水平位置上移动x像素，垂直位置上移动y像素。如果指定的像素大于可视区域范围或者在配置中指定没有动画效果，则不执行滑动效果
reset()	none	重新设置地图，恢复地图初始化时的中心点和级别
setCenter(center: Point | String)	none	设置地图中心点。center除了可以为坐标点以外，还支持城市名
setCurrentCity(city: String)	none	设置地图城市，注意当地图初始化时的类型设置为BMAP_NORMAL_MAP时，需要在调用centerAndZoom之前调用此方法设置地图所在城市。例如： var map = new BMap.Map(“container”, {mapType: BMAP_NORMAL_MAP}); map.setCurrentCity(“北京市”); map.centerAndZoom(new BMap.Point(116.404, 39.915), 18); 注意：初始化的坐标应与您设置的城市对应，否则地图将无法正常显示。
setMapType(mapType: MapTypes)	none	设置地图类型
setViewport(view: Array<Point> | Viewport, viewportOptions: ViewportOptions)	none	根据提供的地理区域或坐标设置地图视野，调整后的视野会保证包含提供的地理区域或坐标
setZoom(zoom: Number)	none	将视图切换到指定的缩放等级，中心点坐标不变。注意：当有信息窗口在地图上打开时，地图缩放将保证信息窗口所在的坐标位置不动
highResolutionEnabled()	Boolean	是否使用高分辨率底图。仅当mapOptions.enableHighResolution属性为true且设备支持高分辨率时返回true
zoomIn()	none	放大一级视图
zoomOut()	none	缩小一级视图
addHotspot(hotspot: Hotspot)	none	为地图添加热区
removeHotspot(hotspot: Hotspot)	none	移除某个地图热区
clearHotspots()	none	清空地图所有热区
addControl(control: Control)	none	将控件添加到地图，一个控件实例只能向地图中添加一次
removeControl(control: Control)	none	从地图中移除控件。如果控件从未被添加到地图中，则该移除不起任何作用
getContainer()	HTMLElement	返回地图的容器元素。当创建用户自定义控件时，需要自行实现Control.initialize()方法，并将控件的容器元素添加到地图上，通过此方法可获得地图容器
addContextMenu(menu: ContextMenu)	none	添加右键菜单
removeContextMenu(menu: ContextMenu)	none	移除右键菜单
addOverlay(overlay: Overlay)	none	将覆盖物添加到地图中，一个覆盖物实例只能向地图中添加一次
removeOverlay(overlay: Overlay)	none	从地图中移除覆盖物。如果覆盖物从未被添加到地图中，则该移除不起任何作用
clearOverlays()	none	清除地图上所有覆盖物
openInfoWindow(infoWnd: InfoWindow, point: Point)	none	在地图上打开信息窗口
closeInfoWindow()	none	关闭在地图上打开的信息窗口。在标注上打开的信息窗口也可通过此方法进行关闭
pointToOverlayPixel(point: Point)	Pixel	根据地理坐标获取对应的覆盖物容器的坐标，此方法用于自定义覆盖物
overlayPixelToPoint(pixel: Pixel)	Point	根据覆盖物容器的坐标获取对应的地理坐标
getInfoWindow()	InfoWindow | Null	返回地图上处于打开状态的信息窗的实例。当地图没有打开的信息窗口时，此方法返回null
getOverlays()	Array<Overlay>	返回地图上的所有覆盖物
getPanes()	MapPanes	返回地图覆盖物容器列表
addTileLayer(tileLayer: TileLayer)	none	添加一个自定义地图图层
removeTileLayer(tileLayer: TileLayer)	none	移除一个自定义地图图层
getTileLayer(mapType: String)	TileLayer	通过地图类型得到一个地图图层对象
pixelToPoint(pixel: Pixel)	Point	像素坐标转换为经纬度坐标
pointToPixel(point: Point)	Pixel	经纬度坐标转换为像素坐标











