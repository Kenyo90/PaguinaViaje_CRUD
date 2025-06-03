from typing import Optional
from pydantic import BaseModel, EmailStr

class RegistrarSchema(BaseModel):
    name: str
    last_name: str
    email: EmailStr
    password: str
    role: Optional[str] = None

class LoginShema(BaseModel):
    email: EmailStr
    password: str

class UserSchema(BaseModel):
    id: int
    name: str
    last_name: str
    email: str
    role: str
    created_at: str
    updated_at: str