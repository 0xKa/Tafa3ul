import { Link } from "react-router";
import {
  ArrowRight,
  Users,
  MessageSquareCode,
  Globe2,
  Code2,
  Sparkles,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const features = [
  {
    icon: Users,
    title: "Developer‑only community",
    description:
      "A focused social space where every profile, post, and conversation belongs to developers.",
  },
  {
    icon: MessageSquareCode,
    title: "Share code & ideas",
    description:
      "Post snippets, questions, and insights, and get feedback from people who speak your tech stack.",
  },
  {
    icon: Globe2,
    title: "Discover global devs",
    description:
      "Explore what developers around the world are building, learning, and struggling with.",
  },
  {
    icon: Code2,
    title: "Find collaborators",
    description:
      "Connect with mentors, teammates, and future collaborators for your next side project or startup.",
  },
  {
    icon: Sparkles,
    title: "Grow your career",
    description:
      "Showcase your work, build your presence, and open doors to new opportunities.",
  },
];

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
              Tafa3ul is a social media app built exclusively for developers to
              share posts, showcase projects, and connect with peers.
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

      {/* Features Section */}
      <section className="border-t bg-muted/50 py-20">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
              Designed for developer communities
            </h2>
            <p className="mt-4 text-muted-foreground">
              From sharing technical posts to discovering new collaborators,
              Tafa3ul gives you the tools to connect with developers like you.
            </p>
          </div>

          <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {features.map((feature) => (
              <Card key={feature.title} className="border-0 bg-background">
                <CardHeader>
                  <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                    <feature.icon className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle className="mt-4">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base">
                    {feature.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
              Ready to join the conversation?
            </h2>
            <p className="mt-4 text-muted-foreground">
              Be part of a focused space where developers share, learn, and grow
              together.
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
