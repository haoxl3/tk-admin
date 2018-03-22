<template>
    <div class="pull-height animated" :class="{'zoomOutUp': isLock}">
        <top></top>
    </div>
</template>
<script>
import top from "./top/";
export default {
    components: {
        top
    }
}
</script>
