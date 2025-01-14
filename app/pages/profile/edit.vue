<script setup>
definePageMeta({
  title: 'Edit Profile | TasteBit',
  description: 'Update your profile information, email, or password.',
  middleware: 'guest-middleware',
});

import { useProfileService } from '@/services/api/profileService';
import { useAuthUpdateService } from '@/services/api/authUpdateService';

const { profile, fetchProfile, updateProfile, errorMsg: profileErrorMsg, successMsg: profileSuccessMsg } = useProfileService();

const form = ref({
  first_name: '',
  last_name: '',
  bio: '',
});

onMounted(async () => {
  await fetchProfile();
  if (profile.value) {
    form.value.first_name = profile.value.first_name;
    form.value.last_name = profile.value.last_name;
    form.value.bio = profile.value.bio;
    authForm.value.email = profile.value.email || '';
  }
});

const submitProfileForm = async () => {
  await updateProfile(form.value);
};

</script>

<template>
  <div class="edit-profile-page" aria-label="Edit Profile Page">
    <h1>Edit Profile</h1>

    <!-- Formulaire pour le profil -->
    <form @submit.prevent="submitProfileForm" aria-label="Edit Profile Form">
      <div>
        <label for="first_name">First Name</label>
        <input id="first_name" v-model="form.first_name" required aria-label="Enter your first name" placeholder="John"/>
      </div>
      <div>
        <label for="last_name">Last Name</label>
        <input id="last_name" v-model="form.last_name" required aria-label="Enter your last name" placeholder="Doe"/>
      </div>
      <div>
        <label for="bio">Bio</label>
        <textarea id="bio" v-model="form.bio"  aria-label="Write a short bio" placeholder="Tell us something about yourself..."></textarea>
      </div>
      <Button type="submit" aria-label="Update profile information">Update Profile</Button>
      <!-- <button type="submit" aria-label="Update profile information">Update Profile</button> -->
    </form>

    <div v-if="profileErrorMsg" class="error-msg">{{ profileErrorMsg }}</div>
    <div v-if="profileSuccessMsg" class="success-msg">{{ profileSuccessMsg }}</div>
  </div>
</template>

<style scoped>
.edit-profile-page {
  padding: var(--spacing-lg) var(--spacing-md);
  max-width: 600px;
  margin: 100px auto;
  background: var(--bg-color);
  color: var(--text-color);
  border-radius: var(--spacing-xs);
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
}

.edit-profile-page h1,
.edit-profile-page h2 {
  font-size: 2rem;
  margin-bottom: var(--spacing-lg);
  color: var(--accent-color);
}

.edit-profile-page form {
  display: flex;
  flex-direction: column;
  gap: var(--spacing-md);
  margin-bottom: var(--spacing-lg);
}

.edit-profile-page label {
  font-weight: bold;
  margin-bottom: var(--spacing-xs);
}

.edit-profile-page input,
.edit-profile-page textarea {
  width: 100%;
  padding: var(--spacing-xs);
  border: 1px solid var(--border-color);
  border-radius: var(--spacing-xs);
  font-size: 1rem;
  color: var(--text-color);
  background: var(--bg-color);
}

.edit-profile-page input:focus,
.edit-profile-page textarea:focus {
  outline: none;
  border-color: var(--accent-color);
  box-shadow: 0 0 5px rgba(253, 126, 20, 0.5);
}

.error-msg {
  color: red;
  font-weight: bold;
}

.success-msg {
  color: green;
  font-weight: bold;
}
</style>
