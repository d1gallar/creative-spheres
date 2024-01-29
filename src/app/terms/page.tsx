import React from "react";

const companyName = "Creative Sphere Design Co.";
const companyEmail = "work@creativespheres.co";
const jurisdiction = "United States";

export default function TermsPage() {
  return (
    <main className="bg-white text-black flex min-h-fit flex-col items-start justify-center pt-32 px-5 md:px-10 py-5 md:py-20 md:min-h-screen gap-8">
      <h1 className="w-full text-5xl 2xsm:text-5xl sm:text-6xl font-suisse-bold uppercase">
        Terms of Service
      </h1>
      <p className="font-suisse-regular text-base sm:text-lg">
        By accessing or using our services, you agree to comply with these
        terms. Please read them carefully.
      </p>
      <ul className="flex flex-col gap-5">
        <li>
          <h2 className="font-suisse-bold text-lg sm:text-xl mb-2">
            1. Service Overview
          </h2>
          <p className="font-suisse-regular text-base sm:text-lg">
            {companyName} offers a range of design services, including but not
            limited to UI/UX design, branding, and illustration. Our services
            are provided on an &quot;as is&quot; and &quot;as available&quot;
            basis, and we reserve the right to modify or discontinue services at
            any time without prior notice.
          </p>
        </li>
        <li>
          <h2 className="font-suisse-bold text-lg sm:text-xl mb-2">
            2. Client Responsibilities
          </h2>
          <p className="font-suisse-regular text-base sm:text-lg">
            Clients are responsible for providing clear and accurate project
            requirements, materials, and feedback in a timely manner. Clients
            must ensure that they have the necessary rights and permissions for
            any content provided to us for use in design projects.
          </p>
        </li>
        <li>
          <h2 className="font-suisse-bold text-lg sm:text-xl mb-2">
            3. Payment and Fees
          </h2>
          <p className="font-suisse-regular text-base sm:text-lg">
            Payment terms will be agreed upon before the commencement of any
            project. {companyName} reserves the right to withhold delivery of
            final designs until payment has been received in full.
          </p>
        </li>
        <li>
          <h2 className="font-suisse-bold text-lg sm:text-xl mb-2">
            4. Intellectual Property
          </h2>
          <p className="font-suisse-regular text-base sm:text-lg">
            All intellectual property rights to designs created by&nbsp;
            {companyName} remain the property of the agency until full payment
            has been received. Upon full payment, clients are granted a
            non-exclusive, perpetual license to use the designs for their
            intended purpose.
          </p>
        </li>
        <li>
          <h2 className="font-suisse-bold text-lg sm:text-xl mb-2">
            5. Confidentiality
          </h2>
          <p className="font-suisse-regular text-base sm:text-lg">
            {companyName} respects the confidentiality of client information and
            will not disclose any confidential or proprietary information
            without consent.
          </p>
        </li>
        <li>
          <h2 className="font-suisse-bold text-lg sm:text-xl mb-2">
            6. Limitation of Liability
          </h2>
          <p className="font-suisse-regular text-base sm:text-lg">
            {companyName} shall not be liable for any indirect, incidental,
            special, or consequential damages arising out of or in connection
            with the use of our services.
          </p>
        </li>
        <li>
          <h2 className="font-suisse-bold text-lg sm:text-xl mb-2">
            7. Governing Law
          </h2>
          <p className="font-suisse-regular text-base sm:text-lg">
            These Terms of Service shall be governed by and construed in
            accordance with the laws of the {jurisdiction}, without regard to
            its conflict of law provisions.
          </p>
        </li>
        <li>
          <h2 className="font-suisse-bold text-lg sm:text-xl mb-2">
            8. Changes to Terms
          </h2>
          <p className="font-suisse-regular text-base sm:text-lg">
            {companyName} reserves the right to update or modify these Terms of
            Service at any time without prior notice. Continued use of our
            services constitutes acceptance of the revised terms.
          </p>
        </li>
      </ul>
      <p className="font-suisse-regular text-base sm:text-lg">
        By using our services, you acknowledge that you have read, understood,
        and agree to abide by these Terms of Service. If you have any questions
        or concerns, please contact us at <u>{companyEmail}</u>. Thank you for
        choosing {companyName}!
      </p>
    </main>
  );
}
