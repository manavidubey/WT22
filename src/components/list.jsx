import { Image } from "./image2";

export const List = (props) => {
  return (
    <div id='list' className='text-center'>
      <div className='container'>
        <div className='section-title'>
          <h2>Listings</h2>
          <p>
            Our Unique, Handmade and Verified Products
          </p>
        </div>
        <div className='row'>
          <div className='portfolio-items'>
            {props.data
              ? props.data.map((d, i) => (
                <div key={`${d.title}-${i}`} className='col-sm-6 col-md-4 col-lg-4'>
                  <Image title={d.title} listImg={d.listImg} />
                </div>
              ))
              : 'Loading...'}
          </div>
        </div>
      </div>
    </div>
  )
}
