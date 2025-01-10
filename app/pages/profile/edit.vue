<script setup>
definePageMeta({
  title: 'Edit Profile | TasteBit',
  description: 'Update your profile information, email, or password.',
  middleware: 'auth',
});

import { useProfileService } from '@/services/api/profileService';
import { useAuthUpdateService } from '@/services/api/authUpdateService';

const { profile, fetchProfile, updateProfile, errorMsg: profileErrorMsg, successMsg: profileSuccessMsg } = useProfileService();
const { updateEmail, updatePassword, errorMsg: authErrorMsg, successMsg: authSuccessMsg } = useAuthUpdateService();

const form = ref({
  first_name: '',
  last_name: '',
  bio: '',
});

const authForm = ref({
  email: '',
  old_password: '',
  new_password: '',
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

const submitEmailForm = async () => {
  console.log("Email to be updated:", authForm.value.email);
  await updateEmail(authForm.value.email);
};

const submitPasswordForm = async () => {
  await updatePassword(authForm.value.old_password, authForm.value.new_password);
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
      <button type="submit" aria-label="Update profile information">Update Profile</button>
    </form>

    <div v-if="profileErrorMsg" class="error-msg">{{ profileErrorMsg }}</div>
    <div v-if="profileSuccessMsg" class="success-msg">{{ profileSuccessMsg }}</div>

    <!-- Formulaire pour l'email -->
    <h2>Update Email</h2>
    <form @submit.prevent="submitEmailForm" aria-label="Update Email Form">
      <div>
        <label for="email">New Email</label>
        <input id="email" v-model="authForm.email" type="email" required aria-label="Enter your new email address" placeholder="example@example.com"/>
      </div>
      <button type="submit" aria-label="Update email address">Update Email</button>
    </form>

    <!-- Formulaire pour le mot de passe -->
    <h2>Update Password</h2>
    <form @submit.prevent="submitPasswordForm" aria-label="Update Password Form">
      <div>
        <label for="old_password">Old Password</label>
        <input id="old_password" v-model="authForm.old_password" type="password" required aria-label="Enter your current password" placeholder="Current password"/>
      </div>
      <div>
        <label for="new_password">New Password</label>
        <input id="new_password" v-model="authForm.new_password" type="password" required aria-label="Enter your new password" placeholder="New password"/>
      </div>
      <button type="submit" aria-label="Update password">Update Password</button>
    </form>

    <div v-if="authErrorMsg" class="error-msg">{{ authErrorMsg }}</div>
    <div v-if="authSuccessMsg" class="success-msg">{{ authSuccessMsg }}</div>
  </div>
</template>

<style scoped>
.edit-profile-page {
  padding: var(--spacing-lg) var(--spacing-md);
  max-width: 600px;
  margin: auto;
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
