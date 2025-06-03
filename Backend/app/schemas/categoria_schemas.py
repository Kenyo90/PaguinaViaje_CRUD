from pydantic import BaseModel

class CrearCategoriaSchema(BaseModel):
    name:str

class CategoriaSchema(CrearCategoriaSchema):
    id: int
    created_at:str
    updated_at:str