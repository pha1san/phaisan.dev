"use client";

import { LazyMotion } from "framer-motion";

const loadFeatures = () => import("./features.ts").then((res) => res.default);

export function Providers({ children }: { children: React.ReactNode }) {
  return <LazyMotion features={loadFeatures}>{children}</LazyMotion>;
}
