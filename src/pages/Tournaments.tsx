import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Trophy, Users, Calendar, MapPin, ArrowLeft } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { useNavigate } from "react-router-dom";

const Tournaments = () => {
  const navigate = useNavigate();
  const tournaments = [
    {
      name: "Summer Basketball League",
      sport: "Basketball",
      startDate: "July 15, 2024",
      participants: "24/32 teams",
      prize: "$5,000",
      location: "City Arena",
      status: "Open"
    },
    {
      name: "Tennis Championship",
      sport: "Tennis",
      startDate: "August 1, 2024",
      participants: "45/64 players",
      prize: "$3,000",
      location: "Green Park Courts",
      status: "Open"
    },
    {
      name: "Weekend Football Tournament",
      sport: "Football",
      startDate: "July 22, 2024",
      participants: "16/16 teams",
      prize: "$2,500",
      location: "Stadium Complex",
      status: "Full"
    },
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
              Join The{" "}
              <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                Competition
              </span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Compete in local tournaments and leagues with automated rankings and leaderboards
            </p>
          </div>

          <div className="flex justify-center gap-4 mb-8">
            <Button size="lg">
              <Trophy className="mr-2 h-5 w-5" />
              Create Tournament
            </Button>
            <Button variant="outline" size="lg">View Leaderboard</Button>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {tournaments.map((tournament, index) => (
              <Card key={index} className="p-6 hover:shadow-xl transition-all">
                <div className="flex justify-between items-start mb-4">
                  <div className="flex items-center gap-3">
                    <div className="p-3 rounded-lg bg-gradient-to-br from-primary to-secondary">
                      <Trophy className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold">{tournament.name}</h3>
                      <Badge variant="secondary" className="mt-1">{tournament.sport}</Badge>
                    </div>
                  </div>
                  <Badge variant={tournament.status === "Open" ? "default" : "outline"}>
                    {tournament.status}
                  </Badge>
                </div>
                
                <div className="space-y-3 mb-6">
                  <div className="flex items-center gap-2 text-sm">
                    <Calendar className="h-4 w-4 text-primary" />
                    <span>Starts: {tournament.startDate}</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <Users className="h-4 w-4 text-secondary" />
                    <span>Participants: {tournament.participants}</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <MapPin className="h-4 w-4 text-accent" />
                    <span>Location: {tournament.location}</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm font-semibold text-accent">
                    <Trophy className="h-4 w-4" />
                    <span>Prize Pool: {tournament.prize}</span>
                  </div>
                </div>

                <div className="flex gap-2">
                  <Button 
                    className="flex-1" 
                    disabled={tournament.status === "Full"}
                  >
                    {tournament.status === "Full" ? "Tournament Full" : "Register Now"}
                  </Button>
                  <Button variant="outline">View Details</Button>
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

export default Tournaments;
