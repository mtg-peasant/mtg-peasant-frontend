<template>
  <v-app>
    <v-toolbar app fixed clipped-right>
      <v-toolbar-side-icon @click.stop="drawer = !drawer"></v-toolbar-side-icon>
      <v-toolbar-title>Mtg-Peasant</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-toolbar-items>
        <!-- <v-btn flat :to="'/archetype'">Archetype</v-btn>
        <v-btn flat :to="'/decklist'">Decklist</v-btn>
        <v-btn flat :to="'/tierslist'">Tierslist</v-btn> -->
        <v-btn flat :to="'/tournament'">Tournament</v-btn>
        <v-btn flat :to="'/ranking'">Ranking</v-btn>
        <v-btn flat :to="'/article'">Article</v-btn>
        <v-btn flat :to="'/forum'">Forum</v-btn>

        <v-menu offset-y bottom left>
          <v-btn flat slot="activator">
            <v-badge overlap>
              <span slot="badge">3</span>
              <v-avatar>
                <v-icon>person</v-icon>
              </v-avatar>
            </v-badge>
          </v-btn>
          <v-list>
            <v-subheader>LeJoueur</v-subheader>
            <v-list-tile :to="'/page1'">Sign out</v-list-tile>
            <v-list-tile :to="'/page1'">Dark theme: On</v-list-tile>
            <v-list-tile :to="'/page1'">Locale: en</v-list-tile>
          </v-list>
        </v-menu>
      </v-toolbar-items>
    </v-toolbar>
    <v-navigation-drawer fixed v-model="drawer" app>
      <v-list dense>
        <v-list-tile v-for="i in icons" :to="{path: i.url}" v-bind:key="i.url">
          <!-- <v-list-tile-action>
            <v-icon>{{ i.icon }}</v-icon>
          </v-list-tile-action> -->
          <v-list-tile-content>
            <v-list-tile-title>{{ i.label }}</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
      </v-list>
    </v-navigation-drawer>
    <v-content>
      <v-container fluid>
        <v-fade-transition mode="out-in">
          <router-view></router-view>
        </v-fade-transition>
      </v-container>
    </v-content>
    <Footer/>
  </v-app>
</template>

<script>
import Footer from "./components/template/Footer.vue";

export default {
  data() {
    return {
      drawer: false,
      icons: [
        {
          url: "/archetype",
          label: "Archetype"
        },
        {
          url: "/decklist",
          label: "Decklist"
        },
        {
          url: "/tierslist",
          label: "Tierslist"
        },
        {
          url: "/gatherer",
          label: "Gatherer"
        },
        {
          url: "/valideck",
          label: "Valideck"
        },
        {
          url: "/banlist",
          label: "Banlist"
        }
      ]
    };
  },
  components: {
    Footer
  }
};
</script>
