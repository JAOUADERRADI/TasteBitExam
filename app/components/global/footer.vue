<script setup>

</script>
<template>
    <footer>
        <div class="footerContainer">
            <div class="socialIcons">
                <a href="#">
                    <Icon name="fa-brands:facebook"/>
                </a>
                <a href="#">
                    <Icon name="fa-brands:instagram" />
                </a>
                <a href="">
                    <Icon name="fa-brands:youtube" />
                </a>
            </div>
            <div class="footerNav">
                <ul>
                    <li>
                        <NuxtLink to="/" class="link">
                            Home
                        </NuxtLink>
                    </li>
                    <li>
                        <NuxtLink to="/search" class="link">
                            Recipes
                        </NuxtLink>
                    </li>
                    <li>
                        <NuxtLink to="/categories" class="link">
                            Categories
                        </NuxtLink>
                    </li>
                    <li>
                        <NuxtLink to="/about" class="link">
                            About
                        </NuxtLink>
                    </li>
                </ul>
            </div>

        </div>
        <div class="footerBottom">
            <p>Copyright &copy;2025</p>
        </div>
    </footer>
</template>

<style scoped>
footer {
    background-color: var(--bg-color);
    color: var(--text-color);
}

.footerContainer {
    width: 100%;
    padding: 70px 30px 20px;
}

.socialIcons {
    display: flex;
    justify-content: center;
}

.socialIcons a {
    width: 50px;
    height: 50px;
    text-decoration: none;
    padding: 10px;
    margin: 10px;
    border-radius: 50%;
    color: var(--accent-color);
    display: flex;
    align-items: center;
    justify-content: center;
}

.socialIcons a:hover {
    color: var(--text-color);
    background-color: var(--bg-accent-color);
    transition: 0.5s;
}

.footerNav {
    margin: 30px 0;
}

.footerNav ul {
    display: flex;
    justify-content: center;
    list-style-type: none;
}

.footerNav ul li a {
    margin: 20px;
    text-decoration: none;
    font-size: 1.3em;
    transition: 0.5s;
}

.footerNav ul li a:hover {
    opacity: 1;
}

.footerBottom {
    background-color: var(--bg-accent-color);
    padding: 20px;
    text-align: center;
}

.footerBottom p {
    color: var(--text-color);
}

@media (max-width: 700px) {
    .footerNav ul {
        flex-direction: column;
    }

    .footerNav ul li {
        width: 100%;
        text-align: center;
        margin: 10px;
    }

    .socialIcons a {
        padding: 8px;
        margin: 4px;
    }
}
</style>