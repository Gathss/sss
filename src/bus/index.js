import Vue from 'vue'
var bus = new Vue()

// 事件总线
export default bus

// 在要使用总线通信的组件中引入后
// 通过 bus.$emit(“testEvent”,”test”)发布消息       // (事件名称,数据)
// 通过 bus.$on(“testEvent”,(data)=>{} )接收消息    //（事件名称,回调函数）
// 在设置接收消息前，发布的消息是收不到的，请注意定义发布与监听的组件的生命周期钩子
