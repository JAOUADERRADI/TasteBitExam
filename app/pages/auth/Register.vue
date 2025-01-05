<script setup>
import { useAuthService } from '~/services/api/auth';

// Récupération des propriétés et méthodes du service d'authentification
const {
  email,
  password,
  confirmPassword,
  errorMsg,
  successMsg,
  registerAccount,
} = useAuthService();
</script>

<template>
  <section>
    <div class="box">
      <div class="inner-box">
        <div class="forms-wrap">
          <form @submit.prevent="registerAccount">

            <header class="heading">
              <h2>Get Started</h2>
              <h6>Already have an account?</h6>
              <a href="#" class="toggle">Sign in</a>
            </header>

            <div class="input-wrap">
              <label for="email">Email:</label>
              <input id="email" class="input-field" v-model="email" type="email"
                required placeholder="Enter your email"/>
            </div>
            <div class="input-wrap">
              <label for="password">Password:</label>
              <input id="password" class="input-field" v-model="password" type="password" required placeholder="Enter your password"/>
            </div>
            <div class="input-wrap">
              <label for="confirm-password">Confirm Password:</label>
              <input id="confirm-password" class="input-field" v-model="confirmPassword" type="password" required placeholder="Confirm your password"/>
            </div>

            <button type="submit" :disabled="loading" class="sign-btn">Sign Up</button>

            <p class="text">
              Forgotten your password or you login details?
              <a href="#">Get help</a> signing in
            </p>
          </form>
        </div>
        <div class="section-img">
          <img src="../../assets/images/sign-up.svg" alt="">
        </div>
      </div>

      <p v-if="errorMsg" class="error">{{ errorMsg }}</p>
      <p v-if="successMsg" class="success">{{ successMsg }}</p>
    </div>
  </section>

</template>

<style scoped>
section {
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

form {
  max-width: 400px;
  width: 100%;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  gap: 1.5rem;
}

.heading h2 {
  font-size: 1.8rem;
  font-weight: 600;
  color: #151111;
}

.heading h6 {
  color: #bababa;
  font-weight: 400;
  font-size: 0.9rem;
  display: inline;
}

.input-wrap {
  position: relative;
}

.input-field {
  width: 100%;
  height: auto;
  background: none;
  border: 1px solid #bbb;
  outline: none;
  border-radius: 0.5rem;
  padding: 0.8rem;
  font-size: 0.95rem;
  color: #151111;
  transition: 0.4s;
}

label {
  font-size: 0.95rem;
  color: #bbb;
  margin-bottom: 0.5rem;
  display: block;
}

.sign-btn {
  display: inline-block;
  width: 100%;
  height: auto;
  padding: 0.8rem;
  background-color: var(--accent-color);
  color: var(--bg-color);
  border: none;
  cursor: pointer;
  border-radius: 0.8rem;
  font-size: 0.95rem;
  transition: 0.3s;
}

.sign-btn:hover {
  color: var(--text-color);
  background-color: var(--bg-accent-color);
}

.section-img {
  width: 100%;
  max-width: 400px;
  margin: 2rem auto 0;
}

.section-img img {
  width: 100%;
  height: auto;
  display: block;
}

.error {
  color: #e63946;
  background: #ffe8e8;
  border: 1px solid #e63946;
  padding: 0.8rem;
  border-radius: 0.5rem;
  font-size: 0.95rem;
  text-align: center;
  margin-top: 1rem;
}

.success {
  color: #2d6a4f;
  background: #e8f5e9;
  border: 1px solid #2d6a4f;
  padding: 0.8rem;
  border-radius: 0.5rem;
  font-size: 0.95rem;
  text-align: center;
  margin-top: 1rem;
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

@media (max-width: 576px) {
  .logo h4 {
    font-size: 1.2rem;
  }

  .heading h2 {
    font-size: 1.5rem;
  }

  .input-field {
    font-size: 0.85rem;
  }

  .sign-btn {
    font-size: 0.85rem;
  }
}
</style>
