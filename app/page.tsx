import { CardGrid, CrisisDisclaimer, CTA, Hero, Section, TextBlock } from "@farrer/shared-ui";

export default function HomePage() {
  return (
    <main>
      <Hero
        theme="farrer"
        eyebrow="Online therapy only for adults across the UK"
        title="Warm, evidence-based therapy with Cally Farrer"
        text="Therapeutic, practical support for anxiety, depression, trauma, OCD, stress, low self-esteem and life patterns that feel difficult to shift."
        primary={{ href: "/contact", label: "Book a consultation" }}
        secondary={{ href: "/services", label: "Explore services" }}
      />
      <Section title="A calm place to understand what is happening">
        <TextBlock>
          <p>
            The Farrer Therapy Group offers online therapy for adults across the UK. Cally Farrer is a BABCP-accredited Psychotherapist and Director of The Farrer Therapy Group.
          </p>
          <p>
            Therapy is collaborative and grounded in evidence-based practice, with attention to your history, relationships, nervous system, values and current life demands.
          </p>
        </TextBlock>
      </Section>
      <Section title="What therapy can support" tone="soft">
        <CardGrid
          items={[
            { title: "Anxiety and worry", text: "Overthinking, panic, social anxiety, health anxiety and persistent threat scanning." },
            { title: "Depression and burnout", text: "Low mood, loss of motivation, exhaustion, self-criticism and withdrawal." },
            { title: "Trauma and stress", text: "Trauma-related symptoms, emotional overwhelm, attachment patterns and difficult life experiences." }
          ]}
        />
      </Section>
      <Section title="Online therapy, professionally held">
        <CardGrid
          columns={2}
          items={[
            "Secure online sessions for adults anywhere in the UK.",
            "A warm, professional style that balances understanding with practical change.",
            "CBT-informed, trauma-informed and compassion-focused ways of working.",
            "Clear boundaries, confidentiality and regular reviews of what is helping."
          ]}
        />
        <CrisisDisclaimer />
      </Section>
      <CTA
        theme="farrer"
        title="Start with a confidential enquiry"
        text="Email or phone Cally to ask about current availability for online therapy."
        href="/contact"
        label="Contact Cally"
      />
    </main>
  );
}
