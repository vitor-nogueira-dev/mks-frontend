import { SkeletonWrapper, SkeletonContainer, ProductSkeletonContainer, SkeletonImage, SkeletonText, SkeletonButton } from './style';

const ProductSkeleton = ({ count }: { count: number }) => {
  return (
    <SkeletonContainer>
      <SkeletonWrapper className="animate-pulse" />
      {Array.from({ length: count }, (_, index) => (
        <ProductSkeletonContainer key={index} className="animate-pulse">
          <SkeletonImage />
          <SkeletonText />
          <SkeletonText style={{ width: '50%' }} />
          <SkeletonText />
          <SkeletonText />
          <SkeletonButton />
        </ProductSkeletonContainer>
      ))}
    </SkeletonContainer>
  );
};

export default ProductSkeleton;

