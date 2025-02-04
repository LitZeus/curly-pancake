"use client";

import { createPopup } from "@typeform/embed";
import { motion } from "framer-motion";
import { useEffect, useRef } from "react";

export default function ContactPage() {
  const popupRef = useRef<any>(null);

  useEffect(() => {
    popupRef.current = createPopup("YOUR_TYPEFORM_ID", {
      mode: "popup",
      autoClose: 5000,
      open: false,
    });
  }, []);

  const openForm = () => {
    if (popupRef.current) popupRef.current.open();
  };

  return (
    <div className="container mx-auto px-4 md:px-6 lg:px-8 pt-32 pb-16" onClick={openForm}>
      <motion.h1
        className="text-4xl font-bold text-center mb-12"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        Contact Me
      </motion.h1>
      <motion.p
        className="text-lg text-center mb-6 text-gray-600"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.7, delay: 0.3 }}
      >
        I'd love to hear from you! Whether you're a recruiter, a collaborator, or just exploring, let’s connect.
      </motion.p>
    </div>
  );
}
