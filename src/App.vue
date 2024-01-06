<template>
    <!-- user logged in -->
    <template v-if="auth.isAuthenticated">
        <p>Selamat datang, {{ auth.user?.name }}</p>

        <!-- email verification status -->
        <small v-if="auth.isEmailVerified">Akun telah diverifikasi</small>
        <small v-else>Segera lakukan verifikasi alamat email anda {{ auth.user.email }}</small>

        <br><br>

        <!-- logout -->
        <button type="button" @click="auth.logout()">Logout</button>
    </template>

    <!-- user not logged in -->
    <template v-else>
        <form @submit.prevent="auth.login(form)">
            <!-- email field -->
            <div style="margin-bottom: 1rem; text-align: left;">
                <label for="email">Email</label>
                <br>
                <input v-model="form.email" type="email" id="email" required>
            </div>

            <!-- password field -->
            <div style="margin-bottom: 1rem; text-align: left;">
                <label for="email">Password</label>
                <br>
                <input v-model="form.password" type="password" id="password" required>
            </div>

            <!-- submit -->
            <button type="submit" style="width: 100%;">Login</button>
        </form>
    </template>
</template>

<script setup lang="ts">

import { ref } from "vue"
import { useAuthStore, LoginPayload } from "./stores/auth-store"

// initial
const auth = useAuthStore()
const form = ref<LoginPayload>({
    email: "",
    password: ""
})
</script>