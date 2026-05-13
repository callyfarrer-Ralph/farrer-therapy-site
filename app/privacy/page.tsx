import { PageHeader, Section, TextBlock } from "@farrer/shared-ui";

export const metadata = {
  title: "Privacy Policy | The Farrer Therapy Group"
};

export default function PrivacyPage() {
  return (
    <main>
      <PageHeader
        theme="farrer"
        eyebrow="Privacy"
        title="Privacy policy"
        text="How personal information is handled when you enquire about or attend online therapy."
      />
      <Section>
        <TextBlock>
          <p>
            The Farrer Therapy Group uses personal information to respond to enquiries, arrange appointments, provide therapy, maintain clinical records and meet professional, legal and safeguarding obligations.
          </p>
          <p>
            Information may include your name, contact details, correspondence, appointment information, relevant clinical information and billing records. Information is not sold and is only shared with consent, where required by law, or where necessary to manage serious risk.
          </p>
          <p>
            You can ask privacy questions or request access to your personal information by emailing info@farrertherapy.co.uk. Clinical records are retained in line with professional and legal requirements.
          </p>
        </TextBlock>
      </Section>
    </main>
  );
}
