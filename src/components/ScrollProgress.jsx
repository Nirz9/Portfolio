import { useScroll, useSpring, motion } from 'framer-motion';

export default function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 100, damping: 30 });

  return (
    <motion.div
      style={{
        position: 'fixed', top: 0, left: 0, right: 0,
        height: 2, zIndex: 100, transformOrigin: 'left',
        scaleX,
        background: 'linear-gradient(90deg, #d4f76a, #7a9c37)',
      }}
    />
  );
}
