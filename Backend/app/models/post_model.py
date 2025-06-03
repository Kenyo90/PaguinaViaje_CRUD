from db import db
from sqlalchemy import Boolean, Column, ForeignKey, Integer,String,Text,DateTime,func

class PostModel(db.Model):
    __tablename__ = 'posts'
    id = Column(Integer, primary_key=True)
    title = Column(String(150), nullable=False)
    contenido = Column(Text)
    categorias_id=Column(Integer, ForeignKey('categorias.id'))
    imagen= Column(String(250))
    estado = Column(Boolean, default=True)
    user_id=Column(Integer, ForeignKey('users.id'))
    created_at = Column(DateTime, default=func.now())
    updated_at = Column(DateTime, default=func.now(), onupdate=func.now())