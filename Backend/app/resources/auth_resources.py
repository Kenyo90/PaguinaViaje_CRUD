from pydantic import ValidationError
from app.models.user_model import UserModel
from flask_restful import Resource
from flask import request
from app.schemas.auth_schemas import LoginShema,RegistrarSchema,UserSchema
from db import db
from app.utils.passwords import hash_password, verify_password
import os
from cryptography.fernet import Fernet
from flask_jwt_extended import (create_access_token, create_refresh_token)


class RegistrarResource(Resource):
    def post(self):
        try:
            data = request.get_json()
            validar_data = RegistrarSchema(**data)

            existe_user = UserModel.query.filter_by(email=validar_data.email).first()

            if existe_user:
                return{
                    "mensaje": "usuario existente",
                }, 400
            
            user = UserModel(
                name=validar_data.name,
                last_name=validar_data.last_name,
                email=validar_data.email,
                password=hash_password(validar_data.password),
                role=validar_data.role,
            )
            db.session.add(user)
            db.session.commit()

            response_data = UserSchema(
                id=user.id,
                name=user.name,
                last_name=user.last_name,
                email=user.email,
                role=user.role,
                created_at=str(user.created_at),
                updated_at=str(user.updated_at),
            )
            return response_data.model_dump(), 200

        except ValidationError as e:
            print("error 0...:",e)
            return {
                'mensaje': e.errors()
            }, 400
        except Exception as e:
            print("error 1...:",e)
            db.session.rollback()
            return {
                'mensaje 2': 'Unexpected error',
            }, 500
        
class LoginResource(Resource):
    def post(self):
        try:
            data = request.get_json()
            validated_data = LoginShema(**data)

            existing_user = UserModel.query.filter_by(email=validated_data.email).first()

            if not existing_user:
                return {
                    'message': 'Email or password incorrect',
                }, 401
            
            pwd_valid = verify_password(
                validated_data.password,
                existing_user.password
            )

            if not pwd_valid:
                return {
                    'message': 'Email or password incorrect',
                }, 401
            
            key = os.environ.get('FERNET_SECRET_KEY').encode('utf-8')
            fernet = Fernet(key)
            user_id_bytes = str(existing_user.id).encode('utf-8')
            hashed_user_id = fernet.encrypt(user_id_bytes)

            access_token = create_access_token(
                identity=hashed_user_id.decode('utf-8'),
                additional_claims={
                    'name': existing_user.name,
                    'email': existing_user.email
                }
            )
            refresh_token = create_refresh_token(identity=hashed_user_id.decode('utf-8'))

            return {
                'access_token': access_token,
                'refresh_token': refresh_token
            }, 200
        except Exception as e:
            print(e)
            return {
                'message': 'Unexpected error',
            }, 500