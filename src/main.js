// This is the main.js file. Import global CSS and scripts here.
// The Client API can be used here. Learn more: gridsome.org/docs/client-api

import DefaultLayout from "~/layouts/Default.vue";
import "~/assets/open-iconic-bootstrap.min.css";
import "~/assets/animate.css";
import "~/assets/owl.carousel.min.css";
import "~/assets/owl.theme.default.min.css";
import "~/assets/magnific-popup.css";
import "~/assets/aos.css";

import "~/assets/ionicons.min.css";
import "~/assets/flaticon.css";
import "~/assets/icomoon.css";

import "~/assets/style.css";

export default function(Vue, { router, head, isClient }) {
  // Set default layout as a global component
  Vue.component("Layout", DefaultLayout);

  head.link.push({
    rel: "stylesheet",
    href:
      "https://fonts.googleapis.com/css?family=Poppins:100,200,300,400,500,600,700,800,900",
  });

  head.link.push({
    rel: "stylesheet",
    href:
      "https://fonts.googleapis.com/css?family=Poppins:100,200,300,400,500,600,700,800,900",
  });
}
