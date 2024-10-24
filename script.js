let dcards = document.querySelector('.dcards');

let data = [
    {
        img: './images/Prof/athira.png',
        name: "Dr. ATHIRA .S",
        position: `Dept of ayurveda
                    B.A.M.S, PGDAC,
                    Ayurveda cosmetologist`
    },
    {
        img: './images/Prof/D2.jpg',
        name: "Dr. Hredya Sharal",
        position: `Department of Homeopathy, BHMS`
    },
    {
        img: './images/Prof/D3.jpg',
        name: "Mrs. Shimna Aneesh",
        position: `Dietician (MSc DFSM), 
                   Diabetic Educator,
                   Department of dietetics and clinical nutrition`
    },
    {
        img: './images/Prof/D4.jpg',
        name: "Psy. Riyas Rumi",
        position: `Career counsellor, Psychologist`
    },
    {
        img: './images/Prof/seethu.png',
        name: "Dr. Seethu tv",
        position: `Dept of ayurveda BAMS, MSc(DFSM)`
    },
    {
        img: './images/Prof/abshad.png',
        name: "Dr. Mohamed Abshad",
        position: `MBBS, DPM, Psychiatrist`
    },
    {
        img: './images/Prof/anjana.jpg',
        name: "Psy. Anjana",
        position: `MBBS, DPM, Psychiatrist`
    },
    {
        img: './images/Prof/sabeena.png',
        name: "Psy. Sabeena sajid",
        position: `Consultant Pschologist ( geriatrics)`
    },
    {
        img: './images/Prof/shincy.png',
        name: "Psy shincy. KK",
        position: `consultant psychologist and remedial educator`
    },
    {
        img: './images/Prof/sachin.png',
        name: "Dr. Sachin M",
        position: `Consultant Psychiatrist
MBBS, MD ( Psy) Ayurveda Physician and nutrition consultant`
    },
    {
        img: './images/Prof/shadha.png',
        name: "Psy. Shadha C K",
        position: ` Consultant psychologist, MSc Clinical and Counselling Psychology.`
    },
  ];
  

function getDoctors(){
    data.map((obj) => {
        let mards = `<div class="dcard">
                        <img src="${obj.img}" class="dimg" alt="">
                        <p style="font-size: 1.4rem; font-weight: 900;">${obj.name}</p>
                        <p style="font-size: 0.9rem; text-align: center;">${obj.position}</p>
                        <a href="https://wa.me/8891554450?text=Hello" class="dbutton">Book Appointment</a>
                    </div>`;
        dcards.innerHTML += mards;  // use innerHTML to append the string
    });
}

getDoctors();
