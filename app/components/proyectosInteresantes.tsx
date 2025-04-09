const ProyectosInteresantes = () => {
    return (
        <div className="mt-12 px-4 mx-auto">
            <p className="text-4xl text-center font-bold">
                Aquí tienes algunos proyectos interesantes que he ido realizando durante el curso
            </p>
            <ul className="mt-6 list-disc list-inside mx-14 text-lg">
                <li>
                    <a href="https://examen-uf-2-m6.vercel.app/" target="_blank" rel="noopener noreferrer"
                        className="text-blue-500 underline">
                       ComeCocos (JAVASCRIPT)
                    </a>
                </li>
                <li>
                    <a
                        href="https://ferrer.alwaysdata.net/M7-UF3-m7Examen/proyecto/agen-bootstrap-main/theme/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-500 underline"
                    >
                        Web de Futbol (PHP)
                    </a>
                </li>
                <li>
                    <a
                        href="https://ferrer.alwaysdata.net/M7-UF3-main/proyecto/agen-bootstrap-main/theme/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-500 underline"
                    >
                        Web Personal (PHP)
                    </a>
                </li>
                <li>
                    <a
                        href="https://aprende-con-ferrer.alwaysdata.net/uf2/patrons-de-disseny-php/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-500 underline"
                    >
                        Web sobre patrones de diseño (PHP)
                    </a>
                </li>
            </ul>
        </div>
    );
};

export default ProyectosInteresantes;