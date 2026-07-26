import { CardGrid, CrisisDisclaimer, CTA, FeatureBand, Hero, ProcessSteps, Section, StatementPanel, TextBlock } from "@farrer/shared-ui";

export default function HomePage() {
  return (
    <main>
      <Hero
        theme="farrer"
        eyebrow="Private online psychotherapy and CBT for adults across the UK"
        title="Evidence-based CBT for the difficulties that can make everyday life feel smaller"
        text="Warm, structured online therapy for a wide range of emotional and psychological difficulties, including anxiety, depression, OCD, trauma, panic, phobias, stress, low self-esteem and unhelpful patterns that feel hard to change alone."
        primary={{ href: "/contact", label: "Book a free consultation" }}
        secondary={{ href: "/services", label: "Explore services" }}
        highlights={[
          { title: "BABCP-accredited", text: "Evidence-based therapy with a senior clinical frame." },
          { title: "Online across the UK", text: "Therapy from a private space that works for you." },
          { title: "Warm and structured", text: "Enough depth to understand, enough focus to change." }
        ]}
      />

      <Section
        title="CBT support shaped around you"
        intro="People rarely fit neatly into a single label. Therapy begins by understanding your experiences, the patterns keeping difficulties going and what meaningful change would look like for you."
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
          text="The work is careful, confidential and human. You are met as a whole person, not as a diagnosis or a problem to be fixed quickly."
        />
      </Section>

      <FeatureBand
        theme="farrer"
        eyebrow="The therapy experience"
        title="Thoughtful, evidence-based therapy with depth, clarity and care"
        text="The work brings together clinical expertise, emotional steadiness and practical planning so sessions feel purposeful without feeling rushed."
        items={[
          { kicker: "Understand", title: "Make sense of the pattern", text: "We explore the thoughts, emotions, behaviours, relationships and body responses that may be keeping distress going." },
          { kicker: "Change", title: "Develop practical ways forward", text: "Together, we test new responses and build skills that can be used beyond the therapy room." },
          { kicker: "Sustain", title: "Create lasting progress", text: "Regular reviews help therapy stay focused on changes that matter in your everyday life." }
        ]}
      />

      <Section
        title="Difficulties CBT can support"
        intro="CBT is used for a broad range of difficulties. The examples below are not exhaustive, and support is always based on an individual assessment rather than a label alone."
        tone="soft"
      >
        <CardGrid
          items={[
            {
              title: "Anxiety and persistent worry",
              text: "Generalised anxiety, overthinking, social anxiety, health anxiety, uncertainty and the exhaustion of constantly feeling on edge."
            },
            {
              title: "Panic, fears and phobias",
              text: "Panic attacks, agoraphobia, specific phobias, avoidance and fear that has begun to restrict daily life."
            },
            {
              title: "OCD and intrusive thoughts",
              text: "Distressing intrusive thoughts, checking, reassurance seeking, rituals and other compulsive patterns that feel difficult to resist."
            },
            {
              title: "Depression and low mood",
              text: "Low mood, hopelessness, withdrawal, loss of motivation, self-criticism and difficulty reconnecting with life."
            },
            {
              title: "Trauma and difficult experiences",
              text: "Post-traumatic stress, painful memories, heightened threat responses, shame and experiences that remain emotionally unresolved."
            },
            {
              title: "Stress, burnout and life changes",
              text: "Work stress, emotional exhaustion, grief, relationship difficulties, major transitions and the pressure of holding too much for too long."
            },
            {
              title: "Self-esteem and perfectionism",
              text: "Harsh self-judgement, people pleasing, impossible standards, fear of failure and patterns of never feeling good enough."
            },
            {
              title: "Sleep and everyday wellbeing",
              text: "Insomnia, disrupted routines, unhelpful coping cycles and emotional difficulties affecting day-to-day wellbeing."
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
