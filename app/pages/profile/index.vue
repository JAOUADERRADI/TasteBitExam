<script setup>
definePageMeta({
  middleware: 'auth',
});
import { useProfileService } from '@/services/api/profileService';

const router = useRouter();
const { profile, fetchProfile, errorMsg, deleteProfile } = useProfileService();

const editProfile = () => router.push('/profile/edit');
const createNewProfile = () => router.push('/profile/create');

fetchProfile();
</script>

<template>
  <div class="profile-page">
    <h1>My Profile</h1>
    <div v-if="profile">
      <p><strong>First Name:</strong> {{ profile.first_name }}</p>
      <p><strong>Last Name:</strong> {{ profile.last_name }}</p>
      <p><strong>Bio:</strong> {{ profile.bio }}</p>
      <button @click="editProfile">Edit Profile</button>
      <!-- <a @click="deleteProfile">Delete Profile</a> -->
    </div>
    <div v-else class="create-profile">
      <p>Profile not found. <button @click="createNewProfile">Create Profile</button></p>
    </div>
  </div>

</template>

<style scoped>
.profile-page {
  padding: var(--spacing-lg) var(--spacing-md);
  max-width: 800px;
  margin: auto;
  text-align: center;
  background: var(--bg-color);
  color: var(--text-color);
  border-radius: var(--spacing-xs);
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
}

.profile-page h1 {
  font-size: 2rem;
  margin-bottom: var(--spacing-lg);
  color: var(--accent-color);
}

.profile-page p {
  margin-bottom: var(--spacing-sm);
  font-size: 1.1rem;
}

.profile-page strong {
  color: var(--accent-color);
}

/* Style pour message d'erreur */
.profile-page .error-msg {
  color: red;
  font-weight: bold;
  margin-bottom: var(--spacing-lg);
}

/* Style pour la création de profil */
.profile-page .create-profile {
  margin-top: var(--spacing-lg);
}

/* Responsive Design */
@media (max-width: 768px) {
  .profile-page {
    padding: var(--spacing-md) var(--spacing-sm);
  }

  .profile-page h1 {
    font-size: 1.5rem;
  }

  .profile-page p {
    font-size: 1rem;
  }

  .profile-page button {
    font-size: 0.9rem;
    padding: var(--spacing-xs) var(--spacing-sm);
  }
}

@media (min-width: 769px) {
  .profile-page {
    padding: var(--spacing-lg);
  }

  .profile-page h1 {
    font-size: 2.5rem;
  }

  .profile-page p {
    font-size: 1.2rem;
  }

  .profile-page button {
    font-size: 1rem;
  }
}
</style>