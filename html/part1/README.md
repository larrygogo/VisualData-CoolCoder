## 开始前的准备

### 1. 申请百度地图API
> http://lbsyun.baidu.com

注册登录后，在控制台中点击 **创建应用** ，详细输入参考下图，输入完成后点击提交。
![创建应用](https://github.com/larrygogo/VisualData-CoolCoder/blob/master/html/part1/images/1.png?raw=true)

点击 **查看应用** 就可以看到我们刚刚创建成功的记录。

### 2. 在页面中引入API

```html
<script src="http://api.map.baidu.com/api?v=3.0&ak=您的密钥"></script>
```
![查看密钥](https://github.com/larrygogo/VisualData-CoolCoder/blob/master/html/part1/images/2.png?raw=true)

在刚刚 **查看应用** 页面中，我们可以看到 **访问应用（AK）**，这就是我们的密钥，将上面连接的中文部分替换成你的密钥，并引用到页面中，我们就可以愉快的使用百度地图了。

> 注意：处于安全性考虑，我在DEMO中引入的API接口也没有放入密钥，你需要将自己申请的密钥替换后才可以使用。

### 3. 完成一个DEMO

刚刚的操作仅仅是将API引入了，页面上并没有显示任何东西。如果说你要画一幅画，那么现在你只是得到了纸和笔，具体要画什么，怎么画，需要我们进一步的操作。



#### 1）BMap对象
BMap对象是百度地图API对外暴露的全局对象，我们要使用的所有百度地图的类和方法都被挂载在BMap对象下面。

#### 2）创建一个地图
```html
<!-- 用于挂载地图的节点 -->
<div id="container"></div>
```

```javascript
/**
 * 使用BMap对象下的Map类来创建地图，
 * 传入Dom的Id，这样API就会在这个DOM节点下创建地图
 */
let map = new BMap.Map("container")
```
此时我们已经将地图挂载到页面了，但是现在打开页面依然是什么都没有显示，因为我们还没有告诉地图，应该显示什么位置。

```javascript
/**
 * Map下面有一个centerAndZoom方法
 * 可以设置地图的中心点和缩放等级
 * 因为地图上的任何点都是一个经纬度坐标
 * 在百度地图中用Ponit类来表示地图上任意一个点的坐标
 * Point有两个参数，分别传入地理经度和地理纬度
 */ 

let map = new BMap.Map("container")
// 创建中心点 （此处给的是西南民族大学航空港校区的经纬度）
let centerPoint = new BMap.Point(103.975, 30.5694)  
// 给定缩放等级 [1 - 19] 数字越大，显示越详细
let zoom = 17
map.centerAndZoom(centerPoint, zoom);
```

当我们完成上述一波操作后，最简单的DEMO就完成了。此时打开页面，我们可以看到地图了

> 注意：如果你参考上述操作后依然没有显示出地图，可能有以下原因
> 
> 1. 在第二步是中没有将API的中文替换成你的密钥
> 2. 没有给定页面样式，因为容器`container`默认是没有宽高的，地图也不会撑开它，因此，我们需要根据自己的需要设置`container`的样式，参考我给的DEMO源码中的10至20行
> 3. 注意大小写，仔细查看控制台页面是否有报错。







