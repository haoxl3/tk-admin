<template>
  <div class="pull-auto">
    <div class="logo">
      <span class="logo_title is-bold">tk-admin </span>
      <span>泰康admin系统</span>
    </div>
  </div>
</template>
<script>
export default {}
</script>
<style scoped="scoped" lang="scss">
.logo {
  display: flex;
  align-items: flex-end;
}
.logo_title {
  padding: 0 8px 0 0;
  color: #409eff;
  font-size: 28px;
  font-style: italic;
  &.is-bold {
    font-weight: 700;
  }
}
</style>