import { CardGrid, CTA, PageHeader, Section } from "@farrer/shared-ui";

export const metadata = {
  title: "FAQ | The Farrer Therapy Group"
};

export default function FAQPage() {
  return (
    <main>
      <PageHeader
        theme="farrer"
        eyebrow="FAQ"
        title="Frequently asked questions"
        text="Answers to common questions about working with The Farrer Therapy Group online."
      />
      <Section>
        <CardGrid
          items={[
            { title: "Is therapy online only?", text: "Yes. The service is online only for adults across the UK." },
            { title: "Who will I work with?", text: "You will contact Cally Farrer, BABCP-accredited Psychotherapist and Director of The Farrer Therapy Group." },
            { title: "What issues can I bring?", text: "Anxiety, depression, trauma-related difficulties, OCD, stress, burnout, self-esteem and repeated life patterns." },
            { title: "Is therapy confidential?", text: "Yes, within standard professional, legal and safeguarding limits, which are explained before therapy begins." },
            { title: "Is this an emergency service?", text: "No. If you are at immediate risk, call 999, attend A&E, contact NHS 111 or call Samaritans on 116 123." },
            { title: "How do I start?", text: "Email info@farrertherapy.co.uk or phone 07599 333106 to ask about availability." }
          ]}
        />
      </Section>
      <CTA theme="farrer" title="Still have a question?" href="/contact" label="Contact Cally" />
    </main>
  );
}
