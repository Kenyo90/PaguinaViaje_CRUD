// import { Box, Img} from "@chakra-ui/react"
import { Box, Card, CardHeader, Image } from "@chakra-ui/react"

const ViajeN_inicio = () => {

  const getPost= async() => {
    
    // const respuesta = await fetch("http://127.0.0.1:5000/api/post");
    // const publicaciones = await respuesta.json();
    // console.log("respuesta",respuesta);
    // console.log("publicaciones",publicaciones);
    
    // Mostrar las publicaciones en la consola
  }
  getPost()
  return (


    <Box display={'flex'} flexDir={'row'} gap={'20px'} p={'50px 10%'} flexWrap={'wrap'} justifyContent={'center'}>
          <Card flexDirection="row" overflow="hidden" maxW="xl" w={'450px'}>
           <Image objectFit="cover" maxW="200px" src="../../public/img/Plaza de Lima_inicio.png" alt="Lima" />
              <Box>
                <Card>
                  <Card mb="2" textAlign={'center'} fontSize={'25px'} fontFamily={'"Pacifico", serif'} fontWeight={'400'}>Lima</Card>
                  <CardHeader>
                  Lima es la capital de Perú, conocida por su historia, gastronomía destacada y su importancia cultural y económica.
                  </CardHeader>
                </Card>
              </Box>
          </Card>
    
          <Card flexDirection="row" overflow="hidden" maxW="xl" w={'450px'}>
           <Image objectFit="cover" maxW="200px" src="../../public/img/Plaza de cusco_inicio.png" alt="Cusco" />
              <Box>
                <Card>
                  <Card mb="2" textAlign={'center'} fontSize={'25px'} fontFamily={'"Pacifico", serif'} fontWeight={'400'}>Cusco</Card>
                  <CardHeader>
                  Cusco es la antigua capital del Imperio Inca, conocida por su historia, arquitectura y como puerta de entrada a Machu Picchu.
                  </CardHeader>
                </Card>
              </Box>
          </Card>
    
          <Card flexDirection="row" overflow="hidden" maxW="xl" w={'450px'}>
           <Image objectFit="cover" maxW="200px" src="../../public/img/Plaza de huancayo_inicio.png" alt="Huancayo" />
              <Box>
                <Card>
                  <Card mb="2" textAlign={'center'} fontSize={'25px'} fontFamily={'"Pacifico", serif'} fontWeight={'400'}>Huancayo</Card>
                  <CardHeader>
                  Huancayo es una ciudad andina de Perú, conocida por su cultura, tradiciones, el mercado artesanal más grande del país y su hermoso paisaje montañoso en la sierra central.
                  </CardHeader>
                </Card>
              </Box>
          </Card>

    
          <Card flexDirection="row" overflow="hidden" maxW="xl" w={'450px'}>
           <Image objectFit="cover" maxW="200px" src="../../public/img/Plaza de huaraz_inicio.png" alt="Huaraz" />
              <Box>
                <Card>
                  <Card mb="2" textAlign={'center'} fontSize={'25px'} fontFamily={'"Pacifico", serif'} fontWeight={'400'}>Huaraz</Card>
                  <CardHeader>
                  Huaraz es una ciudad peruana en la sierra central, famosa por su proximidad al Parque Nacional Huascarán y el montañismo.
                  </CardHeader>
                </Card>
              </Box>
          </Card>
          
        </Box>

  )
}

export default ViajeN_inicio
