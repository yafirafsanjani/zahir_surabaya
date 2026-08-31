import Link from "next/link";

const corePillars = [
  {
    title: "Otomatisasi Laporan Finansial",
    badge: "Keuangan & Akuntansi",
    description:
      "Setiap input transaksi penjualan, pembelian, kas/bank, dan jurnal umum secara otomatis menyusun Laporan Laba Rugi, Neraca, Arus Kas, dan Buku Besar tanpa perlu perhitungan manual.",
    icon: (
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z"
      />
    ),
  },
  {
    title: "Kontrol Stok & Multi-Gudang",
    badge: "Inventori & Logistik",
    description:
      "Fitur pelacakan persediaan real-time dengan dukungan multi-lokasi gudang, nomor seri (serial number), batch/expiry date, hingga proses stock opname dan penyesuaian barang yang akurat.",
    icon: (
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M20.25 7.5l-.625 10.632a2.25 2.25 0 01-2.247 2.118H6.622a2.25 2.25 0 01-2.247-2.118L3.75 7.5M10 11.25h4M3.375 7.5h17.25c.621 0 1.125-.504 1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125H3.375c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125z"
      />
    ),
  },
  {
    title: "Manajemen Hutang & Piutang Tepat Waktu",
    badge: "Cashflow Management",
    description:
      "Pantau jadwal jatuh tempo faktur pelanggan dan tagihan supplier secara transparan melalui laporan aging piutang (aging schedule) untuk memastikan perputaran modal kerja tetap sehat.",
    icon: (
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M12 6v12m-3-2.818l.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
      />
    ),
  },
  {
    title: "Kepatuhan Pajak & Rekonsiliasi Bank",
    badge: "Pajak & Perbankan",
    description:
      "Mendukung penghitungan PPN & PPh secara otomatis, pembuatan faktur pajak standar, ekspor data e-Faktur, serta kemudahan pencocokan mutasi kas dengan rekening koran perbankan.",
    icon: (
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z"
      />
    ),
  },
  {
    title: "Fleksibilitas Desktop & Cloud",
    badge: "Multi-Platform",
    description:
      "Pilihan implementasi yang dapat disesuaikan: Zahir Accounting 6 untuk instalasi desktop/server lokal yang stabil, atau Zahir Online berbasis cloud untuk fleksibilitas kerja jarak jauh.",
    icon: (
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M2.25 15a4.5 4.5 0 004.5 4.5H18a3.75 3.75 0 001.332-7.257 3 3 0 00-3.758-3.848 5.25 5.25 0 00-10.233 2.33A4.502 4.502 0 002.25 15z"
      />
    ),
  },
  {
    title: "Hak Akses & Keamanan Data Berlapis",
    badge: "Enterprise Security",
    description:
      "Pengaturan otorisasi dan hak akses modul per user yang ketat (maker-checker), riwayat aktivitas (audit trail), serta pencadangan database otomatis untuk menjaga integritas data bisnis.",
    icon: (
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M16.5 10.5V6.75a4.5 4.5 0 10-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H6.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z"
      />
    ),
  },
];

export function ZahirAccountingFeaturesSection() {
  return (
    <section className="border-b border-border bg-background py-16 sm:py-20 lg:py-24 transition-colors duration-200">
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        <div className="flex flex-col items-center text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-primary/25 bg-primary/10 px-3.5 py-1.5 text-xs font-semibold text-primary">
            <span className="size-1.5 rounded-full bg-primary animate-pulse" />
            Keunggulan Zahir Accounting
          </div>
          <h2 className="mt-3 max-w-3xl text-3xl font-black tracking-tight text-foreground sm:text-4xl">
            Software Akuntansi Lengkap dengan Antarmuka Bisnis yang Intuitif
          </h2>
          <p className="mt-3 max-w-2xl text-sm leading-relaxed text-muted sm:text-base">
            Dirancang agar pemilik bisnis dan tim finance dapat mengelola laporan keuangan tanpa harus menguasai kode akun rumit, namun tetap menghasilkan pembukuan standar PSAK yang akurat.
          </p>
        </div>

        {/* 6 Pilar Fitur Utama */}
        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {corePillars.map((pillar) => (
            <div
              key={pillar.title}
              className="group relative flex flex-col justify-between rounded-3xl border border-border bg-card p-8 shadow-xs transition-all duration-300 hover:-translate-y-1.5 hover:border-primary/40 hover:shadow-xl hover:shadow-primary/5"
            >
              <div>
                <div className="flex items-center justify-between gap-3">
                  <div className="flex size-11 items-center justify-center rounded-2xl bg-primary/10 text-primary transition group-hover:bg-primary group-hover:text-white">
                    <svg className="size-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      {pillar.icon}
                    </svg>
                  </div>
                  <span className="rounded-full border border-primary/20 bg-primary/5 px-3 py-1 text-[11px] font-bold text-primary dark:text-primary-text">
                    {pillar.badge}
                  </span>
                </div>
                <h3 className="mt-5 text-base font-bold text-foreground group-hover:text-primary transition-colors">
                  {pillar.title}
                </h3>
                <p className="mt-2.5 text-xs leading-relaxed text-muted sm:text-[13px]">
                  {pillar.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Quick CTA Box */}
        <div className="mt-14 flex flex-col items-center justify-between gap-6 rounded-3xl border border-primary/25 bg-primary/5 dark:bg-primary/10 p-8 sm:flex-row sm:px-10 transition-colors">
          <div className="text-center sm:text-left">
            <h4 className="text-lg font-bold text-foreground">Ingin Melihat Demo Interaktif Zahir Accounting?</h4>
            <p className="mt-1 text-xs text-muted sm:text-sm">
              Tim konsultan Zahir Surabaya siap memberikan simulasi alur transaksi sesuai model bisnis Anda.
            </p>
          </div>
          <Link
            className="shrink-0 rounded-full bg-primary px-6 py-3 text-xs font-bold text-white shadow-xs transition hover:bg-primary-hover hover:shadow-md hover:shadow-primary/20"
            href="/contact-us"
          >
            Jadwalkan Demo Gratis
          </Link>
        </div>
      </div>
    </section>
  );
}

