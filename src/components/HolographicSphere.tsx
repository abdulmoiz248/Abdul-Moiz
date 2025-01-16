import { motion } from 'framer-motion';

interface HolographicSphereProps {
  imageSrc: string; // URL or path to the image
}

export const HolographicSphere: React.FC<HolographicSphereProps> = ({ imageSrc }) => {
  return (
    <div className="relative mt-[50%] w-40 h-40">
      {/* Animated Background */}
      <motion.div
        className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-400 to-purple-500 opacity-75"
        animate={{
          scale: [1, 1.05, 1],
          opacity: [0.75, 0.9, 0.75],
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          repeatType: 'reverse',
        }}
      />

      {/* Image Container */}
      <div className="absolute inset-0 flex items-center justify-center">
        <motion.img
          src={imageSrc}
          alt="Profile"
          className="w-36 h-36 rounded-full object-cover" // Adjust image size and rounding
          animate={{
            opacity: [1, 0.8, 1],
            scale: [1, 1.05, 1],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            repeatType: 'reverse',
          }}
        />
      </div>
    </div>
  );
};
