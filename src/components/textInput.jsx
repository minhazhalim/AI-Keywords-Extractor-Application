import {useState} from 'react';
import {Button,Textarea,useToast} from '@chakra-ui/react';
const TextInput = ({extractKeywords}) => {
     const [text,setText] = useState("");
     const toast = useToast();
     const submitText = () => {
          if(text === ""){
               toast({
                    title: 'text field is empty',
                    description: 'please enter some text to extract keywords.',
                    status: 'error',
                    duration: 5000,
                    isClosable: false,
               });
               return;
          }
          extractKeywords(text);
     };
     return (
          <>
               <Textarea
                    bg='blue.400'
                    marginTop={6}
                    padding={4}
                    height={200}
                    color='white'
                    value={text}
                    onChange={(event) => setText(event.target.value)}
               />
               <Button
                    bg='blue.500'
                    color='white'
                    marginTop={4}
                    width='100%'
                    _hover={{bg: 'blue.700'}}
                    onClick={submitText}
               >extract keywords
               </Button>
          </>
     );
};
export default TextInput;