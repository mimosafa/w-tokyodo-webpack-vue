<template>
  <header>
    <h1>Webpack 4 &amp; Vue 2.x Web Site Template</h1>
    <nav>
      <ul>
        <li>
          <router-link to="/">Home</router-link>
        </li>
        <li>
          <router-link to="/about">About</router-link>
        </li>
        <li>
          <router-link to="/products">Products</router-link>
          <ul>
            <li>
              <router-link to="/products/illustrations">Illustrations</router-link>
            </li>
          </ul>
        </li>
        <li>
          <router-link to="contact">Contact</router-link>
        </li>
      </ul>
    </nav>
  </header>
</template>
