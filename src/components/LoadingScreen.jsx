import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function LoadingScreen({ onComplete }) {
  const [show, setShow] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShow(false);
      setTimeout(onComplete, 400);
    }, 1800);
    return () => clearTimeout(timer);
  }, [onComplete]);

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          exit={{ opacity: 0 }}
          transition={{ duration: 0.4 }}
          style={{
            position: 'fixed', inset: 0, background: '#f7f8f4',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            zIndex: 9999, flexDirection: 'column', gap: '2rem',
          }}
        >
          {/* Brand mark */}
          <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
            <div style={{ display: 'grid', placeItems: 'center', width: 44, height: 44, background: '#171b17', color: '#d4f76a', borderRadius: 13, fontFamily: 'monospace', fontSize: 22, letterSpacing: '-0.15em', paddingRight: 4 }}>
              /n
            </div>
            <span style={{ fontFamily: 'Manrope, sans-serif', fontWeight: 800, fontSize: '1.8rem', letterSpacing: '-0.06em', color: '#171b17' }}>
              neeraj<span style={{ color: '#7c9e37' }}>.</span>
            </span>
          </div>

          {/* Progress bar */}
          <div style={{ width: 200, height: 2, background: '#e8ecdf', borderRadius: 999, overflow: 'hidden' }}>
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: '100%' }}
              transition={{ duration: 1.6, ease: 'easeOut' }}
              style={{ height: '100%', background: 'linear-gradient(90deg, #d4f76a, #7a9c37)', borderRadius: 999 }}
            />
          </div>
          <p style={{ fontFamily: 'monospace', fontSize: '0.7rem', color: '#82936b', letterSpacing: '0.12em', textTransform: 'uppercase' }}>
            Loading portfolio…
          </p>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
