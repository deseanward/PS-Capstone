import tw, { styled } from "twin.macro";

export const UserHomeContainer = styled.div`
  ${tw`
        
    `}

  display: grid;
  grid-template-columns: 2fr 4fr 2fr;
  gap: 1em;
`;

export const UserHomeMainSection = styled.main`
  ${tw`
        border-2
        w-full
        h-screen
    `}
`;

export const UserHomeAsideSection = styled.aside`
  ${tw`
        border-2
        w-full
        h-screen
    `}
`;
