import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import CtaSection from "@/features/landing/CtaSection";
import { Code2, Heart, Rocket, Target, Users } from "lucide-react";

const values = [
  {
    icon: Users,
    title: "Community First",
    description: "We believe in the power of developer communities to inspire, teach, and support one another.",
  },
  {
    icon: Code2,
    title: "Open & Transparent",
    description: "We value open source, open discussions, and honest feedback that helps everyone grow.",
  },
  {
    icon: Heart,
    title: "Inclusive Environment",
    description: "Every developer is welcome here, regardless of experience level, background, or tech stack.",
  },
  {
    icon: Rocket,
    title: "Continuous Growth",
    description: "We're committed to helping developers learn, improve, and advance their careers.",
  },
];

const stats = [
  { label: "Active Developers", value: "10K+" },
  { label: "Posts Shared", value: "50K+" },
  { label: "Countries", value: "120+" },
  { label: "Connections Made", value: "100K+" },
];

const AboutPage = () => {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="py-20 md:py-28">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
              About <span className="text-primary">Tafa3ul</span>
            </h1>
            <p className="mt-6 text-lg text-muted-foreground md:text-xl">
              Tafa3ul (تفاعل) means "interaction" in Arabic. We built this platform to create meaningful interactions
              between developers worldwide.
            </p>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="border-t bg-muted/50 py-20">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-4xl">
            <div className="grid gap-12 md:grid-cols-2">
              <div>
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                  <Target className="h-6 w-6 text-primary" />
                </div>
                <h2 className="mt-4 text-2xl font-bold">Our Mission</h2>
                <p className="mt-4 text-muted-foreground">
                  To create a dedicated social space where developers can share knowledge, showcase their work, find
                  collaborators, and grow their careers - free from the noise of general social media.
                </p>
              </div>
              <div>
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                  <Rocket className="h-6 w-6 text-primary" />
                </div>
                <h2 className="mt-4 text-2xl font-bold">Our Vision</h2>
                <p className="mt-4 text-muted-foreground">
                  To become the go-to platform for developers to connect, learn, and build together, a place where every
                  developer, from beginner to expert, feels at home.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-4xl">
            <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
              {stats.map((stat) => (
                <div key={stat.label} className="text-center">
                  <p className="text-3xl font-bold text-primary md:text-4xl">{stat.value}</p>
                  <p className="mt-2 text-sm text-muted-foreground">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <Separator />

      {/* Values Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Our Values</h2>
            <p className="mt-4 text-muted-foreground">
              The principles that guide everything we build and every decision we make.
            </p>
          </div>

          <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {values.map((value) => (
              <Card
                key={value.title}
                className="border-0 bg-muted/50 hover:shadow-lg hover:shadow-primary/5 transition-all duration-150"
              >
                <CardHeader>
                  <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                    <value.icon className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle className="mt-4">{value.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base">{value.description}</CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="border-t bg-muted/50 py-20">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Our Story</h2>
            <div className="mt-8 space-y-4 text-left text-muted-foreground">
              <p>
                Tafa3ul was born from a simple observation: developers needed a space of their own. While general social
                media platforms are great for staying connected with friends and family, they often fall short when it
                comes to sharing code, discussing technical challenges, or finding like-minded collaborators.
              </p>
              <p>
                We started building Tafa3ul in 2025 with a vision to create a platform where developers could truly be
                themselves, share their wins and failures, ask questions without judgment, and build meaningful
                professional relationships.
              </p>
              <p>
                Today, Tafa3ul is growing into a vibrant community of developers from around the world, united by their
                passion for coding and building amazing things.
              </p>
            </div>
          </div>
        </div>
      </section>

      <CtaSection />
    </div>
  );
};

export default AboutPage;
