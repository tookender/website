"use client";

import { useEffect } from "react";
import { toast } from "react-hot-toast";
import { useSearchParams, useRouter } from "next/navigation";

export default function ToastHandler() {
  const searchParams = useSearchParams();
  const router = useRouter();

  useEffect(() => {
    if (searchParams.get("error") === "duplicate") {
      toast.error("A note with the name \"New Note\" already exists, please change the name to proceed.");
      router.replace("/notes");
    }
  }, [searchParams, router]);

  return null;
} 