import { useRef } from "react";

export default function ContactForm() {
  const formRef = useRef();

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

    fetch("https://script.google.com/macros/s/AKfycbx2InBnbWhiY19amv7JX4cc7iUZdn7lqVfj4519TEFKet7Xv7XMKanKxRy1LT3l4A/exec", {
      method: "POST",
      body: JSON.stringify(formData),
    })
      .then(() => {
        alert("Submitted successfully!");
        form.reset();
      })
      .catch(() => alert("Submission failed."));
  };

  return (
   <div className="min-h-screen flex items-center justify-center px-4 mb-20">
  <div className="bg-white border border-gray-300 px-4 sm:px-6 md:px-10 w-full max-w-[1100px] h-auto py-10 flex items-center justify-center">
    <form
      ref={formRef}
      onSubmit={handleSubmit}
      className="w-full max-w-[950px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-y-6 md:gap-x-20 font-cormorant text-gray-900"
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
            className="w-full h-[60px] md:h-[84px] border border-black px-3 md:px-4 text-[18px] md:text-[24px] rounded"
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
          className="w-full h-[54px] md:h-[70px] border border-black px-4 text-[16px] md:text-[20px] rounded"
        />
      </div>

      <div className="flex flex-col space-y-2 w-full">
        <label className="text-[20px] md:text-[28px] font-medium">What type of event are you planning*</label>
        <select
          name="event_type"
          required
          className="w-full h-[54px] md:h-[70px] border border-black px-4 text-[16px] md:text-[20px] rounded"
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
            className="w-full h-[60px] md:h-[84px] border border-black px-3 md:px-4 text-[18px] md:text-[24px] rounded"
          />
        </div>
      ))}

      <div className="md:col-span-2 flex flex-col space-y-1 w-full">
        <label className="text-[20px] md:text-[28px] font-medium">Tell me more about the project</label>
        <textarea
          name="message"
          className="w-full h-[140px] md:h-[180px] border border-black px-3 md:px-4 py-2 text-[18px] md:text-[24px] rounded resize-none"
        />
      </div>

      <div className="md:col-span-2 flex justify-start">
        <button
          type="submit"
          className="bg-[#1A1A18] text-white text-[24px] md:text-[36px] w-full sm:w-[300px] md:w-[400px] h-[60px] md:h-[84px] rounded"
        >
          Send
        </button>
      </div>
    </form>
  </div>
</div>



  );
}
