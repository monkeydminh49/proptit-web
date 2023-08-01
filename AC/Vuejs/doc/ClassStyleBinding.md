# VueJS

---

# IV. Class & Style Binding

## 1. Object Syntax

Cú pháp:

```html
<div v-bind:class="{ class1: condition1, class2: condition2 }"></div>
```

Ví dụ 1:

```html
<script>
  export default {
    data() {
      return {
        isActive: true,
        hasError: false,
      }
    },
  }
</script>

<template>
  <div
    class="static"
    :class="{ active: isActive, 'text-danger': hasError }"
  ></div>
</template>
```

Kết quả:

```html
<div class="static active"></div>
```

Ví dụ 2:

```html
<script>
  export default {
    data() {
      return {
        isActive: true,
        error: null,
      }
    },
    computed: {
      classObject() {
        return {
          active: this.isActive && !this.error,
          "text-danger": this.error && this.error.type === "fatal",
        }
      },
    },
  }
</script>

<template> <div :class="classObject"></div></template>
```

## 2. Array Syntax

Cú pháp:

```html
<div v-bind:class="[class1, class2]"></div>
```

Ví dụ:

```html
<script>
  export default {
    data() {
      return {
        isActive: true,
        error: null,
      }
    },
  }
</script>

<template>
  <div class="static" :class="[isActive ? activeClass : '', errorClass]"></div>
</template>
```

## 3. Binding Inline Styles

Cú pháp:

```html
<script>
  export default {
    data() {
      return {
        activeColor: "red",
        fontSize: 30,
      }
    },
  }
</script>

<template>
  <div :style="{ color: activeColor, fontSize: fontSize + 'px' }"></div>
</template>
```
