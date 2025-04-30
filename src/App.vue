<template>
<div  class="flex flex-col items-center justify-center text-center min-h-screen bg-[url(../assets/hoja.jpg)] bg-repeat-round ">
    <div class="border border-dashed ">
    <header class="text-3xl p-[30px] font-serif underline text-amber-700" >AGENDA TELEFÓNICA</header>

        <!--usar un botón con metodo de navegación programática -->
        <div v-if="$route.path === '/'">
            <Button @click="navigateToForm" text="Añadir Contacto" />
        </div>

        <div class="p-5">
            <router-view />
        </div>
    </div>
</div>
</template>


<script>
import Button from './components/Button.vue';

export default {
    components: {
        Button,
    },
    data: () => ({
        showModal: false,
    }),
    methods: {

        navigateToForm(){
            this.$router.push('/FormPhoneBook');
        }

    },
}
</script>


<style scoped>

</style>
