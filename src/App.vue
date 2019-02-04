<template>
  <v-app>
    <v-toolbar app fixed clipped-right>
      <v-toolbar-side-icon @click.stop="drawer = !drawer"></v-toolbar-side-icon>
      <v-toolbar-title><v-btn flat large :to="'/'">Mtg-Peasant</v-btn></v-toolbar-title>
      <v-spacer></v-spacer>
      <v-toolbar-items>
        <!-- <v-btn flat :to="'/archetype'">Archetype</v-btn>
        <v-btn flat :to="'/decklist'">Decklist</v-btn>
        <v-btn flat :to="'/tierslist'">Tierslist</v-btn> -->
        <v-btn flat :to="'/tournament'"><v-icon left color="blue darken-2">fa-trophy</v-icon>Tournois</v-btn>
        <v-btn flat :to="'/article'"><v-icon left color="blue darken-2">fa-newspaper</v-icon>Articles</v-btn>
        <v-btn flat :to="'/forum'"><v-icon left color="blue darken-2">chat</v-icon>Forum</v-btn>
        <!-- <v-btn flat :to="'/ranking'"><v-icon left color="blue darken-2">fa-medal</v-icon>Statistiques</v-btn> -->

        <v-menu offset-y bottom left>
          <v-btn icon flat slot="activator">
            <v-badge overlap>
              <!-- <span slot="badge">3</span> -->
              <v-avatar>
                <v-icon>fa-ellipsis-v</v-icon>
              </v-avatar>
            </v-badge>
          </v-btn>
          <v-list>
            <v-subheader>LeJoueur</v-subheader>
            <v-list-tile :to="'/page1'"><v-icon left color="blue darken-2">fa-user</v-icon>Se connecter</v-list-tile>
            <v-list-tile :to="'/page1'"><v-icon left color="blue darken-2">fa-user-cog</v-icon>Profil</v-list-tile>
            <v-list-tile :to="'/page1'"><v-icon left color="blue darken-2">fa-book</v-icon>Mes decklists</v-list-tile>
            <v-list-tile :to="'/page1'"><v-icon left color="blue darken-2">fa-trophy</v-icon>Mes tournois</v-list-tile>
            <v-list-tile :to="'/page1'"><v-icon left color="blue darken-2">fa-moon</v-icon>Thème dark: actif</v-list-tile>
            <v-list-tile :to="'/page1'"><v-icon left color="blue darken-2">fa-globe-americas</v-icon>Langue: anglais</v-list-tile>
          </v-list>
        </v-menu>
      </v-toolbar-items>
    </v-toolbar>
    <v-navigation-drawer v-model="drawer" app temporary>
      <v-list dense>
        <v-list-tile v-for="i in icons" :to="{path: i.url}" v-bind:key="i.url">
          <v-list-tile-action>
            <v-icon>{{ i.icon }}</v-icon>
          </v-list-tile-action>
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
          label: "Archetypes",
          icon: "fa-book"
        },
        {
          url: "/decklist",
          label: "Decklists",
          icon: "fa-book"
        },
        {
          url: "/tierslist",
          label: "Tierslist",
          icon: "fa-book"
        },
        {
          url: "/tierslist",
          label: "Statistiques",
          icon: "fa-medal"
        },
        {
          url: "/gatherer",
          label: "Gatherer",
          icon: "fa-search"
        },
        {
          url: "/valideck",
          label: "Valideck",
          icon: "fa-check"
        },
        {
          url: "/banlist",
          label: "Banlist",
          icon: "fa-book-dead"
        }
      ]
    };
  },
  components: {
    Footer
  }
};
</script>
