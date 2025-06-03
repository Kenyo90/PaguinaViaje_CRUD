import { Box, Img } from "@chakra-ui/react"
import Navbar from "../shared/components/Navbar"
import Footer from "../shared/components/Footer"


const MyBlog = () => {
  return (
    <Box as="div" bgColor={'#f8f3f6'}>
      <Navbar/>
      <Box as="h1"  pt={"30px"} textAlign={"center"}  >
          <Box as="div" display={'flex'} justifyContent={'center'} flexDirection={'column'} pb={'30px'}>
            <Box as="div"  display={'flex'} justifyContent={'center'}><Img w={'15%'} src='../../public/img/Sobre blog.png'></Img></Box>
            <Box as="h1" fontSize={'30px'} p={'0px 30px 30px 30px'} fontWeight={'500'} fontFamily={'"Monomakh", serif'}>Sobre el blog</Box>
            <Box display={'flex'} alignSelf={'center'} w={'50%'}><p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Perspiciatis eum iure reprehenderit error omnis laboriosam impedit illum. Mollitia nemo vero praesentium, quis numquam rerum, ut tenetur, unde omnis temporibus dolor.</p></Box>
          </Box>
          <Box as="div" display={'flex'} flexDirection={'column'} pt={'20px'}>
            <Box as="div"  display={'flex'} justifyContent={'center'}><Img w={'15%'} src='../../public/img/viajar.png'></Img></Box>
            <Box as="h1" fontSize={'30px'} p={'30px'} fontWeight={'500'} fontFamily={'"Monomakh", serif'}>¿Porque viajar ?</Box>
            <Box display={'flex'} alignSelf={'center'} w={'50%'}><p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Perspiciatis eum iure reprehenderit error omnis laboriosam impedit illum. Mollitia nemo vero praesentium, quis numquam rerum, ut tenetur, unde omnis temporibus dolor.</p></Box>
          </Box>
          <br />
          <Box as="div" pt={'30px'}>
            <Footer/>
          </Box>    
          
      </Box>
    
    </Box>
  )
}

export default MyBlog
