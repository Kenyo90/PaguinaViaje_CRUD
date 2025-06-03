from db import db
from sqlalchemy import  Column, DateTime,Integer, String, Text, func

class CategoriasModel(db.Model):
    __tablename__ = 'categorias'
    id = Column(Integer, primary_key=True)
    name = Column(String(150))
    created_at = Column(DateTime, default=func.now())
    updated_at = Column(DateTime, default=func.now(), onupdate=func.now())
   