import { motion, useInView, useMotionValue, useSpring, useTransform } from "framer-motion";
import { useEffect, useRef } from "react";

type Props = {
  value: number;
  suffix?: string;
};

export function AnimatedCounter({ value, suffix = "" }: Props) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const raw = useMotionValue(0);
  const smooth = useSpring(raw, { duration: 1400, bounce: 0 });
  const rounded = useTransform(smooth, (latest) => `${Math.round(latest).toLocaleString("es-CO")}${suffix}`);

  useEffect(() => {
    if (inView) raw.set(value);
  }, [inView, raw, value]);

  return <motion.span ref={ref}>{rounded}</motion.span>;
}
