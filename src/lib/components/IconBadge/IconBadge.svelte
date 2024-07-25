<script lang="ts">
  import { Bolt } from "@steeze-ui/heroicons";
  import type { IconSource } from "@steeze-ui/svelte-icon";
  import { Icon } from "@steeze-ui/svelte-icon";

  export let label = "Label";
  export let icon: IconSource = Bolt;
  export let href = "";
  const badgeClass = "badge badge-neutral gap-2 font-mono h-6 text-white font-regular text-xs text-nowrap";
  const iconClass = "text-white w-4 h-4";
</script>

{#if href}
  <a
    href={href}
    target="_blank"
    class={badgeClass}
  >
    <Icon src={icon} theme="solid" class={iconClass} />
    {label}</a
  >
{:else}
  <div
    class={badgeClass}
  >
    <Icon src={icon} theme="solid" class={iconClass} />
    {label}
  </div>
{/if}
