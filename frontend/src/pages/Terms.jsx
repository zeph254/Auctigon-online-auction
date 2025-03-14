import { FaUserPlus, FaEnvelope, FaCheckCircle, FaUserShield, FaChartLine } from "react-icons/fa";

export default function Terms() {
  return (
    <div className="bg-gray-900 min-h-screen py-10 px-4">
      <div className="max-w-4xl mx-auto bg-gray-800 p-10 shadow-xl rounded-lg">
        {/* Title Section */}
        <h1 className="text-4xl font-bold text-white text-center mb-6">Sell on Auctigon</h1>
        <p className="text-white text-lg text-center mb-8">
          Become a seller on Auctigon by following these simple steps.
        </p>

        {/* Seller Registration Process */}
        <div className="space-y-8">
          {[
            {
              icon: <FaUserPlus size={24} />,
              title: "Create a Normal Account",
              description: "Sign up on Auctigon as a regular user and verify your email.",
            },
            {
              icon: <FaEnvelope size={24} />,
              title: "Contact Us",
              description: (
                <>
                  Email our team at{" "}
                  <a href="mailto:support@auctigon.com" className="text-green-400 underline">
                    support@auctigon.com
                  </a>{" "}
                  to request seller access.
                </>
              ),
            },
            {
              icon: <FaCheckCircle size={24} />,
              title: "Pass the Quality Test",
              description: "Submit your sample products for review. Our team will evaluate their quality.",
            },
            {
              icon: <FaUserShield size={24} />,
              title: "Get Approved by an Admin",
              description: "Once approved, an admin will promote you to a seller account.",
            },
            {
              icon: <FaChartLine size={24} />,
              title: "Access Seller Features",
              description: "As a seller, you can list products and view exclusive bid & product analytics.",
            },
          ].map((step, index) => (
            <div key={index} className="flex items-start">
              <div className="bg-green-600 text-white w-12 h-12 flex items-center justify-center font-bold rounded-full">
                {step.icon}
              </div>
              <div className="ml-4">
                <h2 className="text-xl font-semibold text-white">{step.title}</h2>
                <p className="text-white">{step.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* FAQ Section */}
        <div className="mt-10 bg-gray-700 p-6 rounded-lg shadow-sm">
          <h2 className="text-2xl font-bold text-white text-center mb-4">FAQs</h2>
          <div className="space-y-4">
            {[
              {
                question: "How long does the approval process take?",
                answer: "Typically, it takes 2-3 business days for our team to review your application and sample products.",
              },
              {
                question: "Do I need to pay to become a seller?",
                answer: "No, signing up as a seller on Auctigon is free. However, transaction fees may apply on successful sales.",
              },
              {
                question: "What kind of products can I sell?",
                answer: "We accept a wide range of products, but they must meet our quality and authenticity standards.",
              },
            ].map((faq, index) => (
              <div key={index} className="bg-gray-800 p-4 rounded-lg shadow">
                <h3 className="text-lg font-semibold text-white">{faq.question}</h3>
                <p className="text-white mt-1">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Contact Section */}
        <div className="mt-10 text-center">
          <h2 className="text-2xl font-bold text-white">Still have questions?</h2>
          <p className="text-white">Reach out to our team for assistance.</p>

          <div className="mt-6">
            <a
              href="/contact"
              className="bg-green-600 text-white px-6 py-3 rounded-lg shadow-md hover:bg-green-700 transition"
            >
              Contact Support
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
