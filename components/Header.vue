<template>
  <div class="w-full">
    <header class="flex max-w-6xl ml-auto text-base uppercase gap-x-6">
      <NuxtLink to="/" class="flex items-end pb-2">
        <img
          class="h-auto w-80"
          src="~/assets/images/Logotype.png"
          alt="Logo" />
      </NuxtLink>
      <div class="flex flex-col w-full gap-y-4">
        <div class="flex items-center justify-between flex-grow mt-5">
          <nav class="font-bold text-gray-700 uppercase">
            <ul class="flex items-center gap-x-3">
              <li>
                <NuxtLink to="/">Home</NuxtLink>
              </li>
              <li>
                <NuxtLink to="/">About</NuxtLink>
              </li>
              <li>
                <NuxtLink to="/">Contact</NuxtLink>
              </li>
            </ul>
          </nav>
          <nav class="px-5">
            <ul class="flex items-center gap-x-8">
              <li>
                <NuxtLink to="/">
                  <img
                    class="w-6 h-auto"
                    src="~/assets/images/Search.png"
                    alt="Facebook" />
                </NuxtLink>
              </li>
              <li>
                <NuxtLink to="/">
                  <img
                    class="w-8 h-auto"
                    src="~/assets/images/Facebook.png"
                    alt="Facebook" />
                </NuxtLink>
              </li>
            </ul>
          </nav>
        </div>
        <div class="flex flex-grow">
          <div class="flex items-center justify-between w-1/2 px-8 py-4 rounded-tl-md bg-skin-primary">
            <p class="font-extrabold text-white">practice areas</p>
            <p class="font-extrabold text-white">111-111-2222</p>
          </div>
          <div class="flex items-center justify-between w-1/2 px-8 py-4 bg-skin-secondary">
            <p class="font-extrabold text-white">real estate</p>
          </div>
        </div>
      </div>
    </header>
  </div>
</template>
<script>
  export default {}
</script>
