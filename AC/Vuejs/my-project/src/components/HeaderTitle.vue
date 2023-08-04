<script setup>
import { ref, computed, onMounted } from "vue";
const weekdays = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

const months = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "July",
  "Aug",
  "Sept",
  "Oct",
  "Nov",
  "Dec",
];

const date = new Date();
const weekday = ref("");

const today = computed(() => {
  weekday.value = weekdays[date.getDay()];
  return `${weekday.value}, ${date.getDate()} ${months[date.getMonth()]}`;
});
</script>

<template>
  <div class="">
    <div class="mb-1 text-2xl font-bold">Today's Task</div>
    <div class="text-sm text-gray-400">
      {{ today }}
    </div>
  </div>
</template>
