<template>
  <section class="container-form">
    <div class="box">
      <div class="inner-box">
        <div class="forms-wrap">
          <AuthForm />
        </div>
        <div class="section-img">
          <NuxtImg src="/images/sign-up.svg" alt="Sign up illustration" />
        </div>
      </div>
    </div>
  </section>
</template>

<style>
.container-form {
  width: 100%;
  min-height: 100vh;
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: var(--bg-accent-color);
}

.box {
  position: relative;
  width: 100%;
  max-width: 1020px;
  height: auto;
  background: var(--bg-color);
  border-radius: 3rem;
  box-shadow: 0 60px 40px -30px rgba(0, 0, 0, 0.27);
}

.inner-box {
  position: relative;
  width: calc(100% - 4.1rem);
  height: auto;
  padding: 2rem;
  display: flex;
  flex-direction: column;
  gap: 2rem;
  align-items: center;
}

.forms-wrap {
  width: 100%;
  max-width: 400px;
}

.section-img {
  width: 100%;
  max-width: 400px;
  margin: 2rem auto 0;
}

.section-img img {
  max-width: 100%;
  display: block;
}

@media (min-width: 768px) {
  .inner-box {
    flex-direction: row;
    justify-content: space-between;
    align-items: flex-start;
  }

  .forms-wrap {
    width: 50%;
  }

  .section-img {
    width: 50%;
    margin: 0;
  }
}

@media (max-width: 768px) {
  .box {
    max-width: calc(100% - 32px);
  }

  .inner-box {
    width: 100%;
    margin: auto;
  }
}
</style>
