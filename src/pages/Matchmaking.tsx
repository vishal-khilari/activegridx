import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Users, MapPin, Clock, Trophy, ArrowLeft } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { useNavigate } from "react-router-dom";

const Matchmaking = () => {
  const navigate = useNavigate();
  const nearbyPlayers = [
    { name: "Alex Johnson", sport: "Basketball", skill: "Intermediate", distance: "1.2 km", rating: 4.8, games: 45 },
    { name: "Sarah Chen", sport: "Tennis", skill: "Advanced", distance: "2.5 km", rating: 4.9, games: 78 },
    { name: "Mike Rodriguez", sport: "Football", skill: "Beginner", distance: "0.8 km", rating: 4.6, games: 23 },
    { name: "Emma Wilson", sport: "Badminton", skill: "Intermediate", distance: "3.1 km", rating: 4.7, games: 56 },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <main className="container mx-auto px-4 pt-24 pb-16">
        <div className="max-w-6xl mx-auto">
          <Button variant="ghost" onClick={() => navigate('/')} className="mb-6">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Home
          </Button>
          
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Find Your Perfect{" "}
              <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                Playing Partner
              </span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              AI-powered matchmaking connects you with players based on skill level, location, and availability
            </p>
          </div>

          <div className="mb-8 flex flex-col md:flex-row gap-4">
            <Input
              placeholder="Search by sport, skill level, or location..."
              className="flex-1"
            />
            <Button size="lg">
              <Users className="mr-2 h-5 w-5" />
              Find Players
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {nearbyPlayers.map((player, index) => (
              <Card key={index} className="p-6 hover:shadow-lg transition-all">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h3 className="text-xl font-semibold mb-1">{player.name}</h3>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <MapPin className="h-4 w-4" />
                      <span>{player.distance} away</span>
                    </div>
                  </div>
                  <Badge variant="secondary">{player.skill}</Badge>
                </div>
                
                <div className="space-y-2 mb-4">
                  <div className="flex items-center gap-2">
                    <Trophy className="h-4 w-4 text-primary" />
                    <span className="text-sm">Sport: {player.sport}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock className="h-4 w-4 text-secondary" />
                    <span className="text-sm">{player.games} games played</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-sm">Rating: ⭐ {player.rating}/5.0</span>
                  </div>
                </div>

                <div className="flex gap-2">
                  <Button className="flex-1" variant="default">Connect</Button>
                  <Button variant="outline">View Profile</Button>
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

export default Matchmaking;
