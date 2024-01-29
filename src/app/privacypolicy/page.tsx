import React from "react";

const companyName = "Creative Sphere Design Co.";
const companyEmail = "work@creativespheres.co";

export default function PrivacyPolicyPage() {
  return (
    <main className="bg-white text-black flex min-h-fit flex-col items-start justify-center pt-32 px-5 md:px-10 py-5 md:py-20 md:min-h-screen gap-8">
      <h1 className="w-full text-5xl 2xsm:text-5xl sm:text-6xl font-suisse-bold uppercase">
        Privacy Policy
      </h1>
      <p className="font-suisse-regular text-base sm:text-lg">
        At {companyName}, we are committed to protecting your
        privacy and ensuring the security of your personal information. This
        Privacy Policy outlines how we collect, use, disclose, and safeguard
        your data when you use our services. By accessing or using our services,
        you consent to the terms of this Privacy Policy.
      </p>
      <ul className="flex flex-col gap-5">
        <li>
          <h2 className="font-suisse-bold text-lg sm:text-xl mb-2">
            1. Information We Collect
          </h2>
          <p className="font-suisse-regular text-base sm:text-lg">
            We may collect personal information, such as your name, email
            address, and contact details, when you voluntarily provide it to us
            for the purpose of engaging with our services.
          </p>
          <p className="font-suisse-regular text-base sm:text-lg">
            We may also collect non-personal information, such as IP addresses,
            browser type, and device identifiers, to analyze trends and improve
            our services.
          </p>
        </li>
        <li>
          <h2 className="font-suisse-bold text-lg sm:text-xl mb-2">
            2. How We Use Your Information
          </h2>
          <p className="font-suisse-regular text-base sm:text-lg">
            We use your personal information to communicate with you, fulfill
            your requests for our services, and provide customer support.
          </p>
          <p className="font-suisse-regular text-base sm:text-lg">
            Non-personal information may be used to monitor and analyze usage
            patterns, improve the quality of our services, and tailor our
            offerings to better meet your needs.
          </p>
        </li>
        <li>
          <h2 className="font-suisse-bold text-lg sm:text-xl mb-2">
            3. Disclosure of Information
          </h2>
          <p className="font-suisse-regular text-base sm:text-lg">
            We do not sell, trade, or otherwise transfer your personal
            information to third parties without your consent, except as
            required by law or to fulfill the purposes outlined in this Privacy
            Policy.
          </p>
          <p className="font-suisse-regular text-base sm:text-lg">
            We may share your information with trusted third-party service
            providers who assist us in operating our website, conducting
            business, or servicing you, as long as they agree to keep this
            information confidential.
          </p>
        </li>
        <li>
          <h2 className="font-suisse-bold text-lg sm:text-xl mb-2">
            4. Data Security
          </h2>
          <p className="font-suisse-regular text-base sm:text-lg">
            We implement a variety of security measures to maintain the safety
            of your personal information. However, please be aware that no
            method of transmission over the internet or electronic storage is
            100% secure, and we cannot guarantee absolute security.
          </p>
        </li>
        <li>
          <h2 className="font-suisse-bold text-lg sm:text-xl mb-2">
            5. Third-Party Links
          </h2>
          <p className="font-suisse-regular text-base sm:text-lg">
            Our website may contain links to third-party websites or services
            that are not operated by us. We have no control over and assume no
            responsibility for the content, privacy policies, or practices of
            any third-party sites or services.
          </p>
        </li>
        <li>
          <h2 className="font-suisse-bold text-lg sm:text-xl mb-2">
            6. Children&apos;s Privacy
          </h2>
          <p className="font-suisse-regular text-base sm:text-lg">
            Our services are not directed at individuals under the age of 13. We
            do not knowingly collect personal information from children under
            13. If you believe that we have inadvertently collected personal
            information from a child under 13, please contact us immediately,
            and we will take steps to remove such information from our records.
          </p>
        </li>
        <li>
          <h2 className="font-suisse-bold text-lg sm:text-xl mb-2">
            7. Changes to Privacy Policy
          </h2>
          <p className="font-suisse-regular text-base sm:text-lg">
            We reserve the right to update or modify this Privacy Policy at any
            time without prior notice. Any changes will be effective immediately
            upon posting on this page.
          </p>
        </li>
      </ul>
      <p className="font-suisse-regular text-base sm:text-lg">
        By using our services, you acknowledge that you have read, understood,
        and agree to the terms of this Privacy Policy. If you have any questions
        or concerns regarding our privacy practices, please contact us at&nbsp;
        {companyName}. Thank you for choosing <u>{companyEmail}</u>!
      </p>
    </main>
  );
}
