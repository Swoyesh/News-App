import React from 'react'

const NewsItems = (props)=> {
    return ( 
      <div className='my-3'>
      <div className="card" style={{width: "18rem"}}>
        <div style={{
              display: 'flex',
              justifyContent: 'flex-end',
              position: 'absolute',
              right: '0'
              }
        }>
          <span className='badge rounded-pill bg-danger'>
            {props.source}
          </span>
        </div>
        <img src= {!props.imageUrl?"https://i.ytimg.com/vi/Jmf0T7v-9Sg/maxresdefault.jpg":props.imageUrl} className="card-img-top" alt='nice'/>
        <div className="card-body">
          <h5 className="card-title">{props.title}...</h5>
          <p className="card-text">{props.description}...</p>
          <p className="card-text"><small className="text-danger">By {!props.author?"Unkown":props.author} on {new Date(props.date).toDateString()}</small></p>
          <a rel='noreferrer' href={props.newsUrl} className="btn btn-sm btn-primary bg-dark" target='_blank'>Read More</a>
        </div>
      </div>
      </div>
    )
}

export default NewsItems
