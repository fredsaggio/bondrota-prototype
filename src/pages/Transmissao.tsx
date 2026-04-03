import { useEffect, useRef } from "react";
import L from "leaflet";
import "leaflet/dist/leaflet.css";

const Transmissao = () => {
  const mapRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!mapRef.current) return;
    const map = L.map(mapRef.current).setView([-23.5505, -46.6333], 14);
    L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
      attribution: "&copy; OpenStreetMap contributors",
    }).addTo(map);
    return () => { map.remove(); };
  }, []);

  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-extrabold text-foreground">Motoristas</h1>

      <div className="flex gap-6">
        <div className="space-y-3">
          <div className="bg-primary text-primary-foreground px-6 py-3 rounded-full font-semibold text-sm">
            João Ferreira Silva.
          </div>
        </div>

        <div className="flex-1 rounded-2xl overflow-hidden border border-border" style={{ minHeight: 500 }}>
          <div ref={mapRef} className="w-full h-full" style={{ minHeight: 500 }} />
        </div>
      </div>
    </div>
  );
};

export default Transmissao;
