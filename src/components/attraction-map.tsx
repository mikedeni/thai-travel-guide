"use client";

import L from "leaflet";
import "leaflet/dist/leaflet.css";
import { useEffect, useState } from "react";
import { MapContainer, Marker, Polyline, Popup, TileLayer, useMap } from "react-leaflet";
import type { Attraction } from "@/lib/provinces";

type LatLng = [number, number];

function numberedIcon(n: number) {
  return L.divIcon({
    className: "",
    html: `<div style="display:flex;align-items:center;justify-content:center;width:28px;height:28px;border-radius:9999px;background:#dc2626;color:#fff;font-weight:700;font-size:13px;border:2px solid #fff;box-shadow:0 1px 4px rgba(0,0,0,.4)">${n}</div>`,
    iconSize: [28, 28],
    iconAnchor: [14, 14],
    popupAnchor: [0, -14],
  });
}

// Fit the map to all the supplied points.
function FitBounds({ points }: { points: LatLng[] }) {
  const map = useMap();
  useEffect(() => {
    if (points.length === 0) return;
    if (points.length === 1) {
      map.setView(points[0], 12);
      return;
    }
    map.fitBounds(L.latLngBounds(points), { padding: [48, 48] });
  }, [map, points]);
  return null;
}

export default function AttractionMap({
  attractions,
  center,
  className,
}: {
  attractions: Attraction[];
  center: [number, number];
  className?: string;
}) {
  const points: LatLng[] = attractions.map((a) => [a.lat, a.lng]);
  // OSRM expects "lng,lat;lng,lat;..."; this string also keys the effect.
  const osrmCoords = points.map(([lat, lng]) => `${lng},${lat}`).join(";");
  // Straight-line tour path is the default/fallback; replaced by the real road
  // route once OSRM responds (islands/sea legs keep the straight fallback).
  const [route, setRoute] = useState<LatLng[]>(points);

  useEffect(() => {
    if (points.length < 2) return;
    const url = `https://router.project-osrm.org/route/v1/driving/${osrmCoords}?overview=full&geometries=geojson`;
    let cancelled = false;
    fetch(url)
      .then((r) => (r.ok ? r.json() : Promise.reject(new Error(String(r.status)))))
      .then((data) => {
        const line = data?.routes?.[0]?.geometry?.coordinates;
        if (!cancelled && Array.isArray(line) && line.length > 1) {
          setRoute(line.map(([lng, lat]: [number, number]) => [lat, lng]));
        }
      })
      .catch(() => {
        /* keep straight-line fallback */
      });
    return () => {
      cancelled = true;
    };
  }, [osrmCoords, points.length]);

  // Google Maps directions through every stop, in order.
  const gmapsUrl = `https://www.google.com/maps/dir/${points.map(([lat, lng]) => `${lat},${lng}`).join("/")}`;

  return (
    <div className="flex flex-col gap-3">
      <MapContainer
        center={center}
        zoom={11}
        scrollWheelZoom={false}
        className={className ?? "h-[30rem] w-full rounded-xl"}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <FitBounds points={points} />
        <Polyline positions={route} pathOptions={{ color: "#dc2626", weight: 4, opacity: 0.85 }} />
        {attractions.map((a, i) => (
          <Marker key={a.nameEn} position={[a.lat, a.lng]} icon={numberedIcon(i + 1)}>
            <Popup>
              <div className="flex flex-col items-start gap-1">
                <p className="text-base font-semibold">
                  {i + 1}. {a.nameTh}
                </p>
                <p className="text-muted-foreground text-xs">{a.nameEn}</p>
              </div>
            </Popup>
          </Marker>
        ))}
      </MapContainer>
      <a
        href={gmapsUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="self-start text-primary text-sm underline underline-offset-4 hover:no-underline"
      >
        เปิดเส้นทางทั้งหมดใน Google Maps →
      </a>
    </div>
  );
}
