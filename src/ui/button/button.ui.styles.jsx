import tw, { styled } from "twin.macro";

export const ButtonContainer = styled.div`
  ${tw`
        w-fit
        
    `}
`;

export const StyledButton = styled.button`
  ${tw`
        
        bg-gray-300 hover:bg-gray-400 text-slate-900 hover:text-white
        cursor-pointer
        rounded-md
        w-fit
        flex items-center justify-center
        px-4 py-2
    `}

  /* width: ${(props) => (props.type === "submit" ? "100%" : "fit-content")}; */
  /* padding: ${(props) => (props.type === "submit" ? "0.75em" : "0.25em 0.5em")}; */

  &.delete {
    background-color: maroon;
    color: white;
    border: 1px solid maroon;
    outline: none;

    &:hover {
      background-color: white;
      color: maroon;
      border: 1px solid maroon
    }
  }

  &.inverted {
    background-color: white;
    color: black;
    border: 1px solid black;
    margin-left: auto;

    &.profile {
      width: fit-content;
    }

    &:hover {
      background-color: black;
      color: white;
    }
  }

  &.submit {
    ${tw`
      p-4
    `}
  }
`;
