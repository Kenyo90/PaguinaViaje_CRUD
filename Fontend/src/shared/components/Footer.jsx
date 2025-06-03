import { Box, Img } from "@chakra-ui/react"

const Footer = () => {
  return (
    <Box >
      <Box as="div"display={'flex'} alignContent={'center'} p={'20px 30px'} justifyContent={'space-between'} bgColor={'black'} alignItems={'center'} flexDirection={'row'} gap={'30px'}>
        <Img w={'100px'} h={'50%'} ml={'40px'} src="../../../public/img/Dejando_huellas.png"></Img>
        <Box as="p">© Copyright 2025 – Todos los derechos reservados. Diseñado por Kenyo D. Saenz</Box>
      </Box>
        {/* <Box as="div"display={'flex'} alignContent={'center'} p={'10px 20px'} justifyContent={'space-between'} bgColor={'black'} alignItems={'center'} flexDirection={'row'} p={'50px 0px'} gap={'30px'}> */}
            
            
            {/* <Box as="div" color={'white'} alignSelf={'center'} w={'80%'} pr={'10%'}>
                <Box as="p">© Copyright 2025 – Todos los derechos reservados. Diseñado por Kenyo D. Saenz</Box>
            </Box> */}
        {/* </Box> */}
    </Box>
  )
}

export default Footer
