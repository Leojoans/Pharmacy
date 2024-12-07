"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Pill, Stethoscope, Clock, UserCheck } from "lucide-react";
import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";

const services = [
  {
    icon: Pill,
    title: "Prescription Services",
    description: "Quick and accurate prescription filling with expert pharmacist consultation."
  },
  {
    icon: Stethoscope,
    title: "Health Monitoring",
    description: "Regular health check-ups and monitoring services for chronic conditions."
  },
  {
    icon: Clock,
    title: "24/7 Availability",
    description: "Round-the-clock service for all your pharmaceutical needs."
  },
  {
    icon: UserCheck,
    title: "Personal Care",
    description: "Personalized healthcare advice and medication management."
  }
];

export function Services() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  return (
    <section id="services" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Our Services
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            We offer a comprehensive range of pharmaceutical services to ensure your health and well-being.
          </p>
        </div>

        <div ref={ref} className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="h-full hover:shadow-lg transition-shadow duration-300">
                <CardHeader>
                  <div className="w-12 h-12 bg-emerald-100 rounded-full flex items-center justify-center mb-4">
                    <service.icon className="w-6 h-6 text-emerald-600" />
                  </div>
                  <CardTitle className="text-xl mb-2">{service.title}</CardTitle>
                  <CardDescription>{service.description}</CardDescription>
                </CardHeader>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}