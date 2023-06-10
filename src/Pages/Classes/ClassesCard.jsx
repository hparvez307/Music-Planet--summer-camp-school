import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Providers/AuthProviders";
import Swal from "sweetalert2";
import { useNavigate } from 'react-router-dom';
import AOS from "aos";
import "aos/dist/aos.css";
import { FaTelegramPlane } from "react-icons/fa";


const ClassesCard = ({ clas}) => {

  const {user} = useContext(AuthContext);

  const navigate = useNavigate();

  const { availableSeats, className, feedback, image, instructorEmail, instructorName, price } = clas;




  const handleSelectClass = (id) => {

    if (!user) {
      Swal.fire({
        title: 'You have to login First!!!',
        icon: 'error',
        position: 'center',
        showConfirmButton: false,
        timer: 1500
      })
      return navigate('/login');;
    }


    const selectedClass = {
      classId: id, availableSeats, className, feedback, image, instructorEmail, instructorName, price, studentEmail: user?.email
    }


    fetch(`https://music-planet-server.vercel.app/bookClass`, {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
        authorization: `Bearer ${localStorage.getItem('access-token')}`

      },
      body: JSON.stringify(selectedClass)
    })
      .then(res => res.json())
      .then(data => {
        console.log(data);
        if (data.insertedId) {
          Swal.fire({
            title: 'Success!',
            text: `${clas?.className} Selected Successful`,
            icon: 'success',
            confirmButtonText: 'Ok'
          })

        }
      })

  }


  useEffect(() => {
    AOS.init({
      duration: 3000
    });
  }, []);

  return (


    <div data-aos="fade-up" className="card p-2  glass group">
      <figure><img className=' group-hover:scale-150 h-72  duration-700' src={clas?.image} /></figure>
      <div className={`card-body rounded-b-2xl ${parseInt(clas?.availableSeats) === 0 ? 'bg-red-600' : 'bg-black'} text-white`}>
        <h2 className="text-2xl text-bold text-center tracking-wideer">{clas?.className}</h2>


        <div >
          <table className="table">
            <tbody>
              <tr className="border text-xs">
                <td className="border ">Instructor </td>
                <td>{clas?.instructorName}</td>
              </tr>

              <tr className="border text-xs">
                <td className="border ">Enrolled Students </td>
                <td>{clas?.students} </td>
              </tr>
              <tr className="border text-xs">
                <td className="border ">Price </td>
                <td> ${clas?.price} </td>
              </tr>
              <tr className="border text-xs">
                <td className="border">Available Seat</td>
                <td> {clas?.availableSeats} </td>
              </tr>

            </tbody>
          </table>
        </div>



        <div className=" w-full mt-2 justify-center">
          <button onClick={() => handleSelectClass(clas._id)} disabled={ parseInt(clas?.availableSeats) === 0  } className="btn w-full text-white border-none bg-red-600 btn-outline"><FaTelegramPlane className="text-lg"/>Select</button>
        </div>
      </div>
    </div>
  );
};

export default ClassesCard;