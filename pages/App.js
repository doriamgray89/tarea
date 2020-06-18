import React from 'react';
import Worker from './Side/Worker';
import Drop from './Side/Dropdown';
import Buscar from './Side/Search';
import {useRouter} from 'next/router';
import { Datos , Ruta } from './Side/Data';
import Estado from './Side/State';
import SelectPage from './Side/Multiple';

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
              <div className="row">
                  <div className="col-xs-12 col-md-12">
                    <Drop/>
                  </div>
                </div>
                {/* <div className="row">
                  <div className="col-xs-12 col-md-12">
                    <Estado/>
                  </div>
                </div> */}
                <div className="row">
                  <div className="col-xs-12 col-md-12">
                    <SelectPage/>
                  </div>
                </div>

                
                <div className="row">
                  <div className="col-xs-6 col-md-6">
                      <a  
                    onClick={(e) => {
                      var status='';
                      if(null!=localStorage.getItem("status")){
                        status=localStorage.getItem("status");
                      }
                      var data = status;
                      datos['status']=data;
                      var ruta =Ruta(datos);
                        e.preventDefault();
                        route.push(ruta)                     								
                        }}
                        href="#"                
                    style={{fontStyle:'italic',
                                    float:'left',
                                    marginTop:'50px'}}>
                                      filtrar
                                      </a>
                  </div>
                  <div className="col-xs-4 col-md-4">
                <a href="/"  
                    onClick={(e) => {
                        e.preventDefault();
                        localStorage.setItem("status", "");
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
    </div>
  );
}

export default App;
