import { MapPin } from "lucide-react";

type DestinationCardProps = {
  image: string;
  title: string;
  price: string;
  duration: string;
};

const DestinationCard = ({ image, title, price, duration }: DestinationCardProps) => {
  return (
    <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition">
      {/* Image */}
      <img src={image} alt={title} className="w-full h-48 object-cover" />

      {/* Content */}
      <div className="p-4">
        <h3 className="text-lg font-semibold text-gray-800">{title}</h3>
        <div className="flex items-center justify-between mt-2">
          <p className="text-green-600 font-bold">{price}</p>
          <div className="flex items-center text-gray-500 text-sm gap-1">
            <MapPin size={16} /> {duration}
          </div>
        </div>
      </div>
    </div>
  );
};

export default DestinationCard;
