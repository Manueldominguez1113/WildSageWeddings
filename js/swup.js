const swup = new Swup();

function init() {
    if (document.querySelector('#honeybook-widget')) {
      contact();
    }
    if (document.querySelector('#portfolio-section')) {
        portfolio();
    }
    if (document.querySelector('#journal')) {
        journal();
    }
    if (document.querySelector('#error')) {
        error404();
    }
  }

  document.addEventListener('DOMContentLoaded', () => {
    init();
  });

swup.hooks.on('page:view', () => {
   init();
  });