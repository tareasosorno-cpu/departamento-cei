const areas = [
  {id:"jefatura",title:"Jefatura",short:"Dirección y planeación",description:"Dirige y proyecta la planeación del departamento, además de gestionar los medios necesarios para sus actividades.",location:"Oficina 4301"},
  {id:"academicos",title:"Procesos académicos",short:"Gestión docente y horarios",description:"Gestiona al personal docente, genera los horarios y brinda asistencia académica."},
  {id:"tutorias",title:"Procesos de tutorías",short:"Acompañamiento estudiantil",description:"Acompaña al estudiante durante toda su trayectoria dentro del programa académico."},
  {id:"vinculacion",title:"Vinculación",short:"Relación con instituciones",description:"Establece contactos y convenios con instituciones y empresas que benefician a los programas académicos del departamento."},
  {id:"titulacion",title:"Comisión de titulación",short:"Seguimiento a egresados",description:"Da seguimiento a los procesos de titulación de quienes egresaron de los programas académicos del departamento."},
  {id:"laboratorios",title:"Laboratorios",short:"Orientación y servicio",description:"Orienta y brinda servicio a docentes y estudiantes respecto de los equipos disponibles en cada laboratorio."},
  {id:"asistencia",title:"Asistencia departamental",short:"Seguimiento de solicitudes",description:"Da seguimiento a las solicitudes y procesos de docentes y estudiantes que deben atender las distintas coordinaciones."}
];

const personas = [
  {id:"maria-elena",nombre:"María Elena González Bañales",cargo:"Jefa del departamento",area:"jefatura",foto:"assets/photos/maria-elena.jpg",correo:"elena.gonzalez@univa.mx",extension:"1456",resumen:"Licenciada en Sistemas Computacionales, Maestra en Ingeniería de Software y Maestra en Educación. Cuenta con más de 20 años de experiencia en gestión educativa universitaria y actualmente dirige el Departamento de Ciencias Exactas e Ingenierías y el CIDEC.",semblanza:`Licenciada en Sistemas Computacionales, Maestra en Ingeniería de Software y Maestra en Educación por la Universidad del Valle de Atemajac. Se ha desempeñado en esta casa de estudios como profesora en materias de Ingeniería de Software, Metodología de la Investigación y Tutoría Institucional para los programas de Ingeniería en Sistemas y Tecnologías de la Información e Ingeniero Arquitecto.

Actualmente es Jefa del Departamento de Ciencias Exactas e Ingenierías y del Centro de Investigación y Desarrollo Científico en el Plantel Guadalajara del Sistema UNIVA, con más de 20 años de experiencia en gestión educativa universitaria.

Mujer profesionista y emprendedora, esposa y madre de dos hijas, apasionada por el desarrollo humano, el crecimiento espiritual, el cuidado del medio ambiente y la salud integral. Su vocación es el servicio a los demás.`},
  {id:"carmen-cobian",nombre:"Carmen Claudia Cobián López",cargo:"Coordinación de Procesos Académicos",area:"academicos",foto:"assets/photos/carmen-cobian.jpg",programas:"Programa escolarizado de Ingeniería Arquitecto",correo:"carmen.cobian@univa.mx",extension:"1462"},
  {id:"luis-osorno",nombre:"Luis Alfonso Osorno Montes",cargo:"Coordinación de Procesos Académicos",area:"academicos",foto:"assets/photos/luis-osorno.jpg",programas:"Programas escolarizados de Ingeniería Industrial, Ingeniería Mecatrónica e Ingeniería en Sistemas y Tecnologías de Información; programas Impulso de Ingeniería Industrial e Ingeniería en Sistemas Computacionales",correo:"luis.osorno@univa.mx",extension:"1455",resumen:"Ingeniero Industrial e Ingeniero en Sistemas Computacionales, Maestro en Ciencias de la Familia y Doctor en Educación. Cuenta con 29 años de experiencia docente y formación especializada en manufactura.",semblanza:`El Dr. Luis Alfonso Osorno Montes es Ingeniero Industrial e Ingeniero en Sistemas Computacionales, Maestro en Ciencias de la Familia y Doctor en Educación. Está por finalizar sus estudios de la Licenciatura en Derecho y se encuentra en lista de espera para ingresar a las maestrías en Derecho Procesal y de Amparo e Ingeniería Mecatrónica. Cuenta con 29 años de experiencia docente y formación en manufactura y automatización. Destacan sus estudios en planeación de la producción, Lean Six Sigma Black Belt, PLC Siemens con TIA Portal, operación de máquinas CNC con controles FANUC y CENTROID, y corte láser industrial.`},
  {id:"sandra-estrada",nombre:"Sandra Guadalupe Estrada Ochoa",cargo:"Coordinación de Procesos de Tutorías",area:"tutorias",foto:"assets/photos/sandra-estrada.jpg",programas:"Programas escolarizados de Ingeniería Industrial, Ingeniería Mecatrónica e Ingeniería en Sistemas y Tecnologías de Información; programas Impulso de Ingeniería Industrial e Ingeniería en Sistemas Computacionales",correo:"sandy.estrada@univa.mx",extension:"1831"},
  {id:"leonardo-flores",nombre:"Leonardo Flores Cosío",cargo:"Coordinación de Procesos de Tutorías",area:"tutorias",foto:"assets/photos/leonardo-flores.jpg",programas:"Programa escolarizado de Ingeniería Arquitecto",correo:"leonardo.flores@univa.mx",extension:"1870"},
  {id:"daniela-alcocer",nombre:"Daniela Patricia Alcocer Pérez",cargo:"Coordinación de Vinculación",area:"vinculacion",foto:"assets/photos/daniela-alcocer.jpg",correo:"daniela.alcocer@univa.mx",extension:"2003",resumen:"Licenciada en Mercadotecnia y Maestra en Dirección y Desarrollo de la Innovación, con más de 10 años de experiencia educativa, científica, tecnológica y de vinculación. Impulsa alianzas estratégicas entre la academia, el sector productivo y organismos externos.",semblanza:`Licenciada en Mercadotecnia y Maestra en Dirección y Desarrollo de la Innovación, con más de 10 años de experiencia en los ámbitos educativo, científico, tecnológico y de vinculación. Actualmente se desempeña como Coordinadora de Vinculación en la Universidad del Valle de Atemajac (UNIVA), donde impulsa alianzas estratégicas entre la academia, el sector productivo y organismos externos.

Cuenta con experiencia en el desarrollo de prácticas profesionales, viajes y visitas académicas, evaluación de proyectos y acompañamiento de estudiantes, promoviendo su desarrollo profesional y la conexión con el entorno. Su trayectoria también incluye la coordinación de iniciativas de divulgación científica y tecnológica, así como la participación en proyectos orientados a fortalecer la innovación y la formación integral de estudiantes.

Se distingue por su capacidad para articular instituciones, empresas, proyectos y personas, generando oportunidades de aprendizaje y colaboración con impacto académico y profesional.`},
  {id:"ana-ramos",nombre:"Ana Caro Ramos",cargo:"Comisión de Titulación",area:"titulacion",foto:"assets/photos/ana-ramos.jpg"},
  {id:"alejandra-munoz",nombre:"Alejandra Muñoz Hernández",cargo:"Asistente del Departamento",area:"asistencia"},
  {id:"luis-cortes",nombre:"Luis Gabriel Cortés Huerta",cargo:"Encargado de laboratorios del CIDEC",area:"laboratorios",foto:"assets/photos/luis-cortes.jpg",programas:"Ingeniería Arquitecto, Ingeniería Industrial e Ingeniería Mecatrónica"},
  {id:"jorge-lopez",nombre:"Jorge Antonio López Avilés",cargo:"Encargado de laboratorios del CIDEC",area:"laboratorios",foto:"assets/photos/jorge-lopez.jpg",programas:"Ingeniería Arquitecto, Ingeniería Industrial e Ingeniería Mecatrónica"},
  {id:"alfredo-gonzalez",nombre:"Alfredo González Mercado",cargo:"Laboratorio de Cómputo",area:"laboratorios",foto:"assets/photos/alfredo-gonzalez.jpg"},
  {id:"angel-perez",nombre:"Ángel Jaziel Pérez Zamora",cargo:"Auxiliar de Laboratorio de Cómputo",area:"laboratorios",foto:"assets/photos/angel-perez.jpg"}
];

const app = document.querySelector("#app");
const iniciales = nombre => nombre.split(" ").filter(Boolean).slice(0,2).map(p => p[0]).join("");
const formatearSemblanza = texto => texto.split("\n\n").map(parrafo => `<p>${parrafo}</p>`).join("");

function tarjetaPersona(persona) {
  return `<a class="person-card" href="#persona/${persona.id}">
    <span class="person-card-inner">
      <span class="card-face card-front">
        <span class="avatar">${persona.foto?`<img src="${persona.foto}" alt="Fotografía de ${persona.nombre}">`:iniciales(persona.nombre)}</span>
        <span><b>${persona.nombre}</b><small>${persona.cargo}</small>${persona.programas?`<small class="programas">${persona.programas}</small>`:""}</span><i>→</i>
      </span>
      <span class="card-face card-back">
        <b>Semblanza</b>
        <span>${persona.resumen || "La semblanza de este integrante se incorporará próximamente."}</span>
        <small>Ver ficha completa →</small>
      </span>
    </span>
  </a>`;
}

function inicio() {
  app.innerHTML = `
    <section class="hero" id="inicio">
      <div class="hero-copy"><p class="eyebrow">Campus Guadalajara</p><h1>Ciencias Exactas<br><em>e Ingenierías</em></h1><p>Conoce las áreas, servicios y personas que integran nuestro departamento.</p><a class="primary" href="#areas">Conocer el departamento <span>→</span></a></div>
      <div class="hero-graphic" aria-hidden="true"><span>CEI</span><div class="orbit one"></div><div class="orbit two"></div><div class="dot a"></div><div class="dot b"></div><div class="dot c"></div></div>
    </section>
    <section class="section" id="areas">
      <div class="section-head"><div><p class="eyebrow blue">Nuestro departamento</p><h2>Áreas de atención</h2></div><p>Cada área contribuye a la formación y acompañamiento de nuestra comunidad universitaria.</p></div>
      <div class="area-grid">${areas.map(area=>`<a class="area-card" href="#area/${area.id}"><h3>${area.title}</h3><p>${area.short}</p><b>Conocer el área <span>→</span></b></a>`).join("")}</div>
    </section>
    <section class="directory" id="directorio">
      <div class="section-head light"><div><p class="eyebrow">Nuestro equipo</p><h2>Directorio</h2></div><p>Pasa el cursor sobre una tarjeta para leer el resumen y haz clic para consultar la semblanza completa.</p></div>
      <div class="people-grid">${personas.map(tarjetaPersona).join("")}</div>
    </section>`;
}

function verArea(id) {
  const area = areas.find(a=>a.id===id);
  if (!area) return inicio();
  const miembros = personas.filter(p=>p.area===id);
  app.innerHTML = `<section class="detail-page"><a class="back" href="#areas">← Todas las áreas</a><div class="detail-title"><p class="eyebrow blue">Área departamental</p><h1>${area.title}</h1><p>${area.description}</p>${area.location?`<span class="location">⌖ ${area.location}</span>`:""}</div><div class="detail-rule"></div><h2>Integrantes del área</h2>${miembros.length?`<div class="people-grid dark-text">${miembros.map(tarjetaPersona).join("")}</div>`:`<div class="placeholder">Información de integrantes pendiente de actualización.</div>`}</section>`;
}

function verPersona(id) {
  const p = personas.find(persona=>persona.id===id);
  if (!p) return inicio();
  const area=areas.find(a=>a.id===p.area);
  const biografia = p.semblanza ? formatearSemblanza(p.semblanza) : "<p>La formación académica, experiencia profesional y semblanza de este integrante se incorporarán en la siguiente actualización del sitio.</p>";
  app.innerHTML=`<section class="profile-page"><a class="back light-back" href="#area/${p.area}">← Volver al área</a><div class="profile-card"><span class="profile-avatar">${p.foto?`<img src="${p.foto}" alt="Fotografía de ${p.nombre}">`:iniciales(p.nombre)}</span><div><p class="eyebrow blue">Semblanza</p><h1>${p.nombre}</h1><h2>${p.cargo}</h2>${p.programas?`<p class="program-detail"><b>Programas que atiende:</b> ${p.programas}.</p>`:""}<div class="bio">${biografia}</div><dl><dt>Área</dt><dd>${area?.title||""}</dd>${p.correo?`<dt>Correo</dt><dd><a href="mailto:${p.correo}">${p.correo}</a></dd>`:""}${p.extension?`<dt>Extensión</dt><dd>${p.extension}</dd>`:""}</dl></div></div></section>`;
}

function navegar() {
  const ruta=(location.hash||"#inicio").slice(1).split("/");
  if(ruta[0]==="area") verArea(ruta[1]);
  else if(ruta[0]==="persona") verPersona(ruta[1]);
  else { inicio(); if(ruta[0]!=="inicio") requestAnimationFrame(()=>document.getElementById(ruta[0])?.scrollIntoView()); }
  scrollTo({top:0,behavior:"instant"});
}

addEventListener("hashchange", navegar);
navegar();
