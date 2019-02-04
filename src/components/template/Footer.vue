<template>
  <v-footer height="auto">
    <v-layout justify-center row wrap>
      <v-btn v-for="link in links" :key="link" flat round>{{ link }}</v-btn>
    </v-layout>
  </v-footer>
</template>

<script>


export default {
  data: () => ({
    links: [
      'Accueil',
      "L'équipe",
      'La communauté',
      'Nous contacter'
    ]
  })
}
</script>
