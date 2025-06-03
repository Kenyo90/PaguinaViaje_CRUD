import {
  Box,
  Button,
  FormLabel,
  Input,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalHeader,
  ModalOverlay,
  Stack,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
} from "@chakra-ui/react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const IniciarSession = () => {
  const navigate = useNavigate();

  // Estado para almacenar los valores del formulario y los mensajes de error
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [last_name,setLast_name]=useState("");
  // const [role,setRole]=useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  // Función para manejar el envío del formulario de inicio de sesión
  const handleLoginSubmit = async (e) => {
    e.preventDefault(); // Evita el comportamiento por defecto del formulario

    setIsLoading(true); // Activamos el estado de carga

    const data = { email, password };

    try {
      const respuesta = await fetch("http://127.0.0.1:5000/api/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (!respuesta.ok) {
        const errorData = await respuesta.json();
        setErrorMessage(errorData.message || "Error al iniciar sesión");
        setIsLoading(false);
        return;
      }else{
        navigate("/Dashboard");
      }

      const responseData = await respuesta.json();
      const { access_token, role } = responseData;
     

      // Guardamos el token y el rol en localStorage
      localStorage.setItem("access_token", access_token);
      localStorage.setItem("role", role);
      console.log("VER....!!!",data );

      // Redirigir según el rol
      // if (responseData.ok) {
      //   navigate("/Dashboard");
      // } 
      // else {
      //   navigate("/");
      // }

      setIsLoading(false);

    } catch (error) {
      console.error("Error en la solicitud Fetch:", error);
      setErrorMessage("Hubo un problema con la solicitud");
      setIsLoading(false);
    }
  };
  const handleRegisterSubmit = async (e) => {
    e.preventDefault(); // Evita el comportamiento por defecto del formulario
    setIsLoading(true); // Activamos el estado de carga

    const data = { name, last_name, email, password };

    try {
      const respuesta = await fetch("http://127.0.0.1:5000/api/auth/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (!respuesta.ok) {
        const errorData = await respuesta.json();
        setErrorMessage(errorData.message || "Error al registrarse");
        setIsLoading(false);
        return;
      }

      const responseData = await respuesta.json();
      setErrorMessage.success("Registro exitoso:")
      console.log("Registro exitoso:", responseData);
      setIsLoading(false);
      console.log("role....!!!",responseData.role);
    } catch (error) {
      console.error("Error en la solicitud Fetch:", error);
      setErrorMessage("Hubo un problema con la solicitud");
      setIsLoading(false);
    }
  };
    

  return (
    <Box id="IniciarSession">
      <ModalOverlay />
      <ModalContent>
        <ModalHeader
          textAlign={"center"}
          fontWeight={"850"}
          fontSize={"25px"}
          fontFamily={'"Shafarik", serif'}
          pt={"50px"}
        >
          Bienvenidos a Dejando Huellas
        </ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <Tabs variant="enclosed">
            <TabList
              display={"flex"}
              flexDirection={"row"}
              justifyContent={"center"}
              pt={"30px"}
            >
              <Tab w={"50%"}>Iniciar Session</Tab>
              <Tab w={"50%"}>Registrarte</Tab>
            </TabList>
            <TabPanels>
              {/* Iniciar sesión */}
              <TabPanel>
                <form onSubmit={handleLoginSubmit}>
                  <Stack spacing={3}>
                    <FormLabel pt={"20px"} htmlFor="email">
                      E-mail
                    </FormLabel>
                    <Input
                      type="text"
                      id="email"
                      placeholder="E-mail"
                      size="md"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                    />
                    <FormLabel pt={"20px"} htmlFor="password">
                      Password
                    </FormLabel>
                    <Input
                      type="password"
                      id="password"
                      placeholder="Password"
                      size="md"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      required
                    />
                    <Box as={"div"} pt={"50px"}>
                      <Button
                        type="submit"
                        disabled={isLoading}
                        w={"100%"}
                        colorScheme="blue"
                      >
                        {isLoading ? "Iniciando sesión..." : "Iniciar sesión"}
                      </Button>
                    </Box>
                    {errorMessage && (
                      <p style={{ color: "red" }}>{errorMessage}</p>
                    )}
                  </Stack>
                </form>
              </TabPanel>

              {/* Registrarse */}
              <TabPanel>
                {/* Aquí iría el formulario de registro */}
                <form onSubmit={handleRegisterSubmit}>
                     <Stack spacing={3}>
                       <FormLabel pt={"20px"} htmlFor="name">
                         Name
                       </FormLabel>
                       <Input
                         type="text"
                         id="name"
                         placeholder="Name"
                         size="md"
                         value={name}
                         onChange={(e) => setName(e.target.value)}
                         required
                       />
                       <FormLabel pt={"20px"} htmlFor="last_name">
                         Last Name
                       </FormLabel>
                       <Input
                         type="text"
                         id="last_name"
                         placeholder="Last Name"
                         size="md"
                         value={last_name}
                         onChange={(e) => setLast_name(e.target.value)}
                         required
                       />
                       <FormLabel pt={"20px"} htmlFor="email">
                         E-mail
                       </FormLabel>
                       <Input
                         type="email"
                         id="email"
                         placeholder="E-mail"
                         size="md"
                         value={email}
                         onChange={(e) => setEmail(e.target.value)}
                         required
                       />
                       <FormLabel pt={"20px"} htmlFor="password">
                         Password
                       </FormLabel>
                       <Input
                         type="password"
                         id="password"
                         placeholder="Password"
                         size="md"
                         value={password}
                         onChange={(e) => setPassword(e.target.value)}
                         required
                       />
                       <Box as={"div"} pt={"30px"}>
                         <Button
                           type="submit"
                           disabled={isLoading}
                           w={"100%"}
                           colorScheme="blue"
                         >
                           {isLoading ? "Registrando..." : "Registrarse"}
                         </Button>
                       </Box>
                       {errorMessage && (
                         <p style={{ color: "red" }}>{errorMessage}</p>
                       )}
                     </Stack>
                   </form>
              </TabPanel>
            </TabPanels>
          </Tabs>
        </ModalBody>
      </ModalContent>
    </Box>
  );
};

export default IniciarSession;

// import {
//   Box,
//   Button,
//   FormLabel,
//   Input,
//   ModalBody,
//   ModalCloseButton,
//   ModalContent,
//   ModalHeader,
//   ModalOverlay,
//   Stack,
//   Tab,
//   TabList,
//   TabPanel,
//   TabPanels,
//   Tabs,
// } from "@chakra-ui/react";
// import { FormEvent, useState } from "react";
// // import { toast } from "react-toastify";
// import { useNavigate } from "react-router-dom";

// const IniciarSession = () => {
//   const navigate = useNavigate();

//   // Estado para almacenar los valores del formulario y los mensajes de error
//   const [username, setUsername] = useState("");
//   const [password, setPassword] = useState("");
//   const [name, setName] = useState("");
//   const [last_name, setLast_name] = useState("");
//   const [email, setEmail] = useState("");
//   const [role, setRole] = useState("");
//   const [errorMessage, setErrorMessage] = useState("");
//   const [isLoading, setIsLoading] = useState(false);

//   console.log(setRole);
//   console.log(username);
//   console.log(setUsername);
//   // Función para manejar el envío del formulario de inicio de sesión
//   const handleLoginSubmit = async (e: FormEvent) => {
//     e.preventDefault(); // Evita el comportamiento por defecto del formulario

//     setIsLoading(true); // Activamos el estado de carga

//     const data = { email, password };

//     try {
//       const respuesta = await fetch("http://127.0.0.1:5000/api/auth/login", {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify(data),
//       });
//       console.log("Rol......!!!",role);

//       if (!respuesta.ok) {
//         const errorData = await respuesta.json();
//         setErrorMessage(errorData.message || 'Error al iniciar sesión');
//         setIsLoading(false);
//         return;
//       }else{
//         if(role ==="ADMIN") {
//           navigate("/Dashboard");
//         }else{
//           navigate("/");
//         }
//       }

//       // const dato = await respuesta.json();

//       // if (respuesta.status === 200) {
//       //   // Si las credenciales son correctas, guardar el access token en localStorage
//       //   toast.success("Inicio de sesión exitoso"); // Muestra el mensaje de éxito
//       //   localStorage.setItem("access_token", dato.access); // Guardamos el token en localStorage
//       //   navigate("/Dashboard"); // Redirigir a la página de Dashboard
//       // }
      
//       const responseData = await respuesta.json();
//       console.log("Inicio de sesión exitoso:", responseData);
//       setIsLoading(false);
      
//     } catch (error) {
//       console.error("Error en la solicitud Fetch:", error);
//       setErrorMessage("Hubo un problema con la solicitud");
//       setIsLoading(false);
//     }
//   };

//   // Función para manejar el envío del formulario de registro
//   const handleRegisterSubmit = async (e: FormEvent) => {
//     e.preventDefault(); // Evita el comportamiento por defecto del formulario
//     setIsLoading(true); // Activamos el estado de carga

//     const data = { name, last_name, email, password };

//     try {
//       const respuesta = await fetch("http://127.0.0.1:5000/api/auth/register", {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify(data),
//       });

//       if (!respuesta.ok) {
//         const errorData = await respuesta.json();
//         setErrorMessage(errorData.message || "Error al registrarse");
//         setIsLoading(false);
//         return;
//       }

//       const responseData = await respuesta.json();
//       console.log("Registro exitoso:", responseData);
//       setIsLoading(false);
//     } catch (error) {
//       console.error("Error en la solicitud Fetch:", error);
//       setErrorMessage("Hubo un problema con la solicitud");
//       setIsLoading(false);
//     }
//   };

//   return (
//     <Box id="IniciarSession">
//       <ModalOverlay />
//       <ModalContent>
//         <ModalHeader
//           textAlign={"center"}
//           fontWeight={"850"}
//           fontSize={"25px"}
//           fontFamily={'"Shafarik", serif'}
//           pt={"50px"}
//         >
//           Bienvenidos a Dejando Huellas
//         </ModalHeader>
//         <ModalCloseButton />
//         <ModalBody>
//           <Tabs variant="enclosed">
//             <TabList
//               display={"flex"}
//               flexDirection={"row"}
//               justifyContent={"center"}
//               pt={"30px"}
//             >
//               <Tab w={"50%"}>Iniciar Session</Tab>
//               <Tab w={"50%"}>Registrarte</Tab>
//             </TabList>
//             <TabPanels>
//               {/* Iniciar sesión */}
//               <TabPanel>
//                 <form onSubmit={handleLoginSubmit}>
//                   <Stack spacing={3}>
//                     <FormLabel pt={"20px"} htmlFor="email">
//                       E-mail
//                     </FormLabel>
//                     <Input
//                       type="text"
//                       id="email"
//                       placeholder="E-mail"
//                       size="md"
//                       value={email}
//                       onChange={(e) => setEmail(e.target.value)}
//                       required
//                     />
//                     <FormLabel pt={"20px"} htmlFor="password">
//                       Password
//                     </FormLabel>
//                     <Input
//                       type="password"
//                       id="password"
//                       placeholder="Password"
//                       size="md"
//                       value={password}
//                       onChange={(e) => setPassword(e.target.value)}
//                       required
//                     />
//                     <Box as={"div"} pt={"50px"}>
//                       <Button
//                         type="submit"
//                         disabled={isLoading}
//                         w={"100%"}
//                         colorScheme="blue"
//                       >
//                         {isLoading ? "Iniciando sesión..." : "Iniciar sesión"}
//                       </Button>
//                     </Box>
//                     {errorMessage && (
//                       <p style={{ color: "red" }}>{errorMessage}</p>
//                     )}
//                   </Stack>
//                 </form>
//               </TabPanel>

//               {/* Registrarse */}
//               <TabPanel>
//                 <form onSubmit={handleRegisterSubmit}>
//                   <Stack spacing={3}>
//                     <FormLabel pt={"20px"} htmlFor="name">
//                       Name
//                     </FormLabel>
//                     <Input
//                       type="text"
//                       id="name"
//                       placeholder="Name"
//                       size="md"
//                       value={name}
//                       onChange={(e) => setName(e.target.value)}
//                       required
//                     />
//                     <FormLabel pt={"20px"} htmlFor="last_name">
//                       Last Name
//                     </FormLabel>
//                     <Input
//                       type="text"
//                       id="last_name"
//                       placeholder="Last Name"
//                       size="md"
//                       value={last_name}
//                       onChange={(e) => setLast_name(e.target.value)}
//                       required
//                     />
//                     <FormLabel pt={"20px"} htmlFor="email">
//                       E-mail
//                     </FormLabel>
//                     <Input
//                       type="email"
//                       id="email"
//                       placeholder="E-mail"
//                       size="md"
//                       value={email}
//                       onChange={(e) => setEmail(e.target.value)}
//                       required
//                     />
//                     <FormLabel pt={"20px"} htmlFor="password">
//                       Password
//                     </FormLabel>
//                     <Input
//                       type="password"
//                       id="password"
//                       placeholder="Password"
//                       size="md"
//                       value={password}
//                       onChange={(e) => setPassword(e.target.value)}
//                       required
//                     />
//                     <Box as={"div"} pt={"30px"}>
//                       <Button
//                         type="submit"
//                         disabled={isLoading}
//                         w={"100%"}
//                         colorScheme="blue"
//                       >
//                         {isLoading ? "Registrando..." : "Registrarse"}
//                       </Button>
//                     </Box>
//                     {errorMessage && (
//                       <p style={{ color: "red" }}>{errorMessage}</p>
//                     )}
//                   </Stack>
//                 </form>
//               </TabPanel>
//             </TabPanels>
//           </Tabs>
//         </ModalBody>
//       </ModalContent>
//     </Box>
//   );
// };

// export default IniciarSession;





