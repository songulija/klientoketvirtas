import React from 'react'
import '../styles/galeryStyle.css'

const containerStyle = {
    padding: '0 !important'
}


function GaleryScreen() {
    return (
        <div class="container-fluid" style={{ width: '95%', paddingBottom: '30px' }}>
            <div>
                <img class="w-100" src="https://www.svyturiolaikrastis.lt/wp-content/uploads/2021/02/tele-2.png" alt="Nauji pasiūlimai" />
            </div>
            <div class="row">
                <div class="col-sm-12 col-md-7 col-lg-9">
                    <div>
                        {/* <!-- in row. will be many columns with containers that hold photos --> */}
                        <div class="row">
                            {/* <!-- 12 images for additional 4 rows 3 rows on Pc SCREEN --> */}
                            <div class="col-sm-12 col-md-6 col-lg-4 col-xl-3 galerycontainer"   >
                                <img width="100%" src="https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8cGhvbmV8ZW58MHx8MHx8&ixlib=rb-1.2.1&w=1000&q=80" alt="Telefono fotografija" />
                            </div>
                            <div class="col-sm-12 col-md-6 col-lg-4 col-xl-3 galerycontainer"   >
                                <img width="100%" src="https://cdn.vox-cdn.com/thumbor/SJcmPEheS_cbdujd4zbIPTpuXfg=/1400x1400/filters:format(jpeg)/cdn.vox-cdn.com/uploads/chorus_asset/file/13315959/akrales_181019_3014_0770.jpg" alt="Telefono fotografija" />
                            </div>
                            <div class="col-sm-12 col-md-6 col-lg-4 col-xl-3 galerycontainer"   >
                                <img width="100%" src="https://d2xamzlzrdbdbn.cloudfront.net/products/1256fe7f-6a21-40ad-aa8e-8f83601997cc21170606_416x416.jpg" alt="Telefono fotografija" />
                            </div>
                            <div class="col-sm-12 col-md-6 col-lg-4 col-xl-3 galerycontainer"   >
                                <img width="100%" src="https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8cGhvbmV8ZW58MHx8MHx8&ixlib=rb-1.2.1&w=1000&q=80" alt="Telefono fotografija" />
                            </div>

                            <div class="col-sm-12 col-md-6 col-lg-4 col-xl-3 galerycontainer"   >
                                <img width="100%" src="https://www.mytrendyphone.eu/images/iPhone-13-Pro-128GB-Graphite-0194252715611-24092021-2-p.jpg" alt="Telefono fotografija" />
                            </div>
                            <div class="col-sm-12 col-md-6 col-lg-4 col-xl-3 galerycontainer"   >
                                <img width="100%" src="https://s3b.cashify.in/gpro/uploads/2021/03/29055514/apple-iphone-13-pro-front-3.png" alt="Telefono fotografija" />
                            </div>
                            <div class="col-sm-12 col-md-6 col-lg-4 col-xl-3 galerycontainer"   >
                                <img width="100%" src="https://cdn.vox-cdn.com/thumbor/SJcmPEheS_cbdujd4zbIPTpuXfg=/1400x1400/filters:format(jpeg)/cdn.vox-cdn.com/uploads/chorus_asset/file/13315959/akrales_181019_3014_0770.jpg" alt="Telefono fotografija" />
                            </div>
                            <div class="col-sm-12 col-md-6 col-lg-4 col-xl-3 galerycontainer"   >
                                <img width="100%" src="https://cdn.vox-cdn.com/thumbor/SJcmPEheS_cbdujd4zbIPTpuXfg=/1400x1400/filters:format(jpeg)/cdn.vox-cdn.com/uploads/chorus_asset/file/13315959/akrales_181019_3014_0770.jpg" alt="Telefono fotografija" />
                            </div>


                            <div class="col-sm-12 col-md-6 col-lg-4 col-xl-3 galerycontainer"   >
                                <img width="100%" src="https://cdn.vox-cdn.com/thumbor/SJcmPEheS_cbdujd4zbIPTpuXfg=/1400x1400/filters:format(jpeg)/cdn.vox-cdn.com/uploads/chorus_asset/file/13315959/akrales_181019_3014_0770.jpg" alt="Telefono fotografija" />
                            </div>
                            <div class="col-sm-12 col-md-6 col-lg-4 col-xl-3 galerycontainer"   >
                                <img width="100%" src="https://d2xamzlzrdbdbn.cloudfront.net/products/1256fe7f-6a21-40ad-aa8e-8f83601997cc21170606_416x416.jpg" alt="Telefono fotografija" />
                            </div>
                            <div class="col-sm-12 col-md-6 col-lg-4 col-xl-3 galerycontainer"   >
                                <img width="100%" src="https://s3b.cashify.in/gpro/uploads/2021/03/29055514/apple-iphone-13-pro-front-3.png" alt="Telefono fotografija" />
                            </div>
                            <div class="col-sm-12 col-md-6 col-lg-4 col-xl-3 galerycontainer"   >
                                <img width="100%" src="https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8cGhvbmV8ZW58MHx8MHx8&ixlib=rb-1.2.1&w=1000&q=80" alt="Telefono fotografija" />
                            </div>


                            <div class="col-sm-12 col-md-6 col-lg-4 col-xl-3 galerycontainer"   >
                                <img width="100%" src="https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8cGhvbmV8ZW58MHx8MHx8&ixlib=rb-1.2.1&w=1000&q=80" alt="Telefono fotografija" />
                            </div>
                            <div class="col-sm-12 col-md-6 col-lg-4 col-xl-3 galerycontainer"   >
                                <img width="100%" src="https://cdn.vox-cdn.com/thumbor/SJcmPEheS_cbdujd4zbIPTpuXfg=/1400x1400/filters:format(jpeg)/cdn.vox-cdn.com/uploads/chorus_asset/file/13315959/akrales_181019_3014_0770.jpg" alt="Telefono fotografija" />
                            </div>
                            <div class="col-sm-12 col-md-6 col-lg-4 col-xl-3 galerycontainer"   >
                                <img width="100%" src="https://d2xamzlzrdbdbn.cloudfront.net/products/1256fe7f-6a21-40ad-aa8e-8f83601997cc21170606_416x416.jpg" alt="Telefono fotografija" />
                            </div>
                            <div class="col-sm-12 col-md-6 col-lg-4 col-xl-3 galerycontainer"   >
                                <img width="100%" src="https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8cGhvbmV8ZW58MHx8MHx8&ixlib=rb-1.2.1&w=1000&q=80" alt="Telefono fotografija" />
                            </div>

                            <div class="col-sm-12 col-md-6 col-lg-4 col-xl-3 galerycontainer"   >
                                <img width="100%" src="https://www.mytrendyphone.eu/images/iPhone-13-Pro-128GB-Graphite-0194252715611-24092021-2-p.jpg" alt="Telefono fotografija" />
                            </div>
                            <div class="col-sm-12 col-md-6 col-lg-4 col-xl-3 galerycontainer"   >
                                <img width="100%" src="https://s3b.cashify.in/gpro/uploads/2021/03/29055514/apple-iphone-13-pro-front-3.png" alt="Telefono fotografija" />
                            </div>
                            <div class="col-sm-12 col-md-6 col-lg-4 col-xl-3 galerycontainer"   >
                                <img width="100%" src="https://cdn.vox-cdn.com/thumbor/SJcmPEheS_cbdujd4zbIPTpuXfg=/1400x1400/filters:format(jpeg)/cdn.vox-cdn.com/uploads/chorus_asset/file/13315959/akrales_181019_3014_0770.jpg" alt="Telefono fotografija" />
                            </div>
                            <div class="col-sm-12 col-md-6 col-lg-4 col-xl-3 galerycontainer"   >
                                <img width="100%" src="https://cdn.vox-cdn.com/thumbor/SJcmPEheS_cbdujd4zbIPTpuXfg=/1400x1400/filters:format(jpeg)/cdn.vox-cdn.com/uploads/chorus_asset/file/13315959/akrales_181019_3014_0770.jpg" alt="Telefono fotografija" />
                            </div>

                        </div>
                    </div>
                </div>
                <div class="col-sm-12 col-md-5 col-lg-3">
                    <aside>
                        <img class="img-fluid" src="https://i.pinimg.com/originals/4d/f6/94/4df694e19930bf6a21158dd284a77581.jpg" alt="Reklama" />
                    </aside>
                </div>
            </div>
        </div>
    )
}

export default GaleryScreen
