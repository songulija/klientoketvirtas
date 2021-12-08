import React, { useState } from 'react'
import '../styles/contactsStyle.css'
import { Form, Button } from 'react-bootstrap'
// const patternEmail = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

function ContactsScreen() {
    // const alert = useAlert();
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [number, setNumber] = useState("");
    const [topic, setTopic] = useState("");
    const [message, setMessage] = useState("");

    const validateForm = (e) => {
        e.preventDefault();
        let validated = 0;

        // const pattern = /[a-zA-Z0-9]+[\.]?([a-zA-Z0-9]+)?[\@][a-z]{3,9}[\.][a-z]{2,5}/g;
        // if(emailValidation === false){
        //     alert('Email is not validated')
        // }else{
        //     validated = validated + 1;
        // }
        let emailValid = emailValidate()
        if (emailValid === false) {
            alert("Blogas el. pašto adresas")
        } else {
            validated++;
        }
        let phoneValid = phoneValidate();
        if (phoneValid === false) {
            alert("Blogai įvestas tel nr.")
        } else {
            validated++;
        }
        let nameValid = nameValidate();
        if (nameValid === false) {
            alert("Varde negali būti simbolių ar skaičių. Vardo ilgis max 26 simboliai.!")
        } else {
            validated++;
        }
        let subjectValid = subjectValidate();
        if (subjectValid === false) {
            alert("Dalyke negali būti simbolių ar skaičių! Dalyko pavadinimas negali viršyti 26 simbolių!")
        } else {
            validated++;
        }
        console.log(validated)
        if(validated === 4){
            alert(name+' jūsų forma patvirtinta ir išsiųsta')
            setName("")
            setEmail("");
            setNumber("")
            setTopic("")
            setMessage("")
        }

    }
// nuo vieno iki triju. po tasko
    const emailValidate = () => {
        let regex = new RegExp(/[a-zA-Z0-9.]+@[a-zA-Z]+\.[a-zA-Z]{1,3}$/);
        var result = regex.test(email)
        return result;
    }
    const phoneValidate = () => {
        let regex = new RegExp(/^[+]+[0-9]{11}$/);
        var result = regex.test(number)
        return result;
    }
    const nameValidate = () =>{
        let regex = new RegExp(/^[a-zA-Z]{1,26}$/);
        var result = regex.test(name);
        return result;
    }
    const subjectValidate = () =>{
        let regex = new RegExp(/^[a-zA-Z]{1,26}$/);
        var result = regex.test(topic);
        return result;
    }

    return (
        <div class="container-fluid" style={{ width: '90%', textAlign: 'left', paddingBottom: '30px' }}>
            <div className='container py-4' style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', justifyContent: 'center' }}>
                <h1>Susisiekite su mumis išsiųsdami šią formą</h1>
                <Form style={{ width: '50%' }} onSubmit={validateForm}>
                    <Form.Group className="mb-3">
                        <Form.Label>Vardas</Form.Label>
                        <Form.Control required type="text" placeholder="Vardenis" value={name} onChange={(e) => setName(e.target.value)} />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>El. paštas</Form.Label>
                        <Form.Control required type="text" placeholder="pavyzdys@gmail.com" value={email} onChange={(e) => setEmail(e.target.value)} />
                        <Form.Text className="text-muted">
                            Mes niekada nepasidalinsim jūsų el. paštu su kitais.
                        </Form.Text>
                    </Form.Group>
                    <Form.Group className="mb-3">
                        <Form.Label>Tel. Nr*</Form.Label>
                        <Form.Control required type="text" placeholder="+37060855247" value={number} onChange={(e) => setNumber(e.target.value)} />
                    </Form.Group>
                    <Form.Group className="mb-3">
                        <Form.Label>Dalykas</Form.Label>
                        <Form.Control required type="text" placeholder="Dalykas" value={topic} onChange={(e) => setTopic(e.target.value)} />
                    </Form.Group>
                    <Form.Group className="mb-3">
                        <Form.Label>Žinutė*</Form.Label>
                        <Form.Control required as="textarea" rows={3} placeholder="Jūsų žinutė" value={message} onChange={(e) => setMessage(e.target.value)} />
                    </Form.Group>
                    <Button variant="primary" type="submit">
                        Siųsti
                    </Button>
                </Form>
            </div>
            <div class="container-fluid pt-3">
                <div class="row">
                    <div class="col-sm-12 col-md-7 col-lg-9">
                        <div>
                            {/* <!-- in row. will be many columns with containers that hold photos --> */}
                            <h1>Nemokamas prekių atsiėmimas</h1>
                            <p>telesott.lt parduotuvių sąrašą ir kontaktinę informaciją galite rasti čia.</p>
                            <p><b>Dėmesio!</b> Valstybinių švenčių dienomis Pigu.lt parduotuvės nedirba. Nedarbo dienų sąrašą rasite čia. </p>
                            <p><b>Dėmesio! Informuojame, kad nuo 2020 m. rugpjūčio 1 d. apsauginės veido kaukės uždarose prekybos vietose yra privalomos.</b></p>
                            <h1>Kontaktai</h1>
                            <ul>
                                <li>Klausimams apie prekes, užsakymo būklę, prekių garantijas: pagalba@telesott.lt</li>
                                <li>
                                    Turite nusiskundimų apie kokybę? Informuokite mus adresu: kokybe@telesott.lt
                                </li>
                                <li>
                                    Žiniasklaidai: spauda@telesott.lt
                                </li>
                                <li>
                                    Rinkodara: rinkodara@telesott.lt
                                </li>
                                <li>
                                    Komercija: partneriams@telesott.lt
                                </li>
                            </ul>

                            <h1>Norite bendradarbiauti?</h1>
                            <ul>
                                <li>Klausimams apie prekes, užsakymo būklę, prekių garantijas: pagalba@telesott.lt</li>
                                <li>
                                    Turite nusiskundimų apie kokybę? Informuokite mus adresu: kokybe@pigu.lt
                                </li>
                                <li>
                                    Žiniasklaidai: spauda@telesott.lt
                                </li>
                                <li>
                                    Rinkodara: rinkodara@telesott.lt
                                </li>
                                <li>
                                    Komercija: partneriams@telesott.lt
                                </li>
                            </ul>

                            <ul>
                                <li>Klausimams apie prekes, užsakymo būklę, prekių garantijas: pagalba@telesott.lt</li>
                                <li>
                                    Turite nusiskundimų apie kokybę? Informuokite mus adresu: kokybe@telesott.lt
                                </li>
                                <li>
                                    Žiniasklaidai: spauda@telesott.lt
                                </li>
                                <li>
                                    Rinkodara: rinkodara@telesott.lt
                                </li>
                                <li>
                                    Komercija: partneriams@telesott.lt
                                </li>
                            </ul>

                            <h1>Norite bendradarbiauti?</h1>
                            <ul>
                                <li>Klausimams apie prekes, užsakymo būklę, prekių garantijas: pagalba@telesott.lt</li>
                                <li>
                                    Turite nusiskundimų apie kokybę? Informuokite mus adresu: kokybe@telesott.lt
                                </li>
                                <li>
                                    Žiniasklaidai: spauda@telesott.lt
                                </li>
                                <li>
                                    Rinkodara: rinkodara@telesott.lt
                                </li>
                                <li>
                                    Komercija: partneriams@telesott.lt
                                </li>
                            </ul>
                            <h1>Administracija</h1>
                            <ul>
                                <li>Laisvės pr. 75, Vilnius, LT-06144</li>
                                <li>Telefonas: +370 661 05555</li>
                                <li>Faksas: +370 661 05515</li>
                            </ul>

                            {/* <!-- Table --> */}
                            <h1>Rekvizitai</h1>
                            <table>
                                <tr>
                                    <th>Įmonės kodas</th>
                                    <th>300866792</th>
                                </tr>
                                <tr>
                                    <td>PVM mokėtojo kodas</td>
                                    <td>LT100003292317</td>
                                </tr>
                                <tr>
                                    <td>Registracijos adresas</td>
                                    <td>Laisvės pr. 75, Vilnius, LT-06144
                                    </td>
                                </tr>
                                <tr>
                                    <td>Korespondencijos adresa</td>
                                    <td>Laisvės pr. 75, Vilnius, LT-06144
                                    </td>
                                </tr>
                                <tr>
                                    <td>Atsiskaitomoji sąskaita </td>
                                    <td>LT037300010110369900
                                    </td>
                                </tr>
                                <tr>
                                    <td>Bankas</td>
                                    <td>AB bankas „Swedbank“
                                    </td>
                                </tr>

                            </table>

                        </div>
                    </div>
                    <div class="col-sm-12 col-md-5 col-lg-3">
                        <aside>
                            <img class="img-fluid" src="https://i.pinimg.com/originals/4d/f6/94/4df694e19930bf6a21158dd284a77581.jpg" alt="Reklama" />
                        </aside>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ContactsScreen
