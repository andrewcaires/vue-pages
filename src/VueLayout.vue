<template>
  <component :is="layout" />
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  computed: {
    layout() {
      return (
        (this.$route &&
          this.$route.meta &&
          this.$layouts[this.$route.meta.layout || "index"]) ||
        "router-view"
      );
    },
  },
  name: "VueLayout",
});
</script>