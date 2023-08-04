<script setup>
import HeaderTitle from "../components/HeaderTitle.vue"
import NewTaskButton from "../components/NewTaskButton.vue"
</script>

<template>
  <div class="flex justify-between gap-5 items-center">
    <HeaderTitle />
    <NewTaskButton @click="$emit('addTask')" />
  </div>
</template>
