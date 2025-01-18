
import { useState } from 'react'
import { motion } from 'framer-motion'
import { Button } from "@/components/ui/button"

interface FuturisticButtonProps {
    children: React.ReactNode;
    onClick: () => void;
  }
  
 export const FuturisticButton: React.FC<FuturisticButtonProps> = ({ children, onClick }) => {
    const [isExploding, setIsExploding] = useState(false)
  
    const handleClick = () => {
      setIsExploding(true)
      setTimeout(() => setIsExploding(false), 500)
      onClick()
    }
  
    return (
      <Button
        className="relative overflow-hidden bg-transparent border border-blue-500 text-blue-500 hover:bg-blue-500 hover:text-white transition-all duration-300"
        onClick={handleClick}
      >
        <motion.div
          className="absolute inset-0 bg-blue-500"
          initial={{ scale: 0 }}
          animate={{ scale: isExploding ? 1 : 0 }}
          transition={{ duration: 0.5 }}
        />
        <motion.span
          className="relative z-10"
          animate={{
            opacity: isExploding ? [1, 0, 1] : 1,
          }}
          transition={{ duration: 0.5 }}
        >
          {children}
        </motion.span>
      </Button>
    )
  }
  