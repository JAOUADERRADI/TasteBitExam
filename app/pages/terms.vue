<template>
    <div class="terms" aria-label="Terms of Use Page">
      <section class="hero" aria-label="Terms of Use Introduction">
        <h1 class="title">Terms of Use</h1>
      </section>
      <section class="content" aria-label="Terms and Conditions Details">
        <article class="section" aria-labelledby="introduction-title">
          <h2 id="introduction-title">Introduction</h2>
          <p>
            By accessing and using the Taste Bit website, you agree to comply with these terms and conditions.
          </p>
        </article>
        <article class="section" aria-labelledby="user-obligations-title">
          <h2 id="user-obligations-title">User Obligations</h2>
          <ul aria-label="List of user obligations">
            <li>Use the website for personal, non-commercial purposes.</li>
            <li>Do not attempt to disrupt or harm the website.</li>
          </ul>
        </article>
        <article class="section" aria-labelledby="limitation-liability-title">
          <h2 id="limitation-liability-title">Limitation of Liability</h2>
          <p>
            Taste Bit is not responsible for damages resulting from the misuse of this website.
          </p>
        </article>
      </section>
    </div>
  </template>

<style scoped>
.terms {
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
    font-size: 2.5rem;
    color: var(--accent-color);
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

ul {
    list-style-type: disc;
    padding-left: 1.5rem;
    margin-bottom: 1rem;
}

ul li {
    margin-bottom: 0.5rem;
}

@media (max-width: 768px) {
  .terms {
    max-width: calc( 100% - 32px);
  }
}
</style>
