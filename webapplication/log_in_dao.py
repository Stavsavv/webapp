from sql_connect import get_sql_connect


def log_in(connection, loginD):
    cursor = connection.cursor()
    email = "'" + loginD['email'] + "'"
    password = "'" + loginD['password'] + "'"

    query = 'select * from dbweb.register where email = ' + email + ' and password = ' + password

    cursor.execute(query)
    cursor.fetchall()
    if cursor.rowcount == 1:
        return "success"

    query = 'select * from dbweb.register where email = ' + email
    cursor.execute(query)
    cursor.fetchall()
    if cursor.rowcount == 1:
        return "fpassword"
    else:
        return "failed"


if __name__ == '__main__':
    connection = get_sql_connect()