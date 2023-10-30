El servidor cuenta con operaciones CRUD para la tabla cuentabancaria y para la tabla usarios y operaciones Read para la tabla cuentausuario, todas de la base de datos bancoargentina.

Al realizar un POST a cuentabancaria también se debe proporcionar el id del usuario al que se la quiere vincular, porque conjuntamente se realiza el POST a la tabla cuentausuario que funciona como tabla intermedia entre las otras dos, vinculando una o mas cuentas a uno o mas usuarios.

Front muestra las tablas, pudiendo agregar, editar o borrar, usuarios y cuentas bancarias. Al agregar una cuenta bancaria se agega tambien la cuenta usuario
