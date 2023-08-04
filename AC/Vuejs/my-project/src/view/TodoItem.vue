<script setup>
import { onBeforeUpdate, ref } from "vue";
import Card from "../components/Card.vue";

const props = defineProps({
  title: {
    type: String,
    required: true,
    default() {
      return "Title";
    },
  },
  description: {
    type: String,
    required: true,
    default() {
      return "Description";
    },
  },
  time: {
    type: String,
    required: true,
    default() {
      return "Due date";
    },
  },
  completed: {
    type: Boolean,
    default() {
      return false;
    },
  },
});

// defineEmits(["checked:completed"]);
onBeforeUpdate(() => {
  console.log(props.title);
});
const checked = ref(props.completed);
</script>

<template>
  <Card>
    <div class="relative">
      <div class="absolute right-4 top-2">
        <div class="container">
          <div class="round">
            <input type="checkbox" id="checkbox" v-model="checked" />
            <label for="checkbox"></label>
          </div>
        </div>
      </div>
      <div class="text-xl font-bold" :class="{ 'line-through': checked }">
        {{ props.title }}
      </div>
      <div class="text-sm text-gray-400">{{ props.description }}</div>
      <div class="my-2 h-[0.5px] bg-gray-200"></div>

      <div class="py-1 text-sm text-gray-500">{{ props.time }}</div>
    </div>
  </Card>
</template>
<!-- <style scoped>
.round {
  position: relative;
}

.round label {
  background-color: #fff;
  border: 1px solid #ccc;
  border-radius: 50%;
  cursor: pointer;
  height: 28px;
  left: 0;
  position: absolute;
  top: 0;
  width: 28px;
}

.round label:after {
  border: 2px solid #fff;
  border-top: none;
  border-right: none;
  content: "";
  height: 6px;
  left: 7px;
  opacity: 0;
  position: absolute;
  top: 8px;
  transform: rotate(-45deg);
  width: 12px;
}

.round input[type="checkbox"] {
  visibility: hidden;
}

.round input[type="checkbox"]:checked + label {
  background-color: #0760fb;
  border-color: #0760fb;
}

.round input[type="checkbox"]:checked + label:after {
  opacity: 1;
}

/* general styling */
html,
body {
  height: 100%;
  margin: 0;
}

body {
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  background-color: #f1f2f3;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
}

.container {
  /* margin: 0 auto; */
}
</style> -->
