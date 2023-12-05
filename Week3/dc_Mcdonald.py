class Farm:
    def __init__(self, name):
        self.name = name
        self.animals = {}

    def add_animal(self, animal_type, quantity=1):
        animal_type = animal_type.lower()
        if animal_type in self.animals:
            self.animals[animal_type] += quantity
        else:
            self.animals[animal_type] = quantity

    def get_info(self):
        result = "{}'s farm\n\n".format(self.name)
        for animal, quantity in self.animals.items():
            result += "{} : {}\n".format(animal, quantity)
        result += "\n E-I-E-I-0!"
        return result

    def get_short_info(self):
        animal_types = self.get_animal_types()
        animals_str = ", ".join(animal_types)
        return "{}'s farm has {}.".format(self.name, animals_str)

    def get_animal_types(self):
        return list(self.animals.keys())



macdonald = Farm("McDonald")
macdonald.add_animal('cow', 3)
macdonald.add_animal('sheep')
macdonald.add_animal('sheep')
macdonald.add_animal('goat', 1)
print(macdonald.get_info())
print(macdonald.get_short_info())
