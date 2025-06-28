<template>
  <div id="app" class="min-h-screen flex flex-col" style="background: #f3f6fa">
    <div class="w-full max-w-4xl mx-auto flex flex-col flex-1">
      <!-- Barre de navigation -->
      <nav
        class="flex justify-center items-center bg-white shadow-lg rounded-2xl px-10 py-5 my-6 border border-gray-200 text-center"
      >
        <router-link
          to="/"
          class="mx-6 text-gray-700 hover:text-blue-700 transition-colors font-medium text-lg"
          active-class="text-blue-700 font-bold underline"
          exact
          >Accueil</router-link
        >
        <router-link
          to="/forfaits"
          class="mx-6 text-gray-700 hover:text-blue-700 transition-colors font-medium text-lg"
          active-class="text-blue-700 font-bold underline"
          >Forfaits</router-link
        >
        <router-link
          to="/about"
          class="mx-6 text-gray-700 hover:text-blue-700 transition-colors font-medium text-lg"
          active-class="text-blue-700 font-bold underline"
          >À propos</router-link
        >
      </nav>

      <main class="flex-1">
        <router-view />
      </main>

      <footer class="text-center mt-10 mb-4 text-gray-400 text-sm">
        <div class="mb-2">
          <router-link to="/" class="mx-2 text-blue-700 hover:underline"
            >Accueil</router-link
          >
          <router-link to="/forfaits" class="mx-2 text-blue-700 hover:underline"
            >Forfaits</router-link
          >
          <router-link to="/about" class="mx-2 text-blue-700 hover:underline"
            >À propos</router-link
          >
        </div>
        <div>&copy; 2025 Adil Mostapha El Amrani – Tous droits réservés</div>
      </footer>
    </div>
  </div>
</template>

<style>
#app {
  font-family: "Segoe UI", "Avenir", Helvetica, Arial, sans-serif;
  color: #1a2442;
}
</style>
