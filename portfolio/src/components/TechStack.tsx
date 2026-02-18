"use client";

import { motion } from "framer-motion";
import { Cpu, Database, Network } from "lucide-react";

const StackItem = ({ title, items, icon: Icon, delay }: { title: string, items: string[], icon: any, delay: number }) => (
    <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay, duration: 0.5 }}
        className="bg-white border border-gray-200 p-8 rounded-3xl hover:border-accent/50 hover:shadow-lg transition-all duration-300 group h-full shadow-sm"
    >
        <div className="mb-6 w-14 h-14 rounded-2xl bg-gray-50 flex items-center justify-center group-hover:bg-accent group-hover:rotate-3 transition-all duration-300">
            <Icon className="w-7 h-7 text-gray-700 group-hover:text-white transition-colors" />
        </div>
        <h3 className="text-xl font-bold mb-4 tracking-tight text-gray-900">{title}</h3>
        <ul className="space-y-3">
            {items.map((item, i) => (
                <li key={i} className="text-gray-600 font-medium text-sm flex items-center gap-3">
                    <div className="w-2 h-2 rounded-full bg-gray-200 group-hover:bg-accent transition-colors" />
                    {item}
                </li>
            ))}
        </ul>
    </motion.div>
);

export default function TechStack() {
    return (
        <section className="py-12 px-6 md:px-12 pb-24">
            <div className="max-w-[1800px] mx-auto w-full">
                <motion.div className="mb-10 flex items-center justify-between">
                    <div className="flex items-center gap-3">
                        <div className="w-2 h-8 rounded-full bg-accent" />
                        <h2 className="text-lg font-bold text-gray-900 tracking-tight">
                            Tech Arsenal
                        </h2>
                    </div>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    <StackItem
                        title="Hardware"
                        items={["ESP32 & C++", "FreeRTOS", "PMS5003 Sensors"]}
                        icon={Cpu}
                        delay={0.1}
                    />
                    <StackItem
                        title="Blockchain"
                        items={["Cardano", "Aiken (Smart Contracts)", "PyCardano"]}
                        icon={Database}
                        delay={0.2}
                    />
                    <StackItem
                        title="Management"
                        items={["Jira", "Agile Sprints", "Technical Content Strategy"]}
                        icon={Network}
                        delay={0.3}
                    />
                </div>
            </div>
        </section>
    );
}
