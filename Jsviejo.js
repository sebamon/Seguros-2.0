/* INICIO LANDING PAGE */
function CargarLandingPage()
{
    var ventana;
    var width  = 700;
    var height = 350;
    var left   = 500;
    var top    = 100;
    var params = 'width='+width+', height='+height;
    params += ', top='+top+', left='+left;
    params += ', resizable=no';
    params += ', scrollbars=no';
    //var ventana=window.open('lp.html','_blank','fullwindow=no , width=450, height=300 , top=150 , left=400, scrollbars=no, resizable=no ');
    ventana=window.open('LandingPage.html','customWindow',params);
    
    ventana.focus();
} 
function ValidarTelefono()
{
    var tel;
    tel=document.getElementById('txtTelefono');

    if(isNaN(tel.value))
    {
        tel.style.borderColor='red'
    }
    else
    {
        tel.style.borderColor='lightblue'
    }

}
function ValidarSelector()
{
    var Sel;
    Sel=document.getElementById('txtSelector');

    if(isNaN(Sel.value))
    {
        Sel.style.borderColor='red'
    }
    else
    {
        Sel.style.borderColor='lightblue'
    }

}
function ValidarEmail()
{
    var email=document.getElementById('txtEmail');
    var emailRegex = /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i;
    if (emailRegex.test(email.value)){
        email.style.borderColor='lightblue'
       } else {
        email.style.borderColor='red';
       }
}

function CerrarLandingPage()
{
    window.close();
}
function IngresarDatos()
{
    var Nombre, Tel, Email, CheckAutomotor, CheckHogar, CheckComercio, CheckAp;

    Nombre=document.getElementById('txtNombre');
    Tel=document.getElementById('txtTel');
    Email=document.getElementById('txtEmail');
    CheckAutomotor=document.getElementById('chkAutomotor');
    CheckHogar=document.getElementById('chkHogar');
    CheckComercio=document.getElementById('chkComercio');
    CheckAp=document.getElementById('chkAP');
    alert('Gracias por registrarte con Climber Seguros');
   
    //
    if(Email.style.borderColor!='red') 
    {
        //ACA valido si el email para recibir la info es correcta, no valido el telefono porque no todas las personas lo dejan
        //SOlo me importa el nombre y el email
         //Aca deberia ingresar los datos a la db.
         CerrarLandingPage();
    }

    CerrarLandingPage();
}

/* FIN LANDING PAGE */

function MostrarContacto()
{
    var contacto, rEmail,rTelefono,label; //Aca se podria haber pasado como parametro el valor dependiendo de cual se elige, pero lo hice asi para usar el checked del radio
    contacto=document.getElementById('txtContacto');
    rEmail=document.getElementById('rEmail');
    rTelefono=document.getElementById('rTelefono');
    label=document.getElementById('lblContacto');
    contacto.value='';
    if (rEmail.checked)
    {
        label.innerText='Email:';
        contacto.style.visibility='visible';;
       
   
    }  
    if (rTelefono.checked)
    {
        label.innerText='Telefono:';
        contacto.style.visibility='visible';
       
    }
}
function ValidarContacto()
{
    var campo, tipo;
    campo=document.getElementById('txtContacto');
    tipo=document.getElementById('lblContacto');
   

    if(tipo.innerText=='Email:')
    {
        campo.id='txtEmail';
        ValidarEmail();
    }
    if(tipo.innerText=='Telefono:')
    {
        campo.id='txtTelefono';
        ValidarTelefono();
    }
    campo.id='txtContacto';

    
}
function OpcionesSelector()
{
    var label,selector,text;
    selector=document.getElementById('cboConsulta');
    label=document.getElementById('lblSelector');
    text=document.getElementById('txtSelector');

    switch(selector.value)
    {
        case ('Cotizacion'): 
        {
            text.style.visibility='hidden';
            label.style.visibility='hidden';
            text.value='';
        }
            break;
        case ('Siniestro'):
        {   
            text.value='';
            label.style.visibility='visible';
            label.innerText='Nro de Siniestro:';
            text.style.visibility='visible';
        }
            break;
        case ('Estado-de-Cuenta'): 
        {
            text.value='';
            label.style.visibility='visible';
            label.innerText='Nro de Poliza:';
            text.style.visibility='visible';
        }
            break;
        case ('Polizas-Contratadas'): 
        {
            text.value='';
            label.style.visibility='visible';
            label.innerText='Nro de Cuenta:';
            text.style.visibility='visible';
        }
        
    }


}

function CargarCoberturas(valor)
{
    var descripcion=document.getElementById('Cobertura');
    switch (valor)
    {
    case ('Automotores'): CoberturaAutomotores();
     break;
    case('Hogar'): CoberturaHogar();
    break
    case('AP'): CoberturaAP();
    break;
    case ('Comercio'): CoberturaComercio();
    break;
    case ('Vida Individual'): CoberturaVidaIndividual();
    break;
    case ('Retiro'): CoberturaRetiro();
    break;
    case ('Vida Colectivo'): CoberturaVidaColectivo();
    break;
    default:descripcion.innerHTML='Seleccione Ramo'
    }

}

function CoberturaAutomotores()
{
    var descripcion=document.getElementById('Cobertura');
    descripcion.innerHTML='<h1>Automotores</h1>';
    descripcion.innerHTML+='<br/>'
    descripcion.innerHTML+='<h3>En Climber Seguros tenemos una amplia gama de coberturas. Entre las más comunes encontrarás:</h2>';
    descripcion.innerHTML+='<br/>'
    descripcion.innerHTML+='<p>Cobertura “A”: Responsabilidad Civil. Cubre daños a cosas y personas ocasionadas por el vehículo asegurado.</p>'
    descripcion.innerHTML+='<p>Cobertura “B”: Responsabilidad Civil, Robo o Hurto Total, Incendio Total y Destrucción Total.</p>'
    descripcion.innerHTML+='<p>Cobertura “C”: Responsabilidad Civil; Robo o Hurto Total y Parcial; Incendio Total y Parcial y Destrucción Total.</p>'
    descripcion.innerHTML+='<p>Cobertura “D”: Responsabilidad Civil; Robo o Hurto Total y Parcial; Incendio Total y Parcial y Destrucción Total y Parcial (con y sin Franquicia).</p>'
    descripcion.innerHTML+='<img src="img/tabla-autos.jpg" width=800px height=280px>';
}
function CoberturaHogar()
{
    var descripcion=document.getElementById('Cobertura');
    descripcion.innerHTML='<h1>Un seguro para el hogar, una solución completa</h1>'
    descripcion.innerHTML+='<br/>';
    descripcion.innerHTML+='<p> Con Climer Seguros le ofrecemos la mejor protección para su casa o departamento. Conozca nuestras coberturas y elija las que más se adapten a sus necesidades y a su economía';
    descripcion.innerHTML+='Climber Seguros le da la tranquilidad de preservar su patrimonio y a los suyos de la mejor manera.'
    descripcion.innerHTML+='<br/><br/>';
    descripcion.innerHTML+='<h3>Nuestra cobertura basica ofrece:</h3>'
    descripcion.innerHTML+='<br/>';
    descripcion.innerHTML+='<p>-Incendio edificio y contenido.</p>';
    descripcion.innerHTML+='<p>-Gastos especiales, de estadía y de mudanza por eventos contemplados en la póliza.</p>';
    descripcion.innerHTML+='<p>-Alimentos refrigerados.</p>';
    descripcion.innerHTML+='<p>-Terremoto edificio/contenido.</p>';
    descripcion.innerHTML+='<p>-Responsabilidad civil por incendio y/o explosión.</p>';
    descripcion.innerHTML+='<p>-Daños por agua a causa de rotura de cañerías.</p>';
    descripcion.innerHTML+='<p>-Peso de nieve y/o hielo.</p>';
    descripcion.innerHTML+='<p>-Robo de mobiliario familiar, objetos diversos, baulera, bicicletas, palos de golf, robo de bolso en la vía pública, extracción de dinero en cajeros automáticos.</p>';
    descripcion.innerHTML+='<p>-Equipos electrónicos (declarados en el domicilio y en el mundo entero) por incendio; rayo; explosión; robo y hurto; daños accidentales y fluctuación eléctrica.</p>';
    descripcion.innerHTML+='<p>-Responsabilidad Civil hechos privados.</p>';
    descripcion.innerHTML+='<p>-Cristales.</p>';
    descripcion.innerHTML+='<p>-Mascotas (perros y gatos) por robo, accidente, extravío y estadía en residencia animal.</p>';
    descripcion.innerHTML+='<p>-Accidentes personales.</p>';
    descripcion.innerHTML+='<p>-Servicios de asistencia.</p>';
}

function CoberturaAP()
{
    var descripcion=document.getElementById('Cobertura');
    descripcion.innerHTML='<h1>Accidentes Personales</h1>';
    descripcion.innerHTML+='<br/>';
    descripcion.innerHTML+='<p>Un seguro que te protege los 365 días del año, tanto durante la jornada laboral como desplazándote en la República Argentina y el mundo entero, durante las 24 horas.</p>';
    descripcion.innerHTML+='<br/>';
    descripcion.innerHTML+='<h3>Coberturas principales de la póliza</h3>';
    descripcion.innerHTML+='<br/>';
    descripcion.innerHTML+='<p>-Incluye sumas automáticas de hasta $2.000.000, con una emisión automática para personasde entre 14 y 65 años.</p>';
    descripcion.innerHTML+='<p>-Muerte a consecuencia de accidente.</p>';
    descripcion.innerHTML+='<p>-Incapacidad por accidente.</p>';
    descripcion.innerHTML+='<p>-Incapacidad total y parcial permanente por accidente.</p>';
    descripcion.innerHTML+='<p>-Asistencia médica y/o farmacéutica por accidente vía prestación.</p>';
    descripcion.innerHTML+='<p>-Coberturas adicionales de inclusión automática.</p>';
    descripcion.innerHTML+='<p>-Reintegro de gastos de sepelio por muerte del asegurado a consecuencia de accidente, por $ 10.000.-</p>';
    descripcion.innerHTML+='<br/>';
    descripcion.innerHTML+='<h3>Coberturas adicionales opcionales.</h3>';
    descripcion.innerHTML+='<br/>';
    descripcion.innerHTML+='<p>-Uso de moto y/o bicicleta exclusivamente para el desplazamiento dentro de la República Argentina.</p>';
}

function CoberturaComercio()
{
    var descripcion=document.getElementById('Cobertura');
    descripcion.innerHTML='<h1>Integral de Comercio</h1>';
    descripcion.innerHTML+='<br/>';
    descripcion.innerHTML+='<h3>En Climber Seguros creamos productos a la medida de tu negocio para protegerte de todo riesgo.</h3>';
    descripcion.innerHTML+='<br/>';
    descripcion.innerHTML+='<p>Te entregamos respaldo económico al 100% para proteger tus bienes en caso de siniestro en tu negocio.</p>';
    descripcion.innerHTML+='<br/>';
    descripcion.innerHTML+='<h3>Coberturas principales de la póliza</h3>';
    descripcion.innerHTML+='<br/>';
    descripcion.innerHTML+='<p>-Incendio y daños por humo.</p>';
    descripcion.innerHTML+='<p>-Tumulto popular, huelga y vandalismo.</p>';
    descripcion.innerHTML+='<p>-Huracán, vendaval, ciclón y/o tornado.</p>';
    descripcion.innerHTML+='<p>-Daños por agua.</p>';
    descripcion.innerHTML+='<p>-Granizo</p>';
    descripcion.innerHTML+='<br/>';
    descripcion.innerHTML+='<h3>PUEDES INCLUIR EN TU PÓLIZA LAS SIGUIENTES COBERTURAS ADICIONALES</h3>';
    descripcion.innerHTML+='<br/>';
    descripcion.innerHTML+='<p>-Robo del contenido y dinero en caja.</p>';
    descripcion.innerHTML+='<p>-Equipamiento electrónico por todo riesgo.</p>';
    descripcion.innerHTML+='<p>-Daños al edificio por robo o intento de robo.</p>';
    descripcion.innerHTML+='<p>-Cristales.</p>';
    descripcion.innerHTML+='<p>-Responsabilidad civil.</p>';
}

function CoberturaVidaIndividual()
{
    var descripcion=document.getElementById('Cobertura');
    descripcion.innerHTML='<h1>Vida Individual</h1>';
    descripcion.innerHTML+='<br/>';
    descripcion.innerHTML+='<h3>Sólo preocupate de disfrutar la vida al máximo con el respaldo de un seguro creado especialmente para vos.</h3>';
    descripcion.innerHTML+='<br/>';
    descripcion.innerHTML+='<h3>LA PÓLIZA CONTEMPLA ACCEDER A COBERTURA EN LOS SIGUIENTES CASOS:</h3>';
    descripcion.innerHTML+='<br/>';
    descripcion.innerHTML+='<p>-Respaldo económico que se defina en la póliza, a tus beneficiarios, en caso de muerte por enfermedad o accidente, para que no pierdan su calidad de vida.</p>';
    descripcion.innerHTML+='<p>-Indemnización adicional por accidente, en caso de fallecimiento o pérdida de algún órgano o miembro, a causa de lesiones corporales producidas directa y exclusivamente por causas externas, violenta y fortuitas, ajenas a toda otra causa e independientes de su voluntad.</p>';
    descripcion.innerHTML+='<p>-Invalidez total y permanente, como consecuencia de enfermedad o accidente, no permitiendo ejercer trabajos remunerados.</p>';
    descripcion.innerHTML+='<p>-Indemnización en caso de supervivencia, aplicable solo a planes Temporarios 10 o superiores y con una indemización superior al 10% de la suma asegurada de muerte por cualquier causa.</p>';
    descripcion.innerHTML+='<p>-Indemnización complementaria, en caso de enfermedades críticas, como beneficio adicional e independiente de otros identificados dentro de la póliza.</p>';
    descripcion.innerHTML+='<p>-Transplante de órganos, beneficio adicional e independiente de otros identificados dentro de la póliza.</p>';
    descripcion.innerHTML+='<p>-Renta diaria por internación, en caso de enfermedad o accidente.</p>';
}
function CoberturaRetiro()
{
    var descripcion=document.getElementById('Cobertura');
    descripcion.innerHTML='<h1>Retiro</h1>';
    descripcion.innerHTML+='<br/>';
    descripcion.innerHTML+='<p>Con Climber Seguros planificá tu retiro con el mejor plan que te permitirá acumular, ahorrar e invertir fondos para constituir un ahorro voluntario y así adquirir un ingreso futuro que complemente tu jubilación durante la etapa post laboral o realizar el retiro total de los fondos acumulados.</p>';
    descripcion.innerHTML+='<br/>';
    descripcion.innerHTML+='<p>-Elección de moneda de ahorro, esta puede ser en dólares o pesos.</p>';
    descripcion.innerHTML+='<p>-Flexibilidad: aportes de acuerdo a la posibilidad de ahorro del Asegurado.</p>';
    descripcion.innerHTML+='<p>-Gasto de administración mensual fijo: sin costos adicionales, extraordinarios, adicionales por sobre-rentabilidad.</p>';
    descripcion.innerHTML+='<p>-En cualquier momento: el Asegurado cuenta con la libertad de realizar rescates parciales o totales de los fondos.</p>';
    descripcion.innerHTML+='<p>-Rentabilidad garantizada: con capitalización diaria de fondos; y participación adicional de rentabilidad bruta obtenida.</p>';
    descripcion.innerHTML+='<p>-Permite deducir hasta $18.000 del Impuesto a las ganancias.</p>';

}

function CoberturaVidaColectivo()
{
    var descripcion=document.getElementById('Cobertura');
    descripcion.innerHTML='<h1>Vida Colectivo</h1>';
    descripcion.innerHTML+='<br/>';
    descripcion.innerHTML+='<h3>Cubrí exigencias legales, laborales y el patrimonio de tus empleados.<h3>';
    descripcion.innerHTML+='<br/>';
    descripcion.innerHTML+='<h3>COBERTURAS ESPECÍFICAS<h3>';
    descripcion.innerHTML+='<br/>';
    descripcion.innerHTML+='<p>-Seguro de vida obligatorio para trabajadores en relación de dependencia, con cobertura por fallecimiento y un capital asegurado actual de $12.000, en el que podrás designar beneficiarios.</p>';
    descripcion.innerHTML+='<p>-Una cobertura para empleados en relación de dependencia del contratante (Ley de Contrato de Trabajo Nº 20.744) con cobertura por fallecimiento e invalidez total y permanente, y un capital asegurado de medio sueldo por cada año de servicio en caso de fallecimiento y un sueldo por cada año de servicio en caso de invalidez total y permanente, con el tope indemnizatorio establecido para cada caso. El beneficiario será siempre el contratante.</p>';
    descripcion.innerHTML+='<p>-Convenio mercantil, orientado para empleados en relación de dependencia del contratante que pertenezcan al gremio de Empleados de Comercio amparados por la Convención Colectiva Nº 130/75, con cobertura por fallecimiento e invalidez total y permanente, y un capital asegurado actual de $72.599. Se podrán designar beneficiarios.</p>';
    descripcion.innerHTML+='<p>-Cobertura para trabajadores que desempeñan con carácter permanente actividades rurales comprendidas en las prescripciones de la Ley Nº 22.248/80 y en el régimen jubilatorio para los trabajadores rurales, que cubre el fallecimiento e invalidez total y permanente, con un capital asegurado actual de $12.000. Se podrán designar beneficiarios.</p>';
    descripcion.innerHTML+='<br/>';
  /*  descripcion.innerHTML+='<h3>COBERTURAS OPCIONALES<h3>';
    descripcion.innerHTML+='<br/>';
    descripcion.innerHTML+='<p>-Fallecimiento.</p>';
    descripcion.innerHTML+='<p>-Indemnización adicional por muerte accidental.</p>';
    descripcion.innerHTML+='<p>-Indemnización adicional por pérdidas físicas parciales como consecuencia de accidente.</p>';
    descripcion.innerHTML+='<p>-Invalidez total y permanente como consecuencia de enfermedad o accidente.</p>';
    descripcion.innerHTML+='<p>-Anticipo por enfermedades terminales.</p>';
    descripcion.innerHTML+='<p>-Anticipo por enfermedades críticas.</p>';
    descripcion.innerHTML+='<p>-Trasplante de órganos.</p>';*/
    
}

function Enviar()
{
/*aca iria la funcion que escribe en la base de datos*/
alert('Muchas Gracias por su consulta, lo estaremos contactando en la brevedad');
LimpiarDatos();



}

function LimpiarDatos()
{
    var campo;
    campo=document.getElementById('txtNombre');
    campo.value='';
    campo.style.borderColor='initial';
    campo=document.getElementById('txtContacto');
    campo.style.borderColor='initial';
    campo.value='';
    campo=document.getElementById('txaConsulta');
    campo.value='';
    campo=document.getElementById('txtSelector');
    campo.value='';
    campo.style.borderColor='initial';
}






























