# VueJS

---

# Conditional Rendering

## `v-if` vs. `v-show`

​
`v-if` is "real" conditional rendering because it ensures that event listeners and child components inside the conditional block are properly destroyed and re-created during toggles.

`v-if` is also lazy: if the condition is false on initial render, it will not do anything - the conditional block won't be rendered until the condition becomes true for the first time.

In comparison, `v-show` is much simpler - the element is always rendered regardless of initial condition, with CSS-based toggling.

Generally speaking, `v-if` has higher toggle costs while `v-show` has higher initial render costs. So prefer `v-show` if you need to toggle something very often, and prefer `v-if` if the condition is unlikely to change at runtime.

## `v-if` with `v-for​`

**> It's not recommended to use `v-if` and `v-for` on the same element due to implicit precedence. **

When `v-if` and `v-for` are both used on the same element, `v-if` will be evaluated first.
