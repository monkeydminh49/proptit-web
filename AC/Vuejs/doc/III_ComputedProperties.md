# VueJS

---

# III. Computed Properties

`computed` gần giống với methods bởi đều dùng để khai báo các function. Tuy nhiên, computed properties sẽ được cache lại và chỉ được tính toán lại khi các reactive dependencies của nó thay đổi.

```js
export default {
  data() {
    return {
      firstName: "John",
      lastName: "Doe",
    }
  },
  computed: {
    fullName() {
      return `${this.firstName} ${this.lastName}`
    },
  },
}
```

```html
<template>
  <div>
    <p>First name: {{ firstName }}</p>
    <p>Last name: {{ lastName }}</p>
    <p>Full name: {{ fullName }}</p>
  </div>
</template>
```
