<template>
    <div class="about-root">
        <div class="content-container">
            <div class="content-panel">
                <div class="image-panel">
                    <img class="about-image" src="http://wx2.sinaimg.cn/large/536cc3d9gy1frrewdesq3j20gk0m276s.jpg"/>
                </div>
                <div class="mid-line"/>
                <div class="text-panel">
                    <div class="text-container">
                        这个画图工具的想法<br/>
                        来自于高中上课的时候一次开小差<br/>
                        画了这么一个图形<br/>
                        发现一个不怎么规则的图形可以这样无限填满整个平面<br/>
                        还挺好看的<br/>
                        就是画起来有点费劲<br/>
                        后来做了码农一直想写这么一个程序<br/>
                        用来画这个图形<br/>
                        今天终于写出来了<br/>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        
    };
</script>

<style scoped>
    .about-root {
        width:100%;
        height:100%;
        background: #eeeeee;
    }
    .content-container {
        width:100%;
        height: 100%;
        padding: 40px;
        /* position: relative; */
    }
    .content-panel {
        width: 100%;
        height: 100%;
        background: #ffffff;
        box-shadow: 0px 0px 16px #cccccc;
    }
    .image-panel {
        height: 100%;
        width: calc(50% - 1px);
        float:left;
        text-align: center;
    }
    .text-panel {
        height: 100%;
        width: calc(50% - 1px);
        float:left;
        text-align: center;
    }
    .mid-line {
        height:calc(100% - 40px);
        width:0px;
        margin-top:20px;
        border:1px solid #eeeeee;
        float:left;
    }
    .about-image {
        height:calc(100% - 120px);
        width:calc(100% - 120px);
        margin-top: 60px;
        object-fit: contain;
    }
    .text-container {
        font-size: 16px;
        line-height:50px;
        width:calc(100% - 60px);
        margin-top: calc(50vh - 300px);
        margin-left: 30px;
        object-fit: contain;
    }

</style>