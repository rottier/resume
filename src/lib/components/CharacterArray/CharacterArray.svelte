<script lang="ts">
    export let text: string;

    let reversedText = Array.from(text).reverse();
</script>

<div class="whitespace-pre flex flex-row-reverse">
    {#each reversedText as ch}
        <span class="char inline-block">{ch}</span>
    {/each}
</div>
