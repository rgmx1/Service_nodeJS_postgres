# Service_nodeJS_postgres

Проект веб-сервиса с использованием Nodejs и PostgreSQL, состоящий
из 5 операций: создание пользователя, просмотр созданного пользователя, вывод всех пользователей,
изменение пользователя, удаление пользователя.
Данный проект позволено использовать в целях обучения написанию скриптов нагрузочного
тестирования (НТ) с использованием инструментов НТ.

Сервис запускается по адресу: http://localhost:5000.

## Описание API

Веб-сервис реализует следующие операции:

```
POST   /api/user        - Cоздание пользователя
GET    /api/user        - Вывод всех пользователей которые есть в базе даных
GET    /api/user/{id}   - Вывод конкретного пользователя по id
PUT    /api/user        - Изменение пользователя
DELETE /api/user/{id}   - Удаление пользователя по id
```

### Операция /POST /api/user

 <details><summary>Пример</summary>

```JSON
{
   "name": "Polina",
   "surname": "Alexeivna"
}
```

</details>

### Операция /GET /api/user

 <details><summary>Пример</summary>

URL http://localhost:5000/api/user

Тело запроса отсутствует

</details>

### Операция /GET /api/user/{id}

 <details><summary>Пример</summary>

URL http://localhost:5000/api/user

Тело запроса отсутствует

</details>

### Операция /PUT /api/user

 <details><summary>Пример</summary>

```JSON
{
   "name": "John",
    "surname": "Mactavish",
    "id": 5
}
```

Изменение происходит по id в теле запроса

</details>

### Операция /DELETE /api/user/{id}

 <details><summary>Пример</summary>

URL http://localhost:5000/api/user

Тело запроса отсутствует
