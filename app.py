from flask_jwt_extended import (
    JWTManager,
    create_access_token,
    jwt_required,
    get_jwt_identity
)
from werkzeug.security import generate_password_hash, check_password_hash
from flask import Flask, request, jsonify
from flask_cors import CORS
from config import Config
from extensions import db
from seed import seed_admin

app = Flask(__name__)
app.config.from_object(Config)
CORS(app)

db.init_app(app)
jwt = JWTManager(app)
from models import Student, Company, Admin

@app.route("/")
def home():
    return "Placement Portal Backend Running"
with app.app_context():
    db.create_all()
    seed_admin()
from werkzeug.security import generate_password_hash

@app.route("/register/student", methods=["POST"])
def register_student():

    data = request.get_json()

    existing_student = Student.query.filter_by(
        email=data["email"]
    ).first()

    if existing_student:
        return jsonify({
            "message": "Email already exists"
        }), 400

    student = Student(
        name=data["name"],
        email=data["email"],
        password_hash=generate_password_hash(
            data["password"]
        ),
        roll_number=data["roll_number"],
        branch=data["branch"],
        cgpa=data["cgpa"],
        graduation_year=data["graduation_year"]
    )

    db.session.add(student)
    db.session.commit()
    token = create_access_token(
    identity={
        "id": student.id,
        "role": "student"
    }
)

    return jsonify({
    "message": "Login Successful",
    "token": token
}), 200
print("LOGIN ROUTE LOADED")
@app.route("/login/student", methods=["POST"])
def login_student():

    data = request.get_json()

    student = Student.query.filter_by(
        email=data["email"]
    ).first()

    if not student:
        return jsonify({
            "message": "Student not found"
        }), 404

    if not check_password_hash(
        student.password_hash,
        data["password"]
    ):
        return jsonify({
            "message": "Invalid password"
        }), 401
    token = create_access_token(
    identity=str(student.id)
)

    return jsonify({
    "message": "Login Successful",
    "token": token
}), 200
@app.route("/register/company", methods=["POST"])
def register_company():

    data = request.get_json()

    existing_company = Company.query.filter_by(
        email=data["email"]
    ).first()

    if existing_company:
        return jsonify({
            "message": "Company already exists"
        }), 400

    company = Company(
        name=data["name"],
        email=data["email"],
        password_hash=generate_password_hash(
            data["password"]
        ),
        hr_contact=data["hr_contact"],
        website=data["website"],
        industry=data["industry"],
        description=data["description"],
        approval_status="pending"
    )

    db.session.add(company)
    db.session.commit()

    return jsonify({
        "message": "Company Registration Submitted",
        "status": "pending"
    }), 201
@app.route("/login/company", methods=["POST"])
def login_company():

    data = request.get_json()

    company = Company.query.filter_by(
        email=data["email"]
    ).first()

    if not company:
        return jsonify({
            "message": "Company not found"
        }), 404

    if not check_password_hash(
        company.password_hash,
        data["password"]
    ):
        return jsonify({
            "message": "Invalid password"
        }), 401

    return jsonify({
        "message": "Company Login Successful",
        "company_id": company.id,
        "approval_status": company.approval_status
    }), 200
@app.route("/login/admin", methods=["POST"])
def login_admin():

    data = request.get_json()

    admin = Admin.query.filter_by(
        email=data["email"]
    ).first()

    if not admin:
        return jsonify({
            "message": "Admin not found"
        }), 404

    if not check_password_hash(
        admin.password_hash,
        data["password"]
    ):
        return jsonify({
            "message": "Invalid password"
        }), 401

    return jsonify({
        "message": "Admin Login Successful",
        "admin_id": admin.id
    }), 200
@app.route("/student/dashboard", methods=["GET"])
@jwt_required()
def student_dashboard():

    current_user = get_jwt_identity()

    return jsonify({
        "message": "Welcome Student",
        "user": current_user
    }), 200
@app.route("/admin/pending-companies", methods=["GET"])
def pending_companies():

    companies = Company.query.filter_by(
        approval_status="pending"
    ).all()

    result = []

    for company in companies:
        result.append({
            "id": company.id,
            "name": company.name,
            "email": company.email,
            "industry": company.industry
        })

    return jsonify(result), 200
@app.route("/admin/approve-company/<int:company_id>", methods=["PUT"])
def approve_company(company_id):

    company = Company.query.get(company_id)

    if not company:
        return jsonify({
            "message": "Company not found"
        }), 404

    company.approval_status = "approved"

    db.session.commit()

    return jsonify({
        "message": "Company Approved"
    }), 200
@app.route("/admin/reject-company/<int:company_id>", methods=["PUT"])
def reject_company(company_id):

    company = Company.query.get(company_id)

    if not company:
        return jsonify({
            "message": "Company not found"
        }), 404

    company.approval_status = "rejected"

    db.session.commit()

    return jsonify({
        "message": "Company Rejected"
    }), 200
if __name__ == "__main__":
    app.run(debug=True)
