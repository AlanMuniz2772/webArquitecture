<template>
    <div class="bg-gray-300 p-5">
        <div class="container mx-auto rounded-lg bg-white p-5">
            <div class="flex justify-center bg-black p-3 rounded">
                <h1 class="text-center text-4xl text-white font-medium">4. ASPECTOS BASICOS DE LA COMPUTACION PARALELA</h1>
            </div>
            <div class="container mx-auto mt-5">
                <div class="flex flex-row justify-evenly mt-3">
                    <div class="w-2/5 text-xl">
                        <p class="mt-2">La computación paralela es una forma de cómputo en la que muchas
                        instrucciones se ejecutan simultáneamente, operando sobre el
                        principio de problemas grandes, a menudo se pueden dividir en unos más pequeños, que luego son resueltos simultáneamente (en
                        paralelo).
                        </p>
                        <p class="mt-2">
                            Los programas informáticos paralelos son más difíciles de escribir que
                            los secuenciales, porque la concurrencia introduce nuevos tipos de
                            errores de software, siendo las condiciones de carrera los más
                            comunes.
                        </p>
                    </div>
                    <div class="w-2/5">
                        <h3>Hay varias formas diferentes de computación paralela:</h3>
                        <ul class="mt-3">
                            <li class="mt-2"><p class="font-bold">Paralelismo a nivel de bit:</p> Se refiere a aumentar el tamaño de la palabra
                            del procesador para reducir el número de instrucciones que debe
                            ejecutar el procesador en variables cuyos tamaños sean mayores a la
                            longitud de la cadena
                            </li>
                            <li class="mt-2"><p class="font-bold">Paralelismo a nivel de instrucción:</p> se refiere a la capacidad de los
                            procesadores para reordenar y combinar grupos de instrucciones que
                            luego son ejecutadas en paralelo sin cambiar el resultado del programa.
                            </li>
                            <li class="mt-2"><p class="font-bold">Paralelismo de datos:</p> se refiere a la capacidad de los procesadores para
                            procesar múltiples datos al mismo tiempo.
                            </li>
                            <li class="mt-2"><p class="font-bold">Paralelismo de tareas:</p> se refiere a la capacidad de los procesadores
                            para realizar múltiples tareas al mismo tiempo</li>
                        </ul>
                    </div>
                </div>
            </div>
            <div class="container mx-auto mt-10">
                <h2 class="flex justify-center text-3xl font-bold">Modelos de consistencia</h2>
                <div class="mt-10">
                    <div class="flex flex-row justify-around mt-5">
                        <div class="w-2/5">
                            <h3 class="text-xl font-semibold">Single Instruction, Single Data (SISD)</h3>
                            <p>Hay un elemento de procesamiento, que tiene acceso a un
                            único programa y a un almacenamiento de datos. En cada
                            paso, el elemento de procesamiento carga una instrucción y la
                            información correspondiente y ejecuta esta instrucción. El
                            resultado es guardado de vuelta en el almacenamiento de
                            datos. Luego SISD es el computador secuencial convencional,
                            de acuerdo al modelo de von Neumann.
                            </p>
                        </div>
                        <div class="w-2/5">
                            <h3 class="text-xl font-semibold">Multiple Instruction, Single Data (MISD)</h3>
                            <p>Hay múltiples elementos de procesamiento, en el que cada cual
                            tiene memoria privada del programa, pero se tiene acceso
                            común a una memoria global de información. En cada paso,
                            cada elemento de procesamiento de obtiene la misma
                            información de la memoria y carga una instrucción de la memoria privada del programa. Este modelo es muy restrictivo
                            y no se ha usado en ningún computador de tipo comercial.
                            </p>
                        </div>
                    </div>
                    <div class="flex flex-row justify-around mt-5">
                        <div class="w-2/5">
                            <h3 class="text-xl font-semibold">Single Instruction, Multiple Data (SIMD)</h3>
                            <p>Hay múltiples elementos de procesamiento, en el que
                            cada cual tiene acceso privado a la memoria de
                            información (compartida o distribuida). Sin embargo, hay una sola memoria de programa, desde la cual una unidad de procesamiento especial obtiene y despacha
                            instrucciones.
                            </p>
                        </div>
                        <div class="w-2/5">
                            <h3 class="text-xl font-semibold">Multiple Instruction, Multiple Data (MIMD)</h3>
                            <p>Hay múltiples unidades de procesamiento, en la cual
                            cada una tiene tanto instrucciones como información
                            separada. Cada elemento ejecuta una instrucción distinta en un elemento de información distinto. Los
                            elementos de proceso trabajan asíncronamente. Los
                            clusters son ejemplo son ejemplos del modelo MIMD.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <div class="container mx-auto mt-10">
                <h2 class="flex justify-center text-3xl font-bold">4.2 TIPOS DE COMPUTACIÓN PARALELA</h2>
                <div class="mt-10">
                    <div class="flex flex-row justify-around mt-5">
                        <div class="w-2/5">
                            <h3 class="text-xl font-semibold">Paralelismo a nivel de bit</h3>
                            <p>Históricamente, los microprocesadores de 4 bits fueron sustituidos por unos de 8 bits, luego de 16 bits y 32 bits, esta tendencia general
                            llegó a su fin con la introducción de procesadores de 64 bits, lo que ha
                            sido un estándar en la computación de propósito general durante la última década.
                            </p>
                        </div>
                        <div class="w-2/5">
                            <h3 class="text-xl font-semibold">Paralelismo a nivel de instrucción</h3>
                            <p>Los procesadores modernos tienen ''pipeline'' de instrucciones de
                            varias etapas. Cada etapa en el pipeline corresponde a una acción diferente que el procesador realiza en la instrucción correspondiente
                            a la etapa; un procesador con un pipeline de N etapas puede tener hasta n instrucciones diferentes en diferentes etapas de finalización
                            </p>
                        </div>
                    </div>
                    <div class="flex flex-row justify-around mt-5">
                        <div class="w-2/5">
                            <h3 class="text-xl font-semibold">Paralelismo de datos</h3>
                            <p>El paralelismo de datos es el paralelismo inherente en programas con
                            ciclos, que se centra en la distribución de los datos entre los diferentes nodos computacionales que deben tratarse en paralelo. Muchas de las aplicaciones científicas y de ingeniería muestran paralelismo de datos
                            </p>
                        </div>
                        <div class="w-2/5">
                            <h3 class="text-xl font-semibold">Paralelismo de tareas</h3>
                            <p>Es un paradigma de la programación concurrente que consiste en
                            asignar distintas tareas a cada uno de los procesadores de un sistema de cómputo. En consecuencia, cada procesador efectuará su propia
                            secuencia de operaciones. En su modo más general, el paralelismo de
                            tareas se representa mediante un grafo de tareas, el cual es
                            subdividido en subgrafos que son luego asignados a diferentes procesadores.

                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <div class="container mx-auto mt-10">
                <h2 class="flex justify-center text-3xl font-bold">4.2.1 CLASIFICACIÓN</h2>
                <div class="flex flex-row justify-center mt-5 text-2xl">
                    <div class="w-4/5">
                        <p class="mt-2">
                            Las computadoras paralelas se pueden clasificar de acuerdo con el nivel
                            en el que el hardware soporta paralelismo. Esta clasificación es análoga
                            a la distancia entre los nodos básicos de cómputo.
                        </p>
                        <p class="mt-2">
                            <p class="font-bold">Computación multinúcleo:</p> un procesador multinúcleo es un
                            procesador que incluye múltiples unidades de ejecución (núcleos) en el mismo chip.
                        </p> 
                        <p class="mt-2">
                            <p class="font-bold">Multiprocesamiento simétrico:</p> un multiprocesador simétrico (SMP) es
                            un sistema computacional con múltiples procesadores idénticos que
                            comparten memoria y se conectan a través de un bus.
                        </p>
                        <p class="mt-2">
                            <p class="font-bold">Computación en clúster:</p> un clúster es un grupo de ordenadores
                            débilmente acoplados que trabajan en estrecha colaboración, de modo
                            que en algunos aspectos pueden considerarse como un solo equipo.
                        </p>
                        <p class="mt-2">
                            <p class="font-bold">Procesamiento paralelo masivo:</p> tienden a ser más grandes que los
                            clústeres, con «mucho más» de 100 procesadores.
                        </p>
                        <p class="mt-2">
                            <p class="font-bold">Computación distribuida:</p> la computación distribuida es la forma más
                            distribuida de la computación paralela. Se hace uso de ordenadores
                            que se comunican a través de la Internet para trabajar en un problema
                            dado.
                        </p>
                        <p class="mt-2">
                            <p class="font-bold">Circuitos integrados de aplicación específica:</p> debido a que un ASIC
                            (por definición) es específico para una aplicación dada, puede ser
                            completamente optimizado para esa aplicación.
                        </p>
                        <p class="mt-2">
                            <p class="font-bold">Procesadores vectoriales:</p> pueden ejecutar la misma instrucción en
                            grandes conjuntos de datos.
                        </p>
                    </div>
                </div>
            </div>
            <div class="container mx-auto mt-10">
                <h2 class="flex justify-center text-3xl font-bold">4.2.2 ARQUITECTURA DE COMPUTADORAS SECUENCIALES</h2>
                <div class="flex flex-row justify-around mt-5">
                    <div class="w-2/5">
                        <h3 class="text-xl font-semibold">Circuitos secuenciales asíncronos</h3>
                        <p>En circuitos secuenciales asíncronos los cambios de estados ocurren
                        al ritmo natural asociado a las compuertas lógicas utilizadas en su
                        implementación, lo que produce retardos en cascadas entre los
                        biestables del circuito, es decir no utilizan elementos especiales de memoria.
                        </p>
                    </div>
                    <div class="w-2/5">
                        <h3 class="text-xl font-semibold">Circuitos secuenciales síncronos</h3>
                        <p>Los circuitos secuenciales síncronos solo permiten un cambio de
                        estado en los instantes marcados o autorizados por una señal de
                        sincronismo de tipo oscilatorio denominada reloj (cristal o circuito
                        capaz de producir una serie de pulsos regulares en el tiempo).
                        </p>
                    </div>
                </div>
            </div>
            <div class="container mx-auto mt-10">
                <h2 class="flex justify-center text-3xl font-bold">4.2.3 ORGANIZACIÓN DE DIRECCIONES DE MEMORIA</h2>
                <div class="flex flex-row justify-around mt-5">
                    <div class="w-4/5">
                        <p class="text-lg">La memoria principal en un ordenador en paralelo puede ser
                        compartida —compartida entre todos los elementos de
                        procesamiento en un único espacio de direcciones—, o distribuida —
                        cada elemento de procesamiento tiene su propio espacio local de
                        direcciones—.El término memoria distribuida se refiere al hecho de
                        que la memoria se distribuye lógicamente, pero a menudo implica
                        que también se distribuyen físicamente.
                        </p>
                    </div>
                </div>
                <div class="flex flex-row justify-around mt-5">
                    <img src="src\assets\images\Unidad4\memoriaram.jpg" alt="">
                </div>
            </div>
            <div class="container mx-auto mt-10">
                <h2 class="flex justify-center text-3xl font-bold">4.3 SISTEMAS DE MEMORIA COMPARTIDA</h2>
                <div class="flex flex-row justify-around mt-5">
                    <div class="w-4/5">
                        <p class="text-lg">Los sistemas de memoria compartida son aquellos
                        en los que múltiples unidades de procesamiento
                        comparten un espacio de direcciones de memoria
                        común. Esto permite a los procesos comunicarse y
                        compartir datos a través de la memoria compartida,
                        lo que simplifica la programación paralela.
                        </p>
                    </div>
                </div>
            </div>
            <div class="container mx-auto mt-10">
                <h2 class="flex justify-center text-3xl font-bold">4.3.1 Redes de Interconexión Dinámicas ó Indirectas</h2>
                <div class="flex flex-row justify-around mt-5">
                    <div class="w-4/5">
                        <p class="text-lg">En el contexto de la arquitectura de computadoras, las redes de interconexión
                        dinámicas o indirectas se refieren a los esquemas utilizados para conectar y
                        comunicar los componentes de un sistema computacional, como
                        procesadores, memoria y dispositivos de entrada/salida. Estas redes
                        proporcionan una forma flexible y eficiente de transferir datos entre los
                        distintos elementos del sistema.
                        </p>
                        <p class="text-lg">Un ejemplo común de una red de interconexión dinámica en arquitectura de
                        computadoras es el sistema de interconexión utilizado en los
                        supercomputadores. Estos sistemas están diseñados para realizar tareas
                        computacionalmente intensivas y requieren una alta capacidad de
                        procesamiento y comunicación entre los nodos
                        </p>
                        <p class="text-lg">En lugar de utilizar una arquitectura de bus tradicional, donde todos los
                        componentes están conectados directamente a un único bus compartido, los
                        supercomputadores suelen emplear arquitecturas de red más complejas. Estas
                        arquitecturas utilizan enlaces de comunicación de alta velocidad, como redes
                        toroidales, redes en malla o redes hipercúbicas, para interconectar los nodos de
                        procesamiento y almacenamiento.
                        </p>
                        <p class="text-lg">En una red de interconexión dinámica, los nodos pueden comunicarse
                        indirectamente mediante saltos a través de otros nodos intermedios. Esto
                        permite una comunicación eficiente y escalable en sistemas con un gran
                        número de componentes. Además, estas redes suelen ser adaptables, lo que
                        significa que pueden reconfigurarse dinámicamente para adaptarse a cambios
                        en la carga de trabajo o a fallos en los nodos.
                        </p>
                    </div>
                </div>
            </div>
            <div class="container mx-auto mt-10">
                <h2 class="flex justify-center text-3xl font-bold">4.3.1.1 Redes de Medio Compartido</h2>
                <div class="flex mt-5">
                    <p class="text-lg">
                        Es un tipo de arquitectura de red en la que múltiples dispositivos comparten un
                        medio de comunicación común para enviar y recibir datos. En esta arquitectura,
                        los dispositivos se conectan físicamente al mismo medio de transmisión, como
                        un cable o una línea de transmisión, y deben coordinarse para acceder al medio y
                        transmitir sus datos.
                    </p>
                    <p class="text-lg">
                        Un ejemplo común de una red de medio compartido en arquitectura de
                        computadoras es Ethernet, que utiliza un cable compartido o un segmento de red
                        para conectar múltiples dispositivos, como computadoras, servidores o
                        impresoras. En Ethernet, los dispositivos utilizan un protocolo llamado CSMA/CD
                        (Acceso Múltiple por Detección de Portadora con Detección de Colisiones) para
                        gestionar el acceso al medio compartido.
                    </p>
                </div>
            </div>
            <div class="container mx-auto mt-10">
                <h2 class="flex justify-center text-3xl font-bold">Protocolo de transferencia de ciclo partido</h2>
                <div class="flex justify-around mt-5">
                    <p class="text-lg w-2/5">
                        La operación de lectura se divide en dos
                        transacciones no continuas de acceso
                        al bus. La primera es de petición de
                        lectura que realiza el máster
                        (procesador) sobre el slave (memoria).
                        Una vez realizada la petición el máster
                        abandona el bus. Cuando el slave
                        dispone del dato leído, inicia un ciclo de
                        bus actuando como máster para enviar
                        el dato al antiguo máster, que ahora
                        actúa como slave.
                    </p>
                    <img src="src\assets\images\Unidad4\ciclocompartido.jpeg" class="w-2/5" alt="">
                </div>
            </div>
            <div class="container mx-auto mt-10">
                <h2 class="flex justify-center text-3xl font-bold">4.3.1.2 Redes conmutadas</h2>
                <div class="flex flex-row justify-center mt-5 text-2xl">
                    <div class="w-4/5">
                        <div>
                            <p>CONEXIÓN POR CONMUTADORES CROSSBAR</p>
                            <p>Cada procesador (Pi) y cada módulo de memoria (Mi) tienen su propio bus. Existe un
                            conmutador (S) en los puntos de intersección que permite conectar un bus de memoria
                            con un bus de procesador. Para evitar conflictos cuando más de un procesador
                            pretende acceder al mismo módulo de memoria se establece un orden de prioridad. Se
                            trata de una red sin bloqueo con una conectividad completa pero de alta complejidad.
                            </p>
                        </div>
                        <div class="mt-5">
                            <p>CONEXIÓN POR RED MULTIETAPA</p>
                            <p> Representan una alternativa intermedia de conexión entre el bus y el crossbar.
                                - Es de menor complejidad que el crossbar pero mayor que el bus simple.
                                - La conectividad es mayor que la del bus simple pero menor que la del crossbar.
                                - Se compone de varias etapas alternativas de conmutadores simples y redes de
                                interconexión.
                            </p>
                        </div>
                    </div>
                    <div class="w-4/5 flex justify-center">
                        <img src="src\assets\images\Unidad4\Redes-Jerárquicas.png" alt="">
                    </div>
                </div>
            </div>
            <div class="container mx-auto mt-10">
                <h2 class="flex justify-center text-3xl font-bold">4.4 SISTEMAS DE MEMORIA DISTRIBUIDA: MULTIPROCESADORES</h2>
                <div class="flex mt-5">
                    <div class="w-4/5">
                        <p class="text-lg">Los sistemas de memoria distribuida o multicomputadores pueden ser de dos
                        tipos básicos. El primer de ellos consta de un único computador con múltiples
                        CPUs comunicadas por un bus de datos mientras que en el segundo se utilizan
                        múltiples computadores, cada uno con su propio procesador, enlazados por
                        una red de interconexión más o menos rápida.
                        </p>
                    </div>
                    <div class="w-4/5">
                        <p class="text-lg">
                            Sobre los sistemas de multicomputadores de memoria distribuida, se simula
                            memorias compartidas. Se usan los mecanismos de comunicación y
                            sincronización de sistemas multiprocesadores
                        </p>
                    </div>
                </div>
            </div>
            <div class="container mx-auto mt-10">
                <h2 class="flex justify-center text-3xl font-bold">4.4.1 Red de interconexión estática</h2>
                <div class="flex justify-center">
                    <div class="w-4/5 text-xl">
                        <p>Los multicomputadores utilizan redes estáticas con enlaces directos
                        entre nodos. Cuando un nodo recibe un mensaje lo procesa si viene
                        dirigido a dicho nodo. Si el mensaje no va dirigido al nodo receptor lo
                        reenvía a otro por alguno de sus enlaces de salida siguiendo un
                        protocolo de encaminamiento.
                        </p>
                    </div>
                </div>
            </div>
            <div class="container mx-auto mt-10">
                <h2 class="flex justify-center text-3xl font-bold">4.5 casos de estudio</h2>
                <div class="flex justify-center">
                    <div class="w-4/5 text-xl">
                        <p>Por numerosos motivos, el procesamiento distribuido se ha convertido en
                        un área de gran importancia e interés dentro de la ciencia de la
                        computación, produciendo profundas transformaciones en las líneas de
                        investigación y desarrollo.
                        </p>
                        <p>Interesa realizar investigación en la especificación, transformación,
                        optimización y evaluación de algoritmos distribuidos y paralelos. Esto
                        incluye el diseño y desarrollo de sistemas paralelos, la transformación de
                        algoritmos secuenciales en paralelos, y las métricas de evaluación de
                        performance sobre distintas plataformas de soporte (hardware y software).
                        Más allá de las mejoras constantes en las arquitecturas físicas de soporte,
                        uno de los mayores desafíos se centra en cómo aprovechar al máximo la
                        potencia de las mismas.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script setup></script>
<style></style>