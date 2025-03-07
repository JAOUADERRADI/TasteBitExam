<script setup>
definePageMeta({
  title: 'Delete Profile | TasteBit',
  description: 'Confirm the deletion of your profile. This action is irreversible.',
  middleware: 'guest-middleware',
});
import { useProfileService } from '@/services/api/profileService';

const router = useRouter();
const { deleteProfile, errorMsg, successMsg } = useProfileService();

const confirmDelete = async () => {
  await deleteProfile();
  if (!errorMsg.value) {
    router.push('/');
  }
};

const cancel = () => {
  router.push('/profile');
};
</script>

<template>
  <div class="delete-profile-page" aria-label="Delete Profile Confirmation Page">
    <h1>Delete Profile</h1>
    <p>Are you sure you want to delete your profile? This action is irreversible.</p>
    <button @click="confirmDelete" aria-label="Confirm profile deletion">Yes, delete</button>
    <button @click="cancel" aria-label="Cancel profile deletion">No, cancel</button>
    <div v-if="errorMsg" class="error-msg">{{ errorMsg }}</div>
    <div v-if="successMsg" class="success-msg">{{ successMsg }}</div>
  </div>
</template>