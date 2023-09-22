import tw, { styled } from "twin.macro";

export const PostDisplayContainer = styled.div`
  ${tw`
        w-full
        h-screen
        flex flex-col gap-4
        bg-white
        rounded-lg
        overflow-auto
    `}
`;
