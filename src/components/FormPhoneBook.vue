<template>
    <div
        class="font-mono flex flex-col items-center justify-center text-center border-1 border-dotted border-amber-500">
        <form @submit.prevent="addContact" class="p-[10px] space-y-2.5">
            <div class="p-[5px]">
                <h2 class="text-lg font-bold mb-3">Nuevo Contacto...</h2>

                <label class="p-[10px]">Nombre: </label>
                <input class="focus:bg-white hover:border hover:bg-amber-50" v-model="newContact.name" type="text"
                       required>
            </div>
            <div class="p-[5px]">
                <label class="p-[10px]">Apellidos: </label>
                <input class="focus:bg-white hover:border hover:bg-amber-50" v-model="newContact.lastname" type="text"
                       required>
            </div>
            <div class="p-[5px]">
                <label class="p-[10px]">Teléfono: </label>
                <input class="focus:bg-white hover:border hover:bg-amber-50" v-model="newContact.phone" type="tel"
                       required>
            </div>
            <div class="space-x-2.5">
                <button type="submit"
                        class="bg-amber-100 p-[5px] border-0 rounded-xl hover:bg-amber-200 transition ease-in-out hover:border border-amber-600 cursor-pointer">
                    Añadir
                </button>
                <button type="button"  @click="showContacts"
                        class="bg-amber-100 p-[5px] border-0 rounded-xl hover:bg-amber-200 transition ease-in-out hover:border border-amber-600 cursor-pointer">
                    Mostrar Contactos
                </button>

                <button type="button" @click="hideContacts"
                        class="bg-amber-100 p-[5px] border-0 rounded-xl hover:bg-amber-200 transition ease-in-out hover:border border-amber-600 cursor-pointer">
                    Limpiar
                </button>
                <button type="button" @click="goBack"
                        class="bg-gray-200 p-[5px] border-0 rounded-xl hover:bg-gray-300 transition ease-in-out hover:border border-red-400 cursor-pointer">
                    Volver
                </button>


            </div>
        </form>
        <div v-if="showAll" class="mt-4 p-4 bg-amber-50 rounded">
            <h3 class="font-bold mb-2">Lista de Contactos</h3>
            <ul v-if="contacts.length > 0">
                <li v-for="(contact, index) in contacts" :key="index" class="py-1">
                    {{contact.id}} {{ contact.name }} {{ contact.lastname }} : {{ contact.phone }}
                    <button type="button" @click="deleteContact(contact.id)"
                            class=" p-[2px] rounded-full font-bold text-red-800 hover:bg-red-300 transition ease-in-out cursor-pointer">
                        x
                    </button>

                </li>
            </ul>
            <p v-else>No hay contactos guardados</p>
        </div>
    </div>
</template>

<script>
export default {
    data: () => ({
        showAll: false,
        newContact: {
            name: '',
            lastname: '',
            phone: ''
        },
        contacts: [],
        nextId: 1, //contador para que no se repitan los nuevos contactos al borrar alguno

    }),
    methods: {
        addContact() {

            this.contacts.push({
                id: this.nextId,
                name: this.newContact.name,
                lastname: this.newContact.lastname,
                phone: this.newContact.phone
            });
            this.nextId++;
            this.newContact = {id: '', name: '', lastname: '', phone: ''}
            //Mostramos automaticamente los contactos cuando se añade uno nuevo
            this.showAll = true
            console.log("Listin: ", this.contacts);
        },
        showContacts() {
            //this.showAll = true;
            this.$router.push('ContactsList');
        },
        hideContacts() {
            this.showAll = false;

        },
        goBack() {
            this.$router.push('/');
        },
        deleteContact(id) {
            console.log("id: " + id);
            //Filtro en el array y si el id del contacto es igual al que le mando en deleteContact devuelve false y lo elimina
            // si el id es diferente devuelve true y lo deja en el array. Filter crear un nuevo array
            this.contacts = this.contacts.filter(contact => contact.id !== id);
        }


    }
}
</script>

<style scoped>

</style>