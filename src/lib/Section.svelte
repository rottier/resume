<script lang="ts">
    export let title = "";
</script>

<section>
    <h1 class="sideHeader varela">{title}</h1>
    <slot name="content"/>
</section>

<style module>

    @keyframes grow-progress {
    from { transform: scaleX(0); }
    to { transform: scaleX(1); }
    }

    section {
        overflow: hidden;
        background-color: red;
        height: 500px;
    }

    h1.sideHeader {
        position: fixed;
        top: 0;
        writing-mode: vertical-lr;
        text-orientation: upright;
        white-space: pre;
        text-transform: uppercase;

        transform-origin: 0 50%;
        animation: grow-progress auto linear;
        animation-timeline: scroll();
    }
</style>