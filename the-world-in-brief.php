<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
  <head>
    <?php
    $message['icrt_title'] = 'The World in Brief | English Express | ICRT';
    ?>
    <link
      rel="stylesheet"
      href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/3.7.2/animate.min.css"
    />
    <link
      rel="stylesheet"
      href="https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css"
    />
    <link rel="stylesheet" href="css/main.css" />
  </head>
  <body>
    <!-- 右上方圖示 -->
    <div class="page_ContBox text-end mb-1">
      <img src="images/icrt_ndc-logo.png" alt="icrt ndc logo" class="icon-top img-fluid">
    </div>

    <!-- main logo -->
    <div class="page_ContBox mx-auto pt-0">
      <img
        src="images/the-world-in-brief/brief_logo.png"
        class="img-fluid"
        alt="the-world-in-brief main logo"
      />
    </div>

    <div class="page_ContBox brief-main pt-0">
      <!-- home icon -->
      <div class="text-end my-3 me-2 me-md-5">
        <a href="https://www.icrt.com.tw/app/english-express/"><img src="images/home.png" alt="回首頁 icon" class="home-icon img-fluid"></a>
      </div>

      <!-- 主要內容 -->
      <div class="main font-color accordion-list pt-2" id="brief-vue" v-cloak>
        <p class="lh-lg">
          Briefing the world 就用 The world in brief，幫你用最短的時間掌握天下事，成為全球通！建議第一遍直接聆聽，第二遍搭配單字解釋一同聆聽，可以幫助你注意生字語調與連音並加深記憶。
        </p>

        <div class="d-flex justify-content-center pt-3 pt-md-4">
          <select-component
            v-model="page"
            :get-page-number="getPageNumber"
            :items-per-page="ITEMS_PER_PAGE"
          ></select-component>
        </div>

        <div class="mic-date d-flex gap-3 align-items-center mt-5 mx-auto">
          <div>
            <img src="images/the-world-in-brief/mic_icon.png" alt="麥克風 icon">
          </div>
          <div class="fs-3 fw-bold">{{ epString }}</div>
        </div>
        
        <!-- ep -->
        <div class="ep-content pt-4" v-for="item in showData" :key="item.id">
          <div class="ep-intro-text px-4 py-3 mx-auto" v-html="item.intro"></div>
          
          <div class="audio-area mt-3 mt-md-4 mx-auto">
            <div class="d-flex flex-nowrap justify-content-evenly">
              <div class="d-flex flex-column align-items-center">
                <i
                  class="fa fa-volume-up mb-1"
                  :class="{ invisible: activeAudio !== `${item.id}-3m` }"
                  aria-hidden="true">
                </i>
                <img
                  src="images/the-world-in-brief/3min.png"
                  alt="3分鐘 icon"
                  class="wow fadeIn"
                  @click="playAudio(`${item.id}-3m`, item.id)"
                />
              </div>
              <div class="d-flex flex-column align-items-center">
                <i
                  class="fa fa-volume-up mb-1"
                  :class="{ invisible: activeAudio !== `${item.id}-1m` }"
                  aria-hidden="true">
                </i>
                <img
                  src="images/the-world-in-brief/1min.png"
                  alt="1分鐘 icon"
                  class="wow fadeIn"
                  @click="playAudio(`${item.id}-1m`, item.id)"
                />
              </div>
            </div>
            <div class="audio-div mt-3" :id="item.id"></div>
          </div>

          <accordion-component :content="item.content" class="mx-auto">
          </accordion-component>
        </div>
      </div>
    </div>

    <!-- footer -->
    <div class="my-footer d-flex justify-content-center align-items-center">
      <img src="images/icrt_ndc-logo.png" alt="icrt ndc logo" class="img-fluid">
    </div>

    <script src="https://wowjs.uk/dist/wow.min.js"></script>
    <script src="js/brief-vue.js?v=20230620" type="module"></script>
    <script src="js/accordion.js"></script>
  </body>
</html>
