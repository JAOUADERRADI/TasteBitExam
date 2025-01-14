/**
 * Middleware de redirection si l'utilisateur est connecté.
 *
 * Ce middleware vérifie si l'utilisateur est déjà connecté via Supabase.
 * Si l'utilisateur est connecté, il est redirigé vers la page d'accueil.
 *
 * @function
 * @name defineNuxtRouteMiddleware
 * @returns {void} Redirige l'utilisateur connecté vers la page d'accueil.
 */
export default defineNuxtRouteMiddleware(() => {
    const user = useSupabaseUser();

    if (user.value) {
        return navigateTo("/");
    }
});
