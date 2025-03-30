"use client";
import React, { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Mail, FileText, X, Edit } from "lucide-react";
import { Navbar } from "./components/Navbar";
import { AnimatePresence, motion } from "framer-motion";
import { Tutorial } from "./components/Tutorial";
import { EmailActionCard } from "./components/EmailActionCard";
import { Label } from "@/components/ui/label";
const DashboardPage = () => {
  const [topic, setTopic] = useState("");
  const [email, setEmail] = useState("");
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [tone, setTone] = useState<"Formal" | "Friendly" | "Persuasive">(
    "Formal"
  );
  const [generatedEmail, setGeneratedEmail] = useState("");
  const [summary, setSummary] = useState("");
  const [improvedEmail, setImprovedEmail] = useState("");
  const [loading, setLoading] = useState<{
    generate: boolean;
    summarize: boolean;
    improve: boolean;
  }>({
    generate: false,
    summarize: false,
    improve: false,
  });
  const [error, setError] = useState<{
    generate?: string;
    summarize?: string;
    improve?: string;
  } | null>(null);
  const [showTutorial, setShowTutorial] = useState(true);
  const [isSettingsOpen, setIsSettingsOpen] = useState(false);

  // Mock user settings (replace with actual user data)
  const [userTonePreference, setUserTonePreference] = useState<
    "Formal" | "Friendly" | "Persuasive"
  >("Formal");

  // Example of using the user preference.
  useEffect(() => {
    setTone(userTonePreference); // set initial tone.
  }, [userTonePreference]);

  const dismissTutorial = () => {
    setShowTutorial(false);
  };

  const toggleSettings = () => {
    setIsSettingsOpen(!isSettingsOpen);
  };

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar onMenuClick={toggleSettings} />
      <main className="flex-1 p-6">
        <AnimatePresence>
          {showTutorial && <Tutorial onDismiss={dismissTutorial} />}
        </AnimatePresence>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Email Writing Card */}
          <EmailActionCard
            title="Write Email"
            description="Enter a topic and choose a tone to generate an email draft."
            icon={<Mail className="w-5 h-5 text-blue-500" />}
            // action={generateEmail}
            dataKeyName="topic"
            data={topic}
            setData={setTopic}
            result={generatedEmail}
            setResult={setGeneratedEmail}
            loading={loading.generate}
            setLoading={(val) => setLoading({ ...loading, generate: val })}
            error={error?.generate}
            setError={(val) => setError({ ...error, generate: val })}
            inputPlaceholder="Enter email topic"
          />

          {/* Email Summarization Card */}
          <EmailActionCard
            title="Summarize Email"
            description="Paste an email to get a concise summary."
            icon={<FileText className="w-5 h-5 text-purple-500" />}
            // action={summarizeEmail}
            dataKeyName="email-summary"
            data={email}
            setData={setEmail}
            result={summary}
            setResult={setSummary}
            loading={loading.summarize}
            setLoading={(val) => setLoading({ ...loading, summarize: val })}
            error={error?.summarize}
            setError={(val) => setError({ ...error, summarize: val })}
            inputPlaceholder="Paste email to summarize"
          />

          {/* Improve Email Card */}
          <EmailActionCard
            title="Improve Email"
            description="Paste an email to get suggestions for clarity and tone."
            icon={<Edit className="w-5 h-5 text-green-500" />}
            // action={improveEmail}
            dataKeyName="email-improve"
            data={email}
            setData={setEmail}
            result={improvedEmail}
            setResult={setImprovedEmail}
            loading={loading.improve}
            setLoading={(val) => setLoading({ ...loading, improve: val })}
            error={error?.improve}
            setError={(val) => setError({ ...error, improve: val })}
            inputPlaceholder="Paste email to improve"
          />
        </div>
      </main>
      <AnimatePresence>
        {isSettingsOpen && (
          <motion.div
            initial={{ opacity: 0, x: 200 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 200 }}
            transition={{ duration: 0.3 }}
            className="fixed top-0 right-0 h-full w-80 bg-white shadow-lg z-50 p-6 space-y-6 overflow-y-auto"
          >
            <div className="flex items-center justify-between border-b pb-4">
              <h2 className="text-xl font-semibold text-gray-800 flex items-center gap-2">
                {/* <Settings className="w-6 h-6" /> */}
                Settings
              </h2>
              <Button variant="ghost" size="icon" onClick={toggleSettings}>
                <X className="h-6 w-6" />
              </Button>
            </div>
            <div className="space-y-4">
              <h3 className="font-semibold text-gray-700">Email Preferences</h3>
              <div className="space-y-2">
                <Label htmlFor="default-tone">Default Tone</Label>
                <select
                  id="default-tone"
                  value={userTonePreference}
                  onChange={(e) =>
                    setUserTonePreference(
                      e.target.value as "Formal" | "Friendly" | "Persuasive"
                    )
                  }
                  className="w-full px-4 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white text-gray-900 transition-colors duration-300"
                >
                  <option value="Formal">Formal</option>
                  <option value="Friendly">Friendly</option>
                  <option value="Persuasive">Persuasive</option>
                </select>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default DashboardPage;
