const TemplateExamenUrina = (EveryInput:object[],setInputs:any,assignedID:string) =>{
    const NewTemplateExamenUrina = {
        "id": assignedID,
        "masterText": "EXAMEN COMPLET DE URINA (SUMAR SI SEDIMENT URINAR)",
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
                    "pH urinar",
                    "",
                    "",
                    ""
                ]
            },
            {
                "id": "4-2",
                "value": [
                    "Densitate urinara",
                    "",
                    "",
                    ""
                ]
            },
            {
                "id": "4-3",
                "value": [
                    "Leucocit esteraza",
                    "",
                    "",
                    ""
                ]
            },
            {
                "id": "4-4",
                "value": [
                    "Hemoglobina",
                    "",
                    "",
                    ""
                ]
            },
            {
                "id": "4-5",
                "value": [
                    "Bilirubina-",
                    "",
                    "",
                    ""
                ]
            },
            {
                "id": "4-6",
                "value": [
                    "Urobilinogen-",
                    "",
                    "mg/dL",
                    ""
                ]
            },
            {
                "id": "4-7",
                "value": [
                    "Glucoza-",
                    "",
                    "mg/dL,2 mg/dL",
                    ""
                ]
            },
            {
                "id": "4-8",
                "value": [
                    "Proteine",
                    "",
                    "",
                    ""
                ]
            },
            {
                "id": "4-9",
                "value": [
                    "Corpi cetonici",
                    "",
                    "",
                    ""
                ]
            },
            {
                "id": "4-10",
                "value": [
                    "Nitriti-",
                    "",
                    "",
                    ""
                ]
            },
            {
                "id": "4-11",
                "value": [
                    "Acid ascorbic",
                    "",
                    "",
                    ""
                ]
            },
            {
                "id": "4-12",
                "value": [
                    "Culoare",
                    "",
                    "",
                    ""
                ]
            },
            {
                "id": "4-13",
                "value": [
                    "Claritate",
                    "",
                    "",
                    ""
                ]
            },
            {
                "id": "4-14",
                "value": [
                    "Celule epiteliale plate-",
                    "",
                    "UM",
                    "/HPF"
                ]
            },
            {
                "id": "4-15",
                "value": [
                    "Leucocite-",
                    "",
                    "UM",
                    "/HPF"
                ]
            },
        ]
    }

    setInputs([...EveryInput,NewTemplateExamenUrina])
}

export default TemplateExamenUrina