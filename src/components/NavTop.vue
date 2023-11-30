<template>
	<div class="w-full bg-black p-3 flex sticky top-0" id="NavBar">
		<div class="w-1/5 flex justify-center" id="leftArea">
			<div class="flex flex-col justify-center w-20 text-white text-2xl font-bold">
				<p class="ml-3">Arquitectura</p>
				<p>Computadoras</p>
			</div>
		</div>
		<div class="w-4/5 flex flex-row justify-end" id="rigthArea">
			<div class="menuBar flex justify-center items-center mr-16" id="menuBar">
				<ul class="flex space-x-4">
					<li>
						<router-link to="/"
							class="rounded text-white px-4 py-2 transition duration-300 ease-in-out hover:bg-white hover:text-black">
							Unidad 1
						</router-link>
					</li>
					<li>
						<router-link to="/unidad2"
							class="rounded text-white px-4 py-2 transition duration-300 ease-in-out hover:bg-white hover:text-black">
							Unidad 2
						</router-link>
					</li>
					<li>
						<router-link to="/unidad3"
							class="rounded text-white px-4 py-2 transition duration-300 ease-in-out hover:bg-white hover:text-black">
							Unidad 3
						</router-link>
					</li>
					<li>
						<router-link to="/unidad4"
							class="rounded text-white px-4 py-2 transition duration-300 ease-in-out hover:bg-white hover:text-black">
							Unidad 4
						</router-link>
					</li>
				</ul>
				<div class="ml-2 border-l-2">
					<div class="group relative ml-2">
						<router-link to="/"
						class="rounded text-xl font-semibold text-white px-4 py-2 transition duration-300 ease-in-out hover:bg-white hover:text-black">
							Practicas
						</router-link>
						<ul class="rounded border-2 border-white absolute hidden mt-1 ml-3 bg-black group-hover:block">
							<li class="flex">
								<router-link to="/" class="w-full text-white flex justify-center py-2 px-2 transition duration-300 ease-in-out hover:bg-white hover:text-black">
									Practica 1
								</router-link>
							</li>
							<li class="flex">
								<router-link to="/" class="w-full text-white flex justify-center py-2 px-2 transition duration-300 ease-in-out hover:bg-white hover:text-black">
									Practica 2
								</router-link>
							</li>
							<li class="flex">
								<router-link to="/" class="w-full text-white flex justify-center py-2 px-2 transition duration-300 ease-in-out hover:bg-white hover:text-black">
									Practica 3
								</router-link>
							</li>
							<li class="flex">
								<router-link to="/" class="w-full text-white flex justify-center py-2 px-2 transition duration-300 ease-in-out hover:bg-white hover:text-black">
									Practica 4
								</router-link>
							</li>
							
						</ul>
					</div>
				</div>
			</div>
			
			<div class=" w-20" id="topLogo">
				<img src="src/assets/images/logotec.png" alt="">
			</div>
			
		</div>
	</div>
</template>
  
  
<style scoped>
/* #NavBar {
  background-color: #1b5083;
  width: 100%;
  max-height: 178px;
  display: flex;
}

#leftArea {
  width: 20%;
}

#rigthArea {
  width: 80%;
  display: flex;
  flex-direction: column;
}

#topLogo {
  height: 50%;
}

#menuBar ul {
  list-style-type: none;
  margin: 0;
  padding: 0;
  display: flex;
}

#menuBar ul li {
  margin-right: 20px;
  position: relative;
}

#menuBar ul li a {
  color: #fff;
  text-decoration: none;
  display: block;
  padding: 10px;
}

#menuBar ul li a:hover {
  background-color: #0a314e;
}

#menuBar ul li .dropdown-menu {
  display: none;
  position: absolute;
  background-color: #1b5083;
  min-width: 160px;
  box-shadow: 0 8px 16px rgba(0,0,0,0.2);
  z-index: 1;
}

#menuBar ul li .dropdown-menu li {
  display: block;
}

#menuBar ul li .dropdown-menu li a {
  color: #fff;
  padding: 12px 16px;
  text-decoration: none;
  display: block;
}

#menuBar ul li .dropdown-menu li a:hover {
  background-color: #0a314e;
}

#menuBar ul li:hover .dropdown-menu {
  display: block;
}
*/
#topLogo img {
	height: 80px;

}
</style>
  