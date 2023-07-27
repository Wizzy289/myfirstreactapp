import { MDBIcon,
MDBBtn } from "mdb-react-ui-kit";
const Header = () => {
    return ( 
        <div style={{height: 200, backgroundColor: 'white', width: '100%'}} className="square border border-end-0 mt-5">
                <h2 className={'mx-5 mt-5 font-link'} display='flex'>
                BastiUi • Zeld'App (Zelda BOTW / TOTK iPhone App)
                </h2>
                <h6 className="mx-5 mt-3 font-link">
                <MDBIcon fas icon="american-sign-language-interpreting" /> By Basti Ui | Used by 521 people
                </h6>
                <div className="ms-5 font-link">
                <MDBBtn outline className='mx-2' color='secondary'>
                <MDBIcon far icon="heart" /> 54
                </MDBBtn>
                <MDBBtn className='me-3'>
                    Open in Figma
                 </MDBBtn>
                </div>

        </div>
     );
}
 
export default Header;