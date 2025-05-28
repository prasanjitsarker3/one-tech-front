import { Cpu, Monitor, Zap, Wifi, Battery, Shield, Weight } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

interface LaptopSpecsProps {
  specs: {
    processor: string;
    ram: string;
    storage: string;
    display: string;
    graphics: string;
    battery?: string;
    connectivity?: string;
    weight?: string;
    os?: string;
    ports?: string[];
    audio?: string;
    camera?: string;
    keyboard?: string;
    security?: string[];
    cooling?: string;
    warranty?: string;
    dimensions?: string;
    material?: string;
    color?: string;
  };
}

export function LaptopSpecs({ specs }: LaptopSpecsProps) {
  const specSections = [
    {
      title: "Performance",
      icon: Cpu,
      color: "text-blue-500",
      items: [
        { label: "Processor", value: specs.processor },
        { label: "Memory (RAM)", value: specs.ram },
        { label: "Storage", value: specs.storage },
        { label: "Graphics", value: specs.graphics },
        { label: "Operating System", value: specs.os || "Windows 11 Home" },
      ],
    },
    {
      title: "Display & Audio",
      icon: Monitor,
      color: "text-purple-500",
      items: [
        { label: "Display", value: specs.display },
        {
          label: "Audio System",
          value: specs.audio || "Stereo speakers with HD audio",
        },
        {
          label: "Webcam",
          value: specs.camera || "HD 720p webcam with privacy shutter",
        },
      ],
    },
    {
      title: "Connectivity & Ports",
      icon: Wifi,
      color: "text-green-500",
      items: [
        {
          label: "Wireless",
          value: specs.connectivity || "Wi-Fi 6 (802.11ax), Bluetooth 5.2",
        },
        {
          label: "USB Ports",
          value:
            specs.ports?.join(", ") || "2x USB-A 3.2, 2x USB-C, 1x HDMI 2.1",
        },
        {
          label: "Other Ports",
          value: "3.5mm headphone/microphone combo, SD card reader",
        },
      ],
    },
    {
      title: "Power & Battery",
      icon: Battery,
      color: "text-amber-500",
      items: [
        {
          label: "Battery Life",
          value: specs.battery || "Up to 10 hours typical usage",
        },
        {
          label: "Charging",
          value: "65W USB-C fast charging (0-50% in 45 minutes)",
        },
        { label: "Power Adapter", value: "65W USB-C power adapter included" },
      ],
    },
    {
      title: "Design & Build",
      icon: Weight,
      color: "text-indigo-500",
      items: [
        { label: "Weight", value: specs.weight || "3.5 lbs (1.6 kg)" },
        {
          label: "Dimensions",
          value: specs.dimensions || "12.8 x 8.9 x 0.7 inches",
        },
        {
          label: "Material",
          value: specs.material || "Aluminum chassis with premium finish",
        },
        { label: "Color", value: specs.color || "Space Gray" },
        {
          label: "Keyboard",
          value: specs.keyboard || "Backlit keyboard with numeric keypad",
        },
      ],
    },
    {
      title: "Security & Features",
      icon: Shield,
      color: "text-red-500",
      items: [
        {
          label: "Security",
          value:
            specs.security?.join(", ") ||
            "Fingerprint reader, TPM 2.0, Windows Hello",
        },
        {
          label: "Cooling System",
          value: specs.cooling || "Advanced thermal management with dual fans",
        },
        {
          label: "Warranty",
          value: specs.warranty || "1-year limited hardware warranty",
        },
      ],
    },
  ];

  return (
    <div className="mt-12 border-t pt-8">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {specSections.map((section, sectionIndex) => {
          const IconComponent = section.icon;
          return (
            <Card
              key={sectionIndex}
              className="hover:shadow-lg transition-shadow duration-300"
            >
              <CardHeader className="pb-4">
                <CardTitle className="flex items-center gap-3 text-lg">
                  <div
                    className={`p-2 rounded-lg bg-gray-100 ${section.color}`}
                  >
                    <IconComponent className="h-5 w-5" />
                  </div>
                  {section.title}
                </CardTitle>
              </CardHeader>
              <CardContent className="pt-0">
                <div className="space-y-3">
                  {section.items.map((item, itemIndex) => (
                    <div key={itemIndex}>
                      <div className="flex justify-between items-start gap-4">
                        <span className="font-medium text-sm text-gray-700 min-w-0 flex-shrink-0">
                          {item.label}:
                        </span>
                        <span className="text-sm text-gray-900 text-right min-w-0 flex-1">
                          {item.value}
                        </span>
                      </div>
                      {itemIndex < section.items.length - 1 && (
                        <div className="mt-2 border border-amber-200" />
                      )}
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          );
        })}
      </div>

      {/* Additional Features Highlight */}
      <Card className="mt-8 bg-gradient-to-r from-amber-50 to-orange-50 border-amber-200">
        <CardHeader>
          <CardTitle className="flex items-center gap-2 text-amber-800">
            <Zap className="h-5 w-5" />
            Key Highlights
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              "Premium aluminum construction",
              "Backlit keyboard with ambient light sensor",
              "Fingerprint reader for secure login",
              "Fast charging technology",
              "Advanced cooling system",
              "High-definition webcam",
              "Stereo speakers with enhanced bass",
              "Multiple USB-C and USB-A ports",
              "Wi-Fi 6 for faster connectivity",
              "Long-lasting battery life",
              "Lightweight and portable design",
              "Windows Hello facial recognition",
            ].map((feature, index) => (
              <div key={index} className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-amber-500 rounded-full flex-shrink-0"></div>
                <span className="text-sm text-gray-700">{feature}</span>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
