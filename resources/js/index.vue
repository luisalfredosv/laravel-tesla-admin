<template>
    <div>
        <app-navigator />
        <div>
            <router-view></router-view>
        </div>
    </div>
</template>

<script>
import AppNavigator from "./components/AppNavigator.vue"
export default {
    components: {
        AppNavigator
    }
}
</script>