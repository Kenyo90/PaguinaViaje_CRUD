from typing import Optional
from pydantic import BaseModel

class CrearPostSchema(BaseModel):
    title : str
    contenido : str
    categorias_id:Optional[int] = None
    user_id: int

class PostSchema(CrearPostSchema):
    id: int
    imagen: str
    estado:bool
    created_at: str
    updated_at: str

