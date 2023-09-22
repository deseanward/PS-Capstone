import tw, { styled } from "twin.macro";

export const AvatarContainer = styled.section`
  ${tw`
        flex justify-center items-center
        rounded-full w-fit
        `}
`;

export const AvatarImage = styled.img`
  ${tw`
       w-20
       h-20
        rounded-full
        shadow-lg shadow-black/50
        
        
    `}

  &.post {
    width: 48px;
    height: 48px;
  }
`;
