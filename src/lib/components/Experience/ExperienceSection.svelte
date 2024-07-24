<script lang="ts">
    import { inview } from "svelte-inview";
    import { fade, fly } from "svelte/transition";
    export let sectionName = "Experience";

    let isHeaderInView = false;
    let isSectionInView = false;
</script>

<section
    class="space-y-2 px-4"
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
        class="text-slate-800 font-extrabold text-xl pl-3"
    >
        {sectionName}
    </h2>
    <div class="flex flex-column">
        <div class="flex-none w-[calc(100%-1rem)] space-y-2">
            <slot />
        </div>
        {#if isSectionInView && !isHeaderInView}
            <h2
                class="print:hidden sticky top-4 text-slate-800 font-extrabold text-l pl-3 vertical-rl h-fit opacity-100"
                in:fade
            >
                {sectionName}
            </h2>
        {:else}
            <h2
                class="invisible print:hidden opacity-5 top-4 font-extrabold text-l pl-3 vertical-rl h-fit"
            >
                {sectionName}
            </h2>
        {/if}
    </div>
</section>
