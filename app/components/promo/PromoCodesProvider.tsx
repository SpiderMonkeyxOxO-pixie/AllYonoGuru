"use client";

import { createContext, useCallback, useContext, useState } from "react";
import PromoCodesModal from "./PromoCodesModal";
import PromoFloatingButton from "./PromoFloatingButton";
import type { PromoCardData } from "../../lib/promo-types";

interface PromoContextValue {
  openPromoCodes: () => void;
}

const PromoContext = createContext<PromoContextValue>({ openPromoCodes: () => {} });

export function usePromoCodes() {
  return useContext(PromoContext);
}

export default function PromoCodesProvider({
  children,
  entries,
}: {
  children: React.ReactNode;
  entries: PromoCardData[];
}) {
  const [isOpen, setIsOpen] = useState(false);
  const openPromoCodes = useCallback(() => setIsOpen(true), []);
  const close = useCallback(() => setIsOpen(false), []);

  return (
    <PromoContext.Provider value={{ openPromoCodes }}>
      {children}
      {entries.length > 0 && (
        <>
          <PromoFloatingButton onClick={openPromoCodes} />
          <PromoCodesModal isOpen={isOpen} onClose={close} entries={entries} />
        </>
      )}
    </PromoContext.Provider>
  );
}
