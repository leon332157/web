import flask
import json
import platform
app = flask.Flask(__name__)


@app.route('/')
def hello():
    money = json.load(open('money.json', mode='r'))
    print(money)
    return flask.render_template_string(open('index.html', mode='r').read(), money=money)


@app.route('/static/<path:path>')
def send_static_file(path):
    return flask.send_file(path)


@app.route('/save/<num>')
def save_num(num):
    try:
        with open('money.json', mode='w+') as f:
            json.dump(str(num), f)
    except Exception as e:
        print(e)
        return str(e)
    else:
        print('Saved num {}'.format(num))
        return 'successful'



if platform.system() == 'Darwin':
    app.run(debug=True, host='0.0.0.0')  # ,port=80)
else:
    app.run(host='0.0.0.0', port=80)
