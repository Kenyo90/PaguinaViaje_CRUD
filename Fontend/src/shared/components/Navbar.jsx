import {Box,Menu,MenuButton, Modal, useDisclosure} from "@chakra-ui/react";
import { useNavigate } from 'react-router-dom';
// import { FaRegUser } from "react-icons/fa6";
// import { MdCardTravel } from "react-icons/md";
// import { FaRegAddressBook } from "react-icons/fa";
import IniciarSession from "./IniciarSession";

const Navbar = () => {

    const navigate = useNavigate();

    const blog = () => {
        navigate('/MyBlog');
    };

    const viaje = () => {
        navigate('/viajar');
    };
    const inicio = () => {
        navigate('/');
    };

    const { isOpen, onOpen, onClose } = useDisclosure()
  
  return (

    <Box as="div" display="flex"  justifyContent="space-between" p={'20px 50px'} margin="0" backgroundColor="#ffff" alignItems={'center'}>
        <Box as="div" color="white" display={'flex'}>
          <Box as='div' style={{ color: "#fff", fontWeight: "700", fontSize: "20px", display:'flex', alignItems:'center', justifyContent:'center'}}>
              <Box as="div" display={'flex'} justifyContent={'center'} alignItems={'center'} gap={'5px'}> 
                <Box as='h1' w={'100px'} h={'100px'} cursor={'pointer'}><img src="../../../img/Dejando_huellas.png" onClick={inicio} alt="" /></Box>
              </Box>
          </Box>
       </Box>

      <Box as="div" display="flex" justifyContent="space-between" color="white" >
        <Menu >
          <Box as="div" display={'flex'} gap={'30px'} alignItems={'center'}>
            <MenuButton onClick={blog}>
                <Box display='flex'  alignItems='center'color={'black'} fontSize={'18px'} fontFamily={'"Shafarik", serif'} fontWeight={'550'} alignContent={'center'} gap={'5px'} >  Mi blog</Box>
            </MenuButton>
            <MenuButton onClick={viaje}>
                <Box display='flex'  alignItems='center'color={'black'} fontSize={'18px'} fontFamily={'"Shafarik", serif'} fontWeight={'550'} alignContent={'center'} gap={'5px'}>  Mis Viajes</Box>
            </MenuButton>
            {/* <MenuButton>
                <Box display='flex'  alignItems='center'color={'black'} fontSize={'18px'} fontFamily={'"Shafarik", serif'} fontWeight={'550'} alignContent={'center'} gap={'5px'} >  Iniciar session</Box>
                

            </MenuButton>  */}
            <Box onClick={onOpen} display='flex' alignItems='center'color={'black'} fontSize={'18px'} fontFamily={'"Shafarik", serif'} fontWeight={'550'} alignContent={'center'} p={'5px'} gap={'10px'} cursor={'pointer'}>Entrar </Box>

                <Modal isOpen={isOpen} onClose={onClose}>
                <IniciarSession/> 
                  {/*<ModalOverlay />
                   <ModalContent>
                    <ModalHeader textAlign={'center'} fontWeight={'850'} fontSize={'25px'} fontFamily={'"Shafarik", serif'}>Bienvenidos a Dejando Huellas 
                    </ModalHeader>
                    <ModalCloseButton />
                    <ModalBody>
                    <IniciarSession/> 
                    </ModalBody>
                  </ModalContent> */}
                </Modal>  
          </Box>
        </Menu>
      </Box>
      
    </Box>

  )
}
export default Navbar
