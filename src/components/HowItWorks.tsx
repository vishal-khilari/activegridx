import { ArrowRight } from "lucide-react";

const steps = [
  {
    number: "01",
    title: "Create Your Profile",
    description: "Sign up and set your skill level, sports interests, and availability",
    color: "text-primary",
  },
  {
    number: "02",
    title: "Discover & Connect",
    description: "Find players, grounds, and equipment near you with smart recommendations",
    color: "text-secondary",
  },
  {
    number: "03",
    title: "Book & Play",
    description: "Reserve grounds, split payments with teammates, and track your progress",
    color: "text-accent",
  },
];

const HowItWorks = () => {
  return (
    <section id="how-it-works" className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-4xl md:text-5xl font-bold">
            Get Started in{" "}
            <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              3 Simple Steps
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Join the community and start playing within minutes
          </p>
        </div>

        <div className="max-w-5xl mx-auto">
          <div className="space-y-8">
            {steps.map((step, index) => (
              <div key={index} className="relative">
                <div className="flex flex-col md:flex-row items-start md:items-center gap-6 p-8 rounded-2xl bg-gradient-card border border-border shadow-lg hover:shadow-xl transition-all duration-300">
                  <div className={`text-6xl font-bold ${step.color} opacity-20`}>
                    {step.number}
                  </div>
                  <div className="flex-1 space-y-2">
                    <h3 className="text-2xl font-semibold">{step.title}</h3>
                    <p className="text-muted-foreground text-lg">{step.description}</p>
                  </div>
                  {index < steps.length - 1 && (
                    <ArrowRight className={`hidden md:block h-8 w-8 ${step.color}`} />
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;