<script setup>
import { onBeforeUpdate, onMounted, onUpdated, ref, watch } from "vue";
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
      return "No due";
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
// onBeforeUpdate(() => {
//   console.log(props.time);
// });

const time = ref(props.time);
const checked = ref(props.completed);

watch(
  () => props.time,
  (newVal) => {
    time.value = newVal;
    time.value = new Date(time.value).toLocaleString("en-US", {
      weekday: "short",
      day: "numeric",
      month: "short",
      year: "numeric",
      hour: "numeric",
      minute: "numeric",
      hour12: true,
    });
  },
);

onMounted(() => {
  time.value = new Date(time.value).toLocaleString("en-US", {
    weekday: "short",
    day: "numeric",
    month: "short",
    year: "numeric",
    hour: "numeric",
    minute: "numeric",
    hour12: true,
  });
});
</script>

<template>
  <div
    class="cursor-pointer rounded-xl transition duration-300 hover:shadow-md hover:ease-in-out"
    @click="$emit('edit')"
  >
    <Card>
      <div class="relative">
        <div class="absolute right-4 top-2">
          <div class="container">
            <div class="round">
              <label
                class="cursor-pointer"
                @click="
                  (event) => {
                    event.stopPropagation();
                  }
                "
              >
                <input type="checkbox" v-model="checked" />
                <span class="bubble"></span>
              </label>
            </div>
          </div>
        </div>
        <div
          class="mb-2 text-xl font-bold"
          :class="{ 'line-through': checked }"
        >
          {{ props.title }}
        </div>
        <div class="text-sm text-gray-400">{{ props.description }}</div>
        <div class="my-2 h-[0.5px] bg-gray-200"></div>

        <div class="py-1 text-sm text-gray-500">
          {{ time != "Invalid Date" ? time : props.time }}
        </div>
      </div>
    </Card>
  </div>
</template>

<style scoped>
input[type="radio"],
input[type="checkbox"] {
  display: none;
}

.bubble {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 20px;
  height: 20px;
  border-radius: 50%;
  border: 2px solid #3a82ee;
  box-shadow: 0px 0px 4px rgba(58, 130, 238, 0.75);
}
/* .bubble.personal {
  border-color: #ea40a4;
  box-shadow: 0px 0px 4px rgba(234, 64, 164, 0.75);
} */

.bubble::after {
  content: "";
  display: block;
  opacity: 0;
  width: 0px;
  height: 0px;
  background-color: #3a82ee;
  box-shadow: 0px 0px 4px rgba(58, 130, 238, 0.75);
  border-radius: 50%;
  transition: 0.2s ease-in-out;
}

/* .bubble.personal::after {
  background-color: #ea40a4;
  box-shadow: 0px 0px 4px rgba(234, 64, 164, 0.75);
} */

input:checked ~ .bubble::after {
  width: 10px;
  height: 10px;
  opacity: 1;
}
</style>
