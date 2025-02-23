import { addDays, addMonths, addYears } from "../../utils/helpers";
import {useState } from "react"
import checkInputs from "../../utils/inputCheck";
import handleGenerateWord from "../../utils/fileGenerator";





export default function FormComp({file}) {

    const [errorMsg, setErrorMsg] = useState('')

    const submitHander = (e)=>{
        e.preventDefault();

        const fd = new FormData(e.target);
        const data = Object.fromEntries(fd.entries());
        const errors = checkInputs(data)

        if(errors){
            setErrorMsg('Моля попълнете всички полета.');
            return;
        }else{
            setErrorMsg('')
        }

        
        const fullName = [data.firstName, data.secondName, data.thirdName].map(n=> n.trim()).join(' ');
        const birthDate = new Date(data.birth);
        const passDate = new Date(data.pass);

        const dateOfBirth = birthDate.getFullYear();
        const dateOfDeath = passDate.getFullYear();
        const days9 = addDays(passDate, 9);
        const days40 = addDays(passDate, 40);
        const sixMonths = addMonths(passDate, 6);
        const oneYear = addYears(passDate, 1);
          

        handleGenerateWord(fullName, dateOfBirth, dateOfDeath, days9, days40, sixMonths, oneYear, file)
    }
  
    return (
        <form onSubmit={submitHander} className='formElment'>
          <p className="errMsg">{errorMsg}</p>
          <div className='singleInput'>
            <label htmlFor="firstName">Име:</label>
            <input type="text" name="firstName" id="firstName" className="inputELement"/>
          </div>
          <div className='singleInput'>
            <label htmlFor="secondName">Презиме:</label>
            <input type="text" name="secondName" id="secondName" className="inputELement" />
          </div>
          <div className='singleInput'>
            <label htmlFor="thirdName">Фамилия:</label>
            <input type="text" name="thirdName" id="thirdName" className="inputELement" />
          </div>
          <div className='singleInput'>
            <label htmlFor="birth">Дата на раждане:</label>
            <input type="date" name="birth" id="birth" className="inputELement" />
          </div>
          <div className='singleInput'>
            <label htmlFor="pass">Дата на смъртта:</label>
            <input type="date" name="pass" id="pass" className="inputELement" />
          </div>
          
  
          <button className="btnCustom">Генерирай</button>
        </form>
    )
  }