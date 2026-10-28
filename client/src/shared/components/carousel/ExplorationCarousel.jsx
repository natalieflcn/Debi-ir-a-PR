import useEmblaCarousel from "embla-carousel-react";
import styled from "styled-components";
import Image from "../ui/Image";
import Button from "../ui/Button";
import Row from "../layout/Row";
import { FaCircleChevronLeft, FaCircleChevronRight } from "react-icons/fa6";
import { useState } from "react";
import Card from "../layout/Card";
import Heading from "../typography/Heading";
import Bold from "../typography/Bold";
import ProgressBar from "../ui/ProgressBar";
import { useRef } from "react";
import { useEffect } from "react";
import RouterLink from "../routing/RouterLink";

const CarouselViewport = styled.div`
  overflow: hidden;
`;

const CarouselContainer = styled.div`
  display: flex;
  gap: var(--gap-lg);
`;

const CarouselSlide = styled.div`
  flex: 0 0 calc(50% - var(--gap-lg) / 2);
  min-width: 0;
  box-sizing: border-box;

  @media (max-width: 700px) {
    flex-basis: 100%;
  }
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

  &:disabled {
    opacity: 0.35;
    cursor: not-allowed;
  }
`;

const StyledRow = styled(Row)`
  flex: 1;

  @media (max-width: 1150px) {
    flex-direction: column;
    /* align-items: center; */
    text-align: center;
    /* width: 100%; */
  }
`;

const StyledParagraph = styled.p`
  justify-self: start;
`;

function ExplorationCarousel({ explorationData, userProgress }) {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    // loop: explorationData.length > 1,
    align: "start",
    slidesToScroll: 1,
  });

  const goToPrev = () => emblaApi?.scrollPrev();
  const goToNext = () => emblaApi?.scrollNext();

  const [isLeftHovered, setIsLeftHovered] = useState(false);
  const [isRightHovered, setIsRightHovered] = useState(false);

  const [canScrollPrev, setCanScrollPrev] = useState(false);
  const [canScrollNext, setCanScrollNext] = useState(false);

  useEffect(() => {
    if (!emblaApi) return;

    const updateButtons = () => {
      setCanScrollPrev(emblaApi.canScrollPrev());
      setCanScrollNext(emblaApi.canScrollNext());
    };

    updateButtons();

    emblaApi.on("select", updateButtons);
    emblaApi.on("reInit", updateButtons);

    return () => {
      emblaApi.off("select", updateButtons);
      emblaApi.off("reInit", updateButtons);
    };
  }, [emblaApi]);

  return (
    <CarouselWrapper>
      <CarouselViewport ref={emblaRef}>
        <CarouselContainer>
          {explorationData.map((exploration) => {
            const progress =
              userProgress.find(
                (explorationProgress) =>
                  explorationProgress.explorationId === exploration._id,
              )?.progress ?? 0;

            return (
              <CarouselSlide key={exploration.id}>
                <Card
                  $cardColor="var(--color-light-200)"
                  $shadowColor="var(--color-brown-200)"
                  $cardShadow="insetMD"
                  $height="100%"
                >
                  <StyledRow $direction="vertical" $align="space-between">
                    <StyledRow
                      $direction="horizontal"
                      $align="flex-start"
                      $gap="var(--gap-lg)"
                    >
                      <Image src={exploration.headerImage} $width="40%" />
                      <Row $gap="var(--gap-lg)">
                        <StyledRow>
                          <Heading as="h5">{exploration.name}</Heading>
                          <p>{exploration.tagline}</p>
                        </StyledRow>
                      </Row>
                    </StyledRow>
                    <Row>
                      {progress > 0 ? (
                        <Row $gap="var(--gap-sm)">
                          <Bold $color="var(--color-dark-200)">
                            <StyledParagraph>
                              {progress}% complete
                            </StyledParagraph>
                          </Bold>
                          <ProgressBar completed={progress} label={false} />
                          <RouterLink to={`/explorations/${exploration.slug}`}>
                            <Button $variation="primary" $size="small">
                              Continue Exploring
                            </Button>
                          </RouterLink>
                        </Row>
                      ) : (
                        <RouterLink to={`/explorations/${exploration.slug}`}>
                          <Button $variation="darkRed" $size="small">
                            Start Exploring
                          </Button>
                        </RouterLink>
                      )}
                    </Row>
                  </StyledRow>
                </Card>
              </CarouselSlide>
            );
          })}
        </CarouselContainer>
      </CarouselViewport>

      {explorationData.length > 1 && (
        <Row $direction="horizontal" $align="center" $gap="var(--gap-xl)">
          <CarouselButton
            className="embla__prev"
            onClick={goToPrev}
            disabled={!canScrollPrev}
          >
            <FaCircleChevronLeft
              size={20}
              color={
                isLeftHovered ? "var(--color-red-100)" : "var(--color-red-300)"
              }
              onMouseEnter={() => setIsLeftHovered(true)}
              onMouseLeave={() => setIsLeftHovered(false)}
            />
          </CarouselButton>
          <CarouselButton
            className="embla__next"
            onClick={goToNext}
            disabled={!canScrollNext}
          >
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
      )}
    </CarouselWrapper>
  );
}

export default ExplorationCarousel;
