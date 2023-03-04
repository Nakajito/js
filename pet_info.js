function getPetExerciseInfo(type, age) {
    switch (type) {
        case "perro":
            if (age < 1) {
                return  ("Los cachorros necesitan pequeñas y frecuentes sesiones de juego");
            } else if (age > 0 && age < 8 ) {
                return ("Los perros a esta edad necesitan caminatas diarias y sesiones de juego")
            } else {
            return ("Los perros viejos necesitan caminatas más cortas");
            }
            break;
        case "gato":
            if (age < 1) {
                return  ("Los gatitos necesitan frecuentes sesiones de juego");
            } else if (age > 0 && age < 8 ) {
                return ("Los gatos a esta edad necesitan jugar diariamente")
            } else {
                return ("Los gatos viejos necesitan sesiones de juego más cortas");
            }
            break;
        case "ave":
            if (age < 1) {
                return  ("Las aves jóvenes necesitan mucho espacio para volar");
            } else if (age > 0 && age < 8 ) {
                return ("Las aves necesitan jugar diariamente y un lugar para volar")
            } else {
                return ("Las aves mayores necesitan descansar más, pero siguen ocupando un lugar para volar");
            }
            break;
        default:
            return ("Tipo de mascota inválida");
            break;
    }
}

getPetExerciseInfo("perro", 0);
getPetExerciseInfo("perro", 2);
getPetExerciseInfo("perro", 9);

getPetExerciseInfo("gato", 0);
getPetExerciseInfo("gato", 2);
getPetExerciseInfo("gato", 9);

getPetExerciseInfo("ave", 0);
getPetExerciseInfo("ave", 2);
getPetExerciseInfo("ave", 9);

getPetExerciseInfo("rinoceronte", 51);