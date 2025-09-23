import { useEffect, useRef } from "react";
import { AGENCIES } from "@/lib/constants";

declare global {
  interface Window {
    google: any;
  }
}

interface GoogleMapProps {
  className?: string;
  agencies?: typeof AGENCIES;
  selectedAgency?: string;
  onAgencySelect?: (agencyId: string) => void;
}

export default function GoogleMap({ 
  className = "", 
  agencies = AGENCIES,
  selectedAgency,
  onAgencySelect 
}: GoogleMapProps) {
  const mapRef = useRef<HTMLDivElement>(null);
  const mapInstanceRef = useRef<any>(null);
  const markersRef = useRef<any[]>([]);

  useEffect(() => {
    if (!window.google || !mapRef.current) return;

    // Center map on West Africa
    const centerCoords = { lat: 6.5, lng: 0.5 };
    
    mapInstanceRef.current = new window.google.maps.Map(mapRef.current, {
      zoom: 6,
      center: centerCoords,
      mapTypeControl: false,
      streetViewControl: false,
      fullscreenControl: false
    });

    // Clear existing markers
    markersRef.current.forEach(marker => marker.setMap(null));
    markersRef.current = [];

    // Add markers for each agency
    agencies.forEach((agency) => {
      const marker = new window.google.maps.Marker({
        position: agency.coordinates,
        map: mapInstanceRef.current,
        title: `${agency.name}, ${agency.country}`,
        icon: {
          path: window.google.maps.SymbolPath.CIRCLE,
          scale: 8,
          fillColor: selectedAgency === agency.id ? '#04bbdf' : '#0396c7',
          fillOpacity: 1,
          strokeColor: '#01356d',
          strokeWeight: 2
        }
      });

      const infoWindow = new window.google.maps.InfoWindow({
        content: `
          <div class="p-2">
            <h3 class="font-bold text-lg">${agency.name}</h3>
            <p class="text-sm text-gray-600">${agency.country}</p>
            <p class="text-sm">${agency.address}</p>
            <p class="text-sm">${agency.phone}</p>
          </div>
        `
      });

      marker.addListener('click', () => {
        if (onAgencySelect) {
          onAgencySelect(agency.id);
        }
        infoWindow.open(mapInstanceRef.current, marker);
      });

      markersRef.current.push(marker);
    });

  }, [agencies, selectedAgency, onAgencySelect]);

  return (
    <div 
      ref={mapRef}
      className={`w-full h-96 rounded-lg ${className}`}
      data-testid="google-map"
    />
  );
}
