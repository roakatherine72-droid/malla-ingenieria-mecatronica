// INTEC trimester system: Nov-Jan, Feb-Apr, May-Jul, Aug-Oct
const TRIMESTER_PERIODS = {
    1: "Noviembre-Enero",
    2: "Febrero-Abril", 
    3: "Mayo-Julio",
    4: "Agosto-Octubre"
};

// Grade point values according to INTEC regulation
const GRADE_POINTS = {
    "A+": 4.0,
    "A": 4.0,
    "B+": 3.5,
    "B": 3.0,
    "C+": 2.5,
    "C": 2.0,
    "D": 1.0,
    "F": 0.0
};

// Subject data from the PDFs
const subjectsData = [
    // Trimestre 1
    { code: "AHC109", name: "REDACCIÓN", credits: 4, trimester: 1, prereq: [], coreq: [], creditReq: 0, cyclic: false },
    { code: "AH0102", name: "ORIENTACION ACADEMICA E INSTITUCIONAL", credits: 0, trimester: 1, prereq: [], coreq: [], creditReq: 0, cyclic: false },
    { code: "CBA1X3", name: "VIDA EN EL MEDIO AMBIENTE (ELECTIVAS)", credits: 2, trimester: 1, prereq: [], coreq: [], creditReq: 0, cyclic: false },
    { code: "CBM101", name: "ALGEBRA Y GEOMETRIA ANALITICA", credits: 5, trimester: 1, prereq: [], coreq: [], creditReq: 0, cyclic: false },
    { code: "CSH112", name: "CIUDADANIA Y ETICA", credits: 2, trimester: 1, prereq: [], coreq: [], creditReq: 0, cyclic: false },
    { code: "CSS102", name: "SER HUMANO Y SOCIEDAD: TEMAS SOCIALES CONTEMPORÁNEOS", credits: 2, trimester: 1, prereq: [], coreq: [], creditReq: 0, cyclic: false },
    { code: "EAA1X1", name: "ELECTIVAS DE AREAS ACADEMICAS I", credits: 2, trimester: 1, prereq: [], coreq: [], creditReq: 0, cyclic: false },
    { code: "EAA1X2", name: "ELECTIVAS DE AREAS ACADEMICAS II", credits: 2, trimester: 1, prereq: [], coreq: [], creditReq: 0, cyclic: false },
    { code: "IMC101", name: "SEMINARIO DE INGENIERIA MECATRONICA", credits: 0, trimester: 1, prereq: [], coreq: [], creditReq: 0, cyclic: true, cyclicOffer: "Impar", cyclicRange: "T1-T3" },
    
    // Trimestre 2
    { code: "SH1103", name: "INGLES 01 (BASICO I)", credits: 0, trimester: 2, prereq: [], coreq: [], creditReq: 0, cyclic: false },
    { code: "AHC110", name: "ARGUMENTACION LINGÜÍSTICA", credits: 4, trimester: 2, prereq: ["AHC109"], coreq: [], creditReq: 0, cyclic: false },
    { code: "CBM102", name: "CALCULO DIFERENCIAL", credits: 5, trimester: 2, prereq: ["CBM101"], coreq: [], creditReq: 0, cyclic: false },
    { code: "EAA1X3", name: "ELECTIVAS DE AREAS ACADEMICAS III", credits: 2, trimester: 2, prereq: [], coreq: [], creditReq: 0, cyclic: false },
    { code: "EAA1X4", name: "ELECTIVAS DE AREAS ACADEMICAS IV", credits: 2, trimester: 2, prereq: [], coreq: [], creditReq: 0, cyclic: false },
    { code: "ING102", name: "INTRODUCCION A LA PROGRAMACION", credits: 2, trimester: 2, prereq: ["CBM101"], coreq: [], creditReq: 0, cyclic: false },
    { code: "ING102L", name: "LABORATORIO DE INTRODUCCION A LA PROGRAMACION", credits: 0, trimester: 2, prereq: ["CBM101"], coreq: ["ING102"], creditReq: 0, cyclic: false },
    { code: "ING277", name: "GRAFICOS EN INGENIERIA", credits: 4, trimester: 2, prereq: [], coreq: [], creditReq: 0, cyclic: false },
    { code: "ING236L", name: "LABORATORIO DE GRAFICOS EN INGENIERIA", credits: 1, trimester: 2, prereq: [], coreq: ["ING277"], creditReq: 0, cyclic: false },
    { code: "SH1104", name: "INGLES 02 (BASICO II)", credits: 0, trimester: 2, prereq: ["SH1103"], coreq: [], creditReq: 0, cyclic: false },
    
    // Trimestre 3
    { code: "CBF210", name: "FISICA MECANICA I", credits: 4, trimester: 3, prereq: [], coreq: ["CBM201"], creditReq: 0, cyclic: false },
    { code: "CBF210L", name: "LABORATORIO DE FISICA MECANICA I", credits: 1, trimester: 3, prereq: [], coreq: ["CBF210"], creditReq: 0, cyclic: false },
    { code: "CBM201", name: "CALCULO INTEGRAL", credits: 5, trimester: 3, prereq: ["CBM102"], coreq: [], creditReq: 0, cyclic: false },
    { code: "IMC102", name: "PROGRAMA HANDS ON 1", credits: 0, trimester: 3, prereq: ["IMC101"], coreq: [], creditReq: 0, cyclic: true, cyclicOffer: "Impar", cyclicRange: "T1-T3" },
    { code: "INM201", name: "DIBUJO MECANICO 1", credits: 4, trimester: 3, prereq: ["ING277", "ING236L"], coreq: [], creditReq: 0, cyclic: false },
    { code: "INS213", name: "PROGRAMACION Y DISEÑO DE ALGORITMOS", credits: 4, trimester: 3, prereq: ["ING102", "ING102L"], coreq: [], creditReq: 0, cyclic: false },
    { code: "INS213L", name: "LABORATORIO DE PROGRAMACION Y DISEÑO DE ALGORITMOS", credits: 1, trimester: 3, prereq: ["ING102", "ING102L"], coreq: ["INS213"], creditReq: 0, cyclic: false },
    
    // Trimestre 4
    { code: "AHQ101", name: "QUERIACER CIENTIFICO", credits: 4, trimester: 4, prereq: [], coreq: [], creditReq: 0, cyclic: false },
    { code: "CBF211", name: "FISICA MECANICA II", credits: 4, trimester: 4, prereq: ["CBM201", "CBF210"], coreq: [], creditReq: 0, cyclic: false },
    { code: "CBF211L", name: "LABORATORIO DE FISICA MECANICA II", credits: 1, trimester: 4, prereq: ["CBM201", "CBF210"], coreq: ["CBF211"], creditReq: 0, cyclic: false },
    { code: "CBM202", name: "CALCULO VECTORIAL", credits: 5, trimester: 4, prereq: ["CBM201"], coreq: [], creditReq: 0, cyclic: false },
    { code: "CBQ207", name: "QUIMICA I", credits: 4, trimester: 4, prereq: ["CBM102"], coreq: [], creditReq: 0, cyclic: false },
    { code: "CBQ207L", name: "LABORATORIO DE QUIMICA I", credits: 1, trimester: 4, prereq: ["CBM102"], coreq: ["CBQ207"], creditReq: 0, cyclic: false },
    { code: "IMC1X1", name: "SEMINARIO ELECTIVO 1", credits: 0, trimester: 4, prereq: ["IMC101"], coreq: [], creditReq: 0, cyclic: true, cyclicOffer: "Par", cyclicRange: "T2-T4" },
    { code: "SH106", name: "INGLES 04 (INTERMEDIO III)", credits: 0, trimester: 4, prereq: ["SH105"], coreq: [], creditReq: 0, cyclic: false },
    
    // Trimestre 5
    { code: "CBF212", name: "FISICA ELECTRICA Y MAGNETICA", credits: 4, trimester: 5, prereq: ["CBF211", "CBF211L"], coreq: [], creditReq: 0, cyclic: false },
    { code: "CBF212L", name: "LABORATORIO DE FISICA ELECTRICA Y MAGNETICA", credits: 1, trimester: 5, prereq: ["CBF211", "CBF211L"], coreq: ["CBF212"], creditReq: 0, cyclic: false },
    { code: "CBM208", name: "ALGEBRA LINEAL", credits: 5, trimester: 5, prereq: ["CBM202"], coreq: [], creditReq: 0, cyclic: false },
    { code: "IMC103", name: "PROGRAMA HANDS ON 2", credits: 0, trimester: 5, prereq: ["IMC102"], coreq: [], creditReq: 0, cyclic: true, cyclicOffer: "Impar", cyclicRange: "T1-T3" },
    { code: "IMC210", name: "CONSERJERIA DE INGENIERIA MECATRONICA I", credits: 0, trimester: 5, prereq: [], coreq: [], creditReq: 35, cyclic: true, cyclicOffer: "Impar", cyclicRange: "T1-T3" },
    { code: "ING216", name: "ESTATICA", credits: 4, trimester: 5, prereq: ["CBF211", "CBF211L"], coreq: ["ING216L"], creditReq: 0, cyclic: false },
    { code: "ING216L", name: "LABORATORIO DE ESTATICA", credits: 1, trimester: 5, prereq: ["CBF211", "CBF211L"], coreq: ["ING216"], creditReq: 0, cyclic: false },
    { code: "ING229", name: "INTRODUCCION A LA CIENCIA DE MATERIALES", credits: 4, trimester: 5, prereq: ["CBM201", "CBQ207"], coreq: [], creditReq: 0, cyclic: false },
    { code: "ING229L", name: "LABORATORIO DE INTRODUCCION A LA CIENCIA DE MATERIALES", credits: 1, trimester: 5, prereq: ["CBM201", "CBQ207"], coreq: ["ING229"], creditReq: 0, cyclic: false },
    { code: "SH1107", name: "INGLES 05 (AVANZADO I)", credits: 0, trimester: 5, prereq: ["SH1106"], coreq: [], creditReq: 0, cyclic: false },
    
    // Trimestre 6
    { code: "CBM203", name: "ECUACIONES DIFERENCIALES", credits: 5, trimester: 6, prereq: ["CBM208"], coreq: [], creditReq: 0, cyclic: false },
    { code: "CSH113", name: "PENSAMIENTO CREATIVO", credits: 2, trimester: 6, prereq: [], coreq: [], creditReq: 0, cyclic: false },
    { code: "IMC2X1", name: "SEMINARIO ELECTIVO 2", credits: 0, trimester: 6, prereq: ["IMC1X1"], coreq: [], creditReq: 0, cyclic: true, cyclicOffer: "Par", cyclicRange: "T2-T4" },
    { code: "ING212", name: "DINAMICA", credits: 4, trimester: 6, prereq: ["ING216", "ING216L"], coreq: [], creditReq: 0, cyclic: false },
    { code: "ING212L", name: "LABORATORIO DE DINAMICA", credits: 1, trimester: 6, prereq: ["ING216", "ING216L"], coreq: ["ING212"], creditReq: 0, cyclic: false },
    { code: "ING234", name: "MECANICA DE SOLIDOS DEFORMABLES", credits: 4, trimester: 6, prereq: ["ING216", "ING216L"], coreq: [], creditReq: 0, cyclic: false },
    { code: "ING234L", name: "LABORATORIO DE MECANICA DE SOLIDOS DEFORMABLES", credits: 1, trimester: 6, prereq: ["ING216", "ING216L"], coreq: ["ING234"], creditReq: 0, cyclic: false },
    { code: "SH1108", name: "INGLES 06 (AVANZADO II)", credits: 0, trimester: 6, prereq: ["SH1107"], coreq: [], creditReq: 0, cyclic: false },
    
    // Trimestre 7
    { code: "CBM307", name: "ANALISIS NUMERICO", credits: 4, trimester: 7, prereq: ["CBM208"], coreq: [], creditReq: 0, cyclic: false },
    { code: "CBM307L", name: "LABORATORIO DE ANALISIS NUMERICO", credits: 1, trimester: 7, prereq: ["CBM208"], coreq: ["CBM307"], creditReq: 0, cyclic: false },
    { code: "IMC204", name: "PROGRAMA HANDS ON 3", credits: 0, trimester: 7, prereq: ["IMC103"], coreq: [], creditReq: 0, cyclic: true, cyclicOffer: "Impar", cyclicRange: "T1-T3" },
    { code: "INE377", name: "CIRCUITOS I", credits: 4, trimester: 7, prereq: ["CBF212", "CBF212L"], coreq: [], creditReq: 0, cyclic: false },
    { code: "INE377L", name: "LABORATORIO DE CIRCUITOS I", credits: 1, trimester: 7, prereq: ["CBF212", "CBF212L"], coreq: ["INE377"], creditReq: 0, cyclic: false },
    { code: "ING214", name: "ANALISIS DE DATOS EN INGENIERIA", credits: 4, trimester: 7, prereq: ["CBM201"], coreq: [], creditReq: 0, cyclic: false },
    { code: "INM305", name: "MECANISMOS", credits: 4, trimester: 7, prereq: ["ING212", "ING212L"], coreq: [], creditReq: 0, cyclic: true, cyclicOffer: "Impar", cyclicRange: "T1-T3" },
    { code: "INM396", name: "INGENIERIA ASISTIDA (CAE) I", credits: 1, trimester: 7, prereq: [], coreq: [], creditReq: 0, cyclic: true, cyclicOffer: "Impar", cyclicRange: "T1-T3" },
    
    // Trimestre 8
    { code: "CBM311", name: "METODOS MATEMÁTICOS PARA PROYECTO INTEGRADOR", credits: 4, trimester: 8, prereq: ["CBM203"], coreq: [], creditReq: 0, cyclic: false },
    { code: "CSH105", name: "PROYECTO INTEGRADOR DE ESTUDIOS GENERALES", credits: 2, trimester: 8, prereq: [], coreq: [], creditReq: 40, cyclic: false },
    { code: "IMC2X2", name: "SEMINARIO ELECTIVO III", credits: 0, trimester: 8, prereq: ["IMC2X1"], coreq: [], creditReq: 0, cyclic: true, cyclicOffer: "Par", cyclicRange: "T2-T4" },
    { code: "INE378", name: "CIRCUITOS II", credits: 4, trimester: 8, prereq: ["INE377", "INE377L"], coreq: [], creditReq: 0, cyclic: false },
    { code: "INE378L", name: "LABORATORIO DE CIRCUITOS II", credits: 1, trimester: 8, prereq: ["INE377", "INE377L"], coreq: ["INE378"], creditReq: 0, cyclic: false },
    { code: "INM328", name: "MODELADO Y SIMULACION", credits: 3, trimester: 8, prereq: ["INM305", "CBM307", "CBM307L"], coreq: ["CBM311"], creditReq: 0, cyclic: true, cyclicOffer: "Par", cyclicRange: "T2-T4" },
    { code: "ISE2E1", name: "IMPACTO SOCIAL (ELECTIVA)", credits: 4, trimester: 8, prereq: [], coreq: [], creditReq: 0, cyclic: false },
    
    // Trimestre 9
    { code: "IEC301", name: "ELECTRONICA DIGITAL", credits: 4, trimester: 9, prereq: ["INS213", "INS213L", "INE377"], coreq: [], creditReq: 0, cyclic: true, cyclicOffer: "Impar", cyclicRange: "T1-T3" },
    { code: "IEC301L", name: "LABORATORIO ELECTRONICA DIGITAL", credits: 1, trimester: 9, prereq: ["INS213", "INS213L", "INE377"], coreq: ["IEC301"], creditReq: 0, cyclic: true, cyclicOffer: "Impar", cyclicRange: "T1-T3" },
    { code: "IEC302", name: "ELECTRONICA I", credits: 4, trimester: 9, prereq: ["INE378", "INE378L"], coreq: [], creditReq: 0, cyclic: false },
    { code: "IEC302L", name: "LABORATORIO DE ELECTRONICA I", credits: 1, trimester: 9, prereq: ["INE378", "INE378L"], coreq: ["IEC302"], creditReq: 0, cyclic: false },
    { code: "IMC205", name: "PROGRAMA HANDS ON 4", credits: 0, trimester: 9, prereq: ["IMC204"], coreq: [], creditReq: 0, cyclic: true, cyclicOffer: "Impar", cyclicRange: "T1-T3" },
    { code: "IMC346", name: "CONSERIERIA DE INGENIERIA MECATRONICA II", credits: 0, trimester: 9, prereq: ["IMC210"], coreq: [], creditReq: 0, cyclic: false },
    { code: "ING231", name: "EXPERIMENTACION EN INGENIERIA", credits: 3, trimester: 9, prereq: ["ING214", "AHQ101"], coreq: [], creditReq: 0, cyclic: false },
    { code: "INM329", name: "DISEÑO DE ELEMENTOS DE MAQUINAS I", credits: 4, trimester: 9, prereq: ["ING234", "ING234L", "INM305"], coreq: [], creditReq: 0, cyclic: false },
    { code: "INM397", name: "INGENIERIA ASISTIDA (CAE) II", credits: 1, trimester: 9, prereq: [], coreq: ["INM329"], creditReq: 0, cyclic: true, cyclicOffer: "Impar", cyclicRange: "T1-T3" },
    
    // Trimestre 10
    { code: "IEC303", name: "ELECTRÓNICA II", credits: 4, trimester: 10, prereq: ["IEC302", "IEC302L"], coreq: [], creditReq: 0, cyclic: true, cyclicOffer: "Par", cyclicRange: "T2-T4" },
    { code: "IEC303L", name: "LABORATORIO DE ELECTRÓNICA II", credits: 1, trimester: 10, prereq: ["IEC302", "IEC302L"], coreq: ["IEC303"], creditReq: 0, cyclic: true, cyclicOffer: "Par", cyclicRange: "T2-T4" },
    { code: "IEC304", name: "SISTEMAS DIGITALES Y MICROPROCESADORES", credits: 4, trimester: 10, prereq: ["IEC302", "IEC302L", "IEC301", "IEC301L"], coreq: [], creditReq: 0, cyclic: true, cyclicOffer: "Par", cyclicRange: "T2-T4" },
    { code: "IEC304L", name: "LABORATORIO DE SISTEMAS DIGITALES Y MICROPROCESADORES", credits: 1, trimester: 10, prereq: ["IEC302", "IEC302L", "IEC301", "IEC301L"], coreq: ["IEC304"], creditReq: 0, cyclic: true, cyclicOffer: "Par", cyclicRange: "T2-T4" },
    { code: "IMC3X1", name: "SEMINARIO ELECTIVO IV", credits: 0, trimester: 10, prereq: ["IMC2X2"], coreq: [], creditReq: 0, cyclic: true, cyclicOffer: "Par", cyclicRange: "T2-T4" },
    { code: "IN1383", name: "CIENCIA E INGENIERIA DE LOS MATERIALES", credits: 4, trimester: 10, prereq: ["ING229", "ING229L", "ING234", "ING234L"], coreq: [], creditReq: 0, cyclic: false },
    { code: "IN1383L", name: "LABORATORIO DE CIENCIA E INGENIERIA DE LOS MATERIALES", credits: 1, trimester: 10, prereq: ["ING229", "ING229L", "ING234", "ING234L"], coreq: ["IN1383"], creditReq: 0, cyclic: false },
    { code: "INM336", name: "DISEÑO DE ELEMENTOS DE MAQUINAS II", credits: 4, trimester: 10, prereq: ["INM329"], coreq: [], creditReq: 0, cyclic: true, cyclicOffer: "Par", cyclicRange: "T2-T4" },
    
    // Trimestre 11
    { code: "IEC312", name: "DISEÑO DE SISTEMAS DE CONTROL", credits: 4, trimester: 11, prereq: ["INM328", "IEC304", "IEC304L"], coreq: [], creditReq: 0, cyclic: true, cyclicOffer: "Impar", cyclicRange: "T1-T3" },
    { code: "IEC312L", name: "LABORATORIO DE SISTEMAS DE CONTROL", credits: 1, trimester: 11, prereq: ["INM328", "IEC304", "IEC304L"], coreq: ["IEC312"], creditReq: 0, cyclic: true, cyclicOffer: "Impar", cyclicRange: "T1-T3" },
    { code: "IMG328", name: "PROGRAMA HANDS ON 5", credits: 0, trimester: 11, prereq: ["IMC205"], coreq: [], creditReq: 0, cyclic: true, cyclicOffer: "Impar", cyclicRange: "T1-T3" },
    { code: "ING230", name: "INGENERIA ECONOMICA", credits: 4, trimester: 11, prereq: ["CBM202"], coreq: [], creditReq: 0, cyclic: false },
    { code: "INM300", name: "TERMODINAMICA I", credits: 4, trimester: 11, prereq: ["ING212"], coreq: [], creditReq: 0, cyclic: false },
    { code: "INM376", name: "PROCESOS INDUSTRIALES", credits: 4, trimester: 11, prereq: ["IN1383", "IN1383L"], coreq: [], creditReq: 0, cyclic: false },
    { code: "INM376L", name: "LABORATORIO DE PROCESOS INDUSTRIALES", credits: 1, trimester: 11, prereq: ["IN1383", "IN1383L"], coreq: ["INM376"], creditReq: 0, cyclic: false },
    
    // Trimestre 12
    { code: "ELE310", name: "APLICACIÓN DE DISPOSITIVOS ELECTRICOS", credits: 3, trimester: 12, prereq: ["INE378L", "INE378"], coreq: [], creditReq: 180, cyclic: false },
    { code: "ELE310L", name: "LABORATORIO DE APLICACIÓN DE DISPOSITIVOS", credits: 1, trimester: 12, prereq: ["INE378", "INE378L"], coreq: ["ELE310"], creditReq: 0, cyclic: false },
    { code: "IEC315", name: "MACHINE LEARNING", credits: 4, trimester: 12, prereq: ["ING214", "IEC312", "IEC312L"], coreq: [], creditReq: 0, cyclic: true, cyclicOffer: "Par", cyclicRange: "T2-T4" },
    { code: "IEC315L", name: "LABORATORIO MACHINE LEARNING", credits: 1, trimester: 12, prereq: ["ING214", "IEC312", "IEC312L"], coreq: ["IEC315"], creditReq: 0, cyclic: true, cyclicOffer: "Par", cyclicRange: "T2-T4" },
    { code: "IMG343", name: "DISEÑO Y MANUFACTURA ASISTIDA POR COMPUTADORA", credits: 3, trimester: 12, prereq: ["INM376", "INM376L"], coreq: [], creditReq: 0, cyclic: false },
    { code: "IMG343L", name: "LABORATORIO DE DISEÑO Y MANUFACTURA ASISTIDA POR COMPUTADORA", credits: 1, trimester: 12, prereq: ["INM376", "INM376L"], coreq: ["IMG343"], creditReq: 0, cyclic: false },
    
    // Trimestre 13
    { code: "INL354", name: "ELECTRONICA DE POTENCIA", credits: 4, trimester: 13, prereq: ["IEC312", "IEC312L"], coreq: [], creditReq: 0, cyclic: true, cyclicOffer: "Par", cyclicRange: "T2-T4" },
    { code: "INL354L", name: "LABORATORIO DE ELECTRONICA DE POTENCIA", credits: 1, trimester: 13, prereq: ["IEC312", "IEC312L"], coreq: ["INL354"], creditReq: 0, cyclic: true, cyclicOffer: "Par", cyclicRange: "T2-T4" },
    { code: "EEP3X1", name: "ELECTIVAS DE ESTUDIOS PROFESIONALIZANTES I", credits: 0, trimester: 13, prereq: [], coreq: [], creditReq: 0, cyclic: false },
    { code: "IMC330", name: "DISEÑO DE SISTEMAS MECATRONICOS", credits: 4, trimester: 13, prereq: ["IMG343", "IMG343L"], coreq: ["IMC333"], creditReq: 0, cyclic: true, cyclicOffer: "Impar", cyclicRange: "T1-T3" },
    { code: "IMC330L", name: "LABORATORIO DE DISEÑO DE SISTEMAS MECATRONICOS", credits: 1, trimester: 13, prereq: ["IMG343", "IMG343L"], coreq: ["IMC330"], creditReq: 0, cyclic: true, cyclicOffer: "Impar", cyclicRange: "T1-T3" },
    { code: "IMC331", name: "INSTRUMENTACION INDUSTRIAL", credits: 4, trimester: 13, prereq: ["INE377", "INE377L"], coreq: [], creditReq: 180, cyclic: true, cyclicOffer: "Impar", cyclicRange: "T1-T3" },
    { code: "IMC331L", name: "LABORATORIO DE INSTRUMENTACION INDUSTRIAL", credits: 1, trimester: 13, prereq: ["INE377", "INE377L"], coreq: ["IMC331"], creditReq: 180, cyclic: true, cyclicOffer: "Impar", cyclicRange: "T1-T3" },
    { code: "IMC333", name: "DISEÑO Y PROGRAMACION DE CONTROLES", credits: 4, trimester: 13, prereq: ["IEC303", "IEC303L", "IEC315", "IEC315L"], coreq: [], creditReq: 0, cyclic: true, cyclicOffer: "Impar", cyclicRange: "T1-T3" },
    { code: "IMC333L", name: "LABORATORIO DE DISEÑO Y PROGRAMACION DE CONTROLES", credits: 1, trimester: 13, prereq: ["IEC303", "IEC303L", "IEC315", "IEC315L"], coreq: ["IMC333"], creditReq: 0, cyclic: true, cyclicOffer: "Impar", cyclicRange: "T1-T3" },
    { code: "IMC337", name: "PROGRAMA HANDS ON 6", credits: 0, trimester: 13, prereq: ["IMG328"], coreq: [], creditReq: 0, cyclic: true, cyclicOffer: "Impar", cyclicRange: "T1-T3" },
    
    // Trimestre 14
    { code: "EEP3X2", name: "ELECTIVA DE ESTUDIOS PROFESIONALIZANTES II", credits: 0, trimester: 14, prereq: [], coreq: [], creditReq: 0, cyclic: false },
    { code: "IMC319", name: "PROYECTO INGENIERIA MECATRONICA I", credits: 3, trimester: 14, prereq: ["IMC330"], coreq: [], creditReq: 0, cyclic: false },
    { code: "IMC332", name: "CIRCUITOS NEUMATICOS E HIDRAULICOS", credits: 4, trimester: 14, prereq: ["INE377", "INE377L"], coreq: [], creditReq: 180, cyclic: true, cyclicOffer: "Par", cyclicRange: "T2-T4" },
    { code: "IMC332L", name: "LABORATORIO DE CIRCUITOS NEUMATICOS E HIDRAULICOS", credits: 1, trimester: 14, prereq: ["INE377", "INE377L"], coreq: ["IMC332"], creditReq: 180, cyclic: true, cyclicOffer: "Par", cyclicRange: "T2-T4" },
    { code: "IMC334", name: "TOURS INDUSTRIAL", credits: 0, trimester: 14, prereq: [], coreq: [], creditReq: 200, cyclic: true, cyclicOffer: "Par", cyclicRange: "T2-T4" },
    { code: "IMC344", name: "SISTEMA PARA ENSAMBLE AUTOMATIZADO", credits: 3, trimester: 14, prereq: [], coreq: [], creditReq: 180, cyclic: true, cyclicOffer: "Par", cyclicRange: "T2-T4" },
    
    // Trimestre 15
    { code: "EEP3X3", name: "ELECTIVA DE ESTUDIOS PROFESIONALIZANTES III", credits: 0, trimester: 15, prereq: [], coreq: [], creditReq: 0, cyclic: false },
    { code: "IMC309", name: "PROYECTO DE INGENIERIA MECATRONICA II", credits: 3, trimester: 15, prereq: ["IMC319"], coreq: [], creditReq: 0, cyclic: false },
    { code: "IMC335", name: "ROBOTICA INDUSTRIAL", credits: 4, trimester: 15, prereq: ["IMC333", "IMC333L"], coreq: [], creditReq: 0, cyclic: false },
    { code: "IMC335L", name: "LABORATORIO DE ROBOTICA INDUSTRIAL", credits: 1, trimester: 15, prereq: ["IMC333", "IMC333L"], coreq: ["IMC335"], creditReq: 0, cyclic: false },
    { code: "IMC336", name: "CONTROLADORES LOGICOS", credits: 4, trimester: 15, prereq: ["IMC333", "IMC333L"], coreq: [], creditReq: 0, cyclic: false },
    { code: "IMC336L", name: "LABORATORIO DE CONTROLADORES LOGICOS", credits: 1, trimester: 15, prereq: ["IMC333", "IMC333L"], coreq: ["IMC336"], creditReq: 0, cyclic: false },
    { code: "IMC338", name: "PROGRAMA HANDS ON 7", credits: 0, trimester: 15, prereq: ["IMC337"], coreq: [], creditReq: 0, cyclic: true, cyclicOffer: "Impar", cyclicRange: "T1-T3" },
    { code: "IMC345", name: "MANTENIMIENTO CENTRADO EN FIABILIDAD", credits: 3, trimester: 15, prereq: [], coreq: [], creditReq: 180, cyclic: true, cyclicOffer: "Impar", cyclicRange: "T1-T3" }
];

// App state
let currentTrimester = 1;
let userProgress = {};
let startYear = 2023;

// DOM Elements
const trimestersContainer = document.getElementById('trimestersContainer');
const currentTrimesterSelect = document.getElementById('currentTrimester');
const currentPeriodSpan = document.getElementById('currentPeriod');
const currentDateRangeSpan = document.getElementById('currentDateRange');
const subjectModal = document.getElementById('subjectModal');
const modalSubjectTitle = document.getElementById('modalSubjectTitle');
const modalSubjectCode = document.getElementById('modalSubjectCode');
const modalSubjectTrimester = document.getElementById('modalSubjectTrimester');
const subjectCompletedCheckbox = document.getElementById('subjectCompleted');
const subjectGradeSelect = document.getElementById('subjectGrade');
const subjectTrimesterTakenSelect = document.getElementById('subjectTrimesterTaken');
const subjectNotesTextarea = document.getElementById('subjectNotes');
const subjectForm = document.getElementById('subjectForm');
const closeModalBtn = document.getElementById('closeModal');
const cancelModalBtn = document.getElementById('cancelModal');
const resetProgressBtn = document.getElementById('resetProgress');
const exportDataBtn = document.getElementById('exportData');
const importDataBtn = document.getElementById('importData');
const showInstructionsBtn = document.getElementById('showInstructions');
const instructionsModal = document.getElementById('instructionsModal');
const closeInstructionsModal = document.getElementById('closeInstructionsModal');
const closeInstructionsBtn = document.getElementById('closeInstructionsBtn');

// Statistics elements
const completedSubjectsEl = document.getElementById('completedSubjects');
const delayedSubjectsEl = document.getElementById('delayedSubjects');
const totalCreditsEl = document.getElementById('totalCredits');
const gpaEl = document.getElementById('gpa');
const completedProgressEl = document.getElementById('completedProgress');
const delayedProgressEl = document.getElementById('delayedProgress');
const creditsProgressEl = document.getElementById('creditsProgress');
const gpaProgressEl = document.getElementById('gpaProgress');

// Utility functions
function getTrimesterPeriod(trimesterNum) {
    const periodIndex = ((trimesterNum - 1) % 4) + 1;
    return TRIMESTER_PERIODS[periodIndex];
}

function getTrimesterDateRange(trimesterNum, startYear = 2023) {
    const periodIndex = ((trimesterNum - 1) % 4) + 1;
    const yearOffset = Math.floor((trimesterNum - 1) / 4);
    const year = startYear + yearOffset;
    
    switch(periodIndex) {
        case 1: return `Nov ${year} - Ene ${year+1}`;
        case 2: return `Feb ${year+1} - Abr ${year+1}`;
        case 3: return `May ${year+1} - Jul ${year+1}`;
        case 4: return `Ago ${year+1} - Oct ${year+1}`;
        default: return "";
    }
}

function calculateSubjectStatus(subject, currentTrimesterNum) {
    const progress = userProgress[subject.code] || {};
    const isCompleted = progress.completed || false;
    
    if (isCompleted) {
        return 'completed';
    }
    
    // Check if delayed (not completed and its trimester has passed)
    if (currentTrimesterNum > subject.trimester) {
        return 'delayed';
    }
    
    // Check if prerequisites are met for available subjects
    const prerequisitesMet = checkPrerequisites(subject);
    if (prerequisitesMet && currentTrimesterNum >= subject.trimester) {
        return 'available';
    }
    
    // Check if cyclic
    if (subject.cyclic) {
        return 'cyclic';
    }
    
    return 'pending';
}

function checkPrerequisites(subject) {
    if (subject.prereq.length === 0) {
        return true;
    }
    
    return subject.prereq.every(prereqCode => {
        const prereqProgress = userProgress[prereqCode];
        return prereqProgress && prereqProgress.completed;
    });
}

// Initialize the app
function init() {
    loadProgress();
    setupCurrentTrimesterSelector();
    renderTrimesters();
    updateStatistics();
    setupEventListeners();
}

// Load progress from localStorage
function loadProgress() {
    const savedProgress = localStorage.getItem('mecatronicaProgress');
    if (savedProgress) {
        try {
            userProgress = JSON.parse(savedProgress);
        } catch (e) {
            console.error("Error loading progress:", e);
            userProgress = {};
        }
    }
    
    const savedCurrentTrimester = localStorage.getItem('currentTrimester');
    if (savedCurrentTrimester) {
        currentTrimester = parseInt(savedCurrentTrimester);
        currentTrimesterSelect.value = currentTrimester;
        updateCurrentTrimesterInfo();
    }
    
    const savedStartYear = localStorage.getItem('startYear');
    if (savedStartYear) {
        startYear = parseInt(savedStartYear);
    }
}

// Save progress to localStorage
function saveProgress() {
    localStorage.setItem('mecatronicaProgress', JSON.stringify(userProgress));
    localStorage.setItem('currentTrimester', currentTrimester.toString());
    localStorage.setItem('startYear', startYear.toString());
}

// Setup current trimester selector
function setupCurrentTrimesterSelector() {
    // Clear existing options
    currentTrimesterSelect.innerHTML = '';
    
    // Populate trimester options
    for (let i = 1; i <= 15; i++) {
        const option = document.createElement('option');
        option.value = i;
        option.textContent = `Trimestre ${i}`;
        currentTrimesterSelect.appendChild(option);
    }
    
    currentTrimesterSelect.value = currentTrimester;
    updateCurrentTrimesterInfo();
    
    // Clear and populate trimester taken options
    subjectTrimesterTakenSelect.innerHTML = '<option value="">Seleccionar...</option>';
    for (let i = 1; i <= 15; i++) {
        const option = document.createElement('option');
        option.value = i;
        option.textContent = `Trimestre ${i}`;
        subjectTrimesterTakenSelect.appendChild(option);
    }
}

// Update current trimester info display
function updateCurrentTrimesterInfo() {
    currentPeriodSpan.textContent = `(${getTrimesterPeriod(currentTrimester)})`;
    currentDateRangeSpan.textContent = getTrimesterDateRange(currentTrimester, startYear);
}

// Render all trimesters
function renderTrimesters() {
    trimestersContainer.innerHTML = '';
    
    // Group subjects by trimester
    const subjectsByTrimester = {};
    subjectsData.forEach(subject => {
        if (!subjectsByTrimester[subject.trimester]) {
            subjectsByTrimester[subject.trimester] = [];
        }
        subjectsByTrimester[subject.trimester].push(subject);
    });
    
    // Create trimester cards
    for (let trimesterNum = 1; trimesterNum <= 15; trimesterNum++) {
        const trimesterSubjects = subjectsByTrimester[trimesterNum] || [];
        
        const trimesterEl = document.createElement('div');
        trimesterEl.className = 'trimester';
        
        const trimesterHeader = document.createElement('div');
        trimesterHeader.className = 'trimester-header';
        
        const trimesterNumber = document.createElement('div');
        trimesterNumber.className = 'trimester-number';
        trimesterNumber.textContent = trimesterNum;
        
        const trimesterPeriod = document.createElement('div');
        trimesterPeriod.className = 'trimester-period';
        trimesterPeriod.textContent = `${getTrimesterPeriod(trimesterNum)} • ${getTrimesterDateRange(trimesterNum, startYear)}`;
        
        trimesterHeader.appendChild(trimesterNumber);
        trimesterHeader.appendChild(trimesterPeriod);
        
        const subjectsList = document.createElement('div');
        subjectsList.className = 'subjects-list';
        
        trimesterSubjects.forEach(subject => {
            const subjectEl = createSubjectElement(subject);
            subjectsList.appendChild(subjectEl);
        });
        
        trimesterEl.appendChild(trimesterHeader);
        trimesterEl.appendChild(subjectsList);
        
        trimestersContainer.appendChild(trimesterEl);
    }
}

// Create subject element
function createSubjectElement(subject) {
    const subjectEl = document.createElement('div');
    
    // Determine subject status
    const status = calculateSubjectStatus(subject, currentTrimester);
    
    // Set base class and add status class
    subjectEl.className = 'subject';
    subjectEl.classList.add(status);
    
    // Get subject progress
    const progress = userProgress[subject.code] || {};
    const isCompleted = progress.completed || false;
    const grade = progress.grade || '';
    const trimesterTaken = progress.trimesterTaken || null;
    const notes = progress.notes || '';
    
    // Create subject HTML
    const subjectHeader = document.createElement('div');
    subjectHeader.className = 'subject-header';
    
    const subjectCode = document.createElement('div');
    subjectCode.className = 'subject-code';
    subjectCode.textContent = subject.code;
    
    const subjectCredits = document.createElement('div');
    subjectCredits.className = 'subject-credits';
    subjectCredits.textContent = `${subject.credits} cr`;
    
    subjectHeader.appendChild(subjectCode);
    subjectHeader.appendChild(subjectCredits);
    
    const subjectName = document.createElement('div');
    subjectName.className = 'subject-name';
    subjectName.textContent = subject.name;
    
    const subjectDetails = document.createElement('div');
    subjectDetails.className = 'subject-details';
    
    // Add prerequisites if any
    if (subject.prereq && subject.prereq.length > 0) {
        const prereqEl = document.createElement('div');
        prereqEl.className = 'prereq';
        
        // Check which prerequisites are met
        const prereqStatus = subject.prereq.map(prereqCode => {
            const prereqProgress = userProgress[prereqCode];
            const isPrereqMet = prereqProgress && prereqProgress.completed;
            return isPrereqMet ? `<span class="prereq-met">${prereqCode}</span>` : `<span class="prereq-pending">${prereqCode}</span>`;
        }).join(', ');
        
        prereqEl.innerHTML = `<span>Pre: ${prereqStatus}</span>`;
        subjectDetails.appendChild(prereqEl);
    }
    
    // Add corequisites if any
    if (subject.coreq && subject.coreq.length > 0) {
        const coreqEl = document.createElement('div');
        coreqEl.className = 'coreq';
        coreqEl.innerHTML = `<span>Co: ${subject.coreq.join(', ')}</span>`;
        subjectDetails.appendChild(coreqEl);
    }
    
    // Add credit requirement if any
    if (subject.creditReq > 0) {
        const creditReqEl = document.createElement('div');
        creditReqEl.className = 'credit-req';
        creditReqEl.innerHTML = `<span>Req: ${subject.creditReq} cr</span>`;
        subjectDetails.appendChild(creditReqEl);
    }
    
    // Add cyclic info if applicable
    if (subject.cyclic) {
        const cyclicBadge = document.createElement('div');
        cyclicBadge.className = 'cyclic-badge';
        cyclicBadge.textContent = `${subject.cyclicOffer} ${subject.cyclicRange}`;
        subjectEl.appendChild(cyclicBadge);
    }
    
    // Add grade if completed
    if (isCompleted && grade) {
        const gradeEl = document.createElement('div');
        const gradeClass = grade.replace('+', 'plus');
        gradeEl.className = `grade grade-${gradeClass}`;
        gradeEl.textContent = grade;
        subjectDetails.appendChild(gradeEl);
    }
    
    // Add trimester taken if completed
    if (isCompleted && trimesterTaken) {
        const takenEl = document.createElement('div');
        takenEl.className = 'trimester-taken';
        takenEl.innerHTML = `<span>Cursada: Trimestre ${trimesterTaken}</span>`;
        subjectDetails.appendChild(takenEl);
    }
    
    subjectEl.appendChild(subjectHeader);
    subjectEl.appendChild(subjectName);
    subjectEl.appendChild(subjectDetails);
    
    // Add click event to open modal
    subjectEl.addEventListener('click', () => {
        openSubjectModal(subject);
    });
    
    return subjectEl;
}

// Open subject modal
function openSubjectModal(subject) {
    const progress = userProgress[subject.code] || {};
    
    // Set modal title
    modalSubjectTitle.textContent = `${subject.code} - ${subject.name}`;
    
    // Set hidden fields
    modalSubjectCode.value = subject.code;
    modalSubjectTrimester.value = subject.trimester;
    
    // Set form values
    subjectCompletedCheckbox.checked = progress.completed || false;
    subjectGradeSelect.value = progress.grade || '';
    subjectTrimesterTakenSelect.value = progress.trimesterTaken || '';
    subjectNotesTextarea.value = progress.notes || '';
    
    // Update grade select visibility based on completed status
    updateGradeSelectVisibility();
    
    // Show modal
    subjectModal.classList.add('active');
}

// Update grade select visibility
function updateGradeSelectVisibility() {
    const gradeGroup = subjectGradeSelect.closest('.form-group');
    if (subjectCompletedCheckbox.checked) {
        gradeGroup.style.display = 'block';
    } else {
        gradeGroup.style.display = 'none';
    }
}

// Close subject modal
function closeSubjectModal() {
    subjectModal.classList.remove('active');
    subjectForm.reset();
}

// Open instructions modal
function openInstructionsModal() {
    instructionsModal.classList.add('active');
}

// Close instructions modal
function closeInstructionsModal() {
    instructionsModal.classList.remove('active');
}

// Update statistics
function updateStatistics() {
    let completedCount = 0;
    let delayedCount = 0;
    let totalCredits = 0;
    let totalGradePoints = 0;
    let totalGradedCredits = 0;
    let totalSubjects = subjectsData.length;
    
    subjectsData.forEach(subject => {
        const progress = userProgress[subject.code] || {};
        const isCompleted = progress.completed || false;
        
        if (isCompleted) {
            completedCount++;
            totalCredits += subject.credits;
            
            if (progress.grade && GRADE_POINTS[progress.grade] !== undefined) {
                totalGradePoints += GRADE_POINTS[progress.grade] * subject.credits;
                totalGradedCredits += subject.credits;
            }
        } else if (currentTrimester > subject.trimester) {
            delayedCount++;
        }
    });
    
    // Calculate GPA
    const gpa = totalGradedCredits > 0 ? totalGradePoints / totalGradedCredits : 0;
    
    // Update UI
    completedSubjectsEl.textContent = completedCount;
    delayedSubjectsEl.textContent = delayedCount;
    totalCreditsEl.textContent = totalCredits;
    gpaEl.textContent = gpa.toFixed(2);
    
    // Update progress bars
    completedProgressEl.style.width = `${(completedCount / totalSubjects) * 100}%`;
    delayedProgressEl.style.width = `${(delayedCount / totalSubjects) * 100}%`;
    
    // Calculate total possible credits (excluding 0-credit subjects)
    const totalPossibleCredits = subjectsData.reduce((sum, subject) => sum + subject.credits, 0);
    creditsProgressEl.style.width = `${(totalCredits / totalPossibleCredits) * 100}%`;
    
    // GPA progress (0-4 scale, showing as percentage of 4.0)
    const gpaPercentage = Math.min((gpa / 4) * 100, 100);
    gpaProgressEl.style.width = `${gpaPercentage}%`;
}

// Export data as JSON file
function exportData() {
    const data = {
        progress: userProgress,
        currentTrimester,
        startYear,
        exportDate: new Date().toISOString(),
        version: "1.0"
    };
    
    const dataStr = JSON.stringify(data, null, 2);
    const dataUri = 'data:application/json;charset=utf-8,'+ encodeURIComponent(dataStr);
    
    const exportFileDefaultName = `mecatronica-progress-${new Date().toISOString().slice(0,10)}.json`;
    
    const linkElement = document.createElement('a');
    linkElement.setAttribute('href', dataUri);
    linkElement.setAttribute('download', exportFileDefaultName);
    linkElement.click();
}

// Import data from JSON file
function importData() {
    const input = document.createElement('input');
    input.type = 'file';
    input.accept = '.json';
    
    input.onchange = (event) => {
        const file = event.target.files[0];
        if (!file) return;
        
        const reader = new FileReader();
        reader.onload = (e) => {
            try {
                const importedData = JSON.parse(e.target.result);
                
                // Validate imported data structure
                if (!importedData.progress || !importedData.currentTrimester) {
                    throw new Error("Formato de archivo inválido");
                }
                
                if (confirm('¿Estás seguro de que quieres importar estos datos? Esto sobrescribirá tu progreso actual.')) {
                    userProgress = importedData.progress;
                    currentTrimester = importedData.currentTrimester;
                    startYear = importedData.startYear || 2023;
                    
                    saveProgress();
                    currentTrimesterSelect.value = currentTrimester;
                    updateCurrentTrimesterInfo();
                    renderTrimesters();
                    updateStatistics();
                    
                    alert('Datos importados correctamente.');
                }
            } catch (error) {
                alert(`Error al importar datos: ${error.message}`);
            }
        };
        
        reader.readAsText(file);
    };
    
    input.click();
}

// Setup event listeners
function setupEventListeners() {
    // Current trimester change
    currentTrimesterSelect.addEventListener('change', (e) => {
        currentTrimester = parseInt(e.target.value);
        updateCurrentTrimesterInfo();
        renderTrimesters();
        updateStatistics();
        saveProgress();
    });
    
    // Subject completed checkbox change
    subjectCompletedCheckbox.addEventListener('change', updateGradeSelectVisibility);
    
    // Subject form submit
    subjectForm.addEventListener('submit', (e) => {
        e.preventDefault();
        
        const subjectCode = modalSubjectCode.value;
        const trimester = parseInt(modalSubjectTrimester.value);
        const completed = subjectCompletedCheckbox.checked;
        const grade = subjectGradeSelect.value;
        const trimesterTaken = subjectTrimesterTakenSelect.value ? parseInt(subjectTrimesterTakenSelect.value) : null;
        const notes = subjectNotesTextarea.value;
        
        // Update progress
        userProgress[subjectCode] = {
            completed,
            grade,
            trimesterTaken,
            notes,
            lastUpdated: new Date().toISOString()
        };
        
        // Save and update UI
        saveProgress();
        renderTrimesters();
        updateStatistics();
        closeSubjectModal();
    });
    
    // Modal close buttons
    closeModalBtn.addEventListener('click', closeSubjectModal);
    cancelModalBtn.addEventListener('click', closeSubjectModal);
    
    // Click outside modal to close
    subjectModal.addEventListener('click', (e) => {
        if (e.target === subjectModal) {
            closeSubjectModal();
        }
    });
    
    // Instructions modal buttons
    showInstructionsBtn.addEventListener('click', openInstructionsModal);
    closeInstructionsModal.addEventListener('click', closeInstructionsModal);
    closeInstructionsBtn.addEventListener('click', closeInstructionsModal);
    
    // Click outside instructions modal to close
    instructionsModal.addEventListener('click', (e) => {
        if (e.target === instructionsModal) {
            closeInstructionsModal();
        }
    });
    
    // Reset progress button
    resetProgressBtn.addEventListener('click', () => {
        if (confirm('¿Estás seguro de que quieres reiniciar todo tu progreso? Esta acción no se puede deshacer.')) {
            userProgress = {};
            currentTrimester = 1;
            currentTrimesterSelect.value = currentTrimester;
            updateCurrentTrimesterInfo();
            saveProgress();
            renderTrimesters();
            updateStatistics();
        }
    });
    
    // Export data button
    exportDataBtn.addEventListener('click', exportData);
    
    // Import data button
    importDataBtn.addEventListener('click', importData);
}

// Initialize the app when DOM is loaded
document.addEventListener('DOMContentLoaded', init);
