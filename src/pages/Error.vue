<template lang="html">
  <b-container class="text-center fill-height">
    <b-row align="center">
      <b-col>
        <h1 class="display-2">Whoops, 404</h1>

        <p>The page you were looking for does not exist</p>

        <b-btn outlined color="primary"
          @click.stop="$router.push('/')"
        >Get me out of here!</b-btn>
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
export default {
}
</script>

<style lang="css" scoped>
</style>
