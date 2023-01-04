<template>
  <h1>Slots</h1>
  <button @click="openModal">Abrir Modal</button>
  <Modal v-if="isOpen" title="Hola mundo" 
    @on:close="closeModal">
    <template v-slot:header>
        <h2>Titulo del modal</h2>
    </template>
    <template v-slot:body>
        <p>Contenido del modal</p>
    </template>
    <template v-slot:footer>
        <button @click="closeModal">salir</button>
    </template>
  </Modal>
</template>

<script>
import Modal from '../components/Modal'
import { ref } from 'vue'

export default {
    components: {Modal},
    setup() {
        const isOpen = ref(false)
        return {
            isOpen,
            openModal: () => isOpen.value = true,
            closeModal: () => isOpen.value = false
        }
    }
}
</script>

<style>

</style>