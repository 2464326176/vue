<template>
  <p>Basic link button</p>
  <div class="flex justify-space-between mb-4 flex-wrap gap-4">
    <el-button
        v-for="button in buttons"
        :key="button.text"
        :type="button.type"
        link
    >{{ button.text }}
    </el-button>
  </div>

</template>

<script lang="ts" setup>


const buttons = [
  {type: 'primary', text: '删除'},
  {type: 'primary', text: '撤销'},
  {type: 'primary', text: '前进'},
  {type: 'primary', text: '复制'},
  {type: 'primary', text: '粘贴'},
  {type: 'primary', text: '导出为png'},
  {type: 'primary', text: '导出为svg'},
  {type: 'primary', text: '导出为json'},
] as const
</script>

<style scoped>

</style>