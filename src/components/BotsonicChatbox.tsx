import { useState, useEffect } from 'react';
import { MessageCircle } from 'lucide-react';
import { motion } from 'motion/react';

interface BotsonicChatboxProps {
  position?: 'bottom-right' | 'bottom-left' | 'top-right' | 'top-left';
  theme?: 'light' | 'dark';
}

export function BotsonicChatbox({ 
  position = "bottom-right",
  theme = "light"
}: BotsonicChatboxProps) {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    // Check if Botsonic is already loaded
    const checkBotsonic = () => {
      if (window.Botsonic) {
        setIsLoaded(true);
      } else {
        setTimeout(checkBotsonic, 100);
      }
    };
    
    checkBotsonic();
  }, []);

  const toggleChat = () => {
    if (window.Botsonic) {
      // Use Botsonic's built-in toggle functionality
      window.Botsonic("toggle");
    }
  };

  const positionClasses = {
    'bottom-right': 'bottom-4 right-4',
    'bottom-left': 'bottom-4 left-4',
    'top-right': 'top-4 right-4',
    'top-left': 'top-4 left-4'
  };

  return (
    <>
      {/* Custom Chat Button - Botsonic widget handles its own UI */}
      <motion.button
        onClick={toggleChat}
        className={`fixed ${positionClasses[position]} z-50 bg-green-600 hover:bg-green-700 text-white p-4 rounded-full shadow-lg transition-colors duration-200`}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ delay: 0.5 }}
      >
        <motion.div
          initial={{ rotate: 0, opacity: 0 }}
          animate={{ rotate: 0, opacity: 1 }}
          transition={{ duration: 0.2 }}
        >
          <MessageCircle size={24} />
        </motion.div>
      </motion.button>

      {/* Loading indicator */}
      {!isLoaded && (
        <div className="fixed bottom-20 right-4 bg-white rounded-lg shadow-lg p-3 border border-gray-200">
          <div className="flex items-center space-x-2 text-sm text-gray-600">
            <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-green-600"></div>
            <span>Loading AI Assistant...</span>
          </div>
        </div>
      )}
    </>
  );
}

// Extend Window interface for TypeScript
declare global {
  interface Window {
    Botsonic: (action: string, config?: {
      serviceBaseUrl: string;
      token: string;
    }) => void;
  }
}
