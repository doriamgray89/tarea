import React from 'react';
import {useRouter} from 'next/router';
import { List, Roles,Datos , Ruta } from './Data';

function Drop() {
  var roles = Roles();
  var workers = List();
  const datos= Datos();
  const route = useRouter();
  var activo ="";

  return (
  <>  
  <div className="container">
    <div className="dropdown" style={{width: "200px"}}>
      <button  style={{
                  width: "inherit",
                  textAlign: "left"
                }}
                className="btn btn-default dropdown-toggle" type="button" data-toggle="dropdown">Roles
      <span className="caret" style={{
                  float: "right"
                }}
      ></span></button>
      <ul style={{
                  width: "inherit"
                }}
          className="dropdown-menu">
            {(()=>{              
            datos['role']='';
            var ruta = Ruta(datos);
            return(
              
          <li><a  
          onClick={(e) => {
              e.preventDefault();
              route.push(ruta)                     								
              }}
              href={`${ruta}`}   
    >Roles</a></li> 
            )
            })()}
            {
          roles.map(role => {
            var cont = 0;

            workers.map(worker => {
              if(worker.role == role.id)
              cont++;
            })
            
            var actual = datos['role'];
            

            if(actual == role.id){
              activo="active";
            }

            console.log(activo);

            datos['role']=role.id;
            var ruta = Ruta(datos);
            return(
              <>
              <li className="divider"></li>
              <li><a  
                    onClick={(e) => {
                        e.preventDefault();
                        route.push(ruta)                     								
                        }}
                        href={`${ruta}`}   
              >{role.data} <span>{cont}</span></a></li>
              </>
            )
          })
        }
      </ul>
    </div>
  </div>
  </>
);
};

export default Drop;
