function BlogCreateEdit({ data }) {

    const [title, setTitle] = data[0]; 
    const [thumbnail, setThumbnail] = data[1]; 
    const [content, setContent] = data[2]; 

    function updateSections(newSec, index = -1) {
        function inc() {
            setContent(prev => [...prev, {
                heading: '', 
                text: ''
            }])
        }
        function dec() {
            setContent(prev => prev.filter((_, i) => i !== index))
        }
        if (newSec) inc(); 
            else dec(); 
    }

    function editSection(id, heading, text) {
        setContent(prev => {
            const newContent = [...prev]
            if (heading || heading === '') newContent[id].heading = heading
            if (text || text === '') newContent[id].text = text
            return newContent; 
        })
    }
    
    function handleResizeTextarea(e) {
        const textarea = e.target; 
        textarea.style.height = 'auto'; 
        textarea.style.height = `${textarea.scrollHeight}px`; 
    }

    return (
        <div className="col-md-8">
            <h1>New blog - Draft</h1>
            <form className="mb-3">
                <div>
                    <label htmlFor="title" className="form-label"></label>
                    <input
                        value={title}
                        onChange={e => setTitle(e.target.value)}
                        placeholder="Title"
                        className="form-control fs-3"
                        id="title"
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="thumbnail" className="form-label"></label>
                    <input
                        value={thumbnail}
                        onChange={e => setThumbnail(e.target.value)}
                        placeholder="thumbnail (link)"
                        className="form-control"
                        id="thumbnail"
                    />
                </div>
                <div id="sections">
                    {content? content.map((section, index) => <div key={index} className="position-relative pt-4">
                        <div className="mb-2">
                            <input
                                value={section.heading}
                                placeholder={`${index+1}. Heading`}
                                className="form-control"
                                onChange={e => editSection(index, e.target.value, null)}
                            />
                        </div>
                        <div className="form-floating">
                            <textarea 
                                value={section.text}
                                className="form-control mb-4" 
                                placeholder="Leave a comment here"
                                onChange={e => editSection(index, null, e.target.value)}
                                onInput={handleResizeTextarea}
                                style={{ overflow: 'hidden', resize: 'none' }}
                            ></textarea>
                            <label>Content</label>
                        </div>
                        <button 
                            type="button" className="btn-close position-absolute top-0 end-0" 
                            aria-label="Close"
                            onClick={() => updateSections(false, index)}
                        ></button>
                    </div>) : 'Please add new section to edit'}
                </div>
            </form>
            <button type="button" className="btn btn-primary" onClick={() => updateSections(true)}>Add section</button>
        </div>
    )
}

export default BlogCreateEdit; 