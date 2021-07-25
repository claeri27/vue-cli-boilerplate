<template>
  <div id="nav">
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link>
  </div>
  <router-view />
</template>

<script>
import { defineComponent } from 'vue'
import { useQueryProvider } from 'vue-query'

export default defineComponent({
  name: 'App',
  setup() {
    useQueryProvider()
  },
})
</script>

<style lang="scss">
:root {
  --blue: lightblue;
  --background-color: lightgrey;
}

:root[data-theme='dark'] {
  --blue: blue;
  --background-color: yellow;
}

$breakpoints: (
  'phone': 400px,
  'phone-wide': 480px,
  'phablet': 560px,
  'tablet-small': 640px,
  'tablet': 768px,
  'tablet-wide': 1024px,
  'desktop': 1248px,
  'desktop-wide': 1440px,
);

@mixin m-auto {
  margin: {
    left: auto;
    right: auto;
  }
}

@mixin flexCol {
  display: flex;
  flex-direction: column;
}

@mixin mq($width, $type: min) {
  @if map_has_key($breakpoints, $width) {
    $width: map_get($breakpoints, $width);
    @if $type == max {
      $width: $width - 1px;
    }
    @media only screen and (#{$type}-width: $width) {
      @content;
    }
  }
}

html {
  background-color: var(--background-color);
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
