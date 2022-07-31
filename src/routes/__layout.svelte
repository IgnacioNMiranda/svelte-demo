<script>
  import '../styles/tailwind.css'
</script>

<div class="flex flex-col h-screen">
  <header class="bg-orange-200 py-3">
    <div class="container mx-auto">
      <nav>
        <ul class="flex gap-x-4">
          <li><a href="/">Home</a></li>
        </ul>
      </nav>
    </div>
  </header>
  <main class="flex-1 bg-amber-200 py-3">
    <slot />
  </main>
  <footer class="bg-stone-400 py-3">
    <div class="container mx-auto">
      <div>
        <h4 class="font-medium text-lg">Pages</h4>
        <ul class="flex flex-col gap-y-2">
          <li><a href="/">Home</a></li>
        </ul>
      </div>
    </div>
  </footer>
</div>
