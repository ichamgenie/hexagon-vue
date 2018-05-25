<template>
    <div id="home-root">
        <div class="c-container">
            <canvas id="c" style="border:1px solid #dddddd">
                Your browser does not support the canvas element.
            </canvas>
        </div>
    </div>
</template>

<script>
    export default {
        name: "home",
        data() {
            return {
                msg: "Welcome to Your Vue.js App",
                cvs: null,
                sqrt32: Math.sqrt(3) / 2,
                taMap: new Map(),
                canvas: null
            };
        },
        mounted() {
            let rootDom = document.getElementById("home-root");
            let cWidth = rootDom.clientWidth - 40;
            let cHeight = rootDom.clientHeight - 40;
            let minL = cWidth>cHeight?cHeight:cWidth;
            // console.log(rootDom.clientHeight);
            this.canvas = new fabric.Canvas("c");
            this.canvas.setWidth(cWidth);
            this.canvas.setHeight(cHeight);
            this.canvas.renderAll();


            // let param = this.getTriangleWrapper(canvas, 200, 200, 100, 0);
            // this.drawTriangleWrapper(param);
            let midX = Math.round(cWidth / 2);
            let midY = Math.round(cHeight / 2);
            let lvl = 4;
            let L = Math.round(cHeight * 0.5 / lvl);

            let offsetX = L * lvl * 0.5;
            let offsetY = L * lvl * this.sqrt32;
            // this.drawTriangles(midX-offsetX, midY-offsetY, L, lvl)
            // this.drawTriangles(midX+offsetX, midY-offsetY, L, lvl)
            this.drawTriangles(midX, midY, Math.round(minL * 0.4 / lvl), lvl, 1);
            this.drawTriangles(midX, midY, Math.round(minL * 0.4 / lvl), lvl, -1);
            this.canvas.renderAll();
        },
        methods: {
            drawTriangles(midX, midY, l, h, flag) {
                var taHeight = l * this.sqrt32;

                for (var j = 0; j < h; j++) {
                    let y = midY + flag * j * taHeight + flag * taHeight / 2 - taHeight / 2;
                    var x0 = midX + j * l / 2 - l * h + l / 2;
                    // var x0 = midX - j * l / 2;
                    for (var i = 0; i < 2 * h - j - 1; i++) {
                        let x = x0 + i * l;
                        let param1 = this.getTriangleWrapper(x, y, l, flag * 90 + 90);
                        this.taMap.set(this.getKey(x, y), param1);
                        this.drawTriangleWrapper(param1);

                        let param2 = this.getTriangleWrapper(x + l / 2, y, l, 90 - flag * 90)
                        this.taMap.set(this.getKey(x + l / 2, y), param2);
                        this.drawTriangleWrapper(param2);
                    }
                    let x = x0 + (2 * h - j - 1) * l;
                    let param3 = this.getTriangleWrapper(x, y, l, flag * 90 + 90)
                    this.taMap.set(this.getKey(x, y), param3);
                    this.drawTriangleWrapper(param3);
                }

            },
            drawTriangleWrapper(param) {
                this.drawTriangle(param);
                this.drawLines(param);
            },
            getTriangleWrapper(x, y, l, a) {
                let param = {};

                param.taWidth = l;
                param.taHeight = l * this.sqrt32;

                param.x = x;
                param.y = y;
                param.l = l;
                param.a = a;

                if (a === 180) {
                    param.taTop = y + this.sqrt32 * l + 1;
                    param.taLeft = x + l / 2 + 1;
                    param.taAngle = 180;
                    param.taColor = "#dddddd";

                    param.lx1 = l / 2;
                    param.ly1 = param.taHeight;
                    param.lx2 = l;
                    param.ly2 = 0;
                    param.lx3 = 0;
                    param.ly3 = 0;
                } else {
                    param.taTop = y;
                    param.taLeft = x - l / 2;
                    param.taAngle = 0;
                    param.taColor = "#cccccc";

                    param.lx1 = l / 2;
                    param.ly1 = 0;
                    param.lx2 = l;
                    param.ly2 = param.taHeight;
                    param.lx3 = 0;
                    param.ly3 = param.taHeight;
                }

                return param;
            },
            drawTriangle(param) {
                let triangle = new fabric.Triangle({
                    top: param.taTop,
                    left: param.taLeft,
                    width: param.taWidth,
                    height: param.taHeight,
                    angle: param.taAngle,
                    fill: param.taColor,
                    selectable: false,
                    hoverCursor: "default"
                });
                this.canvas.add(triangle);
            },

            drawLines(param) {
                let line1 = new fabric.Line(
                    [param.lx1, param.ly1, param.lx2, param.ly2],
                    {
                        top: param.y,
                        left: param.x,
                        stroke: "white",
                        selectable: false,
                        hoverCursor: "default"
                    }
                );
                let line2 = new fabric.Line(
                    [param.lx2, param.ly2, param.lx3, param.ly3],
                    {
                        top: param.y + param.ly2,
                        left: param.x - param.l / 2,
                        stroke: "white",
                        selectable: false,
                        hoverCursor: "default"
                    }
                );
                let line3 = new fabric.Line(
                    [param.lx3, param.ly3, param.lx1, param.ly1],
                    {
                        top: param.y,
                        left: param.x - param.l / 2,
                        stroke: "white",
                        selectable: false,
                        hoverCursor: "default"
                    }
                );
                this.canvas.add(line1);
                this.canvas.add(line2);
                this.canvas.add(line3);
            },
            getKey(x, y) {
                return "" + Math.round(x) + "," + Math.round(y);
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

    .c-container {
        width: calc(100% - 40px);
        height: calc(100% - 40px);
        margin-left: 20px;
        padding-top: 20px;
        text-align: center;
    }
</style>