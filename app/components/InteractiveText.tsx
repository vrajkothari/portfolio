import { useState, useEffect, useRef } from 'react';

interface InteractiveTextProps {
  text: string;
  className?: string;
  hoverEffect?: 'glow' | 'scale' | 'rotate' | 'bounce';
  delay?: number;
}

export default function InteractiveText({
  text,
  className = '',
  hoverEffect = 'glow',
  delay = 0,
}: InteractiveTextProps) {
  const [isHovered, setIsHovered] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), delay);
    return () => clearTimeout(timer);
  }, [delay]);

  const getHoverStyles = () => {
    switch (hoverEffect) {
      case 'glow':
        return isHovered
          ? 'drop-shadow-[0_0_20px_rgba(34,197,94,0.8)]'
          : 'drop-shadow-[0_0_10px_rgba(34,197,94,0.4)]';
      case 'scale':
        return isHovered ? 'scale-110' : 'scale-100';
      case 'rotate':
        return isHovered ? 'rotate-3' : 'rotate-0';
      case 'bounce':
        return isHovered ? 'animate-bounce' : '';
      default:
        return '';
    }
  };

  return (
    <span
      className={`
        transition-all duration-500 ease-out cursor-pointer
        ${getHoverStyles()}
        ${className}
        ${isVisible ? 'opacity-100' : 'opacity-0'}
      `}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{
        transform: isVisible ? 'translateY(0)' : 'translateY(20px)',
      }}
    >
      {text}
    </span>
  );
}

interface TypewriterTextProps {
  text: string;
  speed?: number;
  className?: string;
  onComplete?: () => void;
}

export function TypewriterText({
  text,
  speed = 100,
  className = '',
  onComplete,
}: TypewriterTextProps) {
  const [displayText, setDisplayText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (currentIndex < text.length) {
      const timeout = setTimeout(() => {
        setDisplayText((prev) => prev + text[currentIndex]);
        setCurrentIndex((prev) => prev + 1);
      }, speed);

      return () => clearTimeout(timeout);
    } else if (onComplete) {
      onComplete();
    }
  }, [currentIndex, text, speed, onComplete]);

  return (
    <span className={className}>
      {displayText}
      <span className="animate-pulse">|</span>
    </span>
  );
}

interface MagneticButtonProps {
  children: React.ReactNode;
  className?: string;
  strength?: number;
  onClick?: () => void;
}

export function MagneticButton({
  children,
  className = '',
  strength = 0.3,
  onClick,
}: MagneticButtonProps) {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const buttonRef = useRef<HTMLButtonElement>(null);

  const handleMouseMove = (e: React.MouseEvent) => {
    if (buttonRef.current) {
      const rect = buttonRef.current.getBoundingClientRect();
      const x = e.clientX - rect.left - rect.width / 2;
      const y = e.clientY - rect.top - rect.height / 2;

      setPosition({
        x: x * strength,
        y: y * strength,
      });
    }
  };

  const handleMouseLeave = () => {
    setPosition({ x: 0, y: 0 });
  };

  return (
    <button
      ref={buttonRef}
      className={`
        transition-transform duration-300 ease-out
        hover:scale-105 active:scale-95
        ${className}
      `}
      style={{
        transform: `translate(${position.x}px, ${position.y}px)`,
      }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      onClick={onClick}
    >
      {children}
    </button>
  );
}
