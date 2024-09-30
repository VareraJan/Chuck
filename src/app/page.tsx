"use client";

import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function Home() {
  const { replace } = useRouter();
  useEffect(() => {
    replace("/search");
  }, [replace]);
  return null;
}
