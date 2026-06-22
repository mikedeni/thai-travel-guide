import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { AttractionCard } from "@/components/attraction-card";
import ProvinceMapLoader from "@/components/province-map-loader";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { getAllProvinces, getProvinceBySlug } from "@/lib/provinces";

export function generateStaticParams() {
  return getAllProvinces().map((province) => ({ slug: province.slug }));
}

export async function generateMetadata({
  params,
}: PageProps<"/province/[slug]">): Promise<Metadata> {
  const { slug } = await params;
  const province = getProvinceBySlug(slug);

  if (!province) {
    return { title: "ไม่พบจังหวัด | ชวนเที่ยวไทย" };
  }

  return {
    title: `${province.nameTh} (${province.nameEn}) | ชวนเที่ยวไทย`,
    description: province.identity,
  };
}

export default async function ProvincePage({ params }: PageProps<"/province/[slug]">) {
  const { slug } = await params;
  const province = getProvinceBySlug(slug);

  if (!province) {
    notFound();
  }

  return (
    <main className="flex flex-1 flex-col">
      <section className="relative flex min-h-[22rem] items-end overflow-hidden">
        <Image
          src={province.image}
          alt={province.imageAlt}
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/30 to-transparent" />
        <div className="relative mx-auto w-full max-w-5xl px-6 py-10 text-white">
          <Badge variant="secondary" className="mb-3">
            {province.region}
          </Badge>
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">{province.nameTh}</h1>
          <p className="mt-2 text-lg text-white/85">{province.nameEn}</p>
        </div>
      </section>

      <section className="mx-auto w-full max-w-5xl px-6 py-10">
        <h2 className="mb-3 text-2xl font-semibold">เอกลักษณ์</h2>
        <p className="text-muted-foreground text-lg leading-relaxed">{province.identity}</p>
      </section>

      <Separator className="mx-auto max-w-5xl" />

      <section className="mx-auto w-full max-w-6xl px-6 py-10">
        <h2 className="mb-6 text-2xl font-semibold">สถานที่เที่ยวเด่นๆ</h2>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {province.attractions.map((attraction) => (
            <AttractionCard key={attraction.nameEn} attraction={attraction} />
          ))}
        </div>
      </section>

      <section className="mx-auto w-full max-w-5xl px-6 py-10">
        <h2 className="mb-6 text-2xl font-semibold">ตำแหน่งบนแผนที่</h2>
        <ProvinceMapLoader provinces={[province]} center={[province.lat, province.lng]} zoom={9} />
      </section>

      <section className="mx-auto w-full max-w-5xl px-6 pb-16">
        <Button asChild variant="outline">
          <Link href="/">กลับหน้าแรก</Link>
        </Button>
      </section>
    </main>
  );
}
