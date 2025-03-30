import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { ListChecks } from "lucide-react";

export const Tutorial = ({ onDismiss }: { onDismiss: () => void }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 20 }}
      transition={{ duration: 0.3 }}
      className="mb-8 bg-blue-100 border-l-4 border-blue-500 text-blue-700 p-4 rounded shadow-md flex items-start gap-4"
    >
      <ListChecks className="w-6 h-6 mt-1 flex-shrink-0" />
      <div>
        <p className="font-bold">Welcome to your AI Email Assistant!</p>
        <p className="text-sm">Here&apos;s how to use the core features:</p>
        <ul className="list-disc list-inside text-sm mt-2 space-y-1">
          <li>
            <strong>Email Writing:</strong> Enter a topic, choose a tone, and
            generate a draft.
          </li>
          <li>
            <strong>Email Summarization:</strong> Paste an email, and get a
            concise summary.
          </li>
          <li>
            <strong>Email Improvement:</strong> Paste your email, and get
            suggestions for clarity and tone.
          </li>
        </ul>
        <Button
          variant="outline"
          size="sm"
          className="mt-4"
          onClick={onDismiss}
        >
          Got it!
        </Button>
      </div>
    </motion.div>
  );
};
