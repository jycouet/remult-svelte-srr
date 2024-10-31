1. When a request comes in /todos:
   1. hook
      1. withRemult
         1. remult1
         2. getUser
         3. initRequest
         4. layout.load
            1. remult1.dataProvider = rest
         5. page.load
            1. repo.find (uses rest)
               1. hook
                  1. withRemult
                     1. remult2
                     2. getUser
                     3. initRequest
                     4. api.withRemult
                        1. remult3
                        2. getUser
                        3. initRequest
                        4. get from db
2. Call to /api/todos
   1. hook
      1. withRemult
         1. remult4
         2. getUser
         3. initRequest
         4. remult1
            1. api.withRemult
               1. remult5
               2. getUser
               3. initRequest
               4. getFromDb
