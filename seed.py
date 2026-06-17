from werkzeug.security import generate_password_hash
from models import Admin
from extensions import db

def seed_admin():

    existing_admin = Admin.query.filter_by(
        email="admin@gmail.com"
    ).first()

    if not existing_admin:

        admin = Admin(
            email="admin@gmail.com",
            password_hash=generate_password_hash("admin123")
        )

        db.session.add(admin)
        db.session.commit()

        print("Admin Created")

    else:
        print("Admin Already Exists")