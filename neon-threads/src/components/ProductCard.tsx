import Image from 'next/image';

interface ProductCardProps {
  name: string;
  price: number;
  imageSrc: string;
}

const ProductCard = ({ name, price, imageSrc }: ProductCardProps) => {
  return (
    <div className="bg-white p-4 rounded-lg shadow-md hover:shadow-lg">
      <Image src={imageSrc} alt={name} width={400} height={400} className="rounded" />
      <h4 className="mt-4 text-lg font-semibold text-gray-800">{name}</h4>
      <p className="mt-2 text-gray-600">${price}</p>
      <button className="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 w-full">
        Add to Cart
      </button>
    </div>
  );
};

export default ProductCard;
