import Lottie from "lottie-react";
import loadingLottie from "../assets/lottiefiles/loading.json";
import styled from "styled-components";
import Paragraf from "../components/Paragraf";

const StyledLottie = styled(Lottie)`
  width: 50vw;
  height: 50vw;
`;

const StyledSection = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 2rem;
`;

const LoadingView = () => {
  return (
    <StyledSection>
      <Paragraf
        text="Loading..."
        size="12"
        color="828282"
        center={true}
        lineheight="18"
        fam="'Montserrat', sans-serif;"
        as="p"
      />
      <StyledLottie animationData={loadingLottie} />
    </StyledSection>
  );
};

export default LoadingView;
