<script setup>
import { useAuthService } from '@/services/api/auth';

const { handleLogout } = useAuthService();

// Color mode management
const mode = useColorMode();

// Toggle for dark and light modes
const toggleDarkMode = () => {
    mode.value = mode.value === 'dark' ? 'light' : 'dark';
};

// State for burger menu
const isMenuOpen = ref(false);

// Toggle burger menu
const toggleMenu = () => {
    isMenuOpen.value = !isMenuOpen.value;
};

// State for dropdown menu
const isDropdownOpen = ref(false);

// Toggle dropdown menu
const toggleDropdown = () => {
    isDropdownOpen.value = !isDropdownOpen.value;
};

// Close dropdown when clicking outside
const closeDropdown = () => {
    isDropdownOpen.value = false;
};

const user = useSupabaseUser();
const isAuthenticated = computed(() => !!user.value);
</script>

<template>
    <header class="header">
        <div class="header-container">
            <!-- Logo -->
            <div class="logo">
                <NuxtLink to="/" class="link">TasteBit</NuxtLink>
            </div>

            <!-- Navigation Menu -->
            <nav class="nav">
                <ul :class="{ active: isMenuOpen }">
                    <li>
                        <NuxtLink to="/" exact-active-class="active" class="link">Home</NuxtLink>
                    </li>
                    <li>
                        <NuxtLink to="/about" exact-active-class="active" class="link">About</NuxtLink>
                    </li>
                    <li>
                        <NuxtLink to="/recipes" exact-active-class="active" class="link">Recipes</NuxtLink>
                    </li>
                    <li>
                        <NuxtLink to="/contact" exact-active-class="active" class="link">Contact</NuxtLink>
                    </li>
                </ul>
            </nav>

            <div class="container-icon">
                <!-- Dark Mode Toggle -->
                <button @click="toggleDarkMode" class="mode-toggle">
                    <Icon :name="mode === 'dark' ? 'fa-solid:sun' : 'fa-solid:moon'" />
                </button>

                <!-- Authentication -->
                <div v-if="!isAuthenticated" class="auth">
                    <NuxtLink to="/auth/login" class="login-button">Login</NuxtLink>
                </div>
                <div v-else class="profile" ref="dropdownRef">
                    <button class="profile-button" @click="toggleDropdown">
                        <Icon name="fa-solid:user" />
                    </button>
                </div>
            </div>
            <!-- Burger Menu Toggle -->
            <button @click="toggleMenu" class="nav-toggle">
                <Icon :name="isMenuOpen ? 'fa-solid:bars' : 'fa-solid:bars'" />
            </button>
        </div>
        <ul v-if="isDropdownOpen" class="dropdown">
            <li @click="handleLogout">Se déconnecter</li>
        </ul>
    </header>
</template>

<style scoped>
.header {
    position: fixed;
    top: 0;
    left: 50%;
    transform: translateX(-50%);
    width: 100%;
    z-index: 999;
    background: var(--bg-color);
}

.header-container {
    width: 80%;
    margin: auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: var(--spacing-sm) var(--spacing-lg);
    color: var(--text-color);
    transition: all 0.2s ease;
}

.logo .link {
    font-size: 1.5rem;
    font-weight: bold;
}

/* Navigation Menu */
.nav ul {
    display: flex;
    gap: var(--spacing-sm);
    list-style: none;
    padding: 0;
    margin: 0;
}

.link {
    text-decoration: none;
    color: var(--text-color);
    transition: color 0.3s ease, font-weight 0.3s;
}

.link:hover {
    text-decoration: underline;
    color: var(--accent-color);
}

/* Active Link */
.active {
    color: var(--accent-color);
    font-weight: bold;
}

/* Mode Toggle Button */
.mode-toggle {
    background: none;
    border: none;
    cursor: pointer;
    font-size: 1.5rem;
    color: var(--text-color);
    transition: color 0.3s ease;
}

.mode-toggle:hover {
    color: var(--accent-color);
}

.container-icon {
    width: 10%;
    display: flex;
    justify-content: space-around;
    align-items: center;
    position: relative;
}

/* Dropdown Menu */
.profile {
    position: relative;
}

.profile-button {
    background: none;
    border: none;
    cursor: pointer;
    font-size: 1.5rem;
    color: var(--text-color);
    transition: color 0.3s ease;
}

.profile-button:hover {
    color: var(--accent-color);
}

.dropdown {
    position: absolute;
    right: 120px;
    width: 150px;
    background: var(--bg-color);
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.2);
    padding: var(--spacing-xs);
    border-radius: var(--spacing-xs);
    list-style: none;
    margin: 0;
    z-index: 1000;
}

.dropdown li {
    padding: var(--spacing-xs);
    cursor: pointer;
    transition: background 0.3s ease, color 0.3s ease;
}

.dropdown li:hover {
    background: var(--accent-color);
    color: var(--bg-color);
}

.login-button {
    display: none;
    padding: var(--spacing-xs) var(--spacing-md);
    background-color: var(--accent-color);
    color: white;
    border: none;
    border-radius: var(--spacing-xs);
    cursor: pointer;
    text-decoration: none;
}

/* Responsive Design */
@media (max-width: 768px) {
    .header {
        width: 100%;
    }

    .header-container {
        max-width: calc(100% - 32px);
        width: 100%;
    }

    .nav ul {
        display: none;
    }

    .nav ul.active {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        position: absolute;
        top: 70px;
        right: 0;
        background: var(--bg-color);
        box-shadow: 0 2px 10px rgba(0, 0, 0, 0.2);
        padding: var(--spacing-sm);
        border-radius: var(--spacing-xs);
        z-index: 1000;
        width: 100%;
        min-height: 400px;
    }

    .link {
        margin: var(--spacing-xs) 0;
    }

    .nav-toggle {
        display: block;
        background: none;
        border: none;
        font-size: 1.5rem;
        cursor: pointer;
        color: var(--text-color);
    }

    .nav-toggle:hover {
        color: var(--accent-color);
    }

    .login-button {
        display: none;
    }
}

@media (min-width: 769px) {
    .nav ul {
        display: flex;
    }

    .nav-toggle {
        display: none;
    }
}
</style>
