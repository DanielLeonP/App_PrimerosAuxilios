DROP DATABASE IF EXISTS quickstartdb;
CREATE DATABASE quickstartdb;
USE quickstartdb;

CREATE TABLE emergencia(
id_emergencia  INT(6) NOT NULL PRIMARY KEY AUTO_INCREMENT,
nombre VARCHAR(70),
prioridad INT(3),
sintomas MEDIUMTEXT,
video MEDIUMTEXT,
iconoImagen MEDIUMTEXT
);

CREATE TABLE tratamiento(
id_tratamiento  INT(6) NOT NULL PRIMARY KEY AUTO_INCREMENT,
tratamiento MEDIUMTEXT,
id_emergencia INT(6)
); 

ALTER TABLE tratamiento ADD(
FOREIGN KEY(id_emergencia)
REFERENCES emergencia(id_emergencia)
);

CREATE TABLE imagen(
imagen_id INT(6) NOT NULL PRIMARY KEY AUTO_INCREMENT,
imagen MEDIUMTEXT,
id_emergencia INT(6) 
);

ALTER TABLE imagen ADD(
FOREIGN KEY(id_emergencia)
REFERENCES emergencia(id_emergencia)
);
CREATE TABLE recomendacion(
recomendacion_id  INT(6) NOT NULL PRIMARY KEY AUTO_INCREMENT,
recomendacion MEDIUMTEXT,
id_emergencia INT(6) 
);

ALTER TABLE recomendacion ADD(
FOREIGN KEY(id_emergencia)
REFERENCES emergencia(id_emergencia)
);








INSERT INTO emergencia(nombre,prioridad,sintomas,video,iconoImagen) VALUES ('Paro Cardiaco',1,'Los síntomas del paro cardíaco repentino son inmediatos y drásticos, entre ellos: colapso súbito, falta de pulso, falta de respiración, pérdida del conocimiento.','https://youtube.com/embed/dtn5yAKqeXU', 'https://sccuentaalmacenamiento.blob.core.windows.net/servicioscloudimagenes/Principal_Paro_Cardiaco.jpg');
INSERT INTO emergencia(nombre,prioridad,sintomas,video,iconoImagen) VALUES ('Ataque al Corazón / Infarto',2,'Dolor persistente, malestar o presión, constante o paulatina sobre el centro del pecho o sus alrededores, que dura de 3 a 5 minutos, después de este tiempo, la persona empieza a dejar de responder físicamente. Dificultad para respirar, palidez, mareos.','https://youtube.com/embed/gNYKOuZhoBk', 'https://sccuentaalmacenamiento.blob.core.windows.net/servicioscloudimagenes/Principal_Ataque_Corazon.jpg');
INSERT INTO emergencia(nombre,prioridad,sintomas,video,iconoImagen) VALUES ('Ataque Convulsivo / Convulsión',3,'Rigidez en el cuerpo y movimientos involuntarios y espasmódicos, babeo o generación de espuma por la boca, gruñidos, movimientos rápidos de los ojos, inclusive perdida de control de su cuerpo.','https://youtube.com/embed/sIlfgtHpf-0', 'https://sccuentaalmacenamiento.blob.core.windows.net/servicioscloudimagenes/Principal_Convulsion.jpg');
INSERT INTO emergencia(nombre,prioridad,sintomas,video,iconoImagen) VALUES ('Atragantamiento / Asfixia',4,'Obstrucción de las vías respiratorias, ambiente tóxico y/o falta de oxígeno, función pulmonar deficiente, traumatismos torácicos, lesiones cerebrales.','https://youtube.com/embed/vBvMbXjCA14?t=25', 'https://sccuentaalmacenamiento.blob.core.windows.net/servicioscloudimagenes/Principal_Atragantamiento.jpg');
INSERT INTO emergencia(nombre,prioridad,sintomas,video,iconoImagen) VALUES ('Choque Eléctrico / Electrocución',5,'Quemaduras, dolor constante o palpitante en todo el cuerpo, incapacidad de moverse o responder a cualquier acción, la persona puede estar inconsciente, desmayo, hormigueo, ataques espasmódicos.','https://youtube.com/embed/cdEGIBokVXU', 'https://sccuentaalmacenamiento.blob.core.windows.net/servicioscloudimagenes/Principal_Choque_Electrico.jpg');
INSERT INTO emergencia(nombre,prioridad,sintomas,video,iconoImagen) VALUES ('Cortaduras / Hemorragias',6,'Dolor, hipersensibilidad, equimosis e hinchazón, son signos que pueden significar que una fractura cerrada está sangrando, fracturas costales, equimosis sobre la parte inferior del tórax o un abdomen rígido, distendido, son signos y síntomas que pueden indicar un bazo o hígado lacerado, en general, desangrado paulatino o constante.','https://youtube.com/embed/k0lWfBm1w2I', 'https://sccuentaalmacenamiento.blob.core.windows.net/servicioscloudimagenes/Principal_Cortaduras.jpg');
INSERT INTO emergencia(nombre,prioridad,sintomas,video,iconoImagen) VALUES ('Ataque de Asma',7,'Dificultad para respirar, pulso acelerado, sensación de opresión en el pecho, ansiedad.','https://youtube.com/embed/Y_eNCrEEQ7M', 'https://sccuentaalmacenamiento.blob.core.windows.net/servicioscloudimagenes/Principal_Ataque_Asma.jpg');
INSERT INTO emergencia(nombre,prioridad,sintomas,video,iconoImagen) VALUES ('Reacciones Alérgicas',8,'Ardor y comezón en los ojos y/o nariz, salpullido, estornudos, tos, náuseas, nariz congestionada, diarrea, dificultad para respirar, garganta cerrada.','https://youtube.com/embed/W6WPWuIdaEo', 'https://sccuentaalmacenamiento.blob.core.windows.net/servicioscloudimagenes/Principal_Alergia.jpg');
INSERT INTO emergencia(nombre,prioridad,sintomas,video,iconoImagen) VALUES ('Intoxicación / Envenenamiento',9,'Malestar, dolor de cabeza, mareos, náuseas o vómitos. Ardor y/o dolor de garganta, tos repentina, dificultad para tragar o respirar, babeo, falta de fuerzas, somnolencia repentina, confusión o disminución de la capacidad mental, convulsiones, desvanecimiento, ronchas repentinas, inflamación, cambio de color de la piel, de los labios, debilidad, irritabilidad, vértigo, fiebre.','https://youtube.com/embed/fQC6yHfCkYQ', 'https://sccuentaalmacenamiento.blob.core.windows.net/servicioscloudimagenes/Principal_Envenenamiento.jpg');
INSERT INTO emergencia(nombre,prioridad,sintomas,video,iconoImagen) VALUES ('Fracturas Importantes',10,'Dolor intenso, extremidad que se ve fuera de lugar, hinchazón, hematomas o dolor alrededor de la herida, problemas al mover la extremidad, huesos salidos o rotos, sonidos rasposos al mover la extremidad.','https://youtube.com/embed/IxFpbOI971Q', 'https://sccuentaalmacenamiento.blob.core.windows.net/servicioscloudimagenes/Principal_Fractura.jpg');
INSERT INTO emergencia(nombre,prioridad,sintomas,video,iconoImagen) VALUES ('Golpe de Calor / Deshidratación',11,'Labios secos, dolor de cabeza, adormecimiento, calambres, mucha sed, piel seca, arrugada y ausencia de sudoración.','https://youtube.com/embed/2DiU6VPlAbM', 'https://sccuentaalmacenamiento.blob.core.windows.net/servicioscloudimagenes/Principal_Golpe_Calor.jpg');
INSERT INTO emergencia(nombre,prioridad,sintomas,video,iconoImagen) VALUES ('Hipotermia',12,'Escalofríos, hablar arrastrando las palabras o balbuceo, respiración lenta y superficial, pulso débil, torpeza o falta de coordinación, somnolencia o muy poca energía, desorientación o pérdida de memoria, pérdida del conocimiento y piel de color rojo brillante y fría (en bebés).','https://youtube.com/embed/GRUREDhFsgo', 'https://sccuentaalmacenamiento.blob.core.windows.net/servicioscloudimagenes/Principal_Hipoterma.jpg');
INSERT INTO emergencia(nombre,prioridad,sintomas,video,iconoImagen) VALUES ('Quemaduras Importantes',13,'Enrojecimiento de la piel, dolor constante, hinchazón, ampollas, destrucción extensa de la piel, irritación, aparición de costras, inflamación.','https://youtube.com/embed/iqn1Lb8kcqg', 'https://sccuentaalmacenamiento.blob.core.windows.net/servicioscloudimagenes/Principal_Quemadura.jpg');
INSERT INTO emergencia(nombre,prioridad,sintomas,video,iconoImagen) VALUES ('Mordedura / Picaduras',14,'Enrojecimiento de la zona, dolor local intenso. Son más dolorosas que peligrosas, piel caliente, picor, inflamación y posterior edema, malestar general, náuseas, cefaleas, en casos graves.','https://youtube.com/embed/AEHDznHGjlw', 'https://sccuentaalmacenamiento.blob.core.windows.net/servicioscloudimagenes/Principal_Picadura_Mordedura.jpg');
INSERT INTO emergencia(nombre,prioridad,sintomas,video,iconoImagen) VALUES ('Esguinces',15,'Dolor intenso en la articulación, hinchazón en la zona afectada, imposibilidad de movimiento de la zona afectada.','https://youtube.com/embed/hfIQz9FaDls', 'https://sccuentaalmacenamiento.blob.core.windows.net/servicioscloudimagenes/Principal_Esguince.jpg');
INSERT INTO emergencia(nombre,prioridad,sintomas,video,iconoImagen) VALUES ('Calambres',16,'Dolor intenso y localizado en un músculo, sensación de tener el músculo duro, palpitación y tensión muscular.','https://youtube.com/embed/_RYPtEz1atU', 'https://sccuentaalmacenamiento.blob.core.windows.net/servicioscloudimagenes/Principal_Calambre.jpg');















INSERT INTO recomendacion (recomendacion, id_emergencia) VALUES ('Revisar el colesterol en la sangre frecuentemente.\n\n',1);
INSERT INTO recomendacion (recomendacion, id_emergencia) VALUES ('Saber que esto puede estar presente por enfermedades familiares.\n\n',1);
INSERT INTO recomendacion (recomendacion, id_emergencia) VALUES ('No se debe dejar pasar mas de una hora del ataque, de otra forma puede provocar la muerte.',1);

INSERT INTO recomendacion (recomendacion, id_emergencia) VALUES ('No trasladar a la persona en automóvil hacia el hospital, puede empeorar la situación, a no ser que no exista otra opción.\n\n',2);
INSERT INTO recomendacion (recomendacion, id_emergencia) VALUES ('Mantener la calma.\n\n',2);
INSERT INTO recomendacion (recomendacion, id_emergencia) VALUES ('Conocer si la persona es alérgica a la aspirina.\n\n',2);
INSERT INTO recomendacion (recomendacion, id_emergencia) VALUES ('No tardar más de 2 horas en atender la emergencia, porque, la persona podría sufrir daño cerebral o un paro cardiaco.',2);

INSERT INTO recomendacion (recomendacion, id_emergencia) VALUES ('Tomar sus medicamentos.\n\n',3);
INSERT INTO recomendacion (recomendacion, id_emergencia) VALUES ('Dormir lo suficiente.\n\n',3);
INSERT INTO recomendacion (recomendacion, id_emergencia) VALUES ('Disminuir el estrés.\n\n',3);
INSERT INTO recomendacion (recomendacion, id_emergencia) VALUES ('No observar luces estroboscópicas.',3);

INSERT INTO recomendacion (recomendacion, id_emergencia) VALUES ('Animar a toser.\n\n',4);
INSERT INTO recomendacion (recomendacion, id_emergencia) VALUES ('Continuar valorando si se deteriora o si revierte la obstrucción.',4);


INSERT INTO recomendacion (recomendacion, id_emergencia) VALUES ('Instalar interruptores automáticos en el hogar.',5);
INSERT INTO recomendacion (recomendacion, id_emergencia) VALUES ('Desconectar la fuente eléctrica en caso de hacer cualquier trabajo eléctrico.\n\n',5);
INSERT INTO recomendacion (recomendacion, id_emergencia) VALUES ('No conectar dispositivos húmedos o mojados la red eléctrica.\n\n',5);
INSERT INTO recomendacion (recomendacion, id_emergencia) VALUES ('No jugar con herramientas o materiales eléctricas cerca de zonas de alto voltaje.\n\n',5);
INSERT INTO recomendacion (recomendacion, id_emergencia) VALUES ('Utilizar zapatos de caucho, para trabajos eléctricos.',5);

INSERT INTO recomendacion (recomendacion, id_emergencia) VALUES ('No jugar con objetos punzocortantes.\n\n',6);
INSERT INTO recomendacion (recomendacion, id_emergencia) VALUES ('Si el objeto que esta causando la hemorragia sigue encajado, no retirarlo.',6);

INSERT INTO recomendacion (recomendacion, id_emergencia) VALUES ('Tómate los medicamentos del asma según las indicaciones de tu médico.\n\n',7);
INSERT INTO recomendacion (recomendacion, id_emergencia) VALUES ('Evitar el humo del tabaco.\n\n',7);
INSERT INTO recomendacion (recomendacion, id_emergencia) VALUES ('Evitar ambientes contaminados.\n\n',7);
INSERT INTO recomendacion (recomendacion, id_emergencia) VALUES ('Realizar solo el ejercicio indicado por su médico.\n\n',7);
INSERT INTO recomendacion (recomendacion, id_emergencia) VALUES ('Mantener la casa libre de polvo.',7);

INSERT INTO recomendacion (recomendacion, id_emergencia) VALUES ('Algunas personas saben que son alérgicas a ciertas sustancias o a picaduras de insectos. Es posible que hayan aprendido a evitar estas cosas y pueden llevar medicamentos para revertir la reacción alérgica.\n\n',8);
INSERT INTO recomendacion (recomendacion, id_emergencia) VALUES ('Las personas que tienen reacciones alérgicas graves pueden usar una tarjeta, brazalete o collar de identificación médica.\n\n',8);

INSERT INTO recomendacion (recomendacion, id_emergencia) VALUES ('Si una comida o medicamento huele mal, no consumirlo.\n\n',9);
INSERT INTO recomendacion (recomendacion, id_emergencia) VALUES ('No mezclar productos químicos sin previo conocimiento.\n\n',9);
INSERT INTO recomendacion (recomendacion, id_emergencia) VALUES ('No acampar en zonas con hierba o plantas desconocidas, mejor en tierra o rocas.\n\n',9);
INSERT INTO recomendacion (recomendacion, id_emergencia) VALUES ('No consumir cualquier planta que se pueda encontrar en la naturaleza, sin estar seguro de cuál es.\n\n',9);
INSERT INTO recomendacion (recomendacion, id_emergencia) VALUES ('Mantener siempre ventilado el hogar.',9);

INSERT INTO recomendacion (recomendacion, id_emergencia) VALUES ('Revisar que no existan otras lesiones.\n\n',10);
INSERT INTO recomendacion (recomendacion, id_emergencia) VALUES ('Al practicar deportes o realizar actividades con riesgo de caída, utilizar indumentaria y accesorios apropiados. Por ejemplo: cascos, coderas, rodilleras, etcétera.',10);


INSERT INTO recomendacion (recomendacion, id_emergencia) VALUES ('Es importante beber líquidos al estar realizando actividades intensas y prolongadas.\n\n',11);
INSERT INTO recomendacion (recomendacion, id_emergencia) VALUES ('Evita la exposición al sol en las horas centrales del día (de 12 a 17 horas) y, en general',11);
INSERT INTO recomendacion (recomendacion, id_emergencia) VALUES ('Lleva ropa ligera que permita la transpiración, el principal mecanismo de refrigeración de nuestro cuerpo.\n\n',11);
INSERT INTO recomendacion (recomendacion, id_emergencia) VALUES ('Si notas cansancio o mareo, retírate a un lugar fresco o ventilado y aflójate la ropa.',11);

INSERT INTO recomendacion (recomendacion, id_emergencia) VALUES ('No utilices agua caliente, compresas calientes ni lámparas de calentamiento para calentar a la persona. El calor extremo puede dañar la piel o, lo que es peor, provocar latidos del corazón irregulares tan graves que pueden hacer que el corazón se detenga.\n\n',12);
INSERT INTO recomendacion (recomendacion, id_emergencia) VALUES ('Vista ropa abrigada, de capas múltiples, con buena protección para las manos y los pies (evite el uso de muñequeras, calcetines y zapatos estrechos).\n\n',12);
INSERT INTO recomendacion (recomendacion, id_emergencia) VALUES ('Use protección de cabeza abrigada. Esto es particularmente importante, ya que, una cantidad de calor significante se pierde por la cabeza no protegida.\n\n',12);
INSERT INTO recomendacion (recomendacion, id_emergencia) VALUES ('Si es posible, cámbiese ropa seca cada vez que se moje su ropa.',12);

INSERT INTO recomendacion (recomendacion, id_emergencia) VALUES ('No apretar la zona afectada con nada.\n\n',13);
INSERT INTO recomendacion (recomendacion, id_emergencia) VALUES ('No reventar las ampollas.\n\n',13);
INSERT INTO recomendacion (recomendacion, id_emergencia) VALUES ('No dar de beber ni comer al accidentado, hasta que sea tratado.\n\n',13);
INSERT INTO recomendacion (recomendacion, id_emergencia) VALUES ('No aplicar tratamientos tópicos: pomadas, aceites, ungüentos.',13);

INSERT INTO recomendacion (recomendacion, id_emergencia) VALUES ('Revisar además de la mordida o picadura, si esta traia consigo alguna enfermedad.\n\n',14);
INSERT INTO recomendacion (recomendacion, id_emergencia) VALUES ('En ambos casos retirar al agente del accidente, de la persona afectada.',14);

INSERT INTO recomendacion (recomendacion, id_emergencia) VALUES ('Evitar zapatos de taco alto y/o que provoquen inestabilidad en el pie.\n\n',15);
INSERT INTO recomendacion (recomendacion, id_emergencia) VALUES ('Siempre realizar ejercicios de calentamiento antes de realizar alguna actividad física.\n\n',15);
INSERT INTO recomendacion (recomendacion, id_emergencia) VALUES ('Evitar deportes y actividades para las cuales no se tenga el entrenamiento adecuado.\n\n',15);
INSERT INTO recomendacion (recomendacion, id_emergencia) VALUES ('Mantener una musculatura robusta para proteger los ligamentos',15);

INSERT INTO recomendacion (recomendacion, id_emergencia) VALUES ('Es necesario elongar los músculos antes y después del ejercicio físico y antes de acostarse y después de levantarse de la cama.\n\n',16);
INSERT INTO recomendacion (recomendacion, id_emergencia) VALUES ('Beber muchos líquidos.',16);













INSERT INTO tratamiento(tratamiento, id_emergencia) VALUES ('1. Llamar inmediatamente a los servicios de emergencia (911).\n\n',1);
INSERT INTO tratamiento(tratamiento, id_emergencia) VALUES ('2. Verifica rápidamente la respiración de la persona.\n\n',1);
INSERT INTO tratamiento(tratamiento, id_emergencia) VALUES ('3. Si la persona no respira con normalidad, comienza con la reanimación cardio pulmonar:\n\n',1);
INSERT INTO tratamiento(tratamiento, id_emergencia) VALUES ('a) Con la persona boca arriba, colocarse junto al cuello y con las palmas sobre el pecho.\n\n',1);
INSERT INTO tratamiento(tratamiento, id_emergencia) VALUES ('b) Hacer presión sobre el pecho, con el peso de tu cuerpo, a una profundidad de 5 cm, hacer 5 repeticiones de 30 compresiones en un minuto, esperar a que el pecho retome su posición.\n\n',1);
INSERT INTO tratamiento(tratamiento, id_emergencia) VALUES ('c) Después de 30 compresiones puedes oxigenar a la persona, primero, inclinar su cabeza y levantarle el mentón.\n\n',1);
INSERT INTO tratamiento(tratamiento, id_emergencia) VALUES ('d) Aprieta las fosas nasales, y con tu boca cubre la boca de la persona, administra aire durante 1 a 2 segundos.\n\n',1);
INSERT INTO tratamiento(tratamiento, id_emergencia) VALUES ('e) Repite el ciclo, hasta que lleguen los paramédicos.\n',1);

INSERT INTO tratamiento(tratamiento, id_emergencia) VALUES ('1. Llamar inmediatamente a los servicios de emergencia (911).\n\n',2);
INSERT INTO tratamiento(tratamiento, id_emergencia) VALUES ('2. Acomodar a la persona en un lugar tranquilo y que respire profundamente.\n\n',2);
INSERT INTO tratamiento(tratamiento, id_emergencia) VALUES ('3. Aflojar prendas que puedan estar causando presión.\n\n',2);
INSERT INTO tratamiento(tratamiento, id_emergencia) VALUES ('4. Si la persona se encuentra inconsciente, prepárese para dar RCP:\n\n',2);
INSERT INTO tratamiento(tratamiento, id_emergencia) VALUES ('a) Con la persona boca arriba, colocarse junto al cuello y con las palmas sobre el pecho.\n\n',2);
INSERT INTO tratamiento(tratamiento, id_emergencia) VALUES ('b) Hacer presión sobre el pecho, con el peso de tu cuerpo, a una profundidad de 5 cm, hacer 5 repeticiones de 30 compresiones en un minuto, esperar a que el pecho retome su posición.\n\n',2);
INSERT INTO tratamiento(tratamiento, id_emergencia) VALUES ('c) Después de 30 compresiones puedes oxigenar a la persona, primero, inclinar su cabeza y levantarle el mentón.\n\n',2);
INSERT INTO tratamiento(tratamiento, id_emergencia) VALUES ('d) Aprieta las fosas nasales, y con tu boca cubre la boca de la persona, administra aire durante 1 a 2 segundos.\n\n',2);
INSERT INTO tratamiento(tratamiento, id_emergencia) VALUES ('e) Repite el ciclo, hasta que lleguen los paramédicos.\n\n',2);
INSERT INTO tratamiento(tratamiento, id_emergencia) VALUES ('5. Si la persona no se encuentra consciente o recobro la conciencia, dar a tomar, una tableta de aspirina.\n',2);





INSERT INTO tratamiento(tratamiento, id_emergencia) VALUES ('1. Quitar objetos con los que podría lastimarse la persona.\n\n',3);
INSERT INTO tratamiento(tratamiento, id_emergencia) VALUES ('2. Si la persona esta tirada, posicionarla de lado, en caso de estar sentada, colocarla recostada sobre en el piso.\n\n',3);
INSERT INTO tratamiento(tratamiento, id_emergencia) VALUES ('3. Llamar a las unidades de emergencia (911).\n\n',3);
INSERT INTO tratamiento(tratamiento, id_emergencia) VALUES ('4. No detener los movimientos ni introducir nada en la boca.\n\n',3);
INSERT INTO tratamiento(tratamiento, id_emergencia) VALUES ('5. Permitir que el aire pueda entrar al cuerpo de la persona, no obstruir ningún tipo de recepción de aire.\n\n',3);
INSERT INTO tratamiento(tratamiento, id_emergencia) VALUES ('6. Después de la crisis colocar a la persona en posición lateral de seguridad.\n',3);


INSERT INTO tratamiento(tratamiento, id_emergencia) VALUES ('Es necesario hacer uso de la maniobra de Heimlich. Consiste en:\n\n',4);
INSERT INTO tratamiento(tratamiento, id_emergencia) VALUES ('1. Colocarse detrás de la persona, de manera que su cuerpo quede de lado en relación con la espalda del atragantado. Sus pies deben estar abiertos aprox. al ancho de sus hombros y se coloca uno en medio de los de la persona. Lo anterior para tener más estabilidad corporal.\n\n',4);
INSERT INTO tratamiento(tratamiento, id_emergencia) VALUES ('2. Rodear con sus brazos la cintura del atragantado. Con una mano se localizará el ombligo; dos dedos arriba de este se colocarán el puño, procurando que el dedo gordo quede arriba de la línea media del abdomen por arriba del ombligo.\n\n',4);
INSERT INTO tratamiento(tratamiento, id_emergencia) VALUES ('3. Apretar el puño con la otra mano, presionando fuertemente hacia el abdomen de adentro y hacia arriba. Se debe de repetir esta acción hasta que la persona arroje el objeto que está obstruyendo su vía área.\n\n',4);
INSERT INTO tratamiento(tratamiento, id_emergencia) VALUES ('4. Llamar inmediatamente a los servicios de emergencia (911), para asegurar que nada siga obstruido.\n',4);







INSERT INTO tratamiento(tratamiento, id_emergencia) VALUES ('1. NO tocar a la persona que está sufriendo el choque o lo acaba de sufrir, esto podría provocarle un choque a usted también.\n\n',5);
INSERT INTO tratamiento(tratamiento, id_emergencia) VALUES ('2. Buscar la fuente de poder que está generando la electricidad del choque, y cortarla.\n\n',5);
INSERT INTO tratamiento(tratamiento, id_emergencia) VALUES ('3. En caso de no poder alcanzar la fuente de poder o no encontrarla, alejar o separar a la persona de la fuente de electrocución con uno de los siguientes materiales: madera no seca, vidrio, plástico grueso, cerámica, cuero, siempre vigilar que no entres en contacto con la persona afectada y de ser posible no estés en contacto directo con el suelo.\n\n',5);
INSERT INTO tratamiento(tratamiento, id_emergencia) VALUES ('4. Una vez separado, llamar a los paramédicos (911).\n\n',5);
INSERT INTO tratamiento(tratamiento, id_emergencia) VALUES ('5. Evitar que la persona afectada se acerque a zonas con alta o baja corriente durante su traslado al hospital.\n',5);

INSERT INTO tratamiento(tratamiento, id_emergencia) VALUES ('1. Llamar inmediatamente a los servicios de emergencia (911).\n\n',6);
INSERT INTO tratamiento(tratamiento, id_emergencia) VALUES ('2. En caso de una hemorragia externa:\n\n',6);
INSERT INTO tratamiento(tratamiento, id_emergencia) VALUES ('a) Acuesta a la persona herida. La cabeza debe estar más abajo que el tronco o las piernas, facilitando que el flujo sanguíneo se dirija hacia el cerebro.\n\n',6);
INSERT INTO tratamiento(tratamiento, id_emergencia) VALUES ('b) Si la herida está en alguna de las extremidades, deberás elevarla para que disminuya el flujo.\n\n',6);
INSERT INTO tratamiento(tratamiento, id_emergencia) VALUES ('c) Limpia con una gasa estéril y suero fisiológico la herida.\n\n',6);
INSERT INTO tratamiento(tratamiento, id_emergencia) VALUES ('d) Aplica presión directamente sobre la herida, con un paño limpio y hasta detener el sangrado. Cuando se detenga, envuelve la herida con un vendaje compresivo.\n\n',6);
INSERT INTO tratamiento(tratamiento, id_emergencia) VALUES ('e) Si el sangrado no para, comprueba el pulso y ejerce una compresión firme y constante con los dedos.\n\n',6);
INSERT INTO tratamiento(tratamiento, id_emergencia) VALUES ('3. En caso de una hemorragia interna:\n\n',6);
INSERT INTO tratamiento(tratamiento, id_emergencia) VALUES ('a) Acostar a la persona herida y elevar sus piernas.\n\n',6);
INSERT INTO tratamiento(tratamiento, id_emergencia) VALUES ('b) Comprobar el pulso y la respiración y cubrirlo con una manta.\n\n',6);
INSERT INTO tratamiento(tratamiento, id_emergencia) VALUES ('c) En ambos casos, trasladar a la persona a un centro médico.\n',6);

INSERT INTO tratamiento(tratamiento, id_emergencia) VALUES ('1. Si es un ataque agudo, solicitar ayuda médica de inmediato.\n\n',7);
INSERT INTO tratamiento(tratamiento, id_emergencia) VALUES ('2. Tranquilizar a la persona afectada.\n\n',7);
INSERT INTO tratamiento(tratamiento, id_emergencia) VALUES ('3. Solicitarle que se siente.\n\n',7);
INSERT INTO tratamiento(tratamiento, id_emergencia) VALUES ('4. Utilizar el broncodilatador/inhalador para aminorar los síntomas.\n\n',7);
INSERT INTO tratamiento(tratamiento, id_emergencia) VALUES ('5. En caso de no contar con él, pedir a la persona que levante los brazos, apoyarlos en la pared y cabeza abajo.\n',7);

INSERT INTO tratamiento(tratamiento, id_emergencia) VALUES ('1. Llamar inmediatamente a los servicios de emergencia (911).\n\n',8);
INSERT INTO tratamiento(tratamiento, id_emergencia) VALUES ('2. Verificar signos vitales.\n\n',8);
INSERT INTO tratamiento(tratamiento, id_emergencia) VALUES ('3. No administrar medicamentos sin la indicación previa.\n\n',8);
INSERT INTO tratamiento(tratamiento, id_emergencia) VALUES ('4. En la medida de las posibilidades se debe de identificar la fuente de la alergia y se debe de alejar de la misma.\n\n',8);
INSERT INTO tratamiento(tratamiento, id_emergencia) VALUES ('5. Si la reacción alérgica es severa se observará: piel fría y húmeda, color pálido, latidos de corazón débiles o rápidos, dificultad para respirar y pérdida de conocimiento.\n\n',8);






INSERT INTO tratamiento(tratamiento, id_emergencia) VALUES ('1. Llamar inmediatamente a los paramédicos (911).\n\n',9);
INSERT INTO tratamiento(tratamiento, id_emergencia) VALUES ('2. Dependiendo de como fue la intoxicación/envenenamiento se debe aplicar una de las siguientes medidas:\n\n',9);
INSERT INTO tratamiento(tratamiento, id_emergencia) VALUES ('Si el contacto fue por vía oral:\n\nNo hacer vomitar a la persona a menos que se le sea indicado por un profesional, reconfortar a la persona y/o llevarla a un centro de salud.\n\n',9);
INSERT INTO tratamiento(tratamiento, id_emergencia) VALUES ('Si el contacto fue por la piel:\n\nQuitar la ropa y lavar, masajear o tallar con abundante agua la piel durante 15 a 20 minutos.\n\n',9);
INSERT INTO tratamiento(tratamiento, id_emergencia) VALUES ('Si el contacto fue vía inhalatoria:\n\nTrasladar a la persona a un lugar bien ventilado y dejarla reposar.\n\n',9);
INSERT INTO tratamiento(tratamiento, id_emergencia) VALUES ('Si el contacto fue en el ojo:\n\nFrotar suavemente un paño mojado a temperatura ambiente, durante 15 a 20 minutos, después dejar reposar el ojo.\n',9);

INSERT INTO tratamiento(tratamiento, id_emergencia) VALUES ('1. Llamar inmediatamente a los paramédicos (911).\n\n',10);
INSERT INTO tratamiento(tratamiento, id_emergencia) VALUES ('2. No muevas a la persona, excepto si es necesario para evitar más lesiones.\n\n',10);
INSERT INTO tratamiento(tratamiento, id_emergencia) VALUES ('3. Inmoviliza la zona lesionada.\n\n',10);
INSERT INTO tratamiento(tratamiento, id_emergencia) VALUES ('4. No intentes volver a alinear el hueso ni empujes hacia adentro el hueso que se haya salido.\n\n',10);
INSERT INTO tratamiento(tratamiento, id_emergencia) VALUES ('5. Aplicar hielo para disminuir el dolor y la inflamación.\n',10);

INSERT INTO tratamiento(tratamiento, id_emergencia) VALUES ('1. La persona debe permanecer en reposo en un ambiente tranquilo.\n\n',11);
INSERT INTO tratamiento(tratamiento, id_emergencia) VALUES ('2. Administrar electrolitos o agua con azúcar con un poco de sal.\n\n',11);
INSERT INTO tratamiento(tratamiento, id_emergencia) VALUES ('3. Realizar revisión general de signos vitales.\n\n',11);
INSERT INTO tratamiento(tratamiento, id_emergencia) VALUES ('4. En caso de que el malestar continúe derivar a un médico.\n',11);

INSERT INTO tratamiento(tratamiento, id_emergencia) VALUES ('1. Llamar inmediatamente a los servicios de emergencia (911).\n\n',12);
INSERT INTO tratamiento(tratamiento, id_emergencia) VALUES ('2. Cuando estés ayudando a una persona con hipotermia, trátala con cuidado. Limita los movimientos solo a aquellos que sean necesarios. No le hagas masajes a la persona ni la frotes. Los movimientos excesivos, enérgicos o bruscos pueden causar un paro cardíaco.\n\n',12);
INSERT INTO tratamiento(tratamiento, id_emergencia) VALUES ('3. Aleja a la persona del frío. Colócala en un sitio seco y cálido si es posible. Si no puedes alejarla, cúbrela del frío y del viento lo máximo posible.\n\n',12);
INSERT INTO tratamiento(tratamiento, id_emergencia) VALUES ('4. Si la persona tiene la ropa mojada, quítasela.\n\n',12);
INSERT INTO tratamiento(tratamiento, id_emergencia) VALUES ('5. Cubre a la persona con mantas. Utiliza capas de mantas o abrigos secos para calentar a la persona. Cúbrele la cabeza y solo déjale la cara al descubierto.\n\n',12);
INSERT INTO tratamiento(tratamiento, id_emergencia) VALUES ('6. Aísla el cuerpo de la persona del suelo frío. Si estás afuera, coloca a la persona boca arriba sobre una manta u otra superficie cálida.\n\n',12);
INSERT INTO tratamiento(tratamiento, id_emergencia) VALUES ('7. Controla su respiración. Una persona con hipotermia grave puede parecer inconsciente, sin signos aparentes de pulso o respiración.\n\n',12);
INSERT INTO tratamiento(tratamiento, id_emergencia) VALUES ('8. Si la persona afectada está consciente y puede tragar, dale una bebida tibia, dulce, sin alcohol y sin cafeína para ayudarla a calentar el cuerpo.\n\n',12);
INSERT INTO tratamiento(tratamiento, id_emergencia) VALUES ('9. Utiliza una compresa cálida de primeros auxilios (una bolsa de plástico rellena de líquido que se calienta cuando se aprieta) o una compresa provisional de agua tibia en una botella de plástico o una toalla calentada con secador. Aplica una compresa solo en el cuello, en la pared torácica o en la ingle.\n\nNo la coloques en los brazos ni en las piernas. El calor que se aplica en los brazos y las piernas obliga a que la sangre fría vuelva al corazón, los pulmones y el cerebro, lo que provoca que la temperatura corporal interna disminuya. Esto puede ser mortal.\n',12);






INSERT INTO tratamiento(tratamiento, id_emergencia) VALUES ('1. Llamar inmediatamente a los servicios de emergencia (911).\n\n',13);
INSERT INTO tratamiento(tratamiento, id_emergencia) VALUES ('2. Aplicar agua en abundancia durante 15 o 20 minutos.\n\n',13);
INSERT INTO tratamiento(tratamiento, id_emergencia) VALUES ('3. Cubrir la lesión con apósito estéril sin comprimir.\n\n',13);
INSERT INTO tratamiento(tratamiento, id_emergencia) VALUES ('4. Retirar la ropa pero NO la ropa pegada.\n\n',13);
INSERT INTO tratamiento(tratamiento, id_emergencia) VALUES ('5. Retirar anillos, relojes, pulseras, etc.\n',13);

INSERT INTO tratamiento(tratamiento, id_emergencia) VALUES ('1. Llamar inmediatamente a los servicios de emergencia (911).\n\n',14);
INSERT INTO tratamiento(tratamiento, id_emergencia) VALUES ('2. Limpiar la zona con agua y jabón.\n\n',14);
INSERT INTO tratamiento(tratamiento, id_emergencia) VALUES ('3. Inmovilizar y elevar la extremidad afectada.\n\n',14);
INSERT INTO tratamiento(tratamiento, id_emergencia) VALUES ('4. Aplicar frío local para disminuir la inflamación.\n\n',14);
INSERT INTO tratamiento(tratamiento, id_emergencia) VALUES ('5. No realizar incisión en la zona de la picada.\n\n',14);
INSERT INTO tratamiento(tratamiento, id_emergencia) VALUES ('6. Controlar las constantes vitales.\n\n',14);
INSERT INTO tratamiento(tratamiento, id_emergencia) VALUES ('7. Trasladar a un centro sanitario en caso de reacciones graves.\n\n',14);
INSERT INTO tratamiento(tratamiento, id_emergencia) VALUES ('8. Aplicar oxigenoterapia y RCP básica en casos extremos.\n',14);


INSERT INTO tratamiento(tratamiento, id_emergencia) VALUES ('1. Colocar compresas frías en la zona afectada.\n\n',15);
INSERT INTO tratamiento(tratamiento, id_emergencia) VALUES ('2. Si la lesión es en el pie, se deberá vendar.\n\n',15);
INSERT INTO tratamiento(tratamiento, id_emergencia) VALUES ('3. La localización del esguince debe de permanecer elevado.\n\n',15);
INSERT INTO tratamiento(tratamiento, id_emergencia) VALUES ('4. Derivar a un médico para su oportuna atención.\n',15);

INSERT INTO tratamiento(tratamiento, id_emergencia) VALUES ('1. Si se está realizando una actividad, es necesario interrumpirla.\n\n',16);
INSERT INTO tratamiento(tratamiento, id_emergencia) VALUES ('2. Masajear el músculo afectado o apretarlo con fuerza.\n\n',16);
INSERT INTO tratamiento(tratamiento, id_emergencia) VALUES ('3. Trata de estirar el músculo con las manos, relajarlos y continuar estirando.\n',16);


INSERT INTO Imagen (imagen, id_emergencia) VALUES ( 'https://sccuentaalmacenamiento.blob.core.windows.net/servicioscloudimagenes/Ataque_Asma1.jpg',7);
INSERT INTO Imagen (imagen, id_emergencia) VALUES ( 'https://sccuentaalmacenamiento.blob.core.windows.net/servicioscloudimagenes/Ataque_Asma2.png',7);
INSERT INTO Imagen (imagen, id_emergencia) VALUES ( 'https://sccuentaalmacenamiento.blob.core.windows.net/servicioscloudimagenes/Ataque_Asma3.jpg',7);
INSERT INTO Imagen (imagen, id_emergencia) VALUES ( 'https://sccuentaalmacenamiento.blob.core.windows.net/servicioscloudimagenes/Ataque_Asma4.png',7);
INSERT INTO Imagen (imagen, id_emergencia) VALUES ( 'https://sccuentaalmacenamiento.blob.core.windows.net/servicioscloudimagenes/Ataque_Convulsivo1.png',3);
INSERT INTO Imagen (imagen, id_emergencia) VALUES ( 'https://sccuentaalmacenamiento.blob.core.windows.net/servicioscloudimagenes/Ataque_Convulsivo2.png',3);
INSERT INTO Imagen (imagen, id_emergencia) VALUES ( 'https://sccuentaalmacenamiento.blob.core.windows.net/servicioscloudimagenes/Ataque_Convulsivo3.jpg',3);
INSERT INTO Imagen (imagen, id_emergencia) VALUES ( 'https://sccuentaalmacenamiento.blob.core.windows.net/servicioscloudimagenes/Ataque_Convulsivo4.png',3);
INSERT INTO Imagen (imagen, id_emergencia) VALUES ( 'https://sccuentaalmacenamiento.blob.core.windows.net/servicioscloudimagenes/Ataque_Convulsivo5.png',3);
INSERT INTO Imagen (imagen, id_emergencia) VALUES ( 'https://sccuentaalmacenamiento.blob.core.windows.net/servicioscloudimagenes/Ataque_Corazon_Infarto1.jpg',2);
INSERT INTO Imagen (imagen, id_emergencia) VALUES ( 'https://sccuentaalmacenamiento.blob.core.windows.net/servicioscloudimagenes/Ataque_Corazon_Infarto2.png',2);
INSERT INTO Imagen (imagen, id_emergencia) VALUES ( 'https://sccuentaalmacenamiento.blob.core.windows.net/servicioscloudimagenes/Ataque_Corazon_Infarto3.jpg',2);
INSERT INTO Imagen (imagen, id_emergencia) VALUES ( 'https://sccuentaalmacenamiento.blob.core.windows.net/servicioscloudimagenes/Ataque_Corazon_Infarto4.jpg',2);
INSERT INTO Imagen (imagen, id_emergencia) VALUES ( 'https://sccuentaalmacenamiento.blob.core.windows.net/servicioscloudimagenes/Ataque_Corazon_Infarto5.jpg',2);
INSERT INTO Imagen (imagen, id_emergencia) VALUES ( 'https://sccuentaalmacenamiento.blob.core.windows.net/servicioscloudimagenes/Ataque_Corazon_Infarto6.jpg',2);
INSERT INTO Imagen (imagen, id_emergencia) VALUES ( 'https://sccuentaalmacenamiento.blob.core.windows.net/servicioscloudimagenes/Atragantamiento_Asfixia1.jpg',4);
INSERT INTO Imagen (imagen, id_emergencia) VALUES ( 'https://sccuentaalmacenamiento.blob.core.windows.net/servicioscloudimagenes/Atragantamiento_Asfixia2.jpg',4);
INSERT INTO Imagen (imagen, id_emergencia) VALUES ( 'https://sccuentaalmacenamiento.blob.core.windows.net/servicioscloudimagenes/Atragantamiento_Asfixia3.jpg',4);
INSERT INTO Imagen (imagen, id_emergencia) VALUES ( 'https://sccuentaalmacenamiento.blob.core.windows.net/servicioscloudimagenes/Calambres1.jpg',16);
INSERT INTO Imagen (imagen, id_emergencia) VALUES ( 'https://sccuentaalmacenamiento.blob.core.windows.net/servicioscloudimagenes/Calambres2.png',16);
INSERT INTO Imagen (imagen, id_emergencia) VALUES ( 'https://sccuentaalmacenamiento.blob.core.windows.net/servicioscloudimagenes/Calambres3.png',16);
INSERT INTO Imagen (imagen, id_emergencia) VALUES ( 'https://sccuentaalmacenamiento.blob.core.windows.net/servicioscloudimagenes/Choque_Electrico1.jpg',5);
INSERT INTO Imagen (imagen, id_emergencia) VALUES ( 'https://sccuentaalmacenamiento.blob.core.windows.net/servicioscloudimagenes/Choque_Electrico2.jpg',5);
INSERT INTO Imagen (imagen, id_emergencia) VALUES ( 'https://sccuentaalmacenamiento.blob.core.windows.net/servicioscloudimagenes/Choque_Electrico3.jpg',5);
INSERT INTO Imagen (imagen, id_emergencia) VALUES ( 'https://sccuentaalmacenamiento.blob.core.windows.net/servicioscloudimagenes/Cortaduras_Hemorragias1.jpg',6);
INSERT INTO Imagen (imagen, id_emergencia) VALUES ( 'https://sccuentaalmacenamiento.blob.core.windows.net/servicioscloudimagenes/Cortaduras_Hemorragias2.jpg',6);
INSERT INTO Imagen (imagen, id_emergencia) VALUES ( 'https://sccuentaalmacenamiento.blob.core.windows.net/servicioscloudimagenes/Cortaduras_Hemorragias3.jpg',6);
INSERT INTO Imagen (imagen, id_emergencia) VALUES ( 'https://sccuentaalmacenamiento.blob.core.windows.net/servicioscloudimagenes/Esguinces1.jpg',15);
INSERT INTO Imagen (imagen, id_emergencia) VALUES ( 'https://sccuentaalmacenamiento.blob.core.windows.net/servicioscloudimagenes/Esguinces2.png',15);
INSERT INTO Imagen (imagen, id_emergencia) VALUES ( 'https://sccuentaalmacenamiento.blob.core.windows.net/servicioscloudimagenes/Esguinces3.jpg',15);
INSERT INTO Imagen (imagen, id_emergencia) VALUES ( 'https://sccuentaalmacenamiento.blob.core.windows.net/servicioscloudimagenes/Esguinces4.png',15);
INSERT INTO Imagen (imagen, id_emergencia) VALUES ( 'https://sccuentaalmacenamiento.blob.core.windows.net/servicioscloudimagenes/Fracturas_Importantes1.jpg',10);
INSERT INTO Imagen (imagen, id_emergencia) VALUES ( 'https://sccuentaalmacenamiento.blob.core.windows.net/servicioscloudimagenes/Fracturas_Importantes2.jpg',10);
INSERT INTO Imagen (imagen, id_emergencia) VALUES ( 'https://sccuentaalmacenamiento.blob.core.windows.net/servicioscloudimagenes/Fracturas_Importantes3.jpg',10);
INSERT INTO Imagen (imagen, id_emergencia) VALUES ( 'https://sccuentaalmacenamiento.blob.core.windows.net/servicioscloudimagenes/Golpe_Calor_Deshidratacion1.jpg',11);
INSERT INTO Imagen (imagen, id_emergencia) VALUES ( 'https://sccuentaalmacenamiento.blob.core.windows.net/servicioscloudimagenes/Golpe_Calor_Deshidratacion2.png',11);
INSERT INTO Imagen (imagen, id_emergencia) VALUES ( 'https://sccuentaalmacenamiento.blob.core.windows.net/servicioscloudimagenes/Golpe_Calor_Deshidratacion3.jpg',11);
INSERT INTO Imagen (imagen, id_emergencia) VALUES ( 'https://sccuentaalmacenamiento.blob.core.windows.net/servicioscloudimagenes/Golpe_Calor_Deshidratacion4.png',11);
INSERT INTO Imagen (imagen, id_emergencia) VALUES ( 'https://sccuentaalmacenamiento.blob.core.windows.net/servicioscloudimagenes/Hipotermia1.jpg',12);
INSERT INTO Imagen (imagen, id_emergencia) VALUES ( 'https://sccuentaalmacenamiento.blob.core.windows.net/servicioscloudimagenes/Hipotermia2.jpg',12);
INSERT INTO Imagen (imagen, id_emergencia) VALUES ( 'https://sccuentaalmacenamiento.blob.core.windows.net/servicioscloudimagenes/Hipotermia3.jpg',12);
INSERT INTO Imagen (imagen, id_emergencia) VALUES ( 'https://sccuentaalmacenamiento.blob.core.windows.net/servicioscloudimagenes/Hipotermia4.jpg',12);
INSERT INTO Imagen (imagen, id_emergencia) VALUES ( 'https://sccuentaalmacenamiento.blob.core.windows.net/servicioscloudimagenes/Hipotermia5.jpg',12);
INSERT INTO Imagen (imagen, id_emergencia) VALUES ( 'https://sccuentaalmacenamiento.blob.core.windows.net/servicioscloudimagenes/Hipotermia6.jpg',12);
INSERT INTO Imagen (imagen, id_emergencia) VALUES ( 'https://sccuentaalmacenamiento.blob.core.windows.net/servicioscloudimagenes/Intoxicacion_Envenenamiento1.jpg',9);
INSERT INTO Imagen (imagen, id_emergencia) VALUES ( 'https://sccuentaalmacenamiento.blob.core.windows.net/servicioscloudimagenes/Intoxicacion_Envenenamiento2.jpg',9);
INSERT INTO Imagen (imagen, id_emergencia) VALUES ( 'https://sccuentaalmacenamiento.blob.core.windows.net/servicioscloudimagenes/Intoxicacion_Envenenamiento3.jpg',9);
INSERT INTO Imagen (imagen, id_emergencia) VALUES ( 'https://sccuentaalmacenamiento.blob.core.windows.net/servicioscloudimagenes/Intoxicacion_Envenenamiento4.jpg',9);
INSERT INTO Imagen (imagen, id_emergencia) VALUES ( 'https://sccuentaalmacenamiento.blob.core.windows.net/servicioscloudimagenes/Mordedura_Picadura1.jpg',14);
INSERT INTO Imagen (imagen, id_emergencia) VALUES ( 'https://sccuentaalmacenamiento.blob.core.windows.net/servicioscloudimagenes/Mordedura_Picadura2.jpg',14);
INSERT INTO Imagen (imagen, id_emergencia) VALUES ( 'https://sccuentaalmacenamiento.blob.core.windows.net/servicioscloudimagenes/Mordedura_Picadura3.jpg',14);
INSERT INTO Imagen (imagen, id_emergencia) VALUES ( 'https://sccuentaalmacenamiento.blob.core.windows.net/servicioscloudimagenes/Paro_Cardiaco1.jpg',1);
INSERT INTO Imagen (imagen, id_emergencia) VALUES ( 'https://sccuentaalmacenamiento.blob.core.windows.net/servicioscloudimagenes/Quemaduras_Importantes1.jpg',13);
INSERT INTO Imagen (imagen, id_emergencia) VALUES ( 'https://sccuentaalmacenamiento.blob.core.windows.net/servicioscloudimagenes/Quemaduras_Importantes2.jpg',13);
INSERT INTO Imagen (imagen, id_emergencia) VALUES ( 'https://sccuentaalmacenamiento.blob.core.windows.net/servicioscloudimagenes/Quemaduras_Importantes3.jpg',13);
INSERT INTO Imagen (imagen, id_emergencia) VALUES ( 'https://sccuentaalmacenamiento.blob.core.windows.net/servicioscloudimagenes/Quemaduras_Importantes4.jpg',13);
INSERT INTO Imagen (imagen, id_emergencia) VALUES ( 'https://sccuentaalmacenamiento.blob.core.windows.net/servicioscloudimagenes/Reacciones_Alergicas1.jpg',8);
INSERT INTO Imagen (imagen, id_emergencia) VALUES ( 'https://sccuentaalmacenamiento.blob.core.windows.net/servicioscloudimagenes/Reacciones_Alergicas2.jpg',8);
INSERT INTO Imagen (imagen, id_emergencia) VALUES ( 'https://sccuentaalmacenamiento.blob.core.windows.net/servicioscloudimagenes/Reacciones_Alergicas3.jpg',8);
INSERT INTO Imagen (imagen, id_emergencia) VALUES ( 'https://sccuentaalmacenamiento.blob.core.windows.net/servicioscloudimagenes/Reacciones_Alergicas4.jpg',8);