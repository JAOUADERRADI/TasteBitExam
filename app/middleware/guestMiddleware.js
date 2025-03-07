/**
 * Middleware de protection de route.
 *
 * Ce middleware vérifie si l'utilisateur est connecté via Supabase.
 * Si l'utilisateur n'est pas connecté, il est redirigé vers la page de connexion.
 *
 * @function
 * @name defineNuxtRouteMiddleware
 * @returns {void} Redirige l'utilisateur non connecté vers "/auth/login".
 */
export default defineNuxtRouteMiddleware(() => {
    const user = useSupabaseUser();

    if (!user.value) {
        return navigateTo("/auth/login");
    }
});