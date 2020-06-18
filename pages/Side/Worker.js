import React from 'react';
import List, { Roles, Status } from './Data';


function Worker() {
    var workers = List();
    
    var role = Roles();
    var status = Status();
    
    return (
<table className="table table-bordered">
      <thead>
        <tr>
          <th scope="col" className="thgray">Title</th>
          {/* <th scope="col" className="thgray">Role</th> */}
          <th scope="col" className="thgray">Status</th>
        </tr>
      </thead>
      <tbody>
        
      {
          workers.map(worker => (
            <tr>
                <td>
                    <img alt="avatar" className="avatar" src={worker.avatar} />
                    {worker.name}
                </td>
              {/* <td>{role[worker.role].data}</td> */}
              <td style={{
                color: status[worker.status].color
              }}>{status[worker.status].data}</td>
            </tr>
          ))
        }
      </tbody>
    </table>
  );
}

export default Worker;