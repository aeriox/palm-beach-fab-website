import { Layout } from "@/components/layout/Layout";

export default function Terms() {
  return (
    <Layout>
      <div className="bg-muted/30 py-16 lg:py-24">
        <div className="container mx-auto px-6 lg:px-8">
          <h1 className="font-heading text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Terms of Service
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
              Agreement to Terms
            </h2>
            <p className="text-muted-foreground mb-8 leading-relaxed">
              By accessing or using the Palm Beach Fabricators website and services, you agree to be bound by these Terms of Service. If you do not agree to these terms, please do not use our website or services.
            </p>

            <h2 className="font-heading text-2xl font-semibold text-foreground mb-4">
              Services
            </h2>
            <p className="text-muted-foreground mb-8 leading-relaxed">
              Palm Beach Fabricators provides custom millwork design, fabrication, and installation services for residential and commercial clients. All services are subject to a separate written contract or agreement that will specify the scope of work, pricing, timeline, and other terms specific to your project.
            </p>

            <h2 className="font-heading text-2xl font-semibold text-foreground mb-4">
              Quotes and Estimates
            </h2>
            <p className="text-muted-foreground mb-8 leading-relaxed">
              Any quotes or estimates provided are valid for 30 days from the date of issue unless otherwise specified. Quotes are based on the information provided at the time of inquiry and may be subject to change based on actual project requirements, material costs, or scope modifications.
            </p>

            <h2 className="font-heading text-2xl font-semibold text-foreground mb-4">
              Payment Terms
            </h2>
            <p className="text-muted-foreground mb-4 leading-relaxed">
              Payment terms will be outlined in your project contract. Generally:
            </p>
            <ul className="list-disc pl-6 text-muted-foreground mb-8 space-y-2">
              <li>A deposit is required to begin work on custom projects</li>
              <li>Progress payments may be required for larger projects</li>
              <li>Final payment is due upon project completion and your approval</li>
              <li>Late payments may be subject to additional fees</li>
            </ul>

            <h2 className="font-heading text-2xl font-semibold text-foreground mb-4">
              Intellectual Property
            </h2>
            <p className="text-muted-foreground mb-8 leading-relaxed">
              All content on this website, including text, images, graphics, logos, and design elements, is the property of Palm Beach Fabricators or its licensors and is protected by copyright and trademark laws. You may not reproduce, distribute, or use any content without our prior written consent.
            </p>

            <h2 className="font-heading text-2xl font-semibold text-foreground mb-4">
              Custom Design Work
            </h2>
            <p className="text-muted-foreground mb-8 leading-relaxed">
              Custom designs, drawings, and specifications created by Palm Beach Fabricators remain our intellectual property until full payment is received. Upon full payment, you receive a license to use the designs for the intended project. We reserve the right to photograph completed projects for our portfolio unless otherwise agreed in writing.
            </p>

            <h2 className="font-heading text-2xl font-semibold text-foreground mb-4">
              Warranty
            </h2>
            <p className="text-muted-foreground mb-8 leading-relaxed">
              We stand behind the quality of our craftsmanship. Specific warranty terms will be provided in your project contract. Warranties typically cover defects in materials and workmanship but do not cover normal wear and tear, damage from misuse, improper maintenance, or modifications made by others.
            </p>

            <h2 className="font-heading text-2xl font-semibold text-foreground mb-4">
              Limitation of Liability
            </h2>
            <p className="text-muted-foreground mb-8 leading-relaxed">
              To the fullest extent permitted by law, Palm Beach Fabricators shall not be liable for any indirect, incidental, special, consequential, or punitive damages arising out of or related to your use of our website or services. Our total liability shall not exceed the amount paid by you for the specific services giving rise to the claim.
            </p>

            <h2 className="font-heading text-2xl font-semibold text-foreground mb-4">
              Governing Law
            </h2>
            <p className="text-muted-foreground mb-8 leading-relaxed">
              These Terms of Service shall be governed by and construed in accordance with the laws of the State of Florida. Any disputes arising under these terms shall be resolved in the courts of Palm Beach County, Florida.
            </p>

            <h2 className="font-heading text-2xl font-semibold text-foreground mb-4">
              Changes to Terms
            </h2>
            <p className="text-muted-foreground mb-8 leading-relaxed">
              We reserve the right to modify these Terms of Service at any time. Changes will be effective immediately upon posting to this website. Your continued use of our website or services after any changes constitutes acceptance of the updated terms.
            </p>

            <h2 className="font-heading text-2xl font-semibold text-foreground mb-4">
              Contact Us
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              If you have questions about these Terms of Service, please contact us at:
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