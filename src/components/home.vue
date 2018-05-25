<template>
  <div class="home-root">
    <div class="c-container">
      <canvas id="c" style="border:1px solid #dddddd">
        Your browser does not support the canvas element.
      </canvas>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'home',
    data() {
      return {
        msg: 'Welcome to Your Vue.js App',
        cvs: null
      }
    },
    mounted() {
      // this.cvs = document.getElementById("c");
      var canvas = new fabric.Canvas('c');
      canvas.setWidth(500);
      canvas.setHeight(500);
      canvas.renderAll();
      console.log(canvas);

      let triangle = new fabric.Triangle({ 
        top: 50, 
        left: 30, 
        width: 50, 
        height: 50, 
        angle: 0, 
        fill: "#ffdddd",
        selectable:false,
        hoverCursor:"default"
      });
      canvas.add(triangle);
      canvas.renderAll();
    }
  }
</script>
<style scoped>
  .home-root {
    width: 100%;
    height: 100%;
    text-align: center;
  }
  .c-container {
    width: 500px;
    height: 500px;
    margin-left: calc(50vw - 250px);
    text-align: center;
  }
</style>