from sql_connect import get_sql_connect




def log_in(connection, register):
    cursor = connection.cursor()


    query = 'select * dbweb.register where email = %s  and password = %s '

    data = (register['username'], register['email'], register['password'])
    cursor.execute(query, data)
    connection.commit()

    if():

     return "success"



if __name__ == '__main__':
    connection = get_sql_connect()