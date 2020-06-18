import {useRouter} from 'next/router';
import { Json } from '../../components/Json';

export const Datos = () => {
	const router = useRouter();
	var datos = [];
  
  let {q, role, status,state} = router.query;

  
	if(q==undefined){
		q="";
	}

	if(role==undefined){
		role="";
	}

	if(state==undefined){
		state="";
	}

	if(status==undefined){
		status="";
	}

	datos['q'] = q;
	datos['role'] = role;
	datos['state'] = state;
	datos['status'] = status;


	return datos;
}

export const Ruta = (datos) => {
    return `/?q=${datos['q']}&state=${datos['state']}&role=${datos['role']}&status=${datos['status']}`;
}

  export const List = () => {
    var query = Datos();

    var datos = Json();    

    let result = datos.filter(function(obj){
      if(obj.name.includes(query['q'])){
          return obj;
          }
        });

    let role = result.filter(function(obj){
      if(obj.role.includes(query['role'])){
          return obj;
          }
        });
    
    var status=query['status'];
    var est=status.split(",");
    let estados=[];

    if(est.length>0 && est[0]!=""){
      role.forEach((obj,key) => {
        est.forEach(element => {
          if(obj.status == element){
            console.log(element);
            console.log(obj.name+'-'+obj.status);
              estados[key]=obj;
              }
        });
      });
        }else{
          estados = role;
        }

    //localStorage.setItem("workers", 'estados');
    return estados;
  }
  
  export const Roles = () => {
    var roles = [];
    
    roles[1]={id: 1,data: "Developer"}; 
    roles[2]={id: 2, data: "Analist"};
    roles[3]={id: 3,data: "Team Analist"};
    roles[4]={id: 4,data: "Designer"};
    roles[5]={id: 5,data: "Project Owner"};

    return roles;
  }
  
  export const Status = () => {
    var status = [];
    
    status[1]={id: 1,data: "To do", color:'green'}; 
    status[2]={id: 2,data: "Work On It",color: 'blue'};
    status[3]={id: 3,data: "Testing", color: 'yellow'};
    status[4]={id: 4,data: "Done", color: 'grey'};

    return status;
  }

  export const Estado = (workers) => {
    
    var status = Status();
    var listado = [];
    
    status.forEach(estado => {
      var cont = 0;
      
        workers.map(worker => {
          if(worker.status == estado.id)
          cont++;
        })
        var estilo= '"fill:' + estado.color + '"';
        listado[estado.id]={value: estado.id, 
                        label: <><svg width="10" height="10">
                              <rect width="10" height="120" style={{fill: estado.color }}/>
                                </svg> {`${estado.data}`}<span style={{float:'right'}}>{`${cont}`}</span></> };
    });

    
    return listado;
  } 

  export function SendUrl(list){
        
        var data = '';
        if(null !=list){
        if(list.length > 0){
          
          list.forEach(state => {
            if(data == ''){
              data= state.value;
            }else{
              data+=','+state.value;
            }
            
          });
        }
      }

        localStorage.setItem("status", data);  
  }

  export default List;