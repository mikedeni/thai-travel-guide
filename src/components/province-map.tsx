"use client";

import L from "leaflet";
import "leaflet/dist/leaflet.css";
import { useRouter } from "next/navigation";
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import { Button } from "@/components/ui/button";
import type { Province } from "@/lib/provinces";

// Leaflet's default marker icons resolve to bundler-relative paths that 404
// under Next.js. Point them at the published CDN assets instead.
L.Icon.Default.mergeOptions({
  iconRetinaUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon-2x.png",
  iconUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png",
  shadowUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png",
});

type ProvinceMapProps = {
  provinces: Province[];
  center?: [number, number];
  zoom?: number;
  className?: string;
};

export default function ProvinceMap({
  provinces,
  center = [13.5, 100.9],
  zoom = 6,
  className,
}: ProvinceMapProps) {
  const router = useRouter();

  return (
    <MapContainer
      center={center}
      zoom={zoom}
      scrollWheelZoom={false}
      className={className ?? "h-[28rem] w-full rounded-xl"}
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      {provinces.map((province) => (
        <Marker
          key={province.slug}
          position={[province.lat, province.lng]}
          eventHandlers={{
            click: () => router.push(`/province/${province.slug}`),
          }}
        >
          <Popup>
            <div className="flex flex-col items-start gap-2 text-center">
              <p className="text-base font-semibold">{province.nameTh}</p>
              <p className="text-muted-foreground text-xs">{province.region}</p>
              <Button size="sm" onClick={() => router.push(`/province/${province.slug}`)}>
                ดูสถานที่เที่ยว
              </Button>
            </div>
          </Popup>
        </Marker>
      ))}
    </MapContainer>
  );
}
