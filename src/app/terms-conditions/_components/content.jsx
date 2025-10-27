import Link from "next/link";

export default function Terms_Conditions() {
  return (
    <main className="text-gray-900 px-4 sm:px-6 lg:px-20 py-12">
      <article className="mx-auto max-w-3xl">
        {/* Title */}
        <header className="mb-8">
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold leading-tight tracking-tight">
            Terms and Conditions
          </h1>
          <p className="mt-2 text-sm sm:text-base lg:text-lg text-gray-500">
            Last updated: <span className="font-medium">October 27, 2025</span>
          </p>
        </header>

        {/* Introduction */}
        <section className="space-y-6">
          <p className="text-base sm:text-lg lg:text-lg leading-relaxed">
            Please read these terms and conditions carefully before using Our
            Service.
          </p>
        </section>

        {/* Interpretation & Definitions */}
        <section className="mt-10 space-y-6">
          <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold leading-snug">
            Interpretation and Definitions
          </h2>

          <div className="space-y-4">
            <h3 className="text-lg sm:text-xl md:text-2xl font-medium">
              Interpretation
            </h3>
            <p className="text-sm sm:text-base lg:text-lg leading-relaxed">
              The words whose initial letters are capitalized have meanings
              defined under the following conditions. The following definitions
              shall have the same meaning regardless of whether they appear in
              singular or plural.
            </p>

            <h3 className="text-lg sm:text-xl md:text-2xl font-medium">
              Definitions
            </h3>
            <p className="text-sm sm:text-base lg:text-lg leading-relaxed">
              For the purposes of these Terms and Conditions:
            </p>

            <ul className="list-disc pl-6 space-y-2 text-sm sm:text-base lg:text-lg leading-relaxed">
              <li>
                <strong>Affiliate</strong>: an entity controlling, controlled
                by, or under common control with a party.
              </li>
              <li>
                <strong>Country</strong>: India
              </li>
              <li>
                <strong>Company</strong>: HOUSE NO. 41-42, 2ND FLOOR, BLK-B, PKT 5,
                SEC 5, ROHINI, LANDMARK NEAR RITHALA MODE, DELHI-110085
              </li>
              <li>
                <strong>Device</strong>: any device that can access the Service
                such as a computer, cell phone, or tablet.
              </li>
              <li>
                <strong>Service</strong>: refers to the Website.
              </li>
              <li>
                <strong>Terms and Conditions</strong>: these Terms, forming the
                agreement between You and the Company.
              </li>
              <li>
                <strong>Third-party Social Media Service</strong>: services or
                content provided by third parties.
              </li>
              <li>
                <strong>Website</strong>: MODERN DREAM FOUNDATION, accessible
                from{" "}
                <Link href="/" className="underline text-blue-600">
                  https://moderndreamfoundation.com
                </Link>
              </li>
              <li>
                <strong>You</strong>: the individual accessing or using the
                Service, or the legal entity they represent.
              </li>
            </ul>
          </div>
        </section>

        {/* Acknowledgment */}
        <section className="mt-10 space-y-6">
          <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold leading-snug">
            Acknowledgment
          </h2>
          <p className="text-sm sm:text-base lg:text-lg leading-relaxed">
            These Terms govern the use of this Service and set out the rights
            and obligations of all users. Your access is conditioned on
            acceptance of these Terms. By using the Service, You agree to be
            bound. You must be over 18 and comply with our Privacy Policy.
          </p>
        </section>

        {/* Links to Other Websites */}
        <section className="mt-10 space-y-6">
          <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold leading-snug">
            Links to Other Websites
          </h2>
          <p className="text-sm sm:text-base lg:text-lg leading-relaxed">
            Our Service may contain links to third-party websites not owned by
            the Company. We are not responsible for their content, privacy
            policies, or practices. Please review third-party terms and privacy
            policies carefully.
          </p>
        </section>

        {/* Termination */}
        <section className="mt-10 space-y-6">
          <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold leading-snug">
            Termination
          </h2>
          <p className="text-sm sm:text-base lg:text-lg leading-relaxed">
            We may terminate or suspend Your access immediately, without notice,
            for any reason, including breach of these Terms. Upon termination,
            Your right to use the Service ceases immediately.
          </p>
        </section>

        {/* Limitation of Liability */}
        <section className="mt-10 space-y-6">
          <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold leading-snug">
            Limitation of Liability
          </h2>
          <p className="text-sm sm:text-base lg:text-lg leading-relaxed">
            The Company's liability is limited to the amount paid by You through
            the Service or 100 USD if no purchase was made. The Company is not
            liable for special, incidental, indirect, or consequential damages.
            Some jurisdictions may limit these exclusions.
          </p>
        </section>

        {/* AS IS Disclaimer */}
        <section className="mt-10 space-y-6">
          <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold leading-snug">
            "AS IS" and "AS AVAILABLE" Disclaimer
          </h2>
          <p className="text-sm sm:text-base lg:text-lg leading-relaxed">
            The Service is provided "AS IS" without warranty of any kind. We
            disclaim express, implied, statutory, and other warranties. The
            Service may contain errors or be incompatible with other software or
            hardware.
          </p>
        </section>

        {/* Governing Law */}
        <section className="mt-10 space-y-6">
          <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold leading-snug">
            Governing Law
          </h2>
          <p className="text-sm sm:text-base lg:text-lg leading-relaxed">
            The laws of the Country, excluding conflicts of law rules, govern
            these Terms. Use of the Service may also be subject to other local,
            state, national, or international laws.
          </p>
        </section>

        {/* Disputes Resolution */}
        <section className="mt-10 space-y-6">
          <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold leading-snug">
            Disputes Resolution
          </h2>
          <p className="text-sm sm:text-base lg:text-lg leading-relaxed">
            You agree to first try to resolve any disputes informally by
            contacting the Company.
          </p>
        </section>

        {/* EU Users */}
        <section className="mt-10 space-y-6">
          <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold leading-snug">
            For European Union (EU) Users
          </h2>
          <p className="text-sm sm:text-base lg:text-lg leading-relaxed">
            EU consumers benefit from any mandatory provisions of their
            country’s law.
          </p>
        </section>

        {/* US Compliance */}
        <section className="mt-10 space-y-6">
          <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold leading-snug">
            United States Legal Compliance
          </h2>
          <p className="text-sm sm:text-base lg:text-lg leading-relaxed">
            You represent that You are not in a US embargoed or
            terrorist-supporting country, and not on any US government
            prohibited/restricted lists.
          </p>
        </section>

        {/* Severability & Waiver */}
        <section className="mt-10 space-y-6">
          <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold leading-snug">
            Severability and Waiver
          </h2>
          <h3 className="text-lg sm:text-xl md:text-2xl font-medium">
            Severability
          </h3>
          <p className="text-sm sm:text-base lg:text-lg leading-relaxed">
            Unenforceable provisions will be modified to accomplish their
            objectives. Remaining provisions remain in full force.
          </p>
          <h3 className="text-lg sm:text-xl md:text-2xl font-medium">Waiver</h3>
          <p className="text-sm sm:text-base lg:text-lg leading-relaxed">
            Failure to exercise a right or waive a breach does not waive future
            rights or breaches.
          </p>
        </section>

        {/* Translation Interpretation */}
        <section className="mt-10 space-y-6">
          <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold leading-snug">
            Translation Interpretation
          </h2>
          <p className="text-sm sm:text-base lg:text-lg leading-relaxed">
            Original English text prevails in case of dispute.
          </p>
        </section>

        {/* Changes */}
        <section className="mt-10 space-y-6">
          <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold leading-snug">
            Changes to These Terms and Conditions
          </h2>
          <p className="text-sm sm:text-base lg:text-lg leading-relaxed">
            We may modify these Terms at our sole discretion. Material changes
            will have 30 days' notice. Continuing to use the Service means
            acceptance of revised Terms.
          </p>
        </section>

        {/* Contact */}
        <section className="mt-10 pb-6">
          <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold leading-snug">
            Contact Us
          </h2>
          <ul className="list-none pl-0 mt-4 space-y-2 text-sm sm:text-base lg:text-lg">
            <li>
              <strong>Email:</strong>{" "}
              <Link
                href="mailto:info@moderndreamfoundation.com"
                className="underline text-blue-500"
              >
                info@moderndreamfoundation.com
              </Link>
            </li>
            <li>
              <strong>Phone:</strong>{" "}
              <Link
                href="tel:+918851597933"
                className="underline text-blue-500"
              >
                +91-8851597933
              </Link>
            </li>
          </ul>
        </section>
      </article>
    </main>
  );
}
