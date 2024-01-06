import { defineStore } from "pinia"
import { computed, ref } from "vue"

// types
type Credential = {
    name?: string,
    email?: string,
    emailVerifiedAt?: Date,
}

export type LoginPayload = {
    email: string,
    password: string
}

export const useAuthStore = defineStore("auth-store", () => {

    // initial states
    const user = ref<Credential>({})

    // getters
    const isAuthenticated = computed(() => !!user.value.email)
    const isEmailVerified = computed(() => !!user.value?.emailVerifiedAt)

    // setters
    const login = (payload: LoginPayload) => {
        // dummy credential
        const dummyEmail: string = "example@mail.com"
        const dummyPassword: string = "12345678"

        if (dummyEmail === payload.email && dummyPassword === payload.password) {

            // reinit state
            user.value.email = payload.email
            user.value.name = "Fulan bin Fulan"

            return alert("login success")
        }

        // failed
        return alert("missmatch user credential")
    }

    const logout = () => {
        const isConfirmed: boolean = confirm("Do you want to logout ?")

        if (isConfirmed) user.value = {}
    }

    return { user, isAuthenticated, isEmailVerified, login, logout }
})