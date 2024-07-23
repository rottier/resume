<script lang="ts">
    import { JobLocation } from ".";
    import { clamp } from "lodash";

    export let companyName = "Name of the Company";
    export let companyLocation = "Location of the Company";
    export let companyWebsite = "";
    export let roles: string[] = [
        "Role Name 1",
        "Role Name 2",
        "Role Name 3",
        "Role Name 4",
    ];
    export let jobDescription: string =
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus accumsan ut est eu vestibulum. Donec eget odio sagittis, lacinia ligula ac, congue purus. Etiam eu mattis mi. Sed eget vestibulum quam. Etiam dictum blandit quam, rutrum varius ante. Integer egestas fermentum varius. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Sed ex ante, consectetur eu justo in, finibus gravida augue. Maecenas sit amet nunc quam. Fusce vel volutpat nisi, sit amet finibus quam. Nunc ac felis sapien. Maecenas ut purus dapibus, volutpat quam nec, tempor massa. Vestibulum consectetur nisi vitae sodales sollicitudin.";
    export let jobLocation: JobLocation = JobLocation.OnSite;
    export let yearStart = 2020;
    export let yearEnd = 0;
    const toValidYear = (year: number): string =>
        String(clamp(Math.round(year), 1901, new Date().getFullYear()));

    let yStart: string, yEnd: string;
    $: {
        yStart = toValidYear(yearStart);
        yEnd = yearEnd ? toValidYear(yearEnd) : "";
    }
</script>

<section class="overflow-hidden border p-3 rounded space-y-1">
    <div class="flex flex-column gap-2 items-center">
        <div class="w-full">
            <div class="flex flex-column gap-2 items-center">
                <h3 class="font-semibold text-l w-fit">
                    {#if companyWebsite}
                        <a
                            class="hover:text-blue-300"
                            href={companyWebsite}
                            target="_blank">{companyName}</a
                        >
                    {:else}
                        {companyName}
                    {/if}
                </h3>
                <span class="badge badge-accent badge-outline text-nowrap"
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
                <h2 class="text-sm">{companyLocation}</h2>
            {/if}
        </div>


    </div>
    <ul class="list-none overflow-hidden wrapped-list">
        {#each roles as role}
            <li class="text-sm font-mono inline-block">{role}</li>
        {/each}
    </ul>
    <p class="text-sm text-ellipsis">{jobDescription}</p>
</section>

<style>
    .wrapped-list li + li::before {
        content: "\00a0→\00a0";
    }
</style>
