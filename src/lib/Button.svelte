<script lang="ts">
    export let width = 120;
</script>

<button style={`width: ${width}px`}>
    <slot />
</button>