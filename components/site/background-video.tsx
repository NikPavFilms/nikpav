"use client";

import { Pause, Play } from "lucide-react";
import { useTranslations } from "next-intl";
import { useEffect, useRef, useState } from "react";

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/general/utils";

interface BackgroundVideoProps {
  webm: string;
  mp4: string;
  /** Load right after the page has loaded (hero). Otherwise when it scrolls near the viewport. */
  eager?: boolean;
  className?: string;
  /** Position of the pause/play control inside the (relative) parent. */
  controlsClassName?: string;
}

const prefersStillMedia = () => {
  const connection = (navigator as Navigator & { connection?: { saveData?: boolean } }).connection;
  return window.matchMedia("(prefers-reduced-motion: reduce)").matches || Boolean(connection?.saveData);
};

// Ambient muted loop layered over a next/image poster, which stays the LCP element.
// Sources are only attached once the page has loaded (or the video is near the viewport),
// never for reduced-motion or data-saver visitors. Pauses off-screen, fades in once frames
// are playing, and has a visible pause control (WCAG 2.2.2 for loops longer than 5 s).
export const BackgroundVideo = ({ webm, mp4, eager = false, className, controlsClassName }: BackgroundVideoProps) => {
  const t = useTranslations("Common");
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isActive, setIsActive] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isUserPaused, setIsUserPaused] = useState(false);

  const togglePlayback = () => {
    const video = videoRef.current;
    if (!video) return;

    if (isUserPaused) {
      setIsUserPaused(false);
      video.play().catch(() => setIsPlaying(false));
    } else {
      setIsUserPaused(true);
      video.pause();
    }
  };

  useEffect(() => {
    const video = videoRef.current;
    if (!video || prefersStillMedia()) return;

    if (eager) {
      const activate = () => setIsActive(true);
      if (document.readyState === "complete") {
        const timer = window.setTimeout(activate, 150);
        return () => window.clearTimeout(timer);
      }
      window.addEventListener("load", activate, { once: true });
      return () => window.removeEventListener("load", activate);
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        setIsActive(true);
        observer.disconnect();
      },
      { rootMargin: "300px 0px" },
    );
    observer.observe(video);
    return () => observer.disconnect();
  }, [eager]);

  useEffect(() => {
    const video = videoRef.current;
    if (!video || !isActive) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !isUserPaused) video.play().catch(() => setIsPlaying(false));
        else video.pause();
      },
      { threshold: 0.1 },
    );
    observer.observe(video);
    return () => observer.disconnect();
  }, [isActive, isUserPaused]);

  return (
    <>
      <video
        ref={videoRef}
        aria-hidden
        muted
        loop
        playsInline
        preload="none"
        onPlaying={() => setIsPlaying(true)}
        className={cn(
          "absolute inset-0 size-full object-cover transition-opacity duration-1000",
          isPlaying ? "opacity-100" : "opacity-0",
          className,
        )}
      >
        {isActive && <source src={webm} type="video/webm" />}
        {isActive && <source src={mp4} type="video/mp4" />}
      </video>
      {isPlaying && (
        <Button
          variant="glass"
          size="icon-sm"
          onClick={togglePlayback}
          aria-label={isUserPaused ? t("playVideo") : t("pauseVideo")}
          className={cn("absolute z-20 rounded-full", controlsClassName)}
        >
          {isUserPaused ? <Play className="size-3.5" /> : <Pause className="size-3.5" />}
        </Button>
      )}
    </>
  );
};
