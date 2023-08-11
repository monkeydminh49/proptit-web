<script setup>
import { ref } from "vue";
import Header from "./view/Header.vue";
import TaskModal from "./view/TaskModal.vue";
import TodoItem from "./view/TodoItem.vue";
import Card from "./components/Card.vue";

const showEditModal = ref(false);
const modal = ref(null);
const listTask = ref([]);
const taskId = ref(1);
let taskModel = {};
function addTask() {
  showEditModal.value = true;
}

window.onclick = (event) => {
  // console.log(modal.value.modal);
  if (modal != null && showEditModal.value) {
    if (event.target === modal.value.modal) {
      taskModel = {};
      showEditModal.value = false;
    }
    // showEditModal.value = false;
  }
};

function saveNewTask(task) {
  // console.log(task);
  listTask.value.push(task);
  taskModel = {};
}

function saveEditedTask(editedTask) {
  listTask.value.forEach((task) => {
    if (task.id === taskModel.id) {
      task.title = editedTask.title;
      task.description = editedTask.description;
      task.time = editedTask.time;
    }
  });
  taskModel = {};
}

function saveTask() {
  const task = {
    id: taskId.value++,
    title: modal.value.titleText,
    description: modal.value.descriptionText,
    time: modal.value.time,
  };
  if (taskModel.id) {
    saveEditedTask(task);
  } else {
    saveNewTask(task);
  }

  showEditModal.value = false;
}

function editTodoItem(id) {
  const task = listTask.value.find((task) => task.id === id);
  taskModel = { ...task, editingMode: true };
  showEditModal.value = true;
}

function deleteTask(id) {
  listTask.value = listTask.value.filter((task) => task.id !== id);
  taskModel = {};
  showEditModal.value = false;
}
</script>

<template>
  <TaskModal
    ref="modal"
    v-if="showEditModal"
    @save="saveTask"
    v-bind="taskModel"
    @delete="deleteTask(taskModel.id)"
  />
  <div class="w-[600px] rounded-xl bg-[#F9F9F9] px-6 py-6">
    <Header @addTask="addTask" class="mb-8" />
    <ul v-if="listTask.length > 0">
      <li v-for="task in listTask" class="mb-4">
        <!-- <Card>
          <div class="relative">
            <div class="absolute right-4 top-2">
              <div class="container">
                <div class="round">
                  <input
                    type="checkbox"
                    id="checkbox"
                    v-model="task.completed"
                  />
                  <label for="checkbox"></label>
                </div>
              </div>
            </div>
            <div
              class="text-xl font-bold"
              :class="{ 'line-through': task.completed }"
            >
              {{ task.title ? task.title : "Title" }}
            </div>
            <div class="text-sm text-gray-400">
              {{ task.description ? task.description : "Description" }}
            </div>
            <div class="my-2 h-[0.5px] bg-gray-200"></div>

            <div class="py-1 text-sm text-gray-500">
              {{ task.time ? task.time : "Today" }}
            </div>
          </div>
        </Card> -->
        <TodoItem
          class="mb-4"
          :key="task.id"
          v-bind="task"
          @edit="editTodoItem(task.id)"
        />
      </li>
    </ul>
    <div v-else class="">Add some task</div>
  </div>
</template>

<style scoped>
/* .round {
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
} */
</style>
