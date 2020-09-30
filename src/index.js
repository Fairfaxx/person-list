import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import axios from 'axios';

const Person = ({ img, name, job }) => {

  const [people, setPeople] = useState([])


  useEffect(() => {
    const getPeople = async () => {
      const data = await axios.get('https://randomuser.me/api/?results=50');
      console.log(data.data.results)
      setPeople(data.data.results)
    }

    getPeople()
  }, [])

  return (


    <div>
      <ul className='person-list'>
        {
          people.map((person) => {

            return (
              <li className='person' key={person.id}>
                <img src={person.picture.large} alt={person.name} />
                <div>
                  <h2>{person.name.first}</h2>
                  <h2>{person.name.last}</h2>
                  <h4>{`Age:${person.dob.age}`}</h4>
                  <h4>{person.email}</h4>
                </div>
              </li>
            )
          })
        }
      </ul>
    </div>


  )
}


const PersonList = () => {
  return (
    <section className="person-list">
      <Person img='37' name='Fefe' job='Developer' />
      <Person img='15' name='Jeffrey' job='Developer' />
      <Person img='19' name='Richard' job='Developer' />
      <Person img='19' name='pedro' job='Developer' />
      <Person img='19' name='Pablo' job='Developer' />
      <Person img='19' name='John' job='Developer' />
    </section>
  )
}

ReactDOM.render(<PersonList />, document.getElementById('root'));
