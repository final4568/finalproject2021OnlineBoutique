

import '../index.css';

const Top = () => {
    return (
        <>
            <div className="container-fluid" id="topbar_main">
                <div className="row">
                    <div className="col-left" id="col-left">
                            <div className="contact">
                                <i class="fa fa-phone" aria-hidden="true">   1-800-555-1234</i>
                            </div> 
                    </div>

                    <div className="col-right" id="col-right">                            
                        <i className="fa fa-envelope" aria-hidden="true"></i>info@loremipsum.com
                    </div>

                </div>
            </div>
        </>
      );
}
 
export default Top;