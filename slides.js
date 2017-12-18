/**
 * presentr-boilerplate | slides.js
 *
 * @author Kelvin De Moya <http://github.com/kdemoya>.
 */


/**
 * List of all the slide of our presentation
 */
const slidesConfig = {
  slide1: {
    type: 'simple',
    header: '27',
    headerFit: true,
    notes: 'Donde estoy ahora, tengo un buen trabajo, no tengo problemas económicos, soy feliz conmigo mismo y con lo que hago. Es un tiempo de plenitud, llamémosle la cúspide de mi carrera.',
  },
  slide2: {
    type: 'simple',
    header: '25',
    headerFit: true,
    notes: 'Dejé mi trabajo “estable” en una empresa local de software para lanzarme al mundo del trabajo remoto. Tuve primero una mala experiencia con una empresa francesa, cuya forma de trabajo no era para nada amigable así que terminé también renunciando para entrar en lo que, hasta el día de hoy, ha sido la mejor experiencia laboral (por mucho) que he tenido.',
  },
  slide3: {
    type: 'simple',
    header: '24',
    headerFit: true,
    notes: 'Un año antes de dejar mi trabajo local, decidí tomar un trabajo remoto de medio tiempo, para tantear y ver si era lo mío. Resultó ser la peor experiencia que he tenido en alguna empresa de software, desde meetings a las 2 y 3 de la mañana, paga no muy buena (aunque era el doble de lo que ganaba localmente) y un sin número de cosas más.',
  },
  slide4: {
    type: 'simple',
    header: '21',
    headerFit: true,
    notes: 'Me gradué de técnico en programación en el TEP, también conseguí mi primer trabajo a largo plazo en el área de programación, recuerdo que estaba súper emocionado y aprendí bastante durante un período de 4 años.',
  },
  slide5: {
    type: 'simple',
    header: '20',
    headerFit: true,
    notes: 'Si establecimos el presente como la cúspide, éste sería el fondo, el período más oscuro en mi carrera. Cerró la empresa para la que trabajaba y duré cerca de un año sin trabajo mientras tenía que pagar renta, cubrir gastos de transporte para venir a estudiar, cubrir gastos personales, comprar comida (que no siempre era posible), etc…',
  },
  slide6: {
    type: 'simple',
    header: '19',
    headerFit: true,
    notes: 'Tuve que tomar lo que generalmente sería una decision difícil: Dejar la universidad o dejar el trabajo. Para mi no fue difícil, pues bajo ninguna circunstancia podía dejar el trabajo, pues ya era totalmente independiente y tenía responsabilidades. Así que dejé la universidad.',
  },
  slide7: {
    type: 'simple',
    header: '18',
    headerFit: true,
    notes: 'Mi padrastro me echó de la casa por el hecho de darle más prioridad al estudio que a su negocio, lo cual para el era una pérdida de tiempo ya que el nunca terminó ni el bachiller. A fin de cuentas fue una de las mejores cosas que me ha pasado en la vida, ya que sirvió de impulso para nunca dejar de crecer y afrontar cualquier otra mala situación que se me presentara.',
  },
  slide8: {
    type: 'simple',
    header: '17',
    headerFit: true,
    notes: 'Luego de haberle dicho por años a mi abuelo, quien es médico retirado, que iba a seguir su legado en la medicina. El único de más de 20 nietos que le iba a cumplir su sueño. Fue un poquito triste, pero al final el sueño más importante que tenía que cumplir era el mío.',
  },
  slide9: {
    type: 'simple',
    header: '12',
    headerFit: true,
    notes: 'Empecé a trabajar en la empresa de mi padrastro. Por lo que, a mis 27 años, ya llevo más de la mitad de mi vida trabajando… Debería considerar un plan de retiro ya.',
  },
  slide10: {
    type: 'listImage',
    header: 'Kelvin De Moya',
    subHeader: '@kdemoya',
    list: ['Software Developer', 'X-Team', 'Riot Games', 'Automatización', 'Fotografía'],
    image: require('./assets/kdm_photo.png'),
    headerFit: true,
    background: require('./assets/zero_final2.jpg'),
  },
  slide11: {
    type: 'simple',
    header: ['The Remote Worker', 'Chronicles'],
    headerFit: true,
    notes: 'ó "Las crónicas de un trabajador remoto". Nos enfocaremos en el área del software, pero en verdad el trabajo remoto se extiende a muchas otras áreas.',
  },
  slide12: {
    type: 'simple',
    header: 'Por que la historia las edades?',
    notes: 'Mientras se va creciendo profesionalmente, uno tiende a olvidarse u obviar las acumulación de diferentes factores y decisiones que auspician ese crecimiento. Y mucha gente puede terminar acreditando la suerte o la casualidad.',
  },
  slide13: {
    type: 'simple',
    header: 'Suerte',
    background: require('./assets/luck.jpeg'),
    notes: 'No creo en la suerte, ni en la casualidad. Creo que son simplemente términos que usamos para obviar todos los factores que influyen en algún suceso.',
  },
  slide14: {
    type: 'simple',
    header: 'Causalidad',
    background: require('./assets/causalidad.jpeg'),
    notes: 'Creo en la causalidad, que no es más que la relación que existe entre la causa y el efecto. Y es lo que explica la reacción que causa cada una de las acciones de nuestro entorno.',
  },
  slide15: {
    type: 'quote',
    image: require('./assets/einstein.jpg'),
    background: require('./assets/einstein_bg.jpg'),
    quote: 'Somos arquitectos de nuestro propio destino',
    author: 'Albert Einstein',
    notes: 'Quienes han escuchado esa frase anteriormente? Suena bastante cliché y algo fantasiosa, pero es una tremenda verdad.',
  },
  slide16: {
    type: 'simple',
    header: 'Qué es un trabajo remoto?',
    notes: 'Es un trabajo en el cual no debes ir a una oficina a trabajar por 8 horas, si no que realizas el trabajo desde donde quieras, sea en tu casa o bajo una palma en Cabarete.',
  },
  slide17: {
    type: 'image',
    image: require('./assets/beach.jpeg'),
    notes: 'Que por cierto, eso de trabajar en la playa solo se ve cool en fotos, en vida real es lo más incómodo del mundo. Creanme, fue de las primeras cosas que probé.',
  },
  slide18: {
    type: 'simple',
    header: 'Qué necesito para un trabajo remoto?',
    notes: 'No tanto, la verdad. Saber defenderse en el inglés, manejar decentemente algún lenguaje de programación y tener la disposición.',
  },
  slide19: {
    type: 'simple',
    header: 'Pero...',
    notes: 'No puedo asegurarle que el pago será bueno o que las condiciones serán las mejores, pero algo aparece.',
  },
  slide20: {
    type: 'simple',
    header: 'Qué necesito para un BUEN trabajo remoto?',
    notes: 'Aquí las cosas cambian bastante y es algo que vas construyendo en el camino. Se exige un nivel de experiencia más alto, skills más especializados, etc. Lo que yo considero más importante es lo siguiente:',
  },
  slide21: {
    type: 'simple',
    header: 'Ingles',
    notes: 'Algo que no me canso de decir y repito en cada charla o consejos que doy, hay que preocuparse por el Inglés, no vale de nada que usted tenga los mejores skills del mundo cuando no puede entablar una conversación profesional con un potencial cliente o empleador.',
  },
  slide22: {
    type: 'simple',
    header: 'Skills',
    notes: 'Ya no basta con manejar un lenguaje a nivel básico, se exigirá un uso más especializado de las tecnologías que manejes, también se exigirán skills más diversos, no solamente “Yo se programas en Ruby, por ejemplo”.',
  },
  slide23: {
    type: 'simple',
    header: 'Experiencia Demostrable',
    notes: 'Tendrás que demostrar, ya sea en evaluaciones o entrevistas que tienes experiencia y un manejo profundo de las herramientas que dices manejar. También es muy probable que se te pide mostrar código que has hecho en el pasado, etc.',
  },
  slide24: {
    type: 'simple',
    header: 'Comunicación',
    notes: 'Una de las partes más importantes para un trabajador remoto es saber comunicarse de una forma clara y precisa ya que el 100% de la comunicación será de forma virtual.',
  },
  slide25: {
    type: 'simple',
    header: 'Responsable',
    notes: 'Trabajar remoto suele traer consigo muchas libertades, que si la mal utilizamos nos puede traer muchos problemas con la productividad. Por lo que tener un fuerte sentido de la responsabilidad es un requerimiento vital.',
  },
  slide26: {
    type: 'simple',
    header: 'Preguntas frecuentes',
    notes: 'Trataré de responder aquí algunas de las preguntas que recibo con más frecuencia sobre este tipo de trabajo.',
  },
  slide27: {
    type: 'simple',
    header: 'Puedo conseguir un trabajo así?',
    notes: 'Por supuesto! Pero aparece de todo y son muchos más los trabajos no tan buenos que los buenos. Así que la preparación lo es todo.',
  },
  slide28: {
    type: 'simple',
    header: 'Cómo se manejan los pagos?',
    notes: 'Generalmente se maneja en base a lo que es un hourly rate, o un precio por hora. Y eso se multiplica por la cantidad de horas que que trabajes.',
  },
  slide29: {
    type: 'simple',
    header: 'Leyes laborales?',
    notes: 'Como no estás trabajando para una empresa local, las leyes laborales no aplican, es decir, no tienes doble sueldo, ni seguro médico incluido, ni demás prestaciones laborales.',
  },
  slide30: {
    type: 'simple',
    header: 'Disciplina de trabajar en casa?',
    notes: 'En realidad es algo que se crea orgánicamente, al principio puede parecer difícil, pero cuando tus ingresos dependen de que te sientes a trabajar, tu mente se acostumbra.',
  },
  slide31: {
    type: 'simple',
    header: 'En resumen…',
    notes: '',
  },
  slide32: {
    type: 'list',
    list: ['Caminen, luego corran', 'Aprendan constantemente', 'Ingles, ingles, ingles…', 'Adquieran experiencia', 'Manténganse curiosos'],
    notes: '',
  },
  slide33: {
    type: 'simple',
    header: 'Conversemos',
    background: require('./assets/conversar.jpeg'),
    notes: 'Mi idea inicial era poner más slides y pararme aquí a hablarles todo lo que me llegara a la mente, pero mejor me gustaría tornar esta última parte en una conversación, con sus opiniones y preguntas.',
  },
  slide34: {
    type: 'simple',
    header: 'Muchas Gracias!',
    subHeader: '@kdemoya',
    notes: 'Hasta luego!',
  },
};

export default slidesConfig;
