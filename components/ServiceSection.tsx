interface ServiceSectionProps {
  title: string;
  description: string;
  icon: string;
  reverse?: boolean;
}

export default function ServiceSection({
  title,
  description,
  icon,
  reverse = false,
}: ServiceSectionProps) {
  return (
    <section className="py-24 border-t border-gray-200">
      <div
        className={`max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center gap-12 ${
          reverse ? "md:flex-row-reverse" : ""
        }`}
      >
        {/* Icon / Image */}
        <div className="text-8xl">
          {icon}
        </div>

        {/* Text */}
        <div className="max-w-xl">
          <h2 className="text-4xl font-bold mb-6 text-black">
            {title}
          </h2>
          <p className="text-lg text-black leading-relaxed">
            {description}
          </p>
        </div>
      </div>
    </section>
  );
}
