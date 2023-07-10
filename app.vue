<!-- <template>
  <div>
    <NuxtWelcome />
  </div>
</template> -->

<script setup>
const { data } = await useFetch('/api/hello')
console.log(data)
</script>

<template>
  <div>
    <p>Result of <code>/api/hello</code>:</p>
    <pre>{{ data }}</pre>
  </div>
</template>
