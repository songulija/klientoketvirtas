import React from 'react'

function AboutScreen() {
    return (
        <div class="container-fluid" style={{ width: '95% !important' }}>
            <section>
                <img width="100%" src="https://www.svyturiolaikrastis.lt/wp-content/uploads/2021/02/tele-2.png" alt="Nauji pasiūlimai" />
            </section>
            <div>

                <div class="pt-4 p-md-5 m-md-3 text-center">
                    <h1>Apie mus</h1>
                    <p style={{fontSize: '1.4rem',fontWeight: '500'}}>Telesot yra vienas pirmaujančių operatorių Europoje. Lietuvoje bendrovė teikia mobiliojo ir fiksuoto ryšio, duomenų perdavimo, išmaniosios televizijos ir turinio paslaugas. Bendrovės paslaugomis naudojasi 1,9 mln. vartotojų. Nuo 2000
                        m.
                    </p>
                </div>
            </div>
            <div class="container my-5">
                <div class="row">
                    <div class="col-sm-12 col-md-12 col-lg-6 col-xl-6" style={{padding: '0 !important'}}>
                        <div class="container bg-dark text-white py-4" style={{width:'100%', height:'300px'}}>
                            <i class="fab fa-joomla fa-7x text-warning"></i>
                            <p class="intro-big">Nuo nulio iki mėnulio</p>
                            <p>Arba kaip, kada ir kodėl TELESOTT tapo Nr.1</p>
                            <button type="button" class="btn btn-light">Skaityti</button>
                        </div>
                    </div>

                    <div class="col-sm-12 col-md-12 col-lg-6 col-xl-6" style={{padding: '0 !important'}}>
                        <div class="container bg-light text-dark pt-5" style={{width:'100%', height:'300px'}}>
                            <div class="container" style={{width: '80%',height:'300px'}}>
                                <h1>2020</h1>
                                <p class="second-intro-text">Pasauliui kovojant su pandemija, TELESOTT: padėjo darbuotojams, bendruomenei ir klientams išgyventi nežinomybės kupiną laikotarpį. O pakeliui sukūrė pirmąją bekontaktę reklamą, tapo tvariausiu
                                    mobiliojo ryšio
                                    operatoriumi Lietuvoje ir klimatui neutralia bendrove Švedijoje bei Baltijos šalyse. </p>
                            </div>

                        </div>
                    </div>
                </div>

            </div>
            <h1 class="pt-5 pb-3"><b>Mūsų vertybės</b></h1>
            <div class="container-fluid py-4" style={{width:'100%'}}>
                <div class="row">
                    <div class="col-sm-12 col-md-6 col-lg-4 col-xl-4">
                        <div class="container">
                            <img class="w-75 rounded" src="https://www.cdc.gov/policy/polaris/economics/assets/economics-img/cost-effectiveness-hero.png" alt="Drasa foto" />
                            <div class="container py-2">
                                <h2>
                                    <b>Drąsa</b>
                                </h2>
                                <p>
                                    Kai kurie iššūkiai atrodo neįmanomi, o tada ateina TELESOTT.
                                </p>
                            </div>
                        </div>
                    </div>

                    <div class="col-sm-12 col-md-6 col-lg-4 col-xl-4">
                        <div class="container">
                            <img class="w-75 rounded" src="https://www.cdc.gov/policy/polaris/economics/assets/economics-img/cost-illness-hero.png" alt="Efektyvumas foto" />
                            <div class="container py-2">
                                <h2>
                                    <b>Efektyvumas</b>
                                </h2>
                                <p>
                                    Atsakingas požiūris į finansus - kelias į mažiausias kainas.
                                </p>
                            </div>
                        </div>
                    </div>

                    <div class="col-sm-12 col-md-6 col-lg-4 col-xl-4">
                        <div class="container">
                            <img class="w-75 rounded" src="https://www.cdc.gov/policy/polaris/economics/assets/economics-img/program-cost-hero.png" alt="Patikimumas foto" />
                            <div class="container py-2">
                                <h2>
                                    <b>Patikimumas</b>
                                </h2>
                                <p>
                                    Mūsų darbas, kad klientas visada būtų patenkintas.
                                </p>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default AboutScreen
