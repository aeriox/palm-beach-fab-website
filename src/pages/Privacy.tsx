import { Layout } from "@/components/layout/Layout";

export default function Privacy() {
  return (
    <Layout>
      <div className="bg-muted/30 py-16 lg:py-24">
        <div className="container mx-auto px-6 lg:px-8">
          <h1 className="font-heading text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Privacy Policy
          </h1>
          <p className="text-muted-foreground">
            Last updated: {new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}
          </p>
        </div>
      </div>

      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-6 lg:px-8 max-w-4xl">
          <div className="prose prose-lg max-w-none">
            <h2 className="font-heading text-2xl font-semibold text-foreground mb-4">
              Introduction
            </h2>
            <p className="text-muted-foreground mb-8 leading-relaxed">
              Palm Beach Fabricators ("we," "our," or "us") respects your privacy and is committed to protecting your personal information. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website or engage our millwork services.
            </p>

            <h2 className="font-heading text-2xl font-semibold text-foreground mb-4">
              Information We Collect
            </h2>
            <p className="text-muted-foreground mb-4 leading-relaxed">
              We may collect personal information that you voluntarily provide to us when you:
            </p>
            <ul className="list-disc pl-6 text-muted-foreground mb-8 space-y-2">
              <li>Request a quote or consultation</li>
              <li>Contact us through our website, email, or phone</li>
              <li>Subscribe to our newsletter or marketing communications</li>
              <li>Enter into a contract for our services</li>
            </ul>
            <p className="text-muted-foreground mb-8 leading-relaxed">
              This information may include your name, email address, phone number, mailing address, project details, and any other information you choose to provide.
            </p>

            <h2 className="font-heading text-2xl font-semibold text-foreground mb-4">
              How We Use Your Information
            </h2>
            <p className="text-muted-foreground mb-4 leading-relaxed">
              We use the information we collect to:
            </p>
            <ul className="list-disc pl-6 text-muted-foreground mb-8 space-y-2">
              <li>Respond to your inquiries and provide customer service</li>
              <li>Process and fulfill your orders and service requests</li>
              <li>Send you project updates and relevant communications</li>
              <li>Improve our website and services</li>
              <li>Comply with legal obligations</li>
            </ul>

            <h2 className="font-heading text-2xl font-semibold text-foreground mb-4">
              Information Sharing
            </h2>
            <p className="text-muted-foreground mb-8 leading-relaxed">
              We do not sell, trade, or otherwise transfer your personal information to third parties without your consent, except as necessary to provide our services (such as sharing project details with subcontractors or suppliers), comply with legal requirements, or protect our rights.
            </p>

            <h2 className="font-heading text-2xl font-semibold text-foreground mb-4">
              Data Security
            </h2>
            <p className="text-muted-foreground mb-8 leading-relaxed">
              We implement appropriate technical and organizational security measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. However, no method of transmission over the Internet or electronic storage is 100% secure.
            </p>

            <h2 className="font-heading text-2xl font-semibold text-foreground mb-4">
              Cookies and Tracking
            </h2>
            <p className="text-muted-foreground mb-8 leading-relaxed">
              Our website may use cookies and similar tracking technologies to enhance your browsing experience and analyze website traffic. You can control cookie settings through your browser preferences.
            </p>

            <h2 className="font-heading text-2xl font-semibold text-foreground mb-4">
              Your Rights
            </h2>
            <p className="text-muted-foreground mb-8 leading-relaxed">
              Depending on your location, you may have certain rights regarding your personal information, including the right to access, correct, or delete your data. To exercise these rights, please contact us using the information below.
            </p>

            <h2 className="font-heading text-2xl font-semibold text-foreground mb-4">
              Changes to This Policy
            </h2>
            <p className="text-muted-foreground mb-8 leading-relaxed">
              We may update this Privacy Policy from time to time. Any changes will be posted on this page with an updated revision date. We encourage you to review this policy periodically.
            </p>

            <h2 className="font-heading text-2xl font-semibold text-foreground mb-4">
              Contact Us
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              If you have questions about this Privacy Policy or our privacy practices, please contact us at:
            </p>
            <p className="text-muted-foreground mt-4">
              <strong className="text-foreground">Palm Beach Fabricators</strong><br />
              A division of Xact Construction<br />
              Palm Beach County, Florida<br />
              Email: info@palmbeachfabricators.com<br />
              Phone: (561) 123-4567
            </p>
          </div>
        </div>
      </section>
    </Layout>
  );
}