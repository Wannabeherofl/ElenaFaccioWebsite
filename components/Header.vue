  <script setup></script>

  <template>
      <header class="text-center bg-white dark:bg-black text-black dark:text-white sticky top-0 z-10">
        <div class="flex mx-40 pt-16 pb-2">
              <nav class="Clicker flex h-16 Second-Font sm:block space-x-8 text-2xl pr-6 pl-6" aria-label="main">
              <NuxtLink class="link hover:opacity-90" to="/">
                Home
              </NuxtLink>
              </nav>
              <nav class="Clicker flex h-16 Second-Font sm:block space-x-8 text-2xl pr-6 pl-6" aria-label="main">
                <NuxtLink href="../AboutMe" class="h-16 w-16 link hover:opacity-90">
                  About Me
                </NuxtLink>
              </nav>
              <div>
                <h1 class="Main-font text-7xl font-medium text-center pl-10 pr-10">Elena Faccio</h1>
                <hr>
                <div class="Second-Font text-center text-sm sm:text-2xl">
                Strategies for <span class="text-[#5bd086] dark:text-[#90FFB9]">individuality</span> and effective <span class="text-orange-500 dark:text-orange-300">identity</span> communication
                </div>
              </div>
              <button id="mobile-open-button" class="text-3xl sm:hidden focus:outline-none">
                &#9776;
              </button>
                <nav class="Clicker h-16 Second-Font hidden sm:block space-x-8 text-2xl pr-6 pl-6" aria-label="main">
                  <NuxtLink href="../services" class="link hover:opacity-90">
                  Services
                </NuxtLink>
                </nav>
                <nav class="Clicker h-16 Second-Font hidden sm:block space-x-8 text-2xl pr-6 pl-6" aria-label="main">
                  <a href="../Contact.html" class="h-16">
                    Contact
                  </a>
                </nav>
            </div>
          <hr class="dark:bg-slate-500 bg-black mx-auto">
      </header>
  </template>
  
  <style lang="ts">
  function handleClick(e) {
        var curr = e.target.textContent;
        var elem = document.querySelectorAll('#Clicker');
        for (var i = 0; i < elem.length; i++) {
            if (elem[i].textContent === curr) {
                elem[i].className = 'active';
            } else {
                elem[i].className = '';
            }
        }
    };
</style>