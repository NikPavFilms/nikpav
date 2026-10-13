"use client";

import { LogIn } from "lucide-react";
import { signIn } from "next-auth/react";
import { useState } from "react";

import { Button } from "@/components/ui/button";

export const AdminSignInButton = ({ label }: { label: string }) => {
  const [isPending, setIsPending] = useState(false);

  const handleSignIn = () => {
    setIsPending(true);
    void signIn("google");
  };

  return (
    <Button onClick={handleSignIn} loading={isPending} icon={<LogIn className="size-4" />}>
      {label}
    </Button>
  );
};
