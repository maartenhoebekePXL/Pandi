import { ref } from 'vue';

export const useAuthService = {
    isLoggedIn: ref(false),

    login() {
        this.isLoggedIn.value = true;
    },

    logout() {
        this.isLoggedIn.value = false;
    },
};