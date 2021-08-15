<template>
    <div>
        <v-toolbar
            dark
            src="https://cdn.vuetifyjs.com/images/backgrounds/vbanner.jpg"
        >
            <v-app-bar-nav-icon></v-app-bar-nav-icon>

            <v-toolbar-title>Tesla APP</v-toolbar-title>

            <v-spacer></v-spacer>

            <v-btn class="mr-2" @click="() => this.$router.push('addCategory')">
                Add Categories
            </v-btn>

           <v-btn @click="() => this.$router.push('categories')">
                Categories
            </v-btn>

           <v-btn class="ml-2" @click="() => this.$router.push('products')">
                Products
            </v-btn>
        </v-toolbar>
    </div>
</template>

<script>
export default {};
</script>
