from db import db
from sqlalchemy import Column, Enum as SQLAlchemyEnum, Integer,String,Text,DateTime,func
from enum import Enum

class RolStatus(Enum):
    ADMIN='ADMIN'
    GUEST ='GUEST'

class UserModel(db.Model):
    __tablename__ = 'users'
    id = Column(Integer, primary_key=True)
    name = Column(String(100))
    last_name = Column(String(100))
    email = Column(String(150), unique=True)
    password = Column(Text)
    role= Column(SQLAlchemyEnum(RolStatus), default=RolStatus.GUEST)
    created_at = Column(DateTime, default=func.now())
    updated_at = Column(DateTime, default=func.now(), onupdate=func.now())
