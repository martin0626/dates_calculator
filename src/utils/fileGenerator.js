import PizZip from 'pizzip'; // A library to read .docx files as a binary format
import Docxtemplater from 'docxtemplater'; // Library to replace variables in the docx file
import { saveAs } from 'file-saver'; // Library to save the new file

export default async function handleGenerateWord(fullName, dateOfBirth, dateOfDeath, days9, days40, sixMonths, oneYear, file){
    if (!file) {
      console.error("No file provided!");
      return;
    }

    const reader = new FileReader();

    reader.onload = function (event) {
        try {
            const content = event.target.result;
            const zip = new PizZip(content); // Parse the uploaded DOCX file
            const doc = new Docxtemplater(zip);

            // Set dynamic values for placeholders
            const dynamicData = {
                fullName, 
                dateOfBirth, 
                dateOfDeath,
                days9, 
                days40, 
                sixMonths, 
                oneYear
            };

            doc.setData(dynamicData);

            try {
                doc.render(); // Replace placeholders with actual data

                const out = doc.getZip().generate({
                    type: 'blob',
                    mimeType: 'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
                });

                // Download the updated DOCX file
                saveAs(out, `${fullName.replaceAll(' ', '')}.docx`);
            } catch (error) {
                console.error("Error rendering the document:", error);
            }
        } catch (error) {
            console.error("Error processing the document:", error);
        }
    };

    reader.readAsBinaryString(file); // Read the uploaded DOCX file as binary
};