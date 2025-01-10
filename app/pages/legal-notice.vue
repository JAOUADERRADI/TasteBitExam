<template>
    <div class="legal-notice" aria-label="Legal Notice Page">
        <section class="hero" aria-label="Legal Notice Introduction">
            <h1 class="title">Legal Notice</h1>
        </section>
        <section class="content" aria-label="Legal Information">
            <article class="section">
                <h2 aria-labelledby="site-publisher-title">Site Publisher</h2>
                <div>
                    <p>Company: Taste Bit</p>
                    <p>Address: 123 Food Street, Paris, France</p>
                    <p>Email: <a href="mailto:contact@tastebit.com" aria-label="Send an email to Taste Bit">contact@tastebit.com</a></p>
                    <p>Phone: <a href="tel:+33123456789" aria-label="Call Taste Bit at +33 1 23 45 67 89">+33 1 23 45 67 89</a></p>
                </div>
            </article>
            <article class="section" aria-labelledby="hosting-provider-title">
                <h2 id="hosting-provider-title">Hosting Provider</h2>
                <div>
                    <p>Provider: Hostinger</p>
                    <p>Address: 456 Web Lane, Lyon, France</p>
                    <p aria-label="Call Hostinger at +33 4 56 78 90 12">Phone: +33 4 56 78 90 12</p>
                </div>
            </article>
            <article class="section" aria-labelledby="intellectual-property-title">
                <h2 id="intellectual-property-title">Intellectual Property</h2>
                <p>
                    All content on this website (text, images, logos, etc.) is the property of Taste Bit and may not be
                    used without permission.
                </p>
            </article>
        </section>
    </div>
</template>

<style scoped>
.legal-notice {
    max-width: 80%;
    margin: auto;
}

/* Hero Section */
.hero {
    background: var(--bg-accent-color);
    text-align: center;
    padding: var(--spacing-xl) var(--spacing-lg);
    border-radius: var(--spacing-sm);
    margin-bottom: var(--spacing-lg);
}

.title {
    color: var(--accent-color);
    font-size: 2.5rem;
    margin-bottom: 1rem;
}

/* Content Sections */
.content .section {
    margin-bottom: 2rem;
}

h2 {
    color: var(--accent-color);
    font-size: 1.8rem;
    margin-bottom: 1rem;
}

p {
    font-size: 1rem;
    line-height: 1.6;
    margin-bottom: 1rem;
}

a {
    color: var(--accent-color);
    text-decoration: none;
}

a:hover {
    text-decoration: underline;
}
</style>
