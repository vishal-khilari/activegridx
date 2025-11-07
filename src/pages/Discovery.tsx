import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import Map from "@/components/Map";
import { MapPin, Search, Filter } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const Discovery = () => {
  const nearbyLocations = [
    { name: "City Sports Complex", type: "Multi-Sport", distance: "2.1 km", status: "Open Now" },
    { name: "Green Park Courts", type: "Tennis", distance: "1.5 km", status: "Open Now" },
    { name: "Basketball Arena", type: "Basketball", distance: "3.2 km", status: "Closes at 10 PM" },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <main className="container mx-auto px-4 pt-24 pb-16">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Discover Nearby{" "}
              <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                Sports Venues
              </span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Find players, grounds, and events near you with real-time availability
            </p>
          </div>

          <div className="mb-6 flex flex-col md:flex-row gap-4">
            <div className="flex-1 flex gap-2">
              <Input
                placeholder="Search for venues, sports, or locations..."
                className="flex-1"
              />
              <Button>
                <Search className="h-5 w-5" />
              </Button>
            </div>
            <Button variant="outline">
              <Filter className="mr-2 h-4 w-4" />
              Filters
            </Button>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
            <div className="lg:col-span-2">
              <Card className="p-4">
                <Map />
              </Card>
            </div>
            
            <div className="space-y-4">
              <h3 className="text-xl font-semibold flex items-center gap-2">
                <MapPin className="h-5 w-5 text-primary" />
                Nearby Locations
              </h3>
              {nearbyLocations.map((location, index) => (
                <Card key={index} className="p-4 hover:shadow-lg transition-all cursor-pointer">
                  <div className="flex justify-between items-start mb-2">
                    <h4 className="font-semibold">{location.name}</h4>
                    <Badge variant="secondary">{location.type}</Badge>
                  </div>
                  <div className="text-sm text-muted-foreground mb-2">
                    📍 {location.distance}
                  </div>
                  <Badge variant="outline" className="text-xs">
                    {location.status}
                  </Badge>
                </Card>
              ))}
              <Button className="w-full">
                View All Locations
              </Button>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Discovery;
