<template>
  <div>
    <SkillsHeading />
    <div class="flex flex-col space-y-3 mt-5">
      <div
        class="flex space-x-0 sm:space-x-3 space-y-3 sm:space-y-0 flex-col sm:flex-row"
      >
        <SkillsCard
          class="flex-1"
          skill="Frontend"
          description="JavaScript, Vue, Tailwind"
        >
          <template v-slot:icon>
            <IconWrapper class="text-gray-50">
              <LinkedIn />
            </IconWrapper>
          </template>
        </SkillsCard>
        <SkillsCard class="flex-1" skill="Backend" description="Django, PHP">
          <template v-slot:icon>
            <IconWrapper class="text-gray-50">
              <LinkedIn />
            </IconWrapper>
          </template>
        </SkillsCard>
        <SkillsCard
          class="flex-1"
          skill="DevOps"
          description="AWS, Git, Docker"
        >
          <template v-slot:icon>
            <IconWrapper class="text-gray-50">
              <LinkedIn />
            </IconWrapper>
          </template>
        </SkillsCard>
      </div>
      <div
        class="flex space-x-0 sm:space-x-3 space-y-3 sm:space-y-0 flex-col sm:flex-row"
      >
        <SkillsCard class="flex-1" skill="Database" description="SQL, Postgres">
          <template v-slot:icon>
            <IconWrapper class="text-gray-50">
              <LinkedIn />
            </IconWrapper>
          </template>
        </SkillsCard>
        <SkillsCard
          class="flex-1"
          skill="API Design"
          description="REST, JWT, Serverless"
        >
          <template v-slot:icon>
            <IconWrapper class="text-gray-50">
              <LinkedIn />
            </IconWrapper>
          </template>
        </SkillsCard>
        <SkillsCard
          class="flex-1"
          skill="Machine Learning"
          description="Python, scikit-learn"
        >
          <template v-slot:icon>
            <IconWrapper class="text-gray-50">
              <LinkedIn />
            </IconWrapper>
          </template>
        </SkillsCard>
      </div>
    </div>
  </div>
</template>
