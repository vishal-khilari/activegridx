import { Button } from "@/components/ui/button";
import { Play, MapPin, Users } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative pt-32 pb-20 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-secondary/5 to-accent/5" />
      <div className="absolute top-20 right-10 w-72 h-72 bg-primary/20 rounded-full blur-3xl" />
      <div className="absolute bottom-10 left-10 w-72 h-72 bg-secondary/20 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-card border border-border shadow-md">
            <span className="w-2 h-2 bg-success rounded-full animate-pulse" />
            <span className="text-sm font-medium">Join 10,000+ Active Players</span>
          </div>

          {/* Main Heading */}
          <h1 className="text-5xl md:text-7xl font-bold leading-tight">
            Connect. Play.{" "}
            <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              Compete.
            </span>
          </h1>

          {/* Description */}
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            The ultimate sports community platform connecting players, facilitating bookings, 
            and managing facilities all in one place.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button size="lg" className="bg-gradient-hero shadow-glow text-lg px-8 py-6 group">
              <Play className="mr-2 h-5 w-5 group-hover:scale-110 transition-transform" />
              Find Players Now
            </Button>
            <Button size="lg" variant="outline" className="text-lg px-8 py-6">
              Explore Grounds
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 pt-12">
            <div className="space-y-2">
              <div className="flex items-center justify-center gap-2 text-primary">
                <Users className="h-6 w-6" />
                <span className="text-3xl font-bold">10k+</span>
              </div>
              <p className="text-muted-foreground">Active Players</p>
            </div>
            <div className="space-y-2">
              <div className="flex items-center justify-center gap-2 text-secondary">
                <MapPin className="h-6 w-6" />
                <span className="text-3xl font-bold">500+</span>
              </div>
              <p className="text-muted-foreground">Venues Listed</p>
            </div>
            <div className="space-y-2">
              <div className="flex items-center justify-center gap-2 text-accent">
                <Play className="h-6 w-6" />
                <span className="text-3xl font-bold">50k+</span>
              </div>
              <p className="text-muted-foreground">Games Organized</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;