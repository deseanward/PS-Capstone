import tw, { styled } from "twin.macro";

export const ButtonContainer = styled.div`
  ${tw`
        w-full
        flex
        
    `}
`;

export const StyledButton = styled.button`
  ${tw`
        
        bg-gray-300 hover:bg-gray-400 hover:text-white
        cursor-pointer
        rounded-md
    `}

  width: ${(props) => (props.type === "submit" ? "100%" : "fit-content")};
  padding: ${(props) => (props.type === "submit" ? "0.75em" : "0.25em 0.5em")};
`;
