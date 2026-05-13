import { ContactPanel, CrisisDisclaimer, PageHeader, Section, TextBlock } from "@farrer/shared-ui";
import { contact } from "../site";

export const metadata = {
  title: "Contact | The Farrer Therapy Group"
};

export default function ContactPage() {
  return (
    <main>
      <PageHeader
        theme="farrer"
        eyebrow="Contact"
        title="Contact Cally Farrer"
        text="Get in touch to ask about online therapy availability for adults across the UK."
      />
      <Section>
        <ContactPanel contact={contact} theme="farrer" />
        <TextBlock>
          <p>
            A short enquiry is enough to begin. Please avoid sending highly sensitive clinical details by email before an appointment has been arranged.
          </p>
        </TextBlock>
        <CrisisDisclaimer />
      </Section>
    </main>
  );
}
