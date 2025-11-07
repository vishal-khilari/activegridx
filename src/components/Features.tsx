import { Users, Calendar, Trophy, MapPin, ShoppingBag, Shield } from "lucide-react";
import { Card } from "@/components/ui/card";

const features = [
  {
    icon: Users,
    title: "Smart Matchmaking",
    description: "AI-powered player matching based on skill level, location, and availability.",
    gradient: "from-primary to-primary/80",
  },
  {
    icon: Calendar,
    title: "Easy Booking",
    description: "Book grounds and equipment with flexible payment options and instant confirmation.",
    gradient: "from-secondary to-secondary/80",
  },
  {
    icon: Trophy,
    title: "Tournaments & Leagues",
    description: "Join or host local tournaments with automated rankings and leaderboards.",
    gradient: "from-accent to-accent/80",
  },
  {
    icon: MapPin,
    title: "Location-Based Discovery",
    description: "Find nearby players, grounds, and events with real-time availability.",
    gradient: "from-primary to-secondary",
  },
  {
    icon: ShoppingBag,
    title: "Equipment Rental",
    description: "Rent or list sports equipment with insurance options and condition tracking.",
    gradient: "from-secondary to-accent",
  },
  {
    icon: Shield,
    title: "Safety First",
    description: "Verified users, secure payments, insurance options, and dispute resolution.",
    gradient: "from-accent to-primary",
  },
];

const Features = () => {
  return (
    <section id="features" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-4xl md:text-5xl font-bold">
            Everything You Need to{" "}
            <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              Play More
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            A comprehensive platform designed for players, ground owners, and the entire sports community
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <Card
                key={index}
                className="p-6 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 bg-gradient-card border-border/50 group"
              >
                <div
                  className={`w-12 h-12 rounded-lg bg-gradient-to-br ${feature.gradient} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform shadow-glow`}
                >
                  <Icon className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Features;