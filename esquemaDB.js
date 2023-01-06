Equipos
 - _id ("ID del equipo")
 - nombre ("nombre del equipo")
 - descripcion ("descripción del equipo")
 - usuarios ("array de IDs de usuarios que pertenecen al equipo")

Usuarios
 - _id ("ID del usuario")
 - nombre ("nombre del usuario")
 - email ("dirección de correo del usuario")
 - password ("contraseña cifrada del usuario")

Proyectos
 - _id ("ID del proyecto")
 - nombre ("nombre del proyecto")
 - descripcion ("descripción del proyecto")
 - equipo ("ID del equipo al que pertenece el proyecto")
 - repositorio ("URL del repo en GitHub o GitLab")
 - notas ("array con notas del proyecto")
 - memoria_tecnica ("URL del archivo con la memoria técnica del proyecto")

Tareas
 - _id ("ID de la tarea")
 - nombre ("nombre de la tarea")
 - descripcion ("descripción de la tarea")
 - proyecto ("ID del proyecto al que pertenece la tarea")
 - fecha_maxima ("fecha máxima de entrega de la tarea")
 - horas_estimadas ("número de horas estimadas para completar la tarea")
 - estado ("estado actual de la tarea")

Asignaciones
 - _id ("ID de la asignación")
 - usuario ("ID del usuario asignado a la tarea")
 - tarea ("ID de la tarea asignada al usuario")
 - horas_trabajadas ("número de horas trabajadas por el usuario en esta tarea")

Commits
 - _id ("ID del commit")
 - usuario ("ID del usuario que ha realizado el commit")
 - tarea ("ID de la tarea relacionada con el commit")
 - fecha ("fecha en la que se ha realizado el commit")
 - hash ("hash del commit realizado") // <-- se muestra en consola con "git log -1" despues de realizar el commit