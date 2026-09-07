

import { ref } from 'vue'

export const libros = ref([
  {
    id: 1,
    titulo: 'Libro 1',
    sku: '1',
    categoria: 'Ficción'
  },
  {
    id: 2,
    titulo: 'Libro 2',
    sku: '2',
    categoria: 'Historia'
  },
  {
    id: 3,
    titulo: 'Libro 3',
    sku: '3',
    categoria: 'Ciencia'
  }
])

// Contador simple para generar ids nuevos
let siguienteId = 4

export function agregarLibro (libro) {
  libros.value.push({
    id: siguienteId,
    titulo: `Libro ${siguienteId}`,
    sku: libro.sku,
    categoria: libro.categoria
  })
  siguienteId++
}

export function eliminarLibro (id) {
  libros.value = libros.value.filter((libro) => libro.id !== id)
}
