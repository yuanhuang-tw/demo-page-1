import {
  createApp,
  ref,
  computed,
  watch,
  nextTick,
  onMounted,
} from 'https://unpkg.com/vue@3/dist/vue.esm-browser.prod.js';

import AccordionComponent from './accordion-component.js';
import SelectComponent from './select-component.js';

const vueApp = createApp({
  components: {
    AccordionComponent,
    SelectComponent,
  },

  setup() {
    const items = ref([
      {
        id: 'ep1',
        yearMonth: '2023/03',
        intro: `
          <h4 class="fw-bold mb-3">Lunar New Year</h4>
          <p>Many people all over Asia are welcoming the Year of the Rabbit, a lucky year for love. You’ll hear how the Chinese zodiac started and how one diverse city outside of Asia celebrates the Lunar New Year in this episode.</p>
          <p class="mb-0">在亞洲，很多人都在慶祝兔年的到來，這是象徵桃花運興旺的一年。在這集當中，你除了會了解生肖的起源，還會了解一個不在亞洲、具備多元文化的城市如何慶祝農曆新年。</p>
        `,
        content: `
          <h4 class="fw-bold mb-3">Vocabulary</h4>
          <p>
            <span class="fw-bold">Wharf 碼頭(n.)</span><br>
            Kim enjoyed the scenic ferry ride from Tamsui Wharf to Fisherman’s Wharf.
          </p>
          <p>
            <span class="fw-bold">Chinese zodiac 十二生肖(n.)</span><br>
            According to the Chinese zodiac, 2023 is the year of the Rabbit.
          </p>
          <p>
            <span class="fw-bold">Enthusiast 愛好者(n.)</span><br>
            He is an enthusiast about Chinese zodiac.
          </p>
          <p>
            <span class="fw-bold">Diverse 多元的(adj.)</span><br>
            The food court in Taipei 101 has a diverse range of cuisines.
          </p>
          <p>
            <span class="fw-bold">Relaxation 放鬆(n.)</span><br>
            We have plenty of time for rest and relaxation.
          </p>
          <p>
            <span class="fw-bold">Affectionate 充滿愛意的(adj.)</span><br>
            Max smiled and gave his cat an affectionate pat on the head.
          </p>
          <p>
            <span class="fw-bold">Cuddle 抱抱(v.)(n.)</span><br>
            Kim cuddled her young son until he calmed down and stopped crying.
          </p>
        `,
      },
    ]);
    const ITEMS_PER_PAGE = 4;
    const page = ref(pageNumber(items, ITEMS_PER_PAGE));
    const getPageNumber = pageNumber(items, ITEMS_PER_PAGE);
    const activeAudio = ref('');
    let faIcons;
    let audioDivs;

    const showData = computed(() =>
      items.value.slice(
        (page.value - 1) * ITEMS_PER_PAGE,
        page.value * ITEMS_PER_PAGE
      )
    );

    const epString = computed(
      () =>
        `Episode ${
          page.value * ITEMS_PER_PAGE - ITEMS_PER_PAGE + 1
        } ~ Episode ${page.value * ITEMS_PER_PAGE}`
    );

    const playAudio = (file, id) => {
      faIcons.forEach((fa) => fa.classList.add('invisible'));
      audioDivs.forEach((ad) => (ad.innerHTML = ''));

      if (activeAudio.value === file) {
        activeAudio.value = '';
      } else {
        const audioDiv = document.querySelector(`#${id}`);

        activeAudio.value = file;

        audioDiv.innerHTML = `
          <audio
            controls
            preload="auto"
            style="width: 100%; border: 0"
          >
            <source src="audio/${file}.mp3" type="audio/mpeg" />
          </audio>
        `;

        audioDiv.querySelector('audio').play();
      }
    };

    watch(page, () => {
      nextTick(() => {
        ({ faIcons, audioDivs } = getDom());
      });
    });

    onMounted(() => {
      new WOW().init();
      ({ faIcons, audioDivs } = getDom());
    });

    return {
      items,
      ITEMS_PER_PAGE,
      page,
      getPageNumber,
      activeAudio,
      showData,
      epString,
      playAudio,
    };
  },
});

vueApp.mount('#brief-vue');

// --- function ---
function pageNumber(items, ITEMS_PER_PAGE) {
  return Math.ceil(items.value.length / ITEMS_PER_PAGE);
}

function getDom() {
  return {
    faIcons: document.querySelectorAll('.fa-volume-up'),
    audioDivs: document.querySelectorAll('.audio-div'),
  };
}
// --- function ---
