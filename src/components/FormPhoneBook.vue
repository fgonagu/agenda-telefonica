<template>
<div class="flex flex-col items-center justify-center text-center border-1 border-dotted border-amber-500">
    <form @submit.prevent="addContact" class="p-[10px]">
        <div class="p-[5px]">
            <h2>Nuevo Contacto...</h2>

            <label >Nombre: </label>
            <input class="focus:bg-white hover:border hover:bg-amber-50" v-model="newContact.name" type="text" required>
        </div>
        <div class="p-[5px]">
            <label>Apellidos: </label>
            <input class="focus:bg-white hover:border hover:bg-amber-50" v-model="newContact.lastname" type="text" required>
        </div>
        <div class="p-[5px]">
            <label>Teléfono: </label>
            <input class="focus:bg-white hover:border hover:bg-amber-50" v-model="newContact.phone" type="tel" required>
        </div>
        <button type="submit" class="bg-amber-100 p-[5px] border-0 rounded-xl hover:bg-amber-200 transition ease-in-out cursor-pointer">Añadir</button>
        <button @click="showContacts" class="bg-amber-100 p-[5px] border-0 rounded-xl hover:bg-amber-200 transition ease-in-out cursor-pointer">Mostrar Contactos</button>
        <button @click="hideContacts" class="bg-amber-100 p-[5px] border-0 rounded-xl hover:bg-amber-200 transition ease-in-out cursor-pointer">Limpiar</button>
    </form>
    <div v-if="showAll === true">
        <ul>
            <li v-for="(contact, index) in contacts" :key=index>
                {{contact.name}} {{contact.lastname}} : {{contact.phone}}
            </li>
        </ul>
    </div>


</div>
</template>

<script>
export default {
    data: () => ({
        showAll: {
            type: Boolean,
            default: false,
        },
        newContact: {
            name: '',
            lastname: '',
            phone: ''
        },
        contacts: []

}),
    methods: {
        addContact(){
            this.showModal = false;
            this.contacts.push({
                name: this.newContact.name,
                lastname: this.newContact.lastname,
                phone: this.newContact.phone
            })
            this.newContact = {name: '', lastname: '', phone: ''}
            console.log(this.showModal);
            console.log("Listin: ", this.contacts);
        },
        showContacts(){
            this.showAll = true;
        },
        hideContacts(){
            this.showAll = false;

        }


    }
}
</script>

<style scoped>

</style>