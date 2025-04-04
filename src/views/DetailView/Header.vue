<template>
  <div class="page-header">
    <h1>PasswdMan</h1>
    <div class="flex-1 action-group">
      <input
        type="text"
        class="form-control enter-search"
        id="account"
        placeholder="请输入账号"
      />
    </div>
  </div>
</template>

<script lang="ts">
export default {
  name: "PageHeader",
}
</script>

<style lang="scss" scoped>
.page-header {
  height: 64px;
  display: flex;
  h1 {
    margin: 0;
    line-height: 64px;
    font-size: 2rem;
    font-family: 'Luckiest Guy';
    width: var(--pa-menu-width);
    text-align: center;
  }
  .action-group {
    display: flex;
    align-items: center;
    justify-content: space-between;
    .form-control {
      width: var(--pa-list-width);
    }
  }
}
</style>
