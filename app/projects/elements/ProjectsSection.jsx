import React from "react";
import Link from "next/link";

/* [Corpus; Principal function] */
export function ProjectsSection() {
    return (
        <div className="container-fluid">
            {/* {subCorpus; Alert Message} */}
            <br />
            <div className="alert alert-dismissible alert-secondary">
                <button type="button" className="btn-close" data-bs-dismiss="alert"></button>
                <strong>Hey!</strong> Puedes profundizar la información de cada proyecto haciendo click en él desde el apartado inferior...
            </div>
            <br />

            <div className="container-fluid">
                {/* {subCorpus; Tittle} */}
                <br />
                <h2 className="text-center"><strong>m0rniac OS</strong></h2>
                <p className="text-center"><Link href="/projects/project/m0s">Actual versión: <strong>0.0.2 (Rolling Gag)</strong></Link></p>
                {/* <p className="text-center">Actual versión: <strong>0.0.2 (Rolling Gag)</strong></p> */}

                {/* {subCorpus; Project Menu} */}
                <div className="container-fluid">
                    <ul className="nav nav-tabs" role="tablist">
                        {/* subCorpus; Questions */}
                        <li className="nav-item" role="presentation">
                            <a className="nav-link active" data-bs-toggle="tab" href="#m0sDescription" aria-selected="true" role="tab">¿Qué es m0rniac OS?</a>
                        </li>
                        <li className="nav-item" role="presentation">
                            <a className="nav-link" data-bs-toggle="tab" href="#m0sWhat" aria-selected="false" role="tab" tabindex="-1">¿Para qué está hecho?</a>
                        </li>
                        <li className="nav-item" role="presentation">
                            <a className="nav-link" data-bs-toggle="tab" href="#m0sPay" aria-selected="false" role="tab" tabindex="-1">¿Es gratis?</a>
                        </li>
                    </ul>
                    {/* {subCorpus; Anwsers} */}
                    <div id="myTabContent" className="tab-content">
                        <div className="tab-pane fade active show" id="m0sDescription" role="tabpanel">
                            <br /><p className="text-center">Es un sistema operativo de origen <a href="https://es.wikipedia.org/wiki/El_Salvador" target="_blank" rel="noopener noreferrer">salvadoreño</a> basado en el proyecto <a href="https://www.debian.org/" target="_blank" rel="noreferrer">Debian</a>, optimizado y diseñado considerando los equipos de baja o mediana potencia; Es eficiente para el demempeño de labores ofimáticas básicas y complejas a requerimiento del usuario. Cuenta con una versión <a href="https://en.wikipedia.org/wiki/Live_CD" target="_blank" rel="noopener noreferrer">LIVE CD</a> por lo que puede ejecutarse desde un <a href="https://www.google.com/search?q=USB" target="_blank" rel="noopener noreferrer">Pendrive USB</a> sin una instalación previa. <p className="text-muted">(Resúmen)</p></p>
                        </div>
                        <div className="tab-pane fade" id="m0sWhat" role="tabpanel">
                            <br /><p className="text-center">Originalmente fue idealizada como una distribución orientada a la ingeniería y/o desarrollo de software, pero basado en su bajo muy consumo de recursos a largo plazo: puede ser utilizada desde la reactivación de equipos viejos o sin potencia hasta el desarrollo o ingeniería con las tecnologías más modernas actualmente y a futuro. <p className="text-muted">(Resúmen)</p></p>
                        </div>
                        <div className="tab-pane fade" id="m0sPay" role="tabpanel">
                            <br />
                            <hr /><p className="text-center">Siguiendo la filosofía debianita: <strong>"Cualquiera es libre de usarlo, modificarlo y distribuirlo". <p className="text-muted">(Resúmen)</p></strong></p><hr />
                        </div>
                    </div>
                    <br />

                    {/* [Corpus; Choose] */}
                    <table className="table table-hover">
                        <thead>
                            <tr>
                                {/* {subCorpus; Download Section} */}
                                <th scope="col">
                                    <a href="https://drive.google.com/drive/folders/16WGG6mhXQVUWmewPkCc8DRT1VFViComp?usp=share_link" target="_blank" rel="noopener noreferrer"><p className="text-center"><button type="button" className="btn btn-outline-light"><strong>Descargar m0rniac OS</strong></button></p></a>
                                </th>
                                {/* {subCorpus; Documentation Section} */}
                                <th scope="col">
                                    <Link href="/projects/project/m0s"><p className="text-center"><button type="button" className="btn btn-outline-warning"><strong>Leer documentación</strong></button></p></Link>
                                </th>
                            </tr>
                        </thead>
                    </table>






                </div>

                {/* SPACES */}
                <br /><br /><br /><br /><hr />
            </div >





            {/* {subCorpus; Tittle} */}
            <br /><br />
            <h3 className="text-center"><strong>Lista de proyectos actuales:</strong></h3>
            <br /><hr /><br /><br />

            {/* {subCorpus; Table of organization} */}
            <div className="container-fluid">
                <table className="table table-hover text-center">
                    <thead>
                        <tr>
                            <th scope="col">
                                <h5 className="text-center"><strong>m0rniac OS:</strong></h5>
                                <p>Una distribución Linux basada en Debian orientada al desarrollo de software.</p>
                                <hr /><br />
                                <Link href="/projects/project/m0s"><button type="button" className="btn btn-primary btn-lg">Descargar m0rniac OS</button></Link>
                                <br /><br />
                                <hr />
                            </th>
                            <th scope="col">
                                <h5 className="text-center"><strong>Software:</strong></h5>
                                <p>Listado todos los programas son sus respectivos repositorios y documentación.</p>
                                <hr /><br />
                                <button type="button" className="btn btn-primary btn-lg">Sin contenido :(</button>
                                <br /><br />
                                <hr />
                            </th>
                        </tr>
                    </thead>
                </table>
                <table className="table table-hover text-center">
                    <thead>
                        <tr>
                            <th scope="col">
                                <h5 className="text-center"><strong>Publicaciones:</strong></h5>
                                <p>Enlace a publicaciones que considero interesantes  para leer.</p>
                                <hr /><br />
                                <button type="button" className="btn btn-primary btn-lg">Sin contenido :(</button>
                                <br /><br />
                                <hr />
                            </th>
                            <th scope="col">
                                <h5 className="text-center"><strong>Respuestas en foros:</strong></h5>
                                <p>Algunas respuestas a preguntas en foros informáticos.</p>
                                <hr /><br />
                                <button type="button" className="btn btn-primary btn-lg">Sin contenido :(</button>
                                <br /><br />
                                <hr />
                            </th>
                        </tr>
                    </thead>
                </table>
            </div>
            <br /><br /><br /><br />



        </div>
    );
};