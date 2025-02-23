export default function formatChecker(fileName){
    let allowedFormats = ['docx']
    let format = fileName.split('.')[fileName.split('.').length - 1];

    return allowedFormats.includes(format.toLowerCase());
}