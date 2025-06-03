// Crear un nuevo post
// export const createPost = async (data) => {
//     try {
//       const response = await fetch(`http://127.0.0.1:5000/api/post`, {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify(data),
//       });
//       if (!response.ok) {
//         throw new Error('Error creating post');
//       }
//       const result = await response.json();
//       return result;
//     } catch (error) {
//       console.error(error);
//       throw error;
//     }
//   };    
    
    
    
    // const [posts, setPosts] = useState([]);

    // export const fetchData = async () => {
    //   try {
    //     const response = await fetch("http://127.0.0.1:5000/api/post");

    //     if (!response.ok) {
    //       throw new Error("Error al cargar los datos");
    //     } else {
    //       const data = await response.json();
    //       setPosts(data);
    //       console.log("listas de post", data);
    //       data.forEach((datos) => {
    //         console.log(datos);
    //       });
    //     }
    //   } catch (error) {
    //     console.log(error);
    //   }
    // };





// export const getAllPost = async () => {
//     try {
//       const response = await fetch("http://127.0.0.1:5000/api/post");
  
//       if (!response.ok) {
//         return null;
//       }
  
//       const json = await response.json();
//       return json;
//     } catch {
//       return null;
//     }
//   };
  
//   export const postPost = async () => {
//     const formData = new FormData();
  
//     const response = await fetch("http://127.0.0.1:5000/api/post", {
//       method: "POST",
//       headers: {
//         Authorization: "Bearer " + localStorage.getItem("token"),
//       },
//       body: formData,
//     });
  
//     const json = await response.json();
//     const status = response.status;
  
//     return { json, status };
//   };

// Post
// const handleFileChange = (e) => {
  //   const file = e.currentTarget.files?.[0];
  //   if (file) {
  //     setValues({
  //       ...values,
  //       imagen: file,
  //     });
  //   }
  // };
  
  // const handleSubmit = async (e) => {
  //   e.preventDefault();
  //   // setIsLoading(true); // Activamos el estado de carga

  //   const dato = new FormData();
  //   dato.append("title", title);
  //   dato.append("contenido", contenido);
  //   if (imagen) dato.append("imagen", imagen);
  //   dato.append("id", id);

  //   console.log("dato.....!!!", dato);

  //   const data = { title, contenido, id: Number };
  //   console.log("data....", data);

  //   try {
  //     // const formData = new FormData();
  //     // formData.append("title", title);
  //     // formData.append("contenido", contenido);
  //     // if (imagen) formData.append("imagen", imagen);
  //     // formData.append("id", id:Number);
  //     // const formData = new FormData();

  //     // for (const key in data) {
  //     //   formData.append(key, data[key as keyof Post] as string | File);
  //     // }
  //     const respuesta = await fetch("http://127.0.0.1:5000/api/post", {
  //       method: "POST",
  //       headers: {
  //         "Content-Type": "application/json",
  //         // Authorization: "Bearer " + localStorage.getItem("token"),
  //       },
  //       body: JSON.stringify(data),
  //       // body: formData,
  //     });
  //     getAllPost().then((posts) => {
  //       if (posts) {
  //         setPosts(posts);
  //       }
  //     });

  //     setValues({
  //       id: 0,
  //       title: values.title,
  //       contenido: values.contenido,
  //       imagen: values.imagen,
  //     });

  //     if (!respuesta.ok) {
  //       const errorData = await respuesta.json();
  //       setErrorMessage(errorData.message || "Error al registrarse");
  //       setIsLoading(false);
  //       return;
  //     }
  //     const responseData = await respuesta.json();
  //     //   toast.success("Registro exitoso:")
  //     console.log("Registro exitoso:", responseData);
  //     setIsLoading(false);
  //     console.log("role....!!!", responseData.role);
  //   } catch (error) {
  //     console.error("Error en la solicitud Fetch:", error);
  //     setErrorMessage("Hubo un problema con la solicitud");
  //     setIsLoading(false);
  //   }
  // };
  // renderizar

  // fetch("http://127.0.0.1:5000/api/post", {
      //   method: 'POST',
      //   headers: {
      //     "Content-Type": "application/json",
      //   },
      //   body: JSON.stringify(data),
      // })
      // .then(res => console.log(res))
      // .catch(err => console.log(err.message));
    
        // const formData = new FormData();
        // formData.append("title", title);
        // formData.append("contenido", contenido);
        // if (imagen) formData.append("imagen", imagen);
        // formData.append("user_id", user_id);
  
      //   const formData = new FormData();
      //   formData.append("title", title);
      //   formData.append("contenido", contenido);
      //   if (imagen) formData.append("imagen", imagen);
      //   formData.append("user_id", user_id);
      
      // const PostPost= await fetch("http://127.0.0.1:5000/api/post",{
      //   method:"post",
      //   headers: {
      //     "Content-Type": "application/json",
      //     // "Content-Type": "application/json",   
      //   },
      //   body: formData,
      //   // body: JSON.stringify(data)
         
      // });
  
      // if (!PostPost.ok) {
      //   const errorData = await PostPost.json();
      //   setErrorMessage(errorData.message || "Error al registrarse");
      //   setIsLoading(false);
      //   return;
      // }
      // const responseData = await PostPost.json();
      //   console.log("Registro exitoso:", responseData);
      //   setIsLoading(false);
      //   console.log("role....!!!", responseData.role);
      

       // const handDelete = async() => {
        //   try {
        //     const response = await fetch("http://127.0.0.1:5000/api/post", {
        //       method: "POST",
        //       headers: {
        //         "Content-Type": "application/json", // Asegúrate de enviar JSON
        //         Authorization: "Bearer " + localStorage.getItem("token"),
        //       },
        //       body: JSON.stringify(posts), // Convertimos el objeto en un string JSON
        //     });
        
        //     if (response.ok) {
        //       // Si la respuesta es exitosa, puedes agregar el post a la lista
        //       const data = await response.json();
        //       console.log("Post agregado:", data);
        //       // Aquí puedes actualizar tu estado con el nuevo post si lo deseas
        //       // setPosts([...posts, data]); // Si estás usando React, por ejemplo
        //     } else {
        //       console.error("Error al agregar el post");
        //     }
        //   } catch (error) {
        //     console.error("Hubo un error:", error);
        //   }
        // };
          
        
        
        //     if (!response.ok) {
        //       throw new Error("Error al eliminar el post");
        //     }
        
        //     const data = await response.json();
        //     console.log("Post eliminado exitosamente:", data);
        //   } catch (error) {
        //     console.error("Error:", error);
        //   }
        //  };


        
          // console.log(isLoading,errorMessage);
          // console.log("isLoading", isLoading);
          // console.log(setIsLoading);
          // console.log(setErrorMessage);
          // const [values, setValues] = useState("");
          // {
          //   // id: 0,
          //   title: "",
          //   contenido: "",
          //   imagen: null,
          // });
        