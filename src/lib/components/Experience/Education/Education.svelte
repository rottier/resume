<script lang="ts">
  import { toValidYear } from "../../../helpers";

  export let schoolName = "Name of the School";
  export let schoolLocation = "Location of the School, Country";
  export let schoolWebsite = "";
  export let degree = "Degree";
  export let degreeDescription: string =
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus accumsan ut est eu vestibulum. Donec eget odio sagittis, lacinia ligula ac, congue purus. Etiam eu mattis mi. Sed eget vestibulum quam. Etiam dictum blandit quam, rutrum varius ante. Integer egestas fermentum varius. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Sed ex ante, consectetur eu justo in, finibus gravida augue. Maecenas sit amet nunc quam. Fusce vel volutpat nisi, sit amet finibus quam. Nunc ac felis sapien. Maecenas ut purus dapibus, volutpat quam nec, tempor massa. Vestibulum consectetur nisi vitae sodales sollicitudin.";
  export let yearStart = 2020;
  export let yearEnd = 0;

  let yStart: string, yEnd: string;
  $: {
    yStart = toValidYear(yearStart);
    yEnd = yearEnd ? toValidYear(yearEnd) : "";
  }
</script>

<section
  class="break-inside-avoid overflow-hidden border border-slate-500 border-opacity-20 p-3 rounded-xl space-y-1"
>
  <div class="flex flex-col gap-2 items-center">
    <div class="w-full">
      <div class="flex flex-col-reverse sm:flex-row gap-2 items-center">
        <h3
          class="font-bold text-l text-center sm:text-left w-fit text-slate-700"
        >
          {#if schoolWebsite}
            <a class="hover:text-slate-600" href={schoolWebsite} target="_blank"
              >{schoolName}</a
            >
          {:else}
            {schoolName}
          {/if}
        </h3>
        <div class="text-sm tabular-nums text-gray-500 ml-auto">
          <time datetime={yStart}>{yStart}</time> -
          <time datetime={yEnd || String(new Date().getFullYear())}
            >{yEnd || "now"}</time
          >
        </div>
      </div>
      {#if schoolLocation}
        <h2 class="text-sm text-slate-600 text-center sm:text-left">
          {schoolLocation}
        </h2>
      {/if}
    </div>
  </div>
  <div class="text-center sm:text-left">
    <span class="text-xs inline-block font-mono text-slate-500 uppercase">
      {degree}
    </span>
  </div>
  <p class="text-slate-500 text-sm text-ellipsis">{degreeDescription}</p>
</section>
