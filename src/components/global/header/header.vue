<template>
  <header class="global-header" id="header">
    <div class="global-header-inner">

      <h1 class="site-ttl">
        <w-tokyodo-a class="anchor" href="/">Workstore Tokyo Do | ワークストア・トウキョウドゥ</w-tokyodo-a>
      </h1>

      <nav class="header-navigation">
        <div class="header-navigation-inner">

          <ul class="site-brands">
            <li class="site-brands-item">
              <w-tokyodo-a class="anchor direct" href="/direct/">DIRECT MANAGEMENT</w-tokyodo-a>
            </li>
            <li class="site-brands-item">
              <w-tokyodo-a class="anchor neostall" href="/neostall/">ネオ屋台村</w-tokyodo-a>
            </li>
            <li class="site-brands-item">
              <w-tokyodo-a class="anchor neoponte" href="/neoponte/">ネオポンテ</w-tokyodo-a>
            </li>
            <li class="site-brands-item">
              <w-tokyodo-a class="anchor sharyobu" href="/sharyobu/">車両部</w-tokyodo-a>
            </li>
          </ul>

          <ul class="global-menu">
            <li class="global-menu-item">
              <w-tokyodo-a class="anchor" href="/company/"><link-arrow>会社概要</link-arrow></w-tokyodo-a>
            </li>
            <li class="global-menu-item">
              <w-tokyodo-a class="anchor" href="/terms/"><link-arrow>ご利用にあたって</link-arrow></w-tokyodo-a>
            </li>
            <li class="global-menu-item">
              <w-tokyodo-a class="anchor" href="/contact/"><link-arrow>お問い合わせ</link-arrow></w-tokyodo-a>
            </li>
          </ul>

          <ul class="other-links">
            <li class="other-links-item">
              <a class="anchor facebook" href="#" target="_blank">Facebook</a>
            </li>
            <li class="other-links-item">
              <a class="anchor twitter" href="#" target="_blank">Twitter</a>
            </li>
            <li class="other-links-item">
              <w-tokyodo-a class="anchor contact" href="/contact/">お問い合わせ</w-tokyodo-a>
            </li>
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
