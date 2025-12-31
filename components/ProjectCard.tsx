import Image from "next/image";

type ProjectsCardProps = {
  title: string;
  category: string;
  description: string;
  image: string; // Path to image in /public
};

export default function ProjectsCard({
  title,
  category,
  description,
  image,
}: ProjectsCardProps) {
  return (
    <div className="bg-gray-50 rounded-xl overflow-hidden shadow-sm hover:shadow-md transition">
      {/* Image */}
      <div className="relative w-full h-56 bg-gray-200">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover"
          priority
        />
      </div>

      {/* Content */}
      <div className="p-8">
        <span className="text-sm uppercase tracking-wide text-orange-600 font-semibold">
          {category}
        </span>
        <h3 className="text-2xl font-semibold text-black mt-2 mb-3">
          {title}
        </h3>
        <p className="text-gray-700">{description}</p>
      </div>
    </div>
  );
}
