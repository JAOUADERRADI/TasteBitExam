<script setup>
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
</script>

<template>
    <header class="header">
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

        <!-- Dark Mode Toggle -->
        <button @click="toggleDarkMode" class="mode-toggle">
            <Icon :name="mode === 'dark' ? 'fa-solid:sun' : 'fa-solid:moon'" />
        </button>

        <!-- Burger Menu Toggle -->
        <button @click="toggleMenu" class="nav-toggle">
            <Icon :name="isMenuOpen ? 'fa-solid:xmark' : 'fa-solid:bars'" />
        </button>
    </header>
</template>

<style scoped>
.header {
    position: fixed;
    top: 0;
    left: 50%;
    transform: translateX(-50%);
    width: 80%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: var(--spacing-sm) var(--spacing-lg);
    background: var(--bg-color);
    color: var(--text-color);
    transition: all 0.2s ease;
    z-index: 999;
}

.logo .link{
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

/* Responsive Design */
@media (max-width: 768px) {
    .header {
        max-width: calc(100% - 32px);
        padding: var(--spacing-sm) var(--spacing-md);
    }

    .nav ul {
        display: none;
        /* Hidden by default */
    }

    .nav ul.active {
        display: flex;
        /* Show menu when active */
        flex-direction: column;
        position: absolute;
        top: calc(var(--spacing-md) + var(--spacing-sm));
        right: var(--spacing-sm);
        background: var(--bg-color);
        box-shadow: 0 2px 10px rgba(0, 0, 0, 0.2);
        padding: var(--spacing-sm);
        border-radius: var(--spacing-xs);
        z-index: 1000;
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
