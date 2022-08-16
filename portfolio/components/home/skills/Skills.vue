<template>
  <div>
    <SkillsHeading />
    <div class="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-6 gap-3 mt-3">
      <SkillsCard
        class="flex-1"
        skill="Frontend"
        description="JavaScript, Vue, Tailwind"
      >
        <template v-slot:icon>
          <IconWrapperSolid class="text-gray-50">
            <Template />
          </IconWrapperSolid>
        </template>
      </SkillsCard>
      <SkillsCard class="flex-1" skill="Backend" description="Django, PHP">
        <template v-slot:icon>
          <IconWrapperSolid class="text-gray-50">
            <Server />
          </IconWrapperSolid>
        </template>
      </SkillsCard>
      <SkillsCard class="flex-1" skill="DevOps" description="AWS, Git, Docker">
        <template v-slot:icon>
          <IconWrapperSolid class="text-gray-50">
            <Cloud />
          </IconWrapperSolid>
        </template>
      </SkillsCard>
      <SkillsCard class="flex-1" skill="Database" description="SQL, Postgres">
        <template v-slot:icon>
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
        <template v-slot:icon>
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
        <template v-slot:icon>
          <IconWrapperSolid class="text-gray-50">
            <Chip />
          </IconWrapperSolid>
        </template>
      </SkillsCard>
    </div>
  </div>
</template>
