

<template>
    <main class="max-4-4xl mx-auto">
      <section id="hero" class="hero flex flex-col justify-center sm:flex-row p-6 items-center mb-40">
        <article>
          <h2 language="Italian" class="Third-font max-w-2xl text-4xl text-center sm:text-5xl text-slate-900 dark:text-white">
            Cosa Faccio
          </h2>
          <h2 language="English" class="Third-font max-w-2xl text-4xl text-center sm:text-5xl text-slate-900 dark:text-white">
            What I do
          </h2>
          <p language="English" class="vl3 rounded-xl Second-Font max-w-2xl text-3xl mt-4 text-center sm:flex-row text-slate-700 dark:text-white">
            I help people make their business <strong class="text-[#fdba74]">individuality</strong> conscious and their marketing and communication activities more effective
          </p>
          <p language="Italian" class="vl3 rounded-xl Second-Font max-w-2xl text-3xl mt-4 text-center sm:flex-row text-slate-700 dark:text-white">
            Aiuto le persone a rendere conscia la loro <strong class="text-[#fdba74]">identità</strong> professionale e più efficaci le loro attività di marketing e comunicazione
          </p>
        </article>
      </section>
    </main>
</template>

<script>
function toggleDescriptor(language) {
    let description = document.getElementById("description");
    if (language === "Italian") {
        description.innerHTML = "Show Italian Text";
    }
    else {
        description.innerHTML = "Show English Text";
    }  
}
</script>