const Moment = require('moment');
const { webAuditFrontPage, webDisclaimer, tableOfContent_web, documentControl, introduction, scope, term_defination_legends, toolsAndReferences, executiveSummary, assessmentMethodology } = require('../json/auditJSON');
// import webAuditFrontPage from "../json/auditJSON"


module.exports = (reportData) => {
    // console.log("reportData", reportData)
    let current_date = Moment().format("MMM Do YY");
    var figure_count = 1;
    var page_no_global = 1;
    var table_of_content_page_count = 4;
    // console.log("list - ", list)
    // console.log("listmain - ", list)


    // loop to store vulnerabilities with order ->
    // critical -> high -> medium -> low -> informational
    // let newList = new Array()
    // for(let i =0 ; i< 5 ; i++){
    //     for(let j=0 ; j<list.length ; j++){
    //         if(list[j])
    //     }
    // }

    // Footer template --------------------->>>>>>>>>>>>
    // Footer Function 
    function footer_fun(page_no) {
        // console.log("data - ", page_no)
        return ``
    }

    function getlist(page_no) {
        return `
        <div class="d-flex justify-content-between ">
        <a  href="#contact_info">3.2 Assumptions
        <a href="#contact_info">${table_of_content_page_count++}  </a>
        </div>`
    }

    var table_count = 1;

    var vulberability_table_title_count = 8.1;

    function get_vulberability_table_title_count() {
        vulberability_table_title_count += 0.1;
        return vulberability_table_title_count.toFixed(1)
    }

    function print_all_vulnerability_POC(data) {
        // console.log("data", data)
        var result = ``;
        if (data === "null" || data === undefined) {
            return ``;
        }
        else {
            for (let i = 0; i < data.length; i++) {
                result += ` <div class="vulnerability_img">
                <img src="${process.env.AUDITOR_API_URI}images/${data[i].POCFilename}"
                style="width:100%; max-height:380px;">
                <p>Figure - ${figure_count++} ${data[i].POCDescription}</p>
                </div>`
            }
            // console.log("main", result)
            return result;
        }
    }

    function get_vulnerability_table(data) {
        return `
        <div class="body_template_class">
        <div class="content_heading" id="assessment_findings_details"></div>
        <div class="">
            <table class="table table-bordered mt-4" style="border-color:black;">

            <tbody>
            <tr  class="bg-sky-blue" >
                <td colspan="2" class="content_table_white fw-bold vulnerability_dynamic_table_heading">${get_vulberability_table_title_count()} ${data.Title}</td>
            </tr>
            <tr>
                <td class="content_table_white align-middle fw-bold" width="15%">Risk Level</td>
                <td class="content_table_white align-middle text-dark fw-normal ${data.Severity === "Informational" ? "bg-info" : data.Severity === "Critical" ? "bg-critical" : data.Severity === "High" ? "bg-danger" : data.Severity === "Medium" ? "bg-warning" : "bg-success"}">${data.Severity}</td>
            </tr>
            <tr>
                <td class="content_table_white align-middle" colspan="2"><strong class="fw-bold">Description : </strong>  ${data.Description}</td>
            </tr>
            <tr>
                <td class="content_table_white align-middle" colspan="2"><strong class="fw-bold">Impact : </strong>  ${data.Impact}</td>
            </tr>
            <tr>
                <td class="content_table_white align-middle" colspan="2"><strong class="fw-bold">Remediation : </strong>  ${data.Remediation}</td>
            </tr>
            <tr>
                <td class="content_table_white align-middle" colspan="2"><strong class="fw-bold">Affects : </strong>   ${data.Affects}
                </td>
            </tr>
            <tr>
                <td class="content_table_white align-middle fw-bold">Status</td>
                <td class="content_table_white align-middle fw-normal ${data.Status === "Open" ? "text-danger" : data.Status === "Closed" ? "text-success" : "text-dark"} " >${data.Status}</td>
            </tr>
        </tbody>
            </table>
            ${data.Status === "Closed" ? print_all_vulnerability_POC(data.POC) : ""}
            ${data.Status === "Open" ? print_all_vulnerability_POC(data.POC) : ""}
    </div>
   
    </div> 
    
`
    }

    // pdf complete CSS 
    let template_css = `     
    html {
        -webkit-print-color-adjust: exact;
    }

    body {
        font-family: 'Open Sans', sans-serif;
    }

    #page_1::before {
        content: "";
        position: absolute;
        top: 0px;
        right: 0px;
        bottom: 0px;
        left: 0px;
        z-index: -1;
        background-image: url(${process.env.AUDITOR_API_URI}images/fingerprint.png);
        background-repeat: no-repeat;
        background-size: cover;
        background-position: center;
        background-size: 1300px 1450px;
        opacity: 0.01;
    }

    .header_body {
        height: 110px;
        display: flex;
        padding-top: 40px;
        justify-content: end;
    }

    .header_body .logo {
        width: 130px;
    }

    .footer_body {
        height: 116px;
    }

    .sub_footer {
        display: flex;
        justify-content: space-between;
        font-size: 11px;
        align-items: center;
    }

    .footer_text {
        font-weight: 100;
        line-height: 1.2;
        text-align: justify;
        font-size: 11px;
    }

    .body_template_class {
        break-after: page;
        padding-left: 60px;
        padding-right: 60px;
        font-size: 16px;
        line-height: 24px;
        overflow: hidden;
        width: 100%;
    }

    .main_heading p {
        color: black;
        font-size: 40px;
        font-weight: 300 !important;
    }

    .sub_heading {
        padding-bottom: 45px;
    }

    .sub_heading p {
        color: black;
        font-size: 20px;
        padding-top: 10px;
        font-weight: 500;
    }

    .sub_heading small {
        padding-bottom: 10px;
        color: black;
        font-size: 10px;
        font-weight: 100;
    }

    .info {
        font-size: 14px;
    }

    .head {
        color: rgb(148, 0, 0);
        width: 150px;
    }

    .head2 {
        color: #fd625e;
    }

    /* page 2 CSS   */
    .table_of_content .main_heading h2 {
        color: rgb(148, 0, 0);
        font-size: 20px;
        font-weight: 500 !important;
    }

    .content a {
        font-size: 14px;
        font-weight: 400;
        text-decoration: none;
        line-height: 1.4;
        cursor: pointer;
        color: black;
        padding-bottom: 10px;
        display: flex;
        justify-content: space-between;
        flex-direction: column;
    }

    .report_heading,
    .report_heading {
        color: black;
    }


    .content .sub_content a {
        font-size: 13px;
        cursor: pointer;
        font-weight: 200;
        padding-left: 20px;
        display: flex;
        color: black;
        flex-direction: row;
        text-decoration: none;
        background-color: white;
        background-color: white;
        margin: 0;
    }

    .content .sub_content .sub_sub_content a {
        font-size: 12px;
        padding-left: 40px;
        text-decoration: none;
        display: flex;
        flex-direction: column;
        font-weight: 100;
        color: rgb(141, 141, 141);
        cursor: pointer;
        background-color: white;
        background-color: white;
        margin: 0;
    }

    .content .sub_content_heading p {
        font-size: 12px;
    }

    /* page 3 */
    .content_heading {
        color: rgb(148, 0, 0);
        font-size: 20px;
        margin-bottom: 15px;
        margin-top: 15px;
    }

    .sub_content_heading {
        color: rgb(148, 0, 0);
        font-size: 17px;
        margin-bottom: 15px;
        margin-top: 15px;
    }

    .sub_sub_content_heading {
        color: rgb(148, 0, 0);
        font-size: 15px;
        margin-bottom: 15px;
        margin-top: 15px;
    }

    .content p {
        font-weight: 100;
        text-align: justify;
        font-size: 14px;
        line-height: 1.4;
        margin-bottom: 2px;
        color: black;
    }

    .content ul li {
        text-align: justify;
        font-size: 13px;
        font-weight: 100 !important;
        line-height: 1.4;
    }


    /* page 4 */
    .content_table_grey {
        color: black;
        font-size: 13px;
        width: 30%;
        padding: 4px !important;
        font-weight: 100;
    }

    .content_table_white {
        padding: 4px !important;
        padding-left: 8px !important;
        font-size: 13px;
        line-height: 1.3;
        font-weight: 100;
    }

    .sub_content_table_grey {
        color: black;
        font-size: 13px;
        padding: 4px !important;
        font-weight: 100;
        text-align: center;
    }

    .sub_content_table_white {
        padding: 4px !important;
        color: black;
        text-align: center;
        font-size: 13px;
        font-weight: 100;
    }

    .contact_info {
        color: black;
        border: 1px solid rgb(148, 0, 0);
        padding: 10px;
        margin-top: 12px;
        text-align: center;
    }

    /* page 5 */
    .sub_content_heading .content {
        margin-top: 15px;
        color: black;
    }

    .sub_content_heading .content td {
        font-size: 12px;
    }


    /* page 6 */
    .bg-critical {
        background-color: red !important;
    }

    /* page 7 */
    .sub_sub_content_heading .content {
        margin-top: 10px;
        color: black;
    }

    .sub_sub_content_heading .content td {
        font-size: 12px;
    }

    .bg-sky-blue {
        background-color: #4FC3F7;
    }

    fw-custom {
        font-weight: 500;
    }

    .vulnerability_dynamic_table_heading {
        font-size: 15px;
    }

    .vulnerability_img {
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        width: 100%;
    }

    .vulnerability_img p {
        font-size: 10px;
    }

`
    async function get_rows() {
        let result = '';
        list.map((data) => {
            result += ` <tr>
            <td class="content_table_white  align-middle text-center">${table_count++}</td>
            <td class="content_table_white  ">Conduct Search Engine Discovery and Reconnaissance for
                Information Leakage</td>
            <td class="content_table_white  align-middle text-center bg-danger text-light">${data}</td>
            <td class="content_table_white  align-middle text-center text-danger">Open</td>
        </tr>`
        })
        console.log("result", result)
        return result;
    }

    //  header template -----------------------:>>>>>>>>>>>>>>>
    let header = `	
    `


    // let assessment_findings_overview template ------------------------------>>>>>>>>>>>>>>>>>>
    let assessmentFindingsOverview = `
    <div class="body_template_class">
    <div class="content_heading " id="assessment_findings_overview">7. Assessment Findings Overview 
   
    <div class="content pt-2">  <p>The table below provides a summary of the assessment findings categorized by group and ranked by severity. The table provides an overview of all of the findings from the assessment and allows the remediation team to focus efforts on the areas of highest severity as determined by Xiarch Labs. Click the individual link below to go directly to that finding.</p>
    <table class="table table-bordered mt-3" style="border-color:black;">
    <tbody>
        <tr class="bg-sky-blue">
            <td class="content_table_white  fw-bold  align-middle text-center" width="10%">S. No.</td>
            <td class="content_table_white fw-bold  align-middle">Vulnerability Title</td>
            <td class="content_table_white fw-bold  align-middle text-center">Severity</td>
            <td class="content_table_white fw-bold  align-middle text-center">Status</td>
        </tr>
      
    </tbody>
</table>
    </div>
    </div>
</div>
    `

    // let assisment_finding_interviewtemplate ------------------------------>>>>>>>>>>>>>>>>>>
    let assismentFindingDetails = `
    <div class="body_template_class">
    <div class="content_heading" id="assessment_findings_details">8. Assessment Findings Details</div>
    <div class="">
        <table class="table table-bordered mt-4" style="border-color:black;">
            <tbody>
              
            </tbody>
        </table>
</div>
</div>
    `

    // let tools_and_references template ------------------------------>>>>>>>>>>>>>>>>>>


    return `<!doctype html>
    <html>
    
    <head>
        <meta charset="utf-8">
        <title>A simple, clean, and responsive HTML invoice template</title>
       
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.1/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-iYQeCzEYFbKjA/T2uDLTpkwGzCiq6soy8tYaI1GyVh/UjpbCx/TYkiZhlZB6+fzT" crossorigin="anonymous">
        <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.1/dist/js/bootstrap.bundle.min.js" integrity="sha384-u1OknCvxWvY5kfmNBILK2hRnQC3Pr17a+RTT6rIHI7NnikvbZlHgTPOOmMi466C8" crossorigin="anonymous"></script>

        <link rel="preconnect" href="https://fonts.googleapis.com">
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
        <link href="https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,300;0,400;0,500;0,600;0,700;0,800;1,300;1,400;1,500;1,600;1,700;1,800&display=swap" rel="stylesheet">

        <style>

        ${template_css}
        </style>
    </head>
    
    <body>
    

    <!--FRont  page -->
    ${webAuditFrontPage}

    <!-- page disclaimer -->
    ${webDisclaimer}

    <!-- page tableOfContent_web -->
    ${tableOfContent_web}

    <!-- page documentControl -->
    ${documentControl}

    <!-- page introduction -->
    ${introduction}

    <!-- page scope -->
    ${scope}

    <!-- page term_defination_legends -->
    ${term_defination_legends}

    <!-- page assessmentMethodology -->
    ${assessmentMethodology}
    
    <!-- page executiveSummary - 9 -->
    ${executiveSummary}

    <!-- page assessmentFindingsOverview -->
    ${assessmentFindingsOverview}

    <!-- page assismentFindingDetails-->
    ${assismentFindingDetails}

    <!-- pagedynamic pages  -->
    
    <!-- page twelve - 12 -->
    <div class="page" id="">
    ${toolsAndReferences}
    </div>
       
    </body>     
    </html> `;
};