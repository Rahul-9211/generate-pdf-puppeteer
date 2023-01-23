const express = require("express");
const app = express();
const cors = require("cors");
const bodyParser = require('body-parser');
const fileupload = require("express-fileupload"); // this is use to get files at server 

const pdf = require('puppeteer');
const hb = require('handlebars') // handles puppeter functions and could be implemented without this 
require("dotenv").config();

// comman header and footer for audit template 
const webAuditTemplate = require('./auditTemplate/WebAuditTemplate')
const footerTemplate = require('./auditTemplate/Footer')
const headerTemplate = require('./auditTemplate/Header')


app.use(cors());
app.use(fileupload());
app.use(express.static("files"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));



// app.use(express.static(__dirname));
app.use(express.static('images')) // use to serve server files at local host
// console.log(__dirname)



// function to load html Template // this will return template on the behalf of checklist type 
async function getTemplateHtml(reportID) {
    console.log("Loading template file in memory")
    let arr = new Array("informational", "medium", "low", "critical", "high", "medium", "low");
    // arr.push("Critical")
    // arr.push("Medium")
    // arr.push("High")
    // arr.push("Low")
    // arr.push("Medium")
    // arr.push("Informational")
    // arr.push("Informational")
    // let arr = ["informationla" , "medium" , "low" , "critical" , "high" , "medium" , "low"];
    let imgName = "testName "
    return webAuditTemplate(reportID)

}


// API to generate report on behalf of report ID for report dataTable 
app.get('/generate-pdf', async (req, res) => {
    console.log("rew.body ", req.body)

    getTemplateHtml(webAuditTemplate("45678")).then(async (data) => {
        // Now we have the html code of our template in data object
        // you can check by logging it on console
        // console.log(data)
        console.log("Compiing the template with handlebars");
        const template = hb.compile(data, { strict: true });
        // we have compile our code with handlebars
        const result = template(data);
        // We can use this to add dyamic data to our handlebas template at run time from database or API as per need. you can read the official doc to learn more https://handlebarsjs.com/
        const html = result;
        // we are using headless mode
        const browser = await pdf.launch({
            // this code is importtant as it will create issue while deploying 
            args: [
                '-no-sandbox',
                '--disable-setuid-sandbox'
            ],

        });
        const page = await browser.newPage()
        const page1 = await browser.newPage() // by this u can create multiple pages 
        // await page.setUserAgent("Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/85.0.4183.121 Safari/537.36");

        // We set the page content as the generated html by handlebars
        await page.setContent(html)
        // await page1.setContent()
        // await page.emulateMedia('screen');
        // await console.log("encode", encoded_file)



        // We use pdf function to generate the pdf in the same folder as this file.
        const created_pdf = await page.pdf({
            path: "response.pdf",
            printBackground: true,
            format: "A4",
            headerTemplate: headerTemplate,
            footerTemplate: footerTemplate,
            displayHeaderFooter: true,
            margin: {
                top: "100px",
                bottom: "100px"
            }

        }) // pdf function takes {path : "" , format : "A4"}
        res.set({ 'Content-Type': 'application/pdf', 'Content-Length': created_pdf.length }) // here this is use to set content header for pdf 
        res.send(created_pdf)
        // console.log("PDF Generated" , created_pdf)

        // const newpath = __dirname;
        // res.sendFile('report.pdf', { root: __dirname });
        // res.status(200).sendFile(`http://localhost:1338/report.pdf`);
        // return res.json({ message: "pdf created", status: true  , data :  created_pdf})
    })
})



app.listen(5000, () => {
    console.log("Server running successfully on 5000");
});