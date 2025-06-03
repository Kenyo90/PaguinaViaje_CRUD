from db import db
from sqlalchemy import  Column, DateTime, ForeignKey, Integer, String, Text, func

class ArchivoModel(db.Model):
    __tablename__ = 'archivos'
    id = Column(Integer, primary_key=True)
    url = Column(Text)
    post_id=Column(Integer, ForeignKey('posts.id'))
    tipo = Column(String(150))
    created_at = Column(DateTime, default=func.now())
  