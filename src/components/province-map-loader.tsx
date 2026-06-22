"use client";

import dynamic from "next/dynamic";
import type { Province } from "@/lib/provinces";

const ProvinceMap = dynamic(() => import("@/components/province-map"), {
  ssr: false,
  loading: () => (
    <div className="bg-muted text-muted-foreground flex h-[28rem] w-full items-center justify-center rounded-xl">
      กำลังโหลดแผนที่...
    </div>
  ),
});

type ProvinceMapLoaderProps = {
  provinces: Province[];
  center?: [number, number];
  zoom?: number;
  className?: string;
};

export default function ProvinceMapLoader(props: ProvinceMapLoaderProps) {
  return <ProvinceMap {...props} />;
}
