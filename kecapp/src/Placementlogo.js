import React from "react";
import styled, { keyframes, css } from "styled-components";

function App() {
  const row1 = [
    "https://www.kongu.ac.in/placement/logo/index_clip_image002.jpg",
    "https://www.kongu.ac.in/placement/logo/index_clip_image005.jpg",
    "https://www.kongu.ac.in/placement/logo/index_clip_image004.jpg",
    "https://www.kongu.ac.in/placement/logo/index_clip_image006.jpg",
    "https://www.kongu.ac.in/placement/logo/index_clip_image010.jpg",
    "https://www.kongu.ac.in/placement/logo/index_clip_image012.jpg",
    "https://www.kongu.ac.in/placement/logo/index_clip_image014.gif",
    "https://www.kongu.ac.in/placement/logo/index_clip_image016.jpg",
    "https://www.kongu.ac.in/placement/logo/index_clip_image020.jpg",
    "https://www.kongu.ac.in/placement/logo/index_clip_image025.jpg",
    "https://www.kongu.ac.in/placement/logo/index_clip_image027.jpg",
    "https://www.kongu.ac.in/placement/logo/index_clip_image029.jpg",
    "https://www.kongu.ac.in/placement/logo/index_clip_image023.jpg",
    "https://www.kongu.ac.in/placement/logo/index_clip_image035.gif",
    "https://www.kongu.ac.in/placement/logo/index_clip_image037.jpg",
    "https://www.kongu.ac.in/placement/logo/index_clip_image002_0001.jpg",
    "https://www.kongu.ac.in/placement/logo/index_clip_image008.jpg",
    "https://www.kongu.ac.in/placement/logo/index_clip_image018.jpg",
    "https://www.kongu.ac.in/placement/logo/index_clip_image002_0000.jpg",
    "https://www.kongu.ac.in/placement/logo/index_clip_image021.jpg",
  ];
  const allLogos = [
    "https://www.kongu.ac.in/placement/logo/l&t.png",
    "https://www.kongu.ac.in/placement/logo/hatsun.jpg",
    "https://www.kongu.ac.in/placement/logo/index_clip_image039.jpg",
    "https://www.kongu.ac.in/placement/logo/icici.PNG",
    "https://www.kongu.ac.in/placement/logo/Payoda.jpg",
    "https://www.kongu.ac.in/placement/logo/renault.png",
    "https://www.kongu.ac.in/placement/logo/Sirius.png",
    "https://www.kongu.ac.in/placement/logo/vernalis.jpg",
    "https://www.kongu.ac.in/placement/logo/Anritsu.png",
    "https://www.kongu.ac.in/placement/logo/kalycito.png",
    "https://www.kongu.ac.in/placement/logo/odessa.jpg",
    "https://www.kongu.ac.in/placement/logo/fanucindia.jpg",
    "https://www.kongu.ac.in/placement/logo/urc.jpg",
    "https://www.kongu.ac.in/placement/logo/vuam.jpg",
    "https://www.kongu.ac.in/placement/logo/wabag.jpg",
    "https://www.kongu.ac.in/placement/logo/sakthi%20Constructions.png",
    "https://www.kongu.ac.in/placement/logo/Brakes.jpg",
    "https://www.kongu.ac.in/placement/logo/Delphi.png",
    "https://www.kongu.ac.in/placement/logo/KBR.png",
    "https://www.kongu.ac.in/placement/logo/Naveen.png",
  ];

  // Filter out row1 logos from allLogos
  let row2 = allLogos.filter((logo) => !row1.includes(logo));

  // Ensure row2 has the same number of logos as row1
  if (row2.length < row1.length) {
    const extraLogos = allLogos.filter((logo) => !row1.includes(logo));
    while (row2.length < row1.length) {
      row2.push(extraLogos[row2.length % extraLogos.length]);
    }
  }

  return (
    <AppContainer>
      <Wrapper>
        <Text>With Great Outcomes.</Text>
        <Note>Our students have gotten offers from awesome companies.</Note>
        <Marquee>
          <MarqueeGroup>
            {row1.map((el, index) => (
              <ImageGroup key={index}>
                <Image src={el} />
              </ImageGroup>
            ))}
          </MarqueeGroup>
          <MarqueeGroup>
            {row1.map((el, index) => (
              <ImageGroup key={index}>
                <Image src={el} />
              </ImageGroup>
            ))}
          </MarqueeGroup>
        </Marquee>
        <Marquee>
          <MarqueeGroup2>
            {row2.map((el, index) => (
              <ImageGroup key={index}>
                <Image src={el} />
              </ImageGroup>
            ))}
          </MarqueeGroup2>
          <MarqueeGroup2>
            {row2.map((el, index) => (
              <ImageGroup key={index}>
                <Image src={el} />
              </ImageGroup>
            ))}
          </MarqueeGroup2>
        </Marquee>
      </Wrapper>
    </AppContainer>
  );
}

export default App;

const AppContainer = styled.div`
  width: 100vw;
  height: 100vh;
  color: #000000;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #f5f8fa; /* Light background for contrast */
`;

const Wrapper = styled.div`
  width: 100%;
  max-width: 1400px;
  height: fit-content;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding: 2rem;
`;

const Text = styled.div`
  font-size: 3rem;
  font-weight: 700;
  margin-bottom: 10px;
  color: #0074d9; /* Blue color */
  text-align: center;
  letter-spacing: 1px;
  text-transform: uppercase;
  animation: fadeIn 2s ease-in-out;

  @keyframes fadeIn {
    from {
      opacity: 0;
      transform: translateY(-20px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
`;

const Note = styled.div`
  font-size: 1.5rem;
  font-weight: 300;
  margin-bottom: 40px;
  color: #0074d9; /* Blue color */
  text-align: center;
  letter-spacing: 0.5px;
  animation: fadeIn 2.5s ease-in-out;

  @keyframes fadeIn {
    from {
      opacity: 0;
      transform: translateY(20px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
`;

const Marquee = styled.div`
  display: flex;
  width: 100%;
  overflow: hidden;
  user-select: none;
  mask-image: linear-gradient(
    to right,
    rgba(0, 0, 0, 0) 0%,
    rgba(0, 0, 0, 1) 10%,
    rgba(0, 0, 0, 1) 90%,
    rgba(0, 0, 0, 0) 100%
  );
`;

const scrollX = keyframes`
  from {
    transform: translateX(0);
  }
  to {
    transform: translateX(-50%);
  }
`;

const MarqueeGroup = styled.div`
  display: flex;
  gap: 40px;
  animation: ${scrollX} 30s linear infinite;
  transition: transform 1s ease-out;

  &:hover {
    animation-play-state: paused;
  }
`;

const MarqueeGroup2 = styled.div`
  display: flex;
  gap: 40px;
  animation: ${scrollX} 30s linear infinite reverse;
  animation-delay: -15s;
  transition: transform 1s ease-out;

  &:hover {
    animation-play-state: paused;
  }
`;

const ImageGroup = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 10rem; /* Fixed size for all images */
  transition: transform 0.3s ease-in-out;

  &:hover {
    transform: scale(1.1);
  }
`;

const Image = styled.img`
  width: 100%;
  height: auto;
  border-radius: 0.5rem;
  padding: 5px;
  box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
  object-fit: contain; /* Ensure images maintain aspect ratio */
  transition: transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out;

  &:hover {
    box-shadow: rgba(0, 116, 217, 0.5) 0px 8px 16px 0px;
  }
`;