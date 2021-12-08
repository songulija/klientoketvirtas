import React from 'react'
import '../styles/schemaStyles.css'


function SchemaScreen() {
    return (
        <div class="container-fluid" style={{  paddingBottom: '30px' }}>
            <div class="row">
                <div class="col-sm-12 col-md-8 col-lg-9 col-xl-9" style={{paddingBottom: '20px'}}>
                    <div>
                        <div class="page-block">
                            <h1>&lt div class="content"&gt</h1>
                            <div class="header-block">
                                <h1>&lt header &gt</h1>
                                <div class="nav-block">
                                    <h1>&lt nav &gt</h1>
                                </div>
                            </div>
                            <div class="wrapper">
                                <div class="content-block" id="content-block">
                                    <h1>&lt main &gt</h1>
                                </div>
                                <div class="aside-block" id="aside-block">
                                    <h1>&lt aside &gt</h1>
                                </div>
                            </div>

                            <div class="footer-block">
                                <h1>footer</h1>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-sm-12 col-md-4 col-lg-3 col-xl-3" style={{paddingBottom: '20px'}}>
                    <aside>
                        <img class="img-fluid" src="https://i.pinimg.com/originals/4d/f6/94/4df694e19930bf6a21158dd284a77581.jpg" alt="Reklama" />
                    </aside>
                </div>
            </div>
        </div>
    )
}

export default SchemaScreen
