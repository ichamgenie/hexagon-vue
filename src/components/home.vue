<template>
    <div id="home-root">
        <Row style="height:100%;width:100%">
            <Col span="18" style="height:100%;background:#eeeeee">
                <div id="svg-container">
                    <svg xmlns="http://www.w3.org/2000/svg" version="1.1" :height="svgHeight" :width="svgWidth" id="svg">
                        <path v-for="item of dataList" 
                            :d="getPath(item)" 
                            :style="getStyle(item)" 
                            @mouseover="enterTriangle($event, item)" 
                            @mouseout="exitTriangle($event, item)" 
                            @mousedown="addItem($event, item)"/>
                    </svg>
                </div>
            </Col>
            <Col span="6" style="height:100">
                <div class="right-panel">
                    <field label="Tips">
                        <div style="color:#dddddd">Use ↑ ↓ ← → to rotate and flip.</div>
                    </field>
                    <field label="Width">
                        <Slider v-model="taLength" :step="5" :min="10" :max="50" show-stops show-input></Slider>
                    </field>
                    <field label="Levels">
                        <Slider v-model="inputR" :step="5" :min="5" :max="30" show-stops show-input></Slider>
                    </field>
                    <field label="Show Lines">
                        <i-switch v-model="showLines">
                            <!-- <Icon type="android-done" slot="open"></Icon>
                            <Icon type="android-close" slot="close"></Icon> -->
                        </i-switch>
                    </field>
                    <div style="margin-top:15px">
                        <Button type="ghost" @click="undoItem">Undo</Button>
                        <Button type="ghost" @click="refreshSvg">Refresh</Button>
                        <Button type="primary" @click="downloadImage">Download</Button>
                    </div>
                </div>
            </Col>
        </Row>
        
    </div>
</template>

<script>
    import field from "./field.vue"
    export default {
        name: "home",
        components: {
            field
        },
        data() {
            return {
                dataList: [],
                itemKeyList:[],
                sqrt32: Math.sqrt(3) / 2,
                taLength: 30,
                taL:0,
                taH:0,
                inputR: 10,
                hexagonR: 10,
                centerX:0,
                centerY:0,
                currentFlag:0,
                currentPattern:0,
                currentKey:"",
                currentStartPoint:null,
                svgWidth:500,
                svgHeight:500,
                showLines:true,
                fillColor: "#ddddff",
                strokeColor: "#0000ff",
            };
        },
        watch: {
            taLength(val){
                this.refreshGuides();
                for(let item of this.itemKeyList)
                {
                    this.removeElement(item);
                }
            },
            inputR(val){
                this.refreshGuides();
                for(let item of this.itemKeyList)
                {
                    this.removeElement(item);
                }
            }
        },
        mounted() {
            var that = this;
            window.onkeydown = function(e){
                switch(e.code)
                {
                    case "ArrowUp":
                        that.currentFlag = (that.currentFlag+1)%2;
                        that.removeElement(that.currentKey);
                        that.addElement(that.currentStartPoint);
                    break;
                    case "ArrowDown":
                        that.currentFlag = (that.currentFlag+1)%2;
                        that.removeElement(that.currentKey);
                        that.addElement(that.currentStartPoint);
                    break;
                    case "ArrowLeft":
                        that.currentPattern = (that.currentPattern+5)%6;
                        that.removeElement(that.currentKey);
                        that.addElement(that.currentStartPoint);
                    break;
                    case "ArrowRight":
                        that.currentPattern = (that.currentPattern+1)%6;
                        that.removeElement(that.currentKey);
                        that.addElement(that.currentStartPoint);
                    break;
                    default:
                    break;
                }
            }
            window.onresize = function(e){
                // that.refreshSize(that);
            }

            that.refreshSize(that);
            this.refreshGuides();
        },
        methods: {
            refreshSize(that)
            {
                let svgDom = document.getElementById("svg-container");
                that.svgWidth = svgDom.clientWidth;
                that.svgHeight = svgDom.clientHeight;

                that.centerX = Math.round(that.svgWidth/2);
                that.centerY = Math.round(that.svgHeight/2);
            },
            refreshGuides() {
                
                this.hexagonR = this.inputR;
                
                this.taL = this.taLength;
                this.taH = this.taL*this.sqrt32;
                this.dataList = [];

                for(let j=0;j<this.hexagonR;j++)
                {
                    let ytmp = this.centerY - (this.hexagonR-j)*this.taH;
                    let x0 = this.centerX - this.taL*j*0.5 - this.taL*this.hexagonR*0.5;
                    for(let i=0;i<this.hexagonR+j;i++)
                    {
                        let xtmp = x0 + i*this.taL;
                        let taParam0 = {
                            x:xtmp,
                            y:ytmp,
                            ang:0
                        }
                        this.dataList.push(taParam0);
                        let taParam180 = {
                            x:xtmp + this.taL*0.5,
                            y:ytmp,
                            ang:180
                        }
                        this.dataList.push(taParam180);
                    }
                    let xtmp = x0 + (this.hexagonR+j)*this.taL;
                    let taParam0 = {
                        x:xtmp,
                        y:ytmp,
                        ang:0
                    }
                    this.dataList.push(taParam0);
                }

                for(let j=0;j<this.hexagonR;j++)
                {
                    let ytmp = this.centerY + j*this.taH;
                    let x0 = this.centerX - this.taL*(2*this.hexagonR - j - 1)*0.5;
                    for(let i=0;i<2*this.hexagonR-j-1;i++)
                    {
                        let xtmp = x0 + i*this.taL;
                        let taParam0 = {
                            x:xtmp,
                            y:ytmp,
                            ang:180
                        }
                        this.dataList.push(taParam0);
                        let taParam180 = {
                            x:xtmp + this.taL*0.5,
                            y:ytmp,
                            ang:0
                        }
                        this.dataList.push(taParam180);
                    }
                    let xtmp = x0 + (2*this.hexagonR-j-1)*this.taL;
                    let taParam0 = {
                        x:xtmp,
                        y:ytmp,
                        ang:180
                    }
                    this.dataList.push(taParam0);
                }
            },
            handleKeyDowm(event)
            {
                console.log(event);
            },
            prependChild(o,s){ 
                if(s.hasChildNodes()){ 
                    s.insertBefore(o,s.firstChild); 
                }else{ 
                    s.appendChild(o); 
                } 
            },
            getStartPoint(event, item){
                let dValue = event.target.attributes.d.value;
                let tmp = dValue.split(" ");
                let tapoint1 = {
                    x:parseFloat(tmp[0].substring(1)),
                    y:parseFloat(tmp[1])
                }
                let tapoint2 = {
                    x:parseFloat(tmp[2].substring(1)),
                    y:parseFloat(tmp[3])
                }
                let tapoint3 = {
                    x:parseFloat(tmp[4].substring(1)),
                    y:parseFloat(tmp[5])
                }
                let taPointList = [];
                taPointList.push(tapoint1);
                taPointList.push(tapoint2);
                taPointList.push(tapoint3);

                let idx = (3-Math.floor(this.currentPattern/2))%3;

                let startPoint = taPointList[idx];

                // if(item.ang!=0)
                // {
                //     startPoint = this.getNextPoint(startPoint,1,1);
                // }

                return startPoint;
            },
            getAngle(ang)
            {
                return (ang+this.currentPattern)%6;
            },
            getPointList(startPoint){
                let angs = [4, 5, 0, 1 ,3];
                if(this.currentFlag!=0)
                {
                    angs = [5, 4, 3, 2 ,0]
                }
                let p1 = startPoint;
                let p2 = this.getNextPoint(p1,this.getAngle(angs[0]),1);
                let p3 = this.getNextPoint(p2,this.getAngle(angs[1]),1);
                let p4 = this.getNextPoint(p3,this.getAngle(angs[2]),2);
                let p5 = this.getNextPoint(p4,this.getAngle(angs[3]),1);
                let p6 = this.getNextPoint(p5,this.getAngle(angs[4]),2);

                let pointList = [];
                pointList.push(p1);
                pointList.push(p2);
                pointList.push(p3);
                pointList.push(p4);
                pointList.push(p5);
                pointList.push(p6);
                return pointList;
            },
            getItemKey(startPoint){
                return Math.round(startPoint.x)+"-"+Math.round(startPoint.y)+this.currentPattern+"-"+this.currentFlag;
            },
            getItemKeyTmp(startPoint){
                return this.getItemKey(startPoint)+"-tmp";
            },
            enterTriangle(event, item) {
                this.removeElement(this.currentKey);
                let startPoint = this.getStartPoint(event, item);
                this.currentStartPoint = startPoint;
                this.addElement(startPoint);
            },
            addElement(startPoint)
            {
                let pointList = this.getPointList(startPoint);

                let d = "";
                for(let item of pointList)
                {
                    d = d+"L"+item.x + " "+item.y+" ";
                }
                d = "M"+d.substring(1)+"Z";
                let pathDom = document.createElementNS("http://www.w3.org/2000/svg","path");  
                pathDom.setAttribute("d",d);
                let key = this.getItemKeyTmp(startPoint);
                pathDom.setAttribute("id",key);
                // let style="{'fill':'#ffdddd','stroke':'#ff0000','stroke-width':1}";
                // pathDom.setAttribute("style",JSON.parse(style));
                pathDom.style.fill = this.fillColor;
                pathDom.style.stroke = this.strokeColor;
                pathDom.style.strokeWidth = 1;
                this.prependChild(pathDom, document.getElementById("svg"));
                // document.getElementById("svg").appendChild(pathDom);
                this.currentKey = key;
            },
            exitTriangle(event, item){
                // let startPoint = this.getStartPoint(event, item);
                // let key = this.getItemKeyTmp(startPoint);

                this.removeElement(this.currentKey);
            },
            removeElement(key)
            {
                var parent=document.getElementById("svg");
                if(!parent)
                {
                    return;
                }
                var child=document.getElementById(key);
                if(!child)
                {
                    return;
                }
                parent.removeChild(child);
            },
            addItem(event, item) {
                let startPoint = this.getStartPoint(event, item);

                let pointList = this.getPointList(startPoint);

                let d = "";
                for(let item of pointList)
                {
                    d = d+"L"+item.x + " "+item.y+" ";
                }
                d = "M"+d.substring(1)+"Z";
                let pathDom = document.createElementNS("http://www.w3.org/2000/svg","path");  
                pathDom.setAttribute("d",d);
                let key = this.getItemKey(startPoint);
                
                pathDom.setAttribute("id",key);
                pathDom.style.fill = this.fillColor;
                pathDom.style.stroke = this.strokeColor;
                pathDom.style.strokeWidth = 1;
                document.getElementById("svg").appendChild(pathDom);
                this.itemKeyList.push(key);
            },
            getPath(param)
            {
                let x = param.x;
                let y = param.y;
                let ang = param.ang;
                let halfL = this.taL*0.5;

                let x1 = x;
                let y1 = y;
                let x2 = x1+halfL;
                let y2 = y1+this.taH;
                let x3 = x1-halfL;
                let y3 = y2;
                if(ang!=0)
                {
                    x1 = x-halfL;
                    y1 = y;
                    x2 = x+halfL;
                    y2 = y;
                    x3 = x;
                    y3 = y+this.taH;
                }
                let rtn = "M"+x1+" "+y1+" L"+x2+" "+y2+" L"+x3+" "+y3+" Z";
                return rtn;
            },
            getStyle(param)
            {
                let color = this.showLines?"#eeeeee99":"#dddddd00";
                if(param.ang==0)
                {
                    return {
                        "fill":"#dddddd00",
                        "stroke":color,
                        "stroke-width":0.5
                    }
                }
                else
                {
                    return {
                        "fill":"#eeeeee00",
                        "stroke":color,
                        "stroke-width":0.5
                    }
                }
            },
            downloadImage() {
                var svgXml = document.getElementById("svg-container").innerHTML;

                var image = new Image();
                image.src = 'data:image/svg+xml;base64,' + window.btoa(unescape(encodeURIComponent(svgXml))); //给图片对象写入base64编码的svg流
                let that = this;
                image.onload=function(){
                    var canvas = document.createElement('canvas');  //准备空画布
                    canvas.width = that.svgWidth;
                    canvas.height = that.svgHeight;

                    var context = canvas.getContext('2d');  //取得画布的2d绘图上下文
                    context.drawImage(image, 0, 0);

                    var a = document.createElement('a');
                    a.href = canvas.toDataURL('image/png');  //将画布内的信息导出为png图片数据
                    a.download = "hexagon";  //设定下载名称
                    a.click(); //点击触发下载
                };
            },
            refreshSvg(){
                this.refreshSize(this);
                this.refreshGuides();
                for(let item of this.itemKeyList)
                {
                    this.removeElement(item);
                }
            },
            undoItem(){
                let lastItemKey = this.itemKeyList.pop();
                if(lastItemKey)
                {
                    this.removeElement(lastItemKey);
                }
            },
            getNextPoint(point, ang, l)
            {
                let x0 = point.x;
                let y0 = point.y;

                let x=0;
                let y=0;
                let offsetL = l*this.taL;
                let halfL = offsetL*0.5;
                let offsetH = l*this.taH;
                switch(ang%6)
                {
                    case 0:
                        x = x0+offsetL;
                        y = y0;
                        break;
                    case 1:
                        x = x0+halfL;
                        y = y0-offsetH;
                        break;
                    case 2:
                        x = x0-halfL;
                        y = y0-offsetH;
                        break;
                    case 3:
                        x = x0-offsetL;
                        y = y0;
                        break;
                    case 4:
                        x = x0-halfL;
                        y = y0+offsetH;
                        break;
                    case 5:
                        x = x0+halfL;
                        y = y0+offsetH;
                        break;
                    default:
                        break;
                }
                return {
                    x:x,
                    y:y
                }
            }
        }
    };
</script>
<style scoped>
    #home-root {
        width: 100%;
        height: 100%;
        text-align: center;
    }

    #svg-container {
        width: calc(100% - 80px);
        height: calc(100% - 80px);;
        margin-left: 40px;
        margin-top: 40px;
        text-align: center;
        background: #ffffff;
    }

    .right-panel{
        width:calc(100% - 40px);
        margin-top:20px;
        margin-left:20px;
    }
</style>