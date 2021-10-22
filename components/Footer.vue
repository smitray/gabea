<template>
  <footer class="container mx-auto mt-6">
    <h3 class="text-5xl font-medium text-center font-cormo text-skin-secondary">Experienced and Local Attorneys Here for You</h3>
    <div class="flex mt-4 gap-x-6">
      <NuxtLink to="/" class="w-1/4">
        <img src="~/assets/images/FullLogo.png" alt="logo footer" class="w-full h-auto" />
      </NuxtLink>
      <div class="flex flex-col w-1/4 gap-y-2">
        <h5 class="text-sm uppercase">office</h5>
        <ul class="text-sm font-bold text-skin-secondary">
          <li>105 Tivoli Street</li>
          <li>Abbeville, LA</li>
          <li>337-222-8888</li>
        </ul>
      </div>
      <nav class="w-1/4 text-sm font-bold text-skin-secondary">
        <ul>
          <li>
            <NuxtLink to="/">contact</NuxtLink>
          </li>
          <li>
            <NuxtLink to="/">disclaimer</NuxtLink>
          </li>
          <li>
            <NuxtLink to="/">privacy policy</NuxtLink>
          </li>
          <li>
            <NuxtLink to="/">sitemap</NuxtLink>
          </li>
        </ul>
      </nav>
      <div class="flex flex-col w-1/4 gap-y-2">
        <h5 class="text-sm uppercase">privacy policy</h5>
        <p class="text-sm text-skin-secondary">Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima voluptatem perspiciatis optio totam, laudantium, rerum distinctio atque doloremque deleniti nostrum animi, saepe unde sint ducimus praesentium? Temporibus error et eius.</p>
      </div>
    </div>
  </footer>
</template>

<script>
  export default {}
</script>
