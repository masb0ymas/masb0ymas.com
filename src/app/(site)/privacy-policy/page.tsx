export default function PrivacyPolicyPage() {
  return (
    <div className="container mx-auto max-w-4xl px-4 py-8">
      <div className="prose prose-gray dark:prose-invert max-w-none">
        <h1 className="mb-8 text-4xl font-bold">Privacy Policy</h1>

        <p className="text-muted-foreground mb-8 text-lg">
          Last updated:{' '}
          {new Date().toLocaleDateString('en-US', {
            year: 'numeric',
            month: 'long',
            day: 'numeric',
          })}
        </p>

        <section className="mb-8">
          <h2 className="mb-4 text-2xl font-semibold">1. Introduction</h2>
          <p>
            This Privacy Policy describes how masb0ymas.com (&quot;we&quot;, &quot;our&quot;, or
            &quot;us&quot;) collects, uses, and protects your information when you visit our
            website. We are committed to protecting your privacy and being transparent about our
            data practices.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="mb-4 text-2xl font-semibold">2. Information We Collect</h2>

          <h3 className="mb-2 text-xl font-medium">2.1 Information You Provide</h3>
          <p>We may collect information you voluntarily provide, including:</p>
          <ul className="mt-2 list-disc pl-6">
            <li>Contact information when you reach out via email or contact forms</li>
            <li>Comments or feedback you submit on blog posts (if commenting is enabled)</li>
            <li>Information in messages or inquiries about projects or services</li>
          </ul>

          <h3 className="mt-4 mb-2 text-xl font-medium">2.2 Automatically Collected Information</h3>
          <p>We may automatically collect certain information, including:</p>
          <ul className="mt-2 list-disc pl-6">
            <li>IP address and general location information</li>
            <li>Browser type, device information, and operating system</li>
            <li>Pages visited, time spent on pages, and navigation patterns</li>
            <li>Referral sources and search terms used to find our website</li>
            <li>Date and time of visits</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="mb-4 text-2xl font-semibold">3. How We Use Your Information</h2>
          <p>We use the collected information for the following purposes:</p>
          <ul className="mt-2 list-disc pl-6">
            <li>To respond to your inquiries and provide customer support</li>
            <li>To improve our website content, user experience, and functionality</li>
            <li>To analyze website traffic and usage patterns</li>
            <li>To prevent fraud and ensure website security</li>
            <li>To comply with legal obligations</li>
            <li>
              To send occasional updates about new blog posts or projects (only if you opt-in)
            </li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="mb-4 text-2xl font-semibold">4. Cookies and Tracking Technologies</h2>

          <h3 className="mb-2 text-xl font-medium">4.1 Essential Cookies</h3>
          <p>
            We use essential cookies that are necessary for the website to function properly,
            including theme preferences (dark/light mode) and basic functionality.
          </p>

          <h3 className="mt-4 mb-2 text-xl font-medium">4.2 Analytics Cookies</h3>
          <p>
            We may use analytics services like Google Analytics to understand how visitors interact
            with our website. These services may use cookies to collect anonymous usage data.
          </p>

          <h3 className="mt-4 mb-2 text-xl font-medium">4.3 Managing Cookies</h3>
          <p>
            You can control cookies through your browser settings. However, disabling certain
            cookies may affect website functionality.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="mb-4 text-2xl font-semibold">5. Third-Party Services</h2>
          <p>Our website may integrate with third-party services, including:</p>
          <ul className="mt-2 list-disc pl-6">
            <li>
              <strong>Analytics Services:</strong> Google Analytics or similar services to track
              website usage
            </li>
            <li>
              <strong>Hosting Services:</strong> Cloud hosting providers for website delivery
            </li>
            <li>
              <strong>Content Delivery Networks (CDNs):</strong> For faster content delivery
            </li>
            <li>
              <strong>Social Media Platforms:</strong> Links to social profiles and project
              repositories
            </li>
            <li>
              <strong>Email Services:</strong> For contact form submissions and communications
            </li>
          </ul>
          <p className="mt-4">
            These third-party services have their own privacy policies, and we encourage you to
            review them.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="mb-4 text-2xl font-semibold">6. Data Sharing and Disclosure</h2>
          <p>
            We do not sell, trade, or rent your personal information to third parties. We may share
            information only in the following circumstances:
          </p>
          <ul className="mt-2 list-disc pl-6">
            <li>With your explicit consent</li>
            <li>To comply with legal obligations or court orders</li>
            <li>To protect our rights, property, or safety, or that of others</li>
            <li>
              With service providers who assist in website operations (under confidentiality
              agreements)
            </li>
            <li>In connection with a business transfer or merger (with prior notice)</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="mb-4 text-2xl font-semibold">7. Blog and Content Interaction</h2>

          <h3 className="mb-2 text-xl font-medium">7.1 Blog Comments</h3>
          <p>
            If commenting features are enabled on blog posts, any information you provide in
            comments may be publicly visible. Please do not share sensitive personal information in
            comments.
          </p>

          <h3 className="mt-4 mb-2 text-xl font-medium">7.2 Content Subscriptions</h3>
          <p>
            If you opt-in to receive notifications about new blog posts or projects, we will use
            your email address solely for this purpose. You can unsubscribe at any time.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="mb-4 text-2xl font-semibold">8. Project Portfolio Data</h2>
          <p>
            Our project portfolio may include case studies and examples of work. Any client or
            project information displayed has been:
          </p>
          <ul className="mt-2 list-disc pl-6">
            <li>Anonymized or generalized to protect privacy</li>
            <li>Shared with explicit permission from clients</li>
            <li>Limited to publicly available information</li>
            <li>Presented in accordance with confidentiality agreements</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="mb-4 text-2xl font-semibold">9. Data Security</h2>
          <p>
            We implement appropriate technical and organizational measures to protect your
            information against unauthorized access, alteration, disclosure, or destruction.
            However, no method of transmission over the internet is 100% secure.
          </p>
          <ul className="mt-2 list-disc pl-6">
            <li>HTTPS encryption for all data transmission</li>
            <li>Regular security updates and monitoring</li>
            <li>Limited access to personal information</li>
            <li>Secure hosting infrastructure</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="mb-4 text-2xl font-semibold">10. Data Retention</h2>
          <p>
            We retain your information only as long as necessary to fulfill the purposes outlined in
            this Privacy Policy or as required by law. Specifically:
          </p>
          <ul className="mt-2 list-disc pl-6">
            <li>Contact inquiries: Retained for up to 2 years for follow-up purposes</li>
            <li>Analytics data: Typically retained for 26 months (Google Analytics default)</li>
            <li>Website logs: Retained for up to 90 days for security purposes</li>
            <li>Email subscriptions: Until you unsubscribe</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="mb-4 text-2xl font-semibold">11. Your Rights</h2>
          <p>
            Depending on your location, you may have the following rights regarding your personal
            information:
          </p>
          <ul className="mt-2 list-disc pl-6">
            <li>
              <strong>Access:</strong> Request information about what personal data we hold
            </li>
            <li>
              <strong>Correction:</strong> Request correction of inaccurate personal information
            </li>
            <li>
              <strong>Deletion:</strong> Request deletion of your personal information
            </li>
            <li>
              <strong>Portability:</strong> Request a copy of your data in a structured format
            </li>
            <li>
              <strong>Objection:</strong> Object to processing of your personal information
            </li>
            <li>
              <strong>Restriction:</strong> Request restriction of processing
            </li>
          </ul>
          <p className="mt-4">
            To exercise these rights, please contact us using the information provided below.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="mb-4 text-2xl font-semibold">12. Children&apos;s Privacy</h2>
          <p>
            Our website is not intended for children under 13 years of age. We do not knowingly
            collect personal information from children under 13. If you believe we have collected
            information from a child under 13, please contact us immediately.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="mb-4 text-2xl font-semibold">13. International Data Transfers</h2>
          <p>
            Your information may be transferred to and processed in countries other than your own.
            We ensure appropriate safeguards are in place to protect your information in accordance
            with this Privacy Policy.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="mb-4 text-2xl font-semibold">14. Changes to This Privacy Policy</h2>
          <p>
            We may update this Privacy Policy from time to time. We will notify you of any changes
            by posting the new Privacy Policy on this page and updating the &quot;Last updated&quot;
            date. We encourage you to review this Privacy Policy periodically.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="mb-4 text-2xl font-semibold">15. Contact Information</h2>
          <p>
            If you have any questions about this Privacy Policy or our data practices, please
            contact us:
          </p>
          <div className="bg-muted mt-4 rounded-lg p-4">
            <p>
              <strong>Email:</strong> me@masb0ymas.com
            </p>
            <p>
              <strong>Website:</strong> masb0ymas.com
            </p>
            <p>
              <strong>Response Time:</strong> We aim to respond to privacy inquiries within 30 days
            </p>
          </div>
        </section>

        <div className="border-border mt-12 border-t pt-8">
          <p className="text-muted-foreground text-sm">
            This Privacy Policy is effective as of the date last updated above. By using our
            website, you acknowledge that you have read and understood this Privacy Policy.
          </p>
        </div>
      </div>
    </div>
  )
}
