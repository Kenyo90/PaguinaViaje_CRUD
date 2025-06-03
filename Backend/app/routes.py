from flask_restful import Api
from app import app
from app.resources.auth_resources import LoginResource, RegistrarResource
from app.resources.categoria_resources import CategoryResource
from app.resources.post_resources import PostManageResource, PostResource



api = Api(app, prefix='/api')

api.add_resource(RegistrarResource, '/auth/register')
api.add_resource(LoginResource,'/auth/login')

api.add_resource(CategoryResource,'/auth/categoria')

api.add_resource(PostResource,'/post')
api.add_resource(PostManageResource,'/post/<int:post_id>')
