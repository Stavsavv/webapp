from sql_connect import get_sql_connect

def new_register(connection, register):
    cursor = connection.cursor()
    email = "'" + register['email'] + "'"
    query = 'select 1 from dbweb.register where email = ' + email + 'limit 1'
    cursor.execute(query)
    cursor.fetchall()
    if cursor.rowcount == 1:
        return "failed"

    query = 'INSERT INTO dbweb.register ' \
            '(username, email, password)' \
            'VALUES (%s, %s, %s)'

    data = (register['username'], register['email'], register['password'])
    cursor.execute(query, data)
    connection.commit()

    return "success"


if __name__ == '__main__':
    connection = get_sql_connect()
