import Offer from "../Cards/Offer";

function Offers() {
    return (
        <>
            <section className="offer_section layout_padding-bottom">
                <div className="offer_container">
                    <div className="container ">
                    <div className="row">
                        <Offer/>
                        <Offer/>
                        {/* <div className="col-md-6  ">
                            <div className="box ">
                                <div className="img-box">
                                <img src="images/o2.jpg" alt=""></img>
                                </div>
                                <div className="detail-box">
                                <h5>
                                    Pizza Days
                                </h5>
                                <h6>
                                    <span>15%</span> Off
                                </h6>
                                <a href="">
                                    Order Now 
                                
                                </a>
                                </div>
                            </div>
                        </div> */}
                    </div>
                    </div>
                </div>
            </section>
        </>
    );
}

export default Offers;