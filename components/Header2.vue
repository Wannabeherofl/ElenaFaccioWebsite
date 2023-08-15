
<script lang="ts" setup>
</script>
<template>
<header class="bg-white dark:bg-black text-black dark:text-white sm:sticky top-0 z-10 flex flex-col-reverse justify-center items-center">
    <nav class="align-center dropdown sticky mx-auto pt-4 pb-4 px-4 justify-between row bg-white dark:bg-black text-black dark:text-white">
        <div class="md:flex invisible md:visible gap-8 px-auto sticky">
            <NuxtLink to="/" class="pt-8 Second-Font text-2xl ml-auto static">Home</NuxtLink>
            <NuxtLink to="../AboutMe" class="pt-8 Second-Font text-2xl static">About Me</NuxtLink>
            <div>
                <h1 class="Main-font sm:text-7xl text-6xl font-medium text-center pl-10 pr-10">Elena Faccio</h1>
                <hr>
                <div class="Second-font text-center text-sm sm:text-2xl">
                Strategies for <span class="text-[#7affab] dark:text-[#90FFB9]">individuality</span> and effective <span class="text-orange-300 dark:text-orange-300">identity</span> communication
                </div>
            </div>
            <NuxtLink to="../Contact" class="pt-8 Second-Font text-2xl static">Contact</NuxtLink>
            <NuxtLink to="../Services" class="pt-8 Second-Font text-2xl mr-auto static">Services</NuxtLink>
        </div>
    </nav>
</header>
</template>
 
<style lang="scss">
  
</style>