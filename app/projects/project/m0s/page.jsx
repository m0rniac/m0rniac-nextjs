import React from "react";
import "./bootstrap.min.css";
import Link from "next/link";

/* import "./complementOne.css" */

export default function M0sPage() {
    return (
        <section>
            {/* [Corpus; Alert Message] */}
            <div className="container-fluid">
                <div class="alert alert-dismissible alert-info">
                    <button type="button" class="btn-close" data-bs-dismiss="alert"></button>
                    <strong>¡Bienvenido o bienvenida!</strong> a la documentación oficial de m0rniac OS, más abajo encontrarás una minibarra de navegación que te ayudará a guiarte.
                </div>
            </div>


            {/* [Corpus; Tittle] */}
            <div className="container-fluid">
                <br />
                <h2 className="text-center"><strong>m0rniac OS</strong></h2>
                <h6 className="text-center">0.0.2 (Rolling Gag)</h6>
                <br />
                <p className="text-center">
                    <b>m0rniac Operative System</b> es una distribución linux salvadoreña basada en el proyecto <a href="https://www.debian.org/" target="_blank" rel="noopener noreferrer">Debian</a> con dos enfoques específicos: <strong>optimización y la seguridad</strong>.
                </p>
                <br />


                {/* [Corpus; INIT buttons]. */}
                {/* {A; Download last version} */}
                <div className="container-fluid">
                    <p className="text-center"><a href="https://drive.google.com/drive/folders/16WGG6mhXQVUWmewPkCc8DRT1VFViComp?usp=share_link" target="_blank" rel="noopener noreferrer"><button type="button" class="btn btn-outline-light"><strong>Descargar última versión</strong></button></a></p>
                </div>
                {/* {B; Community link} */}
                <div className="container-fluid">
                    <a href="https://github.com/m0rniac/m0s/issues" target="_blank" rel="noopener noreferrer"><p className="text-center"><button type="button" class="btn btn-dark">Comunidad</button></p></a>
                </div>
                <br />


                {/* [Corpus; MiniNavBar] */}
                <div className="container-fluid">
                    <p class="text-warning text-center"><strong><b>Secciones de documentación:</b></strong></p>
                    <p className="text-center"><a href="#sectionOne">Preguntas frecuentes</a></p>
                    <p className="text-center"><a href="#sectionTwo">¿Cómo instalar m0rniac OS?</a></p>
                    <p className="text-center"><a href="#sectionThree">Comandos básicos del sistema</a></p>

                </div>

                <br /><br /><br />
                <hr />
            </div>

            {/* [Corpus; Tables 1] */}
            <p id="sectionOne"></p>
            <br />
            <div className="container text-center">
                <div className="row align-items-end">
                    <div className="col">
                        <div className="card border-danger mb-3">
                            <div className="card-header">1/6</div>
                            <div className="card-body">
                                <h4 className="card-title"><strong>¿Por qué es tan óptimo?</strong></h4>
                                <p className="card-text">
                                    Opera con un <strong>Kernel ZEN</strong>, esto le permite mejorar la capacidad de respuesta a costa del rendimiento y el uso de energia, es decir:
                                </p>
                                <p className="text-center">
                                    <ol>
                                        <li>
                                            <p><strong>Prevención de kernel frío: </strong>Antes de requerir parches en tiempo real, garantiza un sistema receptivo en escenarios de cargas de trabajo mixtas de alta intensidad.</p>
                                        </li>
                                        <li>
                                            <p><strong>Control de congestión TCP: </strong>Maximizador de rendimiento que busca tener una velocidad igual o superior al <a href="https://en.wikipedia.org/wiki/CUBIC_TCP" target="_blank" rel="noopener noreferrer">cubic</a>.</p>
                                        </li>
                                        <li>
                                            <p><strong>Reemplazo directo del núcleo de distribución: </strong>Configuración adecuada que admite la selección más amplia de hardware, opciones de paravirtualización y reducción de sobrecarga bajo virtualización.</p>
                                        </li>
                                        <li>
                                            <p><strong>B.F.Q: </strong><a href="https://www.kernel.org/doc/html/latest/block/bfq-iosched.html" target="_blank" rel="noopener noreferrer">Budget Fair Queue</a>, programador de disco para uso Desktop de alto rendimiento y baja latencia.</p>
                                        </li>
                                    </ol>
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="col">
                        <div className="card border-success mb-3">
                            <div className="card-header">2/6</div>
                            <div className="card-body">
                                <h4 className="card-title"><strong>¿Por qué es seguro?</strong></h4>
                                <p className="card-text">Al ser una distribución basada en Debian esta hereda gran parte de sus atributos.</p>
                                <p className="text-center">
                                    <ol>
                                        <li>
                                            <p><strong>Coordinación de múltiples avisos de seguridad con otros agentes de Software Libre.</strong></p>
                                        </li>
                                        <li>
                                            <p><strong>Actualización recurrente de paquetes con nuevos parches de seguridad.</strong></p>
                                        </li>
                                        <li>
                                            <p><strong>Establecimiento de <a href="https://wiki.debian.org/Debate/initsystem/sysvinit" target="_blank" rel="noopener noreferrer">SYSVINIT</a> como único gestor de arranque tras grub.</strong></p>
                                        </li>
                                        <li>
                                            <p><strong>Establecimiento de <a href="https://en.wikipedia.org/wiki/Systemd" target="_blank" rel="noopener noreferrer">SYSTEMD</a> como único gestor de procesos, tareas y multitareas dentro del sistema más no como dependencia de los paquetes instalados o a instalar; Esto se hace para mantener todos los comandos promt a disponibilidad del usuario.</strong></p>
                                        </li>
                                    </ol>
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="col">
                        <div className="card border-warning mb-3">
                            <div className="card-header">3/6</div>
                            <div className="card-body">
                                <h4 className="card-title"><strong>¿Qué tan compatible es?</strong></h4>
                                <p className="card-text"><strong>Actualmente es compatible con casi todo el hardware del mercado, a excepción de muy reducidos casos; El desarrollo y desempeño del hardware para el Kernel ZEN es continuo. Aunque es poco recomendable utilizar componentes o respuestos de hardware extremadamente viejos puesto que su desempeño puede no ser suficiente con las exigencias de los programas utilizables por el usuario.</strong></p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* [Corpus; Tables 1] */}
            <br />
            <div className="container text-center">
                <div className="row align-items-end">
                    <div className="col">
                        <div className="card border-light mb-3">
                            <div className="card-header">4/6</div>
                            <div className="card-body">
                                <h4 className="card-title"><strong>¿Es confortable?</strong></h4>
                                <p className="card-text">Utiliza una interfaz de usuario minimalista y amena con el usuario, <a href="https://i3wm.org/" target="_blank" rel="noopener noreferrer">i3-wm</a> <strong className="text-muted">(en futuras versiones se agregarán nuevas GUI)</strong>, no posee paquetes innecesarios instalados por defecto, cuenta únicamente con los programas necesarios para el correcto funcionamiento del sistema (reduciendo su peso); en conclusión:<strong> muy confortable.</strong></p>
                            </div>
                        </div>
                    </div>
                    <div className="col">
                        <div className="card border-secondary mb-3">
                            <div className="card-header">5/6</div>
                            <div className="card-body">
                                <h4 className="card-title"><strong>¿Es una distribución atendida?</strong></h4>
                                <p className="card-text"><strong>Afirmativo</strong>, si bien se cuenta con un equipo de desarrollo reducido <strong>(por el momento)</strong>, se estará trabajando en el lanzamiento de nuevas actualizaciones.</p>
                            </div>
                        </div>
                    </div>
                    <div className="col">
                        <div className="card border-primary mb-3">
                            <div className="card-header">6/6</div>
                            <div className="card-body">
                                <h4 className="card-title"><strong>Es ideal para:</strong></h4>
                                <p className="card-text">Al ser un sistema operativo limpio de paquetes innecesarios, puede ser polifacetico:</p>
                                <ol>
                                    <li><strong>Instalación y uso de paquetes ofimáticos.</strong></li>
                                    <li><strong>Desarrollo o ingeniería de software.</strong></li>
                                    <li><strong>Sistema operativo personal (seguro y privado).</strong></li>
                                </ol>
                                <p><strong>Entre otras muchas funciones...</strong></p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* [Corpus; HOW TO INSTALL] */}
            <div className="container-fluid">
                <br /><hr /><br />
                <p id="sectionTwo"></p>
                <h2 className="text-center">¿Cómo instalar <strong>m0rniac OS</strong>?</h2>
                <p className="text-center">Su instalación es una de las más sencillas puesto que utiliza el instalador <a href="https://github.com/gazelle-installer/gazelle-installer" target="_blank" rel="noopener noreferrer">Gazelle</a>, y puedes hacerlo mediante los siguientes pasos:</p>
                <br />
                <p className="text-center">
                    <ol>
                        <li><strong>Descargar la <a href="#top">imagen .ISO</a> de la distribución.</strong></li>
                        <li><strong>Montar en una <a href="https://www.google.com/search?q=USB" target="_blank" rel="noopener noreferrer">Pendrive USB</a></strong> mediante programas como <a href="https://rufus.ie/en/" target="_blank" rel="noopener noreferrer">Rufus</a> en Windows, o <a href="https://www.balena.io/etcher" target="_blank" rel="noopener noreferrer">Ballena Etcher</a> en Linux.</li>
                        <li><strong>Reiniciar la computadora con la <a href="https://www.google.com/search?q=USB" target="_blank" rel="noopener noreferrer">Pendrive USB</a> conectada a la máquina, y ejecutarla mediante el gestor de arranque de la computadora del usuario.</strong></li>
                        <li><strong>Se ejecutará un LIVE CD del sistema operativo, para proceder a instalarlo por completo se debe ejecutar la combinación de teclas ($MOD + D) para ejecutar la barra de búsqueda de programas e introducir "minstall-launcher", o presionar la combinación de teclas ($MOD + ENTER) para ejecutar la terminal del sistema para luego introducir "minstall-launcher"; Ambas formas ejecutarán el instalador del sistema operativo.</strong></li>
                        <li><strong>Introducir los datos solicitados o correspondientes para el usuario (usuario, contraseña, capacidad de disco).</strong></li>
                        <li><strong>Listo, m0rniac OS ya se encontrará instalado en su computadora.</strong></li>
                    </ol>
                </p>
                <br /><hr />
            </div>

            {/* [Corpus; Principal settings] */}
            <div className="container-fluid">
                <br />
                <p id="sectionThree"></p>
                <h3 className="text-center">Lista de comandos básicos:</h3>

                <table class="table table-hover">
                    <thead>
                        <tr>
                            <th scope="col">
                                <h5 className="text-center"><strong>Para sistema:</strong></h5>
                                <h5>Apagar de máquina:</h5>
                                <code>sudo poweroff</code>
                                <br /><br />
                                <h5>Reiniciar máquina:</h5>
                                <code>sudo reboot</code>
                                <br /><br />
                                <h5>Aumentar/disminuir brillo en pantalla:</h5>
                                <code>sudo brightnessctl (cantidad)</code>
                                <br />
                                <br />
                                <p className="text-muted">El porcentaje de brillo se mide por millares, es decir:</p>
                                <p className="text-muted">→ 5% = 5000</p>
                                <p className="text-muted">→ 25% = 25000</p>
                                <p className="text-muted">→ 75% = 75000</p>

                                <p className="text-success">Ejemplo para establecer brillo a 35%:</p>
                                <code>sudo brightnessctl 35000</code>
                            </th>
                            <th scope="col">
                                <h5 className="text-center"><strong>Para administración:</strong></h5>
                                <h5>Establecer tecla $MOD:</h5>
                                <p className="text-muted">Cuando ejecutas el LIVE CD o posteriormente a la instalación del mismo aparecerá por primera vez aparecerá un cuadro así:</p>
                                <div>
                                    <img src="image01.png" className="img-fluid"></img>
                                </div>
                                <br />

                                <p className="text-muted">Siendo (WIN) para establecer la tecla de inicio como $MOD, y siendo (ALT) para establecer la tecla Alt de tu teclado como $MOD.</p>
                                <br />
                                <br />
                                <h5>Activar icono de volúmen en la barra principal:</h5>
                                <p className="text-muted">Primero, activar menú de búsqueda de aplicaciones:</p><code>$MOD + D</code>
                                <br /><br />
                                <p className="text-muted">Escribir dentro del menú:</p>
                                <code>volumeicon</code>
                            </th>
                        </tr>
                    </thead>
                </table>
            </div>





        </section>
    );
};