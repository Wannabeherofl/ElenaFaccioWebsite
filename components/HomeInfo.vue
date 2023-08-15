<template>
    <main class="max-4-4xl mx-auto">
      <section id="hero" class="hero flex flex-col justify-center sm:flex-row p-6 items-center mb-40">
        <article>
          <h2 lang="it" class="Third-font max-w-2xl text-4xl text-center sm:text-5xl text-slate-900 dark:text-white">
            Cosa Faccio
          </h2>
          <h2 lang="en" class="Third-font max-w-2xl text-4xl text-center sm:text-5xl text-slate-900 dark:text-white">
            What I do
          </h2>
          <p lang="en" class="vl3 rounded-xl Second-Font max-w-2xl text-3xl mt-4 text-center sm:flex-row text-slate-700 dark:text-white">
            I help people make their business <strong class="text-[#fdba74]">individuality</strong> conscious and their marketing and communication activities more effective
          </p>
          <p lang="it" class="vl3 rounded-xl Second-Font max-w-2xl text-3xl mt-4 text-center sm:flex-row text-slate-700 dark:text-white">
            Aiuto le persone a rendere conscia la loro <strong class="text-[#fdba74]">identità</strong> professionale e più efficaci le loro attività di marketing e comunicazione
          </p>
        </article>
      </section>
    </main>
    <script src="https://code.jquery.com/jquery-2.2.4.min.js" integrity="sha256-BbhdlvQf/xTY9gja0Dq3HiwQF8LaCRTXxZKRutelT44=" crossorigin="anonymous">
    </script>
</template>
<script>
  $('[lang]').hide(); // hide all lang attributes on start.
$('[lang="ko"]').show(); // show just Korean text (you can change it)
$('#lang-switch').change(function () { // put onchange event when user select option from select
    var lang = $(this).val(); // decide which language to display using switch case. The rest is obvious (i think)
    switch (lang) {
        case 'en':
            $('[lang]').hide();
            $('[lang="en"]').show();
        break;
        case 'ko':
            $('[lang]').hide();
            $('[lang="ko"]').show();
        break;
        default:
            $('[lang]').hide();
            $('[lang="ko"]').show();
        }
});
</script>