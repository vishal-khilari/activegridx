import { useEffect, useRef, useState } from 'react';
import mapboxgl from 'mapbox-gl';
import 'mapbox-gl/dist/mapbox-gl.css';
import { Card } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { MapPin, Navigation2 } from 'lucide-react';

const Map = () => {
  const mapContainer = useRef<HTMLDivElement>(null);
  const map = useRef<mapboxgl.Map | null>(null);
  const [lng] = useState(-74.5);
  const [lat] = useState(40);
  const [zoom] = useState(9);
  const [mapboxToken, setMapboxToken] = useState('');

  useEffect(() => {
    if (!mapContainer.current || !mapboxToken) return;

    mapboxgl.accessToken = mapboxToken;
    
    map.current = new mapboxgl.Map({
      container: mapContainer.current,
      style: 'mapbox://styles/mapbox/streets-v12',
      center: [lng, lat],
      zoom: zoom,
    });

    // Add navigation controls
    map.current.addControl(new mapboxgl.NavigationControl(), 'top-right');

    // Add example markers for sports venues
    const venues = [
      { lng: -74.5, lat: 40, name: 'City Sports Complex' },
      { lng: -74.52, lat: 40.02, name: 'Green Park Courts' },
      { lng: -74.48, lat: 39.98, name: 'Downtown Arena' },
    ];

    venues.forEach(venue => {
      new mapboxgl.Marker({ color: '#0EA5E9' })
        .setLngLat([venue.lng, venue.lat])
        .setPopup(new mapboxgl.Popup().setHTML(`<h3>${venue.name}</h3>`))
        .addTo(map.current!);
    });

    return () => {
      map.current?.remove();
    };
  }, [mapboxToken, lng, lat, zoom]);

  if (!mapboxToken) {
    return (
      <div className="w-full h-[600px] flex items-center justify-center bg-muted/30 rounded-lg">
        <Card className="p-6 max-w-md w-full">
          <div className="text-center mb-4">
            <MapPin className="h-12 w-12 mx-auto mb-3 text-primary" />
            <h3 className="text-xl font-semibold mb-2">Enter Mapbox Token</h3>
            <p className="text-sm text-muted-foreground mb-4">
              To view the map, please enter your Mapbox public token. 
              Get one free at{' '}
              <a 
                href="https://mapbox.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-primary hover:underline"
              >
                mapbox.com
              </a>
            </p>
          </div>
          <div className="space-y-3">
            <Input
              type="text"
              placeholder="pk.eyJ1IjoiZXhhbXBsZS..."
              value={mapboxToken}
              onChange={(e) => setMapboxToken(e.target.value)}
            />
            <Button 
              className="w-full" 
              onClick={() => mapboxToken && window.location.reload()}
            >
              <Navigation2 className="mr-2 h-4 w-4" />
              Load Map
            </Button>
          </div>
        </Card>
      </div>
    );
  }

  return (
    <div className="relative w-full h-[600px] rounded-lg overflow-hidden shadow-lg">
      <div ref={mapContainer} className="absolute inset-0" />
    </div>
  );
};

export default Map;
