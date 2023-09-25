import tw, { styled } from "twin.macro";

export const ProfilePageContainer = styled.main`
  ${tw`
        flex flex-col
        w-[50em] 
        bg-white
        p-8
        m-auto 
        rounded-2xl
    `}
`;

export const ProfileHeaderSection = styled.header`
  ${tw`
      w-full
      flex flex-col items-center justify-center gap-4
      p-4
  `}
`;

export const ProfileSection = styled.section`
  ${tw`
        py-4
        w-[75%]
        self-center
    `}
`;
