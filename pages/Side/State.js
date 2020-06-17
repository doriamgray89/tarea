import React from 'react';
import {useRouter} from 'next/router';
import { List, Status, Datos, Ruta } from './Data';

function Estado() {
  var status = Status();
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
                className="btn btn-default dropdown-toggle" type="button" data-toggle="dropdown">Status
      <span className="caret" style={{
                  float: "right"
                }}
      ></span></button>
      <ul style={{
                  width: "inherit"
                }}
          className="dropdown-menu">
          {(()=>{              
          datos['state']='';
          var ruta = Ruta(datos);
          return(
            
        <li><a  
        onClick={(e) => {
            e.preventDefault();
            route.push(ruta)                     								
            }}
            href={`${ruta}`}   
        >Status</a></li> 
          )
          })()}
            {
          status.map(state => {
            var cont = 0;

            workers.map(worker => {
              if(worker.status == state.id)
              cont++;
            })
            
            var actual = datos['state'];
            

            if(actual == state.id){
              activo="active";
            }
            

            datos['state']=state.id;
            var ruta = Ruta(datos);
            return(
              <>
              <li className="divider"></li>
              <li>
                <a  
                    onClick={(e) => {
                        e.preventDefault();
                        route.push(ruta)                     								
                        }}
                        href={`${ruta}`}   
                >
                <svg width="10" height="10">
                  <rect width="10" height="120" style={{fill:state.color}}/>
                </svg>
                {state.data} <span>{cont}</span></a>
              </li>
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

export default Estado;
