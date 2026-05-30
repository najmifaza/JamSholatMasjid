import React from "react";
import { Clock3, Sunrise, Sun, CloudSun, Sunset, MoonStar } from "lucide-react";

const prayers = [
  {
    name: "Subuh",
    time: "04:29",
    icon: Sunrise,
    active: false,
  },
  {
    name: "Dzuhur",
    time: "11:52",
    icon: Sun,
    active: true,
  },
  {
    name: "Ashar",
    time: "15:14",
    icon: CloudSun,
    active: true,
  },
  {
    name: "Maghrib",
    time: "17:42",
    icon: Sunset,
    active: false,
  },
  {
    name: "Isya",
    time: "18:55",
    icon: MoonStar,
    active: false,
  },
];

export default function MasjidTVPrayerWidget() {
  return (
    <>
      <style>
        {`
          @keyframes marquee {
            0% { transform: translateX(100vw); }
            100% { transform: translateX(-100%); }
          }
          .animate-marquee {
            display: inline-block;
            animation: marquee 25s linear infinite;
            white-space: nowrap;
          }
        `}
      </style>

      <div className="h-screen w-full overflow-hidden relative text-white bg-slate-900">
        {/* BACKGROUND IMAGE & OVERLAY */}
        {/* Ganti URL di bawah ini dengan link foto masjid yang Anda inginkan */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat z-0"
          style={{
            backgroundImage:
              "url('https://images.trvl-media.com/place/178043/a8ed123e-3a19-4a74-90bd-925ff046c374.jpg')",
          }}
        />
        <div className="absolute inset-0 bg-black/60 z-0 backdrop-blur-[2px]" />{" "}
        {/* Overlay agar teks terbaca */}
        {/* MAIN CONTENT WRAPPER */}
        <div className="relative z-10 h-full flex flex-col">
          {/* TOP & GRID CONTENT */}
          <div className="flex-1 p-8 flex flex-col">
            {/* TOPBAR */}
            <div className="flex items-center justify-between mb-8">
              <div>
                <h1 className="text-5xl font-black tracking-tight drop-shadow-lg">
                  Jadwal Sholat
                </h1>
                <p className="text-xl text-white/90 mt-2 font-medium drop-shadow-md">
                  Masjid Al-Hikmah • Purwokerto
                </p>
              </div>

              <div className="text-right">
                <div className="text-6xl font-black drop-shadow-lg">20:45</div>
                <div className="text-white/90 text-xl mt-2 font-medium drop-shadow-md">
                  Kamis, 14 Mei 2026
                </div>
              </div>
            </div>

            {/* NEXT PRAYER */}
            <div className="mb-8">
              <div className="rounded-[40px] border border-white/20 bg-black/30 backdrop-blur-xl p-8 shadow-2xl">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-white/80 text-2xl font-medium">
                      Sholat Selanjutnya
                    </p>

                    <div className="flex items-center gap-4 mt-3">
                      <Clock3 size={44} className="text-cyan-300" />

                      <div>
                        <h2 className="text-6xl font-black text-left">
                          Maghrib
                        </h2>
                        <p className="text-3xl text-cyan-200 font-semibold mt-1">
                          17:42 WIB
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="text-right">
                    <p className="text-white/80 text-2xl mb-2 font-medium">
                      Menuju Adzan
                    </p>
                    <h2 className="text-7xl font-black text-cyan-400 drop-shadow-[0_0_15px_rgba(34,211,238,0.5)]">
                      01:22:18
                    </h2>
                  </div>
                </div>
              </div>
            </div>

            {/* GRID */}
            <div className="grid grid-cols-5 gap-6 flex-1">
              {prayers.map((prayer, index) => {
                const Icon = prayer.icon;

                return (
                  <div
                    key={index}
                    className={`
                      relative overflow-hidden
                      rounded-[40px]
                      border
                      backdrop-blur-xl
                      p-8
                      flex flex-col justify-between
                      transition-all duration-300
                      shadow-2xl

                      ${
                        prayer.active
                          ? "bg-cyan-500/10 border-cyan-300/50 scale-[1.02] ring-4 ring-cyan-400/30"
                          : "bg-black/30 border-white/15"
                      }
                    `}
                  >
                    {/* LIQUID GLOW */}
                    <div className="absolute -top-20 -right-20 w-52 h-52 bg-white/10 blur-3xl rounded-full" />

                    {/* ICON */}
                    <div className="relative z-10">
                      <div
                        className={`
                          w-24 h-24
                          rounded-3xl
                          flex items-center justify-center

                          ${prayer.active ? "bg-cyan-400/30 text-cyan-100" : "bg-white/10 text-white/80"}
                        `}
                      >
                        <Icon size={50} />
                      </div>
                    </div>

                    {/* CONTENT */}
                    <div className="relative z-10">
                      <h2 className="text-4xl font-bold mb-3">{prayer.name}</h2>
                      <div
                        className={`text-6xl font-black tracking-tight ${prayer.active ? "text-cyan-300" : "text-white"}`}
                      >
                        {prayer.time}
                      </div>
                      <p className="text-white/70 font-medium text-xl mt-3">
                        WIB
                      </p>
                    </div>

                    {/* ACTIVE BADGE */}
                    {prayer.active && (
                      <div className="absolute top-6 right-6 px-5 py-2 rounded-full bg-cyan-400 text-black text-lg font-bold shadow-[0_0_20px_rgba(34,211,238,0.6)]">
                        Sekarang
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>

          {/* RUNNING TEXT (MARQUEE) */}
          <div className="h-[80px] bg-black/60 backdrop-blur-2xl border-t border-white/20 flex items-center overflow-hidden w-full relative z-20">
            <div className="animate-marquee">
              <span className="text-3xl font-semibold tracking-wide text-white flex items-center gap-12">
                <span>✦</span>
                <span>Selamat datang di Masjid Al-Hikmah.</span>
                <span>✦</span>
                <span>
                  Mohon luruskan dan rapatkan shaf saat sholat berjamaah.
                </span>
                <span>✦</span>
                <span className="text-cyan-300">
                  Harap nonaktifkan atau silent telepon genggam Anda demi
                  kekhusyukan bersama.
                </span>
                <span>✦</span>
                <span>
                  Kajian rutin bakda Maghrib malam ini: Tafsir Al-Qur'an bersama
                  Ustadz Fulan.
                </span>
              </span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
