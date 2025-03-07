<script setup>
defineProps({
    id: String,
    label: String,
    modelValue: {
        type: String,
        required: true,
    },
    type: {
        type: String,
        default: 'text',
    },
    required: {
        type: Boolean,
        default: false,
    },
    placeholder: String,
});
</script>

<template>
    <div class="input-wrap">
      <label :for="id">{{ label }}</label>
      <input
        :id="id"
        class="input-field"
        :value="modelValue"
        @input="$emit('update:modelValue', $event.target.value)"
        :type="type"
        :required="required"
        :placeholder="placeholder"
      />
    </div>
  </template>

<style scoped>
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
    transition: 0.4s;
}

.input-field::placeholder {
  color: #888;
  font-style: italic;
}


label {
    font-size: 0.95rem;
    color: #bbb;
    margin-bottom: 0.5rem;
    display: block;
}

</style>