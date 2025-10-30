const mallaData = {
    universidad: "INTEC",
    carrera: "Ingeniería Mecatrónica",
    creditosTotales: 278,
    trimestres: [
        {
            numero: 1,
            asignaturas: [
                { codigo: "AHC109", nombre: "REDACCIÓN", creditos: 4, prerrequisitos: [] },
                { codigo: "AHO102", nombre: "ORIENTACION ACADEMICA E INSTITUCIONAL", creditos: 0, prerrequisitos: [] },
                { codigo: "CBA1X3", nombre: "VIDA EN EL MEDIO AMBIENTE", creditos: 2, prerrequisitos: [] },
                { codigo: "CBM101", nombre: "ALGEBRA Y GEOMETRIA ANALITICA", creditos: 5, prerrequisitos: [] },
                { codigo: "CSH112", nombre: "CIUDADANIA Y ETICA", creditos: 2, prerrequisitos: [] },
                { codigo: "CSS102", nombre: "SER HUMANO Y SOCIEDAD", creditos: 2, prerrequisitos: [] },
                { codigo: "EAA1X1", nombre: "ELECTIVAS DE AREAS ACADEMICAS I", creditos: 2, prerrequisitos: [] },
                { codigo: "EAA1X2", nombre: "ELECTIVAS DE AREAS ACADEMICAS II", creditos: 2, prerrequisitos: [] },
                { codigo: "IMC101", nombre: "SEMINARIO DE INGENIERIA MECATRONICA", creditos: 0, prerrequisitos: [] },
                { codigo: "SH1103", nombre: "INGLES 01 (BASICO I)", creditos: 0, prerrequisitos: [] }
            ]
        },
        {
            numero: 2,
            asignaturas: [
                { codigo: "AHC110", nombre: "ARGUMENTACION LINGÜÍSTICA", creditos: 4, prerrequisitos: [] },
                { codigo: "CBM102", nombre: "CALCULO DIFERENCIAL", creditos: 5, prerrequisitos: ["CBM101"] },
                { codigo: "EAA1X3", nombre: "ELECTIVAS DE AREAS ACADEMICAS III", creditos: 2, prerrequisitos: [] },
                { codigo: "EAA1X4", nombre: "ELECTIVAS DE AREAS ACADEMICAS IV", creditos: 2, prerrequisitos: [] },
                { codigo: "ING102", nombre: "INTRODUCCION A LA PROGRAMACION", creditos: 2, prerrequisitos: [] },
                { codigo: "ING102L", nombre: "LAB. INTRODUCCION A LA PROGRAMACION", creditos: 0, prerrequisitos: [] },
                { codigo: "ING277", nombre: "GRAFICOS EN INGENIERIA", creditos: 4, prerrequisitos: [] }
            ]
        },
        {
            numero: 3,
            asignaturas: [
                { codigo: "ING236L", nombre: "LAB. GRAFICOS EN INGENIERIA (SOLIDWORKS)", creditos: 1, prerrequisitos: ["ING277"] },
                { codigo: "SH1104", nombre: "INGLES 02 (BASICO II)", creditos: 0, prerrequisitos: ["SH1103"] },
                { codigo: "CBF210", nombre: "FISICA MECANICA I", creditos: 4, prerrequisitos: ["CBM102"] },
                { codigo: "CBF210L", nombre: "LAB. FISICA MECANICA I", creditos: 1, prerrequisitos: ["CBF210"] },
                { codigo: "CBM201", nombre: "CALCULO INTEGRAL", creditos: 5, prerrequisitos: ["CBM102"] },
                { codigo: "IMC102", nombre: "PROGRAMA HANDS ON 1", creditos: 0, prerrequisitos: ["IMC101"] },
                { codigo: "INM201", nombre: "DIBUJO MECANICO 1", creditos: 4, prerrequisitos: ["ING277", "ING236L"] },
                { codigo: "INS213", nombre: "PROGRAMACION Y DISEÑO DE ALGORITMOS", creditos: 4, prerrequisitos: ["ING102", "ING102L"] },
                { codigo: "INS213L", nombre: "LAB. PROGRAMACION Y DISEÑO DE ALGORITMOS", creditos: 1, prerrequisitos: ["INS213"] }
            ]
        },
        {
            numero: 4,
            asignaturas: [
                { codigo: "SH1105", nombre: "INGLES 03 (INTERMEDIO I)", creditos: 0, prerrequisitos: ["SH1104"] },
                { codigo: "AHQ101", nombre: "QUEHACER CIENTIFICO", creditos: 4, prerrequisitos: [] },
                { codigo: "CBF211", nombre: "FISICA MECANICA II", creditos: 4, prerrequisitos: ["CBM201", "CBF210", "CBF210L"] },
                { codigo: "CBF211L", nombre: "LAB. FISICA MECANICA II", creditos: 1, prerrequisitos: ["CBF211"] },
                { codigo: "CBM202", nombre: "CALCULO VECTORIAL", creditos: 5, prerrequisitos: ["CBM201"] },
                { codigo: "CBQ207", nombre: "QUIMICA I", creditos: 4, prerrequisitos: ["CBM102"] },
                { codigo: "CBQ207L", nombre: "LAB. QUIMICA I", creditos: 1, prerrequisitos: ["CBQ207"] },
                { codigo: "IMC1X1", nombre: "SEMINARIO ELECTIVO 1", creditos: 0, prerrequisitos: ["IMC101"] },
                { codigo: "SH1106", nombre: "INGLES 04 (INTERMEDIO II)", creditos: 0, prerrequisitos: ["SH1105"] }
            ]
        },
        {
            numero: 5,
            asignaturas: [
                { codigo: "CBF212", nombre: "FISICA ELECTRICA Y MAGNETICA", creditos: 4, prerrequisitos: ["CBF211", "CBF211L", "CBM202"] },
                { codigo: "CBF212L", nombre: "LAB. FISICA ELECTRICA Y MAGNETICA", creditos: 1, prerrequisitos: ["CBF212"] },
                { codigo: "CBM208", nombre: "ALGEBRA LINEAL", creditos: 5, prerrequisitos: ["CBM202"] },
                { codigo: "IMC103", nombre: "PROGRAMA HANDS ON 2", creditos: 0, prerrequisitos: ["IMC102"] },
                { codigo: "IMC210", nombre: "CONSERIERIA DE INGENIERIA MECATRONICA I", creditos: 0, prerrequisitos: [] },
                { codigo: "ING216", nombre: "ESTATICA", creditos: 4, prerrequisitos: ["CBF211", "CBF211L"] },
                { codigo: "ING216L", nombre: "LAB. ESTATICA", creditos: 1, prerrequisitos: ["ING216"] },
                { codigo: "ING229", nombre: "INTRODUCCION A LA CIENCIA DE MATERIALES", creditos: 4, prerrequisitos: ["CBM201", "CBQ207", "CBQ207L"] }
            ]
        },
        {
            numero: 6,
            asignaturas: [
                { codigo: "ING229L", nombre: "LAB. INTRODUCCION A LA CIENCIA DE MATERIALES", creditos: 1, prerrequisitos: ["ING229"] },
                { codigo: "SH1107", nombre: "INGLES 05 (AVANZADO I)", creditos: 0, prerrequisitos: ["SH1106"] },
                { codigo: "CBM203", nombre: "ECUACIONES DIFERENCIALES", creditos: 5, prerrequisitos: ["CBM208"] },
                { codigo: "CSH113", nombre: "PENSAMIENTO CREATIVO", creditos: 2, prerrequisitos: [] },
                { codigo: "IMC2X1", nombre: "SEMINARIO ELECTIVO 2", creditos: 0, prerrequisitos: [] },
                { codigo: "ING212", nombre: "DINAMICA", creditos: 4, prerrequisitos: ["ING216", "ING216L"] },
                { codigo: "ING212L", nombre: "LAB. DINAMICA", creditos: 1, prerrequisitos: ["ING212"] },
                { codigo: "ING234", nombre: "MECANICA DE SOLIDOS DEFORMABLES", creditos: 4, prerrequisitos: ["ING216", "ING216L"] },
                { codigo: "ING234L", nombre: "LAB. MECANICA DE SOLIDOS DEFORMABLES", creditos: 1, prerrequisitos: ["ING234"] }
            ]
        },
        {
            numero: 7,
            asignaturas: [
                { codigo: "SH1108", nombre: "INGLES 06 (AVANZADO II)", creditos: 0, prerrequisitos: ["SH1107"] },
                { codigo: "CBM307", nombre: "ANALISIS NUMERICO", creditos: 4, prerrequisitos: ["CBM208"] },
                { codigo: "CBM307L", nombre: "LAB. ANALISIS NUMERICO", creditos: 1, prerrequisitos: ["CBM307"] },
                { codigo: "IMC204", nombre: "PROGRAMA HANDS ON 3", creditos: 0, prerrequisitos: ["IMC103"] },
                { codigo: "INE377", nombre: "CIRCUITOS I", creditos: 4, prerrequisitos: ["CBF212", "CBF212L"] },
                { codigo: "INE377L", nombre: "LAB. CIRCUITOS I", creditos: 1, prerrequisitos: ["INE377"] },
                { codigo: "ING214", nombre: "ANALISIS DE DATOS EN INGENIERIA", creditos: 4, prerrequisitos: ["CBM201"] },
                { codigo: "INM305", nombre: "MECANISMOS", creditos: 4, prerrequisitos: ["ING212", "ING212L"] },
                { codigo: "INM396", nombre: "INGENIERIA ASISTIDA (CAE) I", creditos: 1, prerrequisitos: [] }
            ]
        },
        {
            numero: 8,
            asignaturas: [
                { codigo: "CBM311", nombre: "METODOS MATEMÁTICOS PARA INGENIEROS", creditos: 4, prerrequisitos: ["INM305", "CBM307", "CBM307L"] },
                { codigo: "CSH105", nombre: "PROYECTO INTEGRADOR DE ESTUDIOS GENERALES", creditos: 2, prerrequisitos: [] },
                { codigo: "IMC2X2", nombre: "SEMINARIO ELECTIVO III", creditos: 0, prerrequisitos: [] },
                { codigo: "INE378", nombre: "CIRCUITOS II", creditos: 4, prerrequisitos: ["INE377", "INE377L"] },
                { codigo: "INE378L", nombre: "LAB. CIRCUITOS II", creditos: 1, prerrequisitos: ["INE378"] },
                { codigo: "INM328", nombre: "MODELADO Y SIMULACION", creditos: 3, prerrequisitos: ["INS213", "INS213L", "INE377"] },
                { codigo: "ISE2E1", nombre: "IMPACTO SOCIAL (ELECTIVA)", creditos: 4, prerrequisitos: [] },
                { codigo: "IEC301", nombre: "ELECTRONICA DIGITAL", creditos: 4, prerrequisitos: ["INS213", "INS213L", "INE377"] },
                { codigo: "IEC301L", nombre: "LAB. ELECTRONICA DIGITAL", creditos: 1, prerrequisitos: ["IEC301"] }
            ]
        },
        {
            numero: 9,
            asignaturas: [
                { codigo: "IEC302", nombre: "ELECTRONICA I", creditos: 4, prerrequisitos: ["INE378", "INE378L"] },
                { codigo: "IEC302L", nombre: "LAB. ELECTRONICA I", creditos: 1, prerrequisitos: ["IEC302"] },
                { codigo: "IMC205", nombre: "PROGRAMA HANDS ON 4", creditos: 0, prerrequisitos: ["IMC204"] },
                { codigo: "IMC346", nombre: "CONSERIERIA DE INGENIERIA MECATRONICA II", creditos: 0, prerrequisitos: ["IMC210"] },
                { codigo: "ING231", nombre: "EXPERIMENTACION EN INGENIERIA", creditos: 3, prerrequisitos: ["ING214", "AHQ101"] },
                { codigo: "INM329", nombre: "DISEÑO DE ELEMENTOS DE MAQUINAS I", creditos: 4, prerrequisitos: ["ING234", "ING234L", "INM305"] },
                { codigo: "INM397", nombre: "INGENIERIA ASISTIDA (CAE) II", creditos: 1, prerrequisitos: [] }
            ]
        },
        {
            numero: 10,
            asignaturas: [
                { codigo: "IEC303", nombre: "ELECTRONICA II", creditos: 4, prerrequisitos: ["IEC302", "IEC302L"] },
                { codigo: "IEC303L", nombre: "LAB. ELECTRONICA II", creditos: 1, prerrequisitos: ["IEC303"] },
                { codigo: "IEC304", nombre: "SISTEMAS DIGITALES Y MICROPROCESADORES", creditos: 4, prerrequisitos: ["IEC302", "IEC302L", "IEC301", "IEC301L"] },
                { codigo: "IEC304L", nombre: "LAB. SISTEMAS DIGITALES Y MICROPROCESADORES", creditos: 1, prerrequisitos: ["IEC304"] },
                { codigo: "IMC3X1", nombre: "SEMINARIO ELECTIVO IV", creditos: 0, prerrequisitos: ["IMC2X2"] },
                { codigo: "INI383", nombre: "CIENCIA E INGENIERIA DE LOS MATERIALES", creditos: 4, prerrequisitos: ["ING229", "ING229L", "ING234", "ING234L"] },
                { codigo: "INI383L", nombre: "LAB. CIENCIA E INGENIERIA DE LOS MATERIALES", creditos: 1, prerrequisitos: ["INI383"] },
                { codigo: "INM336", nombre: "DISEÑO DE ELEMENTOS DE MAQUINAS II", creditos: 4, prerrequisitos: ["INM329"] }
            ]
        },
        {
            numero: 11,
            asignaturas: [
                { codigo: "IEC312", nombre: "DISEÑO DE SISTEMAS DE CONTROL", creditos: 4, prerrequisitos: ["INM328", "IEC304", "IEC304L"] },
                { codigo: "IEC312L", nombre: "LAB. SISTEMAS DE CONTROL", creditos: 1, prerrequisitos: ["IEC312"] },
                { codigo: "IMC328", nombre: "PROGRAMA HANDS ON 5", creditos: 0, prerrequisitos: ["IMC205"] },
                { codigo: "ING230", nombre: "INGENIERIA ECONOMICA", creditos: 4, prerrequisitos: ["CBM202"] },
                { codigo: "INM300", nombre: "TERMODINAMICA I", creditos: 4, prerrequisitos: ["ING212"] },
                { codigo: "INM376", nombre: "PROCESOS INDUSTRIALES I", creditos: 4, prerrequisitos: ["INI383", "INI383L"] }
            ]
        },
        {
            numero: 12,
            asignaturas: [
                { codigo: "INM376L", nombre: "LAB. PROCESOS INDUSTRIALES I", creditos: 1, prerrequisitos: ["INM376"] },
                { codigo: "ELE310", nombre: "APLICACIÓN DE DISPOSITIVOS ELECTRICOS", creditos: 3, prerrequisitos: ["INE378", "INE378L"] },
                { codigo: "ELE310L", nombre: "LAB. APLICACIÓN DE DISPOSITIVOS ELECTRICOS", creditos: 1, prerrequisitos: ["ELE310"] },
                { codigo: "IEC315", nombre: "MACHINE LEARNING", creditos: 4, prerrequisitos: ["ING214", "IEC312", "IEC312L"] },
                { codigo: "IEC315L", nombre: "LAB. MACHINE LEARNING", creditos: 1, prerrequisitos: ["IEC315"] },
                { codigo: "IMC343", nombre: "DISEÑO Y MANUFACTURA ASISTIDA POR COMPUTADORA", creditos: 3, prerrequisitos: ["INM376", "INM376L"] },
                { codigo: "IMC343L", nombre: "LAB. DISEÑO Y MANUFACTURA ASISTIDA POR COMPUTADORA", creditos: 1, prerrequisitos: ["IMC343"] },
                { codigo: "INL354", nombre: "ELECTRONICA DE POTENCIA", creditos: 4, prerrequisitos: ["IEC312", "IEC312L"] }
            ]
        },
        {
            numero: 13,
            asignaturas: [
                { codigo: "INL354L", nombre: "LAB. ELECTRONICA DE POTENCIA", creditos: 1, prerrequisitos: ["INL354"] },
                { codigo: "EEP3X1", nombre: "ELECTIVAS DE ESTUDIOS PROFESIONALIZANTES I", creditos: 0, prerrequisitos: [] },
                { codigo: "IMC330", nombre: "DISEÑO DE SISTEMAS MECATRONICOS", creditos: 4, prerrequisitos: ["IMC343", "IMC343L"] },
                { codigo: "IMC330L", nombre: "LAB. DISEÑO DE SISTEMAS MECATRONICOS", creditos: 1, prerrequisitos: ["IMC330"] },
                { codigo: "IMC331", nombre: "INSTRUMENTACION INDUSTRIAL", creditos: 4, prerrequisitos: ["INE377", "INE377L"] },
                { codigo: "IMC331L", nombre: "LAB. INSTRUMENTACION INDUSTRIAL", creditos: 1, prerrequisitos: ["IMC331"] },
                { codigo: "IMC333", nombre: "DISEÑO Y PROGRAMACION DE CONTROLES", creditos: 4, prerrequisitos: ["IEC303", "IEC303L", "IEC315", "IEC315L"] },
                { codigo: "IMC333L", nombre: "LAB. DISEÑO Y PROGRAMACION DE CONTROLES", creditos: 1, prerrequisitos: ["IMC333"] },
                { codigo: "IMC337", nombre: "PROGRAMA HANDS ON 6", creditos: 0, prerrequisitos: ["IMC328"] }
            ]
        },
        {
            numero: 14,
            asignaturas: [
                { codigo: "EEP3X2", nombre: "ELECTIVA DE ESTUDIOS PROFESIONALIZANTES II", creditos: 0, prerrequisitos: [] },
                { codigo: "IMC319", nombre: "PROYECTO INGENIERIA MECATRONICA I", creditos: 3, prerrequisitos: [] },
                { codigo: "IMC332", nombre: "CIRCUITOS NEUMATICOS E HIDRAULICOS", creditos: 4, prerrequisitos: ["INE377", "INE377L"] },
                { codigo: "IMC332L", nombre: "LAB. CIRCUITOS NEUMATICOS E HIDRAULICOS", creditos: 1, prerrequisitos: ["IMC332"] },
                { codigo: "IMC334", nombre: "TOURS INDUSTRIAL", creditos: 0, prerrequisitos: [] },
                { codigo: "IMC344", nombre: "SISTEMA PARA ENSAMBLE AUTOMATIZADO", creditos: 3, prerrequisitos: [] }
            ]
        },
        {
            numero: 15,
            asignaturas: [
                { codigo: "EEP3X3", nombre: "ELECTIVA DE ESTUDIOS PROFESIONALIZANTES III", creditos: 0, prerrequisitos: [] },
                { codigo: "IMC309", nombre: "PROYECTO DE INGENIERIA MECATRONICA II", creditos: 3, prerrequisitos: ["IMC319"] },
                { codigo: "IMC335", nombre: "ROBOTICA INDUSTRIAL", creditos: 4, prerrequisitos: ["IMC333", "IMC333L"] },
                { codigo: "IMC335L", nombre: "LAB. ROBOTICA INDUSTRIAL", creditos: 1, prerrequisitos: ["IMC335"] },
                { codigo: "IMC336", nombre: "CONTROLADORES LOGICOS PROGRAMABLES", creditos: 4, prerrequisitos: ["IMC333", "IMC333L"] },
                { codigo: "IMC336L", nombre: "LAB. CONTROLADORES LOGICOS PROGRAMABLES", creditos: 1, prerrequisitos: ["IMC336"] },
                { codigo: "IMC338", nombre: "PROGRAMA HANDS ON 7", creditos: 0, prerrequisitos: ["IMC337"] },
                { codigo: "IMC345", nombre: "MANTENIMIENTO CENTRADO EN FIABILIDAD", creditos: 3, prerrequisitos: [] }
            ]
        }
    ]
};

// Función para generar toda la malla en HTML
function generarMalla() {
    const container = document.getElementById('mallaContainer');
    let html = '';

    mallaData.trimestres.forEach(trimestre => {
        html += `<div class="trimestre">
            <h2>Trimestre ${trimestre.numero}</h2>`;
        
        trimestre.asignaturas.forEach(asig => {
            const estado = obtenerEstadoAsignatura(asig.codigo);
            html += `
                <div class="asignatura ${estado}" 
                     onclick="marcarAsignatura('${asig.codigo}')"
                     data-codigo="${asig.codigo}">
                    <span class="codigo"><strong>${asig.codigo}</strong></span> - ${asig.nombre}
                    <span class="creditos">${asig.creditos} cr</span>
                    ${asig.prerrequisitos.length > 0 ? 
                      `<br><small>Prerrequisitos: ${asig.prerrequisitos.join(', ')}</small>` : ''}
                </div>`;
        });
        
        html += '</div>';
    });

    container.innerHTML = html;
    actualizarProgreso();
}
