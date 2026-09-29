import Link from "next/link"
import { Metadata } from "next"

export const metadata: Metadata = {
  title: "Privacy Policy | OPFBEX 2026",
  description: "Official Data Privacy Policy and compliance statement for OPFBEX 2026 under the Philippine Data Privacy Act of 2012 (RA 10173).",
}

export default function PrivacyPolicyPage() {
  return (
    <main className="min-h-screen bg-grape-950 py-16 text-white sm:py-24">
      <div className="mx-auto max-w-3xl px-5">
        <Link
          href="/"
          className="mb-8 inline-flex items-center text-sm font-semibold text-marigold transition-colors hover:text-white"
        >
          ← Back to OPFBEX Home
        </Link>

        <h1 className="font-display text-3xl font-black tracking-tight text-white sm:text-4xl">
          Data Privacy Policy
        </h1>
        <p className="mt-2 text-sm text-white/50">
          Last updated: September 2026 · Compliant with Republic Act No. 10173 (Data Privacy Act of 2012)
        </p>

        <div className="mt-10 space-y-8 text-sm leading-relaxed text-white/75">
          <section className="space-y-3">
            <h2 className="font-display text-lg font-bold text-marigold">1. Introduction &amp; Scope</h2>
            <p>
              The One Pampanga Food &amp; Beverage Expo 2026 (&ldquo;OPFBEX 2026&rdquo;), organized by <strong>Project One</strong> (Personal Information Controller) and powered by <strong>Dara Consulting</strong> as the technology and ticketing provider (Personal Information Processor), is committed to safeguarding your personal data in strict compliance with the <strong>Philippine Data Privacy Act of 2012 (RA 10173)</strong>.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="font-display text-lg font-bold text-marigold">2. Personal Data We Collect</h2>
            <p>When you register for a pass, claim a pre-registration, or submit event feedback, we collect:</p>
            <ul className="list-inside list-disc space-y-1.5 pl-2 text-white/70">
              <li><strong>Contact &amp; Identity Data:</strong> Full Name, Email Address, and Mobile Number.</li>
              <li><strong>Professional &amp; Demographic Data:</strong> Company/Organization Name, Job Title/Role, Age Bracket, and City/Province.</li>
              <li><strong>Event Participation Data:</strong> Ticket Code, Pass Type (Visitor, Exhibitor, Sponsor), intended days of attendance, purpose of visit, and gate check-in timestamps.</li>
              <li><strong>Feedback Submissions:</strong> Star ratings, category feedback, and voluntary survey responses.</li>
            </ul>
          </section>

          <section className="space-y-3">
            <h2 className="font-display text-lg font-bold text-marigold">3. Purpose of Data Processing</h2>
            <p>Your personal information is collected and processed strictly for legitimate event operations:</p>
            <ul className="list-inside list-disc space-y-1.5 pl-2 text-white/70">
              <li>Issuing your personalized QR badge and digital Express Pass.</li>
              <li>Venue admission control, safety enforcement, and physical headcounts at the SMX Convention Center Clark.</li>
              <li>Sending important event updates, digital ticket retrieval links, and schedule announcements.</li>
              <li>Aggregated, anonymized demographic analytics for post-event reporting.</li>
            </ul>
          </section>

          <section className="space-y-3">
            <h2 className="font-display text-lg font-bold text-marigold">4. Data Protection &amp; Technical Security Measures</h2>
            <p>
              We implement comprehensive security controls to protect your data against unauthorized access, scraping, accidental loss, or unlawful destruction:
            </p>
            <ul className="list-inside list-disc space-y-1.5 pl-2 text-white/70">
              <li><strong>Encrypted Transmission:</strong> All data is transmitted over HTTPS using TLS 1.3 encryption.</li>
              <li><strong>Database Row Level Security (RLS):</strong> Direct public database reads are strictly restricted. Attendees can only access their own specific ticket token, and mass scraping by bots or automated crawlers is programmatically blocked.</li>
              <li><strong>Bot Mitigation:</strong> Web crawlers and automated indexing bots are explicitly prohibited from accessing attendee records and pass portals via strict <code>robots.txt</code> directives.</li>
              <li><strong>Zero Unauthorized Sharing:</strong> We do not sell, rent, or trade your personal information to third-party advertisers.</li>
            </ul>
          </section>

          <section className="space-y-3">
            <h2 className="font-display text-lg font-bold text-marigold">5. Data Retention &amp; Disposal</h2>
            <p>
              Personal data is retained only for as long as necessary to fulfill event verification, post-event reporting, and audit requirements. After the retention period, records are securely archived or permanently deleted in accordance with the National Privacy Commission guidelines.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="font-display text-lg font-bold text-marigold">6. Your Rights as a Data Subject</h2>
            <p>Under RA 10173, you hold the following rights regarding your personal data:</p>
            <ul className="list-inside list-disc space-y-1.5 pl-2 text-white/70">
              <li><strong>Right to be Informed:</strong> To know how your personal data is collected and used.</li>
              <li><strong>Right to Access &amp; Rectify:</strong> To request a copy of your records or correct any inaccuracies.</li>
              <li><strong>Right to Erasure / Blocking:</strong> To request the deletion or removal of your details from our active database.</li>
            </ul>
          </section>

          <section className="space-y-3 border-t border-white/10 pt-6">
            <h2 className="font-display text-lg font-bold text-marigold">7. Contact the Data Protection Team</h2>
            <p>
              If you have any questions regarding this Privacy Policy, wish to exercise your data subject rights, or request the deletion of your pass records, please contact the secretariat at:
            </p>
            <div className="rounded-lg border border-white/10 bg-white/5 p-4 text-xs space-y-1.5">
              <p className="font-semibold text-white">OPFBEX 2026 Secretariat</p>
              <p className="text-white/60">Event Organizer: <span className="text-white">Project One</span></p>
              <p className="text-white/60">Technology &amp; Platform Partner: <span className="text-white">Dara Consulting</span></p>
              <p className="text-white/60">Email: <a href="mailto:opfbex2026.tickets@gmail.com" className="text-marigold underline">opfbex2026.tickets@gmail.com</a></p>
              <p className="text-white/60">Event Venue: SMX Convention Center, Clark, Pampanga</p>
            </div>
          </section>
        </div>
      </div>
    </main>
  )
}