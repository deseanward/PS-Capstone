import tw, { styled } from "twin.macro";

export const PostInputContainer = styled.form`
  ${tw`
        rounded-lg 
        bg-slate-900
        border-[0.0625em]
        py-4 px-8
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
        h-full
        p-4
        flex gap-2 items-center justify-center
    `}
`;
