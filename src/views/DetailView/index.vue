<template>
  <div class="frame">
    <PageHeader></PageHeader>
    <div class="flex-1 content-frame">
      <PaGroup/>
    </div>
  </div>
</template>

<script lang="ts">
export default {
  name: 'DetailView',
}
</script>

<script setup lang="ts">
import PageHeader from './Header.vue';
import PaGroup from './Group.vue';
</script>

<style lang="scss" scoped>
.frame {
  display: flex;
  flex-direction: column;
  height: 100vh;
}
.content-frame {
  display: flex;
}
</style>
