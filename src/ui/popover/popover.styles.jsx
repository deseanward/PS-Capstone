import tw, { styled } from "twin.macro";
import { motion } from "framer-motion";

export const PopoverContainer = styled.div`
  ${tw`
        fixed
        w-screen h-screen
        top-0 left-0
        bg-black/50
        flex items-center justify-center
        overflow-hidden
    `}

  display: ${(props) => (props.show === "cancel" ? "none" : "flex")}
`;

export const PopoverModal = styled(motion.main)`
  ${tw`
        bg-white
        text-black
        min-w-[20em]
        
        rounded-lg
        p-6 
    `}
`;

export const PopoverHeader = styled.section`
  ${tw`
        mb-8
        pb-2
        border-b-2 
    `}
`;
