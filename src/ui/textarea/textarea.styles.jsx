import tw, { styled } from "twin.macro";

export const TextareaContainer = styled.div`
  ${tw`
    h-fit
    flex items-center
    border-2 border-gray-300
    bg-gray-300 hover:bg-gray-700
    overflow-hidden
    
 `}

  width: ${(props) => props.size}em;
  border-radius: ${(props) => (props.type === "post" ? "4em" : "0.25em")};
`;

export const StyledTextarea = styled.textarea`
  ${tw`
    h-full
    w-full
    p-2 px-4
    outline-none
    transition
    resize-none
 `}
  font-size: ${(props) => (props.type === "post" ? "2rem" : "1rem")};
  background-color: ${(props) => (props.type === "post" ? "lightgray" : "")};
`;
