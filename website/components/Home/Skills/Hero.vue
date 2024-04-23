<template>
  <div class="max-w-5xl mx-auto">
    <HomeSkillsHeading />
    <div class="grid grid-cols-2 md:grid-cols-4 gap-3 mt-3">
      <HomeSkillsCard
        class="flex-1"
        skill="Frontend"
        description="JavaScript, TypeScript, Vue, Nuxt, Tailwind CSS"
      >
        <IconsSolidWrapper class="text-gray-50">
          <IconsSolidPaintBrush />
        </IconsSolidWrapper>
      </HomeSkillsCard>
      <HomeSkillsCard
        class="flex-1"
        skill="Backend"
        description="Python, Django, Serverless, REST API"
      >
        <IconsSolidWrapper class="text-gray-50">
          <IconsSolidServerStack />
        </IconsSolidWrapper>
      </HomeSkillsCard>
      <HomeSkillsCard
        class="flex-1"
        skill="Cloud"
        description="AWS, Docker, Terraform, CI/CD, GitHub Actions"
      >
        <IconsSolidWrapper class="text-gray-50">
          <IconsSolidCloud />
        </IconsSolidWrapper>
      </HomeSkillsCard>
      <HomeSkillsCard
        class="flex-1"
        skill="Data"
        description="SQL, Postgres, Azure Data Factory, ETL Pipelines"
      >
        <IconsSolidWrapper class="text-gray-50">
          <IconsSolidDatabase />
        </IconsSolidWrapper>
      </HomeSkillsCard>
    </div>
  </div>
</template>
