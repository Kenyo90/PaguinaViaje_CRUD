from flask_restful import Resource
from flask import request
from app.models.post_model import PostModel
from app.schemas.post_schemas import (
    CrearPostSchema, 
    PostSchema
    )
import uuid
import app.utils.cloudinary_config
from db import db
import cloudinary.uploader
from pydantic import ValidationError

class PostResource(Resource):
    def get(self):
    
        try:
           
            post = PostModel.query.filter(
                PostModel.estado==True,
            )
       
            response_data = []
            for posts in post:
                response_data.append(
                    PostSchema(
                        id=posts.id,
                        title=posts.title,
                        contenido=posts.contenido,
                        categorias_id=posts.categorias_id,
                        estado=posts.estado,
                        imagen=cloudinary.utils.cloudinary_url(posts.imagen)[0],
                        created_at=str(posts.created_at),
                        updated_at=str(posts.updated_at),
                        user_id=posts.user_id, 
                    ).model_dump()
                )
    
            return response_data, 200

        except Exception as e:
            print(e)
            return {
                'message': 'Unexpected error',
            }, 500


    def post(self):
        try:
            validar_data = CrearPostSchema(
                title=request.form.get('title'),
                contenido=request.form.get('contenido'),
                categorias_id=request.form.get('categorias_id'),
                user_id=request.form.get('user_id'),
            )

            image = request.files.get('imagen')

            if not image.content_type.startswith('image/'):
                raise Exception('Invalida image format')
            
            file_size = image.read()
            image.seek(0)
            kb_size = len(file_size) / 1024
            mb_size = kb_size / 1024

            if mb_size > 2:
                raise Exception('Image size is too big')

            filename = image.filename.split('.')[0]
            public_id = f'{uuid.uuid4()}-{filename}'

            cloudinary.uploader.upload(
                file=image.stream,
                public_id=public_id
            )

            post = PostModel(
                title= validar_data.title,
                contenido= validar_data.contenido,
                imagen= public_id,
                user_id=validar_data.user_id,
            )
            db.session.add(post)
            db.session.commit()

            response_data = PostSchema(
                id = post.id,
                title = post.title,
                contenido = post.contenido,
                categorias_id=post.categorias_id,
                imagen= post.imagen,
                estado =post.estado,
                user_id=post.user_id,
                created_at = str(post.created_at),
                updated_at = str(post.updated_at), 
            )
            return response_data.model_dump(), 200
        except ValidationError as e:
            print("error 1-----",e)
            return {
                'mensaje': e.errors()
            }, 400
        except Exception as e:
            db.session.rollback()
            print("error 2----",e)
            return {
                'mensaje': 'Unexpected error 2',
            }, 500
    
class PostManageResource(Resource):
    def get(self, post_id):
        try:
            post = PostModel.query.get(post_id)

            # if post:
            #     estado=True
            # else:
            #     raise Exception("Post not found")


            if not post:
                raise Exception("Post not found")
            
            response_data = PostSchema(
                id=post.id,
                title=post.title,
                contenido=post.contenido,
                categorias_id=post.categorias_id,
                estado=post.estado,
                imagen=cloudinary.utils.cloudinary_url(post.imagen)[0],
                created_at=str(post.created_at),
                updated_at=str(post.updated_at),
                user_id=post.user_id, 
            )
            return response_data.model_dump(),200
            
        except Exception as e:
            print("error...",e)
            return {
                'message': "error",
            },500

    def put(self, post_id):
        try:
            post= PostModel.query.get(post_id)

            if not post:
                raise Exception("Product not found")
            
            data=request.form #[('str:key':'str:value')]
            validated_data=CrearPostSchema(**data)

            image = request.files.get("imagen")

            if image is not None:
                if not image.content_type.startswith('image/'):
                    raise Exception('Invalida image format')
            
                file_size = image.read()
                image.seek(0)
                kb_size = len(file_size) / 1024
                mb_size = kb_size / 1024

                if mb_size > 2:
                    raise Exception('Image size is too big')
            
                filename = image.filename.split('.')[0]
                public_id = f'{uuid.uuid4()}-{filename}'

                cloudinary.uploader.upload(
                    file=image.stream,
                    public_id=public_id,
                )
                cloudinary.uploader.destroy(post.imagen)

                post.imagen= post_id

            post.title= validated_data.title
            post.contenido= validated_data.contenido
            post.categorias_id = validated_data.categorias_id
            post.user_id = validated_data.user_id

            db.session.commit()

            response_data = PostSchema(
                id=post.id,
                title=post.title,
                contenido=post.contenido,
                imagen=cloudinary.utils.cloudinary_url(post.imagen)[0],
                user_id=post.user_id,
                estado=post.estado,
                created_at=str(post.created_at),
                updated_at=str(post.updated_at),
                categorias_id=post.categorias_id,
            )
            return response_data.model_dump(),200
        
        except ValidationError as e:
            print("error....", e)
            return {
                'message': e.errors()
            }, 400
        except Exception as e:
            print("error....2", e)
            db.session.rollback()
            return {
                'message': 'Unexpected error',
            }, 500


    def delete(self, post_id):
            try:
                post = PostModel.query.get(post_id)

                if not post:
                    raise Exception("Product not found")
                
                post.estado =False
                
                db.session.commit()

                return {
                    "message":"Product delete successfully"
                },200

            except Exception as e:
                print("errorr...",e)
                db.session.rollback()
                return {
                    'message': "Unexpected error",
                },500