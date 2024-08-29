import { motion } from "framer-motion"

export default function FadeInWhenVisible({ children }) {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      transition={{ duration: 0.3 }}
      variants={{
        visible: { opacity: 1, scale: 1 },
        hidden: { opacity: 0, scale: 0 }
      }}
    >
      {children}
    </motion.div>
  );
}