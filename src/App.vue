<template>

   <keep-alive>
    <div>
      <router-view />
   </div>
    </keep-alive>
  <!-- <header>
    <img alt="Vue logo" class="logo" src="./assets/logo.svg" width="125" height="125" />
  </header> -->

  <!-- <main>
    <img src="./assets/img/Home.png">
  </main> -->
</template>

<style scoped>


.global-app-style
{
    margin: 0 auto;
    max-width: 500px;
    overflow-x: hidden;
}
.global-webview-app-style
{
    margin: 0 auto;
}

header {
  line-height: 1.5;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }
}
</style>
