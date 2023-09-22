import tw, { styled } from "twin.macro";

export const ButtonContainer = styled.div`
  ${tw`
        w-full
        flex
        
    `}
`;

export const StyledButton = styled.button`
  ${tw`
        
        bg-gray-300 hover:bg-gray-400 text-slate-900 hover:text-white
        cursor-pointer
        rounded-md
    `}

  width: ${(props) => (props.type === "submit" ? "100%" : "fit-content")};
  padding: ${(props) => (props.type === "submit" ? "0.75em" : "0.25em 0.5em")};

  &.delete {
    background-color: maroon;
    color: white;
    border: none;
    outline: none;

    &:hover {
      background-color: white;
      color: maroon;
      /* outline: 1px solid #4285f4; */
    }
  }

  &.inverted {
    background-color: white;
    color: black;
    border: 1px solid black;

    &:hover {
      background-color: black;
      color: white;
      border: none;
    }
  }
`;
