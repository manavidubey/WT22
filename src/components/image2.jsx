export const Image = ({ title, listImg}) => {
  return (
    <div className='portfolio-item'>
      <div className='hover-bg'>
        {' '}
          <div className='hover-text'>
            <h4>{title}</h4>
          </div>
          <img
            src={listImg}
            className='img-responsive'
            alt={title}
          />{' '}
      </div>
    </div>
  )
}