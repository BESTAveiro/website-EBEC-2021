$(document).ready(function () {

    var portuguese = {
        navbar: {
            img: "assets/img/logos/roldana-white.png",
            img2: "assets/img/logos/best-aveiro-white.png",
            lingua: "PT",
            page: "index.html",
            dropdowns: [
                {
                    title: "About EBEC",
                    menu: [
                        {nome: "EBEC Aveiro", ref: "#media"},
                        {nome: "Previous Editions", ref: '#ebecAnt'},
                        {nome: "Program", ref: '#programa'},
                        {nome: "Subscribing", ref: '#apply'},
                        {nome: "Testimonials", ref: '#testemunhos'},
                        {nome: "Jury", ref: "#juri"},
                    ]
                },
                {
                    title: "FAQ&Others",
                    menu: [
                        {nome: "FAQ", ref: "#faqs"},
                        {nome: "Partners", ref: "#partners"},
                        {nome: "The Team", ref: "#equipa"},
                        {nome: "Become Our Partner", ref: "#parceria"},
                        {nome: "Contacts", ref: "#contactos"}]
                },
                {
                    title: "About BEST",
                    menu: [
                        {nome: "About the BEST Aveiro", ref: "#best"},
                        {nome: "Information", ref: "#info"}]
                }
            ]

        },
        entrada: {
            logo: "assets/img/logos/ebec-aveiro-color.png",
            title: "March<br> 14th, 15th, 16th, 17th and 20th"
        },
        ebecAveiro: {
            sectionHeading: "EBEC Aveiro",
            icones: [
                {title: "Local Round", classe: "fa-map-pin"},
                {title: "Modalities", classe: "fa-tools"},
                //{title: "Formation", classe: "fa-chalkboard-teacher"},
                {title: "National Round", classe: "fa-award"},
            ],
            seccoes: {
                seccao1: {
                    ps: [
                        "<b style=\"color:orange\">BEST Aveiro</b> has the pleasure to announce the EBEC Aveiro 2021, one " +
                        "of the 88 local stages of the EBEC project, with the duration of 24 hours.",
                        " With the eleventh edition happening in <b style=\"color:orange\">March of 2021</b>, the event has been " +
                        "counting with a bigger number of participants each year. Considered one of the most outstanding " +
                        "events of BEST Aveiro, conceptualized with an eye at the students of the University of Aveiro, " +
                        "EBEC Aveiro aims to be a moment where creativity, challenge, energy, flexibility and team spirit " +
                        "are put into practice.",
                        /*"In order to promote a better relationship between students and companies, the EBEC Aveiro organization " +
                        "will promote, apart from the competition a cocktail network, on March 14th.",
                        "By any doubt, you can check the FAQ section or contact us by our team or by our information section."*/
                    ],
                    //subscribe: "Subscribe now!",
                    img: "assets/img/event/ebec-aveiro.png"
                },
                seccao2: {
                    title: "Modalities",
                    modalidades: [
                        {
                            title: "Case Study",
                            corpo: "Participants will have the opportunity to resolve two case studies " +
                                "provided by companies, which should consist in a problem that may arise from the company's " +
                                "need to innovate or optimize processes. Each of the case studies should be prepared to " +
                                "take up to 12 hours to solve, being delivered to the participants at the beginning of the competition."
                        },
                        {
                            title: "Team Design",
                            corpo: "Participants will have the opportunity to build a prototype that solves a challenge " +
                                "posed by a company with access to limited resources. The prototypes will then be evaluated " +
                                "by a jury based on parameters previously defined by the organization."
                        }
                    ]
                },
                /*seccao3: [
                    "The BEST Aveiro will organize again one more edition of the <b class=\"text-orange\">BEST Training Days</b>, " +
                    "from EBEC Aveiro 2019, where you will have the opportunity to develop your abilities in a formation.",
                    "The formation will occur during the afternoon of <b class='text-orange'>March 15th</b> and it is restricted " +
                    "to the participants.",
                    "All participants on the formation will receive a participation certificate."
                ],*/
                seccao4: [
                    "The EBEC Portugal is the national final competition of engineering of BEST.",
                    "The EBEC Portugal is a National Round organized by 5 Local Groups of BEST from north to south of the " +
                    "country, where the winners of the local EBECs will compete against each other.",
                    //"For more informations, visit the <a class=\"text-orange\" href=\"http://ebecportugal.pt/\" " +
                    //"target=\"_blank\">site</a>."
                ]
            }
        },
        edicoesAnteriores: {
            sectionHeading: "Previous Editions",
            videos: [
                "https://www.facebook.com/plugins/video.php?height=314&href=https%3A%2F%2Fwww.facebook.com%2FEBEC.aveiro%2Fvideos%2F403975390199860%2F&show_text=false&width=560",
                "https://www.facebook.com/plugins/video.php?href=https%3A%2F%2Fwww.facebook.com%2FEBEC.aveiro%2Fvideos%2F1347546375345790%2F",
                //"https://www.youtube.com/embed/osqsy-kDcU4"
            ]
        },
        programa: {
            title: "Program",
            schedule: [
                {
                    diaSemana: "Thursday", diaMes: "March 14th",
                    eventos: [
                        {
                            hora: "16:00 - 17:30",
                            nome: "Cocktail Network",
                            local: "Complexo Pedagógico, University of Aveiro"
                        }
                    ]
                },
                {
                    diaSemana: "Friday", diaMes: "March 15th",
                    eventos: [
                        {
                            hora: "18:00 - 20:00",
                            nome: "Best Training Days",
                            local: "Complexo Pedagógico, University of Aveiro"
                        }
                    ]
                },
                {
                    diaSemana: "Saturday", diaMes: "March 16th",
                    eventos: [
                        {hora: "09:30 - 10:30", nome: "Check-in", local: "DAO, University of Aveiro"},
                        {hora: "10:30 - 11:30", nome: "Opening Session", local: "DAO, University of Aveiro"},
                        {hora: "11:30 - 12:30", nome: "Companies Presentations", local: "DAO, University of Aveiro"},
                        {hora: "12:30 - 13:00", nome: "Picture", local: "Meia Lua, University of Aveiro"},
                        {hora: "13:00 - 14:30", nome: "Lunch", local: "Crasto refectory, University of Aveiro"},
                        {hora: "14:30 - 00:00", nome: "Competition", local: "ESSUA, University of Aveiro"}
                    ]
                },
                {
                    diaSemana: "Sunday", diaMes: "March 17th",
                    eventos: [
                        {hora: "00:00 - 14:30", nome: "Competition", local: "ESSUA, University of Aveiro"}
                    ]
                },
                {
                    diaSemana: "Wednesday", diaMes: "March 20th",
                    eventos: [
                        {hora: "13:30 - 18:00", nome: "Presentations", local: "ESSUA, University of Aveiro"},
                        {hora: "18:00 - 19:00", nome: "Closing Session", local: "ESSUA, University of Aveiro"}
                    ]
                }
            ]

        },
        apply: {
            sectionHeading: "Subscribing",
            sectionSubheading: "Here we will show you the steps to follow in order to apply as soon as applications are avaliable", //"To apply you only need to follow this steps:",
            corpo: [
                " Read the regulament that can be found <a href=\"../Regulamento.pdf\" target=\"_blank\">here</a>.",
                " Sign up on BEST Website. You can do it " +
                "<a href=\"https://www.best.eu.org/account/registration.jsp\" target=\"_blank\">here</a>.",
                " Do a pre-registration on EBEC Aveiro 2019. You can do it " +
                "<a href=\"https://www.best.eu.org/event/localDetails.jsp?event=o538j3f\" target=\"_blank\">here</a>.",
                " Write the name of your team. All the members of the team have to write the same name.",
                " Fill all the fields, with exception of 'Motivation Letter', which it's optional. Click on 'Apply' to finish " +
                "this part.",
                "Already have a team? So you finish your pre-registration to EBEC Aveiro 2018. Soon you will receive an " +
                "email with confirmation of registration and more information about the event."
            ]
        },
        testimonials: {
            sectionHeading: "Testi<span class=\"hidden-lg hidden-md hidden-sm\">-<br></span>monials",
            sectionSubheading: "Professors and Participants",
            testemunhos: [
                {
                    foto: "assets/img/testimonials/1.jpg",
                    corpo: "'Being EBEC's coordinator, is not having a normal day!', that is already a maximum to everyone " +
                        "of all the coordinators of this event and I couldn't agree more with that." +
                        "<br>It is fascinating being able to coordinate a team during 6 months with the aim to organize " +
                        "one more edition of an event that counts with more than a decade of existence." +
                        "<br>The weight of responsibility is, with no doubt, enormous, but everything compensates at the " +
                        "moment which, arrived the day of the event, we see the effort and passion that the participants " +
                        "adhere and involve themselves at the project.",
                    final: "João Valente<br>Coordinator of EBEC Challenge Aveiro 2018"
                },
                {
                    foto: "assets/img/testimonials/2.jpg",
                    corpo: " I already participate in 4 EBECs, in 2 consecutive years, and I can't get tired to participate. " +
                        "I believe it is a fantastic experience, that force us to think out of the box, solve difficult " +
                        "but interesting challenges, in a competitive environment but friendly and spectacular between all. " +
                        "It was thanks to EBEC that I have made friends in different universities and met fantastic people " +
                        "at my own university, created stronger bonds with my team's colleagues and learned a lot about " +
                        "investigate and try solutions to the given problems. It is worth, with no doubt",
                    final: "Francisco Power<br>Winner of EBEC Challenge Aveiro 2018<br>Modality: Team Design"
                },
                {
                    foto: "assets/img/testimonials/3.jpg",
                    corpo: " Participate in the EBEC was an amazing experience, not only for the opportunity to work in " +
                        "interesting challenges, but for the offered team building's moments and the excellent connections " +
                        "we could do too. Work with my colleagues was incredible! The best part was the way we have grown " +
                        "as a team after EBEC, and i think that was the most valuable thing that the competition could offer",
                    final: "Marcelo Manteigas<br>Winner of EBEC Challenge Aveiro 2018<br>Modality: Case Study"
                },
                {
                    foto: "assets/img/testimonials/5.jpg",
                    corpo: "My participation as jury of EBEC Aveiro last year has been a privilege, as a universitary teacher. " +
                        "Besides the always present good disposition, I had such a great pleasure to participate in a very " +
                        "organized event! Beyond the rigor and commitment demanded and showed in the resolution of technical-scientific " +
                        "questions, i felt, essentially, pleased with the human quality of the participants and the organization.<br>" +
                        "At the EBEC Aveiro, it has been achieved to foment the leadership's liking, and also to the spirit " +
                        "of the team and support. The multidisciplinary challenges are won by everybody, the participants' " +
                        "competences stand out, allowing to create a increased value in analmost natural and relaxed way!<br>" +
                        "In a time, when the current education methods are really criticized, it is, with no doubt, a fresh " +
                        "air blow, being able to realize that something is really well done! I wish, sincerely, all the " +
                        "success to the future editions!",
                    final: "Professor Mónica Oliveira<br>Mecanic Engineering Department<br>University of Aveiro"
                },
                {
                    foto: "assets/img/testimonials/4.jpg",
                    corpo: "At the University of Aveiro, BEST Aveiro's activities, particularly in the context of EBEC, " +
                        "there have been clear examples of success. On the one hand, they mobilize a considerable number " +
                        "of people, among participants, diverse collaborators and assistance. On the other hand, they present " +
                        "themselves as excellent initiatives in science, technology and engineering. The proposed challenges " +
                        "promote a clear growth of the involved students in issues as diverse as the practical application " +
                        "of scientific knowledge or the imagination and creativity required.<br/>Participants also benefit " +
                        "from the demands of teamwork with well defined objectives and a tight deadline, as well as direct " +
                        "contact with representatives of companies and relevant institutions.<br/>This is, moreover, one " +
                        "of the essential markers of merit of this organization, always supported by several entities that " +
                        "confirm the dynamism and quality of BEST Aveiro",
                    final: "Professor João Oliveira<br>Mechanical Engineering Department<br>University of Aveiro"
                }
            ]

        },
        faqs: {
            sectionHeading: "FAQ",
            sectionSubHeading: "Frequently Asked Questions",
            sectionSubHeading1: "TEAM DESIGN",
            sectionSubHeading2: "CASE STUDY",
            vetor: [
                {
                    p: "How long does the competition last?",
                    r: "You have 24 hours to build your prototype or get a solution for your <i>Case Study</i>. " +
                        "The presentation of your project will be on the next wednesday (march 20th)."
                },
                {
                    p: "How many members are there per team?",
                    r: "Each team must <u>always</u> have 4 members."
                },
                {
                    p: "When will we know what challenge we will have?",
                    r: "The challenge will be presented at the opening session, however, the script will only be distributed " +
                        "when the competition starts."
                },
                /*{
                    p: "Can we leave the University during the challenge?",
                    r: "Only external movements from the test location will be allowed exclusively with the approval of " +
                        "the event coordinator."
                },*/
                {
                    p: "What penalties exist during the test for participants?",
                    r: "In case of infringement of the rules established for the competition, the team may be penalized " +
                        "in the score of their challenge or disqualified." //The team may also lose their caution."
                },
                {
                    p: "Do we have to pay to participate in the competition?",
                    r: "No"/*, each team will only have to leave a caution. The value will be returned to you at the end of " +
                        "the competition after the closing session. This caution is intended to prevent any damage caused."*/
                },
                /*{
                    p: "Are we provide with food during the competition's weekend?",
                    r: "Yes, through the weekend you will be provide with all meals while you are taking part in the competition. " +
                        "You will also have a continuous coffee break available through the weekend."
                },
                {
                    p: "Can we rest during the challenge?",
                    r: "Yes, there will be a \"rest room\" for participants to rest and even sleep if they wish. There " +
                        "will also be a recreation room (room that will count on some leisure activities), to use during " +
                        "the intervals of the challenge, so that the participants relax a little."
                },
                */
                {
                    p: "Who will evaluate the challenges?",
                    r: "The jury consists on teachers, elements of BEST with experience in competitions, depending on the " +
                        "content of the challenge. There is also the possibility of joining the jury representatives of " +
                        "the partner companies."
                },
                {
                    p: "How will the projects be evaluated?",
                    r: "The projects will be evaluated according to the script of each challenge, in time provided to the " +
                        "participants."
                },
                {
                    p: "Whom should I ask questions during the challenge?",
                    r: "You can only ask questions with people designated for this purpose: the person responsible for the " +
                        "tests, the coordinator of the event and the topic group."
                },
                {
                    p: "I have an exam on the same day as the challenge. What now?",
                    r: "You should contact the organization to best fit the timing of your challenge on the day of presentation."
                },
            ]
        },
        juri: {
            sectionHeading: "Jury",
            sectionSubHeading: "Yet to be announced who will evaluate the competition",
            sectionSubHeading1: "TEAM DESIGN",
            sectionSubHeading2: "CASE STUDY",
            juri1: [
                {
                    nome: "Vitor Bonifácio",
                    foto: 'assets/img/juri/1.jpg',
                    conta: "https://www.linkedin.com/in/vitor-bonif%C3%A1cio-473455127/"
                },
                {
                    nome: "Ricardo Sousa",
                    foto: "assets/img/juri/2.jpg",
                    conta: "https://www.linkedin.com/in/ricardo-sousa-02a61317/"
                },
                {nome: "Bohdan Kulyk", foto: "assets/img/juri/3.jpg", conta: "https://www.linkedin.com/in/bohdankulyk/"}
            ],
            juri2: [
                {nome: "Diogo Gomes", foto: "assets/img/juri/4.jpg", conta: "https://www.linkedin.com/in/dgomes/"},
                {
                    nome: "João Labrincha",
                    foto: "assets/img/juri/5.jpg",
                    conta: "https://www.linkedin.com/in/jo%C3%A3o-labrincha-0b69549/"
                }
            ]
        },
        partners: {
            sectionHeading: "Partners",
            sectionSubHeading: "Media Partners",
            sectionSubHeading2: "promo Partners"
        },
        team: {
            sectionHeading: "The Team",
            equipa: [
                {nome: "Pedro D. Gomes", role: "Coordinator of EBEC Aveiro 2019", foto: "assets/img/team/david.jpg"},
                {nome: "Ana Moura", role: "Topic Responsible", foto: "assets/img/team/anaMoura.jpg"},
                {nome: "Dalila Marques", role: "Corporate Relations Responsible", foto: "assets/img/team/dalila.jpg"},
                {nome: "Ana Rita Silva", role: "Marketing Responsible", foto: "assets/img/team/anaRita.jpg"}
            ],
            equipa2: [
                {nome: "Renan Ferreira", role: "Information Tecnology Responsible", foto: "assets/img/team/renan.jpg"},
                {nome: "Beatriz Candeias", role: "Logistic Responsible", foto: "assets/img/team/beatriz.jpg"},
                {nome: "Marta Santos", role: "Participants Responsible", foto: "assets/img/team/marta.jpg"},
                {nome: "Luis Filipe Aguiar", role: "Public Relations Responsible", foto: "assets/img/team/luis.jpg"}
            ]
        },
        becomePartner: {
            sectionHeading: "Become Our Partner",
            corpo: [
                "By becoming our partner, your company will be integrated in the organization of EBEC Aveiro 2019, with " +
                "a dynamic team, that is committed to satisfy the needs of extracurricular activities development of the " +
                "students, as much as the interests of your company.", //You will have the opportunity to participate in our " +
                //"Job Fair and in our Cocktail Network.",
                /*"<span class='big-number text-blue'>•</span> Mark presence in our company fair and expose your company, " +
                "products and projects. You will have the opportunity of exchange experiences with students in a more " +
                "informal environment.",
                "<span class='big-number text-blue'>•</span> Benefit yourself with the access of available curricula, in " +
                "optional way, from the competition's participants and students of University of Aveiro present in the " +
                "closing session.",
                "<span class='big-number text-blue'>•</span> The right to work in line with the Topic Group, being able " +
                "to propose subjects, of Case Study as much as Team Design, that will be realized by the participants.",
                "As our partner, you will benefit with narrow interactions by students of the University of Aveiro, through " +
                "our company fair and a cocktail network, managing to collect many perceptions through our intense knowledge " +
                "sharing.",*/
                "Your company will increase its visibility between the students of the University of Aveiro, known by their " +
                "dynamism, innovation, and entrepreneurship, through the promotion available by BEST Aveiro.",
                "If you are interesting in being our partner, contact us through our team's <a class=\"text-blue-light\" " +
                "href=\"#contactos\">Contacts</a> or by the <a class=\"text-blue-light\" href=\"#info\">Information</a> " +
                "of BEST Aveiro."
            ]
        },
        contacts: {
            sectionHeading: "Contacts",
            people: [
                {
                    foto: "assets/img/team/david-2.jpg",
                    nome: "Pedro D. Gomes",
                    role: "Coordinator of EBEC Aveiro 2019",
                    tel: "+(351) 938 097 366",
                    email: "mailto:pedrodavid1969@gmail.com",
                    email2: "pedrodavid1969@gmail.com"
                },
                {
                    foto: "assets/img/team/mateus.jpg",
                    nome: "Mateus Lima",
                    role: "President of BEST Aveiro",
                    tel: "+351 913 396 248",
                    email: "mailto:mateus.lima@BEST.eu.org",
                    email2: "mateus.lima@BEST.eu.org"
                },
                /*{
                    foto: "assets/img/team/dalila-2.jpg",
                    nome: "Dalila Marques",
                    role: "Corporate Relations Responsible",
                    tel: "+(351) 917 369 988",
                    email: "mailto:dalilarakelam@gmail.com",
                    email2: "dalilarakelam@gmail.com"
                }*/
            ]
        },
        bestAveiro: {
            img: "assets/img/logos/best-aveiro-color.png",
            sectionHeading: "About the BEST Aveiro",
            corpo: [
                "Founded oficially in 2010, the Local Group Best Aveiro, hosted in University of Aveiro, counts with 45 " +
                "active members from Sciences, Technologies and Engineering fields. By its 8 years of history, distinguished " +
                "himself by its diversity e the quality of its organized events. These ones cover the students by local, " +
                "national and european level, focusing even on the development of the members of the Association, so they " +
                "can be in constant progression and learning.",
                "The BEST Aveiro offers the students the opportunity to participate in events that aim the complementarity " +
                "of his studies, organizing annually, a competition in the scientific-technologic field, Soft or Hard skills" +
                "formations, a seasonal course and a symposium of technological innovation. With the aim to strengthen " +
                "the relationship between students and companies, the BEST Aveiro still organizes, integrated in the EBEC " +
                "Competition, offering students relevant opportunities for their professional future and to the companies " +
                "bigger facility of communication and recruitment of the academic community."
            ]
        },
        info: {
            mapa: "https://www.google.com/maps/embed/v1/place?key=AIzaSyCMIUqakqzpEZx05JpVA7GaNhcpkfwyAyg&q=BEST Aveiro, Aveiro, PT",
            infos: [
                {
                    chave: "Address",
                    valor: "Incubadora de Empresas da Universidade de Aveiro<br/>Campus Universitário de Santiago, Edifício 1<br/>" +
                        "3810-193 Aveiro<br/>Portugal",
                    classe: "fa-home"
                },
                {chave: "Telephone", valor: "+351 917 077 329", classe: "fa-phone"},
                {
                    chave: "Email",
                    valor: "<a href='mailto:aveiro@BEST.eu.org'>aveiro@BEST.eu.org</a>",
                    classe: "fa-envelope"
                },
            ],
            sectionHeading: "Infor<span class=\"hidden-lg hidden-md hidden-sm\">-<br></span>mations",
            icones: [
                {ref: "http://bestaveiro.web.ua.pt/", classe: "fa-globe"},
                {ref: "https://www.facebook.com/EBEC.aveiro/", classe: "fa-facebook"},
                {ref: "https://instagram.com/best.aveiro/", classe: "fa-instagram"},
                {ref: "https://www.linkedin.com/company/best-aveiro", classe: "fa-linkedin-in"},
                {ref: "https://www.flickr.com/photos/bestaveiro", classe: "fa-flickr"}
            ]
        },
        footer: {
            img: "assets/img/partners/annual/ua-2.gif",
            img2: "assets/img/partners/annual/ipdj.png",
            img3: "assets/img/partners/annual/ua.png"
        }

    };

    var vm = {
        corpo: ko.observable(portuguese),
    };
    ko.applyBindings(vm);
});
