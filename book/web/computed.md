## computed/watch

computed和watch都能实现对数据的监听，执行一些动作，但还是有一些区别的。

#### 1.computed计算属性

计算属性基于 data 中声明过或者父组件传递的 props 中的数据通过计算得到的一个**新值**，这个新值只会根据已知值的变化而变化，简言之：这个属性依赖其他属性，由**其他属性计算而来**的。

```js
<p>姓名：{{ fullName }}</p>
    ... ...
    data: {
    firstName: 'David',
    lastName: 'Beckham'
},
computed: {
    fullName: function() { //方法的返回值作为属性值
            return this.firstName + ' ' + this.lastName
    }
}
```

在 computed 属性对象中定义计算属性的方法，和取data对象里的数据属性一样以**属性访问**的形式调用，即在页面中使用 {{ 方法名 }} 来显示计算的结果。

> **注**：计算属性 fullName **不能☠**在 data 中定义，而计算属性值的相关已知值在data中；
>
> 如果 fullName 在 data 中定义了会报错如下图：
>
> ![img](https://img2020.cnblogs.com/blog/1066214/202005/1066214-20200525145010613-1552272338.png)

computed属于懒加载并具有缓存机制，内定义的function只执行一次，仅当初始化显示或者与之相关的data、props 等属性数据发生变化的时候才会重新计算。

可以通过computed属性的默认get与set方法实现双向绑定：

```js
computed: {
    fullName: {
        get() { //读取当前属性值的回调，根据相关的数据计算并返回当前属性的值
            return this.firstName + ' ' + this.lastName
        },
        set(val) { // 当属性值发生改变时回调，更新相关的属性数据，val就是fullName的最新属性值
            const names = val ? val.split(' ') : [];
            this.firstName = names[0]
            this.lastName = names[1]
        }
    }
}
```

#### 2.watch监听属性

通过 vm 对象的 $watch() 或 watch 配置来监听 Vue 实例上的属性变化，或某些特定数据的变化，然后执行某些具体的业务逻辑操作。当属性变化时，回调函数自动调用，在函数内部进行计算。其可以监听的数据来源：data，props，computed 内的数据。

```js
watch: {
    // 监听 data 中的 firstName，如果发生了变化，就把变化的值给 data 中的 fullName， val 就是 firstName 的最新值
    firstName: function(val) { 
        this.fullName = val + ' ' + this.lastName
    },
    lastName: function(val) {
        this.fullName = this.firstName + ' ' + val
    }    
}
```

> 由上可以看出 watch 要监听两个数据，而且代码是同类型的重复的，所以 computed 更简洁

watch的优势是可以执行比较耗时的异步操作，比如发送ajax请求。

#### 3.各自的应用场景

- computed：用于处理复杂的逻辑运算；一个数据受一个或多个数据影响；用来处理watch和methods无法处理的，或处理起来不方便的情况。例如处理模板中的复杂表达式、购物车里面的商品数量和总金额之间的变化关系等。
- watch：用来处理当一个属性发生变化时，需要执行某些具体的业务逻辑操作，或要在数据变化时执行异步或开销较大的操作；一个数据改变影响多个数据。例如用来监控路由、inpurt 输入框值的特殊处理等。
#### 4.区别

**computed**

- 初始化显示或者相关的 data、props 等属性数据发生变化的时候调用；

- 计算属性不在 data 中，它是基于data 或 props 中的数据通过计算得到的一个新值，这个新值根据已知值的变化而变化；

- 在 computed 属性对象中定义计算属性的方法，和取data对象里的数据属性一样，以属性访问的形式调用；

- 如果 computed 属性值是函数，那么默认会走 get 方法，必须要有一个返回值，函数的返回值就是属性的属性值；

- computed 属性值默认会**缓存**计算结果，在重复的调用中，只要依赖数据不变，直接取缓存中的计算结果，只有**依赖型数据**发生**改变**，computed 才会重新计算；

- 在computed中的，属性都有一个 get 和一个 set 方法，当数据变化时，调用 set 方法。

**watch**

- 主要用来监听某些特定数据的变化，从而进行某些具体的业务逻辑操作，可以看作是 computed 和 methods 的结合体；
- 可以监听的数据来源：data，props，computed内的数据；
- watch**支持异步**；
- **不支持缓存**，监听的数据改变，直接会触发相应的操作；
- 监听函数有两个参数，第一个参数是最新的值，第二个参数是输入之前的值，顺序一定是新值，旧值。



  

