<template>
    <div class="field-root">
        <div class="field-label">{{label}}</div>
        <div class="field-input">
            <slot></slot>
        </div>
        
    </div>
</template>
<style scoped>
    .field-root {
        width:100%;
        height: 32px;
        line-height: 32px;
        text-align: left;
        font-size: 14px;
    }
    .field-label{
        width: 90px;
        float: left;
    }
    .field-input{
        width: calc(100% - 90px);
        float: left;
    }
</style>
<script>
export default {
    props:{
        label:""
    }
}
</script>
