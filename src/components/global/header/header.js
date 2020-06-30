import WTokyodoA from '../w-tokyodo-anchor.vue';
import HamburgerToggle from '../../ui/nav/hamburger-toggle.vue';
import media from '@js/media';
import onResize from '@js/onresize';

const speed = 350;

export default {
  components: {
    WTokyodoA,
    HamburgerToggle
  },
  data() {
    return {
      isActive: false,
      pageYOffset: 0
    }
  },
  mounted() {
    this.brands = this.$el.querySelector('.header_gnav_brand');
    this.menus  = this.$el.querySelector('.header_gnav_menu');
    this.others = this.$el.querySelector('.header_gnav_other');

    this.init();
    onResize(this.init);

    window.addEventListener('scroll', this.handleScroll);
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

      this.isActive = false;

      this.$emit('init-header');
    },
    handleCollapse() {
      window.removeEventListener('scroll', this.handleScroll);

      // HamburgerToggle
      this.$refs.toggle.toggle();

      $(this.brands).slideToggle(speed);
      $(this.menus).slideToggle(speed);

      if (media.isPhone()) {
        $(this.others).slideToggle(speed);
      }

      this.isActive = !this.isActive;

      if (!this.isActive) {
        window.addEventListener('scroll', this.handleScroll);
      }

      this.$emit('toggle-header-collapse', speed);
    },
    handleScroll() {
      const oldPageYOffset = this.pageYOffset;
      this.pageYOffset = window.pageYOffset;

      if ((oldPageYOffset < this.pageYOffset) && (this.pageYOffset > 90)) {
        // Scroll down
        this.$el.classList.add('hidden');
      }
      else {
        // Scroll up
        this.$el.classList.remove('hidden');
      }
    }
  }
}
