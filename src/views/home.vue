<template>
  <div>
    <button @click="toggleSidebar">Toggle Sidebar</button>
    <aside :class="{ open: isOpen.value }">
      <slot></slot>
    </aside>
  </div>
</template>

<script setup>
const isOpen = ref(false)

const toggleSidebar = () => {
  isOpen.value = !isOpen.value
}
</script>

<style>
aside {
  position: fixed;
  top: 0;
  left: -200px;
  width: 200px;
  height: 100%;
  background-color: #f2f2f2;
  transition: left 0.3s ease-in-out;
}

aside.open {
  left: 0;
}
</style>
