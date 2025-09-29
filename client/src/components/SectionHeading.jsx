import React from 'react';
import { motion } from 'framer-motion';

export default function SectionHeading({ title, eyebrow, align = 'left' }) {
  return (
    <div className={`mb-10 ${align === 'center' ? 'text-center' : ''}`}>
      {eyebrow && (
        <motion.span
          initial={{ opacity: 0, y: 6 }}
          whileInView={{ opacity: 0.6, y: 0 }}
          viewport={{ once: true, margin: '-40px' }}
          className="block text-[11px] tracking-[0.15em] uppercase text-amber-300/70 font-medium"
        >
          {eyebrow}
        </motion.span>
      )}
      <motion.h2
        initial={{ opacity: 0, y: 14 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-40px' }}
        transition={{ duration: 0.55, ease: 'easeOut' }}
        className="text-zinc-100 text-2xl md:text-4xl font-light tracking-tight"
      >
        {title}
      </motion.h2>
    </div>
  );
}
