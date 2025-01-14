<script>
definePageMeta({
  middleware: 'auth-middleware',
});
</script>

<template>
  <section class="container-form">
    <div class="box">
      <div class="inner-box">
        <div class="forms-wrap">
          <RegisterForm />
        </div>
        <div class="section-img">
          <NuxtImg src="/images/sign-up.svg" alt="Sign up illustration" />
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>

</style>
