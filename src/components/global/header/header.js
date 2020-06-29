import media from '../../../js/media';
import WTokyodoA from '../w-tokyodo-anchor.vue';
import HamburgerToggle from '../../ui/nav/hamburger-toggle.vue';

const speed = 350;

export default {
  components: {
    WTokyodoA,
    HamburgerToggle
  },
  data() {
    return {
      brands: null,
      menus: null,
      others: null
    }
  },
  mounted() {
    this.brands = this.$el.querySelector('.header_gnav_brand');
    this.menus  = this.$el.querySelector('.header_gnav_menu');
    this.others = this.$el.querySelector('.header_gnav_other');

    this.init();

    let resizeTimer = 0;
    window.addEventListener('resize', () => {
      if (resizeTimer) {
        clearTimeout(resizeTimer);
      }
      resizeTimer = setTimeout(this.init, 200);
    });
  },
  methods: {
    init() {
      media.init();
      this.$refs.toggle.init();
      this.brands.style.display = 'none';
      this.menus.style.display = 'none';

      if (media.isPhone()) {
        this.others.style.display = 'none';
      }
      else if (media.isDesktop()) {
        this.others.style.display = '';
      }
      this.$emit('init-header');
    },
    toggleCollapse() {
      this.$refs.toggle.toggle();
      $(this.brands).slideToggle(speed);
      $(this.menus).slideToggle(speed);

      if (media.isPhone()) {
        $(this.others).slideToggle(speed);
      }

      this.$emit('toggle-header-collapse', speed);
    }
  }
}
