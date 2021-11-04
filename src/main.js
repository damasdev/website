// Import main css
import "~/assets/style/index.scss";

// Type.js
import VueTypedJs from "vue-typed-js";

// Import default layout so we don't need to import it to every page
import DefaultLayout from "~/layouts/Default.vue";

// The Client API can be used here. Learn more: gridsome.org/docs/client-api
export default function(Vue, { router, head, isClient }) {
  // Set default layout as a global component
  Vue.component("Layout", DefaultLayout);

  Vue.use(VueTypedJs);
}
