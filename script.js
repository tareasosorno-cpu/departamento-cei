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
  {id:"maria-elena",nombre:"María Elena González Bañales",cargo:"Jefa del departamento",area:"jefatura",correo:"elena.gonzalez@univa.mx",extension:"1456"},
  {id:"carmen-cobian",nombre:"Carmen Claudia Cobián López",cargo:"Coordinación de Procesos Académicos",area:"academicos",correo:"carmen.cobian@univa.mx",extension:"1462"},
  {id:"luis-osorno",nombre:"Luis Alfonso Osorno Montes",cargo:"Coordinación de Procesos Académicos",area:"academicos",correo:"luis.osorno@univa.mx",extension:"1455"},
  {id:"sandra-estrada",nombre:"Sandra Guadalupe Estrada Ochoa",cargo:"Coordinación de Procesos de Tutorías",area:"tutorias",correo:"sandy.estrada@univa.mx",extension:"1831"},
  {id:"leonardo-flores",nombre:"Leonardo Flores Cosío",cargo:"Coordinación de Procesos de Tutorías",area:"tutorias",correo:"leonardo.flores@univa.mx",extension:"1870"},
  {id:"daniela-alcocer",nombre:"Daniela Patricia Alcocer Pérez",cargo:"Coordinación de Titulación y Vinculación",area:"vinculacion",correo:"daniela.alcocer@univa.mx",extension:"2003"},
  {id:"ana-ramos",nombre:"Ana Caro Ramos",cargo:"Laboratorio de Construcción",area:"laboratorios"},
  {id:"luis-cortes",nombre:"Luis Gabriel Cortés Huerta",cargo:"Laboratorio de Ingenierías",area:"laboratorios"},
  {id:"jorge-lopez",nombre:"Jorge Antonio López Avilés",cargo:"Laboratorio de Electrónica",area:"laboratorios"},
  {id:"alfredo-gonzalez",nombre:"Alfredo González Mercado",cargo:"Laboratorio de Cómputo",area:"laboratorios"},
  {id:"angel-perez",nombre:"Ángel Jaziel Pérez Zamora",cargo:"Auxiliar de Laboratorio de Cómputo",area:"laboratorios"}
];

const app = document.querySelector("#app");
const iniciales = nombre => nombre.split(" ").filter(Boolean).slice(0,2).map(p => p[0]).join("");

function tarjetaPersona(persona) {
  return `<a class="person-card" href="#persona/${persona.id}">
    <span class="avatar">${iniciales(persona.nombre)}</span>
    <span><b>${persona.nombre}</b><small>${persona.cargo}</small></span><i>→</i>
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
      <div class="area-grid">${areas.map((area,i)=>`<a class="area-card" href="#area/${area.id}"><span class="number">0${i+1}</span><h3>${area.title}</h3><p>${area.short}</p><b>Conocer el área <span>→</span></b></a>`).join("")}</div>
    </section>
    <section class="directory" id="directorio">
      <div class="section-head light"><div><p class="eyebrow">Nuestro equipo</p><h2>Directorio</h2></div><p>Selecciona un integrante para consultar su ficha.</p></div>
      <div class="people-grid">${personas.map(tarjetaPersona).join("")}</div>
    </section>`;
}

function verArea(id) {
  const area = areas.find(a=>a.id===id);
  if (!area) return inicio();
  const miembros = personas.filter(p=>p.area===id || (id==="titulacion" && p.area==="vinculacion"));
  app.innerHTML = `<section class="detail-page"><a class="back" href="#areas">← Todas las áreas</a><div class="detail-title"><p class="eyebrow blue">Área departamental</p><h1>${area.title}</h1><p>${area.description}</p>${area.location?`<span class="location">⌖ ${area.location}</span>`:""}</div><div class="detail-rule"></div><h2>Integrantes del área</h2>${miembros.length?`<div class="people-grid dark-text">${miembros.map(tarjetaPersona).join("")}</div>`:`<div class="placeholder">Información de integrantes pendiente de actualización.</div>`}</section>`;
}

function verPersona(id) {
  const p = personas.find(persona=>persona.id===id);
  if (!p) return inicio();
  const area=areas.find(a=>a.id===p.area);
  app.innerHTML=`<section class="profile-page"><a class="back light-back" href="#area/${p.area}">← Volver al área</a><div class="profile-card"><span class="profile-avatar">${iniciales(p.nombre)}</span><div><p class="eyebrow blue">Semblanza</p><h1>${p.nombre}</h1><h2>${p.cargo}</h2><p class="bio">La formación académica, experiencia profesional y semblanza de este integrante se incorporarán en la siguiente actualización del sitio.</p><dl><dt>Área</dt><dd>${area?.title||""}</dd>${p.correo?`<dt>Correo</dt><dd><a href="mailto:${p.correo}">${p.correo}</a></dd>`:""}${p.extension?`<dt>Extensión</dt><dd>${p.extension}</dd>`:""}</dl></div></div></section>`;
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
