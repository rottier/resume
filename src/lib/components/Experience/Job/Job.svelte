<script lang="ts">
  import { JobLocation } from ".";
  import { fly } from "svelte/transition";
  import { inview } from "svelte-inview";
  import { toValidYear } from "../../../helpers";

  export let companyName = "Name of the Company";
  export let companyLocation = "Location of the Company, Country";
  export let companyWebsite = "";
  export let roles: string[] = [
    "Role Name 1",
    "Role Name 2",
    "Role Name 3",
    "Role Name 4",
  ];
  export let techStack: string[] = [
    "Svelte",
    "Tailwind",
    "Svelte",
    "Tailwind",
    "Svelte",
    "Tailwind",
    "Svelte",
    "Tailwind",
    "Svelte",
    "Tailwind",
  ];
  export let jobDescription: string =
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus accumsan ut est eu vestibulum. Donec eget odio sagittis, lacinia ligula ac, congue purus. Etiam eu mattis mi. Sed eget vestibulum quam. Etiam dictum blandit quam, rutrum varius ante. Integer egestas fermentum varius. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Sed ex ante, consectetur eu justo in, finibus gravida augue. Maecenas sit amet nunc quam. Fusce vel volutpat nisi, sit amet finibus quam. Nunc ac felis sapien. Maecenas ut purus dapibus, volutpat quam nec, tempor massa. Vestibulum consectetur nisi vitae sodales sollicitudin.";
  export let jobLocation: JobLocation = JobLocation.OnSite;
  export let yearStart = 2020;
  export let yearEnd = 0;

  let yStart: string, yEnd: string;
  $: {
    yStart = toValidYear(yearStart);
    yEnd = yearEnd ? toValidYear(yearEnd) : "";
  }

  let isRolesInView = false;
</script>

<section
  class="break-inside-avoid overflow-hidden border border-slate-500 border-opacity-20 p-3 rounded-xl space-y-1"
>
  <div class="flex flex-col gap-2 items-center">
    <div class="w-full">
      <div class="flex flex-col-reverse sm:flex-row gap-2 items-center">
        <span
          class="font-bold text-l text-center sm:text-left w-fit text-slate-700"
        >
          {#if companyWebsite}
            <a
              class="hover:text-slate-600"
              href={companyWebsite}
              target="_blank">{companyName}</a
            >
          {:else}
            {companyName}
          {/if}
        </span>
        <span class="badge badge-outline text-nowrap text-slate-500"
          >{jobLocation}</span
        >
        <div class="text-sm tabular-nums text-gray-500 ml-auto">
          <time datetime={yStart}>{yStart}</time> -
          <time datetime={yEnd || String(new Date().getFullYear())}
            >{yEnd || "now"}</time
          >
        </div>
      </div>
      {#if companyLocation}
        <h2 class="text-sm text-slate-600 text-center sm:text-left">
          {companyLocation}
        </h2>
      {/if}
    </div>
  </div>
  <ul
    class="list-none overflow-hidden wrapped-list text-center sm:text-left"
    use:inview
    on:inview_change={(event) => {
      const { inView } = event.detail;
      isRolesInView = inView;
    }}
  >
    {#if isRolesInView}
      {#each roles as role, i}
        <li
          class="text-xs inline-block font-mono uppercase text-slate-500 {i !==
          roles.length - 1
            ? 'opacity-60'
            : ''}"
          in:fly|global={{
            x: -100,
            opacity: 0,
            duration: 500,
            delay: i * 100,
          }}
        >
          {role}
        </li>
      {/each}
    {:else}
      {#each roles as role}
        <li
          class="invisible print:visible text-xs inline-block font-mono uppercase text-slate-500"
        >
          {role}
        </li>
      {/each}
    {/if}
  </ul>
  <p class="text-slate-500 text-sm text-ellipsis">{jobDescription}</p>
  {#if techStack.length > 0}
    <div class="pt-2 gap-2 flex flex-wrap justify-center">
      {#each techStack as tech}
        <span
          class="badge badge-sm badge-ghost text-slate-500 font-mono text-xs hover:badge-neutral h-fit text-center"
        >
          {tech}
        </span>
      {/each}
    </div>
  {/if}
</section>

<style>
  .wrapped-list li + li::before {
    content: "\00a0→\00a0";
    opacity: 60% !important;
  }
</style>
