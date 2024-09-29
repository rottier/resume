<script lang="ts">
  import { inview } from "svelte-inview";
  import { fade, fly } from "svelte/transition";
  export let sectionName = "Experience";

  let isHeaderInView = false;
  let isSectionInView = false;
</script>

<section
  class="w-full space-y-2 pl-3 break-inside-avoid"
  use:inview
  on:inview_change={(event) => {
    const { inView } = event.detail;
    isSectionInView = inView;
  }}
>
  <h2
    use:inview
    on:inview_change={(event) => {
      const { inView } = event.detail;
      isHeaderInView = inView;
    }}
    class="text-slate-800 font-mono font-extrabold text-3xl pl-0 sm:text-2xl sm:pl-3 uppercase text-center sm:text-left"
  >
    {` ${sectionName}`}
  </h2>
  <div class="flex flex-row">
    <div class="flex-none w-[calc(100%-1rem)] space-y-2">
      <slot />
    </div>
    <div class="h-fit print:hidden sticky top-2 w-4 basis-full">
      {#if isSectionInView && !isHeaderInView}
        <h2
          class="text-slate-800 font-extrabold font-mono text-xl pl-1 vertical-rl h-fit opacity-100 orientation-upright uppercase tracking-[-6px]"
          in:fly={{ y: "-100%" }}
          out:fade={{ duration: 150 }}
        >
          {sectionName}
        </h2>
      {/if}
    </div>
  </div>
</section>
