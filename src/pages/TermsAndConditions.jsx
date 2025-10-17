import "../styles/TermsAndConditions.css";
import React, {  useEffect } from "react";

function TermsAndConditions() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="terms-container">
      <header className="terms-header">
        <h1 className="terms-title">TERMS & CONDITION</h1>
      </header>

      <main className="terms-content">
        <section className="terms-section">
          <h2 className="section-titlee">1. Introduction</h2>
          <p className="section-text">
            Greetings from BROADERAI! The terms regulating your use of our
            website and services, which are offered by BROADERAI, a company
            based in Pal, Surat, Gujarat 395009, India, are outlined in these
            Terms and Conditions ("Agreement"). You accept these terms by using
            our platform or by accessing it. If you have any inquiries, please
            contact us at contact@broaderai.com or visit our website at
            www.broaderai.com.
          </p>
        </section>

        <section className="terms-section">
          <h2 className="section-titlee">2. Definitions</h2>
          <p className="section-text">
            <strong>"User" or "You":</strong> refers to any person or
            organization that makes use of BROADERAI's services.
          </p>
          <p className="section-text">
            <strong>"We", "Us", or "Our":</strong> refers to BROADERAI,
            including its affiliates and subsidiaries.
          </p>
        </section>

        <section className="terms-section">
          <h2 className="section-titlee">3. Services Provided</h2>
          <p className="section-text">
            BROADERAI provides mobile and web-based platforms for a range of
            services, including software development and digital solutions. You
            can find thorough explanations of our services on our website or
            speak with us directly.
          </p>
        </section>

        <section className="terms-section">
          <h2 className="section-titlee">4. Acceptance of Terms</h2>
          <p className="section-text">
            You attest that you have read, comprehended, and will abide by this
            agreement by using our services. You must stop using BROADERAI's
            services right away if you disagree with any of these terms.
          </p>
        </section>

        <section className="terms-section">
          <h2 className="section-titlee">5. Content</h2>
          <p className="section-text">
            BROADERAI owns or has permission to use the content that can be
            found on or through this service. Without our prior written consent,
            you are not permitted to distribute, alter, transmit, reuse,
            download, repost, copy, or use said Content in whole or in part for
            profit or for any other reason.
          </p>
        </section>

        <section className="terms-section">
          <h2 className="section-titlee">6. Copyright Policy</h2>
          <p className="section-text">
            We honor other people's intellectual property rights. It is our
            policy to address any allegation that any individual or
            organization's copyright or other intellectual property rights are
            being violated by content uploaded on the service (referred to as
            "Infringement").
          </p>
          <p className="section-text">
            Please send an email to contact@broaderai.com with the subject line
            "Copyright Infringement" if you are a copyright owner or authorized
            on their behalf and you think that the copyrighted work has been
            copied in a way that violates copyright. Include a thorough
            description of the alleged infringement as described below, under
            "DMCA Notice and Procedure for Copyright Infringement Claims."
          </p>
        </section>

        <section className="terms-section">
          <h2 className="section-titlee">7. Intellectual Property Rights</h2>
          <p className="section-text">
            BROADERAI owns the intellectual property rights for all of the text,
            graphics, software, designs, content, and other elements on its
            platforms. Without previous written consent, you are not permitted
            to distribute, copy, or alter these materials.
          </p>
        </section>

        <section className="terms-section">
          <h2 className="section-titlee">8. User Obligations</h2>
          <p className="section-text">When using our services, you agree to:</p>
          <ul className="section-list">
            <li>
              Ensure your usage complies with all applicable laws and
              regulations.
            </li>
            <li>
              Avoid activities that disrupt or interfere with our platform or
              servers.
            </li>
            <li>
              Respect other users' privacy and refrain from unauthorized access
              to accounts or data.
            </li>
          </ul>
        </section>

        <section className="terms-section">
          <h2 className="section-titlee">9. Limitation of Liability</h2>
          <p className="section-text">
            Any damages resulting from your use of our services, whether direct,
            indirect, incidental, or consequential, are not the responsibility
            of BROADERAI. Even if we were aware of the potential for such
            damages, this nevertheless includes loss of data, income, or
            profits.
          </p>
        </section>

        <section className="terms-section">
          <h2 className="section-titlee">10. Indemnification</h2>
          <p className="section-text">
            By using our services or breaking these terms, you agree to hold
            BROADERAI, its affiliates, employees, and partners harmless from any
            claims, liabilities, or damages.
          </p>
        </section>

        <section className="terms-section">
          <h2 className="section-titlee">11. Modifications to the Agreement</h2>
          <p className="section-text">
            By using our services or breaking these terms, you agree to hold
            BROADERAI, its affiliates, employees, and partners harmless from any
            claims, liabilities, or damages.
          </p>
        </section>

        <section className="terms-section">
          <h2 className="section-titlee">12. Governing Law</h2>
          <p className="section-text">
            The laws of India control these terms. The courts in Surat, Gujarat,
            will have authority over any issues.
          </p>
        </section>

        <section className="terms-section">
          <h2 className="section-titlee">13. Contact Information</h2>
          <p className="section-text">
            For any questions or support regarding these Terms and Conditions,
            reach us at:
          </p>
          <p className="section-text">
            <strong>Website:</strong> www.broaderai.com
          </p>
          <p className="section-text">
            <strong>Email:</strong> contact@broaderai.com
          </p>
        </section>
      </main>
    </div>
  );
}

export default TermsAndConditions;
