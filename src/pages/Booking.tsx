import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Calendar, Clock, MapPin, DollarSign } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const Booking = () => {
  const venues = [
    {
      name: "City Sports Complex",
      sport: "Multi-Sport",
      price: "$25/hour",
      distance: "2.1 km",
      rating: 4.8,
      amenities: ["Parking", "Changing Rooms", "Cafeteria"],
      availability: "Available Today"
    },
    {
      name: "Green Park Tennis Courts",
      sport: "Tennis",
      price: "$15/hour",
      distance: "1.5 km",
      rating: 4.6,
      amenities: ["Lighting", "Parking", "Water"],
      availability: "Available Today"
    },
    {
      name: "Downtown Basketball Arena",
      sport: "Basketball",
      price: "$30/hour",
      distance: "3.2 km",
      rating: 4.9,
      amenities: ["AC", "Lockers", "Seating"],
      availability: "Available Tomorrow"
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <main className="container mx-auto px-4 pt-24 pb-16">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Book Your{" "}
              <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                Perfect Venue
              </span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Find and book sports facilities with flexible payment options and instant confirmation
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {venues.map((venue, index) => (
              <Card key={index} className="overflow-hidden hover:shadow-xl transition-all">
                <div className="h-48 bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center">
                  <MapPin className="h-16 w-16 text-primary" />
                </div>
                
                <div className="p-6">
                  <div className="flex justify-between items-start mb-3">
                    <h3 className="text-xl font-semibold">{venue.name}</h3>
                    <Badge variant="secondary">{venue.sport}</Badge>
                  </div>
                  
                  <div className="space-y-2 mb-4">
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <MapPin className="h-4 w-4" />
                      <span>{venue.distance} away</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm">
                      <DollarSign className="h-4 w-4 text-accent" />
                      <span className="font-semibold">{venue.price}</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm">
                      <Calendar className="h-4 w-4 text-secondary" />
                      <span>{venue.availability}</span>
                    </div>
                    <div className="text-sm">
                      <span>⭐ {venue.rating}/5.0</span>
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-1 mb-4">
                    {venue.amenities.map((amenity, i) => (
                      <Badge key={i} variant="outline" className="text-xs">
                        {amenity}
                      </Badge>
                    ))}
                  </div>

                  <Button className="w-full">
                    <Clock className="mr-2 h-4 w-4" />
                    Book Now
                  </Button>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Booking;
