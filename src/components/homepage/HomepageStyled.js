import styled from "styled-components";

export const MainContent = styled.div`
  height: 100vh;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const Header = styled.div`
  width: 100%;
  height: 8vh;
  display: flex;
  justify-content: flex-end;
`;

export const FirstTitle = styled.h1`
  font-size: 3em;
  color: white;
  text-shadow: 4px 4px 2px black;
  padding: 0.5em;
`;

export const SiteName = styled.h1`
  font-size: 3em;
  color: black;
  text-shadow: 4px 4px 2px #5d5147;
  padding: 0.5em;
`;

export const Logo = styled.img`
  height: 15vh;
  width: auto;
  box-shadow: 0px 0px 24px white;
  background: linear-gradient(
    90deg,
    rgba(84, 203, 169, 0.6) 50%,
    rgba(218, 64, 64, 0.8) 20%
  );
  border: 1px solid white;
  padding: 0.5em;
  border-radius: 15px;
`;

export const LogoAndSiteName = styled.div`
  height: min-content;
  width: auto;
  display: flex;
  align-items: center;
  border: 2px solid black;
  border-radius: 0 15px 15px 0;
`;

export const Cartridge = styled.div`
  height: 35vh;
  width: 50vw;
  background: #e2764e;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 3em;
  box-shadow: 4px 4px 12px #5d5147;
  border-radius: 20px;
`;

export const Title = styled.h1`
  font-size: 2em;
  color: white;
  text-shadow: 4px 4px 2px black;
  padding: 0.5em;
`;

export const Paragraph = styled.p`
  font-size: 1.5em;
  color: black;
  text-shadow: 2px 2px 2px #5d5147;
  padding: 0.5em;
  line-height: 1.5em;
`;

export const Button = styled.button`
  width: 10vw;
  height: 6.5vh;
  background: #cf582c;
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  font-size: 1.25em;
  text-shadow: 4px 4px 5px black;
  box-shadow: 4px 4px 5px black;
  margin: 1.5em;
  &#submit {
    margin-bottom: 3em;
    margin-top: 0;
  }
`;
