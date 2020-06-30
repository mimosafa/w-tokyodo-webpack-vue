<template>
  <header id="header">
    <div class="header_inner">
      <h1 class="header_site_ttl"><w-tokyodo-a href="/">Workstore Tokyo Do | ワークストア・トウキョウドゥ</w-tokyodo-a></h1>
      <nav class="header_gnav">
        <div class="header_gnav_inner">
          <ul class="header_gnav_brand">
            <li class="header_gnav_brand_direct"><w-tokyodo-a href="/direct/">DIRECT MANAGEMENT</w-tokyodo-a></li>
            <li class="header_gnav_brand_neostall"><w-tokyodo-a href="/neostall/">ネオ屋台村</w-tokyodo-a></li>
            <li class="header_gnav_brand_neoponte"><w-tokyodo-a href="/neoponte/">ネオポンテ</w-tokyodo-a></li>
            <li class="header_gnav_brand_sharyobu"><w-tokyodo-a href="/sharyobu/">車両部</w-tokyodo-a></li>
          </ul>
          <ul class="header_gnav_menu">
            <li><w-tokyodo-a href="/company/"><span>会社概要</span></w-tokyodo-a></li>
            <li><w-tokyodo-a href="/terms/"><span>ご利用にあたって</span></w-tokyodo-a></li>
            <li><w-tokyodo-a href="/contact/"><span>お問い合わせ</span></w-tokyodo-a></li>
          </ul>
          <ul class="header_gnav_other">
            <li class="header_gnav_other_facebook"><a href="#" target="_blank">Facebook</a></li>
            <li class="header_gnav_other_twitter"><a href="#" target="_blank">Twitter</a></li>
            <li class="header_gnav_other_contact"><w-tokyodo-a href="/contact/">お問い合わせ</w-tokyodo-a></li>
          </ul>
          <div class="header_gnav_btn">
            <a @click="handleCollapse">
              <span class="header_gnav_btn_ttl">Menu</span>
              <hamburger-toggle ref="toggle" />
            </a>
          </div>
        </div>
      </nav>
    </div>
  </header>
</template>

<style src="./header.scss" lang="scss" scoped></style>
<script src="./header.js"></script>
