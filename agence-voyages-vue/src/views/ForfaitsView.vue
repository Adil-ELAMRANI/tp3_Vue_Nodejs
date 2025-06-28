<template>
  <div class="px-8 py-8">
    <h1 class="text-3xl font-bold mb-6">Nos forfaits touristiques</h1>

    <div class="mb-8 flex justify-end">
      <button
        class="bg-blue-700 text-white px-6 py-2 rounded-lg shadow font-bold hover:bg-blue-800 transition"
        @click="ouvrirAjout"
      >
        Ajouter un forfait
      </button>
    </div>

    <!-- Formulaire ajout/édition -->
    <div
      v-if="formVisible"
      class="mb-8 bg-white p-6 rounded-xl shadow border max-w-xl mx-auto"
    >
      <h2 class="text-xl font-bold mb-4">
        {{ isEdit ? "Modifier le forfait" : "Ajouter un forfait" }}
      </h2>
      <form @submit.prevent="isEdit ? modifierForfait() : ajouterForfait()">
        <div class="mb-4">
          <label class="block font-semibold mb-1">Nom</label>
          <input
            v-model="form.name"
            class="w-full px-3 py-2 border rounded"
            required
          />
        </div>
        <div class="mb-4">
          <label class="block font-semibold mb-1">Description</label>
          <textarea
            v-model="form.description"
            class="w-full px-3 py-2 border rounded"
            required
          ></textarea>
        </div>
        <div class="mb-4">
          <label class="block font-semibold mb-1">Prix ($)</label>
          <input
            v-model.number="form.price"
            type="number"
            min="0"
            class="w-full px-3 py-2 border rounded"
            required
          />
        </div>
        <div class="mb-4">
          <label class="block font-semibold mb-1">Image (URL)</label>
          <input
            v-model="form.photo"
            class="w-full px-3 py-2 border rounded"
            required
          />
        </div>
        <div class="mb-6">
          <label class="block font-semibold mb-1">Catégorie</label>
          <select
            v-model="form.category"
            class="w-full px-3 py-2 border rounded"
            required
          >
            <option value="" disabled>Choisir une catégorie</option>
            <option v-for="cat in categories" :key="cat" :value="cat">
              {{ cat }}
            </option>
          </select>
        </div>
        <div class="flex gap-4">
          <button
            type="submit"
            class="bg-blue-700 text-white px-4 py-2 rounded hover:bg-blue-800 transition font-bold"
          >
            {{ isEdit ? "Enregistrer" : "Ajouter" }}
          </button>
          <button
            type="button"
            @click="fermerForm"
            class="bg-gray-300 text-gray-800 px-4 py-2 rounded font-bold"
          >
            Annuler
          </button>
        </div>
      </form>
    </div>
    <!-- Tableau des forfaits -->
    <div v-if="forfaits.length" class="overflow-x-auto">
      <table class="min-w-full bg-white rounded-xl shadow border">
        <thead>
          <tr class="bg-blue-100 text-blue-900">
            <th class="px-4 py-3">Image</th>
            <th class="px-4 py-3">Nom</th>
            <th class="px-4 py-3">Description</th>
            <th class="px-4 py-3">Prix</th>
            <th class="px-4 py-3">Catégorie</th>
            <th class="px-4 py-3">Actions</th>
          </tr>
        </thead>
        <tbody>
          <tr
            v-for="forfait in forfaits"
            :key="forfait.id"
            class="border-t hover:bg-gray-50"
          >
            <td class="px-4 py-3">
              <img
                :src="forfait.photo"
                alt=""
                class="w-20 h-14 object-cover rounded shadow border"
              />
            </td>
            <td class="px-4 py-3 font-semibold">{{ forfait.name }}</td>
            <td class="px-4 py-3 text-sm">{{ forfait.description }}</td>
            <td class="px-4 py-3 font-mono">${{ forfait.price }}</td>
            <td class="px-4 py-3">{{ forfait.category }}</td>
            <td class="px-4 py-3 flex gap-2">
              <button
                class="bg-yellow-100 text-yellow-900 px-3 py-1 rounded hover:bg-yellow-200 font-bold"
                @click="editerForfait(forfait)"
              >
                Modifier
              </button>
              <button
                class="bg-red-100 text-red-700 px-3 py-1 rounded hover:bg-red-200 font-bold"
                @click="supprimerForfait(forfait.id)"
              >
                Supprimer
              </button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>

    <div v-else class="text-center text-gray-400 text-lg">
      Aucun forfait pour le moment.
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'

const API_URL = 'http://localhost:8080/api/forfaits'

const forfaits = ref([])
const formVisible = ref(false)
const isEdit = ref(false)
const form = ref({
  id: null,
  name: '',
  description: '',
  price: '',
  photo: '',
  category: ''
})
const categories = [
  'Plage',
  'Culture',
  'Aventure',
  'Luxe',
  'Nature',
  'Montagne',
  'Bien-être',
  'Croisière',
  'Gastronomie',
  'Sport'
]

function chargerForfaits () {
  fetch(API_URL)
    .then((res) => res.json())
    .then((data) => {
      forfaits.value = data
    })
    .catch(() => {
      forfaits.value = []
    })
}

function ouvrirAjout () {
  isEdit.value = false
  form.value = {
    id: null,
    name: '',
    description: '',
    price: '',
    photo: '',
    category: ''
  }
  formVisible.value = true
}

function fermerForm () {
  formVisible.value = false
}

function ajouterForfait () {
  fetch(API_URL, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ ...form.value })
  }).then(() => {
    chargerForfaits()
    formVisible.value = false
  })
}

function editerForfait (forfait) {
  isEdit.value = true
  form.value = { ...forfait }
  formVisible.value = true
}

function modifierForfait () {
  fetch(`${API_URL}/${form.value.id}`, {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ ...form.value })
  }).then(() => {
    chargerForfaits()
    formVisible.value = false
  })
}

function supprimerForfait (id) {
  if (confirm('Supprimer ce forfait ?')) {
    fetch(`${API_URL}/${id}`, { method: 'DELETE' }).then(() =>
      chargerForfaits()
    )
  }
}

onMounted(chargerForfaits)
</script>
