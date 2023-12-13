#!/usr/bin/env python3

class Family:
    def __init__(self, last_name, members=[]):
        self.last_name = last_name
        self.members = members

    def born(self, **kwargs):
        self.members.append(kwargs)
        print(f"Congratulations! A new child, {kwargs['name']}, \
            was born to the {self.last_name} family.")

    def is_18(self, name):
        for member in self.members:
            if member['name'] == name:
                return member['age'] > 18
        return False

    def family_presentation(self):
        ret = f"Family {self.last_name} Members:\n"
        for member in self.members:
            ret += f"Name: {member['name']}, Age: {member['age']},\
                Gender: {member['gender']}, Is Child: {member['is_child']}\n"
        return ret

    def __repr__(self):
        return self.family_presentation()

    def __str__(self):
        return self.family_presentation()


# Create an instance of the Family class with the provided members
my_family = Family(last_name="Smith", members=[
    {'name': 'Michael', 'age': 35, 'gender': 'Male', 'is_child': False},
    {'name': 'Sarah', 'age': 32, 'gender': 'Female', 'is_child': False}
])

# Call the born method to add a new child
my_family.born(name='John', age=0, gender='Male', is_child=True)

# Call the is_18 method to check if a family member is over 18
print(my_family.is_18(name='Michael'))  # Example for Michael

# Call the family_presentation method to print the family details
print(my_family)


class TheIncredibles(Family):
    def __init__(self, last_name, members=[]):
        super().__init__(last_name, members)

    def use_power(self, name):
        for member in self.members:
            if member['name'] == name:
                if member['age'] > 18:
                    print(f"{member['incredible_name']} can use \
                        the power: {member['power']}")
                else:
                    raise ValueError(f"{member['name']} is not \
                        over 18 years old and cannot use their power.")

    def incredible_presentation(self):
        print("*Here is our powerful family*")
        super().family_presentation()


incredibles_family = TheIncredibles(last_name="Incredibles", members=[
    {'name': 'Michael', 'age': 35, 'gender': 'Male', 'is_child': False,
        'power': 'fly', 'incredible_name': 'MikeFly'},
    {'name': 'Sarah', 'age': 32, 'gender': 'Female', 'is_child': False,
        'power': 'read minds', 'incredible_name': 'SuperWoman'}
])


incredibles_family.incredible_presentation()


incredibles_family.born(name='Baby Jack', age=0, gender='Male', is_child=True,
                        power='Unknown Power', incredible_name='LittleJack')

incredibles_family.incredible_presentation()
