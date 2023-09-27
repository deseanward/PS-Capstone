import tw, { styled } from "twin.macro";

export const NewMembersContainer = styled.div`
  ${tw`
        w-full
        h-[40vh]
        bg-slate-900
        text-white
        shadow-xl shadow-gray-700
        rounded-lg
        overflow-auto
    `}
`;

export const ProfileSection = styled.section`
  ${tw`
        flex justify-between items-center
        p-4
        rounded-lg

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
