from flask import Flask
from db import db
from flask_migrate import Migrate
from config import DevelopmentConfig
from flask_jwt_extended import JWTManager
from flask_cors import CORS
# ,origins="http://localhost:5174"
app = Flask(__name__)
cors = CORS(app)
app.config.from_object(DevelopmentConfig)
db.init_app(app)
migrate = Migrate(app, db)
jwt = JWTManager(app)

from app.routes import api

# from app.models import (
#     archivos_model,
#     categorias_model,
#     comentario_model,
#     notificacion_model,
#     post_model,
#     user_model,
# ) 

