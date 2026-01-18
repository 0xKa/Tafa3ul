import { Link } from "react-router";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import FeaturesGrid from "@/features/landing/FeaturesGrid";

const LandingPage = () => {
  return (
    <div className="flex flex-col">
      {/* hero */}
      <section className="relative overflow-hidden py-20 md:py-32">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
              Welcome to <span className="text-primary">Tafa3ul</span>
            </h1>
            <p className="mt-6 text-lg text-muted-foreground md:text-xl">
              Tafa3ul is a social media app built exclusively for developers to share posts, showcase projects, and
              connect with peers.
            </p>
            <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Button size="lg" asChild>
                <Link to="/register">
                  Join Tafa3ul
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link to="/about">Learn more about Tafa3ul</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <FeaturesGrid />

      {/* CTA Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Ready to join the conversation?</h2>
            <p className="mt-4 text-muted-foreground">
              Be part of a focused space where developers share, learn, and grow together.
            </p>
            <div className="mt-8">
              <Button size="lg" asChild>
                <Link to="/login">
                  Get started with Tafa3ul
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default LandingPage;
