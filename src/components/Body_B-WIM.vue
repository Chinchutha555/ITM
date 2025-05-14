<template>
  <div class="ml-6 mr-6 mt-2">
    <div class="flex items-center gap-2 text-sm text-[#8697AA] mb-5">
      <p class="m-0">
        {{ msg }}
      </p>

      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="20"
        height="20"
        viewBox="0 0 20 20"
        fill="none"
      >
        <path
          d="M8.33333 5.83073L12.5 9.9974L8.33333 14.1641"
          stroke="#006666"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>

      <p class="m-0 text-[#066] text-sm not-italic font-normal leading-[20px]">
        {{ Bridge_Name }}
      </p>
    </div>

    <!-- Tabs -->
    <div class="flex border-gray-300">
      <div class="flex">
        <!-- Tab 1 -->
        <button
          @click="activeTab = 'ข้อมูล B-WIM'"
          :class="[
            activeTab === 'ข้อมูล B-WIM'
              ? 'font-medium text-[#066]'
              : 'hover:text-[#066]',
          ]"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="150" height="45">
            <path
              d="M0 15C0 6.71573 6.71573 0 15 0H123.376C129.718 0 135.375 3.98828 137.505 9.96163L150 45H0V15Z"
              :fill="activeTab === 'ข้อมูล B-WIM' ? '#ffffff' : '#D6DDE7'"
              :stroke="activeTab === 'ข้อมูล B-WIM' ? '#D6DDE7' : 'none'"
            />
            <foreignObject x="0" y="0" width="150" height="45">
              <div
                xmlns="http://www.w3.org/1999/xhtml"
                class="flex justify-center items-center w-full h-full text-sm font-medium"
                :class="
                  activeTab === 'ข้อมูล B-WIM'
                    ? 'text-[#066]'
                    : 'text-[#8697AA]'
                "
              >
                ข้อมูล B-WIM
              </div>
            </foreignObject>
          </svg>
        </button>

        <!-- Tab 2 -->
        <button
          @click="activeTab = 'ข้อมูลกระทำความผิด'"
          :class="[
            activeTab === 'ข้อมูลกระทำความผิด'
              ? 'font-medium text-[#066]'
              : 'text-[#8697AA] hover:text-[#066]',
          ]"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="170"
            height="45"
            viewBox="0 0 170 45"
          >
            <path
              d="M0 15C0 6.71573 6.71573 0 15 0H141.438C147.518 0 152.996 3.6702 155.31 9.29295L170 45H0V15Z"
              :fill="activeTab === 'ข้อมูลกระทำความผิด' ? '#ffffff' : '#D6DDE7'"
              :stroke="activeTab === 'ข้อมูลกระทำความผิด' ? '#D6DDE7' : 'none'"
            />
            <foreignObject x="0" y="0" width="170" height="45">
              <div
                xmlns="http://www.w3.org/1999/xhtml"
                class="flex justify-center items-center w-full h-full text-sm font-medium"
                :class="
                  activeTab === 'ข้อมูลกระทำความผิด'
                    ? 'text-[#066]'
                    : 'text-[#8697AA]'
                "
              >
                ข้อมูลกระทำความผิด
              </div>
            </foreignObject>
          </svg>
        </button>

        <!-- Tab 3 -->
        <button
          @click="activeTab = 'ข้อมูลประเภทรถ'"
          :class="[
            activeTab === 'ข้อมูลประเภทรถ'
              ? ' font-medium text-[#8697AA]'
              : ' text-[#8697AA] hover:text-[#066]',
          ]"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="150" height="45">
            <path
              d="M0 15C0 6.71573 6.71573 0 15 0H123.376C129.718 0 135.375 3.98828 137.505 9.96163L150 45H0V15Z"
              :fill="activeTab === 'ข้อมูลประเภทรถ' ? '#ffffff' : '#D6DDE7'"
              :stroke="activeTab === 'ข้อมูลประเภทรถ' ? '#D6DDE7' : 'none'"
            />
            <foreignObject x="0" y="0" width="150" height="45">
              <div
                xmlns="http://www.w3.org/1999/xhtml"
                class="flex justify-center items-center w-full h-full text-sm font-medium"
                :class="
                  activeTab === 'ข้อมูลประเภทรถ'
                    ? 'text-[#066]'
                    : 'text-[#8697AA]'
                "
              >
                ข้อมูลประเภทรถ
              </div>
            </foreignObject>
          </svg>
        </button>
      </div>
    </div>

    <!-- Box -->
    <div
      class="bg-white p-60 rounded-tr-2xl rounded-br-2xl rounded-bl-2xl border-1 border-gray-300 -mt-px"
    >
      <div class="flex justify-between items-center mb-4"></div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";

defineProps({
  msg: String,
  Bridge_Name: String,
});

const tabs = ["ข้อมูล B-WIM", "ข้อมูลการทำความผิด", "ข้อมูลประเภทรถ"];
const activeTab = ref("ข้อมูล B-WIM");
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Prompt:wght@600&display=swap");
</style>
