dic = {
    'Name':"Lekha Badarinath",
    'Age':25,
    'Sex': "Female",
    'Company' : "Syncron"
    }

def printDictionary(dic):
    for key,value in dic.items():
        print ("%s : %s" %(key,value))

printDictionary(dic)

dic['Name'] = "John Doe"

printDictionary(dic)
