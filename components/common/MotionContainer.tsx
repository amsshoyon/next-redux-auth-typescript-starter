
import React from 'react'
import { motion } from "framer-motion";

const MotionContainer = ({ children }: any) => {
    return (
        <motion.div
            initial={{ y: 60, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 60, opacity: 0 }}
            transition={{
                type: "spring",
                stiffness: 40,
                damping: 20,
            }}
        >
            {children}
        </motion.div>
    )
}

export default MotionContainer