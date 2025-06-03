import { Box, Img } from "@chakra-ui/react";
import Navbar from "../shared/components/Navbar";
import ViajeN_inicio from "../shared/components/ViajeN_inicio";
import ViajeI_inicio from "../shared/components/ViajeI_inicio";
import Footer from "../shared/components/Footer";
import { useNavigate } from "react-router-dom";


const Inicio = () => {

  const navegador=useNavigate()

  const nacional=()=>{
    navegador('/viajar')

  }
  const internacional=()=>{
    navegador('/viajar')
  }

  return (
    <Box>
      <Box as="div" bgColor={'#f8f3f6'}>
        <Navbar/>
        {/* <hr/> */}
      </Box>
      
      <Box bgColor={'while'} display={'flex'} justifyContent={'center'} >
        <Img  p={'10px'} borderRadius={'20px'} w={'100%'} src="../../public/img/Machupicchu_inicio.png"></Img>
      </Box>
      <Box as='h1'fontSize={'30px'} p={'10px 0'} textAlign={'center'}bgColor={'brown'} color={'#ffff'} fontFamily={'"Rubik Puddles", serif'}fontWeight={'800'} cursor={'pointer'} onClick={nacional} sx={{ '&:hover': {
                backgroundColor: '#ed4245' } }}> Viajes Nacionales
      </Box>
       <ViajeN_inicio/>
       <br />
      <Box as='h1'fontSize={'30px'}color={'#ffff'}  p={'10px 0'} textAlign={'center'}bgColor={'brown'}fontFamily={'"Rubik Puddles", serif'}fontWeight={'800'} cursor={'pointer'} onClick={internacional} sx={{ '&:hover': {
                backgroundColor: '#ed4245' } }} > Viajes Intenacionales</Box>
        <ViajeI_inicio/>

      <Box pt={'30px'}>
      <Footer/>
      </Box>
    </Box>
  );
};

export default Inicio;
