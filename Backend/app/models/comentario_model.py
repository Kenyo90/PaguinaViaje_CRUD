from db import db
from sqlalchemy import  Column, DateTime, ForeignKey, Integer, Text, func

class ComentarioModel(db.Model):
    __tablename__ = 'comentarios'
    id = Column(Integer, primary_key=True)
    contenido = Column(Text)
    post_id=Column(Integer, ForeignKey('posts.id'))
    user_id=Column(Integer, ForeignKey('users.id'))
    created_at = Column(DateTime, default=func.now())