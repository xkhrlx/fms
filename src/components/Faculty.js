import React from "react";
import '../css/certificate.css';
import '../css/faculty.css';
import NavbarSizer from "../navbarsUI/NavbarSizer";
import TableRowCertificate from "../certificatesUI/TableCertificate";
import TableCertificateMobile from "../certificatesUI/TableCertificateMobile";
import no_record_icon from "../images/no_record_icon.png";
import FacultyTopActions from "../FacultyUI/FacultyTopButton";
import EditCertificate from "../certificatesUI/EditCertificate";
import NavbarAdmin from "../navbarsUI/LeftNavbarAdmin";
import RightNavbarAdmin from "../navbarsUI/RightNavbarAdmin";
import EachFaculty from "../FacultyUI/EachFaculty";
import TableRowFaculty from "../FacultyUI/TableFaculty";


export default function Faculty() {

    document.title = "CICT | Faculty Management System";

    setTimeout(function(){
        document.getElementById("faculty_link").classList.add('nav_active');
        document.getElementById("link_faculty").style.pointerEvents="none";
    },10);



  return (
    <div className="dashboard_container">
        <NavbarAdmin/>

        <div className="main_content">
            <NavbarSizer />

            <div className="certificates_container" id="certificates_container">
      

                <div className="choices_faculty_page" style={{zIndex:"0"}}>
                    <div id="active_faculty" style={{zIndex:"0"}}>
                        Active Users
                    </div>
                    <div id="PDFView_PDS" style={{zIndex:"0"}}>
                        Pending Users
                    </div>
                </div>
                

                <div id="active_user_Table" style={{display:"block"}}>
                    <div className="table_container" id="table_containerID" style={{backgroundColor:"transparent",boxShadow:"none"}}>
                        <FacultyTopActions/>

                        <div className="certficate_scrollable" id="grid_table"  style={{display:"none"}}> 
                            <EachFaculty/>
                            <div className="no_searchFound6">
                                <img src={no_record_icon}/>
                                <p>No Faculty Available!</p>
                            </div>
                         </div>

                        <div className="certficate_scrollable1" id="row_table">
                            <TableRowFaculty/>
                        </div>

                        <div className="certificate_scrollable_mobile" id="rowMobile_table" style={{display:"none"}}>

                            <div className="no_searchFound2">
                                <img src={no_record_icon}/>
                                <p>No Certificate Available!</p>
                            </div>
                        </div>  
                    </div>
                </div>

            </div>


   
        </div>

        <RightNavbarAdmin/>
    </div>
  );
}