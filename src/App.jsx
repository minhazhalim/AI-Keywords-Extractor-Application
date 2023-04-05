import {useState} from 'react';
import {Container,Box} from '@chakra-ui/react';
import Header from './components/Header.jsx';
import Footer from './components/footer.jsx';
import TextInput from './components/textInput.jsx';
import KeywordsModal from './components/keywordsModal.jsx';
const App = () => {
  const [keywords,setKeywords] = useState([]);
  const [isOpen,setIsOpen] = useState(false);
  const [loading,setLoading] = useState(false);
  const extractKeywords = async (text) => {
    setLoading(true);
    setIsOpen(true);
    const options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${import.meta.env.VITE_OPENAI_API_KEY}`,
      },
      body: JSON.stringify({
        model: 'text-davinci-003',
        prompt: 'Extract keywords from this text. Make the first letter of every word uppercase and separate with commas:\n\n' + text + "",
        temperature: 0.5,
        max_tokens: 60,
        top_p: 1.0,
        frequency_penalty: 0.8,
        presence_penalty: 0.0,
      }),
    };
    try {
      const response = await fetch(import.meta.env.VITE_OPENAI_API_URL,options);
      const data = await response.json();
      setKeywords(data.choices[0].text.trim());
      setLoading(false);
    }catch(error){
      throw error;
    }
  };
  const closeModal = () => {
    setIsOpen(false);
  };
  return (
    <Box bg='blue.600' color='white' height='100vh' paddingTop={130}>
      <Container maxW='3xl' centerContent>
        <Header/>
        <TextInput extractKeywords={extractKeywords}/>
        <Footer/>
      </Container>
      <KeywordsModal keywords={keywords} isOpen={isOpen} closeModal={closeModal} loading={loading}/>
    </Box>
  );
};
export default App;