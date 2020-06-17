import React, { useState } from 'react';
import {useRouter} from 'next/router';
import { Datos, Ruta } from './Data';

function Search() {
    const datos= Datos();
    const route = useRouter();
    const [query,setquery] = useState('');
    
    return (
        <div className="row">
                  <div className="col-xs-6 col-md-6">
                    <div>
                        <form  className="input_container" onSubmit={(e) => {
                        e.preventDefault();
                        datos['q']=query;
                        var ruta = Ruta(datos);
                        route.push(ruta)                     								
                        }
                        }>
                        <input type="text"
                            //value={datos['q']}
                            onChange={e => (setquery(e.target.value))}
                        />
                        <i className="fa fa-search"></i>
                      </form>
                    </div>
                  </div>
              </div>
    )}

export default Search;