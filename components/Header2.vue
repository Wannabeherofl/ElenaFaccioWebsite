
<script lang="ts" setup>
</script>
<template>
<header class="bg-900 shadow-sm border-b-[0.2px] border-[#5f8dd3]">
    <nav class="DMSFont dropdown md:container-fluid mx-auto md:p-4 pt-4 px-4 md:flex justify-between overflow-auto row">
        <div class="dropdown-content md:invisible" id="myDropdown">
            <NuxtLink to="/" class="btn text-xl">Home</NuxtLink>
            <NuxtLink to="/about" class="btn text-xl">About</NuxtLink>
            <NuxtLink to="/contact" class="btn text-xl">Contact</NuxtLink>
        </div>
        <ul class="md:flex invisible md:visible gap-4 pr-32">
            <NuxtLink to="/" class="btn text-xl">Home</NuxtLink>
            <NuxtLink to="/about" class="btn text-xl">About</NuxtLink>
            <div class="absolute">
                <h1 class="Main-font sm:text-7xl text-6xl font-medium text-center pl-10 pr-10">Elena Faccio</h1>
                <hr>
                <div class="Second-Font text-center text-sm sm:text-2xl">
                Strategies for <span class="text-[#7affab] dark:text-[#90FFB9]">individuality</span> and effective <span class="text-orange-300 dark:text-orange-300">identity</span> communication
                </div>
            </div>
            <NuxtLink to="/contact" class="btn text-xl">Contact</NuxtLink>
            <NuxtLink to="/contact" class="btn text-xl">Services</NuxtLink>
        </ul>
    </nav>
</header>
</template>
 
<style lang="scss">
  
</style>