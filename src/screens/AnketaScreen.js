import React from 'react'
import '../styles/anketaStyle.css'

function AnketaScreen() {
    return (
        <div class="container-fluid" style={{ width: '95%', paddingBottom: '30px' }}>
            <div class="container-fluid pt-3">
                <div class="row">
                    <div class="col-sm-12 col-md-8 col-lg-9">
                        <div>
                            <div class="row">
                                {/* <!-- one of containers that are basically representing phone --> */}
                                <div class="col-sm-16 col-md-6 col-lg-4 col-xl-3">
                                    <div class="container">
                                        <img src="https://cdn.tele2.lt/media/catalog/product/cache/1/image/x240/17f82f742ffe127f42dca9de82fb58b1/o/3/o3.png" alt="" />
                                        <div class="card-body">
                                            <h4>Mi 11 Lite 6/128GB, Dual</h4>
                                            <h4>149.99$</h4>
                                        </div>
                                    </div>
                                </div>

                                <div class="col-sm-16 col-md-6 col-lg-4 col-xl-3">
                                    <div class="container">
                                        <img src="https://cdn.tele2.lt/media/catalog/product/cache/1/image/x240/17f82f742ffe127f42dca9de82fb58b1/a/5/a52s-violet.png" alt="" />
                                        <div class="card-body">
                                            <h4>Mi 11 Lite 6/128GB, Dual</h4>
                                            <h4>149.99$</h4>
                                        </div>
                                    </div>
                                </div>

                                <div class="col-sm-16 col-md-6 col-lg-4 col-xl-3">
                                    <div class="container">
                                        <img src="https://cdn.tele2.lt/media/catalog/product/cache/1/image/x240/17f82f742ffe127f42dca9de82fb58b1/o/3/o3.png" alt="" />
                                        <div class="card-body">
                                            <h4>Mi 11 Lite 6/128GB, Dual</h4>
                                            <h4>149.99$</h4>
                                        </div>
                                    </div>
                                </div>

                                <div class="col-sm-16 col-md-6 col-lg-4 col-xl-3">
                                    <div class="container">
                                        <img src="https://cdn.tele2.lt/media/catalog/product/cache/1/image/x240/17f82f742ffe127f42dca9de82fb58b1/a/5/a52s-violet.png" alt="" />
                                        <div class="card-body">
                                            <h4>Mi 11 Lite 6/128GB, Dual</h4>
                                            <h4>149.99$</h4>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <hr></hr>
                            <p class="price">
                                Total $449.99
                            </p>
                            {/* <!-- form --> */}
                            <div id="forma">
                                <form action="/action_page.php">
                                    <label for="fname">First Name</label>
                                    <input type="text" id="fname" name="firstname" placeholder="Your name.." />

                                    <label for="lname">Last Name</label>
                                    <input type="text" id="lname" name="lastname" placeholder="Your last name.." />

                                    <label for="country">Country</label>
                                    <select id="country" name="country">
                                        <option value="australia">Australia</option>
                                        <option value="canada">Canada</option>
                                        <option value="usa">USA</option>
                                    </select>

                                    <label for="email">E-mail</label>
                                    <input type="email" id="email" name="email" placeholder="ex: myname@example.com" />
                                    <br></br>
                                    <label for="contact">Contact Numbe</label>
                                    <input type ="text" id="contact" name="contact" placeholder="(000 000-0000)"/>

                                    <label for="streetadress">Street Adress</label>
                                    <input type ="text" id="streetadress" name="streetadress"/>

                                    <label for="city">City</label>
                                    <input type ="text" id="city" name="city"/>

                                    <label for="postalcode">Postal / Zip Code</label>
                                    <input type ="text" id="postalcode" name="postalcode"/>


                                    <label class ="container">Paypal
                                    <input type ="radio" checked="checked" name="radio"/>
                                    <span class ="checkmark"></span>
                                    </label>
                                    <label class ="container">Mastercard
                                    <input type ="radio" name="radio"/>
                                    <span class ="checkmark"></span>
                                    </label>

                                    <input type ="submit" value="Submit"/>
                                </form>
                            </div>
                        </div>
                    </div>
                    <div class="col-sm-12 col-md-4 col-lg-3">
                        <aside>
                            <img class="img-fluid" src="https://i.pinimg.com/originals/4d/f6/94/4df694e19930bf6a21158dd284a77581.jpg" alt="Reklama" />
                        </aside>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AnketaScreen
