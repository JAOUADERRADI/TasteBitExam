import { ref } from 'vue';
import { useRouter } from '#app';
import { useSupabaseClient } from '#build/imports';

export const useAuthService = () => {
    const client = useSupabaseClient();
    const router = useRouter();

    const email = ref('');
    const password = ref('');
    const confirmPassword = ref('');
    const errorMsg = ref(null);
    const successMsg = ref(null);
    
}