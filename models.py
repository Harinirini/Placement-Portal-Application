from extensions import db

class Student(db.Model):

    id = db.Column(
        db.Integer,
        primary_key=True
    )

    name = db.Column(
        db.String(100),
        nullable=False
    )

    email = db.Column(
        db.String(100),
        unique=True,
        nullable=False
    )

    password_hash = db.Column(
        db.String(255),
        nullable=False
    )

    roll_number = db.Column(
        db.String(50)
    )

    branch = db.Column(
        db.String(50)
    )

    cgpa = db.Column(
        db.Float
    )

    graduation_year = db.Column(
        db.Integer
    )

    resume_url = db.Column(
        db.String(255)
    )

    is_active = db.Column(
        db.Boolean,
        default=True
    )

    is_blacklisted = db.Column(
        db.Boolean,
        default=False
    )
class Company(db.Model):

    id = db.Column(
        db.Integer,
        primary_key=True
    )

    name = db.Column(
        db.String(100)
    )

    email = db.Column(
        db.String(100),
        unique=True
    )

    password_hash = db.Column(
        db.String(255)
    )

    hr_contact = db.Column(
        db.String(100)
    )

    website = db.Column(
        db.String(255)
    )

    industry = db.Column(
        db.String(100)
    )

    description = db.Column(
        db.Text
    )

    approval_status = db.Column(
        db.String(20),
        default="pending"
    )

    is_active = db.Column(
        db.Boolean,
        default=True
    )
class Admin(db.Model):

    id = db.Column(
        db.Integer,
        primary_key=True
    )

    email = db.Column(
        db.String(100),
        unique=True
    )

    password_hash = db.Column(
        db.String(255)
    )