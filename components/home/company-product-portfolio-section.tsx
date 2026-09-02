import { InteractiveLocationMap } from "@/components/ui/interactive-location-map";

export function CompanyOfficeLocationSection() {
  return (
    <section className="bg-surface-raised py-16 sm:py-20 border-b border-border/80">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mb-10">
          <span className="badge-minimal">Jangkauan Wilayah Layanan</span>
          <h2 className="mt-3 text-2xl sm:text-3xl font-bold tracking-tight text-foreground">
            Hub Layanan Zahir di Surabaya &amp; Jawa Timur
          </h2>
          <p className="mt-2 text-xs sm:text-sm text-body">
            Pilih area hub untuk melihat fokus layanan, alamat representasi, dan petunjuk navigasi langsung.
          </p>
        </div>

        <InteractiveLocationMap />
      </div>
    </section>
  );
}