
/**
 * router/index.ts
 *
 * Automatic routes for `./src/pages/*.vue`
 */

// Composables
import { createRouter, createWebHistory } from 'vue-router/auto'
import contact from '@/pages/contact.vue'
import projects from '@/pages/projets.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
})

export default router
// Routes

// Add routes
router.addRoute({
  path: '/contact',
  name: 'Contact',
  component: contact
})

router.addRoute({
  path: '/projects',
  name: 'Projets',
  component: projects
})