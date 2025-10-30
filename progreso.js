let progreso = {
    asignaturasCursadas: [],
    creditosCursados: 0
};

// Cargar progreso guardado
function cargarProgreso() {
    const guardado = localStorage.getItem('progresoMecatronica');
    if (guardado) {
        progreso = JSON.parse(guardado);
        generarMalla();
        alert('✅ Progreso cargado correctamente');
    } else {
        alert('ℹ️ No se encontró progreso guardado anteriormente');
    }
}

// Guardar progreso
function guardarProgreso() {
    localStorage.setItem('progresoMecatronica', JSON.stringify(progreso));
    alert('💾 Progreso guardado correctamente');
}

// Reiniciar progreso
function reiniciarProgreso() {
    if (confirm('¿Estás seguro de que quieres reiniciar todo el progreso? Se perderán todos los datos guardados.')) {
        progreso = { asignaturasCursadas: [], creditosCursados: 0 };
        localStorage.removeItem('progresoMecatronica');
        generarMalla();
        alert('🔄 Progreso reiniciado');
    }
}

// Marcar/desmarcar asignatura
function marcarAsignatura(codigo) {
    const estado = obtenerEstadoAsignatura(codigo);
    
    // Solo permitir marcar/desmarcar si está disponible o ya cursada
    if (estado === 'bloqueada') {
        alert('❌ Esta materia está bloqueada. Debes cursar sus prerrequisitos primero.');
        return;
    }
    
    const index = progreso.asignaturasCursadas.indexOf(codigo);
    
    if (index === -1) {
        // Agregar a cursadas
        progreso.asignaturasCursadas.push(codigo);
        // Sumar créditos
        const asignatura = encontrarAsignatura(codigo);
        progreso.creditosCursados += asignatura.creditos;
    } else {
        // Quitar de cursadas
        progreso.asignaturasCursadas.splice(index, 1);
        // Restar créditos
        const asignatura = encontrarAsignatura(codigo);
        progreso.creditosCursados -= asignatura.creditos;
    }
    
    generarMalla();
}

// Determinar estado de una asignatura
function obtenerEstadoAsignatura(codigo) {
    if (progreso.asignaturasCursadas.includes(codigo)) {
        return 'cursada';
    }
    
    const asignatura = encontrarAsignatura(codigo);
    if (asignatura.prerrequisitos.length === 0) {
        return 'disponible';
    }
    
    // Verificar si todos los prerrequisitos están cursados
    const prerrequisitosCumplidos = asignatura.prerrequisitos.every(prerreq => 
        progreso.asignaturasCursadas.includes(prerreq)
    );
    
    return prerrequisitosCumplidos ? 'disponible' : 'bloqueada';
}

// Encontrar asignatura por código
function encontrarAsignatura(codigo) {
    for (const trimestre of mallaData.trimestres) {
        for (const asig of trimestre.asignaturas) {
            if (asig.codigo === codigo) {
                return asig;
            }
        }
    }
    return null;
}

// Actualizar barra de progreso
function actualizarProgreso() {
    const porcentaje = (progreso.creditosCursados / mallaData.creditosTotales) * 100;
    const barra = document.getElementById('barraProgreso');
    barra.style.width = porcentaje + '%';
    barra.textContent = Math.round(porcentaje) + '%';
    
    document.getElementById('creditosCursados').textContent = progreso.creditosCursados;
    document.getElementById('asignaturasCompletadas').textContent = progreso.asignaturasCursadas.length;
}

// Inicializar cuando se carga la página
document.addEventListener('DOMContentLoaded', function() {
    cargarProgreso();
    generarMalla();
});
