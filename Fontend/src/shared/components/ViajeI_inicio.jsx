
import { Box, Card, CardHeader, Image } from "@chakra-ui/react"

const ViajeI_inicio = () => {




  return (
    <Box display={'flex'} flexDir={'row'} gap={'20px'} p={'50px 10%'} flexWrap={'wrap'} justifyContent={'center'}>
      <Card flexDirection="row" overflow="hidden" maxW="xl" w={'450px'}>
       <Image objectFit="cover" maxW="200px" src="../../public/img/Panama_inter.png" alt="Caffe Latte" />
          <Box>
            <Card>
              <Card mb="2" textAlign={'center'} fontSize={'25px'} fontFamily={'"Pacifico", serif'} fontWeight={'400'}>Panama</Card>
              <CardHeader>
              Panamá es un país de América Central, famoso por su Canal, que conecta los océanos Atlántico y Pacífico, con una economía   diversa y rica cultura.
              </CardHeader>
     
            </Card>
          </Box>
      </Card>

      <Card flexDirection="row" overflow="hidden" maxW="xl" w={'450px'}>
       <Image objectFit="cover" maxW="200px" src="../../public/img/brasil_inter.png" alt="Caffe Latte" />
          <Box>
            <Card>
              <Card mb="2" textAlign={'center'} fontSize={'25px'} fontFamily={'"Pacifico", serif'} fontWeight={'400'}>Brasil</Card>
              <CardHeader>
              Brasil es el país más grande de América del Sur, conocido por su cultura diversa, el Amazonas, fútbol y el carnaval.
              </CardHeader>
            </Card>
          </Box>
      </Card>

      <Card flexDirection="row" overflow="hidden" maxW="xl" w={'450px'}>
       <Image objectFit="cover" maxW="200px" src="../../public/img/Australia_inter.png" alt="Caffe Latte" />
          <Box>
            <Card>
              <Card mb="2" textAlign={'center'} fontSize={'25px'} fontFamily={'"Pacifico", serif'} fontWeight={'400'}>Australia</Card>
              <CardHeader>
              Australia es un país y continente conocido por su fauna única, hermosos paisajes, playas, la Gran Barrera de Coral y su clima diverso.
              </CardHeader>
            </Card>
          </Box>
      </Card>

      <Card flexDirection="row" overflow="hidden" maxW="xl" w={'450px'}>
       <Image objectFit="cover" maxW="200px" src="../../public/img/Canada_inter.png" alt="Caffe Latte" />
          <Box>
            <Card>
              <Card mb="2" textAlign={'center'} fontSize={'25px'} fontFamily={'"Pacifico", serif'} fontWeight={'400'}>Canada</Card>
              <CardHeader>
              Canadá es un país vasto en América del Norte, famoso por su naturaleza, multiculturalismo, calidad de vida y su hockey.
              </CardHeader>
            </Card>
          </Box>
      </Card>
    </Box>




    //prueba
     /* <Card flexDirection="row" overflow="hidden" maxW="xl" w={'450px'}>
       <Image objectFit="cover" maxW="200px" src="../../public/img/Francia_inter.png" alt="Caffe Latte" />
          <Box>
            <Card>
              <Card mb="2" textAlign={'center'} fontSize={'25px'} fontFamily={'"Pacifico", serif'} fontWeight={'400'}>Francia</Card>
              <CardHeader>
              Francia es un país europeo conocido por su historia, cultura, arte, gastronomía y moda. París, su capital, es famosa por la Torre Eiffel y el Louvre.
              </CardHeader>
            </Card>
          </Box>
      </Card> */
    //

 
    // <Box as={'div'}display={'flex'} flexDirection={'column'} gap={'40px'} p={'50px 20% 0px'}  >
    //   <Box as="div" display={'flex'} alignContent={'center'} justifyContent={'center'} h={'100%'} alignItems={'center'} gap={'20px'}>
    //     <Img w={'39%'} h={'100%'} src="../../public/img/Panama_inter.png" alt="" />
    //   <Box w={'50%'} h={'100%'} display={'flex'} flexDirection={'column'} gap={'10px'} justifyContent={'space-between'}>
    //       <Box as="h3" textAlign={'center'} fontSize={'25px'} fontFamily={'"Pacifico", serif'} fontWeight={'400'}> Panama </Box>
    //       <Box as='p' display={'flex'} textAlign={'center'} p={'10px'}fontSize={'17px'}fontFamily={'serif'}>Panamá es un país de América Central, famoso por su Canal, que conecta los océanos Atlántico y Pacífico, con una economía diversa y rica cultura. </Box>
    //     </Box>
    //   </Box>
    //   <Box as="div" display={'flex'} justifyContent={'center'} alignItems={'center'} gap={'20px'}>
    //   <Img w={'39%'} h={'100%'} src="../../public/img/brasil_inter.png" alt="" />
    //     <Box w={'50%'} display={'flex'} flexDirection={'column'} gap={'15px'} >
    //       <Box as="h3" textAlign={'center'} fontSize={'25px'} fontFamily={'"Pacifico", serif'} fontWeight={'400'}> Brasil </Box>
    //       <Box as='p' display={'flex'} textAlign={'center'}p={'10px'}fontSize={'17px'}fontFamily={'serif'}>Brasil es el país más grande de América del Sur, conocido por su cultura diversa, el Amazonas, fútbol y el carnaval. </Box>
    //     </Box>
    //   </Box>
    //   <Box as="div" display={'flex'} justifyContent={'center'} alignItems={'center'} gap={'20px'}>
    //   <Img w={'39%'} h={'100%'} src="../../public/img/Australia_inter.png" alt="" />
    //     <Box w={'50%'} display={'flex'} flexDirection={'column'} gap={'15px'}>
    //       <Box as="h3" textAlign={'center'} fontSize={'25px'} fontFamily={'"Pacifico", serif'} fontWeight={'400'}> Australia </Box>
    //       <Box as='p' display={'flex'} textAlign={'center'}p={'10px'} fontSize={'17px'}fontFamily={'serif'}>Australia es un país y continente conocido por su fauna única, hermosos paisajes, playas, la Gran Barrera de Coral y su clima diverso.</Box>
    //     </Box>
    //   </Box>
    //   <Box as="div" display={'flex'} justifyContent={'center'} alignItems={'center'} gap={'20px'}>
    //   <Img w={'39%'} h={'100%'} src="../../public/img/Francia_inter.png" alt="" />
    //     <Box w={'50%'} display={'flex'} flexDirection={'column'} gap={'15px'}>
    //       <Box as="h3" textAlign={'center'} fontSize={'25px'} fontFamily={'"Pacifico", serif'} fontWeight={'400'}> Francia </Box>
    //       <Box as='p' display={'flex'} textAlign={'center'}p={'10px'}fontSize={'17px'}fontFamily={'serif'}>Francia es un país europeo conocido por su historia, cultura, arte, gastronomía y moda. París, su capital, es famosa por la Torre Eiffel y el Louvre. </Box>
    //     </Box>
    //   </Box>
    //   <Box as="div" display={'flex'} justifyContent={'center'} alignItems={'center'} gap={'20px'}>
    //   <Img w={'39%'} h={'100%'} src="../../public/img/Canada_inter.png" alt="" />
    //     <Box w={'50%'} display={'flex'} flexDirection={'column'} gap={'15px'}>
    //       <Box as="h3" textAlign={'center'} w={'90%'} fontSize={'25px'} fontFamily={'"Pacifico", serif'} fontWeight={'400'}> Canada </Box>
    //       <Box as='p' display={'flex'} textAlign={'center'}p={'10px'}fontSize={'17px'}fontFamily={'serif'}>Canadá es un país vasto en América del Norte, famoso por su naturaleza, multiculturalismo, calidad de vida y su hockey.</Box>
    //     </Box>
    //   </Box>     
    // </Box>
  )
}

export default ViajeI_inicio
