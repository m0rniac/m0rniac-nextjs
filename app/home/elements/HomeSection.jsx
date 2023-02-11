import React from "react";
import "./tittleAnimation.css"

/* [Corpus; Principal function] */
export function HomeSection() {
    return (
        <div className="container-fluid">
            {/* {subCorpus; Alert Message} */}
            <br />
            <div className="alert alert-dismissible alert-warning">
                <button type="button" className="btn-close" data-bs-dismiss="alert"></button>
                <h4 className="alert-heading"><strong>¡Holaaa!</strong></h4>
                <p className="mb-0"><strong>Te doy la bienvenida al deploy web de mi GitHub ♡</strong></p>
            </div>

            {/* [Corpus; TITTLE] */}
            <div className="container-fluid"><br />
                <h1 className="text-center">m0rniac</h1><br /><br />
            </div>

            {/* {subCorpus; Cards} */}
            <div className="container text-center">
                <div className="row align-items-end">
                    <div className="col">
                        <div className="card border-primary mb-3">
                            <div className="card-header">1/3</div>
                            <div className="card-body">
                                <h4 className="card-title"><strong>Código abierto:</strong></h4>
                                <p className="card-text">Gran parte de mis proyectos cuentan con su respectivo repositorio en línea.</p>
                            </div>
                        </div>
                    </div>
                    <div className="col">
                        <div className="card border-secondary mb-3">
                            <div className="card-header">2/3</div>
                            <div className="card-body">
                                <h4 className="card-title"><strong>Documentación explícita:</strong></h4>
                                <p className="card-text">Ya sea aquí o en el repositorio mismo, cada proyecto está descrito en su totalidad.</p>
                            </div>
                        </div>
                    </div>
                    <div className="col">
                        <div className="card border-success mb-3">
                            <div className="card-header">3/3</div>
                            <div className="card-body">
                                <h4 className="card-title"><strong>Sobre la autoría:</strong></h4>
                                <p className="card-text">Debemos fomentar el respeto a la propiedad intelectual de las ideas.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div><br /><br /><br />

            {/* {subCorpus; Phrase} */}
            <div className="container-fluid">
                <figure className="text-center">
                    <blockquote className="blockquote">
                        <p className="mb-0"><strong>« La creatividad simplemente consiste en conectar las cosas »</strong></p>

                    </blockquote>
                    <figcaption className="blockquote-footer">
                        Autor: <cite title="Source Title">Steve Jobs</cite>
                    </figcaption>
                </figure>
            </div>
            <br /><hr /><br /><br /><br />
        </div>
    );
};

/* [Corpus; Glosarious Table] */
export function GlosariousTable({
    M0sVersion = "Last version of m0rniac OS",
    SoftwareTotal = "Total of software developed or helped by m0rniac",
    ForumsAnswerTotal = "Total of questions answered by m0rniac at any forums"
}) {
    return (
        <div className="container-fluid">
            {/* {subCorpus; Tittle} */}
            <h3 className="text-center">Tabla de actualizaciones y últimos proyectos:</h3><br />

            {/* {subCorpus; List of elements} */}
            <div className="container-fluid">
                <ul className="list-group">
                    <li className="list-group-item d-flex justify-content-between align-items-center">
                        <strong>m0rniac OS</strong>
                        <span className="badge bg-primary rounded-pill">{M0sVersion}</span>
                    </li>
                    <li className="list-group-item d-flex justify-content-between align-items-center">
                        <strong>Software</strong>
                        <span className="badge bg-primary rounded-pill">{SoftwareTotal}</span>
                    </li>
                    <li className="list-group-item d-flex justify-content-between align-items-center">
                        <strong>Resoluciones en foros</strong>
                        <span className="badge bg-primary rounded-pill">{ForumsAnswerTotal}</span>
                    </li>
                </ul>
            </div><br /><br />

            {/* {subCorpus; Tittle for the news} */}
            <div className="container-fluid"><br />
                <h4 className="text-left"><strong>Resúmen de proyectos:</strong></h4>
            </div><br />
        </div>
    );
}

/* [Corpus; News sections] */
export function CurrentNew({
    TittleNew = "Tittle of new",
    TextNew = "Text of new",
    DateNew = "dd/mm/yyyy",
    AutorNew = "m0rniac"
}) {
    return (
        <div className="container-fluid">
            <div className="list-group">
                <p className="text-muted">Publicación más reciente:</p>
                <a href="#" className="list-group-item list-group-item-action flex-column align-items-start active">
                    <div className="d-flex w-100 justify-content-between">
                        <h5 className="mb-1">{TittleNew}</h5>
                        <small>{DateNew}</small>
                    </div>
                    <p className="mb-1">{TextNew}</p>
                    <small>Publicado por: {AutorNew}</small>
                </a>
                <br />
            </div>
        </div>
    );
}
export function LastNew({
    TittleNew = "Tittle of new",
    TextNew = "Text of new",
    DateNew = "dd/mm/yy",
    AutorNew = "m0rniac"
}) {
    return (
        <div className="container-fluid">
            <div className="list-group">
                <a href="#" className="list-group-item list-group-item-action flex-column align-items-start">
                    <div className="d-flex w-100 justify-content-between">
                        <h5 className="mb-1">{TittleNew}</h5>
                        <small className="text-muted">{DateNew}</small>
                    </div>
                    <p className="mb-1">{TextNew}</p>
                    <small className="text-mu
                    ted">Publicado por: {AutorNew}</small>
                </a>
            </div>
        </div>
    );
}