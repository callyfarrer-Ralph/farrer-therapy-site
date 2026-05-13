import { CardGrid, CTA, PageHeader, Section, TextBlock } from "@farrer/shared-ui";

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
