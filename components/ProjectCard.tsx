interface ProjectCardProps {
  title: string;
  category: string;
  image: string;
}

export default function ProjectCard({
  title,
  category,
  image,
}: ProjectCardProps) {
  return (
    <div className="group bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-shadow">
      
      {/* Image Placeholder */}
      <div className="h-56 flex items-center justify-center bg-gray-900 text-white text-7xl">
        {image}
      </div>

      {/* Text */}
      <div className="p-6">
        <p className="text-sm uppercase tracking-wide text-gray-500 mb-2">
          {category}
        </p>
        <h3 className="text-xl font-semibold text-black group-hover:text-orange-600 transition-colors">
          {title}
        </h3>
      </div>
    </div>
  );
}
