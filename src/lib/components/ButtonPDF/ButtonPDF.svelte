<script lang="ts">
  import { ArrowDownTray, Printer } from "@steeze-ui/heroicons";
  import { Icon } from "@steeze-ui/svelte-icon";
  import { pdfUrl, printFile } from "../../helpers";
  export let print = false;
  
  function downloadFile(fileName: string) {
    const anchor = document.createElement("a");
    anchor.href = fileName;
    anchor.download = "Marino Rottier - curriculum vitae.pdf";

    document.body.appendChild(anchor);
    anchor.click();
    document.body.removeChild(anchor);
  }
</script>

<button
  class="btn btn-outline btn-sm border-1 md:btn-md md:border-2 md:p-2 aspect-square p-1 text-slate-800 opacity-20 hover:opacity-100"
  on:click={() => (print ? printFile(pdfUrl) : downloadFile(pdfUrl))}
>
  <Icon src={print ? Printer : ArrowDownTray} theme="outline" /></button
>
