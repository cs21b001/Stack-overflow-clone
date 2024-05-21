import React from 'react'

const WidgetTags = () => {

  const tags = [ 'c', 'css', 'html', 'javascript', 'reactjs', 'express', 'firebase', 'java', 'mern', 'mongodb', 'mysql', 'next.js', 'node.js', 'php', 'python' ]

  return (
    <div className='widget-tags'>
      <h3>Watched tags</h3>
      <div className="widget-tags-div">
        {tags.map((tag) => (
          <p key={tag}>{tag}</p>
        ))}
      </div>

    </div>
  )
}

export default WidgetTags