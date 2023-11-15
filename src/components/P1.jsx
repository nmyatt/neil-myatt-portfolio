import '../index.css'

const P1 = ({children, addClasses}) => {

    addClasses = addClasses || ''
    return (
        <p className={`mb-8 text-lg text-justify leading-loose ${addClasses}`}>{children}</p>
    )
}

export default P1
