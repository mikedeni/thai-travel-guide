import Image from "next/image";
import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import type { Province } from "@/lib/provinces";

export function ProvinceCard({ province }: { province: Province }) {
  return (
    <Link href={`/province/${province.slug}`} className="group block">
      <Card className="h-full gap-0 overflow-hidden p-0 transition-shadow hover:shadow-lg">
        <div className="relative aspect-[3/2] w-full overflow-hidden">
          <Image
            src={province.image}
            alt={province.imageAlt}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            className="object-cover transition-transform duration-300 group-hover:scale-105"
          />
        </div>
        <CardHeader className="gap-2 pt-5">
          <div className="flex items-center justify-between gap-2">
            <CardTitle className="text-xl">{province.nameTh}</CardTitle>
            <Badge variant="secondary">{province.region}</Badge>
          </div>
          <p className="text-muted-foreground text-sm">{province.nameEn}</p>
        </CardHeader>
        <CardContent className="pt-3 pb-5">
          <p className="text-muted-foreground line-clamp-3 text-sm leading-relaxed">
            {province.identity}
          </p>
        </CardContent>
      </Card>
    </Link>
  );
}
