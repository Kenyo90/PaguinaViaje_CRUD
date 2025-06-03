from db import db
from sqlalchemy import Boolean, Column, DateTime, ForeignKey, Integer, String, Text, func

class NotificacionModel(db.Model):
    __tablename__ = 'notificaciones'
    id = Column(Integer, primary_key=True)
    user_id=Column(Integer, ForeignKey('users.id'))
    mensaje = Column(Text)
    tipo = Column(String(150))
    created_at = Column(DateTime, default=func.now())
    read_status = Column(Boolean)