import tw, { styled } from "twin.macro";

export const InputContainer = styled.div`
  ${tw`
    h-fit
    flex items-center
    border-2 border-gray-300
    bg-slate-800 hover:bg-gray-700
    overflow-hidden
    
 `}

  width: ${(props) => props.size}em;
  border-radius: ${(props) => (props.type === "post" ? "4em" : "0.25em")};
`;

export const StyledInput = styled.input`
  ${tw`
    h-full
    w-full
    p-2 px-4
    outline-none
    transition
 `}
  font-size: ${(props) => (props.type === "post" ? "2rem" : "1rem")};
  background-color: ${(props) => (props.type === "post" ? "lightgray" : "")};
`;

export const SearchIconContainer = styled.section`
  ${tw`
    cursor-pointer
    hover:text-white
    self-center justify-self-center
    px-4
    
   
  `}
  display: ${(props) => (props.type === "search" ? "flex" : "none")};
`;
