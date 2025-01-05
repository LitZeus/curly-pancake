"use client";

import { useEffect, useRef } from "react";

export function BackgroundAnimation() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    // Resize the canvas to fit the window
    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    resizeCanvas();
    window.addEventListener("resize", resizeCanvas);

    // Array to hold the particles
    const particles: { x: number; y: number; vx: number; vy: number; color: string }[] = [];
    const particleCount = 30; // Fewer particles for a more minimal look

    // Initialize particles
    for (let i = 0; i < particleCount; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 0.5, // Random speed in x direction
        vy: (Math.random() - 0.5) * 0.5, // Random speed in y direction
        color: `rgba(255, 255, 255, 0.6)`, // Light, subtle color
      });
    }

    let mouse = { x: canvas.width / 2, y: canvas.height / 2 };

    // Draw the particles
    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height); // Clear the canvas

      // Update and draw each particle
      particles.forEach((particle) => {
        particle.x += particle.vx;
        particle.y += particle.vy;

        // Bounce particles off the edges of the canvas
        if (particle.x < 0 || particle.x > canvas.width) particle.vx *= -1;
        if (particle.y < 0 || particle.y > canvas.height) particle.vy *= -1;

        // Draw the particle
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, 2, 0, Math.PI * 2); // Small size for minimal look
        ctx.fillStyle = particle.color;
        ctx.fill();
      });

      // Draw lines between particles if they are close enough
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          // Only connect particles that are close to each other
          if (distance < 100) {
            const opacity = 1 - distance / 100; // Decrease opacity as distance increases
            ctx.beginPath();
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.strokeStyle = `rgba(255, 255, 255, ${opacity})`; // Light line color
            ctx.lineWidth = 0.5;
            ctx.stroke();
          }
        }
      }

      requestAnimationFrame(draw); // Keep animating
    };

    // Update mouse position
    const handleMouseMove = (e: MouseEvent) => {
      mouse.x = e.clientX;
      mouse.y = e.clientY;
    };

    // Add mouse move listener for interaction
    canvas.addEventListener("mousemove", handleMouseMove);
    draw(); // Start the animation

    return () => {
      window.removeEventListener("resize", resizeCanvas);
      canvas.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 z-0 pointer-events-none"
    ></canvas>
  );
}
