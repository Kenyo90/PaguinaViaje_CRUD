// import { Box, Button, FormLabel, Input, Modal, ModalBody, ModalCloseButton, ModalContent, ModalHeader, Table, TableCaption, TableContainer, Tbody, Td, Th, Thead, Tr, useDisclosure } from "@chakra-ui/react";
// import { useNavigate } from "react-router-dom";
// import { useEffect, useState } from "react";

// const UpdatePost = () => {
//   const navigate = useNavigate();
//   const [title, setTitle] = useState("");
//   const [contenido, setContenido] = useState("");
//   const [imagen, setImagen] = useState(null);
//   const [user_id, setUser_id] = useState(1); // Cambia este valor dependiendo del usuario actual
//   const [message, setMessage] = useState('');
//   const [posts, setPosts] = useState([]);
//   const [postToUpdate, setPostToUpdate] = useState(null);

//   const { isOpen, onOpen, onClose } = useDisclosure();

//   console.log("message",message);
//   useEffect(() => {
//     const fetchPosts = async () => {
//       try {
//         const response = await fetch("http://127.0.0.1:5000/api/post");
//         if (response.ok) {
//           const data = await response.json();
//           setPosts(data);
//         } else {
//           console.error("Error al cargar los posts");
//         }
//       } catch (error) {
//         console.error(error);
//       }
//     };
//     fetchPosts();
//   }, []);

//   // Función para manejar la creación de un post
//   const handleCreate = async (e) => {
//     e.preventDefault();
//     const formData = new FormData();
//     formData.append("title", title);
//     formData.append("contenido", contenido);
//     formData.append("user_id", user_id);
//     if (imagen) formData.append("imagen", imagen);

//     try {
//       const response = await fetch("http://127.0.0.1:5000/api/post", {
//         method: "POST",
//         body: formData,
//       });

//       const data = await response.json();
//       if (response.ok) {
//         setPosts([...posts, data]); // Agregar el nuevo post al estado
//         setMessage("Post creado con éxito");
//       } else {
//         setMessage("Error al crear el post: " + data.message);
//       }
//     } catch (error) {
//       console.error(error);
//       setMessage("Hubo un error al crear el post");
//     }
//   };

//   // Función para manejar la edición de un post
//   const handleEdit = (post) => {
//     setPostToUpdate(post);
//     setTitle(post.title);
//     setContenido(post.contenido);
//     setImagen(post.imagen);
//     setUser_id(post.user_id);
//     onOpen(); // Abre el modal para editar
//   };

//   // Función para manejar la actualización de un post
//   const handleUpdate = async (e) => {
//     e.preventDefault();
//     const formData = new FormData();
//     formData.append("title", title);
//     formData.append("contenido", contenido);
//     formData.append("user_id", user_id);
//     if (imagen) formData.append("imagen", imagen);

//     try {
//       const response = await fetch(
//         `http://127.0.0.1:5000/api/post/${postToUpdate.id}`, // ID del post que se actualizará
//         {
//           method: "PUT",
//           body: formData,
//         }
//       );
//       const data = await response.json();
//       if (response.ok) {
//         setPosts(
//           posts.map((post) =>
//             post.id === postToUpdate.id ? { ...post, ...data } : post
//           )
//         );
//         setMessage("Post actualizado con éxito");
//         onClose(); // Cierra el modal
//       } else {
//         setMessage("Error al actualizar el post: " + data.message);
//       }
//     } catch (error) {
//       console.error(error);
//       setMessage("Hubo un error al actualizar el post");
//     }
//   };

//   // Función para manejar la eliminación de un post
//   const handleDelete = async (id) => {
//     try {
//       const response = await fetch(`http://127.0.0.1:5000/api/post/${id}`, {
//         method: "DELETE",
//       });

//       if (response.ok) {
//         setPosts(posts.filter((post) => post.id !== id)); // Eliminar el post del estado
//         setMessage("Post eliminado con éxito");
//       } else {
//         const data = await response.json();
//         setMessage("Error al eliminar el post: " + data.message);
//       }
//     } catch (error) {
//       console.error(error);
//       setMessage("Hubo un error al eliminar el post");
//     }
//   };

//   return (
//     <Box as="div">
//       {/* Header Section */}
//       <Box
//         as="div"
//         display={"flex"}
//         justifyContent={"space-between"}
//         borderBottom={"4px"}
//         borderColor={"#000000"}
//         alignItems={"center"}
//         p={"10px"}
//       >
//         <Box as="div" display={"flex"} alignItems={"center"}>
//           <Box as="h3" fontWeight={"750"}>
//             Dashboard
//           </Box>
//         </Box>
//         <Button
//           colorScheme="red"
//           pr={"30px"}
//           p={"20px"}
//           w={"130px"}
//           onClick={()=>(navigate('/dashboard'))}
//         >
//           Regresar
//         </Button>
//       </Box>

//       {/* Form for creating a post */}
//       <Box as="div" textAlign={"center"} mt={"20px"} bg={"blue"} h={"30px"} alignContent={"center"}>
//         <Box as="h1" fontWeight={"700"} color={"#ffff"}>
//           CRUD de los POST
//         </Box>
//       </Box>

//       <Button p={"20px"} ml={"10px"} mt={"10px"} colorScheme="green" onClick={onOpen}>
//         Crear POST
//       </Button>

//       {/* Modal for creating and updating post */}
//       <Modal isOpen={isOpen} onClose={onClose}>
//         <ModalContent>
//           <ModalHeader>Crear o Actualizar Post</ModalHeader>
//           <ModalCloseButton />
//           <ModalBody>
//             <form onSubmit={postToUpdate ? handleUpdate : handleCreate}>
//               <Box>
//                 <FormLabel htmlFor="title">Título</FormLabel>
//                 <Input
//                   type="text"
//                   id="title"
//                   value={title}
//                   onChange={(e) => setTitle(e.target.value)}
//                 />
//               </Box>
//               <Box mt={4}>
//                 <FormLabel htmlFor="contenido">Contenido</FormLabel>
//                 <Input
//                   type="text"
//                   id="contenido"
//                   value={contenido}
//                   onChange={(e) => setContenido(e.target.value)}
//                 />
//               </Box>
//               <Box mt={4}>
//                 <FormLabel htmlFor="imagen">Imagen</FormLabel>
//                 <Input
//                   type="file"
//                   id="imagen"
//                   onChange={(e) => setImagen(e.target.files[0])}
//                 />
//               </Box>
//               <Box mt={4} display="flex" justifyContent="flex-end">
//                 <Button type="submit" colorScheme="green">
//                   {postToUpdate ? "Actualizar" : "Crear"} Post
//                 </Button>
//               </Box>
//             </form>
//           </ModalBody>
//         </ModalContent>
//       </Modal>

//       {/* Posts Table */}
//       <Box m={"30px"}>
//         <TableContainer>
//           <Table variant="simple">
//             <TableCaption>Dashboard del Post</TableCaption>
//             <Thead>
//               <Tr>
//                 <Th isNumeric>ID POST</Th>
//                 <Th>Título</Th>
//                 <Th>Contenido</Th>
//                 <Th>Imagen</Th>
//                 <Th>Eliminar</Th>
//                 <Th>Actualizar</Th>
//               </Tr>
//             </Thead>
//             <Tbody>
//               {posts.map((post) => (
//                 <Tr key={post.id}>
//                   <Td>{post.id}</Td>
//                   <Td>{post.title}</Td>
//                   <Td  fontSize="md" p={"8"} maxWidth={"xl"} noOfLines={3}>{post.contenido}</Td>
//                   <Td>
//                     <Input type="file" disabled value={post.imagen?.name} />
//                   </Td>
//                   <Td>
//                     <Button
//                       colorScheme="red"
//                       onClick={() => handleDelete(post.id)}
//                     >
//                       Eliminar
//                     </Button>
//                   </Td>
//                   <Td>
//                     <Button
//                       colorScheme="yellow"
//                       onClick={() => handleEdit(post)} // Edita el post
//                     >
//                       Actualizar
//                     </Button>
//                   </Td>
//                 </Tr>
//               ))}
//             </Tbody>
//           </Table>
//         </TableContainer>
//       </Box>
//     </Box>
//   );
// };

// export default UpdatePost;


