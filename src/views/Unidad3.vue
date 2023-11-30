<template>
    <div class="bg-gray-300 p-5">
    <div class="container mx-auto rounded-lg bg-white p-5">
        <div class="flex justify-center bg-black p-3 rounded">
            <h1 class="text-center text-4xl text-white font-medium">Selección de Componentes para ensamble de equipo de Computo</h1>
        </div>
        <div class="container mx-auto mt-5">
            <h2 class="flex justify-center text-3xl font-bold">3.1 Chipset</h2>
            <div class="flex flex-row justify-evenly mt-3">
                <div class="w-2/5">
                    <h3 class="text-xl font-semibold">Definicion</h3>
                    <p>
                        Un chipset es el conjunto de circuitos integrados diseñados con base en la
                        arquitectura de un procesador (en algunos casos, diseñados como parte
                        integral de esa arquitectura), permitiendo que ese tipo de procesadores
                        funcionen en una placa base. Sirven de puente de comunicación con el
                        resto de componentes de la placa, como son la memoria, las tarjetas de
                        expansión, los puertos USB, ratón, teclado, etc.
                    </p>
                    <div class="flex flex-row mt-3">
                        <div>
                            <img src="src\assets\images\Unidad3\chip1.png" alt="" srcset="">
                        </div>
                        <div>
                            <img src="src\assets\images\Unidad3\chip2.png" alt="" srcset="">
                        </div>
                    </div>
                </div>
                <div class="w-2/5">
                    <h3 class="text-xl font-semibold text-center">Funcionamiento</h3>
                    <p class="text-xl">
                        El chipset es quien hace posible que la placa base funcione como eje del
                        sistema, dando soporte a varios componentes e interconectándolos de forma
                        que se comuniquen entre ellos haciendo uso de diversos buses.

                        Es uno de los pocos elementos que tiene conexión directa con el procesador.

                        Gestiona la mayor parte de la información que entra y sale del bus principal,
                        del sistema de video y muchas veces de la memoria RAM.

                        Esquema de arquitectura abierta que establece modularidad: el chipset debe
                        tener interfaces estándar para los demás dispositivos.
                    </p>
                </div>
            </div>
            <div class="flex flex-row justify-evenly mt-20">
                <div class="w-1/5">
                    <h3 class="text-xl font-semibold">Northbridge</h3>
                    <p class="text-2xl">
                        Se usa como puente de 
                        enlace entre el 
                        microprocesador y la memoria. 
                        Controla las funciones de 
                        acceso hacia y entre el 
                        microprocesador, la memoria RAM, 
                        el puerto gráfico AGP o el 
                        PCI-Express de gráficos, 
                        y las comunicaciones con el 
                        puente sur.
                    </p>  
                </div>
                <div class="w-1/3">
                    <img src="src\assets\images\Unidad3\arquitectura.png" alt="" srcset="">
                </div>
                <div class="w-1/5">
                    <h3 class="text-xl font-semibold">Southbridge</h3>
                    <p class="text-2xl">
                        Controla los dispositivos 
                        asociados como son la 
                        controladora de discos IDE, 
                        puertos USB, SATA, RAID,
                        puertos infrarrojos, disquetera, 
                        LAN y una larga lista de todos 
                        los elementos que podamos 
                        imaginar integrados en la placa madre. 
                        Es el encargado de comunicar el 
                        procesador con el resto de los 
                        periféricos.

                    </p>
                </div>
            </div>
        </div>
        <div class="container mx-auto mt-20">
            <h2 class="flex justify-center text-3xl font-bold">3.1.1. Unidad de Control de Procesamiento(CPU)</h2>
            <div class="flex flex-row justify-evenly mt-5">
                <div class="w-2/5">
                    <h3 class="text-xl font-semibold">Definicion</h3>
                    <p class="text-lg">
                        La unidad central de procesamiento (siglas en inglés Central Processing Unit) es el hardware dentro de una computadora u otros dispositivos programables. Su trabajo es interpretar las instrucciones de un programa informático mediante la realización de las operaciones básicas aritméticas, lógicas y externas (provenientes de la unidad de entrada/salida). Su diseño y avance ha variado notablemente desde su creación, aumentando su eficiencia y potencia, y reduciendo aspectos como el consumo de energía y el costo.

                    </p>
                    
                </div>
                <div class="w-2/5">
                    <h3 class="text-xl font-semibold text-center">Componentes</h3>
                    <ul>
                        <li>
                            <p class="font-semibold"> Unidad Aritmético Lógica(ALU):</p> Realiza operaciones matemáticas y lógicas.
                        </li>
                        <li>
                            <p class="font-semibold"> Unidad de Control(CU):</p> Dirige el tráfico de información entre los registros del CPU y conecta con la ALU las instrucciones extraídas de la memoria.
                        </li>
                        <li>
                            <p class="font-semibold">Registros Internos:</p> No accesibles(de instrucción, bus de datos y bus de dirección)
                            
                        </li>
                        <li>
                            Accesibles de uso específico(contador programa, puntero pila, flags,etc) o uso general.
                        </li>
                    </ul>
                </div>
            </div>
        </div>
        <div class="container mx-auto mt-20">
            <h2 class="flex justify-center text-3xl font-bold">3.1.2 Controladores de bus</h2>
            <div class="flex flex-row justify-around mt-5">
                <div class="w-2/5">
                    <ul class="text-3xl">
                        <li class="mt-1">El controlador de bus se encarga de la frecuencia de funcionamiento y las señales de sincronismo, temporización y control. Está ubicado en un chip de la placa base.
                        </li>
                        <li class="mt-2">Es la vía a través de la cual se van a enviar y recibir todas las   comunicaciones (internas y externas) del sistema informático.
                        </li>
                        <li class="mt-2">El bus solamente es un dispositivo de transferencia de información.
                        </li>
                    </ul>
                </div>
                
                <div class="w-2/5">
                    <img src="src\assets\images\Unidad3\bus.png" alt="" srcset="">
                </div>
            </div>
        </div>
        <div class="container mx-auto mt-20">
            <h2 class="flex justify-center text-3xl font-bold">3.1.3 Módulos de entrada/salida</h2>
            <div class="flex flex-row justify-evenly mt-5 text-xl">
                <div class="w-1/5">
                    <ul>
                        <li class="mt-2">Un puerto E/S es un enchufe en una computadora al que se conecta un cable.
                        </li>
                        <li class="mt-2">El puerto conecta la CPU a un dispositivo periférico a través de una interfaz ya se de hardware o una red.
                        </li>
                        <li class="mt-2">Es un punto de conexión que actúa como interfaz entre la computadora y dispositivos externos.
                        </li>
                        <li class="mt-2">Hay dos tipos de puertos: Internos y Externos.
                        </li>
                    </ul>
                </div>
                <div class="w-1/5">
                    <h2 class="text-center font-semibold">Puertos</h2>
                    <ul>
                        <li class="mt-2">PUERTO SERIAL
                        </li>
                        
                        <li class="mt-2">PUERTO PARALELO
                        </li>
                        
                        <li class="mt-2">PUERTO USB
                        </li>

                        <li class="mt-2">PUERTO PS/2
                        </li>
                        
                        <li class="mt-2">PUERTO DE INFRARROJOS
                        </li>
                        
                        <li class="mt-2">PUERTO BLUETOOTH
                        </li>
                        
                        <li class="mt-2">PUERTO FIREWIRE
                        </li>
                    </ul>
                </div>
                <div class="w-1/3">
                    <img src="src\assets\images\Unidad3\ports.png" alt="" srcset="">
                </div>
            </div>
        </div>
        <div class="container mx-auto mt-20">
            <h2 class="flex justify-center text-3xl font-bold">3.1.4 Controlador de Interruptores</h2>
            <div class="flex flex-row justify-center mt-5 text-xl">
                <div class="w-4/5">
                    <p>El controlador de interrupciones es un módulo que tiene por función gestionar las interrupciones de entrada/salida para el procesador. Esto ahorra diseñar lógica y añadir patitas al procesador. También proporciona flexibilidad porque permite idealmente, gestionar un número ilimitado señales de interrupción (favoreciendo la expansión del sistema de entrada/salida).
                    El controlador recibe el conjunto de señales de interrupción procedentes de los dispositivos, toma la decisión de cuál es la más prioritaria, y envía una única señal al procesador. La respuesta del procesador es transmitida al dispositivo y el propio controlador se encarga de depositar en el bus el vector de la interrupción.
                    </p>
                </div>
            </div>
        </div>
        <div class="container mx-auto mt-20">
            <h2 class="flex justify-center text-3xl font-bold">3.1.5 Controlador de Acceso Directo a Memoria (DMA)</h2>
            <div class="flex flex-row justify-around mt-5">
                <div class="w-2/5">
                    <p class="text-xl">
                        El mecanismo de acceso directo a memoria está controlado por un chip específico, el DMAC ("DMA Controller"), que permite realizar estos intercambios sin apenas intervención del procesador. En los XT estaba integrado en un chip 8237A que proporcionaba 4 canales de 8 bits (puede mover solo 1 Byte cada vez); sus direcciones de puerto son 000–00Fh. Posteriormente en los AT se instalaron dos de estos integrados y las correspondientes líneas auxiliares en el bus de control.
                    </p>
                </div>
                
                <div class="w-2/5">
                    <img src="src\assets\images\Unidad3\dmapio.png" alt="" srcset="">
                </div>
            </div>
        </div>
        <div class="container mx-auto mt-20">
            <h2 class="flex justify-center text-3xl font-bold">3.1.6 Circuitos de Temporización</h2>
            <div class="flex flex-row justify-center mt-5 text-xl">
                <div class="w-4/5">
                    <p class="mt-5">
                        El circuito electrónico que más se utiliza tanto en la industria como en circuitería comercial, es el circuito temporizador o de retardo, dentro de la categoría de temporizadores, cabe destacar el más económico y también menos preciso consistente en una resistencia y un condensador, a partir de aquí se puede contar con un sinfín de opciones.
                    </p>
                    <p class="mt-5">
                        Un temporizador básicamente consiste en un elemento que se activa o desactiva después de un tiempo preestablecido. De esta manera podemos determinar el parámetro relacionado con el tiempo que ha de transcurrir para que el circuito susceptible de temporizarse, se detenga o empiece a funcionar o simplemente cierre un contacto o lo abra.
                    </p>
                </div>
            </div>
        </div>
        <div class="container mx-auto mt-20">
            <h2 class="flex justify-center text-3xl font-bold">3.1.7 Circuitos de Control</h2>
            <div class="flex flex-row justify-center mt-5 text-xl">
                <div class="w-4/5">
                    <p class="mt-5">
                        Es una red secuencial que acepta un código que define la operación que se va a ejecutar y luego prosigue a través de una secuencia de estados, generando una correspondiente secuencia de señales control.
                    </p>
                    <p class="mt-5">
                        Estas señales de control incluyen el control de lectura-escritura y señales de dirección de memoria válida en el bus de control del sistema. Otras señales generadas por el controlador se conectan a la ALU y a los registros internos del procesador para regular el flujo de información en el procesador y desde los buses de dirección y de datos del sistema.
                    </p>
                </div>
            </div>
        </div>
        <div class="container mx-auto mt-20">
            <h2 class="flex justify-center text-3xl font-bold">3.1.8 Controladores de Video</h2>
            <div class="flex flex-row justify-around mt-5">
                <div class="w-2/5">
                    <img src="src\assets\images\Unidad3\tarjetagrafica.png" alt="" srcset="">
                </div>
                <div class="w-2/5">
                    <p class="text-xl">
                        La tarjeta de video, (también llamada controlador de video), es un componente electrónico requerido para generar una señal de video que se manda a una pantalla de video por medio de un cable. La tarjeta de video se encuentra normalmente en la placa de sistema de la computadora o en una placa de expansión. La tarjeta gráfica reúne toda la información que debe visualizarse en pantalla y actúa como interfaz entre el procesador y el monitor; la información es enviada a éste por la placa luego de haberla recibido a través del sistema de buses.
                    </p>
                </div>               
            </div>
            <div class="flex flex-row justify-center mt-3">
                <p class="w-4/5 text-lg">
                    Una tarjeta gráfica se compone, básicamente, de un controlador de video, de la memoria de pantalla o RAM video, y el generador de caracteres, y en la actualidad también poseen un acelerador de gráficos. El controlador de video va leyendo a intervalos la información almacenada en la RAM video y la transfiere al monitor en forma de señal de video; el número de veces por segundo que el contenido de la RAM video es leído y transmitido al monitor en forma de señal de video se conoce como frecuencia de refresco de la pantalla.
                </p>
            </div>
        </div>
        <div class="container mx-auto mt-20">
            <h2 class="flex justify-center text-4xl font-bold">Gamas</h2>
            <div class="mt-10">
                <h2 class="flex justify-start text-2xl font-semibold">Gama baja</h2>
                <div class="flex flex-row justify-around mt-5">
                    <div class="w-2/5">
                        <h3 class="text-xl font-semibold">Tarjetas</h3>
                        <ul>
                            <li  class="mt-2">
                                Son las más económicas y suelen tener características limitadas.
                            </li>
                            <li  class="mt-2">
                                Son adecuadas para sistemas básicos o de oficina.
                            </li>
                            <li  class="mt-2">
                                Pueden no ser compatibles con hardware de alto rendimiento, como tarjetas gráficas dedicadas de gama alta.
                            </li>
                        </ul>
                    </div>
                    <div class="w-2/5">
                        <h3 class="text-xl font-semibold">Computadoras</h3>
                        <ul>
                            <li  class="mt-2">
                                Están diseñadas para tareas sencillas y no requieren un alto rendimiento.
                            </li>
                            <li  class="mt-2">
                                Son ideales para usuarios con presupuestos ajustados que solo necesitan un equipo básico.
                            </li>
                            <li  class="mt-2">
                                No son adecuadas para juegos intensivos o aplicaciones de uso intensivo del procesador.
                            </li>
                        </ul>
                    </div>
                </div>
                <div class="flex justify-center">
                    <img src="src\assets\images\Unidad3\gamabaja.png" alt="" srcset="">
                </div>
            </div>
            <div class="mt-10">
                <h2 class="flex justify-start text-2xl font-semibold">Gama Media</h2>
                <div class="flex flex-row justify-around mt-5">
                    <div class="w-2/5">
                        <h3 class="text-xl font-semibold">Tarjetas</h3>
                        <ul>
                            <li  class="mt-2">
                                Equilibrio entre precio y rendimiento.
                            </li>
                            <li  class="mt-2">
                                Adecuadas para la mayoría de los usuarios que no necesitan características extremas.
                            </li>
                            <li  class="mt-2">
                                Admiten hardware de gama media, como procesadores de nivel intermedio y tarjetas gráficas.
                            </li>
                            <li  class="mt-2">
                                Tienen conectividad y características suficientes para la mayoría de las necesidades de los usuarios.
                            </li>
                        </ul>
                    </div>
                    <div class="w-2/5">
                        <h3 class="text-xl font-semibold">Computadoras</h3>
                        <ul>
                            <li  class="mt-2">
                                Ideales para tareas cotidianas, como navegación web, procesamiento de documentos, reproducción de contenido multimedia y juegos ligeros.
                            </li>
                            <li  class="mt-2">
                                Suelen tener componentes equilibrados en términos de rendimiento y precio.
                            </li>
                            <li  class="mt-2">
                                A menudo son más asequibles que las de gama alta y ofrecen un buen valor.
                            </li>
                        </ul>
                    </div>
                </div>
                <div class="flex justify-center">
                    <img src="src\assets\images\Unidad3\gamamedia1.png" alt="" srcset="">
                </div>
            </div>
            <div class="mt-10">
                <h2 class="flex justify-start text-2xl font-semibold">Gama Alta</h2>
                <div class="flex flex-row justify-around mt-5">
                    <div class="w-2/5">
                        <h3 class="text-xl font-semibold">Tarjetas</h3>
                        <ul>
                            <li  class="mt-2">
                                Suelen estar equipadas con las últimas tecnologías y características de vanguardia. Pueden admitir múltiples tarjetas gráficas (SLI o CrossFire), múltiples unidades de almacenamiento de alta velocidad y una amplia gama de puertos y conectividad.
                            </li>
                            <li  class="mt-2">
                                Ideales para profesionistas que necesitan un rendimiento extremo.
                            </li>
                            <li  class="mt-2">
                                Ofrecen una alta calidad de construcción y componentes duraderos.
                            </li>
                            
                        </ul>
                    </div>
                    <div class="w-2/5">
                        <h3 class="text-xl font-semibold">Computadoras</h3>
                        <ul>
                            <li  class="mt-2">
                                Procesadores de alto rendimiento, tarjetas gráficas de gama alta, grandes cantidades de RAM y unidades de estado sólido (SSD) de alta capacidad.
                            </li>
                            <li  class="mt-2">
                                Son adecuadas para juegos intensivos, edición de video, diseño gráfico y otras tareas exigentes.
                            </li>
                            <li  class="mt-2">
                                Suelen tener una construcción robusta y una estética premium.
                            </li>
                        </ul>
                    </div>
                </div>
                <div class="flex flex-row justify-around">
                    <img src="src\assets\images\Unidad3\gamaalta1.png" alt="" srcset="">
                    <img src="src\assets\images\Unidad3\gamaalta2.png" alt="" srcset="">
                </div>
            </div>
        </div>
        <div class="container mx-auto mt-20">
            <h2 class="flex justify-center text-3xl font-bold">3.2. APLICACIONES</h2>
            <div class="flex flex-row justify-center mt-5 text-xl">
                <div class="w-4/5">
                    <p class="mt-5">
                        El Chipset es el que hace posible que la placa base funcione como eje del sistema, dando soporte a varios componentes e interconectándolos de forma que se comuniquen entre ellos haciendo uso de diversos buses.
                    </p>
                    <p class="mt-5">
                        Es uno de los pocos elementos que tiene conexión directa con el procesador, gestiona la mayor parte de la información que entra y sale por el bus principal del procesador.
                    </p>
                    <p class="mt-5">
                        En el caso de los computadores PC, es un esquema de arquitectura abierta que establece modularidad: el Chipset debe tener interfaces estándar para los demás dispositivos. 
                    </p>
                </div>
            </div>
        </div>
        <div class="container mx-auto mt-20">
            <h2 class="flex justify-center text-3xl font-bold">3.2.1 Entrada/Salida</h2>
            <div class="flex flex-row justify-center mt-5 text-xl">
                <div class="w-4/5">
                    <p class="mt-5">
                        Los dispositivos periféricos de la computadora tienen un papel que es esencial ya que sin tales dispositivos esta no sería totalmente útil.
                    </p>
                    <p class="mt-5">
                        A través de estos dispositivos podemos introducir a la computadora datos que nos sean útiles para la resolución de algún problema y por consiguiente obtener el resultado de dichas operaciones, es decir, poder comunicarnos con la computadora.
                    </p>
                    <p class="mt-5">
                        La computadora necesita de entradas para poder generar una salida y estas se dan a través de dos dispositivos perifericos ya existentes.
                    </p>
                </div>
            </div>
            <div class="mt-10">
                <div class="flex flex-row justify-around mt-5">
                    <div class="w-2/5">
                        <h3 class="text-2xl font-semibold">Dispositivos Perifericos de Entrada</h3>
                        <p class="text-xl">
                            Aquellos que se utilizan para proporcionar datos y señales a la unidad de procesamiento.Suele hacerse una clasificación de acuerdo a la modalidad de entrada.
                        </p>
                    </div>
                    <div class="w-2/5">
                        <h3 class="text-2xl font-semibold">Dispositivos Perifericos de Salida</h3>
                        <p class="text-xl">Son capaces de reproducir lo que ocurre en la computadora para el interés del usuario. La CPU genera patrones de bits internos y son estos dispositivos los encargados de hacerlos comprensibles para el usuario
                        </p>
                    </div>
                </div>
                <div class="flex flex-row justify-around mt-3">
                    <img src="src\assets\images\Unidad3\perentrada.png" alt="" srcset="">
                    <img src="src\assets\images\Unidad3\persalida.png" alt="" srcset="">
                </div>
            </div>
        </div>
        <div class="container mx-auto mt-20">
            <h2 class="flex justify-center text-3xl font-bold">3.2.2. Almacenamiento</h2>
            <div class="flex flex-row justify-center mt-5 text-2xl">
                <div class="w-4/5">
                    <p class="mt-5">
                        Conforme la tecnología avanza, más datos se van generando, por lo que es necesario contar con un almacenamiento eficiente para poder guardar toda esa información y acceder a ellos.
                    </p>
                    <p class="mt-5">
                        El almacenamiento de datos tiene un proceso a través del uso de la tecnología, ésta se aplica para organizar, distribuir y archivar información con los bytes y los bits que son parte de los sistemas de los que la gente depende día con día, llega a ser tan importante en todos los servicios.
                    </p>
                </div>
            </div>
        </div>
        <div class="container mx-auto mt-20">
            <h2 class="flex justify-center text-3xl font-bold">3.2.3 Fuentes de alimentación</h2>
            <div class="flex flex-row justify-center mt-5 text-2xl">
                <div class="w-3/5">
                    <p class="mt-5">
                        Es un dispositivo que se monta en el gabinete de la computadora y que se encarga básicamente de transformar la corriente alterna de la línea eléctrica comercial en corriente directa; la cuál es utilizada por los elementos electrónicos y eléctricos de la computadora. Otras funciones son las de suministrar la cantidad de corriente y voltaje que los dispositivos requieren así como protegerlos de subidas de problemas en el suministro eléctrico como subidas de voltaje.
                    </p>
                    <p class="mt-5 font-semibold">
                        FUENTE DE PODER AT
                    </p>
                    <p>AT son las siglas de ("Advanced Technology") ó tecnología avanzada, que se refiere a un estándar de dispositivos introducidos al mercado a inicios de los años 80´s que reemplazo a una tecnología denominada XT ("eXtended Technology") ó tecnología extendida.
                    </p>
                    <p class="mt-5 font-semibold">FUENTE DE PODER ATX
                    </p>
                    <p>
                        ATX son las siglas de ("Advanced Technology eXtended") ó tecnología avanzada extendida, que es una segunda generación de fuentes de alimentación introducidas al mercado para computadoras con microprocesador Intel® Pentium MMX, y a partir de ese momento, se extiende su uso. La serie MVP es la familia más versátil de fuentes de alimentación de potencia media que utiliza componentes magnéticos de SMD y convertidos DC-DC internos, combinados con módulos PFC, que pueden ser configurables desde 1 hasta 10 tensiones de salida con valores entre 2 y 60 v. tiene todas las homologaciones de seguridad necesarias y es un producto marcado “CE”.
                    </p>
                </div >
                <div class="w-2/5">
                    <img src="src\assets\images\Unidad3\fuentealim1.png" alt="" srcset="">
                    <img src="src\assets\images\Unidad3\fuentealim2.png" alt="" srcset="">
                </div>
            </div>
        </div>
        <div class="container mx-auto mt-20">
            <h2 class="flex justify-center text-3xl font-bold">3.3. Ambientes de Servicio</h2>
            <div class="flex flex-row justify-around mt-5">
                <div class="w-2/5">
                    <img src="src\assets\images\Unidad3\ambienteservicio.png" alt="" srcset="">
                </div>
                <div class="w-2/5">
                    <p class="text-2xl">
                        El negocio de proveer servicios de datos es mucho más complejo que la forma en la que se dan los tradicionales servicios, los primeros requieren de nuevos conocimientos y modelos de negocio, que con frecuencia se termina involucrando o necesitando la colaboración de terceras empresas. Por lo que se hace necesario que los operadores tradicionales transformen su negocio para ofrecer los servicios de datos con los niveles de servicio que el mercado exige.
                    </p>
                </div>               
            </div>
        </div>
        <div class="container mx-auto mt-20">
            <h2 class="flex justify-center text-3xl font-bold">3.3.1 Negocios</h2>
            <div class="flex flex-row justify-center mt-5 text-2xl">
                <div class="w-4/5">
                    <p class="mt-3  ">
                        Definitivamente, la tecnología en general ha sido la causa principal y la acción más directa para la transformación del trabajo de las organizaciones en la posguerra del siglo XX. Tanto los bienes de capital "duros" (computadores, teléfonos, videos, facsímiles, grabadoras, etc.), como los programas y sistemas de información y comunicación en general, han incrementado enormemente la productividad y eficiencia de las organizaciones. 
                    </p> 
                </div>
            </div>
        </div>
        <div class="container mx-auto mt-20">
            <h2 class="flex justify-center text-3xl font-bold">3.3.2 Industria</h2>
            <div class="flex flex-row justify-center mt-5 text-2xl">
                <div class="w-4/5">
                    <p class="mt-2">
                        La industrialización de los servicios de TI va a redefinir el mercado en términos de como las organizaciones evalúan, compran y seleccionan los servicios y como los vendedores desarrollan y establecen precios de los servicios.
                    </p>
                    <p class="mt-2">
                        Para lograr esta estandarización, se requiere un enfoque hacia las soluciones genéricas y esto debe ser responsabilidad de los proveedores, que deben de desarrollar, operar y administrar el resultado de estos genéricos de TI
                    </p> 
                    <p class="mt-2">
                        Aunque los servicios de TI están en proceso de madurez, la madurez de la industria se ha incrementado en aspectos evidentes, como la forma en que los servicios son implementados y administrados.
                    </p> 
                </div>
            </div>
        </div>
        <div class="container mx-auto mt-20">
            <h2 class="flex justify-center text-3xl font-bold">3.3.3 Comercio Electrónico</h2>
            <div class="flex flex-row justify-center mt-5 text-2xl">
                <div class="w-4/5">
                    <p class="mt-2">
                        El desarrollo de nuevas tecnologías y de telecomunicaciones ha hecho que los intercambios de datos crezcan a niveles extraordinarios, simplificándose cada vez más y creando nuevas formas de comercio, y en este marco se desarrolla el Comercio Electrónico.
                    </p>
                    <p class="mt-2">
                        Se considera “Comercio Electrónico” al conjunto de aquellas transacciones comerciales y financieras realizadas a través del procesamiento y la transmisión de información, incluyendo texto, sonido e imagen.
                    </p>  
                </div>
            </div>
        </div>
    </div>
    </div>
</template>
<script setup></script>
<style></style>