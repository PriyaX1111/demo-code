const questions = [
    {
        num: 1,
        question: "Which of the following blood test should be perform before a blood tranfusion?",
        answer: "Blood type and cross matching",
        options: [
            'PTI',
            'BT',
            'CT',
            'Blood type and cross matching'
        ],
        experienceLevel: "fresher",
    },
    {
        num: 2,
        question: "The Standard fifth vital sign is.",
        answer: "Pain",
        options: [
            'Pain',
            'Blood Pressure',
            'Pulse Oxymetry',
        ],
        experienceLevel: "fresher",
    },
    {
        num: 3,
        question: "Sterile technique is used whenever",
        answer: "Invasive procedure performed",
        options: [
            'Invasive procedure performed',
            'Terminal disinfection is performed',
            'Strict isolation is required',
        ],
        experienceLevel: "fresher",
    },
    {
        num: 4,
        question: "What is the most accurate way to measure cort temperature?",
        answer: "Rectally",
        options: [
            'Otic',
            'Rectally',
            'Orally',
        ],
        experienceLevel: "fresher"
    },
    {
        num: 5,
        question: "Normal Internal Body temperature is.",
        answer: "98.6°F (37°C)",
        options: [
            '98.6°F (37°C)',
            '98.8°F (37.7°C)',
            '96.0°F (35.6°C)',
        ],
        experienceLevel: "fresher"
    },
    {
        num: 6,
        question: "What are the Korotkoff Sounds",
        answer: "Sounds heard while measuring blood pressure",
        options: [
            'Sounds heard while measuring blood pressure',
            'Pathologist heart murmurs',
            'Functional heart murmurs',
        ],
        experienceLevel: "fresher"
    },
    {
        num: 7,
        question: "All of the following are good source of Vitamin A except?",
        answer: "White Potatoes",
        options: [
            'Eggs yolks',
            'White Potatoes',
            'Apricots',
            'Carrots',
        ],
        experienceLevel: "fresher"
    },
    {
        num: 8,
        question: "Which of the following is not a sign & symptom of respiratory distress?",
        answer: "Adoptions of a supine position by a patien",
        options: [
            'Adoptions of a supine position by a patien',
            'Nail bed cyanosis',
            'An expiratory grunt in children',
            'Breating through pursed lips',
        ],
        experienceLevel: "fresher"
    },
    {
        num: 9,
        question: "Treatment of delirium tremers is",
        answer: "Diazepam",
        options: [
            'Promethzine',
            'Diazepam',
            'Chlodixeproxide',
            'Respridom',
        ],
        experienceLevel: "fresher",
    },
    {
        num: 10,
        question: "What is compression ventilation radio during CPR ?",
        answer: "30:2",
        options: [
            '30:2',
            '33:2',
            '31:2',
            '35:2',
        ],
        experienceLevel: "fresher",
    },
    {
        num: 11,
        question: "Hypnotic drugs are used to treat?",
        answer: "Psychosis",
        options: [
            'Psychosis',
            'Sleep disorder',
            'Narcolepsy',
        ],
        experienceLevel: "fresher",
    },
    {
        num: 12,
        question: "The order is to infuse 1,000 ml of 0.9% salin over 8 hours how mush ml/hour to infuse",
        answer: "125 ml/ hour",
        options: [
            '120 ml/hour',
            '128 ml/hour',
            '125 ml/ hour',
            '120 ml/ hour',
        ],
        experienceLevel: "fresher",
    },
    {
        num: 13,
        question: "What is the full form of NABH?",
        answer: "National Accreditation Board for Hospitals",
        options: [
            "National Accreditation Board for Hospitals",
            "National Association of Business Hospitals",
            "National Agency for Health and Benefits",
            "National Advisory Board on Health"
        ],
        experienceLevel: "fresher"
    },
    {
        num: 14,
        question: "What does MLC stand for in medical terms?",
        answer: "Medical Legal Case",
        options: [
            "Medical Learning Community",
            "Medical Legal Case",
            "Multi-Layered Care",
            "Major Life Conditions"
        ],
        experienceLevel: "fresher"
    },
    {
        num: 15,
        question: "What is the full form of NURSE?",
        answer: "Nobel, Understanding, Responsibility, Sympathy, Efficient",
        options: [
            "Nursing Unit for Recovery and Support Education",
            "National Union of Registered and Supportive Employees",
            "Nursing Undergraduates Requiring Special Education",
            "Nobel, Understanding, Responsibility, Sympathy, Efficient"
        ],
        experienceLevel: "fresher"
    },
    {
        num: 16,
        question: "What does GCS stand for?",
        answer: "Glasgow Coma Scale",
        options: [
            "Glasgow Coma Scale",
            "General Clinical Services",
            "Global Care Standards",
            "Generalized Complications Scale"
        ],
        experienceLevel: "fresher"
    },
    {
        num: 17,
        question: "What is the full form of VAS?",
        answer: "Visual Analogue Scale",
        options: [
            "Visual Analogue Scale",
            "Vital Assessment Score",
            "Variable Adjustment System",
            "Visual Assessment Standard"
        ],
        experienceLevel: "fresher"
    },
    {
        num: 18,
        question: "What does BMI stand for?",
        answer: "Body Mass Index",
        options: [
            "Body Mass Index",
            "Basal Metabolic Indicator",
            "Body Measurement Index",
            "Basic Medical Index"
        ],
        experienceLevel: "fresher"
    },
    {
        num: 19,
        question: "What is the full form of BLS?",
        answer: "Basic Life Support",
        options: [
            "Basic Life Support",
            "Biochemical Life Standards",
            "Behavioral Life Skills",
            "Basic Living Standards"
        ],
        experienceLevel: "fresher"
    },
    {
        num: 20,
        question: "What does COPD stand for?",
        answer: "Chronic Obstructive Pulmonary Disease",
        options: [
            "Chronic Obstructive Pulmonary Disease",
            "Continuous Obstructive Pathway Disorder",
            "Cardiovascular Obstructive Pulmonary Disease",
            "Chronic Ongoing Pathology Disorder"
        ],
        experienceLevel: "fresher"
    },
    {
        num: 21,
        question: "What is the full form of CAD?",
        answer: "Coronary Artery Disease",
        options: [
            "Coronary Artery Disease",
            "Cardiac Arrhythmia Disorder",
            "Cardiovascular Aneurysm Disease",
            "Chronic Asthma Disease"
        ],
        experienceLevel: "fresher"
    },
    {
        num: 22,
        question: "What does VIP Score stand for?",
        answer: "Very Important Patient Score",
        options: [
            "Vital Indicators of Performance",
            "Very Important Patient Score",
            "Value in Patient Care Score",
            "Visual Impact Protocol Score"
        ],
        experienceLevel: "fresher"
    },
    {
        num: 24,
        question: "What are the rights of medication administration?",
        answer: "Right patients, right drug, right route, right dose, right time, right method/technique, right assessment, right evaluation, right documentation, right to refusal",
        options: [
            "Right patients, right drug, right route, right dose, right time, right method/technique, right assessment, right evaluation, right documentation, right to refusal",
            "Right patient, right medication, right time, right response.",
            "Right medication, right prescription, right time, right environment.",
            "Right dose, right frequency, right patient, right place."
        ],
        experienceLevel: "fresher"
    },    
    {
        num: 24,
        question: "What are the correct steps for effective hand washing?",
        answer: "Wet hands, palm to palm, dorsum of both hands, interlocking, interlacing, thumb rotation, knuckles & wrist, dry hands with the use of a single towel, use towel to turn off faucet.",
        options: [
            "Wet hands, palm to palm, dorsum of both hands, interlocking, interlacing, thumb rotation, knuckles & wrist, dry hands with the use of a single towel, use towel to turn off faucet.",
            "Wet hands, apply soap, rub together, rinse, dry immediately.",
            "Apply soap, scrub for 10 seconds, rinse, dry on air.",
            "Rinse hands under water, apply lotion, dry with a towel."
        ],
        experienceLevel: "fresher"
    },
    {
        num: 25,
        question: "What is the full form of MLC?",
        answer: "Medical Legal Case",
        options: [
            "Medical Learning Community",
            "Medical Legal Case",
            "Multi-Layered Care",
            "Major Life Conditions"
        ],
        experienceLevel: "below 1 year"
    },
    {
        num: 26,
        question: "What does COPD stand for?",
        answer: "Chronic Obstructive Pulmonary Disease",
        options: [
            "Chronic Obstructive Pulmonary Disease",
            "Continuous Obstructive Pathway Disorder",
            "Cardiovascular Obstructive Pulmonary Disease",
            "Chronic Ongoing Pathology Disorder"
        ],
        experienceLevel: "below 1 year"
    },
    {
        num: 27,
        question: "What is the full form of CAD?",
        answer: "Coronary Artery Disease",
        options: [
            "Coronary Artery Disease",
            "Cardiac Arrhythmia Disorder",
            "Cardiovascular Aneurysm Disease",
            "Chronic Asthma Disease"
        ],
        experienceLevel: "below 1 year"
    },
    {
        num: 28,
        question: "What does CPR stand for?",
        answer: "Cardiopulmonary Resuscitation",
        options: [
            "Cardiac Pressure Response",
            "Cardiopulmonary Resuscitation",
            "Continuous Patient Recovery",
            "Critical Patient Response"
        ],
        experienceLevel: "below 1 year"
    },
    {
        num: 29,
        question: "What is the full form of LAMA?",
        answer: "Leave Against Medical Advice",
        options: [
            "Leave Against Medical Advice",
            "Long Acting Muscarinic Antagonist",
            "Lasting Acute Medical Assessment",
            "Lung and Muscle Assessment"
        ],
        experienceLevel: "below 1 year"
    },
    {
        num: 30,
        question: "What does WBC stand for?",
        answer: "White Blood Cells",
        options: [
            "White Blood Cells",
            "Whole Blood Count",
            "Water-Based Cells",
            "White Bone Cells"
        ],
        experienceLevel: "below 1 year"
    },
    {
        num: 31,
        question: "Briefly define the 7 step[s of Hands Washing?",
        answer: "Wet hands, palm to palm, dorsum of both hands, interlocking, interlacing, thumb rotation, knuckles & wrist, dry hands with the use of a single towel, use towel to turn off faucet.",
        options: [
            "Wet hands, palm to palm, dorsum of both hands, interlocking, interlacing, thumb rotation, knuckles & wrist, dry hands with the use of a single towel, use towel to turn off faucet.",
            "Wet hands, apply soap, rub together, rinse, dry immediately.",
            "Apply soap, scrub for 10 seconds, rinse, dry on air.",
            "Rinse hands under water, apply lotion, dry with a towel."
        ],
        experienceLevel: "below 1 year"
    },
    {
        num: 32,
        question: "What are the 5 moments of handwashing?",
        answer: "Before Touching the patient, Before a procedure, After body fluid exposure, After touching a patient,After touching a patient's surroundings.",
        options: [
            "Before entering the hospital, After leaving the hospital, Before touching equipment, After cleaning surfaces, After touching a patient.",
            "Before a meeting, After handling paperwork, Before a procedure, After body fluid exposure, After touching medical instruments.",
            "Before eating, After using the restroom, Before touching the patient, After touching a patient, After touching a patient's surroundings",
            "Before Touching the patient, Before a procedure, After body fluid exposure, After touching a patient,After touching a patient's surroundings."
        ],
        experienceLevel: "below 1 year"
    },
    {
        num: 33,
        question: "The order is to infuse 1000ml of 0.9% saline over 8hrs. How much ml/hour to infuse?",
        answer: "125 ml/hr",
        options: [
            "120 ml/hr",
            "128 ml/hr",
            "125 ml/hr",
            "130 ml/hr"
        ],
        experienceLevel: "below 1 year"
    },
    {
        num: 34,
        question: "The order is to start insulin @ 8 units /hrs. the insulin bag contains 100 units of insulin in 200 ml of 0.9 ns .what will be the exact rate of flow.",
        answer: "16 ml/h",
        options: [
            "10 ml/hr",
            "12 ml/hr",
            "14 ml/hr",
            "16 ml/h"
        ],
        experienceLevel: "below 1 year"
    },
    {
        num: 35,
        question: "What is the gauge size of a grey I/V cannula?",
        answer: "16",
        options: [
            "14",
            "16",
            "18",
            "20"
        ],
        experienceLevel: "below 1 year"
    },
    {
        num: 36,
        question: "What is the gauge size of a Green I/V cannula?",
        answer: "18",
        options: [
            "14",
            "16",
            "18",
            "20"
        ],
        experienceLevel: "below 1 year"
    },
    {
        num: 37,
        question: "What is the gauge size of a Pink I/V cannula?",
        answer: "20",
        options: [
            "14",
            "16",
            "18",
            "20"
        ],
        experienceLevel: "below 1 year"
    },
    {
        num: 38,
        question: "What is the gauge size of a Blue I/V cannula?",
        answer: "22",
        options: [
            "22",
            "16",
            "18",
            "20"
        ],
        experienceLevel: "below 1 year"
    },
    {
        num: 39,
        question: "What is the gauge size of a Yellow I/V cannula?",
        answer: "24",
        options: [
            "22",
            "24",
            "18",
            "20"
        ],
        experienceLevel: "below 1 year"
    },
    {
        num: 39,
        question: "What is the gauge size of a Purple I/V cannula?",
        answer: "26",
        options: [
            "22",
            "24",
            "26",
            "20"
        ],
        experienceLevel: "below 1 year"
    },
    {
        num: 40,
        question: "What are the normal glucose level in new born?",
        answer: "50-70 mg/dl",
        options: [
            "40-45 mg/dl",
            "35-45 mg/dl",
            "50-70 mg/dl",
            "40-60 mg/dl"
        ],
        experienceLevel: "below 1 year"
    },
    {
        num: 41,
        question: "What are normal vital parameters of new born?",
        answer: "Temp 97.4-99.6 ºF, HR 120-160, 40-60",
        options: [
            "Temp 98º F, HR 130-180, 60-80, Resp",
            "Temp 97.4-99.6 ºF, HR 120-160, 40-60",
            "Temp 98.6º F, HR 100-120, 30-40",
            "Temp 99º F, HR 80-100, 45-50"
        ],
        experienceLevel: "below 1 year"
    },
    {
        num: 42,
        question: "How often the side of the bed ridden patient needs to be changed .(mouth care + Back care)",
        answer: "2 hourly",
        options: [
            "3 hourly",
            "2 hourly",
            "1 hourly",
            "4 hourly"
        ],
        experienceLevel: "below 1 year"
    },
    {
        num: 43,
        question: "Foley’ used in adults.",
        answer: "14-18",
        options: [
            "14-20",
            "12-16",
            "16-18",
            "14-18"
        ],
        experienceLevel: "below 1 year"
    },
    {
        num: 44,
        question: "Foley’ used in children.",
        answer: "4-10",
        options: [
            "5-12",
            "4-10",
            "6-12",
            "3-7"
        ],
        experienceLevel: "below 1 year"
    },
    {
        num: 45,
        question: "The type of antagonism are?",
        answer: "Summarized",
        options: [
            "Ostomy",
            "Summarized",
            "Potentiated",
            "Competitive"
        ],
        experienceLevel: "below 1 year"
    },
    {
        num: 46,
        question: "A good local anesthetic agent should not cause?",
        answer: "Local irritation",
        options: [
            "Local irritation",
            "Systemic toxicity",
            "Fast and long duration of action",
            "Vasodilatation"
        ],
        experienceLevel: "below 1 year"
    },
    {
        num: 47,
        question: "While giving CPR for an infant, the depth of compression should be?",
        answer: "1 inch",
        options: [
            "2.0 inch",
            "0.5-1 inch",
            "1 inch",
            "1-1.5 inch"
        ],
        experienceLevel: "below 1 year"
    },
    {
        num: 48,
        question: "The new born stomach capacity is?",
        answer: "15 ml",
        options: [
            "15 ml",
            "20 ml",
            "40 ml",
            "30 ml"
        ],
        experienceLevel: "below 1 year"
    },
    {
        num: 49,
        question: "The most common phobia in clinical practice is?",
        answer: "Social phobia",
        options: [
            "Gamo phobia",
            "Agora phobia",
            "Social phobia",
            "Claustro phobia"
        ],
        experienceLevel: "below 1 year"
    },
    {
        num: 50,
        question: "Which of  the following is the last resort to control external bleeding?",
        answer: "Direct pressure",
        options: [
            "Direct pressure",
            "Elevation above the level of heart",
            "use of tourniquet",
            "use of pressure point"
        ],
        experienceLevel: "below 1 year"
    },
    {
        num: 51,
        question: "Treatment of delirium tremers is?",
        answer: "Diazepam",
        options: [
            "Promethazine",
            "Chlodiaxepoxide",
            "Diazepam",
            "Respiridon"
        ],
        experienceLevel: "below 1 year"
    },
    {
        num: 52,
        question: "Normal duration of pregnancy (in days) is?",
        answer: "280 days",
        options: [
            "250 days",
            "266 days",
            "277 days",
            "280 days"
        ],
        experienceLevel: "below 1 year"
    },
    {
        num: 53,
        question: "Common sites of bedsores are",
        answer: "all of these",
        options: [
            "Sacrum",
            "Heels",
            "all of these",
            "Elbows"
        ],
        experienceLevel: "below 1 year"
    },
    {
        num: 54,
        question: "Which of the following is a fungal infection of the feet?",
        answer: "Athelete’s foot disease",
        options: [
            "Madura foot disease",
            "Athelete’s foot disease",
            "club foot and talipes",
            "Hyperidlosis and bromidrosis"
        ],
        experienceLevel: "below 1 year"
    },
    {
        num: 55,
        question: "Tolerance and drug resistance can be consequence of?",
        answer: "Drug dependence",
        options: [
            "Drug dependence",
            "Increased metabolic degradation",
            "Depressed renal excretion",
            "Activation of a drug after hepatic first pass"
        ],
        experienceLevel: "below 1 year"
    },
    {
        num: 56,
        question: "The term gastric lavage means?",
        answer: "Aspirating the fluid from stomach",
        options: [
            "Aspirating the fluid from stomach",
            "Increased metabolic degradation",
            "Withdrawing of fluid from nose"
        ],
        experienceLevel: "below 1 year"
    },
];