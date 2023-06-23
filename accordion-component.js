export default {
  name: 'AccordionComponent',

  props: ['content'],

  template: `
    <div class="accordion-container">
      <button class="accordion-btn d-flex" type="button">
        <div class="accordion-btn-text flex-grow-1">MORE INFO</div>
        <div class="accordion-btn-icon position-relative d-flex justify-content-center">
          <i class="fa fa-chevron-right" aria-hidden="true"></i>
        </div>
      </button>
      <div class="accordion-content">
        <div class="font-color m-3" v-html="content"></div>
        <div class="close-div d-flex justify-content-center pt-2 pb-3">
          <i class="close fa fa-chevron-up" aria-hidden="true"></i>
        </div>
      </div>
    </div>
  `,
};
