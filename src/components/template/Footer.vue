<template>
  <v-footer height="auto">
    <v-layout justify-center row wrap>
      <v-btn v-for="link in links" :key="link" flat round>{{ link }}</v-btn>
      <v-flex py-3 text-xs-center xs12>&copy;2018 —
        <strong>Vuetify</strong>
        <span v-t="'message.hello'"></span>
        {{ $t("message.hello") }}
      </v-flex>
    </v-layout>
  </v-footer>
</template>

<script>


export default {
  data: () => ({
    links: [
      'Home',
      'About Us',
      'Team',
      'Services',
      'Blog',
      'Contact Us'
    ]
  })
}
</script>
