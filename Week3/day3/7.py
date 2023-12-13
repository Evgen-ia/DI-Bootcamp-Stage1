from faker import Faker


fake = Faker()


users = []


def add_fake_user():
    """
    Adds a new dictionary with fake user data to the users list.
    """
    user = {
        'name': fake.name(),
        'address': fake.address(),
        'language_code': fake.language_code(),
    }
    users.append(user)


for _ in range(5):
    add_fake_user()


print(users)
