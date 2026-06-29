"use client";

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import {
  MenuIcon,
  XIcon,
  ChevronDownIcon,
  ChevronRightIcon,
  GridIcon,
  GiftIcon,
} from "../icons/Icons";
import { usePromoCodes } from "../promo/PromoCodesProvider";

// ─── Static nav data ──────────────────────────────────────────────────────────
// Hard rule: dropdown triggers must be <button aria-expanded>, never <a>.
// Hard rule: no sibling-domain (india/official/update) links in primary nav.

const GURU_APPS = [
  { label: "Rummy Guru",      href: "/rummy-guru",      keyword: "rummy guru apk" },
  { label: "Teen Patti Guru", href: "/teen-patti-guru", keyword: "teen patti guru apk" },
];

const YONO_GAMES = [
  { label: "Yono Game Spin",  href: "/yono-game-spin" },
  { label: "Share Slots Yono",href: "/share-slots-yono" },
];

const TOP_LINKS = [
  { label: "Blog",        href: "/blog" },
  { label: "About",       href: "/about" },
  { label: "Disclaimer",  href: "/disclaimer" },
  { label: "Contact",     href: "/contact" },
];
// ─────────────────────────────────────────────────────────────────────────────

export default function Navbar() {
  const pathname = usePathname();
  const { openPromoCodes } = usePromoCodes();
  const [isScrolled,     setIsScrolled]     = useState(false);
  const [isMobileOpen,   setIsMobileOpen]   = useState(false);
  const [guruAppsOpen,   setGuruAppsOpen]   = useState(false);
  const [yonoGamesOpen,  setYonoGamesOpen]  = useState(false);
  const [mobileGuruOpen, setMobileGuruOpen] = useState(false);
  const [mobileYonoOpen, setMobileYonoOpen] = useState(false);

  const guruRef  = useRef<HTMLLIElement>(null);
  const yonoRef  = useRef<HTMLLIElement>(null);

  // Scroll detection
  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setIsMobileOpen(false);
    setMobileGuruOpen(false);
    setMobileYonoOpen(false);
  }, [pathname]);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = isMobileOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [isMobileOpen]);

  // Close desktop dropdowns on outside click
  useEffect(() => {
    function handleOutside(e: MouseEvent) {
      if (guruRef.current && !guruRef.current.contains(e.target as Node)) {
        setGuruAppsOpen(false);
      }
      if (yonoRef.current && !yonoRef.current.contains(e.target as Node)) {
        setYonoGamesOpen(false);
      }
    }
    document.addEventListener("mousedown", handleOutside);
    return () => document.removeEventListener("mousedown", handleOutside);
  }, []);

  const navBg =
    isScrolled || isMobileOpen
      ? "rgba(2,8,23,0.97)"
      : "transparent";

  return (
    <>
      <motion.nav
        role="navigation"
        aria-label="Main navigation"
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.55, ease: "easeOut" }}
        style={{
          position: "fixed",
          top: 0, left: 0, right: 0,
          zIndex: 1000,
          background: navBg,
          backdropFilter: (isScrolled || isMobileOpen) ? "blur(20px)" : "none",
          borderBottom: isScrolled ? "1px solid rgba(255,255,255,0.06)" : "1px solid transparent",
          transition: "background 0.3s ease, border-color 0.3s ease",
        }}
      >
        <div style={{
          maxWidth: "1280px", margin: "0 auto",
          padding: "0 24px", height: "68px",
          display: "flex", alignItems: "center", justifyContent: "space-between",
        }}>

          {/* Logo */}
          <Link
            href="/"
            aria-label="AllYonoGuru — Home"
            title="AllYonoGuru.com — Yono Game All Apps Directory"
            style={{ display: "flex", alignItems: "center", gap: "8px", textDecoration: "none", flexShrink: 0 }}
          >
            <Image src="/logo.png" alt="AllYonoGuru" width={44} height={44} priority style={{ width: "44px", height: "44px" }} />
            <span style={{
              fontSize: "10px", fontWeight: "600",
              color: "#64748b",
              letterSpacing: "0.04em",
            }}>
              .com
            </span>
          </Link>

          {/* Desktop nav */}
          <ul
            role="list"
            className="hidden md:flex"
            style={{ alignItems: "center", gap: "2px", listStyle: "none", margin: 0, padding: 0 }}
          >

            {/* ── Guru Apps dropdown ── */}
            <li ref={guruRef} style={{ position: "relative" }}>
              <button
                aria-haspopup="true"
                aria-expanded={guruAppsOpen}
                onClick={() => { setGuruAppsOpen((p) => !p); setYonoGamesOpen(false); }}
                style={{
                  display: "flex", alignItems: "center", gap: "5px",
                  background: guruAppsOpen ? "rgba(245,158,11,0.08)" : "transparent",
                  border: "none",
                  color: guruAppsOpen ? "#f59e0b" : "#94a3b8",
                  fontSize: "13.5px", fontWeight: "500",
                  padding: "8px 13px", borderRadius: "8px",
                  cursor: "pointer", fontFamily: "inherit",
                  transition: "color 0.2s, background 0.2s",
                } as React.CSSProperties}
                onMouseEnter={(e) => {
                  if (!guruAppsOpen) (e.currentTarget as HTMLButtonElement).style.color = "#e2e8f0";
                }}
                onMouseLeave={(e) => {
                  if (!guruAppsOpen) (e.currentTarget as HTMLButtonElement).style.color = "#94a3b8";
                }}
              >
                Guru Apps
                <motion.span animate={{ rotate: guruAppsOpen ? 180 : 0 }} transition={{ duration: 0.2 }}>
                  <ChevronDownIcon size={14} />
                </motion.span>
              </button>

              <AnimatePresence>
                {guruAppsOpen && (
                  <motion.div
                    key="guru-dropdown"
                    initial={{ opacity: 0, y: -6, scale: 0.97 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: -6, scale: 0.97 }}
                    transition={{ duration: 0.16 }}
                    style={{
                      position: "absolute", top: "calc(100% + 8px)", left: 0,
                      minWidth: "200px",
                      background: "rgba(10,15,30,0.98)",
                      border: "1px solid rgba(245,158,11,0.2)",
                      borderRadius: "12px",
                      padding: "8px",
                      boxShadow: "0 16px 40px rgba(0,0,0,0.5), 0 0 0 1px rgba(245,158,11,0.05)",
                    }}
                  >
                    {GURU_APPS.map((app) => (
                      <Link
                        key={app.href}
                        href={app.href}
                        title={`${app.label} — ${app.keyword}`}
                        onClick={() => setGuruAppsOpen(false)}
                        style={{
                          display: "flex", alignItems: "center", justifyContent: "space-between",
                          padding: "10px 12px", borderRadius: "8px",
                          textDecoration: "none",
                          color: pathname === app.href ? "#f59e0b" : "#cbd5e1",
                          fontWeight: pathname === app.href ? "600" : "400",
                          fontSize: "13.5px",
                          background: pathname === app.href ? "rgba(245,158,11,0.08)" : "transparent",
                          transition: "background 0.15s, color 0.15s",
                        }}
                        onMouseEnter={(e) => {
                          (e.currentTarget as HTMLAnchorElement).style.background = "rgba(245,158,11,0.06)";
                          (e.currentTarget as HTMLAnchorElement).style.color = "#f1f5f9";
                        }}
                        onMouseLeave={(e) => {
                          (e.currentTarget as HTMLAnchorElement).style.background =
                            pathname === app.href ? "rgba(245,158,11,0.08)" : "transparent";
                          (e.currentTarget as HTMLAnchorElement).style.color =
                            pathname === app.href ? "#f59e0b" : "#cbd5e1";
                        }}
                      >
                        {app.label}
                        <ChevronRightIcon size={13} />
                      </Link>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </li>

            {/* ── Yono Games dropdown ── */}
            <li ref={yonoRef} style={{ position: "relative" }}>
              <button
                aria-haspopup="true"
                aria-expanded={yonoGamesOpen}
                onClick={() => { setYonoGamesOpen((p) => !p); setGuruAppsOpen(false); }}
                style={{
                  display: "flex", alignItems: "center", gap: "5px",
                  background: yonoGamesOpen ? "rgba(245,158,11,0.08)" : "transparent",
                  border: "none",
                  color: yonoGamesOpen ? "#f59e0b" : "#94a3b8",
                  fontSize: "13.5px", fontWeight: "500",
                  padding: "8px 13px", borderRadius: "8px",
                  cursor: "pointer", fontFamily: "inherit",
                  transition: "color 0.2s, background 0.2s",
                } as React.CSSProperties}
                onMouseEnter={(e) => {
                  if (!yonoGamesOpen) (e.currentTarget as HTMLButtonElement).style.color = "#e2e8f0";
                }}
                onMouseLeave={(e) => {
                  if (!yonoGamesOpen) (e.currentTarget as HTMLButtonElement).style.color = "#94a3b8";
                }}
              >
                Yono Games
                <motion.span animate={{ rotate: yonoGamesOpen ? 180 : 0 }} transition={{ duration: 0.2 }}>
                  <ChevronDownIcon size={14} />
                </motion.span>
              </button>

              <AnimatePresence>
                {yonoGamesOpen && (
                  <motion.div
                    key="yono-dropdown"
                    initial={{ opacity: 0, y: -6, scale: 0.97 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: -6, scale: 0.97 }}
                    transition={{ duration: 0.16 }}
                    style={{
                      position: "absolute", top: "calc(100% + 8px)", left: 0,
                      minWidth: "210px",
                      background: "rgba(10,15,30,0.98)",
                      border: "1px solid rgba(245,158,11,0.2)",
                      borderRadius: "12px",
                      padding: "8px",
                      boxShadow: "0 16px 40px rgba(0,0,0,0.5), 0 0 0 1px rgba(245,158,11,0.05)",
                    }}
                  >
                    {YONO_GAMES.map((game) => (
                      <Link
                        key={game.href}
                        href={game.href}
                        title={game.label}
                        onClick={() => setYonoGamesOpen(false)}
                        style={{
                          display: "flex", alignItems: "center", justifyContent: "space-between",
                          padding: "10px 12px", borderRadius: "8px",
                          textDecoration: "none",
                          color: pathname === game.href ? "#f59e0b" : "#cbd5e1",
                          fontSize: "13.5px",
                          background: pathname === game.href ? "rgba(245,158,11,0.08)" : "transparent",
                          transition: "background 0.15s, color 0.15s",
                        }}
                        onMouseEnter={(e) => {
                          (e.currentTarget as HTMLAnchorElement).style.background = "rgba(245,158,11,0.06)";
                          (e.currentTarget as HTMLAnchorElement).style.color = "#f1f5f9";
                        }}
                        onMouseLeave={(e) => {
                          (e.currentTarget as HTMLAnchorElement).style.background =
                            pathname === game.href ? "rgba(245,158,11,0.08)" : "transparent";
                          (e.currentTarget as HTMLAnchorElement).style.color =
                            pathname === game.href ? "#f59e0b" : "#cbd5e1";
                        }}
                      >
                        {game.label}
                      </Link>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </li>

            {/* ── Promo Codes ── */}
            <li>
              <button
                type="button"
                onClick={openPromoCodes}
                className="promo-nav-btn"
              >
                Promo Codes
              </button>
            </li>

            {/* ── Top-level links ── */}
            {TOP_LINKS.map((link) => {
              const active = pathname === link.href;
              return (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    title={link.label}
                    style={{
                      display: "block",
                      color: active ? "#f59e0b" : "#94a3b8",
                      fontSize: "13.5px", fontWeight: active ? "600" : "400",
                      padding: "8px 13px", borderRadius: "8px",
                      textDecoration: "none",
                      background: active ? "rgba(245,158,11,0.08)" : "transparent",
                      transition: "color 0.2s, background 0.2s",
                    }}
                    onMouseEnter={(e) => {
                      if (!active) {
                        (e.currentTarget as HTMLAnchorElement).style.color = "#e2e8f0";
                        (e.currentTarget as HTMLAnchorElement).style.background = "rgba(255,255,255,0.05)";
                      }
                    }}
                    onMouseLeave={(e) => {
                      if (!active) {
                        (e.currentTarget as HTMLAnchorElement).style.color = "#94a3b8";
                        (e.currentTarget as HTMLAnchorElement).style.background = "transparent";
                      }
                    }}
                  >
                    {link.label}
                  </Link>
                </li>
              );
            })}
          </ul>

          {/* Right: CTA + hamburger */}
          <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
            <motion.div className="hidden sm:flex" whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}>
              <Link
                href="/#apps"
                title="Browse all Yono game apps"
                style={{
                  display: "flex", alignItems: "center", gap: "7px",
                  background: "linear-gradient(135deg, #f59e0b, #fb923c)",
                  color: "#020817",
                  fontSize: "13px", fontWeight: "700",
                  padding: "9px 18px", borderRadius: "9px",
                  textDecoration: "none",
                  boxShadow: "0 0 20px rgba(245,158,11,0.35)",
                  letterSpacing: "-0.01em",
                }}
              >
                <GridIcon size={14} />
                Browse Apps
              </Link>
            </motion.div>

            {/* Hamburger — mobile only */}
            <button
              onClick={() => setIsMobileOpen((p) => !p)}
              aria-expanded={isMobileOpen}
              aria-label={isMobileOpen ? "Close menu" : "Open menu"}
              className="md:hidden"
              style={{
                background: isMobileOpen ? "rgba(245,158,11,0.15)" : "rgba(255,255,255,0.06)",
                border: `1px solid ${isMobileOpen ? "rgba(245,158,11,0.3)" : "rgba(255,255,255,0.08)"}`,
                borderRadius: "8px", padding: "8px",
                cursor: "pointer",
                color: isMobileOpen ? "#f59e0b" : "#94a3b8",
                display: "flex", alignItems: "center", justifyContent: "center",
                transition: "background 0.2s, border-color 0.2s, color 0.2s",
              }}
            >
              <AnimatePresence mode="wait" initial={false}>
                {isMobileOpen ? (
                  <motion.span key="close"
                    initial={{ rotate: -90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: 90, opacity: 0 }} transition={{ duration: 0.14 }}
                    style={{ display: "flex" }}
                  >
                    <XIcon size={20} />
                  </motion.span>
                ) : (
                  <motion.span key="menu"
                    initial={{ rotate: 90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: -90, opacity: 0 }} transition={{ duration: 0.14 }}
                    style={{ display: "flex" }}
                  >
                    <MenuIcon size={20} />
                  </motion.span>
                )}
              </AnimatePresence>
            </button>
          </div>
        </div>
      </motion.nav>

      {/* ── Mobile backdrop ── */}
      <AnimatePresence>
        {isMobileOpen && (
          <motion.div
            key="backdrop"
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            onClick={() => setIsMobileOpen(false)}
            style={{
              position: "fixed", inset: 0, zIndex: 997,
              background: "rgba(0,0,0,0.6)", backdropFilter: "blur(2px)",
            }}
          />
        )}
      </AnimatePresence>

      {/* ── Mobile menu drawer ── */}
      <AnimatePresence>
        {isMobileOpen && (
          <motion.div
            key="mobile-menu"
            initial={{ opacity: 0, y: -8 }} animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }} transition={{ duration: 0.2, ease: "easeOut" }}
            style={{
              position: "fixed", top: "68px", left: 0, right: 0,
              zIndex: 998,
              background: "rgba(2,8,23,0.99)", backdropFilter: "blur(24px)",
              borderBottom: "1px solid rgba(255,255,255,0.07)",
              padding: "8px 0 28px",
            }}
          >
            <ul role="list" style={{ listStyle: "none", margin: 0, padding: "0 20px" }}>

              {/* Guru Apps accordion */}
              <li>
                <button
                  aria-expanded={mobileGuruOpen}
                  aria-haspopup="true"
                  onClick={() => setMobileGuruOpen((p) => !p)}
                  style={{
                    width: "100%", textAlign: "left",
                    background: "none", border: "none",
                    color: "#cbd5e1", fontSize: "16px", fontWeight: "500",
                    padding: "15px 4px", cursor: "pointer",
                    borderBottom: "1px solid rgba(255,255,255,0.05)",
                    fontFamily: "inherit",
                    display: "flex", alignItems: "center", justifyContent: "space-between",
                  }}
                >
                  <span>Guru Apps</span>
                  <motion.span animate={{ rotate: mobileGuruOpen ? 180 : 0 }} transition={{ duration: 0.2 }}>
                    <ChevronDownIcon size={16} />
                  </motion.span>
                </button>
                <AnimatePresence>
                  {mobileGuruOpen && (
                    <motion.ul
                      key="mobile-guru"
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.2 }}
                      style={{ overflow: "hidden", listStyle: "none", margin: 0, padding: "0 0 4px 16px" }}
                    >
                      {GURU_APPS.map((app) => (
                        <li key={app.href}>
                          <Link
                            href={app.href}
                            title={app.label}
                            onClick={() => setIsMobileOpen(false)}
                            style={{
                              display: "flex", alignItems: "center", justifyContent: "space-between",
                              color: "#94a3b8", fontSize: "14.5px",
                              padding: "12px 4px",
                              textDecoration: "none",
                              borderBottom: "1px solid rgba(255,255,255,0.04)",
                            }}
                          >
                            {app.label}
                            <ChevronRightIcon size={14} />
                          </Link>
                        </li>
                      ))}
                    </motion.ul>
                  )}
                </AnimatePresence>
              </li>

              {/* Yono Games accordion */}
              <li>
                <button
                  aria-expanded={mobileYonoOpen}
                  aria-haspopup="true"
                  onClick={() => setMobileYonoOpen((p) => !p)}
                  style={{
                    width: "100%", textAlign: "left",
                    background: "none", border: "none",
                    color: "#cbd5e1", fontSize: "16px", fontWeight: "500",
                    padding: "15px 4px", cursor: "pointer",
                    borderBottom: "1px solid rgba(255,255,255,0.05)",
                    fontFamily: "inherit",
                    display: "flex", alignItems: "center", justifyContent: "space-between",
                  }}
                >
                  <span>Yono Games</span>
                  <motion.span animate={{ rotate: mobileYonoOpen ? 180 : 0 }} transition={{ duration: 0.2 }}>
                    <ChevronDownIcon size={16} />
                  </motion.span>
                </button>
                <AnimatePresence>
                  {mobileYonoOpen && (
                    <motion.ul
                      key="mobile-yono"
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.2 }}
                      style={{ overflow: "hidden", listStyle: "none", margin: 0, padding: "0 0 4px 16px" }}
                    >
                      {YONO_GAMES.map((game) => (
                        <li key={game.href}>
                          <Link
                            href={game.href}
                            title={game.label}
                            onClick={() => setIsMobileOpen(false)}
                            style={{
                              display: "flex", alignItems: "center", justifyContent: "space-between",
                              color: "#94a3b8", fontSize: "14.5px",
                              padding: "12px 4px",
                              textDecoration: "none",
                              borderBottom: "1px solid rgba(255,255,255,0.04)",
                            }}
                          >
                            {game.label}
                          </Link>
                        </li>
                      ))}
                    </motion.ul>
                  )}
                </AnimatePresence>
              </li>

              {/* Promo Codes */}
              <motion.li
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.05 }}
              >
                <button
                  type="button"
                  onClick={() => { setIsMobileOpen(false); openPromoCodes(); }}
                  style={{
                    width: "100%", display: "flex", alignItems: "center", justifyContent: "space-between",
                    background: "none", border: "none", fontFamily: "inherit",
                    color: "#f59e0b", fontSize: "16px", fontWeight: "600",
                    padding: "15px 4px", cursor: "pointer",
                    borderBottom: "1px solid rgba(255,255,255,0.05)",
                  }}
                >
                  <span style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                    <GiftIcon size={16} />
                    Promo Codes
                  </span>
                  <ChevronRightIcon size={16} />
                </button>
              </motion.li>

              {/* Static links */}
              {TOP_LINKS.map((link, i) => (
                <motion.li
                  key={link.href}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.05 + 0.1 }}
                >
                  <Link
                    href={link.href}
                    title={link.label}
                    onClick={() => setIsMobileOpen(false)}
                    style={{
                      display: "flex", alignItems: "center", justifyContent: "space-between",
                      color: "#cbd5e1", fontSize: "16px", fontWeight: "500",
                      padding: "15px 4px", textDecoration: "none",
                      borderBottom: "1px solid rgba(255,255,255,0.05)",
                    }}
                  >
                    <span>{link.label}</span>
                    <ChevronRightIcon size={16} />
                  </Link>
                </motion.li>
              ))}
            </ul>

            {/* Mobile CTA */}
            <motion.div
              initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.25 }}
              style={{ padding: "0 20px" }}
            >
              <Link
                href="/#apps"
                title="Browse all Yono game apps"
                onClick={() => setIsMobileOpen(false)}
                style={{
                  display: "flex", alignItems: "center", justifyContent: "center",
                  gap: "10px", marginTop: "20px",
                  background: "linear-gradient(135deg, #f59e0b, #fb923c)",
                  color: "#020817", textDecoration: "none",
                  fontSize: "15px", fontWeight: "700",
                  padding: "15px", borderRadius: "12px",
                  boxShadow: "0 0 32px rgba(245,158,11,0.4)",
                  letterSpacing: "-0.01em",
                }}
              >
                <GridIcon size={18} />
                Browse All Apps
              </Link>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
