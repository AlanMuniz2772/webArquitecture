<template>
    <div class="bg-gray-300 p-5">
        <div class="container mx-auto rounded-lg bg-white p-8">
            <div class="flex justify-center bg-black p-3 rounded">
                <h1 class="text-center text-4xl text-white font-medium">2. Estructura y funcionamiento de la CPU</h1>
            </div>
            <div class="container mx-auto mt-10">
                <h2 class="flex justify-center text-3xl font-bold">2.1 Organización del procesador</h2>
                <div class="flex flex-row justify-center">
                    <div class="w-4/5">
                        <p>La Unidad de Procesamiento (CPU) controla el funcionamiento del computador y lleva a cabo sus funciones de procesamiento de datos. Frecuentemente se le llama procesador.</p>
                        <p>Un procesador lleva a cabo una gran variedad de:</p>
                        <p>Cálculos, Comparaciones numéricas y Transferencias de datos como respuesta a las peticiones de los programas que están siendo ejecutados en memoria.</p>
                        <p>La Unidad Central de Proceso está constituida internamente por: La Unidad de Control: La unidad de control le indica al resto del sistema como llevar a cabo las instrucciones de un programa. Comanda las señales electrónicas entre la memoria y la unidad aritmético-lógica</p>
                        <p>Unidad Aritmético-Lógica (ALU): Recibe los datos sobre los que efectúa operaciones de cálculo y comparaciones. Toma decisiones lógicas</p>
                    </div>
                </div>
                <div class="flex justify-center mt-5">
                    <img src="src\assets\images\Unidad2\procesador.jpg" alt="">
                </div>
            </div>
            <div class="container mx-auto mt-10">
                <h2 class="flex justify-center text-3xl font-bold">2.2 Estructura de registro</h2>
                <div class="flex flex-row justify-center">
                    <div class="w-4/5">
                        <p>La estructura de registros en una CPU se refiere a la colección de registros de almacenamiento de datos que se utilizan internamente para llevar a cabo diversas operaciones. Estos registros son esenciales para el funcionamiento de la CPU, ya que almacenan datos que se están procesando en un momento dado. La cantidad y tipos de registros pueden variar según la arquitectura de la CPU.</p>
                    </div>
                </div>
                <div class="flex justify-center mt-5">
                    <img src="src\assets\images\Unidad2\jerarquia.jpg" alt="">
                </div>
            </div>
            <div class="container mx-auto mt-10">
                <h2 class="flex justify-center text-3xl font-bold">2.2.1 Registros visibles para el usuario</h2>
                <div class="flex flex-row justify-center">
                    <div class="w-4/5">
                        <p>Son aquellos que pueden ser referenciado por medio del lenguaje maquina que ejecuta la CPU, los registro que normalmente disponibles son: Registros de propósito general, son aquellos que pueden guardar tanto datos como direcciones. Registro de datos, que pueden ser asignados por el programador a diversas funciones. En algunos casos son de propósito general y pueden ser empleados por cualquier instrucción de máquina que lleve a cabo operaciones sobre los datos.</p>
                    </div>
                </div>
            </div>
            <div class="container mx-auto mt-10">
                <h2 class="flex justify-center text-3xl font-bold">2.2.2 Registros de control y de estados</h2>
                <div class="flex flex-row justify-center">
                    <div class="w-4/5">
                        <p>Son utilizados por la unidad de control para controlar el funcionamiento del procesador y por programas privilegiados del sistema operativo para controlar la ejecucion de programas. Registros de control y estado Hay diversos registros del procesador que se emplean para controlar su funcionamiento.</p>
                    </div>
                </div>
            </div>
            <div class="container mx-auto mt-10">
                <h2 class="flex justify-center text-3xl font-bold">2.2.3 Ejemplos de registros de CPU reales</h2>
                <div class="flex flex-row justify-center">
                    <div class="w-3/5 text-3xl">
                        <p>Resulta instructivo examinar y comparar las organizaciones de registros de sistemas análogos. A continuación, se examinan dos microprocesadores de 16 bits diseñados aproximadamente al mismo tiempo: Por un lado esta el Motorola MC68000[STRI79] y el Intel 8086[MORS78]</p>
                    </div>
                    <div class="w-2/5">
                        <img src="src\assets\images\Unidad2\EJEMPLOCPU.jpg" alt="">
                    </div>
                </div>
                <div class="flex flex-row justify-center mt-5">
                    <div class="w-4/5">
                        <img src="src\assets\images\Unidad2\ejmplocpu.jpg" alt="">
                    </div>
                </div>
            </div>
            <div class="container mx-auto mt-10">
                <h2 class="flex justify-center text-3xl font-bold">2.3 Organización del procesador</h2>
                <div class="flex flex-row justify-center">
                    <div class="w-4/5 text-xl">
                        <p>Es un término más general que se refiere al proceso completo que sigue una CPU para ejecutar un programa. Este proceso se divide en varias etapas fundamentales que se repiten continuamente mientras la computadora está en funcionamiento.</p>
                    </div>
                </div>
            </div>
            <div class="container mx-auto mt-10">
                <h2 class="flex justify-center text-3xl font-bold">2.3.1 Ciclo Fetch-Decode-Execute</h2>
                <div class="flex flex-row justify-center">
                    <div class="w-3/5">
                        <p>Un ciclo de instrucción (también llamado ciclo de fetch-and-execute o ciclo de fetch-decode-execute en inglés) es el período que tarda la unidad central de proceso (CPU) en ejecutar una instrucción de lenguaje máquina. Comprende una secuencia de acciones determinada que debe llevar a cabo la CPU para ejecutar cada instrucción en un programa. Secuencia de acciones del ciclo de instrucción:</p>
                        <p class="mt-2 font-semibold">Buscar la instrucción en la memoria principal:</p>
                        <p>Se vuelca el valor del contador de programa sobre el bus de direcciones. Entonces la CPU pasa la instrucción de la memoria principal a través del bus de datos al Registro de Dirección de Memoria (MAR).</p>
                        <p class="mt-2 font-semibold">Decodificar la instrucción:</p>
                        <p>El decodificador de instrucción interpreta e implementa la instrucción. El registro de instrucción (IR) mantiene la instrucción en curso mientras el contador de programa (PC, program counter) guarda la dirección de memoria de la siguiente instrucción a ser ejecutada.</p>
                        <p class="mt-2 font-semibold">Ejecutar la instrucción:</p>
                        <p>A partir del registro de instrucción, los datos que forman la instrucción son decodificados por la unidad de control. Ésta interpreta la información como una secuencia de señales de control que son enviadas a las unidades funcionales relevantes de la CPU para realizar la operación requerida por la instrucción poder terminarla y seguir así.</p>
                        <p class="mt-2 font-semibold">Almacenar o guardar resultados:</p>
                        <p>El resultado generado por la operación es almacenado en la memoria principal o enviado a un dispositivo de salida dependiendo de la instrucción. Basándose en los resultados de la operación, el contador de programa se incrementa para apuntar a la siguiente instrucción o se actualiza con una dirección diferente donde la próxima instrucción será recogida.</p>
                    </div>
                    <div class="w-2/5">
                        <img src="src\assets\images\Unidad2\ciclofetch.jpg" class="w-full" alt="">
                    </div>
                </div>
            </div>
            <div class="container mx-auto mt-10">
                <h2 class="flex justify-center text-3xl font-bold">2.3.2 Segmentación de Instrucciones</h2>
                <div class="flex flex-row justify-center">
                    <div class="w-4/5 text-lg">
                        <p>La segmentación de instrucciones Es una técnica que permite implementar el paralelismo a nivel de instrucción en un único procesador.</p>
                    </div>
                </div>
            </div>
            <div class="container mx-auto mt-10">
                <h2 class="flex justify-center text-3xl font-bold">2.3.3 Conjunto de instrucciones: Características y funciones</h2>
                <div class="flex flex-row justify-center">
                    <div class="w-4/5 text-lg">
                        <p>Los conjuntos de instrucciones de las máquinas deben tender a poseer una serie de propiedades, bastante ideales e imprecisas, que pueden resumirse en las siguientes: El conjunto de instrucciones de un computador debe ser completo en el sentido de que se pueda construir un programa para evaluar una función computable usando una cantidad de memoria razonable y empleando un tiempo moderado, es decir, el número de instrucciones de ese programa no debe ser demasiado elevado</p>
                    </div>
                </div>
            </div>
            <div class="container mx-auto mt-10">
                <h2 class="flex justify-center text-3xl font-bold">2.3.4 Modos de Direccionamiento.</h2>
                <div class="flex flex-row justify-center">
                    <div class="w-4/5 text-xl">
                        <p class="mt-2 font-semibold">1.-Direccionamiento por registro:</p>
                        <p>Los operandos son registros. Los datos a operar están contenidos en dos registros de 32 bits y el resultado será colocado en otro registro, del mismo tamaño.</p>
                        <p class="mt-2 font-semibold">2.- Direccionamiento base o desplazamiento:</p>
                        <p>Uno de los operandos está en una localidad de memoria cuya dirección es la suma de un registro y una constante que forma parte de la misma instrucción.</p>
                        <p class="mt-2 font-semibold">3.- Direccionamiento inmediato:</p>
                        <p>Donde uno de los operandos es una constante que está en la misma instrucción.</p>
                        <p class="mt-2 font-semibold">4.- Direccionamiento relativo al PC:</p>
                        <p>Se forma una dirección sumando una constante, que está en la instrucción, con el registro PC. El resultado de la suma corresponde a la dirección destino si un brinco condicional se va a realizar.</p>
                        <p class="mt-2 font-semibold">5.- Direccionamiento pseudo directo:</p>
                        <p>La dirección destino de un salto corresponde a la concentración de 26 bits que están en la misma instrucción con los bits más significativos del PC.</p>
                    </div>
                </div>
            </div>
            <div class="container mx-auto mt-10">
                <h2 class="flex justify-center text-3xl font-bold">2.4 Casos de Estudio Reales</h2>
                <div class="flex flex-row justify-center mt-3">
                    <div class="w-3/5 text-xl">
                        <p class="mt-2 font-semibold">I-8086</p>
                        <p>Los modos de direccionamiento del 8086 son muy irregulares. Los registros del procesador, se usan para contener los datos con que se está trabajando puesto que el acceso a los registros es mucho más rápido que los accesos a memoria.</p>
                    </div>
                    <div class="w-2/5">
                        <img src="src\assets\images\Unidad2\casocpu.jpg" class="w-full" alt="">
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