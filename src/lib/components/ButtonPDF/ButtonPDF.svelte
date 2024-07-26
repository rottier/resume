<script lang="ts">
  import { ArrowDownTray } from "@steeze-ui/heroicons";
  import { Icon } from "@steeze-ui/svelte-icon";
  const pdfUrl = new URL('/cv.pdf?url', import.meta.url).href

  function downloadFile(fileName: string) {
    const anchor = document.createElement("a");
    anchor.href = pdfUrl;
    anchor.download = "Marino Rottier - curriculum vitae.pdf";

    document.body.appendChild(anchor);
    anchor.click();
    document.body.removeChild(anchor);
  }
</script>

<button
  class="btn btn-outline btn-sm border-1 md:btn-md md:border-2 md:p-2 aspect-square p-1 text-slate-800 opacity-25 hover:opacity-100"
  on:click={() => downloadFile(pdfUrl)}
>
  <Icon src={ArrowDownTray} theme="outline" /></button
>
