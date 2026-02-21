"use client";

import { useEffect, useRef } from "react";
import { motion } from "framer-motion";

interface Particle {
    x: number;
    y: number;
    size: number;
    speedX: number;
    speedY: number;
    opacity: number;
}

export default function Particles() {
    const canvasRef = useRef<HTMLCanvasElement>(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        const ctx = canvas.getContext("2d");
        if (!ctx) return;

        let particlesArray: Particle[] = [];
        let animationFrameId: number;

        const resizeCanvas = () => {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
        };

        window.addEventListener("resize", resizeCanvas);
        resizeCanvas();

        const initParticles = () => {
            particlesArray = [];
            const numberOfParticles = Math.floor((canvas.width * canvas.height) / 15000);

            for (let i = 0; i < numberOfParticles; i++) {
                const size = Math.random() * 2 + 0.5;
                const x = Math.random() * canvas.width;
                const y = Math.random() * canvas.height;
                // Slower drifting movement
                const speedX = (Math.random() - 0.5) * 0.3;
                const speedY = (Math.random() - 0.5) * 0.3;
                // Subtle orange/peach tint from the user's image reference, adjusted for dark mode
                const opacity = Math.random() * 0.5 + 0.1;

                particlesArray.push({ x, y, size, speedX, speedY, opacity });
            }
        };

        const animateParticles = () => {
            ctx.clearRect(0, 0, canvas.width, canvas.height);

            for (let i = 0; i < particlesArray.length; i++) {
                const p = particlesArray[i];

                // Update position
                p.x += p.speedX;
                p.y += p.speedY;

                // Wrap around margins smoothly
                if (p.x < 0) p.x = canvas.width;
                if (p.x > canvas.width) p.x = 0;
                if (p.y < 0) p.y = canvas.height;
                if (p.y > canvas.height) p.y = 0;

                // Draw particle (using a soft peach/orange accent color from the image but mixed with the dark theme)
                ctx.beginPath();
                ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
                ctx.fillStyle = `rgba(253, 157, 36, ${p.opacity})`; // SDG 11 color roughly matches the peach vibe
                ctx.fill();
            }

            animationFrameId = requestAnimationFrame(animateParticles);
        };

        initParticles();
        animateParticles();

        return () => {
            window.removeEventListener("resize", resizeCanvas);
            cancelAnimationFrame(animationFrameId);
        };
    }, []);

    return (
        <motion.canvas
            ref={canvasRef}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 2 }}
            className="pointer-events-none fixed inset-0 z-0 opacity-40"
        />
    );
}
