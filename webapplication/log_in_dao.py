from sql_connect import get_sql_connect


def log_in(connection, loginD):
    cursor = connection.cursor()
    email = "'" + loginD['email'] + "'"
    password = "'" + loginD['password'] + "'"
    print(email)
    print(password)

    query = 'select * from dbweb.register where email = ' + email + ' and password = ' + password

    cursor.execute(query)
    cursor.fetchall()
    if cursor.rowcount == 1:
        return "success"
    else:
        return "failed"


if __name__ == '__main__':
    connection = get_sql_connect()
