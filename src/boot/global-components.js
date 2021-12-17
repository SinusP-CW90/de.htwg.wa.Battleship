import MainLayout from '../layouts/MainLayout.vue'

export default ({ app }) => {
  // we globally register our component in the app
  app.component('mainLayout', MainLayout)
}
