import json


sampleJson = """{
   "company":{
      "employee":{
         "name":"emma",
         "payable":{
            "salary":7000,
            "bonus":800
         }
      }
   }
}"""

data = json.loads(sampleJson)

salary_value = data['company']['employee']['payable']['salary']
print("Salary:", salary_value)

data['company']['employee']['birth_date'] = "1990-01-01"

# Save the dictionary as JSON to a file
with open('output.json', 'w') as json_file:
    json.dump(data, json_file, indent=4)

print("JSON saved to 'output.json'")
