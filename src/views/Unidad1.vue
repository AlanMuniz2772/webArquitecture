<template>
    <div class="bg-gray-300 p-5">
        <div class="container mx-auto rounded-lg bg-white p-8">
            <div class="flex justify-center bg-black p-3 rounded">
                <h1 class="text-center text-4xl text-white font-medium">1. Arquitectura de Computadoras</h1>
            </div>
            <div class="container mx-auto mt-10">
                <h2 class="flex justify-center text-3xl font-bold">1.1.1 Arquitecturas Clásicas</h2>
                <div class="flex flex-row justify-center">
                    <div class="w-1/5">
                        <p>Estas arquitecturas se desarrollaron en las primeras computadoras electromecánicas y de tubos de vacío. Aun son usadas en procesadores empotrados de gama baja y son la base de la mayoría de las arquitecturas modernas.</p>
                    </div>
                    <div class="w-2/5">
                        <img src="src\assets\images\Unidad1\bus.jpg" alt="">
                    </div>
                    <div class="w-1/5">
                        <p>Una desventaja es que el bus de datos y direcciones único se convierte en un cuello de botella por el cual debe pasar toda la información que se lee de o se escribe a la memoria, obligando a que todos los accesos a esta sean secuenciales.</p>
                    </div>
                </div>
            </div>
            <div class="container mx-auto mt-10">
                <h2 class="flex justify-center text-3xl font-bold">1.1.1 Arquitectura Harvard</h2>
                <div class="flex flex-row justify-evenly mt-5">
                    <div class="w-2/5">
                        <p>El programa se almacena como un código numérico en la memoria, el hecho de tener un bus separado para el programa y otro para los datos permite que se lea el código de operación de una instrucción, al mismo tiempo se lee de la memoria de datos los operados de la instrucción previa.</p>
                    </div>
                    <div class="w-2/5">
                        <img src="src\assets\images\Unidad1\bus2.jpg" alt="">
                    </div>
                </div>
            </div>
            <div class="container mx-auto mt-10">
                <h2 class="flex justify-center text-3xl font-bold">1.1.2 Arquitecturas Segmentadas</h2>
                <div class="flex flex-row justify-evenly mt-5">
                    <div class="w-2/5">
                        <img src="src\assets\images\Unidad1\bus3.jpg" alt="">
                    </div>
                    <div class="w-2/5">
                        <p>Buscan mejorar el desempeño realizando paralelamente varias etapas del ciclo de instrucción al mismo tiempo. El procesador se divide en varias unidades funcionales independientes y se dividen entre ellas el procesamiento de las instrucciones.</p>
                    </div>
                </div>
            </div>
            <div class="container mx-auto mt-10">
                <h2 class="flex justify-center text-3xl font-bold">1.1.3 Arquitecturas de Multi-procesamiento.</h2>
                <div class="flex flex-row justify-center mt-5 text-xl">
                    <div class="w-4/5">
                        <p>Cuando se desea incrementar el desempeño más alla de lo que permite la técnica de segmentación del cauce, se requiere utilizar más de un procesador para la ejecución del programa de aplicación.</p>
                        <p class="mt-5">Las CPU multiprocesamiento se clasifican en: SISO, SIMO, MISO, MIMO</p>
                        
                    </div>
                    <div class="w-4/5">
                        <img class="mt-5" src="src\assets\images\Unidad1\bus4.jpg" alt="">
                    </div>
                </div>
            </div>
            <div class="container mx-auto mt-10">
                <h2 class="flex justify-center text-3xl font-bold">1.2 Unidad Central de Procesamiento</h2>
                <div class="flex flex-row justify-evenly mt-5">
                    <div class="w-2/5 text-2    xl">
                        <p>Es un un componente básico de todo dispositivo que procesa datos y realiza cálculos matemáticos-informáticos. El CPU es la pieza fundamental de todo dispositivo, es considerado el cerebro de un sistema. En primer lugar, es el encargado de recibir e interpretar datos y ejecutar las secuencias de instrucciones a realizar por cada programa valiéndose de operaciones aritméticas y matemáticas.</p>
                    </div>
                    <div class="w-2/5">
                        <img src="src\assets\images\Unidad1\cpu.jpeg" alt="">
                    </div>
                </div>                    
            </div>
            <div class="container mx-auto mt-10">
                <h2 class="flex justify-center text-3xl font-bold">1.2.1.1 Arquitectura</h2>
                <div class="flex flex-row justify-evenly mt-5">
                    <div class="w-2/5">
                        <img src="src\assets\images\Unidad1\bua.jpg" alt="">
                    </div>
                    <div class="w-2/5 text-2xl">
                        <p>Hoy en día, en la actualidad han aparecido arquitecturas híbridas entre la Von Newmann y la Harvard, buscando conservar la flexibilidad, pero optimizando el rendimiento. Los programas cada vez más grandes y complejos demandan mayor velocidad en el procesamiento de información como lo que implica la elección de microprocesadores más rápidos y eficientes. Para asignarle un diseño a un microprocesador se debe identificar cuál será su función principal.</p>
                    </div>
                </div>
            </div>
            <div class="container mx-auto mt-10">
                <h2 class="flex justify-center text-3xl font-bold">1.2.1.2 Tipos</h2>
                <div class="flex flex-row justify-center mt-5 text-2xl">
                    <div class="w-4/5">
                        <p class="mt-2">
                            Los diseñadores de hardware inventan numerosas tecnologías & herramientas para implementar la arquitectura deseada con el fin de satisfacer estas necesidades. La arquitectura de hardware puede implementarse para ser específica de hardware o específica de software, pero según la aplicación se utilizan ambas en la cantidad requerida. En lo que respecta al hardware del procesador, existen dos tipos de conceptos para implementar la arquitectura de hardware del procesador. El primero es RISC y el otro es CISC.
                        </p>
                    </div>
                </div>
            </div>
            <div class="container mx-auto mt-10">
                <h2 class="flex justify-center text-3xl font-bold">1.2.1.3 Características</h2>
                <div class="flex flex-row justify-center mt-5 text-xl">
                    <div class="w-4/5">
                        <p>Arquitectura CISC: El enfoque CISC intenta minimizar el número de instrucciones por programa, sacrificando el número de ciclos por instrucción. Los ordenadores basados en la arquitectura CISC están diseñados para disminuir el coste de la memoria</p>
                    </div>
                    <div class="w-4/5">
                        <p>Arquitectura RISC: se utiliza en dispositivos portátiles debido a su eficiencia energética. RISC hace lo contrario, reducir los ciclos por instrucción a costa del número de instrucciones por programa El pipelining es una de las características únicas de RISC.</p>
                    </div>
                </div>
                <div class="flex flex-row justify-center mt-5 text-xl">
                    <div class="w-4/5">
                        <img src="src\assets\images\Unidad1\cisc.jpg" alt="">
                    </div>
                    <div class="w-4/5">
                        <img src="src\assets\images\Unidad1\risc.jpg" alt="">
                    </div>
                </div>
            </div>
            <div class="container mx-auto mt-10">
                <h2 class="flex justify-center text-3xl font-bold">1.2.1.4 Funcionamiento</h2>
                <div class="flex flex-row justify-center mt-5 text-xl">
                    <div class="w-4/5">
                        <p class="mt-5">
                            ALU: Es un circuito digital que realiza como su nombre lo indica las operaciones aritméticas y lógicas entre los datos de un circuito; suma, resta, divide y multiplica, así como establece comparaciones lógicas a través de las condicionales lógicas " si "," no "," o ".
                        </p>
                        <p class="mt-5">
                            Unidad de control: Circuito secuencial que implementa el denominado "ciclo de instrucción", permitiendo acceder a la siguiente instrucción de un programa, leer sus operandos, efectuar la operación indicada en la ALU y guardar el resultado de la misma. Una de sus funciones es la decodificación de instrucciones.
                        </p>
                        <p class="mt-5">
                            Registros: Los registros que encuentran dentro de cada procesador su función principal es almacenar los valores de cada uno de los datos, comandos, instrucciones o estados binarios que son de los que ordenan qué datos deben procesarse, así como la forma en la que se debe procesar o realizar.
                        </p>
                        <p class="mt-5">
                            Buses: Consta de un camino que permite comunicar selectivamente un cierto número de componentes o dispositivos, de acuerdo a unas ciertas reglas o normas de conexión.
                        </p>
                    </div>
                    <div class="w-3/5">
                        <img src="src\assets\images\Unidad1\estructuradebus.jpg" class="w-full" alt="">
                    </div>
                </div>
            </div>
            <div class="container mx-auto mt-10">
                <h2 class="flex justify-center text-3xl font-bold">1.2.2 Memoria</h2>
                <h3 class="flex justify-center text-3xl font-bold">1.2.2.1 Conceptos básicos de manejo de memoria</h3>
                <div class="flex flex-row justify-center mt-5">
                    <div class="w-2/5 text-xl">
                        <p class="mt-5">
                            Memoria Física: Es la memoria real instalada en el hardware de la computadora. Incluye componentes como la memoria RAM y la memoria caché.
                        </p>
                        <p class="mt-5">
                            Memoria Virtual: Es una extensión de la memoria RAM que utiliza espacio en el disco duro. Permite que las aplicaciones utilicen más memoria de la que está físicamente presente.
                        </p>
                        <p class="mt-5">
                            Administrador de memoria: Es el componente que se encarga de gestionar el uso de la memoria. Se asegura de que los programas reciban la cantidad adecuada de memoria.
                        </p>
                        <p class="mt-5">
                            Asignación de Memoria: Es el proceso de reservar una porción de la memoria para que un programa pueda utilizarla. Puede realizarse durante el inicio del programa o durante la ejecución .
                        </p>
                        <p class="mt-5">
                            Gestión de Memoria: Involucra llevar un registro de qué partes de la memoria están en uso y cuáles están libres. Esto incluye la asignación, liberación y reubicación de bloques de memoria.
                        </p>
                        <p class="mt-5">
                            Thrashing: Ocurre cuando un sistema está ocupado en gran medida en intercambiar datos entre la memoria principal y la virtual debido a la falta de suficiente memoria física.
                        </p>
                    </div>
                    <div class="w-2/5">
                        <img src="src\assets\images\Unidad1\ram.jpeg" class="w-full">
                    </div>
                </div>
            </div>
            <div class="container mx-auto mt-10">
                <h2 class="flex justify-center text-3xl font-bold">1.2.2.2 Memoria principal semiconductora</h2>
                <div class="flex flex-row justify-center mt-5 text-xl">
                    <div class="w-4/5">
                        <p class="mt-5">
                            La memoria principal semiconductora, es una categoría de memoria de computadora que utiliza dispositivos semiconductores para almacenar datos de forma electrónica. La memoria principal semiconductora utiliza circuitos y transistores para retener y acceder a la información de manera mucho más rápida.
                        </p>
                        <p class="mt-5">
                            Tipos: Memoria RAM, Memoria Caché, Memoria VRAM y Memoria de estado sólido
                        </p>
                    </div>
                </div>
            </div>
            <div class="container mx-auto mt-10">
                <h2 class="flex justify-center text-3xl font-bold">1.2.2.3 Memoria Caché</h2>
                <div class="flex flex-row justify-center mt-5 text-xl">
                    <div class="w-4/5">
                        <p class="mt-5">
                            Es una forma de memoria de alta velocidad que se encuentra entre la memoria RAM (principal) y la unidad central de procesamiento (CPU) en un sistema informático. Su objetivo principal es mejorar el rendimiento al almacenar temporalmente datos y programas que la CPU utiliza con frecuencia. La caché actúa como un búfer rápido que permite a la CPU acceder rápidamente a los datos que necesita.
                        </p>
                    </div>
                </div>
            </div>
            <div class="container mx-auto mt-10">
                <h2 class="flex justify-center text-3xl font-bold">1.2.3 Dispositivos Entrada/Salida</h2>
                <div class="flex flex-row justify-center mt-5 text-xl">
                    <div class="w-4/5">
                        <p class="mt-5">
                            Son componentes que permiten la comunicación entre una computadora y el mundo exterior. Estos dispositivos se utilizan para ingresar datos a la computadora (datos de entrada) o enviar datos desde la computadora (datos de salida).
                        </p>
                    </div>
                </div>
            </div>
            <div class="container mx-auto mt-10">
                <h2 class="flex justify-center text-3xl font-bold">1.2.3.1 Modulos E/S</h2>
                <div class="flex flex-row justify-center mt-5 text-xl">
                    <div class="w-4/5">
                        <p class="mt-5">
                            Componentes esenciales en la arquitectura de una computadora que facilitan la comunicación entre la Unidad Central de Procesamiento (CPU) y los dispositivos de entrada/salida (E/S). Su función principal es gestionar la transferencia de datos entre la CPU y los dispositivos externos, garantizando que la comunicación sea eficiente y confiable.
                        </p>
                    </div>
                </div>
            </div>
            <div class="container mx-auto mt-10">
                <h2 class="flex justify-center text-3xl font-bold">1.2.3.2 E/S programada</h2>
                <div class="flex flex-row justify-center mt-5 text-xl">
                    <div class="w-4/5">
                        <p class="mt-5">
                            La E/S (Entrada/Salida) programada se refiere a un enfoque en la informática donde el programa controla directamente las operaciones de entrada y salida de datos hacia y desde los dispositivos periféricos. Esto significa que el programa es responsable de leer y escribir datos en los dispositivos de manera manual en lugar de dejar que el sistema operativo gestione automáticamente estas operaciones.
                        </p>
                    </div>
                </div>
            </div>
            <div class="container mx-auto mt-10">
                <h2 class="flex justify-center text-3xl font-bold">1.2.3.3 E/S mediante interruptores</h2>
                <div class="flex flex-row justify-center mt-5 text-xl">
                    <div class="w-4/5">
                        <p class="mt-5">
                            Es un método de gestión de dispositivos de entrada/salida en una computadora que permite que los dispositivos de E/S interrumpan la CPU cuando están listos para transmitir datos o cuando se produce una condición especial.
                        </p>
                        <p class="mt-5">
                            ¿Cuándo se utiliza? Se utiliza frecuentemente en sistemas multitarea,operaciones concurrentes y respuesta rápida
                        </p>
                    </div>
                </div>
            </div>
            <div class="container mx-auto mt-10">
                <h2 class="flex justify-center text-3xl font-bold">1.2.3.4 Acceso directo a la memoria  </h2>
                <div class="flex flex-row justify-evenly mt-5">
                    <div class="w-2/5">
                        <img src="src\assets\images\Unidad1\accesomemoria.jpg" alt="">
                    </div>
                    <div class="w-2/5 text-2xl">
                        <p>
                            Es una técnica utilizada en arquitectura de computadoras que permite a dispositivos de entrada/salida (E/S) transferir datos directamente entre ellos y la memoria principal de la computadora sin la intervención constante de la Unidad Central de Procesamiento (CPU). Esta técnica es especialmente útil para acelerar las operaciones de E/S y liberar a la CPU para realizar otras tareas.
                        </p>
                    </div>
                </div>
            </div>
            <div class="container mx-auto mt-10">
                <h2 class="flex justify-center text-3xl font-bold">1.2.3.5 Canales y procesadores E/S</h2>
                <div class="flex flex-row justify-center mt-5 text-xl">
                    <div class="w-4/5">
                        <p class="mt-5">
                            Son componentes fundamentales en la arquitectura de computadoras que se utilizan para gestionar múltiples dispositivos de entrada/salida (E/S) de manera eficiente y coordinada. Estos componentes permiten que la computadora maneje un gran número de operaciones de E/S de manera concurrente sin sobrecargar la Unidad Central de Procesamiento (CPU).
                        </p>
                    </div>
                </div>
            </div>
            <div class="container mx-auto mt-10">
                <h2 class="flex justify-center text-3xl font-bold">1.2.4 Buses</h2>
                <h3 class="flex justify-center text-3xl font-bold">1.2.4.1 Bus local</h3>
                <div class="flex flex-row justify-center mt-5 text-xl">
                    <div class="w-4/5">
                        <p class="mt-5">
                            Un bus local es un bus informático que se conecta directamente, o casi directamente, desde la unidad central de procesamiento (CPU) a una o más ranuras en el bus de expansión . La importancia de la conexión directa a la CPU es evitar el cuello de botella creado por el bus de expansión, proporcionando así un rendimiento rápido.
                        </p>
                    </div>
                </div>
            </div>
            <div class="container mx-auto mt-10">
                <h3 class="flex justify-center text-3xl font-bold">1.2.4.2 Bus de datos</h3>
                <div class="flex flex-row justify-center mt-5 text-xl">
                    <div class="w-4/5">
                        <p class="mt-5">
                            Bus de datos es un mecanismo de comunicación que une los dispositivos electrónicos en una computadora. Esta conexión les permite intercambiar información entre ellos, permitiendo así al procesador realizar operaciones y almacenar y recuperar datos.
                        </p>
                    </div>
                </div>
            </div>
            <div class="container mx-auto mt-10">
                <h3 class="flex justify-center text-3xl font-bold">1.2.4.3 Bus de direcciones</h3>
                <div class="flex flex-row justify-center mt-5 text-xl">
                    <div class="w-4/5">
                        <p class="mt-5">
                            El bus de direcciones es el canal del microprocesador, que es independiente del bus de datos y que es donde se establece la dirección de memoria del dato que se está transmitiendo.
                        </p>
                    </div>
                </div>
            </div>
            <div class="container mx-auto mt-10">
                <h3 class="flex justify-center text-3xl font-bold">1.2.4.4 Bus de control</h3>
                <div class="flex flex-row justify-center mt-5 text-xl">
                    <div class="w-4/5">
                        <p class="mt-5">
                            Es un canal de comunicación que se utiliza para conectar varios componentes de un sistema. El bus de control permite a los dispositivos comunicarse, compartir información y recibir instrucciones.
                        </p>
                    </div>
                </div>
            </div>
            <div class="container mx-auto mt-10">
                <h3 class="flex justify-center text-3xl font-bold">1.2.4.5 Normalización de Buses</h3>
                <div class="mt-5 text-xl w-full flex justify-center">
                    <div class="w-4/5">
                        <p class="mt-5">
                            Para facilitar la interacción entre componentes de distintos fabricantes los buses se han normalizado y siguen un estándar.
                        </p>
                        <p class="mt-5">
                            Estándar: Protocolos de transmisión de datos. QR Velocidades y temporización de las transferencias. QR Anchuras de los sub-buses. Sistema físico de conexión.
                        </p>
                        <p class="mt-5">
                            Nivel mecánico: Tipo de soporte, el número de hilos del bus, el tipo de conector, etc.
                        </p>
                        <p class="mt-5">
                            Nivel eléctrico: Se define la forma en la que los distintos dispositivos deben conectarse eléctricamente.
                        </p>
                        <p class="mt-5">
                            Nivel lógico: Establece las equivalencias entre los valores eléctricos de las señales y sus valores lógicos.
                        </p>
                    </div>
                    <div class="w-4/5">
                        <img src="src\assets\images\Unidad1\normalizacionbus.jpg" alt="">
                    </div>
                </div>
            </div>
            <div class="container mx-auto mt-10">
                <h2 class="flex justify-center text-3xl font-bold">1.2.5 Direccionamiento</h2>
                <h3 class="flex justify-center text-3xl font-bold">1.2.5.1 Modo real</h3>
                <div class="flex flex-row justify-center mt-5 text-xl">
                    <div class="w-4/5">
                        <p class="mt-5">
                            Este es un modo de operación específico en las CPUs x86 que se utiliza en el proceso de inicio de la computadora y la ejecución de sistemas operativos antiguos, como MS-DOS. La arquitectura 286 introdujo el modo protegido, permitiendo, entre otras cosas, la protección de la memoria a nivel de hardware.
                        </p>
                    </div>
                </div>
            </div>
            <div class="container mx-auto mt-10">
                <h2 class="flex justify-center text-3xl font-bold">1.2.5.2 Modo protegido</h2>
                <div class="flex flex-row justify-center mt-5 text-xl">
                    <div class="w-4/5">
                        <p class="mt-5">
                            El modo protegido tiene un número de nuevas características diseñadas para mejorar las multitareas y la estabilidad del sistema, como protección de memoria, y soporte de hardware para memoria virtual así como de conmutación de tareas. La mayoría de los sistemas operativos x86 modernos corren en modo protegido.
                        </p>
                    </div>
                </div>
            </div>
            <div class="container mx-auto mt-10">
                <h2 class="flex justify-center text-3xl font-bold">1.2.5.3 Modo virtual</h2>
                <div class="flex flex-row justify-center mt-5 text-xl">
                    <div class="w-4/5">
                        <p class="mt-5">
                            El modo virtual permite la ejecución de aplicaciones de modo real que violan las reglas bajo control de un sistema operativo de modo protegido.
                        </p>
                    </div>
                    <div class="w-4/5 flex justify-center">
                        <img src="src\assets\images\Unidad1\modovirtual.jpg" alt="">
                    </div>
                </div>
            </div>
            <div class="container mx-auto mt-10">
                <h2 class="flex justify-center text-3xl font-bold">1.2.6 Temporización</h2>
                <h3 class="flex justify-center text-3xl font-bold">1.2.6.1 Reloj del sistema</h3>
                <div class="flex flex-row justify-center mt-5 text-xl">
                    <div class="w-4/5">
                        <p class="mt-5">
                            El reloj de una computadora se utiliza para dos funciones principales:
                        </p>
                        <p class="mt-5">
                            1. Para sincronizar las diversas operaciones que realizan los diferentes subcomponentes del sistema informático.
                        </p>
                        <p class="mt-5">
                            2. Para saber la hora. El reloj físicamente es un circuito integrado que emite una cantidad de pulsos por segundo, de manera constante. Al número de pulsos que emite el reloj cada segundo se llama Frecuencia del Reloj.
                        </p>
                    </div>
                </div>
            </div>
            <div class="container mx-auto mt-10">
                <h2 class="flex justify-center text-3xl font-bold">1.2.6.2 Reset del sistema</h2>
                <div class="flex flex-row justify-center mt-5 text-xl">
                    <div class="w-4/5">
                        <p class="mt-5">
                            Se conoce como reset a la puesta en condiciones iniciales de un sistema. Este puede ser mecánico, electrónico o de otro tipo.
                        </p>
                    </div>
                </div>
            </div>
            <div class="container mx-auto mt-10">
                <h2 class="flex justify-center text-3xl font-bold">1.2.6.3 Estado de espera</h2>
                <div class="flex flex-row justify-center mt-5 text-xl">
                    <div class="w-4/5">
                        <p class="mt-5">
                            Un estado de espera es una situación en la que el procesador de la computadora experimenta un retraso, principalmente cuando accede a la memoria externa o a un dispositivo que responde lentamente.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>

</script>

<style scoped>

</style>