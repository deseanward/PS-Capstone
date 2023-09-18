import tw, { styled } from 'twin.macro'

export const FormContainer = styled.div`
  ${tw`
        flex flex-col 
        items-center justify-center
        
        p-4
        w-screen md:w-[500px]
       
        
    `}
`;

export const StyledForm = styled.form`
  ${tw`
        
        w-[100%]
        rounded-xl
        flex flex-col items-center
        gap-4
        shadow-lg shadow-black
        p-8 
       
    `}
`;