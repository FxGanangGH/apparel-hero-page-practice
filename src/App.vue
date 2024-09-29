<template>
  <div
    class="flex size-full min-h-screen items-center justify-center bg-pattern bg-cover"
  >
    <div class="flex size-full min-h-screen max-w-[2000px] items-center justify-center">
      <div
        class="flex size-full flex-col items-center justify-center lg:w-8/12 lg:max-w-screen-sm xl:w-[57%] xl:max-w-none"
      >
        <header class="w-full max-w-md p-10 lg:max-w-xl lg:pl-20">
          <img class="lg:scale-125 xl:scale-150" alt="Base Logo" src="/images/logo.svg" />
        </header>
        <img
          v-if="!isDesktop"
          class="size-full max-w-lg lg:max-w-xl"
          alt="Base Hero"
          src="/images/hero-mobile.jpg"
        />
        <main
          class="flex w-full max-w-md flex-col items-center justify-center px-10 py-20 lg:max-w-xl xl:mt-20 xl:items-start"
        >
          <h1
            class="text-center font-josefin-sans text-5xl font-light uppercase tracking-[10px] text-primary-pale-red lg:text-6xl xl:text-left xl:text-8xl"
          >
            We're
            <br />
            <span class="font-semibold text-black">
              coming
              <br />
              soon
            </span>
          </h1>
          <p
            class="mt-5 text-center font-josefin-sans text-primary-pale-red lg:text-xl xl:text-left"
          >
            Hello fellow shoppers! We're currently building our new fashion store. Add
            your email below to stay up-to-date with announcements and our launch deals.
          </p>
          <div class="relative mt-14 flex w-full items-center">
            <input
              class="w-full rounded-full border border-primary-soft-red/50 px-6 py-3"
              :class="{ 'border-primary-soft-red': invalidEmail }"
              placeholder="Email Address"
              type="email"
              name="email"
              v-model="email"
            />
            <button
              class="absolute right-0 z-10 h-full rounded-full bg-gradient-to-r from-gradient-2-start to-gradient-2-end px-8 py-3 drop-shadow-2xl xl:px-10"
              @click="handleSubmit"
            >
              <img src="/images/icon-arrow.svg" />
            </button>
          </div>
          <span
            class="mt-2 w-full pl-6 font-josefin-sans text-primary-soft-red"
            :class="{ 'opacity-0': !invalidEmail, 'opacity-100': invalidEmail }"
          >
            Please provide a valid email
          </span>
        </main>
      </div>
      <div v-if="isDesktop" class="w-[43%]">
        <img
          class="max-h-screen min-h-[730.830px] w-full object-fill"
          alt="Base Hero"
          src="/images/hero-desktop.jpg"
        />
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, computed } from "vue";

// Ref variables to store the email input and the validation error
const email = ref("");
const invalidEmail = ref(false);
const currentWidth = ref(window.innerWidth);

const isDesktop = computed(() => currentWidth.value >= 1280);

// Function to validate the email format
const validateEmail = () => {
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailPattern.test(email.value)) {
    invalidEmail.value = true;
  } else {
    invalidEmail.value = false;
  }
};

// Function to handle button click
const handleSubmit = () => {
  validateEmail();
};

const updateScreen = () => {
  currentWidth.value = window.innerWidth;
};

onMounted(() => {
  window.addEventListener("resize", updateScreen);
});
</script>
