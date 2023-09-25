import tw, { styled } from "twin.macro";

export const PostDisplayContainer = styled.div`
  ${tw`
        w-full
        h-full
        flex flex-col gap-4 items-center
        
        rounded-lg
        overflow-auto
        pb-32 p-4
    `}
`;
