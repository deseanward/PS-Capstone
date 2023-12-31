import tw, { styled } from "twin.macro";

export const PostInputContainer = styled.form`
  ${tw`
        w-full
        h-[200px]
        rounded-lg 
        border-[0.05em] border-gray-400
        
        bg-slate-900
        
        px-4
        `}
`;

export const InputSection = styled.section`
  ${tw`
        w-full
        h-[60%]
        py-8 
        flex gap-4 items-center justify-evenly
        
    `}
`;

export const PostSection = styled.section`
  ${tw`
        w-full
        h-[40%]
        p-2
        flex gap-2 items-center justify-center
    `}
`;
