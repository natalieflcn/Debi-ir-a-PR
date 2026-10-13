import useEmblaCarousel from "embla-carousel-react";
import styled from "styled-components";
import Image from "./Image";
import Button from "./Button";
import Row from "../layout/Row";
import { FaCircleChevronLeft, FaCircleChevronRight } from "react-icons/fa6";
import { useState } from "react";
import Autoplay from "embla-carousel-autoplay";
import { useRef } from "react";

const CarouselViewport = styled.div`
  overflow: hidden;
`;

const CarouselContainer = styled.div`
  display: flex;
`;

const CarouselSlide = styled.div`
  flex: 0 0 auto;
  min-width: 0;
  height: 23rem;
`;

const CarouselWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: var(--gap-md);
`;

const CarouselButton = styled(Button)`
  background: none;

  &:hover {
    fill: var(--color-red-100);
  }
`;

function Carousel({ images }) {
  const autoplay = useRef(
    Autoplay({
      delay: 3000,
      stopOnInteraction: true,
    }),
  );
  const [emblaRef, emblaApi] = useEmblaCarousel(
    {
      loop: true,
      align: "start",
      slidesToScroll: "auto",
    },
    [autoplay.current],
  );

  const goToPrev = () => emblaApi?.scrollPrev();
  const goToNext = () => emblaApi?.scrollNext();

  const [isLeftHovered, setIsLeftHovered] = useState(false);
  const [isRightHovered, setIsRightHovered] = useState(false);

  return (
    <CarouselWrapper>
      <CarouselViewport ref={emblaRef}>
        <CarouselContainer>
          {images.map((img, i) => (
            <CarouselSlide>
              <Image
                src={img?.url}
                $align="center"
                $width="100%"
                $height="23rem"
                $objectFit="cover"
                $borderRadius="none"
                key={i}
              />
            </CarouselSlide>
          ))}
        </CarouselContainer>
      </CarouselViewport>

      <Row $direction="horizontal" $align="center" $gap="var(--gap-xl)">
        <CarouselButton className="embla__prev" onClick={goToPrev}>
          <FaCircleChevronLeft
            size={20}
            color={
              isLeftHovered ? "var(--color-red-100)" : "var(--color-red-300)"
            }
            onMouseEnter={() => setIsLeftHovered(true)}
            onMouseLeave={() => setIsLeftHovered(false)}
          />
        </CarouselButton>
        <CarouselButton className="embla__next" onClick={goToNext}>
          <FaCircleChevronRight
            size={20}
            color={
              isRightHovered ? "var(--color-red-100)" : "var(--color-red-300)"
            }
            onMouseEnter={() => setIsRightHovered(true)}
            onMouseLeave={() => setIsRightHovered(false)}
          />
        </CarouselButton>
      </Row>
    </CarouselWrapper>
  );
}

export default Carousel;
