import tw, { styled } from "twin.macro";

export const PostInputContainer = styled.form`
  ${tw`
        w-full
        h-[60vh]
        rounded-lg 
        bg-white
        px-4
        `}
`;

export const InputSection = styled.section`
  ${tw`
        w-full
        h-[60%]
        py-2 
        flex gap-4 items-center justify-evenly
        
    `}
`;

export const PostSection = styled.section`
  ${tw`
        w-full
        h-[40%]
        p-2
        flex gap-2 items-center
    `}
`;
