import tw, { styled } from "twin.macro";

export const ProfilePageContainer = styled.main`
  ${tw`
        flex flex-col
        w-full h-full 
        bg-white
        p-8
    `}
`;

export const ProfileHeaderSection = styled.header`
  ${tw`
    w-full
    flex flex-col items-center justify-center gap-4
    border-2
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
