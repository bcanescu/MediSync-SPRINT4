const TemplateHematologie = (EveryInput:object[],setInputs:any,assignedID:string) =>{
    const NewTemplateHematologie = {
        "id": assignedID,
        "masterText": "HEMATOLOGIE",
        "value": [
            {
                "id": "4-0",
                "value": [
                    "DENUMIRE",
                    "REZULTATE",
                    "UM",
                    "INTERVAL BIOLOGIC DE REF."
                ]
            },
            {
                "id": "4-1",
                "value": [
                    "Numar de eritrocite",
                    "",
                    "mil./μL",
                    ""
                ]
            },
            {
                "id": "4-2",
                "value": [
                    "Hemoglobina",
                    "",
                    "g/dL",
                    ""
                ]
            },
            {
                "id": "4-3",
                "value": [
                    "Hematocrit",
                    "",
                    "%",
                    ""
                ]
            },
            {
                "id": "4-4",
                "value": [
                    "Volumul mediu eritrocitar",
                    "",
                    "fL",
                    ""
                ]
            },
            {
                "id": "4-5",
                "value": [
                    "Hemoglobina eritrocitara medie",
                    "",
                    "pg",
                    ""
                ]
            },
            {
                "id": "4-6",
                "value": [
                    "Concentratia medie a hemoglobinei eritrocitare",
                    "",
                    "g/dL",
                    ""
                ]
            },
            {
                "id": "4-7",
                "value": [
                    "Largimea distributiei eritrocitare - coeficient variatie",
                    "",
                    "%",
                    ""
                ]
            },
            {
                "id": "4-8",
                "value": [
                    "Numarul de reticulocite",
                    "",
                    "mil./μL",
                    ""
                ]
            },
            {
                "id": "4-9",
                "value": [
                    "Procentul de reticulocite",
                    "",
                    "%",
                    ""
                ]
            },
            {
                "id": "4-10",
                "value": [
                    "Numar de leucocite",
                    "",
                    "mii/μL",
                    ""
                ]
            },
            {
                "id": "4-11",
                "value": [
                    "Procentul de neutrofile",
                    "",
                    "%",
                    ""
                ]
            },
            {
                "id": "4-12",
                "value": [
                    "Procentul de eozinofile",
                    "",
                    "%",
                    ""
                ]
            },
            {
                "id": "4-13",
                "value": [
                    "Procentul de bazofile",
                    "",
                    "%",
                    ""
                ]
            },
            {
                "id": "4-14",
                "value": [
                    "Procentul de limfocite",
                    "",
                    "%",
                    ""
                ]
            },
            {
                "id": "4-15",
                "value": [
                    "Procentul de monocite",
                    "",
                    "%",
                    ""
                ]
            },
            {
                "id": "4-16",
                "value": [
                    "Numar de neutrofile",
                    "",
                    "mii/μL",
                    ""
                ]
            },
            {
                "id": "4-17",
                "value": [
                    "Numar de eozinofile",
                    "",
                    "mii/μL",
                    ""
                ]
            },
            {
                "id": "4-18",
                "value": [
                    "Numar de bazofile",
                    "",
                    "mii/μL",
                    ""
                ]
            },
            {
                "id": "4-19",
                "value": [
                    "Numar de limfocite",
                    "",
                    "mii/μL",
                    ""
                ]
            },
            {
                "id": "4-20",
                "value": [
                    "Numar de monocite",
                    "",
                    "mii/μL",
                    ""
                ]
            },
            {
                "id": "4-21",
                "value": [
                    "Numar de trombocite",
                    "",
                    "mii/μL",
                    ""
                ]
            },
            {
                "id": "4-22",
                "value": [
                    "Volumul mediu plachetar",
                    "",
                    "fL",
                    ""
                ]
            },
            {
                "id": "4-23",
                "value": [
                    "Distributia plachetelor (trombocitelor)",
                    "",
                    "fL",
                    ""
                ]
            },
            {
                "id": "4-24",
                "value": [
                    "VITEZA DE SEDIMENTARE A HEMATIILOR",
                    "",
                    "mm/h",
                    ""
                ]
            },
            {
                "id": "4-25",
                "value": [
                    "fibrogen",
                    "",
                    "mg/dL",
                    ""
                ]
            },
        ]
    }

    setInputs([...EveryInput,NewTemplateHematologie])
}

export default TemplateHematologie