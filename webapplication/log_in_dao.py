from sql_connect import get_sql_connect


def log_in(connection, loginD):
    cursor = connection.cursor()
    email = "'" + loginD['email'] + "'"
    password = "'" + loginD['password'] + "'"

    query = 'select * from dbweb.register where email = ' + email + ' and password = ' + password

    cursor.execute(query)
    results = cursor.fetchall()
    if cursor.rowcount == 1:
        username = results[0][1]
        return {"login_status": "success", "username": username}

    query = 'select * from dbweb.register where email = ' + email
    cursor.execute(query)
    cursor.fetchall()
    if cursor.rowcount == 1:
        return {"login_status": "fpassword", "username": ''}

    else:
        return {"login_status": "failed", "username": ''}



if __name__ == '__main__':
    connection = get_sql_connect()