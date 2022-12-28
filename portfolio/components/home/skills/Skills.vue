<template>
  <div>
    <SkillsHeading />
    <div class="mt-3 grid grid-cols-2 gap-3 md:grid-cols-3 xl:grid-cols-6">
      <SkillsCard
        class="flex-1"
        skill="Frontend"
        description="JavaScript, Vue, Tailwind"
      >
        <template #icon>
          <IconWrapperSolid class="text-gray-50">
            <TemplateIcon />
          </IconWrapperSolid>
        </template>
      </SkillsCard>
      <SkillsCard class="flex-1" skill="Backend" description="Django, PHP">
        <template #icon>
          <IconWrapperSolid class="text-gray-50">
            <Server />
          </IconWrapperSolid>
        </template>
      </SkillsCard>
      <SkillsCard class="flex-1" skill="DevOps" description="AWS, Git, Docker">
        <template #icon>
          <IconWrapperSolid class="text-gray-50">
            <Cloud />
          </IconWrapperSolid>
        </template>
      </SkillsCard>
      <SkillsCard class="flex-1" skill="Database" description="SQL, Postgres">
        <template #icon>
          <IconWrapperSolid class="text-gray-50">
            <Database />
          </IconWrapperSolid>
        </template>
      </SkillsCard>
      <SkillsCard
        class="flex-1"
        skill="API Design"
        description="REST, JWT, Serverless"
      >
        <template #icon>
          <IconWrapperSolid class="text-gray-50">
            <Link />
          </IconWrapperSolid>
        </template>
      </SkillsCard>
      <SkillsCard
        class="flex-1"
        skill="Machine Learning"
        description="Python, scikit-learn"
      >
        <template #icon>
          <IconWrapperSolid class="text-gray-50">
            <Chip />
          </IconWrapperSolid>
        </template>
      </SkillsCard>
    </div>
  </div>
</template>
