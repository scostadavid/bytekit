import { Card, CardContent } from "@/components/ui/card";

export const HowItHelps = () => (
    <section id="how-it-helps" className="w-full max-w-3xl mx-auto text-center my-32 px-4">
      <h2 className="text-3xl font-bold mb-8">How ByteKit helps you</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <StepCard icon="🔧" title="1. Choose a Tool" description="Select from a variety of developer tools like converters and prettyifiers." />
        <StepCard icon="⚙️" title="2. Input Your Data" description="Simply paste or enter the data you want to process." />
        <StepCard icon="🔄" title="3. Process the Data" description="Dont worry, the software will do this for you." />
        <StepCard icon="📥" title="4. Get Results" description="Instantly copy your data for use." />
      </div>
    </section>
  );
  const StepCard = ({ icon, title, description }: { icon: string; title: string; description: string }) => (
    <Card className="shadow-sm border border-gray-200">
      <CardContent className="flex flex-col items-center p-6 text-center">
        <div className="text-4xl mb-4">{icon}</div>
        <h3 className="font-semibold mb-2">{title}</h3>
        <p className="text-sm text-muted-foreground">{description}</p>
      </CardContent>
    </Card>
  );
  