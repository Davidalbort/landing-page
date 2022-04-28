
// export const informationInSpanish = {
//     optionListNavigation: [{list:['Presentacion','Patrocinadores', 'Formulario'],typeList:'ul'}]
// }


export const informationInSpanish = {
    optionListNavigation: {list:['Presentacion','Patrocinadores', 'Formulario'],typeList:'ul'},

    section1: {typeTitle:'h1',tytle:'HACKATHON'} ,

    section2: {typeTitle:'h2',tytle:'Participa en el HACKATHON 2022 de taxis libres: el evento que crea soluciones, apoya el talento y creaatividad en colombia',paragraph:'Llega la hackathon 2022 de Taxis Libres que busca y queremos invitar a colombianos y a todo la gente a nivel mundial mayores de edad, para que se inscriban a este gran reto que se realizará por 48 horas. Habran premios para los primeros puestos',id:'Presentiacion'},

    section3: {typeTitle:'h2',tytle:'¿Qué es la Hackathon Taxis Libres y quiénes pueden participar?',paragraph:`Es una maratón de desarrollo virtual donde se reunirán programadores, diseñadores, data scientist's, mercadólogos, economistas, financieros y todos aquellos apasionados por la innovación y la creatividad.`},

    section4: {typeTitle:'h2',tytle:'¿Cuál es el objetivo?',paragraph:'Promover un espacio creativo en donde las personas del país pueden identificar problemáticas que hay y prototipar una solución mediante la creación de una aplicación teniendo presente estos aspectos claves en temas de movilidad, tecnologia y sostenibilida:',list:['Transporte con más seguridad','Rentabilidad de los conductores y propetarios','Transporte que se amigable con el medio ambiente'],typeList:'ul'},

    section5: {typeTitle:'h2',tytle:'¿Cuándo se realizará?',paragraph:'Este evento se llevará acabo en la modalidad virtual los días 24 y 25 de Junio '},

    section6: {typeTitle:'h2',tytle:'¿Cuáles  serán los premios y para quienes aplicaría?',paragraph:'Los premion aplicarian para lon tres primeros finalistas'},

    section7: {typeTitle:'h2',tytle:'Primer lugar',list:[`10'000.000`,'Una mackbook', 'Plan de 6 meses en Platzi para 6 personas'],typeList:'ul'},

    section8: {typeTitle:'h2',tytle:'Segundo lugar',list:[`5'000.000`,'Una mackbook', 'Plan de 6 meses en Platzi para 3 personas'],typeList:'ul'},

    section9: {typeTitle:'h2',tytle:'Tercer lugar',list:[`1'000.000`,`10 viajes en taxi (20.000 COP c/u)`, 'Plan de 6 meses en Platzi para 1 persona'],typeList:'ul'},

    section10: {typeTitle:'h2',tytle:'¿Quiénes son nuestros patrocinadores oficiales?',list:['Platzi', 'Mintic', 'Bancolombia',''],typeList:'ul'},

    formulary: {input1: {name:' * Nombre(s)',type:'text',placeHolder:'Escriba sus nombres',autoComplete:'given-name'},
                input2: {name:' * Apellido(s)',type:'text',placeHolder:'Escriba sus apellidos',autoComplete:'additional-name'},
                input3: {name:' * Numero de documento',type:'number'},
                input4: {name:' * Correo electrónico de contacto',type:'email',placeHolder:'Escriba su correo',autoComplete:'email'},
                input5: {name:' * Número telefónico de contacto',type:'number',placeHolder:'Escriba su número telefónico',autoComplete:'tel'},
                select1: {name:'* Tipo de documento', options:['Cédula de ciudadanía','Cédula de extranjería Colombiana','Documento extranjero','Pasaporte']},
                select2: {name:'* Género', autoComplete:'sex', options:['Femenino','Masculino','Trasgénero','Pasaporte','No registra']},
                select3: {name: '* Nacionalidad',autoComplete:'country-name', options: ["Afghanistan", "Albania", "Algeria", "Andorra", "Angola", "Antarctica", "Antigua and Barbuda",
                                                          "Argentina", "Armenia", "Australia", "Austria", "Azerbaijan", "Bahamas", "Bahrain", "Bangladesh", "Barbados",
                                                          "Belarus", "Belgium", "Belize", "Benin", "Bermuda", "Bhutan", "Bolivia", "Bosnia and Herzegovina", "Botswana",
                                                          "Brazil", "Brunei", "Bulgaria", "Burkina Faso", "Burma", "Burundi", "Cambodia", "Cameroon", "Canada", "Cape Verde",
                                                          "Central African Republic", "Chad", "Chile", "China", "Colombia", "Comoros", "Congo, Democratic Republic",
                                                          "Congo, Republic of the", "Costa Rica", "Cote d'Ivoire", "Croatia", "Cuba", "Cyprus", "Czech Republic", "Denmark",
                                                          "Djibouti", "Dominica", "Dominican Republic", "East Timor", "Ecuador", "Egypt", "El Salvador", "Equatorial Guinea",
                                                          "Eritrea", "Estonia", "Ethiopia", "Fiji", "Finland", "France", "Gabon", "Gambia", "Georgia", "Germany", "Ghana",
                                                          "Greece", "Greenland", "Grenada", "Guatemala", "Guinea", "Guinea-Bissau", "Guyana", "Haiti", "Honduras", "Hong Kong",
                                                          "Hungary", "Iceland", "India", "Indonesia", "Iran", "Iraq", "Ireland", "Israel", "Italy", "Jamaica", "Japan",
                                                          "Jordan", "Kazakhstan", "Kenya", "Kiribati", "Korea, North", "Korea, South", "Kuwait", "Kyrgyzstan", "Laos", "Latvia",
                                                          "Lebanon", "Lesotho", "Liberia", "Libya", "Liechtenstein", "Lithuania", "Luxembourg", "Macedonia", "Madagascar",
                                                          "Malawi", "Malaysia", "Maldives", "Mali", "Malta", "Marshall Islands", "Mauritania", "Mauritius", "Mexico", "Micronesia",
                                                          "Moldova", "Mongolia", "Morocco", "Monaco", "Mozambique", "Namibia", "Nauru", "Nepal", "Netherlands", "New Zealand",
                                                          "Nicaragua", "Niger", "Nigeria", "Norway", "Oman", "Pakistan", "Panama", "Papua New Guinea", "Paraguay", "Peru",
                                                          "Philippines", "Poland", "Portugal", "Qatar", "Romania", "Russia", "Rwanda", "Samoa", "San Marino", " Sao Tome",
                                                          "Saudi Arabia", "Senegal", "Serbia and Montenegro", "Seychelles", "Sierra Leone", "Singapore", "Slovakia", "Slovenia",
                                                          "Solomon Islands", "Somalia", "South Africa", "Spain", "Sri Lanka", "Sudan", "Suriname", "Swaziland", "Sweden",
                                                          "Switzerland", "Syria", "Taiwan", "Tajikistan", "Tanzania", "Thailand", "Togo", "Tonga", "Trinidad and Tobago",
                                                          "Tunisia", "Turkey", "Turkmenistan", "Uganda", "Ukraine", "United Arab Emirates", "United Kingdom", "United States",
                                                          "Uruguay", "Uzbekistan", "Vanuatu", "Venezuela", "Vietnam", "Yemen", "Zambia", "Zimbabwe"]},
                select4: {name:'* ¿Qué nivel de estudio tienes?', autoComplete:'', options:['Sin estudio','Preescolar','Básica media','Superior pregrado','Superior posgrado','No registra']},
                select5: {name:'* ¿Cuál es tu ocupación?', autoComplete:'', options:['Ingeniero', 'Programador', 'Diseñador', 'Comunicadores', 'Analistas de datos', 'Otros']},
            }

            }

const  {optionListNavigation,formulary} = informationInSpanish;

// console.log(formulary.input1.name);
// const h = optionListNavigation.map(item => item.list);
// console.log();

// list: [{iconLink:'https://www.linkedin.com/in/roger-david-alba-ortega-714077181/', icon:'fa-brands fa-linkedin'}, {iconLink:'https://github.com/Davidalbort', icon:'fa-brands fa-github'}]