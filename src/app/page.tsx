import { ProvinceCard } from "@/components/province-card";
import ProvinceMapLoader from "@/components/province-map-loader";
import { Separator } from "@/components/ui/separator";
import { getAllProvinces } from "@/lib/provinces";

export default function Home() {
  const provinces = getAllProvinces();

  return (
    <main className="flex flex-1 flex-col">
      <section className="from-primary/5 to-background border-b bg-gradient-to-b px-6 py-20 text-center">
        <div className="mx-auto max-w-3xl">
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">ชวนเที่ยวไทย</h1>
          <p className="text-muted-foreground mt-5 text-lg leading-relaxed sm:text-xl">
            ออกเดินทางสำรวจ 12 จังหวัดเด่นทั่วไทย ตั้งแต่วัดวาอารามล้านนา ทะเลอันดามัน ไปจนถึงเมืองมรดกโลก
            เลือกจุดหมายของคุณบนแผนที่ แล้วเริ่มต้นการเดินทางได้เลย
          </p>
        </div>
      </section>

      <section className="mx-auto w-full max-w-5xl px-6 py-12">
        <h2 className="mb-6 text-2xl font-semibold">แผนที่จุดหมายปลายทาง</h2>
        <ProvinceMapLoader provinces={provinces} />
        <p className="text-muted-foreground mt-3 text-sm">
          คลิกที่หมุดบนแผนที่เพื่อดูชื่อจังหวัด และไปยังหน้าสถานที่เที่ยว
        </p>
      </section>

      <Separator className="mx-auto max-w-5xl" />

      <section className="mx-auto w-full max-w-6xl px-6 py-12">
        <h2 className="mb-6 text-2xl font-semibold">12 จังหวัดน่าเที่ยว</h2>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {provinces.map((province) => (
            <ProvinceCard key={province.slug} province={province} />
          ))}
        </div>
      </section>
    </main>
  );
}
