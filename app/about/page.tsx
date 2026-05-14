import { CTA, PageHeader, Section, StatementPanel, TextBlock } from "@farrer/shared-ui";

export const metadata = {
  title: "About Cally Farrer | The Farrer Therapy Group"
};

export default function AboutPage() {
  return (
    <main>
      <PageHeader
        theme="farrer"
        eyebrow="About"
        title="Cally Farrer"
        text="BABCP-accredited Psychotherapist and Director of The Farrer Therapy Group."
      />
      <Section title="Therapeutic style">
        <TextBlock>
          <p>
            Cally offers online therapy for adults across the UK. Her style is warm, thoughtful and practical, supporting clients to understand their difficulties and make changes that feel realistic.
          </p>
          <p>
            Therapy is evidence-based and collaborative. It may involve CBT, trauma-informed work, compassion-focused ideas and careful attention to relationships, identity and the wider context of your life.
          </p>
        </TextBlock>
        <StatementPanel
          theme="farrer"
          title="How Cally works"
          text="Clients can expect a thoughtful balance of psychological expertise, emotional attunement and practical structure."
        />
      </Section>
      <CTA theme="farrer" title="Speak with Cally" href="/contact" label="Get in touch" />
    </main>
  );
}
