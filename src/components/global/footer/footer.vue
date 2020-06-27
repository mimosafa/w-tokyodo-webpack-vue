<template>
  <footer id="footer">

    <div class="footer_inner">
      <ol class="footer_breadcrumbs">
        <li><w-tokyodo-a href="/">トップページ</w-tokyodo-a></li>
        <li>ご利用にあたって</li>
      </ol>

      <nav class="footer_sitemap clearfix">
        <dl class="footer_sitemap_tokyodo">
          <dt>
            <w-tokyodo-a href="/">Workstore Tokyo Do | ワークストア・トウキョウドゥ</w-tokyodo-a>
          </dt>
          <dd>
            <p>〒146-0094 東京都大田区東矢口三丁目30番14号</p>
            <ul class="footer_sitemap_tokyodo_links">
              <li class="footer_sitemap_tokyodo_links_tel"><w-tokyodo-a href="tel:03-3737-3000">03-3737-3000</w-tokyodo-a></li>
              <li class="footer_sitemap_tokyodo_links_mail"><w-tokyodo-a href="/contact">お問い合わせ</w-tokyodo-a></li>
            </ul>
          </dd>
        </dl>
        <ul class="footer_sitemap_brand">
          <li class="footer_sitemap_brand_direct"><w-tokyodo-a href="/direct/">DIRECT MANAGEMENT</w-tokyodo-a></li>
          <li class="footer_sitemap_brand_neostall"><w-tokyodo-a href="/neostall/">ネオ屋台村</w-tokyodo-a></li>
          <li class="footer_sitemap_brand_neoponte"><w-tokyodo-a href="/neoponte/">ネオポンテ</w-tokyodo-a></li>
          <li class="footer_sitemap_brand_sharyobu"><w-tokyodo-a href="/sharyobu/">車両部</w-tokyodo-a></li>
        </ul>
      </nav>
    </div>

    <div class="footer_credit">
      <p>Copyright &copy; 2010-{{ current }} WorkStore Tokyo Do.<br>All Rights Reserved.</p>
    </div>
  </footer>
</template>

<script>
import WTokyodoA from '../w-tokyodo-anchor.vue';

export default {
  components: {
    WTokyodoA
  },
  computed: {
    current() {
      return (new Date()).getFullYear();
    }
  }
};
</script>

<style src="./footer.scss" lang="scss" scoped></style>
