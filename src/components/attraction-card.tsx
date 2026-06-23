import Image from "next/image";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import type { Attraction } from "@/lib/provinces";

export function AttractionCard({ attraction }: { attraction: Attraction }) {
  return (
    <Card className="h-full gap-0 overflow-hidden p-0">
      <div className="relative aspect-[3/2] w-full overflow-hidden bg-muted">
        {attraction.image ? (
          <Image
            src={attraction.image}
            alt={attraction.imageAlt}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            className="object-cover"
          />
        ) : (
          <div className="flex h-full w-full items-center justify-center text-muted-foreground text-sm">
            ไม่มีภาพประกอบ
          </div>
        )}
        {attraction.credit ? (
          <a
            href={attraction.credit.url}
            target="_blank"
            rel="noopener noreferrer"
            className="absolute right-0 bottom-0 bg-black/55 px-1.5 py-0.5 text-[10px] text-white/90 hover:text-white"
          >
            © {attraction.credit.author} / {attraction.credit.license}
          </a>
        ) : null}
      </div>
      <CardHeader className="gap-1 pt-5">
        <CardTitle className="text-lg">{attraction.nameTh}</CardTitle>
        <p className="text-muted-foreground text-sm">{attraction.nameEn}</p>
      </CardHeader>
      <CardContent className="pt-3 pb-5">
        <p className="text-muted-foreground text-sm leading-relaxed">{attraction.description}</p>
      </CardContent>
    </Card>
  );
}
