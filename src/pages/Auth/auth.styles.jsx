import tw, { styled } from "twin.macro";

export const AuthPageContainer = styled.div`
  ${tw`
        relative
        flex flex-wrap items-center justify-center
        w-[90%] lg:w-[50vw] bg-white
        rounded-2xl
        md:shadow-2xl shadow-gray-600
        p-8
        m-auto
    `}
`;
