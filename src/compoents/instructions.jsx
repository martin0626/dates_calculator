import { useState } from "react"

export default function Instructions(){


    const [ isVisibleFuncs, setIsVisibleFuncs ] = useState(false)

    return (

        <article className='instructions'>
            <a className="instructions-btn" onClick={()=> setIsVisibleFuncs(!isVisibleFuncs)}><b>Инструкции за работа ℹ️</b></a>
            <div className={`instructions-main ${!isVisibleFuncs && 'hidden'}`}>
                <p> 
                    Уверете се че са добавени всички нужни текстови променливи (пример: <b>&#123;fullName&#125;</b>) на желаните от вас места във файла, както е показанo:
                </p>
                <ul className='instructions-list'>
                    <li>Пълно Име: <b>&#123;fullName&#125;</b></li>
                    <li>Година на Раждане: <b>&#123;dateOfBirth&#125;</b></li>
                    <li>Година на Смъртта: <b>&#123;dateOfDeath&#125;</b></li>
                    <li>9 Дни: <b>&#123;days9&#125;</b></li>
                    <li>40 Дни: <b>&#123;days40&#125;</b></li>
                    <li>6 Месеца: <b>&#123;sixMonths&#125;</b></li>
                    <li>1 Година: <b>&#123;oneYear&#125;</b></li>
                </ul>
            </div>
        </article>
    )
}