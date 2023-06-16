<script lang="ts" setup>
// create variable for mobile navigation
const isMobileNavVisible = ref<boolean>(false);
// method when the menu button is click
const menuTrigger = (): void => {
  if (isMobileNavVisible.value) {
    isMobileNavVisible.value = false;
    return;
  }

  isMobileNavVisible.value = true;
};
// useHead composable to add CSS class in the HTML body
// when the menu trigger is click
useHead({
  bodyAttrs: {
    class: computed(() => {
      if (isMobileNavVisible.value) return 'menu-is-open';
      
      return '';
    }),
  },
});
</script>

  <template>
      <header class="bg-white dark:bg-black text-black dark:text-white sticky top-0 z-10 flex flex-col-reverse justify-center items-center">
        <div class="flex mx-40 pt-16 pb-2">
              <nav id="Clicker" class="active flex h-16 Second-Font sm:block space-x-8 text-2xl pr-6 pl-6" @click="menuTrigger()" aria-label="main">
              <NuxtLink class="link hover:opacity-90" to="/">
                Home
              </NuxtLink>
              </nav>
              <nav id="Clicker" class="flex h-16 Second-Font sm:block space-x-8 text-2xl pr-6 pl-6" @click="menuTrigger()" aria-label="main">
                <NuxtLink href="../AboutMe" class="h-16 w-16 link hover:opacity-90">
                  About Me
                </NuxtLink>
              </nav>
              <div>
                <h1 class="Main-font text-7xl font-medium text-center pl-10 pr-10">Elena Faccio</h1>
                <hr>
                <div class="Second-Font text-center text-sm sm:text-2xl">
                Strategies for <span class="text-[#5bd086] dark:text-[#90FFB9]">individuality</span> and effective <span class="text-orange-400 dark:text-orange-300">identity</span> communication
                </div>
              </div>
              <button id="mobile-open-button" class="text-3xl sm:hidden focus:outline-none">
                &#9776;
              </button>
                <nav id="Clicker" class="h-16 Second-Font hidden sm:block space-x-8 text-2xl pr-6 pl-6" @click="menuTrigger()" aria-label="main">
                  <NuxtLink href="../services" class="link hover:opacity-90">
                  Services
                </NuxtLink>
                </nav>
                <nav id="Clicker" class="h-16 Second-Font hidden sm:block space-x-8 text-2xl pr-6 pl-6" @click="menuTrigger()" aria-label="main">
                  <NuxtLink href="../Contact" class="link hover:opacity-90">
                    Contact
                  </NuxtLink>
                </nav>
            </div>
          <hr class="dark:bg-slate-500 bg-black mx-auto">
      </header>
  </template>
  
  <style lang="scss">
  
  </style>