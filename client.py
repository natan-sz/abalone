import requests
import json

data = {"data": "3,0.29,0.21,0.06,0.1195,0.056,0.0235,0.03"}
r = requests.post("https://664knkwxhg.execute-api.us-east-1.amazonaws.com/abalone_age/abalone-age", json=data)
print(r.text)
