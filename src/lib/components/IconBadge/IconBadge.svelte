<script lang="ts">
  import { Bolt } from "@steeze-ui/heroicons";
  import type { IconSource } from "@steeze-ui/svelte-icon";
  import { Icon } from "@steeze-ui/svelte-icon";
  import CharacterArray from "../CharacterArray/CharacterArray.svelte";

  export let label = "Label";
  export let icon: IconSource = Bolt;
  export let href = "";

  const badgeClass =
    "badge badge-neutral rounded-md gap-2 font-mono h-fit sm:h-6 text-white font-regular text-xs sm:text-nowrap justify-start sm:justify-center w-full sm:w-fit";
  const iconClass = "text-white w-4 h-4";

  function obf(text: string): string {
    return text
      .split("")
      .map((char) => `&#${char.charCodeAt(0)};`)
      .join("");
  }

  function deobf(encoded: string): string {
    const textarea = document.createElement("textarea");
    textarea.innerHTML = encoded;
    return textarea.value;
  }

  const getObfuscated = (() => {
    let _decodedHref = href;
    let _decodedLabel = label;

    return {
      get encodedHref() {
        return obf(_decodedHref);
      },
      get encodedLabel() {
        return obf(_decodedLabel);
      }
    };
  })();
</script>

{#if href}
  <a
    href="#"
    on:click={(e) => {
      e.preventDefault();
      const decodedHref = deobf(getObfuscated.encodedHref);
      window.location.href = decodedHref;
    }}
    target="_blank"
    class={badgeClass}
  >
    <Icon src={icon} theme="solid" class={iconClass} />
    <CharacterArray text={label}></CharacterArray>
  </a>
{:else}
  <div class={badgeClass}>
    <Icon src={icon} theme="solid" class={iconClass} />
    <CharacterArray text={label}></CharacterArray>
  </div>
{/if}
