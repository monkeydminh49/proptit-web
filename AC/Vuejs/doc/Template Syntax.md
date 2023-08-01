# VueJS
---

# I. Template Syntax

## 1. Interpolation

Sử dụng cặp dấu ngoặc nhọn `{{ }}` để thêm nội dung vào template.

```html
<span>Message: {{ msg }}</span>
```

## 2. Directive

Directive là các thuộc tính đặc biệt với tiền tố `v-` được sử dụng để thêm các chức năng đặc biệt cho các thẻ HTML.

**1. `v-if`**

`v-if` được sử dụng để thêm điều kiện cho một thẻ HTML. Nếu điều kiện đúng thì thẻ HTML sẽ được hiển thị, ngược lại thẻ HTML sẽ bị ẩn đi.

```html
<p v-if="seen">Now you see me</p>
```

**2. `v-for`**

`v-for` được sử dụng để lặp qua một mảng và thêm các thẻ HTML vào template.

```html
<ul>
  <li v-for="todo in todos" v-bind:key="todo.id">
    {{ todo.text }}
  </li>
</ul>
```

**3. `v-on`**

`v-on` được sử dụng để thêm các sự kiện cho một thẻ HTML.

```html
<button v-on:click="reverseMessage">Reverse Message</button>
```

Có thể viết tắt `v-on` thành dấu `@`.

```html
<button @click="reverseMessage">Reverse Message</button>
```

**4. `v-bind`**

`v-bind` được sử dụng để thêm các thuộc tính cho một thẻ HTML.

```html
<img v-bind:src="imageSrc">
```

Có thể viết tắt `v-bind` thành dấu `:`.

```html
<img :src="imageSrc">
```

**5. `v-model`**

`v-model` được sử dụng để liên kết dữ liệu giữa các thẻ HTML và các biến trong VueJS.

```html
<script>
export default {
  data() {
    return {
      text: ''
    }
  }
}
</script>

<template>
  <input v-model="text" placeholder="Type here">
  <p>{{ text }}</p>
</template>
```

**6. `v-html`**

`v-html` được sử dụng để thêm nội dung HTML vào một thẻ HTML.

```html
<p v-html="htmlContent"></p>
```

Một số lưu ý:

1. Vue actually supports the full power of JavaScript expressions inside all data bindings:

```html
{{ number + 1 }}

{{ ok ? 'YES' : 'NO' }}

{{ message.split('').reverse().join('') }}
```
## 3. Dynamic Arguments

Chúng ta có thể sử dụng JavaScript expression để thêm các arguments cho các directive.

```html
<a v-bind:[attributeName]="url"> ... </a>
```

> Nếu sử dụng in-DOM templates (template được viết trực tiếp trong file HTML) thì chỉ được viết attribute name ở dạng lowercase.

## 4. Modifiers

Các modifiers được sử dụng để thêm các chức năng đặc biệt cho các directive.

Ví dụ ta có `.prevent` modifier cho `v-on` directive để gọi event.preventDefault() khi event được kích hoạt.

```html
<form v-on:submit.prevent="onSubmit"> ... </form>
```

<img src="https://vuejs.org/assets/directive.69c37117.png" alt="Modifiers">




