import { CardGrid, CTA, PageHeader, Section, TextBlock } from "@farrer/shared-ui";

export const metadata = {
  title: "Fees | The Farrer Therapy Group"
};

export default function FeesPage() {
  return (
    <main>
      <PageHeader
        theme="farrer"
        eyebrow="Fees"
        title="Fees and appointments"
        text="Online therapy only for adults across the UK. Please contact Cally for current fee and availability information."
      />
      <Section title="Practical details">
        <CardGrid
          columns={2}
          items={[
            { title: "Online therapy", text: "Appointments take place online, so you can attend from a quiet and private space." },
            { title: "Fees", text: "Current fees, payment arrangements and cancellation terms are provided before therapy begins." }
          ]}
        />
      </Section>
      <Section title="Getting started" tone="soft">
        <TextBlock>
          <p>
            The first contact is used to understand what you are looking for and whether Cally's online therapy service is likely to be a helpful fit.
          </p>
        </TextBlock>
      </Section>
      <CTA theme="farrer" title="Ask about fees" href="/contact" label="Contact Cally" />
    </main>
  );
}
