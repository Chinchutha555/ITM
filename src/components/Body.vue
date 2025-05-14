<template>
  <div class="ml-6 mr-6 mt-2">
    <h1
      class="text-blue-600 mb-5"
      :style="{
        fontFamily: 'Prompt, sans-serif',
        fontSize: '24px',
        fontWeight: '600',
        lineHeight: '32px',
        color: 'var(--neutral-800-primary, #3F4A59)',
      }"
    >
      {{ msg }}
    </h1>

    <!-- กล่องหลัก -->
    <div
      class="mb-5"
      :style="{
        display: 'flex',
        height: '348px',
        padding: '20px 30px',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        gap: '15px',
        alignSelf: 'stretch',
        borderRadius: '15px',
        border: '1.5px solid var(--Secondary-Border, #D6DDE7)',
        background: '#FFF',
      }"
    >
      <img src="../assets/Search.jpg" />
    </div>

    <!-- กล่องล่าง -->
    <div class="mb-5"
      :style="{
        height: '119px',
        alignSelf: 'stretch',
        borderRadius: '15px',
        border: '1.5px solid var(--Secondary-Border, #D6DDE7)',
        background: '#FFF',
        overflow: 'hidden',
      }"
    >
      <img
        src="../assets/box2.png"
        style="width: 100%; height: 100%; object-fit: cover"
      />
    </div>

    <div class="mb-5"
      :style="{
        height: '534px',
        alignSelf: 'stretch',
        borderRadius: '15px',
        border: '1.5px solid var(--Secondary-Border, #D6DDE7)',
        background: '#FFF',
        overflow: 'hidden',
      }"
    >
      <img
        src="../assets/Graph.png"
        style="width: 100%; height: 100%; object-fit: cover"
      />
    </div>
  </div>
</template>

<script setup>
defineProps({
  msg: String,
});
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Prompt:wght@600&display=swap");
</style>
