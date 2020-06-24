<template>
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
            <a @click="toggleCollapse">
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
</template>

<style src="./header.scss" lang="scss" scoped></style>
<script src="./header.js"></script>
