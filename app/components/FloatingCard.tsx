import { useState, useEffect, useRef } from 'react';

interface FloatingCardProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  direction?: 'up' | 'down' | 'left' | 'right';
  intensity?: 'low' | 'medium' | 'high';
}

export default function FloatingCard({
  children,
  className = '',
  delay = 0,
  direction = 'up',
  intensity = 'medium',
}: FloatingCardProps) {
  const [isVisible, setIsVisible] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), delay);
    return () => clearTimeout(timer);
  }, [delay]);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const element = cardRef.current;
      if (!element) return;

      const rect = element.getBoundingClientRect();
      const x = (e.clientX - rect.left) / rect.width;
      const y = (e.clientY - rect.top) / rect.height;
      setMousePosition({ x, y });
    };

    const element = cardRef.current;
    if (element) {
      element.addEventListener('mousemove', handleMouseMove);
      return () => element.removeEventListener('mousemove', handleMouseMove);
    }
  }, []);

  const intensityMultiplier = {
    low: 0.5,
    medium: 1,
    high: 1.5,
  };

  const getTransform = () => {
    const multiplier = intensityMultiplier[intensity];
    const baseTransform = isVisible ? 'translateY(0) scale(1)' : 'translateY(20px) scale(0.95)';

    if (direction === 'up') {
      const hoverY = (mousePosition.y - 0.5) * 10 * multiplier;
      const hoverX = (mousePosition.x - 0.5) * 5 * multiplier;
      return `${baseTransform} translate(${hoverX}px, ${hoverY}px)`;
    } else if (direction === 'down') {
      const hoverY = (mousePosition.y - 0.5) * -10 * multiplier;
      const hoverX = (mousePosition.x - 0.5) * 5 * multiplier;
      return `${baseTransform} translate(${hoverX}px, ${hoverY}px)`;
    } else if (direction === 'left') {
      const hoverX = (mousePosition.x - 0.5) * 10 * multiplier;
      const hoverY = (mousePosition.y - 0.5) * 5 * multiplier;
      return `${baseTransform} translate(${hoverX}px, ${hoverY}px)`;
    } else {
      const hoverX = (mousePosition.x - 0.5) * -10 * multiplier;
      const hoverY = (mousePosition.y - 0.5) * 5 * multiplier;
      return `${baseTransform} translate(${hoverX}px, ${hoverY}px)`;
    }
  };

  return (
    <div
      ref={cardRef}
      data-floating-card
      className={`transition-all duration-700 ease-out ${className}`}
      style={{
        transform: getTransform(),
        opacity: isVisible ? 1 : 0,
      }}
    >
      {children}
    </div>
  );
}
