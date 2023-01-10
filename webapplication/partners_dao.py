from sql_connect import get_sql_connect


def get_all_partners(connection, email):
    cursor = connection.cursor()

    query = "SELECT * FROM partners where emailID=%s;"
    cursor.execute(query, (email,))

    response = []

    for (id, name, email, phone, phone2, bank, IBAN, bank2, IBAN2, bank3, IBAN3, emailID) in cursor:
        response.append(
            {
                'id': id,
                'name': name,
                'email': email,
                'phone': phone,
                'phone2': phone2,
                'bank': bank,
                'IBAN': IBAN,
                'bank2': bank2,
                'IBAN2': IBAN2,
                'bank3': bank3,
                'IBAN3': IBAN3,
                'emailID': emailID

            }
        )

    return response


def insert_new_partner(connection, partners):
    cursor = connection.cursor()
    query = 'INSERT INTO dbweb.partners ' \
            '(name, email, phone, phone2, bank, IBAN, bank2, IBAN2, bank3, IBAN3, emailID)' \
            'VALUES (%s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s)'

    data = (partners['name'], partners['email'], partners['phone'], partners['phone2'], partners['bank'],
            partners['IBAN'], partners['bank2'], partners['IBAN2'], partners['bank3'], partners['IBAN3'], partners['emailID'])

    cursor.execute(query, data)
    connection.commit()

    return "success"


def edit_partner(connection, partners):
    cursor = connection.cursor()
    query = 'UPDATE dbweb.partners SET name=%s, email=%s, phone=%s, phone2=%s, bank=%s, IBAN=%s, bank2=%s, ' \
            'IBAN2=%s, bank3=%s, IBAN3=%s  WHERE id=%s '

    data = (partners['name'], partners['email'], partners['phone'], partners['phone2'], partners['bank'],
            partners['IBAN'], partners['bank2'], partners['IBAN2'], partners['bank3'], partners['IBAN3'],
             partners['id'])

    cursor.execute(query, data)
    connection.commit()
    return "success"


def delete_partner(connection, id):
    cursor = connection.cursor()
    id = "'" + id + "'"
    query = "DELETE FROM dbweb.partners where id=" + id
    cursor.execute(query)
    connection.commit()


if __name__ == '__main__':
    connection = get_sql_connect()
    print(delete_partner(connection, '"%s"'))
