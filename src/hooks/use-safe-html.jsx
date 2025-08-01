import DOMPurify from "dompurify";

const SafeHTML = ({htmlContent}) => {
    const sanitizedHTML = DOMPurify.sanitize(htmlContent);
    return <div className="op" dangerouslySetInnerHTML={{__html: sanitizedHTML}} />
    
}

export default SafeHTML;