"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Image from "next/image";
import { Check } from "lucide-react";

const features = [
  "Licensed and experienced pharmacists",
  "State-of-the-art facilities",
  "Comprehensive medication reviews",
  "Personalized care plans"
];

export function About() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  return (
    <section id="about" className="py-20 bg-emerald-50">
      <div className="container mx-auto px-4">
        <div ref={ref} className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="relative h-[400px] md:h-[500px]"
          >
            <Image
              src="https://images.unsplash.com/photo-1587854692152-cbe660dbde88?q=80&w=1000"
              alt="Pharmacy Team"
              fill
              className="object-cover rounded-lg shadow-xl"
              loading="lazy"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              About Eden Pharmacy
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              With over 20 years of experience, Eden Pharmacy has been a trusted healthcare partner in the community. 
              Our commitment to excellence and patient care sets us apart.
            </p>
            
            <ul className="space-y-4">
              {features.map((feature, index) => (
                <motion.li
                  key={feature}
                  initial={{ opacity: 0, x: 20 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                  className="flex items-center space-x-3"
                >
                  <Check className="h-5 w-5 text-emerald-600" />
                  <span className="text-gray-600">{feature}</span>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
}