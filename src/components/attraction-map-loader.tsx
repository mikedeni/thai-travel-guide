"use client";

import dynamic from "next/dynamic";
import type { Attraction } from "@/lib/provinces";

const AttractionMap = dynamic(() => import("@/components/attraction-map"), {
  ssr: false,
  loading: () => (
    <div className="flex h-[30rem] w-full items-center justify-center rounded-xl bg-muted text-muted-foreground">
      กำลังโหลดแผนที่...
    </div>
  ),
});

export default function AttractionMapLoader(props: {
  attractions: Attraction[];
  center: [number, number];
  className?: string;
}) {
  return <AttractionMap {...props} />;
}
