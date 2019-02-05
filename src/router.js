import Banlist from './views/Banlist.vue'
import Gatherer from './views/Gatherer.vue'
import Valideck from './views/Valideck.vue'
import Archetype from './views/Archetype.vue'
import Article from './views/Article.vue'
import Decklist from './views/Decklist.vue'
import Ranking from './views/Ranking.vue'
import Tierslist from './views/Tierslist.vue'
import Tournament from './views/Tournament.vue'
import Forum from './views/Forum.vue'
import NotFoundComponent from './views/NotFoundComponent.vue'

export default 
  [
    {
      path: '/banlist',
      component: Banlist,
    },
    {
      path: '/gatherer',
      component: Gatherer,
    },
    {
      path: '/valideck',
      component: Valideck,
    },
    {
      path: '/archetype',
      component: Archetype,
    },
    {
      path: '/decklist',
      component: Decklist,
    },
    {
      path: '/tierslist',
      component: Tierslist,
    },
    {
      path: '/tournament',
      component: Tournament,
    },
    {
      path: '/ranking',
      component: Ranking,
    },
    {
      path: '/article',
      component: Article,
    },
    {
      path: '/forum',
      component: Forum,
    },
    { path: '*', component: NotFoundComponent }
  ]