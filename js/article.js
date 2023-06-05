// hente body container (hent box og lage en verdi inni en variabel) (html element)
const bodyElement = document.querySelector('body');

// bygge h1 og gi den en textcontent som title
const h1Element = document.createElement('h1');
h1Element.textContent = 'tittel til artikkel';


//bygge inn bilde img tag og en src bilde verdi
//const imgElement = Document.createElement('img');
//imgElement.src = './assets/blomst.jpg';
//imgElement.alt = 'blomst';

// en paragraph og legge inn en tekst 
const pElement = document.createElement('p');
pElement.textContent = 'heipådegduerkul'


//en nav list


//append alle elementer inn i hovedconteiner (Body)


bodyElement.appendChild(h1Element);
bodyElement.appendChild(imgElement);
bodyElement.appendChild(pElement);

//loop skal være her. se opptak 

const employees =[
    {
        person: {
        firstName: "Ami",
        lastName:"Johansen",
        age: 28,
        datOFbirth: '2001-01-24',
        nationality: 'norwegian',
 },
 Department : [
    'sales'
],
Email : [
     'ami.firma.no'

]
}
]

[
{
    person: {
    firstName: "frank",
    lastName:"kurt",
    age: 38,
    datOFbirth: '2007-01-24',
    nationality: 'French',
},
Department : [
'driver'
],
Email : [
 'franky.firma.no'

]
}
] 

[
    {
        person: {
        firstName: "Trine",
        lastName:"Holst",
        age: 48,
        datOFbirth: '1998-01-24',
        nationality: 'German',
    },
    Department : [
    'artist'
    ],
    Email : [
     'miss.firma.no'
    
    ]
    }
    ] 
    [
        {
            person: {
            firstName: "Knut",
            lastName:"jotn",
            age: 50,
            datOFbirth: '1999-01-24',
            nationality: 'Swedish',
        },
        Department : [
        'programmer'
        ],
        Email : [
         'knutis.firma.no'
        
        ]
        }
        ] 

        const bodyElement = document.querySelector('body');
        const ulElement = document.createElement('ul');


       

     

employees.array.forEach((employee) => {
     const ulElement = document.createElement ('li');
     liElement.textContent = `
         ${employee.person.firstName;}
         ${employee.person.lastName}
         ´;

            ulElement.appendChild(liElement)
});
bodyElement.appendChild(ulElement)

// les om map. nyttig når man skal bruke store mengder DATA 
