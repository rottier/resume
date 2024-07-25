<script lang="ts">
  export let skillSetName = "Skills";
  export let skills: string[] = [];
</script>

<section
  class="break-inside-avoid overflow-hidden border border-slate-500 border-opacity-20 p-3 rounded-xl space-y-1"
>
  <h3 class="font-bold text-l text-center text-slate-700">
    {skillSetName}
  </h3>
  {#if skills.length > 0}
    <div class="pt-2 gap-2 flex flex-wrap justify-center">
      {#each skills as tech}
        <span
          class="badge badge-sm badge-ghost text-slate-500 font-mono text-xs hover:badge-neutral h-fit text-center"
        >
          {tech}
        </span>
      {/each}
    </div>
  {/if}
</section>
