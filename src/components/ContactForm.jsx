import { useRef, useState } from "react";

export default function ContactForm() {
  const formRef = useRef();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = formRef.current;

    const formData = {
      name: form.full_name.value,
      partner: form.partner_name.value,
      email: form.email.value,
      phone: form.phone.value,
      instagram: form.instagram.value,
      venue: form.venue.value,
      date: form.project_date.value,
      event_type: form.event_type.value,
      planner: form.planner.value,
      referral: form.referral.value,
      message: form.message.value,
    };

    setIsSubmitting(true);

    fetch(
      "https://script.google.com/macros/s/AKfycbysn3U4tHqTf2wMx72eE8uERxTOTR39H8LV-Sy9x1femJ-8iH_NL1IIiomByeoG_Igq/exec",
      {
        method: "POST",
        body: JSON.stringify(formData),
      }
    )
      .then(() => {
        setTimeout(() => {
          setIsSubmitting(false);
          setSubmitted(true);
          form.reset();
        }, 500); // simulate short processing time
      })
      .catch(() => {
        setIsSubmitting(false);
        alert("Submission failed. But your message may have still been received.");
      });
  };

  const goToHome = () => {
    window.location.href = "/";
  };

  const closeModal = () => {
    setSubmitted(false);
  };

  return (
    <div className="min-h-screen flex items-center justify-center px-4 mb-20 font-cormorant">
      <div className="bg-white border border-gray-300 px-4 sm:px-6 md:px-10 w-full max-w-[1100px] h-auto py-10 flex items-center justify-center">
        <form
          ref={formRef}
          onSubmit={handleSubmit}
          className="w-full max-w-[950px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-y-6 md:gap-x-20 text-gray-900"
        >
          {[{ label: "Your Full Name*", name: "full_name", type: "text" },
            { label: "Your Partner’s Full Name*", name: "partner_name", type: "text" },
            { label: "Email Address*", name: "email", type: "email" },
            { label: "Phone Number*", name: "phone", type: "tel" },
            { label: "Instagram Handle", name: "instagram", type: "text" },
            { label: "Location | Venue", name: "venue", type: "text" }].map((field, i) => (
            <div key={i} className="flex flex-col space-y-1 w-full">
              <label className="text-[20px] md:text-[28px] font-medium">{field.label}</label>
              <input
                type={field.type}
                name={field.name}
                className="w-full py-2 border border-black px-3 md:px-4 text-[18px] md:text-[24px] rounded"
                required={field.label.includes("*")}
              />
            </div>
          ))}

          <div className="flex flex-col space-y-2 w-full">
            <label className="text-[20px] md:text-[28px] font-medium">Project Date*</label>
            <input
              type="date"
              name="project_date"
              required
              className="w-full py-2 border border-black px-4 text-[16px] md:text-[20px] rounded"
            />
          </div>

          <div className="flex flex-col space-y-2 w-full">
            <label className="text-[20px] md:text-[28px] font-medium">What type of event are you planning*</label>
            <select
              name="event_type"
              required
              className="w-full py-2 border border-black px-4 text-[16px] md:text-[20px] rounded"
            >
              <option value="">Select an option</option>
              <option value="wedding">Wedding</option>
              <option value="elopement">Elopement</option>
              <option value="other">Other</option>
            </select>
          </div>

          {[{ label: "Wedding Planner", name: "planner", type: "text" },
            { label: "Who referred us to you?", name: "referral", type: "text" }].map((field, i) => (
            <div key={i} className="flex flex-col space-y-1 w-full">
              <label className="text-[20px] md:text-[28px] font-medium">{field.label}</label>
              <input
                type={field.type}
                name={field.name}
                className="w-full py-2 border border-black px-3 md:px-4 text-[18px] md:text-[24px] rounded"
              />
            </div>
          ))}

          <div className="md:col-span-2 flex flex-col space-y-1 w-full">
            <label className="text-[20px] md:text-[28px] font-medium">Tell me more about the project</label>
            <textarea
              name="message"
              className="w-full py-3 min-h-28 border border-black px-3 md:px-4 text-[18px] md:text-[24px] rounded resize-none"
            />
          </div>

          <div className="md:col-span-2 flex flex-col items-start gap-4">
            <button
              type="submit"
              disabled={isSubmitting}
              className="bg-[#1A1A18] text-white text-[24px] md:text-[36px] w-full sm:w-[300px] md:w-[400px] h-[60px] md:h-[84px] rounded flex items-center justify-center transition-transform duration-300 hover:scale-105 disabled:opacity-60"
            >
              {isSubmitting ? (
                <svg className="w-8 h-8 animate-spin text-white" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"></path>
                </svg>
              ) : (
                "Send"
              )}
            </button>
          </div>
        </form>
      </div>

      {submitted && (
        <div className="fixed inset-0 bg-black text-white flex items-center justify-center z-50">
          <div
            className="w-full h-full flex flex-col items-center justify-center text-center px-6"
            onClick={closeModal}
          >
            <div
              className="flex flex-col items-center justify-center"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Checkmark Circle */}
              <div className="w-24 h-24 md:w-32 md:h-32 rounded-full border-4 border-white flex items-center justify-center mb-8">
                <svg
                  className="w-10 h-10 md:w-14 md:h-14 text-white"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="3"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M5 13l4 4L19 7"
                  />
                </svg>
              </div>
            
              {/* Text Content */}
              <h2 className="text-3xl md:text-5xl font-bold mb-4">Thank You!</h2>
              <p className="text-gray-300 text-base md:text-lg max-w-md mb-8">
                Your submission has been received. We'll reach out to you soon.
              </p>
            
              {/* Back Home Button */}
              <button
                onClick={goToHome}
                className="bg-white text-black text-base md:text-lg px-6 py-3 rounded-full font-semibold hover:bg-gray-200 transition"
              >
                Back home
              </button>
            </div>
          </div>
        </div>
      )}

    </div>
  );
}
