<script setup>
definePageMeta({
    title: 'About Us | TasteBit',
    description: 'Learn more about Taste Bit, our mission, our story, and why we stand out in the culinary world.',
});
</script>

<template>
    <div class="about-us" aria-label="About Taste Bit">
        <section class="hero" aria-label="Introduction to Taste Bit">
            <h1 class="title">About Taste Bit</h1>
            <p class="subtitle">
                Discover the passion and dedication behind Taste Bit. We're on a mission to transform your culinary
                experiences, one bite at a time.
            </p>
        </section>

        <section class="content" aria-label="Detailed information about Taste Bit">
            <!-- Section: Our Story -->
            <article class="our-story" aria-labelledby="our-story-title" aria-describedby="our-story-summary">
                <h2 id="our-story-title">Our Story</h2>
                <div id="our-story-summary">
                    <p>
                        Taste Bit began with a simple idea: to celebrate the art of cooking and the joy of sharing
                        meals.
                        From humble beginnings in a small kitchen, we’ve grown into a community of food lovers who
                        believe
                        in the magic of every bite.
                    </p>
                    <p>
                        Whether it's experimenting with bold flavors or honoring timeless classics, Taste Bit is all
                        about
                        bringing people together around delicious, thoughtfully prepared food.
                    </p>
                </div>
            </article>

            <!-- Section: Our Mission -->
            <article class="our-mission" aria-labelledby="our-mission-title" aria-describedby="our-mission-summary">
                <h2 id="our-mission-title">Our Mission</h2>
                <div id="our-mission-summary">
                    <p>
                        At Taste Bit, our mission is to inspire and empower people to explore new culinary horizons. We
                        aim
                        to:
                    </p>
                    <ul aria-label="Mission goals of Taste Bit">
                        <li>Introduce unique recipes that excite the palate.</li>
                        <li>Promote sustainable and ethical cooking practices.</li>
                        <li>Foster a global community of food enthusiasts.</li>
                    </ul>
                    <p>
                        By focusing on quality, creativity, and inclusivity, Taste Bit is redefining how we experience
                        food
                        and connect with one another.
                    </p>
                </div>
            </article>

            <!-- Section: Why Choose Us -->
            <article class="why-choose-us" aria-labelledby="why-choose-us-title" 
            aria-describedby="why-choose-us-summary">
                <h2 id="why-choose-us-title">Why Choose Taste Bit?</h2>
                <p id="why-choose-us-summary">
                    We know there are countless food platforms out there, but Taste Bit stands out because of our
                    unwavering commitment to excellence:
                </p>
                <div class="features" aria-label="Key features of Taste Bit">
                    <article class="feature" aria-label="Innovative Recipes">
                        <h3>Innovative Recipes</h3>
                        <p>
                            From trending dishes to timeless favorites, our recipes are carefully crafted to inspire and
                            delight.
                        </p>
                    </article>
                    <article class="feature" aria-label="Community-Driven">
                        <h3>Community-Driven</h3>
                        <p>
                            We value the voices of our community and encourage collaboration, feedback, and shared
                            experiences.
                        </p>
                    </article>
                    <article class="feature" aria-label="Sustainability">
                        <h3>Sustainability</h3>
                        <p>
                            We are committed to reducing waste and promoting sustainable sourcing for every ingredient.
                        </p>
                    </article>
                </div>
            </article>
        </section>
    </div>
</template>


<style scoped>
/* Global Layout */
.about-us {
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
    margin-bottom: var(--spacing-sm);
}

.subtitle {
    font-size: 1.2rem;
    color: var(--text-color);
}

/* Content Sections */
.content>div {
    margin-bottom: var(--spacing-xl);
}

h2 {
    color: var(--accent-color);
    font-size: 2rem;
    margin-bottom: var(--spacing-sm);
}

p {
    font-size: 1rem;
    line-height: 1.6;
    margin-bottom: var(--spacing-sm);
    color: var(--text-color);
}

ul {
    list-style-type: disc;
    padding-left: var(--spacing-lg);
    margin-bottom: var(--spacing-md);
}

ul li {
    margin-bottom: var(--spacing-xs);
}

/* Features Section */
.features {
    display: flex;
    gap: var(--spacing-lg);
    flex-wrap: wrap;
    margin-top: var(--spacing-md);
}

.feature {
    flex: 1 1 30%;
    background: var(--bg-accent-color);
    padding: var(--spacing-md);
    border-radius: var(--spacing-sm);
    text-align: center;
}

.feature h3 {
    color: var(--accent-color);
    font-size: 1.5rem;
    margin-bottom: var(--spacing-xs);
}

.feature p {
    font-size: 0.95rem;
}

/* Responsive Design */
@media (max-width: 768px) {
    .about-us {
        max-width: calc( 100% - 32px);
    }

    .features {
        flex-direction: column;
        gap: var(--spacing-md);
    }

    .feature {
        flex: 1 1 100%;
    }
}

@media (max-width: 480px) {
    .title {
        font-size: 2rem;
    }

    .subtitle {
        font-size: 1rem;
    }
}
</style>