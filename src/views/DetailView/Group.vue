<template>
  <div class="group-frame">
    <div class="title"><font-awesome-icon icon="folder-open" style="margin-right: 10px" />Group</div>
    <ul class="list">
      <li><img src="https://ssl.gstatic.com/docs/doclist/images/drive_2022q3_32dp.png" />Group 1</li>
      <li><font-awesome-icon icon="cloud" style="margin-right: 10px" />Group 2</li>
      <li>Group 3</li>
    </ul>
  </div>
</template>

<script lang="ts">
export default {
  name: 'PaGroup',
}
</script>

<style lang="scss" scoped>
.group-frame {
  width: var(--pa-menu-width);
  box-sizing: border-box;
  padding: 10px 30px;
  display: flex;
  flex-direction: column;

  .title {
    font-size: 1.2rem;
    margin-bottom: 1rem;
  }

  .list {
    list-style: none;
    padding: 0;
    margin: 0;

    li {
      margin-bottom: 0.5rem;
    }
  }
}
</style>
