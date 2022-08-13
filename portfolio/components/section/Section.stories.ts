export default {
  title: 'Section',
}

let section = `
<div>
  <Section class="bg-blue-500">
    <div class="h-24 bg-red-500" />
  </Section>
</div>
`

let section_demo = `
<div>
  <Section class="bg-blue-500">
    <Navbar class="bg-red-500" />
  </Section>
  <Section class="bg-blue-500">
    <Footer class="bg-red-500" />
  </Section>
</div>
`

export const Section = () => section
export const SectionDemo = () => section_demo
