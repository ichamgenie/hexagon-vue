<template>
    <div class="demo-root">
        <Modal :width="1000" v-model="imageModal">
            <div class="big-image-container">
                <img class="big-image" :src="bigImage"></img>
            </div>
            <div slot="footer" style="height:0px"></div>
        </Modal>
        <div class="list-panel">
            <div v-for="item of imageList" class="image-container" @click="showBigImage(item)">
                <img class="demo-image" :src="item"></div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "HelloWorld",
        data() {
            return {
                imageList:[],
                imageModal: false,
                bigImage:""
            };
        },
        mounted() {
            this.imageList.push(require("../../static/img/demo1.png"));
            this.imageList.push(require("../../static/img/demo2.png"));
            this.imageList.push(require("../../static/img/demo3.png"));
        },
        methods: {
            showBigImage(item){
                this.bigImage = item;
                this.imageModal = true;
            }
        }
    };
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    .demo-root {
        width:100%;
        height:100%;
        background: #eeeeee;
    }
    .big-image-container {
        width: 100%;
        height:600px;
        line-height:600px;
        text-align: center;
        background: #ffffff;
    }
    .big-image {
        height: 100%;
        width: 100%;
        object-fit: contain;
    }
    .list-panel {
        width: calc(100% - 40px);
        height: calc(100% - 40px);
        padding-top:20px;
        margin-left:20px;
    }
    .image-container {
        width: 300px;
        height: 200px;
        line-height: 200px;
        text-align: center;
        background: #ffffff;
        margin-bottom:20px;
        margin-right:20px;
        float: left;
        border-radius: 6px;
    }
    .demo-image {
        height: 100%;
        width: 100%;
        object-fit: contain;
    }
    .v-transfer-dom >>> .ivu-modal-footer {
        border: 0px;
        padding: 0px;
    }
</style>