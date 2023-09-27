import tw, { styled } from "twin.macro";

export const UserHomeContainer = styled.div`
  ${tw`
       
    `}

  display: grid;
  grid-template-columns: 2fr 4fr 2fr;
  gap: 2em;
`;

export const UserHomeMainSection = styled.main`
  ${tw`
        w-full
        h-screen
        flex flex-col gap-8
    `}
`;

export const UserHomeAsideSection = styled.aside`
  ${tw`
        w-full
        flex flex-col gap-8
        bg-white
        rounded-lg
        p-4
    `}

  /* .right {
    ${tw`
        grid grid-rows-2 gap-16
      `}
  } */
`;
