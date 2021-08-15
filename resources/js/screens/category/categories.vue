<template>
   <v-simple-table dark>
       <template v-slot:default>
           <thead>
               <tr>
                   <th class="text-left">
                       Image
                   </th>
                   <th class="text-left">
                       Name
                   </th>
                   <th class="text-left">
                       Order
                   </th>
                   <th class="text-left">
                       Edit
                   </th>
                   <th class="text-left">
                       Delete
                   </th>
               </tr>
           </thead>
           <tbody>
               <tr v-for="{ id, image, name, order } of categories"
               :key="id"
               >
                    <td>{{ image }}</td>
                    <td>{{ name }}</td>
                    <td>{{ order }}</td>
                    <td>
                        <v-btn 
                        class="mx-2"
                        fab
                        dark
                        large
                        color="cyan"
                        >
                        Edit
                        </v-btn>
                    </td>
                    <td>
                        <v-btn 
                        class="mx-2"
                        fab
                        dark
                        large
                        color="cyan"
                        >
                        Delete
                        </v-btn>
                    </td>
               </tr>
           </tbody>

       </template>
   </v-simple-table>
</template>

<script>
export default {
    data(){
        return{
            categories: []
        }
    },
    methods:{
        async getCategories(){
            try {
                const { data } = await axios.get('http://localhost:8000/api/categories')
                this.categories = data.categories
            } catch (error) {
                console.error('🤡', error)
            }
        }
    },
    mounted(){
        this.getCategories();
    }
}
</script>