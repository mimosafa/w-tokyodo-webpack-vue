<template>
  <div>
    <header id="header">
      <div class="header_inner">
        <h1 class="header_site_ttl"><a href="/">Workstore Tokyo Do | ワークストア・トウキョウドゥ</a></h1>
        <nav class="header_gnav">
          <div class="header_gnav_inner">
            <ul class="header_gnav_brand">
              <li class="header_gnav_brand_direct"><a href="/direct/">DIRECT MANAGEMENT</a></li>
              <li class="header_gnav_brand_neostall"><a href="/neostall/">ネオ屋台村</a></li>
              <li class="header_gnav_brand_neoponte"><a href="/neoponte/">ネオポンテ</a></li>
              <li class="header_gnav_brand_sharyobu"><a href="/sharyobu/">車両部</a></li>
            </ul>
            <ul class="header_gnav_menu">
              <li><a href="/company/"><span>会社概要</span></a></li>
              <li><a href="/terms/"><span>ご利用にあたって</span></a></li>
              <li><a href="/contact/"><span>お問い合わせ</span></a></li>
            </ul>
            <ul class="header_gnav_other">
              <li class="header_gnav_other_facebook"><a href="#" target="_blank">Facebook</a></li>
              <li class="header_gnav_other_twitter"><a href="#" target="_blank">Twitter</a></li>
              <li class="header_gnav_other_contact"><a href="/contact/">お問い合わせ</a></li>
            </ul>
            <div class="header_gnav_btn">
              <a href="">
                <span class="header_gnav_btn_ttl">Menu</span>
                <span id="header_gnav_btn_bar01" class="header_gnav_btn_bar"></span>
                <span id="header_gnav_btn_bar02" class="header_gnav_btn_bar"></span>
                <span id="header_gnav_btn_bar03" class="header_gnav_btn_bar"></span>
              </a>
            </div>
          </div>
        </nav>
      </div>
    </header>

    <div class="header_overlay"></div>

    <div id="loader"></div>

    <slot></slot>

    <footer id="footer">
      <div class="footer_pagetop">
        <a href="">PAGE TOP</a>
      </div>

      <div class="footer_inner">
        <ol class="footer_breadcrumbs">
          <li><a href="/">トップページ</a></li>
          <li>ご利用にあたって</li>
        </ol>

        <nav class="footer_sitemap clearfix">
          <dl class="footer_sitemap_tokyodo">
            <dt>
              <a href="/">Workstore Tokyo Do | ワークストア・トウキョウドゥ</a>
            </dt>
            <dd>
              <p>〒146-0094 東京都大田区東矢口三丁目30番14号</p>
              <ul class="footer_sitemap_tokyodo_links">
                <li class="footer_sitemap_tokyodo_links_tel"><a href="tel:03-3737-3000">03-3737-3000</a></li>
                <li class="footer_sitemap_tokyodo_links_mail"><a href="/contact">お問い合わせ</a></li>
              </ul>
            </dd>
          </dl>
          <ul class="footer_sitemap_brand">
            <li class="footer_sitemap_brand_direct"><a href="/direct/">DIRECT MANAGEMENT</a></li>
            <li class="footer_sitemap_brand_neostall"><a href="/neostall/">ネオ屋台村</a></li>
            <li class="footer_sitemap_brand_neoponte"><a href="/neoponte/">ネオポンテ</a></li>
            <li class="footer_sitemap_brand_sharyobu"><a href="/sharyobu/">車両部</a></li>
          </ul>
        </nav>
      </div>

      <div class="footer_credit">
        <p>Copyright &copy; 2010-2020 WorkStore Tokyo Do.<br>All Rights Reserved.</p>
      </div>
    </footer>
  </div>
</template>
