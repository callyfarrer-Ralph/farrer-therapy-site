import { CardGrid, CrisisDisclaimer, CTA, FeatureBand, Hero, ProcessSteps, Section, StatementPanel, TextBlock } from "@farrer/shared-ui";

export default function HomePage() {
  return (
    <main>
      <Hero
        theme="farrer"
        eyebrow="Private online psychotherapy and CBT for adults across the UK"
        title="Warm, evidence-based therapy with depth, clarity and professionalism"
        text="A carefully held online therapy service for adults navigating anxiety, depression, burnout, trauma, stress, relationship difficulties and the emotional weight of everyday life."
        primary={{ href: "/contact", label: "Book a free consultation" }}
        secondary={{ href: "/services", label: "Explore services" }}
        highlights={[
          { title: "BABCP-accredited", text: "Evidence-based therapy with a senior clinical frame." },
          { title: "Online across the UK", text: "Therapy from a private space that works for you." },
          { title: "Warm and structured", text: "Enough depth to understand, enough focus to change." }
        ]}
      />

      <Section
        title="A calm, professional space to understand what is happening"
        intro="Therapy is not simply about symptom reduction. It is about understanding patterns, rebuilding stability, strengthening emotional resilience and creating a life that feels more manageable, connected and meaningful."
      >
        <TextBlock>
          <p>
            The Farrer Therapy Group provides online therapy for adults across the UK with Cally Farrer, BABCP-accredited Psychotherapist and Director of The Farrer Therapy Group.
          </p>
          <p>
            Sessions combine evidence-based CBT with warmth, collaboration and psychological depth. The work remains practical and structured, while also making space for history, relationships, identity, nervous system responses and the wider pressures shaping your life.
          </p>
        </TextBlock>
        <StatementPanel
          theme="farrer"
          title="Therapeutic promise"
          text="The work is careful, confidential and human. You are met as a whole person, not as a problem to be fixed quickly."
        />
      </Section>

      <FeatureBand
        theme="farrer"
        eyebrow="The therapy experience"
        title="A premium online therapy service with depth, clarity and care"
        text="The work brings together clinical expertise, emotional steadiness and practical planning so sessions feel purposeful without feeling rushed."
        items={[
          { kicker: "Depth", title: "Understand the pattern", text: "We look beneath symptoms to the beliefs, histories, relationships and body responses that keep distress alive." },
          { kicker: "Clarity", title: "Know what you are working on", text: "Therapy includes shared goals, regular reviews and a clear sense of direction." },
          { kicker: "Care", title: "Move at a humane pace", text: "The process is collaborative and respectful, especially where shame, trauma or overwhelm are present." }
        ]}
      />

      <Section title="Areas therapy can support" tone="soft">
        <CardGrid
          items={[
            {
              title: "Anxiety and overwhelm",
              text: "Persistent worry, panic, social anxiety, overthinking, emotional overwhelm and the exhaustion of constantly feeling on edge."
            },
            {
              title: "Depression and burnout",
              text: "Low mood, self-criticism, emotional exhaustion, loss of motivation, hopelessness and difficulty reconnecting with yourself."
            },
            {
              title: "Trauma, stress and life patterns",
              text: "Trauma-related symptoms, relationship difficulties, attachment patterns, grief, life transitions and experiences that still feel emotionally unresolved."
            }
          ]}
        />
      </Section>

      <Section title="A more thoughtful online therapy experience">
        <ProcessSteps
          steps={[
            { title: "Enquire", text: "Email or phone to ask about current availability and what you are hoping for." },
            { title: "Assess fit", text: "Cally will consider your needs, risk and whether online therapy is appropriate." },
            { title: "Begin therapy", text: "Sessions establish goals, context and a therapeutic plan that feels useful." },
            { title: "Review", text: "Progress is reviewed so therapy remains relevant, grounded and effective." }
          ]}
        />
        <CardGrid
          columns={2}
          items={[
            "Secure online sessions anywhere in the UK with a calm, confidential and professionally held structure.",
            "Evidence-based CBT informed by compassion-focused, trauma-informed and relational approaches where appropriate.",
            "A warm, grounded therapeutic style that balances emotional understanding with practical change.",
            "Clear goals, regular reviews and therapy paced carefully around your needs, capacity and circumstances."
          ]}
        />
      </Section>

      <Section title="What the process looks like" tone="white">
        <CardGrid
          columns={2}
          items={[
            "A free 15-minute consultation to discuss what has been happening and whether therapy feels like the right next step.",
            "An initial assessment session exploring your history, current difficulties, goals and what you want from therapy.",
            "Regular 50-minute online sessions with clear therapeutic focus, reflection and practical between-session work where helpful.",
            "Support aimed at long-term resilience, emotional understanding and independence rather than ongoing dependency on therapy."
          ]}
        />
        <CrisisDisclaimer />
      </Section>

      <Section title="Professional, human and non-judgemental" tone="soft">
        <TextBlock>
          <p>
            Many clients arrive feeling exhausted from holding everything together alone. Therapy offers a confidential space to slow down, understand what is happening more clearly and begin responding differently to yourself and your life.
          </p>
          <p>
            The aim is not perfection. It is greater clarity, steadiness, self-awareness and the ability to move through life with more confidence, flexibility and self-trust.
          </p>
        </TextBlock>
      </Section>

      <CTA
        theme="farrer"
        title="Start with a confidential enquiry"
        text="Book a free 15-minute consultation to discuss current difficulties, ask questions and explore whether therapy with Cally Farrer is the right fit."
        href="/contact"
        label="Book a free consultation"
      />
    </main>
  );
}
