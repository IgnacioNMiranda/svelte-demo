<script lang="ts">
  export let page: Record<'slug', string>
</script>

<svelte:head>
  <title>{page.slug}</title>
</svelte:head>

<div class="container mx-auto">
  <p>Your url is <span class="font-bold">{page.slug}</span></p>
</div>
