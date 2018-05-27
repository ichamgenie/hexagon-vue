<template>
  <div id="app" :style="'height:'+fullHeight+'px'">
    <Menu mode="horizontal" theme="dark" active-name="home" @on-select="go2Page">
      <MenuItem name="home"> Canvas
      </MenuItem>
      <MenuItem name="demo"> Demo
      </MenuItem>
    </Menu>
    <div class="app-main">
      <router-view/>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'app',
    data() {
      return {
        fullHeight: document.documentElement.clientHeight,
      }
    },
    mounted() {
      window.addEventListener('resize', this.handleResize);
    },
    methods: {
      go2Page(name) {
        console.log(name);
        this.$router.push("/" + name);
      },
      handleResize() {
        this.fullHeight = document.documentElement.clientHeight;
      }
    },
    beforeDestroy: function () {
      window.removeEventListener('resize', this.handleResize);
    },
  }
</script>

<style>
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    width: 100%;
  }

  .app-main {
    width: 100%;
    height: calc(100% - 60px);
  }
</style>