import { useState } from 'react';
import './App.css'
import FormComp from './compoents/FormCreate/formComponent';
import FileInput from './compoents/File/FileInput';
import formatChecker from './utils/formatChecker';
import Instructions from './compoents/instructions';



function App() {

  const [file, setFile] = useState(null);

  const handeFileSelection = (e)=>{
    if(e){
      let fileSelected = e.target.files[0];
      formatChecker(fileSelected.name) ? setFile(fileSelected) : setFile(false)
    }else{
      setFile(null)
    }
  }

  return (
    <>
    <div className='mainElement'>
      <header>
        <h1>{file ? 'Попълнете Полетата и Натиснете "Генерирай"' : "Моля изберете файл от вашето устройство (.docx формат), за да се покажат полетата с информация."}</h1>
        <Instructions/>
      </header>
      <FileInput onUpload={handeFileSelection} />
      {
        file && <FormComp file={file}/>
      }
    </div>
    </>
  )
}

export default App
