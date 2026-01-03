# Malla Curricular - Ingeniería Mecatrónica INTEC

Una aplicación web para el seguimiento del progreso académico en la carrera de Ingeniería Mecatrónica del Instituto Tecnológico de Santo Domingo (INTEC).

## Características

- **Visualización completa de la malla curricular**: 15 trimestres organizados según el sistema INTEC
- **Seguimiento de progreso**: Marca materias como cursadas y registra calificaciones
- **Detección de materias retrasadas**: Identifica automáticamente las materias cuyo trimestre ideal ya pasó
- **Materias cíclicas**: Resalta las materias que solo se ofrecen en ciertos trimestres
- **Cálculo de GPA**: Calcula el promedio según la escala de calificaciones INTEC
- **Persistencia de datos**: Guarda automáticamente el progreso en el navegador
- **Exportación/Importación**: Respaldar y restaurar tu progreso
- **Interfaz responsive**: Funciona en dispositivos móviles y de escritorio

## Tecnologías Utilizadas

- HTML5
- CSS3 (con variables CSS y diseño responsive)
- JavaScript (ES6+)
- Fonts: Google Fonts (Nunito, Roboto)
- No requiere backend, funciona completamente en el cliente

## Instalación y Uso

1. Clona o descarga este repositorio
2. Abre el archivo `index.html` en tu navegador web
3. ¡Listo! No se requiere instalación adicional

## Cómo Usar

### Configuración Inicial
1. Selecciona tu trimestre actual en el selector superior
2. La aplicación calculará automáticamente las fechas de cada trimestre

### Registrar Progreso
1. Haz clic en cualquier materia para editarla
2. Marca la casilla "Materia Cursada" si ya la aprobaste
3. Selecciona tu calificación (A+, A, B+, B, C+, C, D, F)
4. Indica en qué trimestre la cursaste
5. Opcionalmente, añade notas adicionales

### Visualizar Estado
- **Verde**: Materia cursada
- **Rojo**: Materia retrasada (no cursada y su trimestre ideal ya pasó)
- **Naranja**: Materia cíclica (solo se ofrece en ciertos trimestres)
- **Azul**: Materia disponible (cumple con prerrequisitos)
- **Gris**: Materia pendiente

### Funciones Avanzadas
- **Exportar datos**: Crea una copia de seguridad de tu progreso
- **Importar datos**: Restaura tu progreso desde un archivo
- **Reiniciar progreso**: Comienza desde cero (¡cuidado!)

## Sistema de Calificaciones INTEC

| Calificación | Rango | Puntos |
|--------------|-------|--------|
| A+ | 95-100 | 4.0 |
| A | 90-94 | 4.0 |
| B+ | 85-89 | 3.5 |
| B | 80-84 | 3.0 |
| C+ | 75-79 | 2.5 |
| C | 70-74 | 2.0 |
| D | 65-69 | 1.0 |
| F | 0-64 | 0.0 |

## Estructura de Archivos
