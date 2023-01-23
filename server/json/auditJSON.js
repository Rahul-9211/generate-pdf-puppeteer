
const Moment = require('moment')
let current_date = Moment().format("MMM Do YY");

var table_of_content_page_count = 4;

const webAuditFrontPage = `
<div class="body_template_class">
        <br /> <br /> <br /> <br /> <br /> <br /> <br /> <br /> <br /> <br /> <br /> <br /> <br />
        <div class="main_heading">
            <p id="logo">Web Penetration Testing Report</p> <br /> 
        </div>
        <div class="report_for sub_heading">
        <br><br>
        <div class='pageNumber'></div>
        <table style="width:400px">
            <tbody class="info">
            <tr>
                <td class="head report_heading">Report For :</td>
            </tr>
                <tr>
                    <td class="head">Organization Name</td>
                    <td class="head2"> : </td>
                    <td class="data">SampleCorp LLC</td>
                </tr>
                <tr>
                    <td class="head">Report Date</td>
                    <td class="head2"> : </td>
                    <td class="data">${current_date}</td>
                </tr>
            </tbody>
        </table></div>

        <br><br><br>
        <div class="report_by sub_heading">
        
        <table style="width:400px">
            <tbody class="info ">
            <tr>
                <td class="head report_heading">Report By :</td>
            </tr>
                <tr>
                    <td class="head">Organization Name</td>
                    <td class="head2"> : </td>
                    <td class="data">Xiarch Solutions Pvt Ltd</td>
                </tr>
                <tr>
                    <td class="head">Report Date</td>
                    <td class="head2"> : </td>
                    <td class="data">${current_date}</td>
                </tr>
                
                <tr>
                    <td class="head">Address</td>
                    <td class="head2"> : </td>
                    <td class="data">Suite 352, 2nd floor, Tarun, Outer Ring Road, Pitampura, New Delhi, Delhi 110034</td>
                </tr>
                <tr>
                    <td class="head">Tel</td>
                    <td class="head2"> : </td>
                    <td class="data">+91-999999999</td>
                </tr>
                <tr>
                    <td class="head">Email</td>
                    <td class="head2"> : </td>
                    <td class="data">info@xiarch.com</td>
                </tr>
                <tr>
                    <td class="head">Web</td>
                    <td class="head2"> : </td>
                    <td class="data">www.xiarch.com</td>
                </tr>
            </tbody>
        </table></div>
        </div>
`

const mobileAuditFrontPage = `
<div class="body_template_class">
        <br /> <br /> <br /> <br /> <br /> <br /> <br /> <br /> <br /> <br /> <br /> <br /> <br />
        <div class="main_heading">
            <p id="logo">Mobile Penetration Testing Report</p> <br /> 
        </div>
        <div class="report_for sub_heading">
        <br><br>
        <div class='pageNumber'></div>
        <table style="width:400px">
            <tbody class="info">
            <tr>
                <td class="head report_heading">Report For :</td>
            </tr>
                <tr>
                    <td class="head">Organization Name</td>
                    <td class="head2"> : </td>
                    <td class="data">SampleCorp LLC</td>
                </tr>
                <tr>
                    <td class="head">Report Date</td>
                    <td class="head2"> : </td>
                    <td class="data">${current_date}</td>
                </tr>
            </tbody>
        </table></div>

        <br><br><br>
        <div class="report_by sub_heading">
        
        <table style="width:400px">
            <tbody class="info ">
            <tr>
                <td class="head report_heading">Report By :</td>
            </tr>
                <tr>
                    <td class="head">Organization Name</td>
                    <td class="head2"> : </td>
                    <td class="data">Xiarch Solutions Pvt Ltd</td>
                </tr>
                <tr>
                    <td class="head">Report Date</td>
                    <td class="head2"> : </td>
                    <td class="data">${current_date}</td>
                </tr>
                
                <tr>
                    <td class="head">Address</td>
                    <td class="head2"> : </td>
                    <td class="data">Suite 352, 2nd floor, Tarun, Outer Ring Road, Pitampura, New Delhi, Delhi 110034</td>
                </tr>
                <tr>
                    <td class="head">Tel</td>
                    <td class="head2"> : </td>
                    <td class="data">+91-999999999</td>
                </tr>
                <tr>
                    <td class="head">Email</td>
                    <td class="head2"> : </td>
                    <td class="data">info@xiarch.com</td>
                </tr>
                <tr>
                    <td class="head">Web</td>
                    <td class="head2"> : </td>
                    <td class="data">www.xiarch.com</td>
                </tr>
            </tbody>
        </table></div>
        </div>
`

const APIAuditFrontPage = `
<div class="body_template_class">
        <br /> <br /> <br /> <br /> <br /> <br /> <br /> <br /> <br /> <br /> <br /> <br /> <br />
        <div class="main_heading">
            <p id="logo">API Penetration Testing Report</p> <br /> 
        </div>
        <div class="report_for sub_heading">
        <br><br>
        <div class='pageNumber'></div>
        <table style="width:400px">
            <tbody class="info">
            <tr>
                <td class="head report_heading">Report For :</td>
            </tr>
                <tr>
                    <td class="head">Organization Name</td>
                    <td class="head2"> : </td>
                    <td class="data">SampleCorp LLC</td>
                </tr>
                <tr>
                    <td class="head">Report Date</td>
                    <td class="head2"> : </td>
                    <td class="data">${current_date}</td>
                </tr>
            </tbody>
        </table></div>

        <br><br><br>
        <div class="report_by sub_heading">
        
        <table style="width:400px">
            <tbody class="info ">
            <tr>
                <td class="head report_heading">Report By :</td>
            </tr>
                <tr>
                    <td class="head">Organization Name</td>
                    <td class="head2"> : </td>
                    <td class="data">Xiarch Solutions Pvt Ltd</td>
                </tr>
                <tr>
                    <td class="head">Report Date</td>
                    <td class="head2"> : </td>
                    <td class="data">${current_date}</td>
                </tr>
                
                <tr>
                    <td class="head">Address</td>
                    <td class="head2"> : </td>
                    <td class="data">Suite 352, 2nd floor, Tarun, Outer Ring Road, Pitampura, New Delhi, Delhi 110034</td>
                </tr>
                <tr>
                    <td class="head">Tel</td>
                    <td class="head2"> : </td>
                    <td class="data">+91-999999999</td>
                </tr>
                <tr>
                    <td class="head">Email</td>
                    <td class="head2"> : </td>
                    <td class="data">info@xiarch.com</td>
                </tr>
                <tr>
                    <td class="head">Web</td>
                    <td class="head2"> : </td>
                    <td class="data">www.xiarch.com</td>
                </tr>
            </tbody>
        </table></div>
        </div>
`

const networkAuditFrontPage = `
<div class="body_template_class">
        <br /> <br /> <br /> <br /> <br /> <br /> <br /> <br /> <br /> <br /> <br /> <br /> <br />
        <div class="main_heading">
            <p id="logo">Network Penetration Testing Report</p> <br /> 
        </div>
        <div class="report_for sub_heading">
        <br><br>
        <div class='pageNumber'></div>
        <table style="width:400px">
            <tbody class="info">
            <tr>
                <td class="head report_heading">Report For :</td>
            </tr>
                <tr>
                    <td class="head">Organization Name</td>
                    <td class="head2"> : </td>
                    <td class="data">SampleCorp LLC</td>
                </tr>
                <tr>
                    <td class="head">Report Date</td>
                    <td class="head2"> : </td>
                    <td class="data">${current_date}</td>
                </tr>
            </tbody>
        </table></div>

        <br><br><br>
        <div class="report_by sub_heading">
        
        <table style="width:400px">
            <tbody class="info ">
            <tr>
                <td class="head report_heading">Report By :</td>
            </tr>
                <tr>
                    <td class="head">Organization Name</td>
                    <td class="head2"> : </td>
                    <td class="data">Xiarch Solutions Pvt Ltd</td>
                </tr>
                <tr>
                    <td class="head">Report Date</td>
                    <td class="head2"> : </td>
                    <td class="data">${current_date}</td>
                </tr>
                
                <tr>
                    <td class="head">Address</td>
                    <td class="head2"> : </td>
                    <td class="data">Suite 352, 2nd floor, Tarun, Outer Ring Road, Pitampura, New Delhi, Delhi 110034</td>
                </tr>
                <tr>
                    <td class="head">Tel</td>
                    <td class="head2"> : </td>
                    <td class="data">+91-999999999</td>
                </tr>
                <tr>
                    <td class="head">Email</td>
                    <td class="head2"> : </td>
                    <td class="data">info@xiarch.com</td>
                </tr>
                <tr>
                    <td class="head">Web</td>
                    <td class="head2"> : </td>
                    <td class="data">www.xiarch.com</td>
                </tr>
            </tbody>
        </table></div>
        </div>
`

const webDisclaimer = `
<div class="body_template_class">
<div class="content_heading" id="disclaimer">Disclaimer</div>
<div class="content pt-3" >
    <p class="footer_text">All the information contained in this document is confidential to said company, disclosure and use of any information contained in this document by photographic, electronic or any other means, in whole or part, for any reason other than security enhancement is strictly prohibited without written consent of auditee organization. <br /><br />
         Whilst all due care and diligence has been taken in the preparation of this document it is not impossible that document of this nature may contain errors or omissions because of a misunderstanding of Clients requirements. Any recommendations are made in good faith as guidelines to assist the client in evaluation and must not be construed as warranties of any kind. Findings in this report are based on various tests conducted using manual techniques and third-party tools and Xiarch Solutions Pvt Ltd has put its best efforts to eliminate all the false positives reported by these tools.<br /><br />
         Xiarch Solutions Pvt Ltd shall assume no liability for any changes, omissions, or errors in this document. Xiarch Solutions Pvt Ltd shall not be liable for any damages financial or otherwise arising out of use/misuse of this report by any general member of public. </p><br /><br />
</div>
</div>
`

const tableOfContent_web = `  
<div class="body_template_class table_of_content">
<div class="main_heading">
    <h2 class="text-start pb-4">Table Of Content</h2>
</div>
<div class="content">
    <div class="d-flex justify-content-between ">
    <a href="#document_control">1.
    Document  Control  </a>
    <a href="#document_control">${table_of_content_page_count++}  </a>
    </div>
    
    <div class="d-flex justify-content-between ">
    <a  href="#introduction">2. Introduction </a>
    <a href="#introduction">${table_of_content_page_count++}  </a>
    </div>
    
    <div class="d-flex justify-content-between ">
    <a  href="#scope">3. Scope 
    <a href="#scope">${table_of_content_page_count++}  </a>
    </div>

    <div class="sub_content">

    <div class="d-flex justify-content-between ">
    <a  href="#version_history">3.1 Technical Summary
    <a href="#version_history">${table_of_content_page_count++}  </a>
    </div>
    <div class="d-flex justify-content-between ">
    <a  href="#contact_info">3.2 Assumptions
    <a href="#contact_info">${table_of_content_page_count++}  </a>
    </div>
    </div>



    
    <div class="d-flex justify-content-between ">
    <a href="#term_defination_legends">4. Terms, Definition & Legends</a>
    <a href="#term_defination_legends">${table_of_content_page_count++}  </a>
    </div>
    
    <div class="d-flex justify-content-between ">
    <a href="#methodology">5. Assessment Methodology</a>
    <a href="#methodology">${table_of_content_page_count++}  </a>
    </div>

    <div class="d-flex justify-content-between ">
    <a href="#executive_summary">6. Executive Summary</a>
    <a href="#executive_summary">${table_of_content_page_count++}  </a>
    </div>

  
    
    <div class="d-flex justify-content-between ">
    <a href="#assessment_findings_overview">7. Assessment Findings Overview</a>
    <a href="#assessment_findings_overview">${table_of_content_page_count++}  </a>
    </div>
    
    <div class="d-flex justify-content-between ">
    <a href="#assessment_findings_details">8. Assessment Findings Details</a>
    <a href="#assessment_findings_details">${table_of_content_page_count++}  </a>
    </div>

    <div class="d-flex justify-content-between ">
    <a href="#tools_and_references">9. Tools & Reference</a>
    <a href="#tools_and_references">${table_of_content_page_count++}  </a>
    </div>
   
</div>
</div>
`

const documentControl = `
<div class="body_template_class" id="document_control">
    <div class="content_heading" id="documentControl">1. Document Control</div>
</div>
`

const introduction = `
<div class="body_template_class ">
    <div class="content_heading" id="introduction">2. Introduction</div>
</div>
`

const scope = `
<div class="body_template_class">
<div class="content_heading" id="scope">3. Scope</div>
</div>
`

const term_defination_legends = `
<div class="body_template_class">
<div class="content_heading" id="term_defination_legends">4. Terms, Definition & Legends
<div class="content mt-3">
<p>This section describes the format in which the identified vulnerabilities are reported in the later section of the report. “Vulnerability Table” shown below is used to provide the details of the vulnerability, its impact and the recommendations.
</p>
<div class="sub_content_heading" id="summary">4.1 Vulnerability Table
<div class="content">
    <table class="table table-bordered mt-2" style="border-color:black;">
        <tbody>
            <tr class="bg-sky-blue vulnerability_dynamic_table_heading">
                <td colspan="2" class="content_table_white fw-bold">1. Title of the Vulnerability</td>
            </tr>
            <tr>
                <td class="content_table_white fw-bold" width="15%">Risk Level</td>
                <td class="content_table_white fw-bold"></td>
            </tr>

            <tr>
                <td class="content_table_white fw-bold" colspan="2">Description :</td>
            </tr>
            <tr>
                <td class="content_table_white fw-bold" colspan="2">Impact : </td>
            </tr>
            <tr>
                <td class="content_table_white fw-bold" colspan="2">Recommendations :</td>
            </tr>
            <tr>
                <td class="content_table_white fw-bold" colspan="2">Affects : </td>
            </tr>
            <tr>
                <td class="content_table_white fw-bold" >Status</td>
                <td class="content_table_white fw-bold"></td>
            </tr>
        </tbody>
    </table>
</div>
<div class="content mt-2">
    <table class="table table-borderless mt-2" style="border-color:black;">
        <tbody>
            <tr>
                <td class="content_table_white" width="30%">Title of the Vulnerability</td>
                <td class="content_table_white">-</td>
                <td class="content_table_white">A short title that describes the vulnerability</td>
            </tr>
            <tr>
                <td class="content_table_white">Risk Level</td>
                <td class="content_table_white">-</td>
                <td class="content_table_white">It describes the risk level. The title bar of each
                    vulnerability table is colour
                    coded for quick identifications of the severity level of the vulnerabilities</td>
            </tr>

            <tr>
                <td class="content_table_white">Description</td>
                <td class="content_table_white">-</td>
                <td class="content_table_white">It provides a brief description of the vulnerability.
                </td>
            </tr>
            <tr>
                <td class="content_table_white">Impact
                </td>
                <td class="content_table_white">-</td>
                <td class="content_table_white">Describes the probable impact if the vulnerability is
                    successfully exploited.</td>
            </tr>
            <tr>
                <td class="content_table_white">Recommendations</td>
                <td class="content_table_white">-</td>
                <td class="content_table_white">Provide the recommendations to fix the vulnerability.
                </td>
            </tr>
            <tr>
                <td class="content_table_white">Affects</td>
                <td class="content_table_white">-</td>
                <td class="content_table_white">Provide the information where vulnerability is present.
                </td>
            </tr>
            <tr>
                <td class="content_table_white">Status</td>
                <td class="content_table_white">-</td>
                <td class="content_table_white">Provides the information whether the vulnerability is
                    closed or not.</td>
            </tr>
        </tbody>
    </table>
</div>
</div>
<div class="sub_content_heading">4.2 Findings Ranking System 
<div class="content mt-3">
<p>In order to prioritize the assessment results, each finding was categorized based on severity classifications. Final analysis of the risk or impact to the application will require an internal evaluation. Xiarch Labs has developed classifications using the severity nomenclature for ranking the issues identified within the various severity categories.
</p>
<div class="sub_sub_content_heading" >4.2.1 Severity Categories
<div class="content">
<p>
Based on Xiarch Lab analysis of the particular finding and assets affected, a finding will fall into one of the following severity level categories: <br/> <br/>
<span class="badge bg-critical">Critical</span>  <strong>V</strong>ulnerabilities require an immediate response through mitigating controls, direct remediation or a combination thereof. Exploitation of critical severity vulnerabilities results in privileged access to the target system, application or sensitive data and enables further access to other hosts or data stores within the environment. Findings with a critical ranking will cause significant losses when they are exploited, although the total cost is difficult to quantify in advance. In general, a critical severity ranking is warranted when the issue has a direct impact on regulatory or compliance controls imposed on the environment, accesses personally identifiable information (PII) or financial data or could cause significant reputational or financial harm.
</p>
<p>
<span class="badge bg-danger">High</span>   <strong>F</strong>indings with a high severity ranking require immediate evaluation and subsequent resolution. Exploitation of high severity vulnerabilities leads directly to an attacker gaining privileged, administrative-level access to the system, application or sensitive data. However, it does not enable further access to other hosts or data stores within the environment. If left unmitigated, high severity vulnerabilities can pose an elevated threat that could affect business continuity or cause significant financial loss.
</p>
<br/>

<p>
<span class="badge bg-warning">Medium</span>   <strong>A</strong> finding with a medium severity ranking requires review and resolution within a short time. From a technical perspective, vulnerabilities that warrant a medium severity ranking can lead directly to an attacker gaining non-privileged or user-level access to the system, application or sensitive data. Findings that can cause a denial-of-service (DoS) condition on the host, service or application are also classified as medium risk. Alternately, the vulnerability may provide a way for attackers to gain elevated levels of privilege. From a less technical perspective, observations with this ranking are significant, but they do not pose as much of a threat as high or critical severity exposures.
</p> <br/>

<p>
<span class="badge bg-success">Low</span>   <strong>L</strong>ow severity findings should be evaluated for review and resolution once the remediation efforts for critical, high and medium severity issues are complete. From a technical perspective, vulnerabilities that warrant a low severity ranking may leak information to unauthorized or anonymous users used to launch a more targeted attack against the environment. From a process perspective, observations with this ranking provide awareness and should be addressed over time as part of a comprehensive information security program, but do not presently pose a substantial threat to business operations or have any significant loss associated with the exposure.
</p><br/>

<p>
<span class="badge bg-info">Informational</span>  <strong>A</strong>n informational finding presents no direct threat to the confidentiality, integrity or availability of the data or systems supporting the environment. These issues pose an inherently low threat to the organization and any proposed resolution should be considered as an addition to the information security procedures already in place.
</p><br/>
</div>
</div>
</div>
</div>
</div></div>
</div>
`

const assessmentMethodology = `
<div class="body_template_class">
    <div class="content_heading" id="methodology">5. Assessment Methodology</div>
</div>
`

const executiveSummary = `
<div class="body_template_class">
<div class="content_heading" id="executive_summary">6. Executive Summary</div>
</div>
`

const toolsAndReferences = `
<div class="body_template_class">
    <div class="content_heading" id="tools_and_references">9. Tools & Reference
    </div>
</div>
`

module.exports = {
    webAuditFrontPage, webDisclaimer, tableOfContent_web, documentControl, introduction, scope, term_defination_legends, assessmentMethodology, executiveSummary, toolsAndReferences , mobileAuditFrontPage , APIAuditFrontPage, networkAuditFrontPage
}