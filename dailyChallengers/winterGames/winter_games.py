winners = [
  ["USA", "CAN", "NOR"],
  ["NOR", "USA", "CAN"],
  ["USA", "NOR", "SWE"]
]

def count_medals(winners):
    countries = set()
    gold_medals = list()
    silver_medals = list()
    bronze_medals = list()
    for gold, silver, bronze in winners:
        gold_medals.append(gold)
        silver_medals.append(silver)
        bronze_medals.append(bronze)
        countries.update([gold, silver, bronze])
    total_medals = 0
    result = list()
    
    for country in countries:
        result.append(country)
        result.append(gold_medals.count(country))
        result.append(silver_medals.count(country))
        result.append(bronze_medals.count(country))
        result.append(sum([gold_medals.count(country),silver_medals.count(country), bronze_medals.count(country)]))
        #result.append('\n')
    
    
    #csv_string = ",".join(str(i) for i in result)
    #csv_string = "\\n".join(",".join(map(str, result[i:i + n])) for i in range(0, len(result), n))

    csv_string = 'Country,Gold,Silver,Bronze,Total'
    for i in result:
        if str(i).isalpha():
            csv_string+= '\\n'
        
        csv_string+= f'{i}'
        
        

    
    return csv_string

print(count_medals(winners))