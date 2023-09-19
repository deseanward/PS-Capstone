import tw, { styled } from "twin.macro";

export const MiniProfileContainer = styled.div`
  ${tw`
        w-full
        bg-slate-900
        text-white
    `}
`;

export const ProfileSection = styled.section`
  ${tw`
        flex justify-between items-center
        p-4

    `}

  .name {
    ${tw`
            flex flex-col
            relative
            mr-auto
            ml-4
        `}
    }





  hr {
    opacity: 0.2;
  }
`;
