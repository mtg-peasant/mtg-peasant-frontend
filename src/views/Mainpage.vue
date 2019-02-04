<template>
  <v-container  grid-list-md>
    <v-layout wrap>
      <v-flex shrink lg3>
        <v-card class="mx-auto" max-width="300">
          <v-card-title class>
            <v-icon large left color="blue darken-2">fa-trophy</v-icon>
            <span class="title">Tournois</span>
          </v-card-title>
          <v-card-text class="py-0">
            <v-timeline dense>
              <v-slide-x-reverse-transition group hide-on-leave>
                <v-timeline-item
                  v-for="item in items"
                  :key="item.id"
                  :color="item.color"
                  small
                  fill-dot
                >Toulouse 01/19 Blastodice</v-timeline-item>
              </v-slide-x-reverse-transition>
            </v-timeline>
          </v-card-text>
        </v-card>
      </v-flex>
      <v-flex grow lg6>
        <v-layout column>
          <v-flex >
            <v-card tile>
              <v-card-title >
                <v-icon large left color="blue darken-2">fa-fist-raised</v-icon>
                <span class="title">Derniers matchups</span>
              </v-card-title>
              <v-card-text>
                <span v-for="n in 10" :key="n" style="padding: 15px">
                  <v-badge hover color="purple" overlap>
                    <v-avatar tile>
                      <img :src="'https://www.magic-ville.com/pics/big/pmo/'+(460 + n)+'.jpg'">
                    </v-avatar>
                    <span slot="badge">{{10 - n}}</span>
                    <!-- <v-spacer/> -->
                  </v-badge>
                </span>
              </v-card-text>
            </v-card>
          </v-flex>
          <v-flex >
            <v-card>
              <v-card-title class>
                <v-icon large left color="blue darken-2">fa-newspaper</v-icon>
                <span class="title">Articles</span>
              </v-card-title>
              <v-card-text class="py-0">
                <v-list two-line>
                  <template v-for="(item, index) in itemsss">
                    <v-list-tile :key="item.title" avatar ripple @click="toggle(index)">
                      <v-list-tile-content>
                        <v-list-tile-title>{{ item.title }}</v-list-tile-title>
                        <v-list-tile-sub-title class="text--primary">{{ item.headline }}</v-list-tile-sub-title>
                        <v-list-tile-sub-title>{{ item.subtitle }}</v-list-tile-sub-title>
                      </v-list-tile-content>

                      <v-list-tile-action>
                        <v-list-tile-action-text>{{ item.action }}</v-list-tile-action-text>
                        <v-icon
                          v-if="selected.indexOf(index) < 0"
                          color="grey lighten-1"
                        >star_border</v-icon>

                        <v-icon v-else color="yellow darken-2">star</v-icon>
                      </v-list-tile-action>
                    </v-list-tile>
                    <v-divider v-if="index + 1 < items.length" :key="index"></v-divider>
                  </template>
                </v-list>
              </v-card-text>
            </v-card>
          </v-flex>
          <v-flex >
            <v-card tile>
              <v-card-title >
                <v-icon large left color="blue darken-2">fa-medal</v-icon>
                <span class="title">Statistiques</span>
              </v-card-title>
              <v-card-text>
                <span v-for="n in 10" :key="n" style="padding: 15px">
                  <v-badge hover color="purple" overlap>
                    <v-avatar tile>
                      <img :src="'https://www.magic-ville.com/pics/big/pmo/'+(160 + n)+'.jpg'">
                    </v-avatar>
                    <span slot="badge">{{10 - n}}</span>
                    <!-- <v-spacer/> -->
                  </v-badge>
                </span>
              </v-card-text>
            </v-card>
          </v-flex>
        </v-layout>
      </v-flex>
      <v-flex shrink lg3>
        <v-card class="mx-auto" max-width="300">
          <v-card-title class>
            <v-icon large left color="blue darken-2">chat</v-icon>
            <span class="title">Forum</span>
          </v-card-title>
          <v-card-text class="py-0">
            <v-list two-line>
              <template v-for="(item, index) in itemss">
                <v-subheader v-if="item.header" :key="item.header">{{ item.header }}</v-subheader>

                <v-divider v-else-if="item.divider" :inset="item.inset" :key="index"></v-divider>

                <v-list-tile v-else :key="item.title" avatar>
                  <v-list-tile-avatar>
                    <img :src="item.avatar">
                  </v-list-tile-avatar>

                  <v-list-tile-content>
                    <v-list-tile-title v-html="item.title"></v-list-tile-title>
                    <v-list-tile-sub-title v-html="item.subtitle"></v-list-tile-sub-title>
                  </v-list-tile-content>
                </v-list-tile>
              </template>
            </v-list>
          </v-card-text>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
const ICONS = {
  info: "mdi-information",
  warning: "mdi-alert",
  error: "mdi-alert-circle",
  success: "mdi-check-circle"
};

export default {
  data() {
    return {
      items: [
        {
          id: 1,
          color: "info",
          icon: ICONS["info"]
        },
        {
          id: 2,
          color: "error",
          icon: ICONS["error"]
        },
        {
          id: 3,
          color: "error",
          icon: ICONS["error"]
        },
        {
          id: 4,
          color: "success",
          icon: ICONS["success"]
        },
        {
          id: 5,
          color: "success",
          icon: ICONS["success"]
        },
        {
          id: 6,
          color: "error",
          icon: ICONS["error"]
        },
        {
          id: 7,
          color: "error",
          icon: ICONS["error"]
        }
      ],
      itemss: [
        { header: "Aujourd'hui" },
        {
          avatar:
            "https://cdn.discordapp.com/avatars/359423521312473088/206949b422fd5175a8a67ac5ef70c5ee.png",
          title: "Oui non",
          subtitle:
            "<span class='text--primary'>Sandra Adams</span> &mdash; Do you have Paris recommendations? Have you ever been?"
        },
        {
          avatar:
            "https://cdn.discordapp.com/avatars/438455052160598016/99860e9d7e3a632be0fb464d5cf53287.png",
          title: "Brunch this weekend?",
          subtitle:
            "<span class='text--primary'>Ali Connors</span> &mdash; I'll be in your neighborhood doing errands this weekend. Do you want to hang out?"
        },
        { divider: true, inset: true },
        {
          avatar:
            "https://cdn.discordapp.com/avatars/214132907994906624/756a67681d035550a74c74f1958b22b0.png",
          title: 'Summer BBQ <span class="grey--text text--lighten-1">4</span>',
          subtitle:
            "<span class='text--primary'>to Alex, Scott, Jennifer</span> &mdash; Wish I could come, but I'm out of town this weekend."
        },
        { divider: true, inset: true },
        { header: "Hier" },
        { divider: true, inset: true },
        {
          avatar:
            "https://cdn.discordapp.com/avatars/364300919074062346/e67e701f28ffc042dcf61d6db540811c.png",
          title: "Recipe to try",
          subtitle:
            "<span class='text--primary'>Britta Holt</span> &mdash; We should eat this: Grate, Squash, Corn, and tomatillo Tacos."
        },
        { divider: true, inset: true },
        {
          avatar:
            "https://cdn.discordapp.com/avatars/378501082491387905/33c028e7237ae606928d71ca7472a0be.png",
          title: "Birthday gift",
          subtitle:
            "<span class='text--primary'>Trevor Hansen</span> &mdash; Have any ideas about what we should get Heidi for her birthday?"
        }
      ],
      selected: [2],
      itemsss: [
        {
          action: "15 min",
          headline: "Brunch this weekend?",
          title: "Ali Connors",
          subtitle:
            "I'll be in your neighborhood doing errands this weekend. Do you want to hang out?"
        },
        {
          action: "2 hr",
          headline: "Summer BBQ",
          title: "me, Scrott, Jennifer",
          subtitle: "Wish I could come, but I'm out of town this weekend."
        },
        {
          action: "6 hr",
          headline: "Oui oui",
          title: "Sandra Adams",
          subtitle: "Do you have Paris recommendations? Have you ever been?"
        }
      ]
    };
  }
};
</script>