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
      {
        id: 'ep2',
        yearMonth: '2023/03',
        intro: `
          <h4 class="fw-bold mb-3">The Grammy Awards</h4>
          <p>The Grammy Awards is tonight at the Crypto.com Arena. You’ll hear who this year’s host is, what this year’s new awards and big awards are, and who this year’s most nominated female artist is. You’ll also learn who makes sure the right names go into the right envelopes in this episode.</p>
          <p class="mb-0">葛萊美獎頒獎典禮今晚會在加密貨幣體育館舉行。在這集當中，你會知道今年的主持人是誰、有哪些新的獎項、大獎有哪些，還有獲得最多提名的女藝人！你還會明白誰負責把正確的得獎名單放進正確的信封裡面。</p>
        `,
        content: `
          <h4 class="fw-bold mb-3">Vocabulary</h4>
          <p>
            <span class="fw-bold">Venue 場館 (n.)</span><br>
            Many venues can host various kinds of events like weddings or graduation parties.
          </p>
          <p>
            <span class="fw-bold">Alternative 另類的；替代的(adj.)</span><br>
            Taiwan’s English-language radio station broadcasts mainstream and alternative music.
          </p>
          <p>
            <span class="fw-bold">Interactive 互動的(adj.)</span><br>
            Comedians who give interactive performances might engage audiences by inviting someone onto the stage.
          </p>
          <p>
            <span class="fw-bold">Quality 品質(n.)</span><br>
            The sound quality of the new microphones on the podium is crystal clear.
          </p>
          <p>
            <span class="fw-bold">Hint 提示(n.)</span><br>
            The book is full of handy hints on painting and decorating
          </p>
          <p>
            <span class="fw-bold">Nominated 被提名的(adj.)</span><br>
            He's been nominated by the Green Party as their candidate in the next election.
          </p>
        `,
      },
      {
        id: 'ep3',
        yearMonth: '2023/03',
        intro: `
          <h4 class="fw-bold mb-3">Taiwan Lantern Festival</h4>
          <p>From Taitung to Taipei, in fact, all over Taiwan, Lantern Festivals are taking place. You’ll hear about some of their unique traditions, including grand processions, firecracker throwing, and even bomb sites! You’ll also learn about the legend of Master HanDan and his celestial finances in this episode.</p>
          <p class="mb-0">從台東到台北，實際上，在台灣各地都有舉辦元宵節活動。你會聽到一些獨特的傳統，包括盛大的遊行、放鞭炮，甚至還有炸彈場！在這一集中，你還會學到關於寒單爺及其天上財富的傳說。</p>
        `,
        content: `
          <h4 class="fw-bold mb-3">Vocabulary</h4>
          <p>
            <span class="fw-bold">Tradition 傳統(n.)</span><br>
            It’s a centuries-old festival tradition to light up hundreds of firecrackers at the same time.
          </p>
          <p>
            <span class="fw-bold">Unique 獨特的(adj.)</span><br>
            The unique feature of this celebration is a dance with a traditional Chinese dragon.
          </p>
          <p>
            <span class="fw-bold">Legendary 傳奇的(adj.)</span><br>
            Have you heard of the legendary Master HanDan, the great military leader?
          </p>
          <p>
            <span class="fw-bold">Procession 隊伍(n.)</span><br>
            The procession moved slowly through the streets as thousands of people watched.
          </p>
          <p>
            <span class="fw-bold">Volunteer 志願者(n.) 自願(v.)</span><br>
            Volunteering is a great way to give back to the community.
          </p>
          <p>
            <span class="fw-bold">Celestial 天上的(adj.)</span><br>
            Angels are celestial beings.
          </p>
        `,
      },
      {
        id: 'ep4',
        yearMonth: '2023/03',
        intro: `
          <h4 class="fw-bold mb-3">Top 3 Carnivals in the World</h4>
          <p>There are exciting parades, crazy costumes, beautiful masks, and much, much more at the biggest and best parties on the planet. These parties are often called carnivals. You’ll hear about the most fascinating carnivals in this episode, reported all the way from Trinidad & Tobago in the Caribbean.</p>
          <p class="mb-0">地表上最大、最棒的派對叫做嘉年華，嘉年華會有歡樂的遊行、誇張的服裝、漂亮的面具，還有很多很多其他的東西。在這集當中，來自位於加勒比海的千里達及托巴哥的遠端報導，會讓你認識全世界最有吸引力的嘉年華。</p>
        `,
        content: `
          <h4 class="fw-bold mb-3">Vocabulary</h4>
          <p>
            <span class="fw-bold">Replicate 複製(v.)</span><br>
            Is it practical to replicate eastern culture in the west?
          </p>
          <p>
            <span class="fw-bold">Costume 表演服裝(n.)</span><br>
            People wear special costumes at some carnivals, but at others, people wear their usual clothes.
          </p>
          <p>
            <span class="fw-bold">Inseparable 密不可分的(adj.)</span><br>
            The influence of African music and culture is an inseparable part of many carnivals.
          </p>
          <p>
            <span class="fw-bold">Ornate 華麗的(adj.)</span><br>
            The style is ornate and highly decorative.
          </p>
          <p>
            <span class="fw-bold">Majestic 壯麗的(adj.)</span><br>
            The eagle soared through the sky with a majestic grace, its wings outstretched and the sun shining on its feathers.
          </p>
          <p>
            <span class="fw-bold">Community 社群(n.)</span><br>
            The Caribbean and Latin communities in Taiwan share their carnival customs at Carnaval Taipei.
          </p>
          <p>
            <span class="fw-bold">Fascinating 吸引人的(adj.)</span><br>
            I couldn’t stop looking at the fascinating masks people were wearing.
          </p>
        `,
      },
      {
        id: 'ep5',
        yearMonth: '2023/03',
        intro: `
          <h4 class="fw-bold mb-3">International Mother Language Day</h4>
          <p>Language is more than just words. In this episode, you’ll hear about the importance of a person’s mother language. You’ll learn about a way to keep the world’s many languages alive, and why this should be done.</p>
          <p class="mb-0">語言不僅僅是說出口的話而已。在這集當中，你會知道母語對於一個人的重要性、保存世界上的語言的方法，以及為甚麼我們該這麼做。</p>
        `,
        content: `
          <h4 class="fw-bold mb-3">Vocabulary</h4>
          <p>
            <span class="fw-bold">Vital 必要的(adj.)</span><br>
            The questions put forward at the meeting are of vital importance.
          </p>
          <p>
            <span class="fw-bold">Indigenous 當地的(adj.)</span><br>
            There will be no indigenous people except the seagulls.
          </p>
          <p>
            <span class="fw-bold">Extinct 滅絕的(adj.)</span><br>
            When the last speaker of a language dies, the language and its culture often become extinct too.
          </p>
          <p>
            <span class="fw-bold">Vulnerable 脆弱的(adj.)</span><br>
            Multilingual education can help to keep vulnerable cultures and languages alive and make learning accessible.
          </p>
          <p>
            <span class="fw-bold">Dialect 方言(n.)</span><br>
            There are dialects in small countries too, where even the words to say “thank you” might be different.
          </p>
          <p>
            <span class="fw-bold">Multilingual 說多種語言的(adj.)</span><br>
            Multilingualism is advantageous for people wanting to participate in trade, globalization and cultural openness.
          </p>
          <p>
            <span class="fw-bold">Enlightening 有啟發性的(adj)</span><br>
            It was a very enlightening interview.
          </p>
        `,
      },
      {
        id: 'ep6',
        yearMonth: '2023/03',
        intro: `
          <h4 class="fw-bold mb-3">228 Peace Memorial Day</h4>
          <p>This episode is about 228 Peace Memorial Day, which commemorates the victims of the tragic 228 Incident in Taiwan. You’ll hear how artworks inspired by the incident can help people feel empathy. You’ll learn that empathy is vital to begin healing wounds from the past and preventing such events in the future.</p>
          <p class="mb-0">這集的主題是二二八和平紀念日。這個節日紀念台灣二二八事件的受害者。在這集當中，你可以聽到受這個事件啟發的藝術作品，如何喚起人們的同理心，而同理心是療癒過往傷痛，並且避免未來重蹈覆轍的重要元素。</p>
        `,
        content: `
          <h4 class="fw-bold mb-3">Vocabulary</h4>
          <p>
            <span class="fw-bold">Devastating 毀滅性的(adj.)</span><br>
            We are deeply saddened by this devastating tragedy.
          </p>
          <p>
            <span class="fw-bold">Privilege 特權(n.)</span><br>
            He enjoys diplomatic privileges.
          </p>
          <p>
            <span class="fw-bold">Militant 激進分子(n.)</span><br>
            The group has taken a militant position on the abortion issue and is refusing to compromise.
          </p>
          <p>
            <span class="fw-bold">Commemorate 紀念(v.)</span><br>
            The 228 Memorial Museum commemorates all of the victims of the 228 Incident.
          </p>
          <p>
            <span class="fw-bold">Empathy 同理心(n.)</span><br>
            When I put myself in your place, I feel empathy with you.
          </p>
          <p>
            <span class="fw-bold">Perspective 觀點(n.)</span><br>
            Max asked for Honda’s opinion because of Honda’s perspective as an art critic.
          </p>
          <p>
            <span class="fw-bold">Desperate 絕望的(adj.)</span><br>
            He was desperate when he lost all his money.
          </p>
        `,
      },
      {
        id: 'ep7',
        yearMonth: '2023/03',
        intro: `
          <h4 class="fw-bold mb-3">The World Baseball Classic</h4>
          <p>Baseball is popular around the world. This month, many countries are sending their national teams to the World Baseball Classic. The tournament takes place in three countries this year, and one of them is Taiwan! In this episode, you’ll learn why the World Baseball Classic was created and what it is searching for.</p>
          <p class="mb-0">棒球運動風靡全世界。這個月，許多國家都派出國家隊，參加世界棒球經典賽。經典賽會在三個國家舉行，其中一個就是台灣！在這集當中，你會知道世界棒球經典賽創立的緣由以及目的。</p>
        `,
        content: `
          <h4 class="fw-bold mb-3">Vocabulary</h4>
          <p>
            <span class="fw-bold">Newbie 新手、菜鳥(n.)</span><br>
            There are no newbies on this team, only players who have been playing for years.
          </p>
          <p>
            <span class="fw-bold">Valiantly 勇敢地(adv.)</span><br>
            He fought bravely and valiantly for the principles of liberty.
          </p>
          <p>
            <span class="fw-bold">Bravery 勇氣(n.)</span><br>
            After he played with an injury, he became famous for his bravery on the baseball field.
          </p>
          <p>
            <span class="fw-bold">Commentary 評論；實況報導(n.)</span><br>
            His spirited commentary makes a match very interesting even on the radio.
          </p>
          <p>
            <span class="fw-bold">Veteran 老手(n.)</span><br>
            The veteran pitcher has played for 20 seasons.
          </p>
          <p>
            <span class="fw-bold">Caliber 實力(n.)</span><br>
            The caliber of the players here is very high - everyone is excellent.
          </p>
          <p>
            <span class="fw-bold">Tournament 比賽；錦標賽(n.)</span><br>
            Our team won the championship in the basketball tournament.
          </p>
        `,
      },
      {
        id: 'ep8',
        yearMonth: '2023/03',
        intro: `
          <h4 class="fw-bold mb-3">Ramadan</h4>
          <p>Ramadan is a month-long yearly celebration of faith, marked by fasting during the day. In this episode, you’ll hear how a large team of chefs plans to feed an incredible number of hungry people every night during Ramadan. You’ll also learn some words in Arabic!</p>
          <p class="mb-0">齋戒月是一年一次，為期一個月的宗教節日，回教徒會在日落之前斷食。在這集當中，你會聽到齋戒月期間，一群大廚如何每天晚上餵飽餓肚子的廣大群眾，還會學到一些阿拉伯文單字！</p>
        `,
        content: `
          <h4 class="fw-bold mb-3">Vocabulary</h4>
          <p>
            <span class="fw-bold">Mosque 清真寺(n.)</span><br>
            <span class="fw-bold">Marble 大理石(n.)</span><br>
            <span class="fw-bold">Semi-precious stones 半寶石(n.)</span><br>
            <span class="fw-bold">Crystal 水晶(n.)</span><br>
            <span class="fw-bold">Ceramics 陶瓷(n.)</span><br>
            <span class="fw-bold">Iftar 開齋飯(n.)</span>
          </p>
          <p>
            <span class="fw-bold">Mammoth 巨大的；龐大的(adj.)</span><br>
            Building the new railroad will be a mammoth job.
          </p>
          <p>
            <span class="fw-bold">Illustrate 說明(v.)</span><br>
            To illustrate, I’ll give you a few examples of the meals we make.
          </p>
          <p>
            <span class="fw-bold">Ritual (宗教)儀式的(adj.) / 儀式(n.)</span><br>
            The priest will perform the ritual.
          </p>
          <p>
            <span class="fw-bold">Portion 食物的份量(n.)</span><br>
            The chefs serve large portions of food to their hungry guests.
          </p>
          <p>
            <span class="fw-bold">Protein 蛋白質(n.)</span><br>
            There are many sources of protein, such as chicken, fish, beans, eggs, yogurt, laban, and nuts. 
          </p>
        `,
      },
      {
        id: 'ep9',
        yearMonth: '2023/03',
        intro: `
          <h4 class="fw-bold mb-3">Women’s History Month</h4>
          <p>Women’s History Month recognizes and celebrates the achievements of women around the world. In this episode, you’ll learn about how this month started from the idea of a single day, right from its birthplace in Denmark. You’ll hear about some of the women’s rights activists who campaigned to keep this celebration alive through the decades.</p>
          <p class="mb-0">女性歷史月表揚和慶祝世界各地女性的成就。在這集當中，你會聽到女性歷史月如何在起源地丹麥，從一個節日發展到今天的歷程。你還會聽到一些女權運動人士，如何努力讓這個活動繼續下去。</p>
        `,
        content: `
          <h4 class="fw-bold mb-3">Vocabulary</h4>
          <p>
            <span class="fw-bold">Pampered 嬌生慣養的(adj.)</span><br>
            Although some people claim women lead pampered lives compared to men, women often have to struggle for equal access to rights, resources, and opportunities.
          </p>
          <p>
            <span class="fw-bold">Women’s rights activist 女權運動人士(n.)</span><br>
            Being a women’s rights activist, publicly campaigning for equality, requires courage and dedication.
          </p>
          <p>
            <span class="fw-bold">Posterity 後代(n.)</span><br>
            The report on the long-ago conference in Denmark saved Clara Zetkin’s suggestion of an International Women’s Day for posterity.
          </p>
          <p>
            <span class="fw-bold">Gender equality 性別平等(n.)</span><br>
            Overcoming the many societal barriers to gender equality has been a lifetime task for women.
          </p>
          <p>
            <span class="fw-bold">Campaigning 發起活動(v.)</span><br>
            Women and their supporters have been campaigning for equality on many fronts, ranging from personal relationships to international platforms.
          </p>
        `,
      },
      {
        id: 'ep10',
        yearMonth: '2023/03',
        intro: `
          <h4 class="fw-bold mb-3">Food and Fun Festival</h4>
          <p>In this episode, you’re in for a delectable treat as Max samples some fabulous food at the Food and Fun Festival in Iceland. You’ll learn who collaborates with Icelandic restaurants in the festival’s cooking competition. You’ll hear what kind of foodstuffs the festival promotes and descriptions of some top-notch dishes!</p>
          <p class="mb-0">在這集當中，你會跟著 Max 在冰島美食歡樂節大啖美食，還會知道哪些人跟冰島的餐廳合作參加慶典中的廚藝比賽。你也會聽到美食歡樂節會推廣哪些食物，還有許多一流菜餚的介紹！</p>
        `,
        content: `
          <h4 class="fw-bold mb-3">Vocabulary</h4>
          <p>
            <span class="fw-bold">Fabulous 很棒的(adj.)</span><br>
            The crab bisque was so fabulous, it was absolutely beyond delicious!
          </p>
          <p>
            <span class="fw-bold">Delectable 美味的(adj.)</span><br>
            What delectable food you cook!
          </p>
          <p>
            <span class="fw-bold">Hypnotic 催眠的(adj.)</span><br>
            His voice had a smooth hypnotic effect.
          </p>
          <p>
            <span class="fw-bold">Consistently 持續一貫地(adv.)</span><br>
            The fierce but friendly cooking competition consistently produces delectable four-course Icelandic meals.
          </p>
          <p>
            <span class="fw-bold">Top-notch 頂尖的、一流的(adj.)</span><br>
            The festival organizers find it humbling that so many top-notch chefs want to participate in the competition.
          </p>
          <p>
            <span class="fw-bold">Appetizer 開胃菜(n.)</span><br>
            There’s an outstanding selection of appetizers featuring local produce.
          </p>
          <p>
            <span class="fw-bold">Perfection 完美的狀態(n.)</span><br>
            The chef caramelized the garlic cloves to perfection in duck fat.
          </p>
          <p>
            <span class="fw-bold">Michelin star 米其林星星(n.)</span>
          </p>
          <p>
            <span class="fw-bold">Eatery 餐廳、餐館(n.)</span><br>
            Some eateries strive for a Michelin star, an award that’s famously difficult to obtain.
          </p>
        `,
      },
      {
        id: 'ep11',
        yearMonth: '2023/03',
        intro: `
          <h4 class="fw-bold mb-3">World Health Day</h4>
          <p>Join Max and his guest on a bicycle ride to celebrate World Health Day in this episode. You’ll learn how a major city designed new infrastructure to reduce roadway casualties and improve the health of its residents. You’ll hear about another important benefit that an initiative to create bike lanes has brought.</p>
          <p class="mb-0">在這集當中，快跟著 Max 還有今天的來賓來一趟自行車之旅，慶祝世界衛生日吧。你會知道哪個大城市如何用新的基礎設施設計，減少道路傷亡，並且改善居民的健康狀況。你還會聽到，設立自行車道的新計畫所帶來的重大好處。</p>
        `,
        content: `
          <h4 class="fw-bold mb-3">Vocabulary</h4>
          <p>
            <span class="fw-bold">Pedestrian 行人(n.)</span><br>
            A few pedestrians sheltered from the rain in doorways.
          </p>
          <p>
            <span class="fw-bold">Statistics 統計數據(n.)</span><br>
            Statistics confirmed that the new urban plan was successful in improving the overall health and financial prosperity of the city’s residents.
          </p>
          <p>
            <span class="fw-bold">Casualties 傷亡人員(n.)</span><br>
            The number of traffic casualties was so high that it boosted the mayor’s determination to adopt a citywide road safety plan.
          </p>
          <p>
            <span class="fw-bold">Infrastructure 基礎設施(n.)</span><br>
            When the city modernized its infrastructure to support sustainable transportation alternatives, it installed over 206 kilometers of bike lanes.
          </p>
          <p>
            <span class="fw-bold">Non-communicable diseases 非傳染性疾病(n.)</span><br>
            Non-communicable diseases, which include heart disease, cancer, and diabetes, are chronic, usually progress slowly, and are not contagious.
          </p>
          <p>
            <span class="fw-bold">Strokes 中風(n.)</span><br>
            <span class="fw-bold">Diabetes 糖尿病(n.)</span>
          </p>
          <p>
            <span class="fw-bold">Initiative 新計畫；倡議(n.)</span><br>
            The initiative to reduce vehicle accident fatalities and injuries provided several other major benefits.
          </p>
        `,
      },
      {
        id: 'ep12',
        yearMonth: '2023/03',
        intro: `
          <h4 class="fw-bold mb-3">ChatGPT</h4>
          <p>ChatGPT, the artificial intelligence (AI) chatbot with advanced research and response capabilities, is causing consternation in the academic world. Some universities have even banned its use. Join Max in Singapore, and find out why the government and universities there are looking at ChatGPT from a positive perspective and taking a different approach.</p>
          <p class="mb-0">人工智慧聊天機器人 ChatGPT 先進的研究和回應能力，讓學術界人士大為驚愕，有些大學甚至禁止使用。跟 Max 一起去新加坡看看，為什麼從政府到大學，都對 ChatGPT 抱著正面的態度，並且採取截然不同的因應方法。</p>
        `,
        content: `
          <h4 class="fw-bold mb-3">Vocabulary</h4>
          <p>
            <span class="fw-bold">Embrace 擁抱；欣然接受(v.)</span><br>
            Universities in Singapore have embraced the use of ChatGPT by students, considering it necessary and beneficial to adapt to advances in technology.
          </p>
          <p>
            <span class="fw-bold">Mimic 模仿(v.)</span><br>
            ChatGPT mimics human conversation so well that its responses can be difficult to distinguish from those of people.
          </p>
          <p>
            <span class="fw-bold">Scan 瀏覽(v.)</span><br>
            Acting on a user prompt, an AI chatbot will scan the Internet to gather relevant information for its response.
          </p>
          <p>
            <span class="fw-bold">Expel 開除(v.)</span><br>
            When students at some universities are caught using ChatGPT for an assignment, the penalties range from failing the course to being expelled.
          </p>
          <p>
            <span class="fw-bold">Format 格式(n.)</span><br>
            School reports are often required to follow a certain format regarding font size and type, margins, line spacing, and more.
          </p>
          <p>
            <span class="fw-bold">Guidelines 指導原則(n.)</span><br>
            Singapore has comprehensive plans to transform its society, economy, and government through technology, so its Ministry of Education issues official guidelines on how to effectively use AI for learning.
          </p>
          <p>
            <span class="fw-bold">Ministry 部(n.)</span><br>
            Singapore's Ministry of Education issues official guidelines on how to effectively use AI for learning.
          </p>
          <p>
            <span class="fw-bold">Perspective 觀點(n.)</span><br>
            Depending on one’s perspective, ChatGPT is a tool for opening new ways of learning and thinking or for enabling widespread cheating and plagiarism.
          </p>
          <p>
            <span class="fw-bold">Evolve 進化(v.)</span><br>
            Technology has evolved in ways we couldn’t have imagined twenty years ago.
          </p>
        `,
      },
      {
        id: 'ep13',
        yearMonth: '2023/03',
        intro: `
          <h4 class="fw-bold mb-3">World Art Day</h4>
          <p>World Art Day is a great opportunity to learn about the power of art to encourage people to view the world in different ways. Join Max in this episode as he learns about Picasso and the significant shift in art that this celebrity artist brought about with his abstract paintings.</p>
          <p class="mb-0">世界藝術日是個好機會讓我們認識藝術的力量，並鼓勵人們用不同的角度看世界。快來跟 Max 一起了解著名的畫家畢卡索，他的抽象畫是怎麼樣大幅改變了藝術界。</p>
        `,
        content: `
          <h4 class="fw-bold mb-3">Vocabulary</h4>
          <p>
            <span class="fw-bold">Cubism 立體主義(n.)</span><br>
            With oils and watercolours he painted natural and urban space, portraits, still-life, and scenes of daily living, combining selective elements of cubism and impressionism.
          </p>
          <p>
            <span class="fw-bold">Significant 重要的(adj.)</span><br>
            This year represents a significant anniversary for Picasso: it is now fifty years since he passed away.
          </p>
          <p>
            <span class="fw-bold">Morph 改變；變形(v.)</span><br>
            People’s concept of what good art was started to morph when Picasso, already famous, started to explore and develop a new style of painting called Cubism.
          </p>
          <p>
            <span class="fw-bold">Prehistoric 史前時代的(adj.)</span><br>
            Cave paintings that are half a million years old revealed that art existed even in prehistoric times.
          </p>
          <p>
            <span class="fw-bold">Massive 巨大的(adj.)</span><br>
            Picasso produced work in a massive range of forms, including painting, drawing, sculpture, ceramics, poetry, and plays.
          </p>
          <p>
            <span class="fw-bold">Universal 普遍的(adj.)</span><br>
            Picasso’s prodigious work in many styles and forms of art gave him universal appeal as well as the freedom to create what he wanted in the way he wanted, resulting in a radical new style.
          </p>
        `,
      },
      {
        id: 'ep14',
        yearMonth: '2023/03',
        intro: `
          <h4 class="fw-bold mb-3">Earth Day</h4>
          <p>Did you know that Earth Day was started in 1970 by a nature charity? In this episode, you’ll learn about the extensive conservation work of this vital charity and the importance of reforestation to safeguard the future of our planet. Join Max on a visit to a Canopy Project site in Madagascar!</p>
          <p class="mb-0">你知道世界地球日是一個環保團體在 1970 年設立的嗎？在這集當中，你會知道這個團體所做的多項保育工作，以及復育森林對於保護地球的未來有多重要。快點加入 Max，前往馬達加斯加的植被計畫區吧！</p>
        `,
        content: `
          <h4 class="fw-bold mb-3">Vocabulary</h4>
          <p>
            <span class="fw-bold">Ecosystem 生態系(n.), greenhouse 溫室(n.), safeguard 保護(v.)</span><br>
            The project’s greenhouse supplies the kind of trees that will eventually help to safeguard the local ecosystem.
          </p>
          <p>
            <span class="fw-bold">Unpaid 沒有酬勞的(adj.)</span><br>
            The charity relies on unpaid but enthusiastic interns and volunteers to carry out its conservation projects.
          </p>
          <p>
            <span class="fw-bold">Saplings 幼苗(n.)</span><br>
            The result was top-heavy saplings that tilted over to almost horizontal positions.
          </p>
          <p>
            <span class="fw-bold">Reforestation 森林復育(n.)</span><br>
            They have planted more than 21,000 trees in reforestation projects.
          </p>
          <p>
            <span class="fw-bold">Canopy 樹冠層(n.)</span><br>
            Tree canopies were closed throughout the study period with virtually no undergrowth.
          </p>
          <p>
            <span class="fw-bold">Regulate 調節(v.)</span><br>
            The Canopy Project plants saplings that will one day provide beautiful tree canopies to help regulate local temperatures.
          </p>
          <p>
            <span class="fw-bold">Erosion 侵蝕作用(n.)</span><br>
            In Madagascar, the erosion is so bad that floods and landslides happen every time there is a major tropical storm.
          </p>
        `,
      },
      {
        id: 'ep15',
        yearMonth: '2023/03',
        intro: `
          <h4 class="fw-bold mb-3">Water Festival</h4>
          <p>In this episode, join Max and Phra Anurak, a monk, for a water-soaked Songkran experience in Thailand. You’ll learn about this enthusiastically celebrated water festival that Thailand considers part of its intangible cultural heritage. You’ll find out what water symbolizes for Songkran and see that along with the revelry, there is reverence.</p>
          <p class="mb-0">在這集當中，你會跟著 Max 和和尚 Phra Anurak 一起體驗泰國的潑水節。你會認識這個被泰國視為國家無形文化資產的熱鬧節慶，也會了解水在潑水節的象徵意義，水不只用於歡慶，也可以表達尊敬。</p>
        `,
        content: `
          <h4 class="fw-bold mb-3">Vocabulary</h4>
          <p>
            <span class="fw-bold">Selfishness 自私(n.), discard 拋棄(v.), ego 自我中心(n.), monk 和尚(n.)</span><br>
            According to the monk, people can only overcome their selfishness when they discard their egos.
          </p>
          <p>
            <span class="fw-bold">Worshippers 信徒(n.), offerings 供品(n.)</span><br>
            During Songkran, it is traditional for worshippers to go to Buddhist temples to make offerings of items such as food and new robes for monks.
          </p>
          <p>
            <span class="fw-bold">Reverence 敬重(n.)</span><br>
            This biography approaches its subject with reverence and absolute loyalty.
          </p>
          <p>
            <span class="fw-bold">Symbolic 象徵的(adj.)</span><br>
            Throwing water at others during the Songkran Water Festival is symbolic of cleansing away the troubles of the year.
          </p>
          <p>
            <span class="fw-bold">Refreshing 清涼提神的(adj.), drenched 溼透的(adj.)</span><br>
            Thailand is so hot and humid in April that being drenched in water during the festival is refreshing.
          </p>
          <p>
            <span class="fw-bold">Intangible 無形的(adj.)</span><br>
            To safeguard Songkran in Thailand, the country has nominated this living cultural practice for inclusion on UNESCO’s intangible cultural heritage list.
          </p>
          <p>
            <span class="fw-bold">Pistol 手槍(n.), revelers 狂歡的人(n.)</span><br>
            Nora arranged for Max to be thoroughly drenched at the water festival, but she also provided him with a water pistol so he could soak some revelers himself.
          </p>
        `,
      },
      {
        id: 'ep16',
        yearMonth: '2023/03',
        intro: `
          <h4 class="fw-bold mb-3">International Day for Biological Diversity</h4>
          <p>Join Max and his ornithologist guest at the Fonghuanggu Bird and Ecology Park in Nantou County. You’ll learn about Taiwan’s incredible biological diversity, including some endemic species, and the importance of all aspects of nature. And you’ll hear about the features of the fun family-friendly festival at the park this weekend!</p>
          <p class="mb-0">大家來跟 Max 以及鳥類專家一起前往南投的鳳凰谷鳥園生態園區吧！在這集當中，你會認識台灣驚人的生物多樣性和特有種動植物，也會知道大自然的重要性。你還會聽到鳳凰谷這個周末要舉辦什麼樣的有趣親子活動！</p>
        `,
        content: `
          <h4 class="fw-bold mb-3">Vocabulary</h4>
          <p>
            <span class="fw-bold">Ecology 生態學(n.)</span><br>
            The study of ecology, the relationships and interactions between organisms and their environment, is more urgent than ever because of the ecological impacts of climate change.
          </p>
          <p>
            <span class="fw-bold">Ornithologist 鳥類學家(n.)</span><br>
            The ornithologist jokes that she's basically a professional bird-watcher, but she actually collects data on threatened species for field research, with the aim of influencing conservation policies.
          </p>
          <p>
            <span class="fw-bold">Endemic 地方特有的(adj.)</span><br>
            Taiwan has over 250 endemic animal species, including the emerald tree frog and the Taiwan barbet.
          </p>
          <p>
            <span class="fw-bold">Biologically 生物學上地(adv.), flora 植物群(n.), fauna 動物群(n.)</span><br>
            The extensive variety of flora and fauna in the park make it biologically diverse, one of the essential factors for a healthy ecosystem.
          </p>
          <p>
            <span class="fw-bold">Shame 可惜的事情(n.)</span><br>
            It’s a shame that many people in Taiwan don't realize that this country is so rich in biological diversity.
          </p>
        `,
      },
      {
        id: 'ep17',
        yearMonth: '2023/03',
        intro: `
          <h4 class="fw-bold mb-3">Coronation of Charles III</h4>
          <p>Does any country have royal events as full of pomp and pageantry as those of the United Kingdom? Join Max and a member of the Household Cavalry on a horseback ride along King Charles III’s coronation route. You’ll learn about some of the traditions of the event, including the crowning moment!</p>
          <p class="mb-0">應該沒有國家能舉辦比英國更盛況空前、排場更大的皇室活動了。快跟著 Max 和皇家近衛騎兵一起躍上馬背，進行一場新王查爾斯三世加冕典禮的遊行路線巡禮。在這集當中，你會認識到整個加冕典禮的傳統，當然也包含新王加冕這個重要時刻！</p>
        `,
        content: `
          <h4 class="fw-bold mb-3">Vocabulary</h4>
          <p>
            <span class="fw-bold">Carriage 馬車(n.), Coronation 加冕典禮(n.), Crowned 受加冕的(a.), Monarch 君主(n.)</span><br>
            After the coronation, the newly crowned monarchs departed in a famously uncomfortable and heavy golden carriage that required eight horses to pull it.
          </p>
          <p>
            <span class="fw-bold">Residence 住所(n.)</span><br>
            Buckingham Palace, traditionally the London residence of the British royal family, may not be where King Charles will live.
          </p>
          <p>
            <span class="fw-bold">Hectic 忙碌的(a.)</span><br>
            Rehearsing late at night to prepare for the coronation processions was hectic for the 4,000 armed forces members who were taking part in them.
          </p>
          <p>
            <span class="fw-bold">Officially 正式地(adv.), Investiture 授權儀式(n.)</span><br>
            Although Charles immediately became king when his mother passed away, the investiture officially made him king.
          </p>
          <p>
            <span class="fw-bold">Rank 職銜(n.), Corporal 下士(n.), Pageantry 盛況(n.), Pomp 排場(n.)</span><br>
            Roger’s investiture to the rank of Lance Corporal in the Household Cavalry had none of the pomp and pageantry of King Charles’s.
          </p>
        `,
      },
      {
        id: 'ep18',
        yearMonth: '2023/03',
        intro: `
          <h4 class="fw-bold mb-3">G7 Summit</h4>
          <p>Just what is the G7, and why is Hiroshima, Japan hosting their annual summit? To find out, join Max and a local journalist at the Hiroshima Peace Memorial. You’ll also hear about some of the important issues under discussion and learn what has kept the G7 together for half a century.</p>
          <p class="mb-0">G7 究竟是甚麼，日本廣島今年又為何要舉辦 G7 年度峰會呢？快跟著 Max 跟當地記者一起來到廣島和平紀念公園一探究竟。在這集之中，你會聽到 G7 峰會討論的現下重要議題，也會知道是甚麼讓 G7 組織屹立不搖長達半個世紀之久。</p>
        `,
        content: `
          <h4 class="fw-bold mb-3">Vocabulary</h4>
          <p>
            <span class="fw-bold">Buzz 忙碌(v.), Summit 高峰會(n.)</span><br>
            With the G7 Summit drawing visitors from around the world, the city is buzzing in anticipation of the boost to its economy.
          </p>
          <p>
            <span class="fw-bold">Fundamental 根本的(a.), Liberal 自由的(a.)</span><br>
            The G7 member states, all liberal democracies and advanced economies, share fundamental beliefs and values about freedom and human rights.
          </p>
          <p>
            <span class="fw-bold">Memorial 紀念碑；紀念館(n.), Humanity 全體人類(n.), Reminder 提醒(n.), Disarmament 放棄武力(n.), Skeletal 像骷髏一般的(a.)</span><br>
            The Hiroshima Peace Memorial with its skeletal dome is a haunting reminder that humanity should strive for peace and nuclear disarmament to prevent the horrors of war.
          </p>
          <p>
            <span class="fw-bold">Significance 重要性(n.), Decimate 毀滅(v.)</span><br>
            Hiroshima was chosen as the host city for the summit because of its historical significance as a place that was decimated by an atomic bomb.
          </p>
          <p>
            <span class="fw-bold">Allies 同盟國(n.)</span><br>
            The G7 member states were political and economic allies even before they joined forces to address an international crisis.
          </p>
        `,
      },
      {
        id: 'ep19',
        yearMonth: '2023/03',
        intro: `
          <h4 class="fw-bold mb-3">Eurovision Song Contest</h4>
          <p>Have you heard of the Eurovision Song Contest, the most exciting music event in Europe? Some contestants go on to achieve worldwide fame! Join Max and his guest Chrissie to learn how the contest works and what the Eurovision Village is. You can even sing along with them!</p>
          <p class="mb-0">你有聽過全歐洲最刺激的音樂比賽——歐洲歌唱大賽嗎？許多參賽者都會來到這個舞台追求在全世界爆紅的機會。快點跟上 Max 跟來賓 Chrissie 的腳步，了解歐洲歌唱大賽的規則，以及甚麼是歐洲歌唱大賽村。你甚至可以跟著一起唱歌！</p>
        `,
        content: `
          <h4 class="fw-bold mb-3">Vocabulary</h4>
          <p>
            <span class="fw-bold">Voters 投票人(n.)</span><br>
            According to the contest rules, voters can vote for any contestant except the one representing their country.
          </p>
          <p>
            <span class="fw-bold">Vibe 氣氛(n.)</span><br>
            With its eight days of free special shows, live performances, and DJ sets, the Eurovision Village, which is open to the public, has the electric vibe of a music festival.
          </p>
          <p>
            <span class="fw-bold">Epic 規模極大的(adj.)</span><br>
            Eurovision, with its 37 talented contestants, was an epic feast of songs.
          </p>
          <p>
            <span class="fw-bold">Banners 橫幅布條(n.)</span><br>
            Everywhere Max looked, he saw Loreen’s name and image emblazoned on banners and posters.
          </p>
        `,
      },
      {
        id: 'ep20',
        yearMonth: '2023/03',
        intro: `
          <h4 class="fw-bold mb-3">World Refugee Day</h4>
          <p>Join Max as he talks with a volunteer librarian at the “We Need Books” multilingual library in Athens, Greece. What inspired this welcoming space for people from all backgrounds? What happens here to empower people to rebuild their lives and how are these people just like us? Listen and find out!</p>
          <p class="mb-0">跟著 Max 與希臘雅典的多語言圖書館「我們需要書」的志工圖書館員聊聊吧！是甚麼契機啟發了這個讓不同背景的人們得以聚集的空間？這裡又為甚麼能夠給人重建生活的力量，這些人又與我們有甚麼驚人的相似之處？在這集裡你會找到所有答案！</p>
        `,
        content: `
          <h4 class="fw-bold mb-3">Vocabulary</h4>
          <p>
            <span class="fw-bold">Aspiration 志向(n.), Flee 逃離(v.)</span><br>
            Before Anna had to flee her war-torn country, her long-held aspiration was to become a human rights lawyer.
          </p>
          <p>
            <span class="fw-bold">Founder 創辦人(n.)</span><br>
            The founders of the library wanted to provide a community hub where refugees and local residents could get to know each other.
          </p>
          <p>
            <span class="fw-bold">Displaced 流離失所的(adj.)</span><br>
            At the library, people who have been displaced are empowered with the tools they need to establish their lives in a new country.
          </p>
          <p>
            <span class="fw-bold">Champion 聲援(v.)</span><br>
            It’s important for refugees, who have undergone many struggles already, to have people in their new country championing them to succeed.
          </p>
          <p>
            <span class="fw-bold">Globe 全球(n.), Persecution 迫害(n.)</span><br>
            Persecution on the basis of race, nationality, social group, religion, or political opinion, has forced many people around the globe to leave their homes.
          </p>
        `,
      },
      {
        id: 'ep21',
        yearMonth: '2023/03',
        intro: `
          <h4 class="fw-bold mb-3">EV-Charging on the Road</h4>
          <p>What’s special about the stretch of European Route E20 in Sweden that Max, Axel, and Astrid are cruising on? What are the options being considered for this road and the benefits it will provide? Find out why this is really where the rubber meets the road in making electric vehicles (EVs) more affordable.</p>
          <p class="mb-0">在瑞典的歐洲 E20 號公路上，Max、Axel 和 Astrid 正在行駛的路段有什麼特別之處？對於這條道路，有什麼正在被考慮的選項以及它所提供的好處呢？了解為什麼使電動車（EVs）更加經濟實惠時的關鍵所在。</p>
        `,
        content: `
          <h4 class="fw-bold mb-3">Vocabulary</h4>
          <p>
            <span class="fw-bold">Diesel 柴油(n.)</span><br>
            Although there have been strict standards for diesel fuel and new diesel vehicles for the past 15 years in the U.S., diesel continues to add to air pollution there due to the use of older, less efficient diesel vehicles.
          </p>
          <p>
            <span class="fw-bold">Innovation 創新(n.), fossil 化石(n.)</span><br>
            Innovations in fossil-free energy technologies will help Sweden to achieve its goal of complete independence from fossil fuels by 2045.
          </p>
          <p>
            <span class="fw-bold">Recharge 充電(v.), affordable 付得起的(adj.)</span><br>
            The ability to recharge EVs on widely available electric roads means that less expensive batteries with less capacity can be used in EVs, making them more affordable.
          </p>
          <p>
            <span class="fw-bold">Designer 設計者(n.)</span><br>
            Although the completion date of the world’s first permanent electric road is in three short years, the designers haven’t decided on the best power delivery option yet.
          </p>
          <p>
            <span class="fw-bold">Overhead 空中的(adj.)</span><br>
            Of the three options to charge EVs on roadways, overhead cable systems have the most advanced technology, but their use is limited to commercial EVs.
          </p>
        `,
      },
      {
        id: 'ep22',
        yearMonth: '2023/03',
        intro: `
          <h4 class="fw-bold mb-3">Waste and Recycling Workers Week</h4>
          <p>The plastic you throw away may end up being salvaged by a waste picker, an invisible yet essential worker. Join Max and Fatima at the former site of an infamous dump in Kenya. What do waste pickers endure at work and in society? What rights are they fighting for? Find out with Max!</p>
          <p class="mb-0">你扔掉的塑料可能最終會被一位垃圾工人所回收，而這些人是看不見卻至關重要的工作者。加入 Max 和 Fatima，到肯亞一個聲名狼藉的垃圾堆區的舊址。而這些垃圾工人們在工作和社會中承受了什麼困境？他們正在爭取哪些權益？讓 Max 帶你一起去了解！</p>
        `,
        content: `
          <h4 class="fw-bold mb-3">Vocabulary</h4>
          <p>
            <span class="fw-bold">Hazardous 危險的(adj.), fumes（難聞的）煙霧或氣體(n.)</span><br>
            The unregulated dump where Fatima worked produced hazardous water that leached into the soil and gas fumes that sickened the waste pickers.
          </p>
          <p>
            <span class="fw-bold">Scrap 廢料(n.)</span><br>
            Scrap metal has become scarce at dumps, so waste pickers now concentrate on collecting plastic for recycling.
          </p>
          <p>
            <span class="fw-bold">Dump 垃圾場(n.)</span><br>
            Rotting food is rife in trash, so dumps and landfills are magnets for disease-carrying pests such as rats, cockroaches, and pigeons.
          </p>
          <p>
            <span class="fw-bold">Incinerator 焚化爐(n.)</span><br>
            Plastic that is burned in waste incinerators releases carbon dioxide, a greenhouse gas.
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
