import { CardGrid, CTA, FeatureBand, PageHeader, ProcessSteps, Section, TextBlock } from "@farrer/shared-ui";

export const metadata = {
  title: "Services | The Farrer Therapy Group"
};

export default function ServicesPage() {
  return (
    <main>
      <PageHeader
        theme="farrer"
        eyebrow="Services"
        title="Online therapy for adults across the UK"
        text="A warm, structured therapy service for people seeking support with emotional distress, repeated patterns and life challenges."
      />
      <FeatureBand
        theme="farrer"
        eyebrow="Clinical approach"
        title="Therapy that is warm, evidence-based and individually held"
        text="The work is not a one-size-fits-all protocol. Cally draws from evidence-based therapies while staying close to your story, priorities and pace."
        items={[
          { kicker: "CBT", title: "Clear, practical change", text: "Identify maintaining cycles and test new responses in manageable ways." },
          { kicker: "Trauma-informed", title: "Respect for the nervous system", text: "Therapy works with threat, avoidance and overwhelm rather than pushing past them." },
          { kicker: "Compassion", title: "Less shame, more agency", text: "Self-criticism is understood as part of the pattern, not treated as a motivator." }
        ]}
      />
      <Section title="Difficulties Cally works with">
        <CardGrid
          items={[
            { title: "Anxiety and OCD", text: "Worry, panic, intrusive thoughts, checking, rumination and avoidance." },
            { title: "Depression and self-esteem", text: "Low mood, hopelessness, self-criticism, shame and loss of confidence." },
            { title: "Trauma and relationships", text: "Trauma symptoms, attachment patterns, boundaries and emotional regulation." },
            { title: "Stress and burnout", text: "Work pressure, caring roles, life transitions and nervous-system overload." },
            { title: "Neurodiversity", text: "ADHD and autism-informed therapy that adapts to your needs and context." },
            { title: "Health and identity", text: "Adjusting to change, grief, uncertainty and questions about who you are becoming." }
          ]}
        />
      </Section>
      <Section title="How therapy works" tone="soft">
        <ProcessSteps
          steps={[
            { title: "Understanding", text: "Build a shared picture of what is happening and why it has been hard to shift." },
            { title: "Direction", text: "Agree goals that are specific enough to guide therapy but flexible enough to stay human." },
            { title: "Practice", text: "Use strategies, reflection and between-session experiments to create change." },
            { title: "Integration", text: "Consolidate what helps so gains can continue beyond therapy." }
          ]}
        />
        <TextBlock>
          <p>
            Therapy may draw on CBT, compassion-focused therapy, trauma-informed practice, behavioural experiments, emotional regulation and reflective work. The approach is chosen with you, not imposed on you.
          </p>
        </TextBlock>
      </Section>
      <CTA theme="farrer" title="Explore whether therapy is the right fit" href="/contact" label="Contact Cally" />
    </main>
  );
}
