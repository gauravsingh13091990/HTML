from flask import Flask,render_template,request,redirect, url_for
from flask_sqlalchemy import SQLAlchemy
from datetime import datetime

app = Flask(__name__)
app.config['SQLALCHEMY_DATABASE_URI'] ='sqlite:///blog.db'
db = SQLAlchemy(app)

class Like(db.Model):
	__tablename__='like'
	username = db.Column(db.String(255))
	title= db.Column(db.String(255),primary_key=True)
	date_posted = db.Column(db.DateTime)
class Log(db.Model):
	__tablename__='users'
	username = db.Column(db.String(255))
	title= db.Column(db.String(255),primary_key=True)
	date_posted = db.Column(db.DateTime)

@app.route('/')
def index():

    return render_template('log.html')
@app.route('/', methods=['POST'])
def addpost():
    user = request.form['title']
    # subtitle = request.form['subtitle']
    # author = request.form['author']
    content = request.form['content']

    post = Blogpost(title=title,date_posted=datetime.now(),  content=content)

    db.session.add(post)
    db.session.commit()
    posts = Blogpost.query.order_by(Blogpost.date_posted.desc()).all()

    return render_template('about.html',posts=post)


if __name__ == '__main__':
    app.run(debug=True)