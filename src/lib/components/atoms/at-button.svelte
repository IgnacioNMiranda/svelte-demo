<script lang="ts">
  export let onClick: HTMLButtonElement['onclick']
  export let label: string
</script>

<button on:click={onClick} class="text-white font-bold bg-blue-500 hover:bg-blue-600 transition-colors px-2 py-1"
  >{label}</button
>
