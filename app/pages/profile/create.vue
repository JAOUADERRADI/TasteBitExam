<script setup>
definePageMeta({
  middleware: 'auth',
});
import { useProfileService } from '@/services/api/profileService';

const { createProfile, errorMsg, successMsg } = useProfileService();

const form = ref({
  first_name: '',
  last_name: '',
  bio: '',
});

const submitForm = async () => {
  await createProfile(form.value);
};
</script>

<template>
  <div class="create-profile-page">
    <h1>Create a Profile</h1>
    <form @submit.prevent="submitForm">
      <div>
        <label for="first_name">First Name</label>
        <input id="first_name" v-model="form.first_name" required />
      </div>
      <div>
        <label for="last_name">Last Name</label>
        <input id="last_name" v-model="form.last_name" required />
      </div>
      <div>
        <label for="bio">Bio</label>
        <textarea id="bio" v-model="form.bio"></textarea>
      </div>
      <button type="submit">Create</button>
    </form>
    <div v-if="errorMsg" class="error-msg">{{ errorMsg }}</div>
    <div v-if="successMsg" class="success-msg">{{ successMsg }}</div>
  </div>
</template>

<style scoped>
.create-profile-page {
  padding: var(--spacing-lg) var(--spacing-md);
  max-width: 600px;
  margin: auto;
  background: var(--bg-color);
  color: var(--text-color);
  border-radius: var(--spacing-xs);
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
}

.create-profile-page h1 {
  font-size: 2rem;
  margin-bottom: var(--spacing-lg);
  color: var(--accent-color);
}

.create-profile-page form {
  display: flex;
  flex-direction: column;
  gap: var(--spacing-md);
}

.create-profile-page label {
  font-weight: bold;
  margin-bottom: var(--spacing-xs);
}

.create-profile-page input,
.create-profile-page textarea {
  width: 100%;
  padding: var(--spacing-xs);
  border: 1px solid var(--border-color);
  border-radius: var(--spacing-xs);
  font-size: 1rem;
  color: var(--text-color);
  background: var(--bg-color);
}

.create-profile-page input:focus,
.create-profile-page textarea:focus {
  outline: none;
  border-color: var(--accent-color);
  box-shadow: 0 0 5px rgba(253, 126, 20, 0.5);
}

/* Responsive Design */
@media (max-width: 768px) {

  .create-profile-page {
    padding: var(--spacing-md) var(--spacing-sm);
  }

  .create-profile-page h1 {
    font-size: 1.5rem;
  }

  .create-profile-page button {
    font-size: 0.9rem;
    padding: var(--spacing-xs) var(--spacing-sm);
  }
}

@media (min-width: 769px) {
  .create-profile-page {
    padding: var(--spacing-lg);
  }

  .create-profile-page h1 {
    font-size: 2rem;
  }

  .create-profile-page button {
    font-size: 1rem;
  }
}
</style>