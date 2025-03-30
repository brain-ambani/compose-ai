"use client";
import React, { useCallback } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Loader2, AlertTriangle } from "lucide-react";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

export const EmailActionCard: React.FC<{
  title: string;
  description: string;
  icon: React.ReactNode;
  // action: (data: string) => Promise<string>;
  dataKeyName: string;
  data: string;
  setData: (data: string) => void;
  result: string;
  setResult: (result: string) => void;
  loading: boolean;
  setLoading: (loading: boolean) => void;
  error: string | undefined;
  setError: (error: string | undefined) => void;
  inputPlaceholder: string;
}> = ({
  title,
  description,
  icon,
  // action,
  dataKeyName,
  data,
  setData,
  result,
  setResult,
  loading,
  setLoading,
  error,
  setError,
  inputPlaceholder,
}) => {
  const handleAction = useCallback(async () => {
    setLoading(true);
    setError(undefined); // Clear previous errors
    setResult("");
    try {
      const resultData: string = await action(data);
      setResult(resultData);
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (err: any) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  }, [data, setLoading, setError, setResult]);

  return (
    <motion.div initial="hidden" animate="visible" exit="exit">
      <Card className="bg-white shadow-md">
        <CardHeader>
          <CardTitle className="text-xl font-semibold text-gray-800 flex items-center gap-2">
            {icon}
            {title}
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor={dataKeyName}>{description}</Label>
            <Textarea
              id={dataKeyName}
              placeholder={inputPlaceholder}
              value={data}
              onChange={(e) => setData(e.target.value)}
              className={cn(
                loading ? "cursor-not-allowed" : "",
                "min-h-[120px]"
              )}
              disabled={loading}
            />
            {error && (
              <p className="text-xs text-red-500 flex items-center gap-1">
                <AlertTriangle className="w-4 h-4" />
                {error}
              </p>
            )}
          </div>
          <Button
            onClick={handleAction}
            className={cn(
              "w-full",
              loading
                ? "bg-blue-500/70 text-white cursor-not-allowed"
                : "bg-blue-500 text-white hover:bg-blue-600",
              "transition-all duration-300"
            )}
            disabled={loading}
          >
            {loading ? (
              <>
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                {loading ? `Processing ${title}...` : title}
              </>
            ) : (
              title
            )}
          </Button>
          {result && (
            <div className="space-y-2">
              <Label>{title} Result</Label>
              <Textarea
                value={result}
                readOnly
                className="bg-gray-100 border-gray-300 text-gray-900 min-h-[150px]"
              />
            </div>
          )}
        </CardContent>
      </Card>
    </motion.div>
  );
};
// eslint-disable-next-line @typescript-eslint/no-unused-vars
function action(data: string): string | PromiseLike<string> {
  throw new Error("Function not implemented.");
}
