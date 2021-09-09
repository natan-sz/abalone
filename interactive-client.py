import requests

print("Input the: Sex, Length, Diameter, Height, Whole Weight, Shucked Weight, Viscera Weight, Shell Weight")

sex,length,diameter,height,whole_weight,shucked_weight,viscera_weight,shell_weight = input().split()
properties = [sex,length,diameter,height,whole_weight,shucked_weight,viscera_weight,shell_weight]

data = {"data": ",".join(properties)}

r = requests.post("https://664knkwxhg.execute-api.us-east-1.amazonaws.com/abalone_age/abalone-age", json=data)
print(r.text)
