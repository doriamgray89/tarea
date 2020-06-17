import React from 'react';
import Worker from './Side/Worker';
import Drop from './Side/Dropdown';
import Buscar from './Side/Search';
import {useRouter} from 'next/router';
import { Datos , Ruta } from './Side/Data';
import Estado from './Side/State';

function App() {
  const route = useRouter();
  const datos= Datos();
  var ruta = Ruta(datos);

  return (
    <div className="App">
      
      <div className="container-fluid" style={{marginTop:'10px'}}>
        <div className="row">
          <div className="shadow-sm col-md-8 bg-white rounded" id="example1">
            <div className="row">
              <div className="col-xs-8 col-md-8">
                <Buscar/>
            <div className="row">
              <div className="col-xs-12 col-md-12">
                <Worker/>
              </div>
            </div>
          </div>
              <div className="col-xs-4 col-md-4">
              <Drop/>
              <Estado/>
              <div>
                <a  
                    onClick={(e) => {
                        e.preventDefault();
                        route.push(ruta)                     								
                        }}
                        href="#"
                        // {`${ruta}`}   
                
                    style={{fontStyle:'italic',
                                    float:'left',
                                    marginTop:'50px'}}>filtrar</a>
              </div>
              
              <div>
                <a href="/"  
                    onClick={(e) => {
                        e.preventDefault();
                        route.push("/")                     								
                        }}  
                
                    style={{fontStyle:'italic',
                                    float:'right',
                                    marginTop:'50px'}}>limpiar</a>
              </div>
              </div>
        </div>        
        </div>

        </div>
      </div>
    </div>
  );
}

export default App;
