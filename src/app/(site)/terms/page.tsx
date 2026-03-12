export default function TermOfServicePage() {
  return (
    <div className="container mx-auto max-w-4xl px-4 py-8">
      <div className="prose prose-gray dark:prose-invert max-w-none">
        <h1 className="mb-8 text-4xl font-bold">Terms of Service</h1>

        <p className="text-muted-foreground mb-8 text-lg">
          Last updated:{' '}
          {new Date().toLocaleDateString('en-US', {
            year: 'numeric',
            month: 'long',
            day: 'numeric',
          })}
        </p>

        <section className="mb-8">
          <h2 className="mb-4 text-2xl font-semibold">1. Acceptance of Terms</h2>
          <p>
            By accessing and using this website (masb0ymas.com), you accept and agree to be bound by
            the terms and provision of this agreement. If you do not agree to abide by the above,
            please do not use this service.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="mb-4 text-2xl font-semibold">2. Description of Service</h2>
          <p>
            This website serves as a personal portfolio showcasing professional work, projects, and
            blog content. The service includes but is not limited to:
          </p>
          <ul className="mt-2 list-disc pl-6">
            <li>Portfolio showcase of projects and professional work</li>
            <li>Blog articles and technical content</li>
            <li>Contact information and professional networking</li>
            <li>Code examples and technical demonstrations</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="mb-4 text-2xl font-semibold">3. Intellectual Property Rights</h2>
          <h3 className="mb-2 text-xl font-medium">3.1 Website Content</h3>
          <p>
            All content on this website, including but not limited to text, graphics, logos, images,
            audio clips, digital downloads, data compilations, and software, is the property of
            masb0ymas or its content suppliers and is protected by copyright laws.
          </p>

          <h3 className="mt-4 mb-2 text-xl font-medium">3.2 Blog Content</h3>
          <p>
            All blog posts, articles, and written content are original works unless otherwise
            specified. You may share and reference this content with proper attribution, but
            commercial use requires explicit permission.
          </p>

          <h3 className="mt-4 mb-2 text-xl font-medium">3.3 Project Code</h3>
          <p>
            Code examples and project demonstrations are provided for educational purposes. Unless
            explicitly stated otherwise, code snippets are available under the MIT License. Complete
            project repositories may have their own specific licenses.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="mb-4 text-2xl font-semibold">4. User Conduct</h2>
          <p>You agree not to use this website to:</p>
          <ul className="mt-2 list-disc pl-6">
            <li>Violate any applicable laws or regulations</li>
            <li>Infringe upon intellectual property rights</li>
            <li>Transmit harmful, offensive, or inappropriate content</li>
            <li>Attempt to gain unauthorized access to any part of the website</li>
            <li>Use automated systems to scrape or harvest content without permission</li>
            <li>Interfere with the proper functioning of the website</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="mb-4 text-2xl font-semibold">5. Blog and Content Guidelines</h2>
          <h3 className="mb-2 text-xl font-medium">5.1 Comments and Feedback</h3>
          <p>
            If commenting features are available, users must provide respectful and constructive
            feedback. Spam, harassment, or inappropriate content will be removed.
          </p>

          <h3 className="mt-4 mb-2 text-xl font-medium">5.2 Content Accuracy</h3>
          <p>
            While efforts are made to ensure accuracy, blog content and technical articles are
            provided for informational purposes. Users should verify information independently
            before implementation.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="mb-4 text-2xl font-semibold">6. Project Showcase Disclaimer</h2>
          <p>
            Projects displayed in the portfolio are for demonstration purposes. While functional
            examples may be provided:
          </p>
          <ul className="mt-2 list-disc pl-6">
            <li>No warranty is provided for project functionality</li>
            <li>Projects may use third-party services or APIs that could change</li>
            <li>Source code availability varies by project and client agreements</li>
            <li>Commercial use of showcased projects requires separate licensing</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="mb-4 text-2xl font-semibold">7. Privacy and Data Collection</h2>
          <p>
            Your privacy is important. This website may collect basic analytics data to improve user
            experience. For detailed information about data collection and usage, please refer to
            our
            <a href="/privacy-policy" className="text-primary hover:underline">
              Privacy Policy
            </a>
            .
          </p>
        </section>

        <section className="mb-8">
          <h2 className="mb-4 text-2xl font-semibold">8. Third-Party Links and Services</h2>
          <p>
            This website may contain links to third-party websites or services. These links are
            provided for convenience, and we are not responsible for the content, privacy policies,
            or practices of these external sites.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="mb-4 text-2xl font-semibold">9. Disclaimer of Warranties</h2>
          <p>
            This website and its content are provided &quot;as is&quot; without any warranties,
            express or implied. We do not warrant that the website will be uninterrupted,
            error-free, or free of viruses or other harmful components.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="mb-4 text-2xl font-semibold">10. Limitation of Liability</h2>
          <p>
            In no event shall masb0ymas be liable for any indirect, incidental, special,
            consequential, or punitive damages, including without limitation, loss of profits, data,
            use, goodwill, or other intangible losses, resulting from your use of this website.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="mb-4 text-2xl font-semibold">11. Modifications to Terms</h2>
          <p>
            We reserve the right to modify these terms at any time. Changes will be effective
            immediately upon posting. Your continued use of the website after changes constitutes
            acceptance of the new terms.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="mb-4 text-2xl font-semibold">12. Contact Information</h2>
          <p>If you have any questions about these Terms of Service, please contact:</p>
          <div className="bg-muted mt-4 rounded-lg p-4">
            <p>
              <strong>Email:</strong> me@masb0ymas.com
            </p>
            <p>
              <strong>Website:</strong> masb0ymas.com
            </p>
          </div>
        </section>

        <section className="mb-8">
          <h2 className="mb-4 text-2xl font-semibold">13. Governing Law</h2>
          <p>
            These terms shall be governed by and construed in accordance with applicable laws. Any
            disputes arising from these terms or your use of this website shall be resolved through
            appropriate legal channels.
          </p>
        </section>

        <div className="border-border mt-12 border-t pt-8">
          <p className="text-muted-foreground text-sm">
            This Terms of Service agreement is effective as of the date last updated above and will
            remain in effect until modified or terminated.
          </p>
        </div>
      </div>
    </div>
  )
}
