import {
  Code2,
  Globe2,
  MessageSquareCode,
  Sparkles,
  Users,
} from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../ui/card";

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

const FeaturesGrid = () => {
  return (
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
            <Card
              key={feature.title}
              className="border-0 bg-background hover:shadow-lg hover:shadow-primary/5 hover:scale-105 transition-all duration-150"
            >
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
  );
};

export default FeaturesGrid;
