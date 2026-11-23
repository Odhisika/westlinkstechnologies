import type { Metadata } from 'next';
import { CONTACT_EMAIL } from '@/lib/site';

export const metadata: Metadata = {
  title: 'Terms of Service - WestLinks',
  description: 'Terms governing use of the WestLinks website.',
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

export default function TermsPage() {
  return (
    <section className="px-5 pb-24 pt-[150px] md:px-8">
      <div className="mx-auto max-w-[720px]">
        <p className="mb-3 font-mono text-[11px] font-bold uppercase tracking-[0.2em] text-gold-700">
          Legal
        </p>
        <h1 className="mb-4 text-4xl font-extrabold tracking-tight text-ink">
          Terms of Service
        </h1>
        <p className="mb-3 text-[14px] font-semibold text-gold-700">
          Draft — review with qualified counsel before launch.
        </p>
        <p className="text-[14px] text-neutral-500">
          Last updated: November 23, 2026
        </p>

        <div className="mt-10 rounded-2xl border border-gold-100 bg-gold-50 p-5 text-[14px] leading-relaxed text-neutral-700">
          These terms govern your use of this website. They do not replace a
          signed statement of work, services agreement, or product license
          between WestLinks and a client. If an executed agreement conflicts
          with these terms, that agreement controls.
        </div>

        <Section title="1. Using this site">
          <p>
            You may browse and use this website for lawful purposes. You agree
            not to interfere with its operation, attempt to gain unauthorized
            access to it, or submit content that is unlawful, harmful, or
            infringing.
          </p>
        </Section>

        <Section title="2. Informational content">
          <p>
            Content on this website — including case studies, articles, pricing
            guidance, and product descriptions — is provided for general
            information. It is not professional, legal, financial, or security
            advice, and it does not create a client relationship. Product
            availability and capabilities may change.
          </p>
        </Section>

        <Section title="3. Intellectual property">
          <p>
            WestLinks and its licensors own the text, design, graphics, code,
            and other materials on this site, except where noted. You are
            granted a limited, revocable permission to view and use the site for
            your own reference. You may not copy, distribute, or create
            derivative works from it without written permission.
          </p>
        </Section>

        <Section title="4. Submissions">
          <p>
            When you send an inquiry or request, you confirm that the
            information you provide is accurate and that you have the right to
            share it. You retain ownership of your submission and grant us a
            limited license to process it to respond to you, provide requested
            information, and operate our business. Do not send confidential or
            sensitive information through the general contact form unless we
            have agreed to a confidential channel.
          </p>
        </Section>

        <Section title="5. Third-party services">
          <p>
            This site may link to or rely on third-party services, such as
            Google Fonts, Cloudflare, form and email providers, booking tools,
            or live chat. We do not control those services and are not
            responsible for their content or practices. Their terms and privacy
            policies govern your use of them.
          </p>
        </Section>

        <Section title="6. No warranties">
          <p>
            The site is provided “as is” and “as available.” We do not warrant
            that it will always be available, error-free, or complete. We
            disclaim implied warranties to the extent permitted by law.
          </p>
        </Section>

        <Section title="7. Limitation of liability">
          <p>
            To the extent permitted by law, WestLinks is not liable for indirect,
            incidental, special, or consequential damages, or for lost profits,
            data, or goodwill, arising from your use of this site. Nothing in
            these terms excludes liability that cannot lawfully be excluded.
          </p>
        </Section>

        <Section title="8. Changes to these terms">
          <p>
            We may update these terms to reflect changes to the site or our
            practices. The “Last updated” date above indicates the current
            version. Your continued use of the site after an update means you
            accept the revised terms.
          </p>
        </Section>

        <Section title="9. Contact">
          <p>
            Questions about these terms can be sent to{' '}
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
