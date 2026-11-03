"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Mail, AlertCircle, ArrowUpRight, Loader2, MapPin, CheckCircle2 } from "lucide-react";
import { portfolioContent } from "@/content/portfolioData";

const WhatsAppIcon: React.FC<{ className?: string }> = ({ className = "w-5 h-5" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M12.04 2c-5.46 0-9.91 4.45-9.91 9.91 0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38c1.45.79 3.08 1.21 4.74 1.21 5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.01A9.82 9.82 0 0 0 12.04 2m.01 1.67c2.2 0 4.26.86 5.82 2.42a8.23 8.23 0 0 1 2.41 5.83c0 4.54-3.7 8.24-8.24 8.24-1.48 0-2.93-.4-4.2-1.15l-.3-.18-3.12.82.83-3.04-.2-.31a8.2 8.2 0 0 1-1.26-4.38c0-4.54 3.7-8.24 8.24-8.24M8.53 7.33c-.16 0-.35.06-.53.25-.19.19-.71.69-.71 1.69s.73 1.96.83 2.1c.1.13 1.41 2.16 3.43 3.03.48.21.86.33 1.15.43.48.15.93.13 1.28.08.39-.06 1.2-.49 1.37-.96.17-.48.17-.88.12-.96-.05-.08-.19-.13-.4-.23s-1.2-.59-1.39-.66c-.19-.06-.32-.1-.46.1-.13.19-.53.66-.65.79-.12.13-.24.15-.45.05s-.89-.33-1.69-1.05c-.62-.56-1.05-1.25-1.17-1.46-.13-.21-.01-.33.09-.43.09-.09.21-.24.32-.36.1-.13.14-.21.21-.36.07-.15.03-.28-.02-.38-.05-.1-.46-1.1-.63-1.51-.17-.4-.34-.35-.46-.35" />
  </svg>
);

const TikTokIcon: React.FC<{ className?: string }> = ({ className = "w-5 h-5" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.24 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z" />
  </svg>
);

export const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [status, setStatus] = useState<"idle" | "submitting" | "notice" | "error">("idle");
  const [feedbackMessage, setFeedbackMessage] = useState("");

  useEffect(() => {
    const handleSelectService = (e: Event) => {
      const customEvent = e as CustomEvent<{ subject: string }>;
      if (customEvent.detail?.subject) {
        setFormData((prev) => ({
          ...prev,
          subject: customEvent.detail.subject,
        }));
        setStatus("idle");
        setTimeout(() => {
          const subjectInput = document.getElementById("subject");
          if (subjectInput) {
            subjectInput.focus({ preventScroll: true });
          }
        }, 500);
      }
    };

    window.addEventListener("select-service", handleSelectService);
    return () => {
      window.removeEventListener("select-service", handleSelectService);
    };
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
      setStatus("error");
      setFeedbackMessage("Veuillez renseigner tous les champs obligatoires (*).");
      return;
    }

    setStatus("submitting");

    setTimeout(() => {
      // Direct honest feedback: prepare direct mailto transmission with the actual user message
      const subjectEncoded = encodeURIComponent(
        formData.subject.trim() || "Demande de contact : Projet d'importation"
      );
      const bodyEncoded = encodeURIComponent(
        `Nom: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
      );
      const directMailtoUrl = `mailto:bocovomorgan24@gmail.com?subject=${subjectEncoded}&body=${bodyEncoded}`;

      setStatus("notice");
      setFeedbackMessage(
        "Votre message est prêt à être transmis directement à Morgan Bocovo. Vous pouvez déclencher l'envoi par votre boîte e-mail ou finaliser l'échange sur WhatsApp."
      );

      // Trigger mail client smoothly
      if (typeof window !== "undefined") {
        window.location.href = directMailtoUrl;
      }
    }, 600);
  };

  return (
    <section
      id="contact"
      className="relative py-20 bg-vert-profond text-blanc-chaud overflow-hidden"
    >
      {/* Subtle organic light accent */}
      <div
        className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-cuivre/10 rounded-full blur-[160px] pointer-events-none -z-10"
        aria-hidden="true"
      />

      <div className="mx-auto w-full max-w-[1100px] px-5 sm:px-8 lg:px-12">
        {/* Responsive Grid: 40% Left Column / 60% Right Column with 48-56px gap */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 xl:gap-14 items-start">
          {/* Colonne Gauche — 40% (5 cols on 12-col grid) */}
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-5 flex flex-col items-start"
          >
            <span className="text-xs font-semibold tracking-wider uppercase text-cuivre-light bg-vert-profond-hover px-3.5 py-1.5 rounded-full border border-vert-profond-light mb-4 block">
              {portfolioContent.contact.sectionBadge}
            </span>

            {/* Titre : 40-44px desktop, font-weight 700, line-height 1.1 */}
            <h2 className="text-3xl sm:text-4xl lg:text-[2.65rem] font-display font-bold text-blanc-chaud mb-3.5 leading-[1.1] tracking-tight">
              Parlons de votre<br />projet d&apos;importation.
            </h2>

            {/* Description : largeur maîtrisée */}
            <p className="text-[15px] sm:text-base text-ivoire/85 leading-relaxed font-sans mb-6 sm:mb-7 max-w-md">
              {portfolioContent.contact.subtitle}
            </p>

            {/* Location Badge factuelle */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-vert-profond-hover/80 border border-vert-profond-light text-xs text-ivoire/90 mb-5">
              <MapPin className="w-3.5 h-3.5 text-cuivre" />
              <span>{portfolioContent.contact.location}</span>
            </div>

            {/* Contact Cards: Compact height 60-68px, gap 10-12px with brand colors */}
            <div className="w-full space-y-2.5 sm:space-y-3">
              {portfolioContent.contact.channels.map((channel, idx) => {
                const isWhatsApp = channel.type === "whatsapp";
                const isEmail = channel.type === "email";

                return (
                  <a
                    key={idx}
                    href={channel.actionUrl}
                    target={channel.type === "email" ? undefined : "_blank"}
                    rel={channel.type === "email" ? undefined : "noopener noreferrer"}
                    className={`group min-h-[62px] p-3.5 sm:p-4 rounded-2xl border flex items-center justify-between transition-all duration-[220ms] ease-out focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cuivre shadow-2xs ${
                      isWhatsApp
                        ? "bg-[#113833] border-emerald-500/30 hover:border-emerald-400 hover:bg-[#14423c]"
                        : isEmail
                        ? "bg-[#1f383a] border-amber-500/30 hover:border-amber-400 hover:bg-[#254345]"
                        : "bg-[#1a3337] border-rose-500/30 hover:border-rose-400 hover:bg-[#203c40]"
                    }`}
                  >
                    <div className="flex items-center gap-3.5">
                      <div
                        className={`w-10 h-10 rounded-xl flex items-center justify-center shadow-2xs group-hover:scale-105 transition-all duration-[220ms] flex-shrink-0 ${
                          isWhatsApp
                            ? "bg-emerald-500/20 text-[#25D366]"
                            : isEmail
                            ? "bg-amber-500/20 text-amber-300"
                            : "bg-rose-500/20 text-rose-300"
                        }`}
                      >
                        {channel.type === "email" ? (
                          <Mail className="w-4 h-4" />
                        ) : channel.type === "whatsapp" ? (
                          <WhatsAppIcon className="w-4 h-4" />
                        ) : (
                          <TikTokIcon className="w-4 h-4" />
                        )}
                      </div>
                      <div>
                        <span className="text-[11px] sm:text-xs uppercase tracking-wider text-ivoire/80 block font-medium">
                          {channel.label}
                        </span>
                        <span className="text-sm sm:text-[15px] font-semibold text-blanc-chaud group-hover:text-white transition-colors duration-[220ms]">
                          {channel.value}
                        </span>
                      </div>
                    </div>
                    <ArrowUpRight
                      className={`w-4 h-4 transition-transform duration-[220ms] ease-out group-hover:translate-x-[3px] ${
                        isWhatsApp
                          ? "text-[#25D366]"
                          : isEmail
                          ? "text-amber-300"
                          : "text-rose-300"
                      }`}
                    />
                  </a>
                );
              })}
            </div>

            {/* Factual Data Notice */}
            <div className="mt-6 pt-4 border-t border-vert-profond-light/60 text-xs text-ivoire/70 leading-relaxed">
              <p>{portfolioContent.contact.dataNotice}</p>
            </div>
          </motion.div>

          {/* Colonne Droite — 60% (7 cols on 12-col grid) */}
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.75, delay: 0.12, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-7 w-full p-6 sm:p-8 lg:p-9 rounded-3xl bg-vert-profond-hover border border-vert-profond-light shadow-xl"
          >
            <h3 className="font-display font-bold text-xl sm:text-2xl text-blanc-chaud mb-5">
              Envoyez votre message.
            </h3>

            {status === "notice" ? (
              <div
                role="status"
                aria-live="polite"
                className="p-5 sm:p-6 rounded-2xl bg-vert-profond border border-cuivre/60 flex items-start gap-4 animate-fadeIn"
              >
                <CheckCircle2 className="w-6 h-6 text-cuivre flex-shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-display font-bold text-blanc-chaud text-base mb-1.5">
                    Message préparé avec succès
                  </h4>
                  <p className="text-sm text-ivoire/90 leading-relaxed font-sans mb-4">
                    {feedbackMessage}
                  </p>
                  <div className="flex flex-wrap items-center gap-3">
                    <a
                      href={`mailto:bocovomorgan24@gmail.com?subject=${encodeURIComponent(
                        formData.subject || "Projet d'importation"
                      )}&body=${encodeURIComponent(
                        `Nom: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
                      )}`}
                      className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-cuivre text-blanc-chaud font-semibold text-xs tracking-wider uppercase hover:bg-cuivre-hover transition-colors"
                    >
                      <Mail className="w-3.5 h-3.5" />
                      <span>Ouvrir dans mon e-mail</span>
                    </a>
                    <button
                      type="button"
                      onClick={() => setStatus("idle")}
                      className="text-xs font-semibold uppercase tracking-wider text-ivoire/80 hover:text-blanc-chaud hover:underline cursor-pointer"
                    >
                      Modifier le message
                    </button>
                  </div>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4" noValidate>
                {status === "error" && (
                  <div
                    role="alert"
                    aria-live="polite"
                    className="p-3.5 rounded-xl bg-red-950/80 border border-red-500/60 flex items-center gap-3 text-xs text-red-200"
                  >
                    <AlertCircle className="w-4 h-4 text-red-400 flex-shrink-0" />
                    <span>{feedbackMessage}</span>
                  </div>
                )}

                {/* Nom et Email : 2 colonnes sur tablette/desktop, 1 colonne sur mobile */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-xs sm:text-[13px] font-semibold uppercase tracking-wider text-ivoire/90 mb-1.5"
                    >
                      Nom complet <span className="text-cuivre">*</span>
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      placeholder="Votre nom ou société"
                      className="w-full min-h-[46px] px-4 py-2.5 rounded-xl bg-vert-profond border border-vert-profond-light text-blanc-chaud text-sm sm:text-[15px] placeholder:text-ivoire/75 focus:border-cuivre focus:outline-none focus:ring-2 focus:ring-cuivre focus:ring-offset-2 focus:ring-offset-vert-profond transition-all duration-[200ms]"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="email"
                      className="block text-xs sm:text-[13px] font-semibold uppercase tracking-wider text-ivoire/90 mb-1.5"
                    >
                      Adresse e-mail <span className="text-cuivre">*</span>
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      placeholder="nom@domaine.com"
                      className="w-full min-h-[46px] px-4 py-2.5 rounded-xl bg-vert-profond border border-vert-profond-light text-blanc-chaud text-sm sm:text-[15px] placeholder:text-ivoire/75 focus:border-cuivre focus:outline-none focus:ring-2 focus:ring-cuivre focus:ring-offset-2 focus:ring-offset-vert-profond transition-all duration-[200ms]"
                    />
                  </div>
                </div>

                {/* Objet de l'échange */}
                <div>
                  <label
                    htmlFor="subject"
                    className="block text-xs sm:text-[13px] font-semibold uppercase tracking-wider text-ivoire/90 mb-1.5"
                  >
                    Objet de l&apos;échange
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder="Ex: Projet commercial / Approvisionnement"
                    className="w-full min-h-[46px] px-4 py-2.5 rounded-xl bg-vert-profond border border-vert-profond-light text-blanc-chaud text-sm sm:text-[15px] placeholder:text-ivoire/75 focus:border-cuivre focus:outline-none focus:ring-2 focus:ring-cuivre focus:ring-offset-2 focus:ring-offset-vert-profond transition-all duration-[200ms]"
                  />
                </div>

                {/* Message */}
                <div>
                  <label
                    htmlFor="message"
                    className="block text-xs sm:text-[13px] font-semibold uppercase tracking-wider text-ivoire/90 mb-1.5"
                  >
                    Votre message <span className="text-cuivre">*</span>
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={3}
                    placeholder="Précisez votre demande, vos destinations ou les objectifs de votre démarche..."
                    className="w-full min-h-[105px] px-4 py-2.5 rounded-xl bg-vert-profond border border-vert-profond-light text-blanc-chaud text-sm sm:text-[15px] placeholder:text-ivoire/75 focus:border-cuivre focus:outline-none focus:ring-2 focus:ring-cuivre focus:ring-offset-2 focus:ring-offset-vert-profond transition-all duration-[200ms] resize-y"
                  />
                </div>

                {/* Bouton d'envoi : Envoyer le message → */}
                <motion.button
                  whileHover={{ y: -2 }}
                  whileTap={{ y: 0 }}
                  type="submit"
                  disabled={status === "submitting"}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-3.5 rounded-xl bg-cuivre text-blanc-chaud hover:bg-cuivre-hover transition-all duration-[200ms] ease-out font-semibold text-sm tracking-wide shadow-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cuivre focus-visible:ring-offset-2 focus-visible:ring-offset-vert-profond cursor-pointer group disabled:opacity-70 disabled:cursor-not-allowed min-h-[46px]"
                >
                  {status === "submitting" ? (
                    <>
                      <Loader2 className="w-4 h-4 animate-spin text-blanc-chaud" />
                      <span>Envoi en cours...</span>
                    </>
                  ) : (
                    <>
                      <span>Envoyer le message</span>
                      <span className="text-blanc-chaud transition-transform duration-[200ms] group-hover:translate-x-1">→</span>
                    </>
                  )}
                </motion.button>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
};
