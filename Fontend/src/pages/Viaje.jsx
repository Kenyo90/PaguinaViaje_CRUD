import { Box, Img} from "@chakra-ui/react";
import Navbar from "../shared/components/Navbar";
// import { useNavigate } from "react-router-dom"
import Footer from "../shared/components/Footer";
import { useEffect, useState } from "react";


const Viaje = () => {
  const [posts, setPosts] = useState([]);

  // renderizar
  useEffect(() => {
    // Usamos una función asincrónica dentro de useEffect
    const fetchData = async () => {
      try {
        const response = await fetch("http://127.0.0.1:5000/api/post");

        if (!response.ok) {
          throw new Error("Error al cargar los datos");
        } else {
          const data = await response.json();
          setPosts(data);
          console.log("listas de post", data);
          data.forEach((datos) => {
            console.log(datos);
          });
        }
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);

  return (
    <Box as="div" bgColor={"#f8f3f6"}>
      <Navbar />
      <Box as="h1" textAlign={"center"}>
        <Box display={"flex"} flexDirection={"column"} gap={"50px"}>
          <Box
            as="h1"
            h={"80px"}
            alignContent={"center"}
            bgColor={"#88604a"}
            color={"#ffff"}
            fontSize={"42px"}
            fontFamily={'"Monomakh", serif'}
            fontWeight={"800"}
          >
            Mis Viajes
          </Box>
          <Box
            as="h2"
            h={"50px"}
            alignContent={"center"}
            bgColor={"#A92323"}
            color={"#fcfcf9"}
            fontSize={"30px"}
            fontFamily={'"Monomakh", serif'}
            fontWeight={"700"}
            // onClick={nacional} cursor={'pointer'}
            sx={{
              "&:hover": {
                // backgroundColor: "#d82d3d",
                // color: "#A92323",
              },
            }}
          >
            Viajes y Experiencias
          </Box>
          {posts.map((post) => (
            <Box as="div" key={post.id} display={"flex"} p={"20px"} shadow={"2px 5px 10px"} w={"880px"} h={"350px"} justifyContent={"center"} margin={"auto"} alignItems={"center"} >
              <Box>
                <Img w={"350px"} src={post.imagen}></Img>
              </Box>
              <Box>
                <Box as="h2">{post.title}</Box>
                <Box as="p" w={"500px"} p={"20px"}>
                  {post.contenido}
                </Box>
              </Box>
            </Box>
          ))}
          <br />
          <br />
        </Box>
      </Box>
      <Footer />
    </Box>
  );
};

export default Viaje;


// import { Box, Img} from "@chakra-ui/react";
// import Navbar from "../shared/components/Navbar";
// import Footer from "../shared/components/Footer";
// import { useEffect, useState } from "react";


// const Viaje = () => {
//   const [posts, setPosts] = useState();

//   // renderizar
//   useEffect(() => {
//     // Usamos una función asincrónica dentro de useEffect
//     const fetchData = async () => {
//       try {
//         const response = await fetch("http://127.0.0.1:5000/api/post");

//         if (!response.ok) {
//           throw new Error("Error al cargar los datos");
//         } else {
//           const data = await response.json();
//           setPosts(data);
//           console.log("listas de post", data);
//           data.forEach((datos) => {
//             console.log(datos);
//           });
//         }
//       } catch (error) {
//         console.log(error);
//       }
//     };
//     fetchData();
//   }, []);

//   return (
//     <Box as="div" bgColor={"#f8f3f6"}>
//       <Navbar />
//       <Box as="h1" textAlign={"center"}>
//         <Box display={"flex"} flexDirection={"column"} gap={"50px"}>
//           <Box
//             as="h1"
//             h={"80px"}
//             alignContent={"center"}
//             bgColor={"Green"}
//             color={"#ffff"}
//             fontSize={"42px"}
//             fontWeight={"800"}
//           >
//             Mis Viajes
//           </Box>
//           <Box
//             as="h2"
//             h={"50px"}
//             alignContent={"center"}
//             bgColor={"black"}
//             color={"#ffff"}
//             fontSize={"30px"}
//             fontWeight={"500"}
//             // onClick={nacional} cursor={'pointer'}
//             sx={{
//               "&:hover": {
//                 backgroundColor: "#ed4245",
//               },
//             }}
//           >
//             Viajes y Experiencias
//           </Box>
//             <Box
//               as="div"
//               // key={post.id}
//               display={"flex"}
//               p={"20px"}
//               shadow={"2px 5px 10px"}
//               w={"880px"}
//               h={"350px"}
//               justifyContent={"center"}
//               margin={"auto"}
//               alignItems={"center"}
//             >
//               <Box>
//                 <Img w={"350px"} ></Img>
//               </Box>
//               <Box>
//                 <Box as="h2"></Box>
//                 <Box as="p" w={"500px"} p={"20px"}>
                  
//                 </Box>
//               </Box>
//             </Box>
        
//           <br />
//           <br />
//         </Box>
//       </Box>
//       <Footer /> 
//       <h1>Viajes</h1>
//     </Box>
//   );
// };

// export default Viaje;
