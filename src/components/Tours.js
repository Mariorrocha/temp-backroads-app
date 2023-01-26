import Title from './Title';
import { tours } from '../data';
import Tour from './Tour';

const Tours = () => {
  return (
    <section className="section" id="tours">
      <Title title='featured' subTitle='tours'/>

      <div className="section-center featured-center">

        {tours.map((tour)=>{
          const {id, image,date,title,info,location,duration,cost} = tour;
          // return(
          //   <Tour  key={id} image={image} date={date} title={title} info={info} location={location} duration={duration} cost={cost} />
          // );
          return <Tour key={tour.id} {...tour}/>
        })}

      </div>
    </section>
  );
}

export default Tours
