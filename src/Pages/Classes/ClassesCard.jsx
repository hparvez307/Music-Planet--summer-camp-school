

const ClassesCard = ({ clas }) => {



  return (
    <div className="card   mx-auto w-96 glass group">
      <figure><img className=' group-hover:scale-150 duration-700' src={clas?.image} /></figure>
      <div className={`card-body ${parseInt(clas?.availableSeats) === 0 ? 'bg-red-600' : 'bg-black'} text-white`}>
        <h2 className="card-title">{clas?.className}</h2>
        <p>Instructor: {clas?.instructorName}</p>
        <p>Available Seat: {clas?.availableSeats}</p>
        <p>Price: ${clas?.price}</p>

        <div className=" w-full mt-6 justify-center">
          <button onClick={() => setSeat(0)} disabled={parseInt(clas?.availableSeats) === 0} className="btn w-full text-white border-none bg-red-600 btn-outline">Select</button>
        </div>
      </div>
    </div>
  );
};

export default ClassesCard;