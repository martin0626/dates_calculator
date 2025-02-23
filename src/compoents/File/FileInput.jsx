import './FileInput.css'

export default function FileInput({onUpload}){


    return (
        <article className='fileInput'>
            <div className='fileInput-input'>
                <input onChange={onUpload} id="file" name="file" className="inputELement-file" type="file" />
            </div>
        </article>
    )
}