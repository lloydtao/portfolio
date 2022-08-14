<template>
  <div class="flex flex-col justify-start text-left items-start">
    <div class="flex flex-col lg:w-3/4 xl:w-2/3">
      <h1 class="text-2xl sm:text-3xl text-gray-100 uppercase font-black">
        University of Exeter
      </h1>
      <p class="text-xl text-gray-100 mt-3 sm:mt-5">
        BSc (Hons) Computer Science
      </p>
      <image-safe
        class="h-48 sm:h-64 object-cover mt-3 rounded-lg"
        src="/images/hackathon-group.jpg"
        format="webp"
      />
      <p class="text-gray-200 mt-5">Awards</p>
      <ul
        class="text-gray-200 mt-3 list-disc list-inside space-y-1.5 sm:space-y-0.5"
      >
        <li>
          <span class="italic">First place</span> - Met Office Hackathon 2020
          <span class="text-sm">
            [<a
              class="text-blue-400 underline"
              href="https://github.com/LloydTao/Hackathon-Met-Office-2020"
              >repo</a
            >]
          </span>
        </li>
        <li>
          <span class="italic">Exceptional</span> - Group Software Engineering
          Project
          <span class="text-sm">
            [<a
              class="text-blue-400 underline"
              href="https://github.com/LloydTao/ECM2434-Treasure-Hunt"
              >repo</a
            >]
          </span>
        </li>
        <li>
          <span class="italic">Exceptional</span> - Literature Review:
          "Detecting and Preventing Advanced Persistent Threats"
          <span class="text-sm">
            [<a
              class="text-blue-400 underline"
              href="/documents/detecting-and-preventing-advanced-persistent-threats.pdf"
              >pdf</a
            >]
          </span>
        </li>
      </ul>
      <p class="text-gray-200 mt-5">Guest talks</p>
      <ul
        class="text-gray-200 mt-3 list-disc list-inside space-y-1.5 sm:space-y-0.5"
      >
        <li>
          <span class="italic">Source control</span> - Successful practises for
          building and deploying software applications (20 attendees)
          <span class="text-sm">
            [<a
              class="text-blue-400 underline"
              href="/documents/2020-11-19-source-control.pdf"
              >slides</a
            >]
          </span>
        </li>
        <li>
          <span class="italic">A Recipe for Web Apps</span> - A complete stack
          for team software projects (50 attendees)
          <span class="text-sm">
            [<a
              class="text-blue-400 underline"
              href="/documents/2021-02-02-a-recipe-for-web-apps.pdf"
              >slides</a
            >]
          </span>
        </li>
      </ul>
      <p class="text-xl text-gray-100 mt-5 sm:mt-8">Exeter Computing Society</p>
      <image-safe
        class="h-48 sm:h-64 object-cover mt-3 rounded-lg"
        src="/images/computing-society.jpg"
        format="webp"
      />
      <p class="text-gray-200 mt-5">Committee</p>
      <ul
        class="text-gray-200 mt-3 list-disc list-inside space-y-1.5 sm:space-y-0.5"
      >
        <li>Social Secretary (2019-20)</li>
        <li>President (2021-22)</li>
      </ul>
    </div>
  </div>
</template>
