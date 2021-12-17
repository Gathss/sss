<template>
  <footer class="clear">
    <ul>
        <li><span>公司：</span>xxx有限公司</li>
        <li><span>地址：</span>xxx市xxx区xxx街道888号</li>
        <li><span>联系电话：</span>888-888-888-88</li>
        <li>1996-2021</li>
    </ul>
  </footer>
</template>

<style lang="less">
.clear::after{
    height: 0;
    content: "";
    display: block;
    clear: both;
}
footer ul{
    height: 30px;
    float: right;
    line-height: 30px;
    margin: 30px 10px;
}
footer ul>li{
    list-style: none;
    display: inline-block;
    margin: 0 10px;
    font-size: 16px;
}
footer ul>li>span{
    font-weight: bold;
}
</style>
