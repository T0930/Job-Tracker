import React from 'react';
import { useParams } from 'react-router-dom';
import { useQuery } from '@apollo/client';
import { QUERY_INTERVIEWS } from '../utils/queries';

export default function Interviews() {
    // const { interview } = useParams();
    const { loading, data } = useQuery(QUERY_INTERVIEWS, {
        variables: { interview: true },
      });

      const interviews = data?.interview || [];;
      console.log(interviews)



    return ( 
        <div>
     {interviews ? (
              <section>
                <table>
                  <thead>
                    <tr>
                    <th>Date Applied</th>
                      <th>Company Name</th>
                      <th>Position</th>
                      <th>Location</th>
                      <th>Update</th>
                    </tr>
                  </thead>
    
                  <tbody>
                    {interviews.map((int) => (
                      <tr key={int.id}>
                        <td>{int.dateApplied}</td>
                        <td>{int.companyName}</td>
                        <td>{int.position}</td>
                        <td>{int.location}</td>
    
                      </tr>
                    ))}
                  </tbody>
                </table>
              </section>

          ) : (
            <span>Hmm... seems that there are no applications here!</span>
          )}
          </div> 


    );
}