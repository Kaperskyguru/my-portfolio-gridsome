// This is the main.js file. Import global CSS and scripts here.
// The Client API can be used here. Learn more: gridsome.org/docs/client-api

import DefaultLayout from "~/layouts/Default.vue";
import "~/assets/flaticon.css";

import "~/assets/style.css";

export default function(Vue, { router, head, isClient }) {
  // Set default layout as a global component
  Vue.component("Layout", DefaultLayout);

  head.bodyAttrs = {
    "data-spy": "scroll",
    "data-target": ".site-navbar-target",
    "data-offset": "300",
  };

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

  head.link.push({
    rel: "stylesheet",
    href:
      "https://cdnjs.cloudflare.com/ajax/libs/open-iconic/1.1.1/font/css/open-iconic-bootstrap.min.css",
  });

  head.link.push({
    rel: "stylesheet",
    href:
      "https://cdnjs.cloudflare.com/ajax/libs/animate.css/3.7.2/animate.min.css",
  });

  head.link.push({
    rel: "stylesheet",
    href:
      "https://cdnjs.cloudflare.com/ajax/libs/OwlCarousel2/2.3.4/assets/owl.carousel.min.css",
  });

  head.link.push({
    rel: "stylesheet",
    href:
      "https://cdnjs.cloudflare.com/ajax/libs/OwlCarousel2/2.3.4/assets/owl.theme.default.min.css",
  });

  head.link.push({
    rel: "stylesheet",
    href:
      "https://cdnjs.cloudflare.com/ajax/libs/magnific-popup.js/1.1.0/magnific-popup.min.css",
  });

  head.link.push({
    rel: "stylesheet",
    href: "https://cdnjs.cloudflare.com/ajax/libs/aos/2.3.4/aos.css",
  });

  head.link.push({
    rel: "stylesheet",
    href:
      "https://cdnjs.cloudflare.com/ajax/libs/ionicons/4.0.0-19/css/ionicons.min.css",
  });

  head.link.push({
    rel: "stylesheet",
    href: "https://cdn.jsdelivr.net/npm/icomoon@1.0.0/style.css",
  });

  head.script.push({
    src: "https://cdnjs.cloudflare.com/ajax/libs/jquery/3.4.1/jquery.min.js",
    body: true,
  });
  head.script.push({ src: "js/jquery-migrate-3.0.1.min.js" });
  head.script.push({ src: "/js/popper.min.js", body: true });
  head.script.push({ src: "/js/bootstrap.min.js", body: true });
  head.script.push({ src: "/js/jquery.easing.1.3.js", body: true });
  // head.script.push({
  //   src:
  //     "https://cdnjs.cloudflare.com/ajax/libs/waypoints/4.0.1/noframework.waypoints.min.js",
  //   body: true,
  // });
  head.script.push({ src: "/js/jquery.stellar.min.js", body: true });
  head.script.push({ src: "/js/owl.carousel.min.js", body: true });
  head.script.push({ src: "/js/jquery.magnific-popup.min.js", body: true });
  head.script.push({
    src: "https://cdnjs.cloudflare.com/ajax/libs/aos/2.3.4/aos.js",
    body: true,
  });
  head.script.push({ src: "/js/jquery.animateNumber.min.js", body: true });
  head.script.push({ src: "/js/scrollax.min.js", body: true });
  head.script.push({ src: "/js/main.js", body: true });
}
