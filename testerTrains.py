import requests
import json

url = "https://eurostat.angelgzgc.now.sh/train"


def GenerateTrainData( _from, _to, _type, _passengers):
	return {
		'from':_from, 
		'to':_to,
		'type':_type,
		'passengers': str(_passengers)}


tests = [
	GenerateTrainData("MAD", "BCN", "ONE", 5),
	GenerateTrainData("MAD", "VAL", "ONE", 2),
	GenerateTrainData("MAD", "SEV", "TWO", 10)
]


for t in tests:
	print("\n--- Pidiendo ruta: " + t['from'] + "-" + t['to'])
	r = requests.post(url,data=json.dumps(t))
	print(r.text)
