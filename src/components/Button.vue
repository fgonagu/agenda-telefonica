<template>
    <button
        class="bg-amber-600 p-[10px] font-bold hover:border border-0 rounded-2xl hover:bg-amber-200 transition ease-in-out cursor-pointer">
        {{ text || 'Añadir Contacto' }}
    </button>
</template>

<script>
export default {
    props: {
        text: {
            type: String,
            default: 'Abrir'
        }
    }
}
</script>

<style scoped>

</style>