"use client";

import { createContext, useContext, useState, type ReactNode } from "react";
import dynamic from "next/dynamic";

const AmicusAuditModal = dynamic(
  () => import("@/components/AmicusAuditModal").then((m) => m.AmicusAuditModal),
  { ssr: false }
);

type AmicusAuditCtx = {
  isOpen: boolean;
  open: () => void;
  close: () => void;
};

const AmicusAuditContext = createContext<AmicusAuditCtx | null>(null);

/**
 * Provides a single, globally-controlled Amicus audit modal.
 *
 * Rendering the modal here means any component (Navbar, deep-dive, hero CTA,
 * etc.) can trigger it via `useAmicusAudit()` without prop drilling and
 * without the modal being duplicated in the DOM.
 */
export function AmicusAuditProvider({ children }: { children: ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);

  const open = () => setIsOpen(true);
  const close = () => setIsOpen(false);

  return (
    <AmicusAuditContext.Provider value={{ isOpen, open, close }}>
      {children}
      <AmicusAuditModal isOpen={isOpen} onClose={close} />
    </AmicusAuditContext.Provider>
  );
}

export function useAmicusAudit(): AmicusAuditCtx {
  const ctx = useContext(AmicusAuditContext);
  if (!ctx) {
    throw new Error(
      "useAmicusAudit must be used inside an <AmicusAuditProvider>."
    );
  }
  return ctx;
}
