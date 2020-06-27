import media from '../../../js/media';

const cls = 'active';
const speed = 350;

let toggle, brands, menus, others;

const initCollapse = () => {
  if (!toggle || !brands || !menus || !others) {
    const header = document.getElementById('header');
    toggle = header.querySelector('.header_gnav_btn a');
    brands = header.querySelector('.header_gnav_brand');
    menus  = header.querySelector('.header_gnav_menu');
    others = header.querySelector('.header_gnav_other');
  }

  media.init();

  toggle.classList.remove(cls);
  brands.style.display = 'none';
  menus.style.display = 'none';

  if (media.isPhone()) {
    others.style.display = 'none';
  }
  else if (media.isDesktop()) {
    others.style.display = '';
  }
};

export default {
  mounted() {
    this.initialize();

    let resizeTimer = 0;
    window.addEventListener('resize', () => {
      if (resizeTimer) {
        clearTimeout(resizeTimer);
      }
      resizeTimer = setTimeout(this.initialize, 200);
    });
  },
  methods: {
    initialize() {
      initCollapse();
      this.$emit('init-header');
    },
    toggleCollapse() {
      toggle.classList.toggle(cls);
      $(brands).slideToggle(speed);
      $(menus).slideToggle(speed);

      if (media.isPhone()) {
        $(others).slideToggle(speed);
      }

      this.$emit('toggle-header-collapse', speed);
    }
  }
}
