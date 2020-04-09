<template>
  <div class="layout container">
    <header class="header">
      <nav
        class="navbar navbar-expand-lg navbar-dark ftco_navbar ftco-navbar-light site-navbar-target"
        id="ftco-navbar"
      >
        <div class="container">
          <g-link class="navbar-brand" to="/">{{
            $static.metadata.siteName
          }}</g-link>
          <button
            class="navbar-toggler js-fh5co-nav-toggle fh5co-nav-toggle"
            type="button"
            data-toggle="collapse"
            data-target="#ftco-nav"
            aria-controls="ftco-nav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="oi oi-menu"></span>
          </button>
          <div class="collapse navbar-collapse" id="ftco-nav">
            <ul class="navbar-nav nav ml-auto">
              <li class="nav-item">
                <g-link class="nav-link" to="/">About</g-link>
              </li>
              <li class="nav-item">
                <g-link class="nav-link" to="/about">Work</g-link>
              </li>
              <li class="nav-item">
                <g-link class="nav-link" to="/">Engagement</g-link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
    <slot />
  </div>
</template>

<static-query>
query {
  metadata {
    siteName
  }
}
</static-query>

<style>
/* body {
  font-family: -apple-system, system-ui, BlinkMacSystemFont, "Segoe UI", Roboto,
    "Helvetica Neue", Arial, sans-serif;
  margin: 0;
  padding: 0;
  line-height: 1.5;
} */

/* .layout {
  max-width: 760px;
  margin: 0 auto;
  padding-left: 20px;
  padding-right: 20px;
} */

.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
  height: 80px;
}

.nav__link {
  margin-left: 20px;
}
</style>
