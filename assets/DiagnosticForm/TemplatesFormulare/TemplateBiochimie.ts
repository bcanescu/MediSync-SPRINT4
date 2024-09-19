const TemplateBiochimie = (EveryInput:object[],setInputs:any,assignedID:string) =>{
    const NewTemplateBiochimie = {
        "id": assignedID,
        "masterText": "BIOCHIMIE",
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
                    "acid uric seric",
                    "",
                    "mg/dL",
                    ""
                ]
            },
            {
                "id": "4-2",
                "value": [
                    "alaninaminotransferaza(ALT/GPT/TGP)",
                    "",
                    "U/L",
                    ""
                ]
            },
            {
                "id": "4-3",
                "value": [
                    "aspartataminotransferaza(GOT/AST/TGO)",
                    "",
                    "U/L",
                    ""
                ]
            },
            {
                "id": "4-4",
                "value": [
                    "calciu seric",
                    "",
                    "mg/dL",
                    ""
                ]
            },
            {
                "id": "4-5",
                "value": [
                    "colesterol total",
                    "",
                    "mg/dL",
                    ""
                ]
            },
            {
                "id": "4-6",
                "value": [
                    "colesterol HDL",
                    "",
                    "mg/dL",
                    ""
                ]
            },
            {
                "id": "4-7",
                "value": [
                    "LDL colesterol",
                    "",
                    "mg/dL",
                    ""
                ]
            },
            {
                "id": "4-8",
                "value": [
                    "Creatinina serica",
                    "",
                    "mg/dL",
                    ""
                ]
            },
            {
                "id": "4-9",
                "value": [
                    "Rata estimata a filtrarii glomerulare(eGFR)",
                    "",
                    "ml/min/1.73mp",
                    ""
                ]
            },
            {
                "id": "4-10",
                "value": [
                    "glucoza serica(GLICEMIE)",
                    "",
                    "mg/dL",
                    ""
                ]
            },
            {
                "id": "4-11",
                "value": [
                    "trigliceride",
                    "",
                    "mg/dL",
                    ""
                ]
            },
        ]
    }

    setInputs([...EveryInput,NewTemplateBiochimie])
}

export default TemplateBiochimie