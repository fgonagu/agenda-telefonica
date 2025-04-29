<template>
<div class="flex flex-col items-center justify-center text-center min-h-screen">
    <div class="border bg-stone-100">
    <header class="text-3xl p-[30px]" >AGENDA TELEFÓNICA</header>

    <Button @click  = "openForm" formtarget="_self"/>
    <div class="p-[20px]" v-if="showModal === true">
        <FormPhoneBook />
    </div>


    </div>

</div>
</template>


<script>
import Button from './components/Button.vue';
import FormPhoneBook from "@/components/FormPhoneBook.vue";

export default {
    components: {
        FormPhoneBook,
        Button,
    },
    data: () => ({
        showModal: false,
    }),
    methods: {
        openForm(){
            this.showModal = true;
            console.log(this.showModal);



        }

    },
}
</script>


<style scoped>

</style>
