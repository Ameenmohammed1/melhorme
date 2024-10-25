let dcards = document.querySelector('.dcards');

let data = [
    {
        img: './images/Prof/athira.png',
        name: "Dr. ATHIRA .S",
        position: `Ayurveda Physician,Ayurveda Cosmetologist,
                    B.A.M.S, PGDAC`
    },
    {
        img: './images/Prof/shimna.png',
        name: "Mrs. Shimna Aneesh",
        position: `Dietician (MSc DFSM)and 
                   Diabetic Educator (MSc DFSM),
                   `
    },
    {
        img: './images/Prof/riyas.png',
        name: "Psy. Riyas Rumi",
        position: `Career counsellor, Psychologist`
    },
    {
        img: './images/Prof/seethu.png',
        name: "Dr. Seethu tv",
        position: `Ayurveda Physician BAMS, MSc(DFSM)`
    },
    {
        img: './images/Prof/abshad.png',
        name: "Dr. Mohamed Abshad",
        position: `MBBS, DPM, Psychiatrist`
    },
    {
        img: './images/Prof/anjana.jpg',
        name: "Psy. Anjana Ragesh",
        position: `Consultant psychologist, MSc Clinical and Counselling Psychology.`
    },
    {
        img: './images/Prof/sabeena.png',
        name: "Psy. Sabeena sajid",
        position: `Consultant Pschologist (geriatrics)`
    },
    {
        img: './images/Prof/shincy.png',
        name: "Psy shincy. KK",
        position: `consultant psychologist and remedial educator`
    },
    {
        img: './images/Prof/sachin.png',
        name: "Dr. Sachin M",
        position: `Consultant Psychiatrist MBBS, MD (Psy)`
    },
    {
        img: './images/Prof/shadha.png',
        name: "Psy. Shadha C K",
        position: `Consultant psychologist, MSc Clinical and Counselling Psychology.`
    },
    {
        img: './images/Prof/shibila.jpg',
        name: "Psy. Shibila Rejilesh",
        position: `senior consultant psychologist , personal fitness trainer`
    },
    {
        img: './images/Prof/hredya.png',
        name: "Dr. Hredya Sharal",
        position: `Homeopathy Physician, BHMS`
    },
    {
        img: './images/Prof/sheeja.png',
        name: "Dr. Sheeja Viswanathan",
        position: `Homeopathy physician, BHMS`
    },
 
  ];
  

function getDoctors(){
    data.map((obj) => {
        let mards = `<div class="dcard">
                        <img src="${obj.img}" class="dimg" alt="">
                        <p style="font-size: 1.4rem; font-weight: 900;">${obj.name}</p>
                        <p style="font-size: 0.9rem; text-align: center;">${obj.position}</p>
                        <a href="https://wa.me/918891554450?text=Hello" class="dbutton">Book Appointment</a>
                    </div>`;
        dcards.innerHTML += mards;  // use innerHTML to append the string
    });
}

getDoctors();
