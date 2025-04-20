import { AnimatePresence, motion } from "framer-motion";
import { CheckCircle2, Loader2, XCircle } from "lucide-react";

const RenderFormButtonIcon = (status: string) => {
    const size = 22;

    return (
      <AnimatePresence mode="wait">
        {status === "loading" && (
          <motion.div
            key="loading"
            initial={{ opacity: 0, scale: 0.7 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.7 }}
            transition={{ duration: 0.3 }}
          >
            <Loader2 className="animate-spin" size={size} />
          </motion.div>
        )}
        {status === "success" && (
          <motion.div
            key="success"
            initial={{ opacity: 0, scale: 0.7 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.7 }}
            transition={{ duration: 0.3 }}
          >
            <CheckCircle2 className="!text-green-500" size={size} />
          </motion.div>
        )}
        {status === "error" && (
          <motion.div
            key="error"
            initial={{ opacity: 0, scale: 0.7 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.7 }}
            transition={{ duration: 0.3 }}
          >
            <XCircle className="!text-red-500" size={size} />
          </motion.div>
        )}
      </AnimatePresence>
    );
};

export default RenderFormButtonIcon;