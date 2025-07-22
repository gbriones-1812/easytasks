var XLSX = require("xlsx");

const ExcelToJSON = () => {
    const excel = XLSX.readFile("/Users/gonzalobrions/GitHub/easytasks/Formato_CargaMasiva_2025.xlsx");
    var sheetName = excel.SheetNames;
    let data = XLSX.utils.sheet_to_json(excel.Sheets[sheetName[0]]);
    console.log(data);
};

ExcelToJSON();