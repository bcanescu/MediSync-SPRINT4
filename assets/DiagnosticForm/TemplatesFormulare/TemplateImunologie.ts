const TemplateImunologie = (EveryInput:object[],setInputs:any,assignedID:string) =>{
    const NewTemplateImunologie = {
        "id": assignedID,
        "masterText": "IMUNOLOGIE SI SEROLOGIE",
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
                    "TSH(hormon de stimulare tiroidiana)",
                    "",
                    "µUI/mL",
                    ""
                ]
            },
        ]
    }

    setInputs([...EveryInput,NewTemplateImunologie])
}

export default TemplateImunologie