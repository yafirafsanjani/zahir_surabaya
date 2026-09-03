import { InteractiveLocationMap } from "@/components/ui/interactive-location-map";

export function CompanyOfficeLocationSection() {
  return (
    <section className="bg-surface-raised py-16 sm:py-20 border-b border-border/80">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mb-10">
          <span className="badge-minimal">Lokasi &amp; Kontak</span>
          <h2 className="mt-4 text-3xl sm:text-4xl font-bold tracking-tight text-foreground">
            Hub Layanan Resmi Zahir di Surabaya
          </h2>
          <p className="mt-3 text-sm sm:text-base text-body">
            Kunjungi kantor layanan kami untuk konsultasi, demo, dan pendampingan langsung di area Surabaya.
          </p>
        </div>

        <InteractiveLocationMap />
      </div>
    </section>
  );
}