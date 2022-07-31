<script lang="ts">
  import { AtButton } from '$lib/components'
  export let items: Record<'name', string>[]
  let count = 0

  const handleAdd = () => {
    count += 1
  }
  const handleSubstract = () => {
    count -= 1
  }
</script>

<svelte:head>
  <title>Home</title>
</svelte:head>

<div class="container mx-auto">
  <h1 class="text-xl">Welcome to SvelteKit</h1>
  <p>Visit <a href="https://kit.svelte.dev">kit.svelte.dev</a> to read the documentation</p>

  <div class="flex flex-col gap-y-4 border border-red-400 w-fit p-4">
    <h3>Items fetched from Server</h3>
    <hr />
    <ul>
      <!-- (item.name) is a unique id to avoid bad assignments on children-->
      {#each items as item (item.name)}
        <li class="list-disc list-inside">{item.name}</li>
      {/each}
    </ul>
  </div>

  <div class="mt-8 flex flex-col gap-y-2">
    <div class="flex gap-x-1">
      <h3>Counter:</h3>
      <span>{count}</span>
      {#if count % 2}
        <span>Odd</span>
      {:else}
        <span>Even</span>
      {/if}
    </div>
    <div>
      <AtButton onClick={handleAdd} label="Add" />
      <AtButton onClick={handleSubstract} label="Substract" />
    </div>
  </div>
</div>
