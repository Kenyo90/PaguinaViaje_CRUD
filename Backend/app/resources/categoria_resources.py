from flask import request
from flask_restful import Resource
from app.schemas.categoria_schemas import (
    CrearCategoriaSchema,
    CategoriaSchema
)
from app.models.categorias_model import CategoriasModel
from db import db
from pydantic import ValidationError
from flask_jwt_extended import jwt_required

class CategoryResource(Resource):
    @jwt_required()
    def get(self):
        try:
            categories = CategoriasModel.query.all()

            response_data = []
            for category in categories:
                response_data.append(
                    CategoriaSchema(
                        id=category.id,
                        name=category.name,
                        created_at=str(category.created_at),
                        updated_at=str(category.updated_at)
                    ).model_dump()
                )

            return response_data, 200
        except Exception as e:
            return {
                'message': 'error',
            }, 500
        
    @jwt_required()
    def post(self):
        try:
            data = request.get_json()
            validated_data = CrearCategoriaSchema(**data)
            category = CategoriasModel(
                name=validated_data.name
            )
            db.session.add(category)
            db.session.commit()

            response_data = CategoriaSchema(
                id=category.id,
                name=category.name,
                created_at=str(category.created_at),
                updated_at=str(category.updated_at)
            )
            return response_data.model_dump(), 200
        except ValidationError as e:
            return {
                'mensaje': e.errors()
            }, 400
        except Exception as e:
            return {
                'mensaje': 'error',
            }, 500