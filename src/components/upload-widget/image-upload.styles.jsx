import tw from "twin.macro";

export const ImageUploadContainer = tw.div`
    space-y-4 
    w-fit
    flex flex-col justify-center items-center
`;

export const ImageContainer = tw.section`
    p-4
    border-4 border-dashed border-primary/10
    rounded-lg
    hover:opacity-75
    transition
    flex flex-col justify-center items-center
    space-y-2
`;

export const ImageView = tw.section`
    relative h-40 w-40
`;