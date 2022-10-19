<template>
  <div class="app-footer">
    <div class="copyright">Ⓒ 2022 Anna Sergeeva</div>
  </div>
</template>

<script>
export default {
  name: "AppFooter"
}
</script>

<style scoped lang="scss">
@import "../assets/styles/main";
.app-footer {
  position: absolute;
  bottom: 0;
  width: 100%;
  margin-top: auto;
  height: 60px;
  background-color: $brown-color;
  display: flex;
  justify-content: center;
  align-items: center;
  .copyright {
    margin: auto;
    color: $gray-lighter-color;
  }
}
</style>
