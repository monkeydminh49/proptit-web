# VueJS
---

# II. Reactivity Fundamentals

## 1. Khai báo Reactive state

Với Options API, chúng ta có thể khai báo reactive state bằng cách sử dụng `data` property.

```js
export default {
  data() {
    return {
      count: 0
    }
  }
}
```

Chúng ta có thể sử dụng `this` để truy cập vào reactive state.

```js
export default {
  data() {
    return {
      count: 0
    }
  },
  methods: {
    increment() {
      this.count++
    }
  }
}
```

> `this` có thể được dùng để tạo mới trực tiếp các thuộc tính mới nhưng các thuộc tính này không phải là reactive properties.

**Reactive Proxy vs. Original​**

In Vue 3, data is made reactive by leveraging JavaScript Proxies. Users coming from Vue 2 should be aware of the following edge case:

```js
export default {
  data() {
    return {
      someObject: {}
    }
  },
  mounted() {
    const newObject = {}
    this.someObject = newObject

    console.log(newObject === this.someObject) // false
  }
}
```

When you access `this.someObject` after assigning it, the value is a reactive proxy of the original `newObject`. Unlike in Vue 2, the original `newObject` is left intact and will not be made reactive: make sure to always access reactive state as a property of `this`.

## 2. Khai báo Methods

Với Options API, chúng ta có thể khai báo methods bằng cách sử dụng `methods` property.

```js
export default {
  data() {
    return {
      count: 0
    }
  },
  methods: {
    increment() {
      this.count++
    }
  }
}
```

Vue automatically binds the `this` value for `methods` so that it always refers to the component instance. This ensures that a method retains the correct `this` value if it's used as an event listener or callback. You should avoid using arrow functions when defining `methods`, as that prevents Vue from binding the appropriate `this` value:

```js
export default {
  methods: {
    increment: () => {
      // BAD: no `this` access here!
    }
  }
}
```

Just like all other properties of the component instance, the methods are accessible from within the component's template. 

```html
<script>
export default {
  data() {
    return {
      count: 0
    }
  },
  methods: {
    increment() {
      this.count++
    }
  }
}
</script>

<template>
  <button @click="increment">count is: {{ count }}</button>
</template>
```

