import Image from 'next/image';

interface ImageGridItemProps {
  src: string;
  alt: string;
}

const ImageGridItem: React.FC<ImageGridItemProps> = ({ src, alt }) => {
  return (
    <div className="h-full w-full bg-cover bg-center bg-no-repeat" style={{ backgroundImage: `url(${src})` }}>
      <div className="overlay flex justify-center items-center text-white font-bold text-lg">
        <span>{alt}</span>
      </div>
    </div>
  );
};

export default ImageGridItem;