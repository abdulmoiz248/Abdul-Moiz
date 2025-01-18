import { motion, AnimatePresence } from 'framer-motion';
import { X, Calendar } from 'lucide-react';

interface Certificate {
  id: string;
  title: string;
  issuer: string;
  date: string;
  imageUrl: string;
  skills: string[];
}

interface CertificateModalProps {
  certificate: Certificate | null;
  onClose: () => void;
}

export default function CertificateModal({ certificate, onClose }: CertificateModalProps) {
  if (!certificate) return null;

  return (
    <AnimatePresence>
      <motion.div
        className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
      >
        <motion.div
          className="bg-gray-900 rounded-xl shadow-2xl w-full max-w-md overflow-hidden"
          initial={{ scale: 0.9, y: 50, opacity: 0 }}
          animate={{ scale: 1, y: 0, opacity: 1 }}
          exit={{ scale: 0.9, y: 50, opacity: 0 }}
          transition={{ type: 'spring', damping: 25, stiffness: 500 }}
          onClick={(e) => e.stopPropagation()}
        >
          {/* Certificate Image */}
          <motion.div
            className="relative w-full"
            style={{ aspectRatio: '3 / 2' }} // Ensure the image maintains a 3:2 aspect ratio
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            <img
              src={certificate.imageUrl}
              alt={`${certificate.title} Certificate`}
              className="h-full w-full object-contain bg-gray-800"
            />
            <button
              onClick={onClose}
              className="absolute top-4 right-4 text-white bg-gray-700 rounded-full p-2 hover:bg-gray-600 transition-colors duration-200"
            >
              <X size={20} />
            </button>
          </motion.div>
          <div className="p-6">
            <motion.h3
              className="text-2xl font-bold mb-2 bg-gradient-to-r from-blue-500 to-purple-500 text-transparent bg-clip-text"
              initial={{ y: -10, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.3 }}
            >
              {certificate.title}
            </motion.h3>
            <motion.p
              className="text-lg text-gray-400 mb-4"
              initial={{ y: -10, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.4 }}
            >
              {certificate.issuer}
            </motion.p>
            <motion.div
              className="flex items-center text-gray-500 mb-6"
              initial={{ y: -10, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.5 }}
            >
              <Calendar size={18} className="mr-2" />
              <span>
                {new Date(certificate.date).toLocaleDateString('en-US', {
                  year: 'numeric',
                  month: 'long',
                  day: 'numeric',
                })}
              </span>
            </motion.div>
            <motion.h4
              className="text-lg font-semibold mb-3 text-white"
              initial={{ y: -10, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.6 }}
            >
              Skills Acquired:
            </motion.h4>
            <motion.div
              className="flex flex-wrap gap-2 mb-6"
              initial={{ y: -10, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.7 }}
            >
              {certificate.skills.map((skill, index) => (
                <span
                  key={index}
                  className="bg-gray-700 text-gray-300 px-3 py-1 rounded-full text-sm"
                >
                  {skill}
                </span>
              ))}
            </motion.div>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}
