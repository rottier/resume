<script lang="ts">
    export let width = 120;
</script>

<button class={"h-5 bg-black"} style={`width: ${width}px`}>
    <slot />
</button>