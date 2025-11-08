import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { ShoppingBag, Shield, Clock, DollarSign, ArrowLeft } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { useNavigate } from "react-router-dom";

const Equipment = () => {
  const navigate = useNavigate();
  const equipment = [
    {
      name: "Premium Tennis Racket",
      category: "Tennis",
      price: "$15/day",
      condition: "Excellent",
      owner: "Sarah Chen",
      rating: 4.9,
      insurance: true
    },
    {
      name: "Professional Basketball",
      category: "Basketball",
      price: "$5/day",
      condition: "Good",
      owner: "Mike Rodriguez",
      rating: 4.7,
      insurance: false
    },
    {
      name: "Badminton Set (2 rackets)",
      category: "Badminton",
      price: "$12/day",
      condition: "Excellent",
      owner: "Emma Wilson",
      rating: 4.8,
      insurance: true
    },
    {
      name: "Football Goal Net",
      category: "Football",
      price: "$20/day",
      condition: "Good",
      owner: "Alex Johnson",
      rating: 4.6,
      insurance: true
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
              Rent or List{" "}
              <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                Sports Equipment
              </span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Access quality sports gear with insurance options and condition tracking
            </p>
          </div>

          <div className="flex justify-center gap-4 mb-8">
            <Button size="lg">
              <ShoppingBag className="mr-2 h-5 w-5" />
              List Your Equipment
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {equipment.map((item, index) => (
              <Card key={index} className="overflow-hidden hover:shadow-xl transition-all">
                <div className="h-40 bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center">
                  <ShoppingBag className="h-12 w-12 text-primary" />
                </div>
                
                <div className="p-4">
                  <div className="mb-3">
                    <h3 className="font-semibold mb-1">{item.name}</h3>
                    <Badge variant="secondary" className="text-xs">{item.category}</Badge>
                  </div>
                  
                  <div className="space-y-2 mb-4 text-sm">
                    <div className="flex items-center justify-between">
                      <span className="text-muted-foreground">Condition:</span>
                      <span className="font-medium">{item.condition}</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-muted-foreground">Owner:</span>
                      <span className="font-medium">{item.owner}</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-muted-foreground">Rating:</span>
                      <span>⭐ {item.rating}/5.0</span>
                    </div>
                    {item.insurance && (
                      <div className="flex items-center gap-1 text-accent">
                        <Shield className="h-3 w-3" />
                        <span className="text-xs">Insurance Available</span>
                      </div>
                    )}
                  </div>

                  <div className="flex items-center justify-between mb-3">
                    <span className="text-lg font-bold text-primary">{item.price}</span>
                  </div>

                  <Button className="w-full" size="sm">
                    <Clock className="mr-2 h-4 w-4" />
                    Rent Now
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

export default Equipment;
