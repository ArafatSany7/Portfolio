import { motion, AnimatePresence } from "framer-motion";
import { FiX } from "react-icons/fi";

const MotionDiv = motion.div;
const MotionLi = motion.li;
export default function OverlayMenu({ isOpen, onClose }) {
  const isMobile = typeof window !== "undefined" && window.innerWidth < 1024;
  const origin = isMobile ? "6% 4%" : "3% 4%";
  return (
    <AnimatePresence>
      {isOpen && (
        <MotionDiv
          className="fixed inset-0 flex items-center justify-center z-50
        "
          initial={{ clipPath: `circle(0% at ${origin})` }}
          animate={{ clipPath: `circle(150% at ${origin})` }}
          exit={{ clipPath: `circle(0% at ${origin})` }}
          transition={{ duration: 0.7, ease: [0.4, 0, 0.2, 1] }}
          style={{ backgroundColor: "rgba(0,0,0,0.95)" }}
        >
          <button
            onClick={onClose}
            className="absolute top-6 right-6 text-white text-3xl"
            aria-label="Close Menu"
          >
            <FiX></FiX>
          </button>
          <ul className=" space-y-6 text-center">
            {[
              "home",
              "Skill",
              "Project",
              "Experience",
              "Testimonial",
              "Contact",
            ].map((item, index) => (
              <MotionLi
                key={item}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 + index * 0.1 }}
              >
                <a
                  href={`#${item.toLowerCase()}`}
                  onClick={onClose}
                  className="text-4xl font-semibold text-white hover:text-pink-600 transition-colors duration-500"
                >
                  {item}
                </a>
              </MotionLi>
            ))}
          </ul>
        </MotionDiv>
      )}
    </AnimatePresence>
  );
}
