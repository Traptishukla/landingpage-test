import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import {
  Factory,
  GraduationCap,
  Landmark,
  Megaphone,
  Plane,
  Server,
  Shield,
  FanIcon,
} from 'lucide-react';

const Industries = () => {
  const industries = [
    { icon: <GraduationCap className="h-8 w-8 text-primary" />, name: 'EdTech' },
    { icon: <Landmark className="h-8 w-8 text-primary" />, name: 'FinTech' },
    { icon: <Megaphone className="h-8 w-8 text-primary" />, name: 'Digital Marketing' },
    { icon: <Plane className="h-8 w-8 text-primary" />, name: 'Travel & Hospitality' },
    { icon: <Shield className="h-8 w-8 text-primary" />, name: 'Insurance' },
    { icon: <Server className="h-8 w-8 text-primary" />, name: 'IT/ITeS' },
    { icon: <Factory className="h-8 w-8 text-primary" />, name: 'Manufacturing' },
    { icon: <FanIcon className="h-8 w-8 text-primary" />, name: 'HVAC' },
  ];

  return (
    <section id="industries" className="py-16 sm:py-24 bg-primary/5">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold">Built for Your Industry</h2>
          <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
            Marketti.ae is flexible and powerful enough to be tailored for a wide range of industries.
          </p>
        </div>

<div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-4 xl:grid-cols-4 gap-6 justify-center">
  {industries.map((industry) => (
    <div
      key={industry.name}
      className="flex flex-col items-center text-center space-y-3 group transition-all duration-300"
    >
      <div className="bg-white p-5 rounded-full shadow-md border group-hover:bg-primary/10 group-hover:scale-110 transition-transform duration-300 ease-in-out">
        {industry.icon}
      </div>
      <p className="font-medium text-sm sm:text-base group-hover:text-primary transition-colors duration-300">
        {industry.name}
      </p>
    </div>
  ))}
</div>

      </div>
    </section>
  );
};

export default Industries;
