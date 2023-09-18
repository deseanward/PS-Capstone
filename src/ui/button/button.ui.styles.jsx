import tw, { styled } from "twin.macro";

export const ButtonContainer = styled.div`
  ${tw`
        w-full
        border-2
        mt-8
    `}
`;

export const StyledButton = styled.button`
  ${tw`
        w-full
        bg-gray-300 hover:bg-gray-400 hover:text-white
        cursor-pointer
        p-4
        rounded-md
    `}
`;