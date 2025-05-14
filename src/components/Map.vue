<template>
  <div class="w-full h-[300px] md:h-[400px] lg:h-full flex items-center justify-center">
    <div class="relative w-full max-w-5xl h-full">
      <div class="imagebackground absolute inset-0 flex items-center justify-center text-white text-2xl font-bold">
        <!-- Map Image -->
      </div>
    </div>
  </div>
</template>

<style scoped>
.imagebackground {
  background-image: url("/Map.png"); /* ต้องวางไฟล์ไว้ใน public folder */
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
}
</style>
