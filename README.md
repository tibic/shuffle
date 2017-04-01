### 洗牌算法
我们常常写到随机洗牌的算法，但是你测试过正确性么？
这里是一个简单的测试方法。
测试效果见下图栗子: 
```js
function (array){
    var m = array.length, t, i;
    while (m) {
        i = Math.floor(Math.random() * m--);
        t = array[m];
        array[m] = array[i];
        array[i] = t;
        return array;
    }
}
```
取数据 ["A","2","3","4","5","6","7","8","9","10","J","Q","K"]
随机排序运行100000次的效果
列为出现在该位置的次数
![](/img/ca.png)
![](/img/case.png)
![](/img/case1.png)