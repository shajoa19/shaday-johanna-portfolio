/**
 * useReactiveGradient Hook
 * Creates a reactive gradient effect that follows mouse movement
 * Perfect for aurora borealis effects that morph with cursor position
 */

import { useRef, useEffect, useState } from 'react';

interface GradientPosition {
  x: number;
  y: number;
}

export function useReactiveGradient() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [position, setPosition] = useState<GradientPosition>({ x: 0, y: 0 });

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const handleMouseMove = (e: MouseEvent) => {
      const rect = container.getBoundingClientRect();
      const x = ((e.clientX - rect.left) / rect.width) * 100;
      const y = ((e.clientY - rect.top) / rect.height) * 100;

      setPosition({ x, y });

      // Apply gradient effect
      const gradientX = Math.min(100, Math.max(0, x));
      const gradientY = Math.min(100, Math.max(0, y));

      container.style.setProperty('--gradient-x', `${gradientX}%`);
      container.style.setProperty('--gradient-y', `${gradientY}%`);
    };

    const handleMouseLeave = () => {
      // Reset to center on mouse leave
      container.style.setProperty('--gradient-x', '50%');
      container.style.setProperty('--gradient-y', '50%');
      setPosition({ x: 50, y: 50 });
    };

    container.addEventListener('mousemove', handleMouseMove);
    container.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      container.removeEventListener('mousemove', handleMouseMove);
      container.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, []);

  return { containerRef, position };
}
