import { useState } from "react";
import { motion } from "framer-motion";

const ContactCta = () => {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState("idle"); // 'idle' | 'sending' | 'success' | 'error'
  const [message, setMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!email) return;

    setStatus("sending");
    setMessage("");

    try {
      const res = await fetch("https://visualstechwebsite-backend.onrender.com/api/send_mail", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json"
        },
        body: JSON.stringify({
          name: "Website CTA",
          email,
          phone: "",
          subject: "New CTA subscription/contact",
          message: "CTA email submit from homepage: " + email
        }),
        credentials: "include"
      });

      if (!res.ok) throw new Error("Failed to send");

      setStatus("success");
      setMessage("Thank you! We'll reply within 1 hour.");
      setEmail("");
    } catch (err) {
      setStatus("error");
      setMessage("Could not send. Try again later.");
    }
    setTimeout(() => { setStatus("idle"); setMessage(""); }, 4000);
  };

  return (
    <section className="bg-[#d9d4c7]/50 py-20">
      <div className="container-custom flex justify-center">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="bg-white/80 border border-[#e3f2fd] backdrop-blur-xl rounded-3xl shadow-2xl max-w-3xl w-full py-12 px-7 md:px-12 mx-auto"
        >
          <div className="text-center">
            <h2 className="headline-base headline-section mb-3">
              <span className="lead">
                Ready for Your Next <span className="emphasis">Leap?</span>
              </span>
              <span className="impact">
                Let’s <span className="emphasis">Transform</span> Your Digital Presence Together.
              </span>
            </h2>

            <p className="mx-auto mt-4 mb-7 text-[#3178c6] font-inter text-lg font-semibold tracking-tight max-w-xl">
              Get personalized advice and project insights from Visuals Tech’s in-house product team.
            </p>

            {/* Email Input + Let's Talk Button (inline or stacked on mobile) */}
            <form
              className="w-full flex flex-col sm:flex-row gap-3 items-center justify-center mb-2"
              autoComplete="off"
              onSubmit={handleSubmit}
            >
              <div className="flex-1 min-w-[220px]">
                <input
                  type="email"
                  name="email"
                  placeholder="Your email here"
                  value={email}
                  onChange={e => setEmail(e.target.value)}
                  className="w-full px-4 py-3 rounded-lg border border-[#ccdce8] bg-white/60 font-inter text-gray-700 placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-[#7f9cbc] transition"
                  required
                  autoComplete="off"
                  disabled={status === "sending" || status === "success"}
                />
              </div>
              <button
                type="submit"
                disabled={status === "sending" || status === "success"}
                className={`btn-primary text-lg px-8 py-3 font-semibold flex items-center gap-2 bg-gradient-to-r from-blue-500 to-[#144678] text-white shadow-lg rounded-full hover:scale-[1.04] transition-all duration-200 ${status !== "idle" ? "opacity-50 cursor-not-allowed" : ""}`}
                style={{ minWidth: 140, justifyContent: "center" }}
              >
                {status === "sending" ? "Sending..." : "Let’s Talk"}
                <span aria-hidden="true">&rarr;</span>
              </button>
            </form>

            {/* Microcopy/reassurance below buttons */}
            {message ? (
              <div className={`text-sm mt-2 ${status === "error" ? "text-red-600" : "text-[#3178c6]"}`}>{message}</div>
            ) : (
              <div className="text-sm text-gray-500 mt-4 mb-1">
                Average reply: <span className="font-semibold text-[#3178c6]">1 hour</span>. No spam. No nonsense.
              </div>
            )}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactCta;
