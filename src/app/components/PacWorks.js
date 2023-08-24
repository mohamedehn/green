import React from "react";
import clim from "../../assets/clim.jpg"
import chaudiere from "../../assets/chaudiere.png"
import air from "../../assets/climair.jpg"
import chauffe from "../../assets/chauffe.jpg"
import radiateur from "../../assets/radiator.jpg"

import DisplayWorks from "./displayWorks";

export default function PacWorks () {
    return(
        <div>
            <div className="w-full sm:pt-[50px]" id="projects">
                <div className="max-w-6xl mx-auto px-2 py-16">
                    <p className="text-3xl font-bold tracking-tight text-green-700 mb-8">Voici nos solutions de chauffage</p>
                    <div className="grid md:grid-cols-3 gap-8">
                        <DisplayWorks title="Pompe à chaleur air-eau" backgroundImg={clim} url='#pacair'/>
                        <DisplayWorks title="Chaudières" backgroundImg={chaudiere} url='#chaudiere'/>
                        <DisplayWorks title="Pompe à chaleur air-air réversible" backgroundImg={air} url='#pacairair'/>
                        <DisplayWorks title="Chauffe-eau thermodynamique et électrique" backgroundImg={chauffe} url='#chauffe'/>
                        <DisplayWorks title="Radiateurs électriques" backgroundImg={radiateur} url='#radiateur'/>
                    </div>
                </div>
            </div>    
        </div>
    )
}