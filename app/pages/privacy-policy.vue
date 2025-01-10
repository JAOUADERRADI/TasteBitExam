<template>
    <div class="privacy-policy"  aria-label="Privacy Policy Page">
        <section class="hero" aria-label="Privacy Policy Introduction">
            <h1 class="title">Privacy Policy</h1>
            <p class="subtitle">
                Learn how we handle your data with transparency and care.
            </p>
        </section>
        <section class="content" aria-label="Privacy Policy Details">
            <article class="section" aria-labelledby="who-we-are-title">
                <h2 id="who-we-are-title">Who We Are</h2>
                <p>
                    Taste Bit is committed to protecting your privacy. This policy explains how we collect, use, and
                    safeguard your personal data.
                </p>
            </article>
            <article class="section" aria-labelledby="data-collection-title">
                <h2 id="data-collection-title">Data Collection</h2>
                <p>
                    We collect the following information when you use our website:
                </p>
                <ul>
                    <li>Personal information (e.g., name, email) when you sign up.</li>
                    <li>Browsing data for analytics and website improvement.</li>
                </ul>
            </article>
            <article class="section" aria-labelledby="your-rights-title">
                <h2 id="your-rights-title">Your Rights</h2>
                <p>
                    Under the GDPR, you have the right to:
                </p>
                <ul aria-label="List of GDPR rights">
                    <li>Access your data.</li>
                    <li>Request correction or deletion of your data.</li>
                    <li>Withdraw consent for data processing.</li>
                </ul>
            </article>
            <article class="section" aria-labelledby="contact-us-title">
                <h2 id="contact-us-title">Contact Us</h2>
                <p>
                    For any questions regarding your data, contact us at: <a
                        href="mailto:privacy@tastebit.com" aria-label="Email Taste Bit about privacy concerns">privacy@tastebit.com</a>
                </p>
            </article>
        </section>
    </div>  
</template>

<style scoped>
/* Global Layout */
.privacy-policy {
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

.subtitle {
    font-size: 1.2rem;
    color: var(--text-color);
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

ul {
    list-style-type: disc;
    padding-left: 1.5rem;
    margin-bottom: 1rem;
}

ul li {
    margin-bottom: 0.5rem;
}

/* Responsive Design */
@media (max-width: 768px) {
    .title {
        font-size: 2rem;
    }

    .subtitle {
        font-size: 1rem;
    }
}
</style>
