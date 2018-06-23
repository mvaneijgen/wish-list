<template>
  <footer>

    <section>
      <h3>About</h3>
      <p>{{ about }}</p>
      <ul>
        <li><h4>{{me.name}}</h4></li>
        <li><a :href="'https://' + me.website">{{me.website}}</a></li>
        <li><a :href="'mailto:' + me.email">{{me.email}}</a></li>
        <li>{{me.social}}</li>
      </ul>
    </section>

    <section>
      <h3>Tools used</h3>
      <ul>
        <li v-for="(tool, index) in tools" :key="index">
          <h4><a :href="tool.link">{{tool.name}}</a></h4>
          <p v-html="tool.description"></p>
        </li>
      </ul>
    </section>

  </footer>
</template>

<script>
export default {
  // props: [],
  data() {
    return {
      title: 'Footer',
      about:
        'Op de één of andere manier vinden mensen het lastig om iets voor mij als cadeau te bedenken, terwijl ik denk dat het super makkelijk is. Zo als je hier boven ook ziet is het thema "dingen die op kunnen". En ja ik wil iedere keer kaas en whiskey, want die dingen gaan op een gegeven moment op en heb ze nog nooit allemaal geprobeerd. Daarnaast heb ik een soort van hekel aan spullen, dus als je iets anders wil kiezen dan hier op deze lijst bedenk dan dat het of op moet kunne of een ervaring is (ergens naar toe, kaartje voor een escape room of VR gamen wil ik ook altijd nog proberen).',
      me: {
        name: 'Mitchel van Eijgen',
        website: 'mvaneijgen.nl',
        email: 'mvaneijgen@gmail.com',
        social: "Add me on 'any-social-network.com/mvaneijgen'",
      },
      tools: [
        {
          name: 'Vue.js',
          description:
            'In samenwerking met Nuxt.js word deze Vue.js site gecompiled naar een statische app.',
          link: 'https://vuejs.org/v2/guide/installation.html',
        },
        {
          name: 'Todoist',
          description:
            'Op todoist beheer in een lijst met dingen die ik graag nog wil hebben en deze haal ik binnen op deze website <a href="https://developer.todoist.com/rest/v8/" class="link">via de API</a>.',
          link: 'http://todoist.com',
        },
        {
          name: 'Github pages',
          description:
            'Deze site word gehost op Github pages. Een gratis webhosting voor kleine projecten direct van uit je project reposetory.',
          link: 'https://pages.github.com',
        },
      ],
      toolsIntro: '',
    };
  }, // End data
  // computed: {},
  // methods: {},
  // watch: {},

  // // Live cicle hook. Check for more https://vuejs.org/v2/api/
  // created: {}, // Each time the app is created (once?)
  // mounted: {}, // Be sure all elements are drawn
};
</script>

<style scoped lang="scss">
@import '~/assets/css/common/_variables.scss';

footer {
  color: $brand-light;

  h4 {
    margin-bottom: 0;
    font-size: 1.2em;
  }
  ul, span, p {
    font-size: 1rem;
    line-height: 1.4em;
  }
  ul {
    list-style: none;
    padding: 0;
    margin: 0;
  }
  p {
    margin-bottom: $base-margin*2;
  }
}
</style>
