<script setup>
import { onMounted, ref } from "vue";
import Card from "../components/Card.vue";

const modal = ref(null);

const props = defineProps({
  title: {
    type: String,
    // required: true,
  },
  description: {
    type: String,
  },
  time: {
    type: String,
  },
  editingMode: {
    type: Boolean,
    default: false,
  },
});

const titleText = ref(props.title);
const descriptionText = ref(props.description);
const time = ref(props.time);

// onMounted(() => {
//   console.log(props.time);
// });
defineExpose({ modal, titleText, descriptionText, time });
</script>

<template>
  <div
    ref="modal"
    class="fixed left-0 top-0 z-10 flex h-full w-full items-center justify-center bg-black bg-opacity-40"
  >
    <Card>
      <div class="mb-5 mt-4 text-lg font-bold">
        <input v-model="titleText" placeholder="Task's title" />
      </div>
      <div class="">
        <textarea
          v-model="descriptionText"
          placeholder="Task's description"
          class="h-32 w-full resize-none"
        ></textarea>
      </div>
      <div class="mb-4">
        Due:
        <input type="datetime-local" v-model="time" placeholder="Set time" />
      </div>
      <div class="flex justify-between">
        <button class="active:border-red-500" @click="$emit('delete')">
          Delete
        </button>
        <button @click="$emit('save')">Save</button>
      </div>
    </Card>
  </div>
</template>
