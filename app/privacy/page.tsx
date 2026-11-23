import type { Metadata } from 'next';
import { CONTACT_EMAIL, SITE_URL } from '@/lib/site';

export const metadata: Metadata = {
  title: 'Privacy Policy - WestLinks',
  description:
    'How WestLinks collects, uses, and protects information when you use this website.',
};

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section className="mt-9 border-t border-neutral-200 pt-7">
      <h2 className="mb-3 text-xl font-bold tracking-tight text-ink">{title}</h2>
      <div className="space-y-3 text-[15px] leading-relaxed text-neutral-600">
        {children}
      </div>
    </section>
  );
}

export default function PrivacyPage() {
  return (
    <section className="px-5 pb-24 pt-[150px] md:px-8">
      <div className="mx-auto max-w-[720px]">
        <p className="mb-3 font-mono text-[11px] font-bold uppercase tracking-[0.2em] text-gold-700">
          Legal
        </p>
        <h1 className="mb-4 text-4xl font-extrabold tracking-tight text-ink">
          Privacy Policy
        </h1>
        <p className="mb-3 text-[14px] font-semibold text-gold-700">
          Draft — review with qualified counsel before launch.
        </p>
        <p className="text-[14px] text-neutral-500">
          Last updated: November 23, 2026
        </p>

        <div className="mt-10 rounded-2xl border border-gold-100 bg-gold-50 p-5 text-[14px] leading-relaxed text-neutral-700">
          This policy explains what information {SITE_URL} collects, why we
          collect it, and the choices available to you. It applies to this
          marketing website only. Separate product terms or agreements may
          apply to WestLinks products and client engagements.
        </div>

        <Section title="1. Information we collect">
          <p>
            <strong className="text-ink">Information you provide:</strong> when
            you use the contact form, we collect your name, email address,
            company or project name, budget range, selected services, and
            message. When you request technical memos, we collect your email
            address. If live chat is enabled, we receive the messages and
            contact details you choose to share in chat.
          </p>
          <p>
            <strong className="text-ink">Technical information:</strong> our
            hosting provider, Cloudflare, may process standard request data
            such as your IP address, browser type, referring page, and timestamps
            to deliver and secure the site. We do not use advertising trackers
            on this site.
          </p>
          <p>
            <strong className="text-ink">Fonts:</strong> this site loads Inter
            and JetBrains Mono from Google Fonts. Your browser connects to Google
            to fetch those files, which may disclose technical request data to
            Google under its own privacy policy.
          </p>
        </Section>

        <Section title="2. How we use information">
          <p>
            We use the information described above to respond to inquiries,
            send requested technical memos, operate and secure the website,
            diagnose problems, and comply with applicable law. We do not sell
            your personal information.
          </p>
        </Section>

        <Section title="3. Service providers">
          <p>
            We rely on service providers to run this site, including Cloudflare
            for hosting and security, our email or form provider for inbound
            messages, Google Fonts for typography, and — if enabled — Crisp for
            live chat. These providers process information only to perform their
            services for us or as required by law.
          </p>
        </Section>

        <Section title="4. Retention">
          <p>
            We keep information only as long as needed for the purpose it was
            collected: for example, to maintain a conversation, deliver a
            requested memo, or meet legal and security obligations. We then
            delete or anonymize it where appropriate.
          </p>
        </Section>

        <Section title="5. Your choices and rights">
          <p>
            You may ask us to access, correct, export, or delete the personal
            information you provided through this site. You can also stop
            receiving memos by using the unsubscribe link in any message or by
            contacting us. Depending on where you live, you may have additional
            rights under applicable privacy law.
          </p>
          <p>
            To make a request, email{' '}
            <a
              href={`mailto:${CONTACT_EMAIL}`}
              className="font-semibold text-gold-700 underline"
            >
              {CONTACT_EMAIL}
            </a>
            . We may need to verify your request before acting on it.
          </p>
        </Section>

        <Section title="6. Security">
          <p>
            We use reasonable technical and organizational measures to protect
            information. No method of transmission or storage is completely
            secure, so we cannot guarantee absolute security.
          </p>
        </Section>

        <Section title="7. Children">
          <p>
            This website is not directed to children, and we do not knowingly
            collect personal information from children. If you believe a child
            has provided information through this site, contact us so we can
            remove it.
          </p>
        </Section>

        <Section title="8. Changes">
          <p>
            We may update this policy as the site or our practices change. The
            “Last updated” date above shows the most recent version. Material
            changes will be posted on this page.
          </p>
        </Section>

        <Section title="9. Contact">
          <p>
            Questions about this policy can be sent to{' '}
            <a
              href={`mailto:${CONTACT_EMAIL}`}
              className="font-semibold text-gold-700 underline"
            >
              {CONTACT_EMAIL}
            </a>
            .
          </p>
        </Section>
      </div>
    </section>
  );
}
